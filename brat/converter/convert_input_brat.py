# Algorithm
# Current solution: parserout.json ---> convert ---> docData_brat.json ---> load in index.xhtml as variable
# 1. DocData
# - argument&connective spans
# - text
# - relation type&sense
# ////////////////
# var docData = {
#     // Our text of choice
#     text     : "...Some text here...",
#     // The entities entry holds all entity annotations
#     entities : [
#         /* Format: [${ID}, ${TYPE}, [[${START}, ${END}]]]
#             note that range of the offsets are [${START},${END}) */
#         ['T1', 'Arg1', [[11, 30]]],
#         ['T2', 'Arg2', [[35, 49]]],
#         ['T3', 'Connective', [[31, 34]]],
#         ['T4', 'Arg1', [[31, 49]]],
#         ['T5', 'Arg2', [[56, 74]]],
#         ['T6', 'Connective', [[50, 55]]],
#     ],
#     relations : [
#     // Format: [${ID}, ${TYPE}, [[${ARGNAME}, ${TARGET}], [${ARGNAME}, ${TARGET}]]]
#     ['R1', 'Comparison.Concession.Arg2-as-denier', [['1', 'T1'], ['2', 'T2']]],
#     ['R2', 'Expansion.Conjunction', [['3', 'T4'], ['4', 'T5']]]
#     ],
# };
# ////////////////
import codecs
import json
import sys
from collections import OrderedDict
import re
from pathlib import Path


def convert(textinput, jsoninput):
    docData = OrderedDict()

    textinput_oneline = re.sub('\..*', '', textinput) + '.oneline.tok'

    codecs.open(textinput_oneline, 'w').write(
        re.sub('\n', ' ', codecs.open(textinput).read()))

    with open(textinput_oneline) as f:
        text = f.readlines()
        docData["text"] = text[0]

    docData["entities"] = []
    docData["relations"] = []
    relations_counter_id = 1
    entities_counter_id = 1
    argname_counter = 1

    # Add the text to visualize
    # WARNING (Bug 22.3.21) Not working with overlapping arguments - one span used in 2 relations
    def relation_spans():

        relation_pairs = []
        span_outgoing = []
        span_target = []

        for i in docData["entities"]:

            print("Entities of the current relation:")
            print(i)

            if i[1] == "Arg1":
                span_outgoing.append(i[0])

            elif i[1] == "Arg2":
                span_target.append(i[0])

        print("Outgoing and target spans:")
        print(span_outgoing, span_target)

        for x, y in zip(span_outgoing, span_target):
            pair = (x, y)
            relation_pairs.append(pair)

        return relation_pairs

    # SECTION Read internal json-file
    with open(jsoninput, "r") as f:
        input_data = json.load(f)

    # SECTION Build docData["entities"]
    # First level of iteration - every relation in the CoNLL2016 JSON format
    # E.g. ID : 1,2, ... , n
    for rel in input_data:
        # Iterating properties of very relation : key-value pairs in the relation
        # E.g. "ID", "DocID", "Sense" , ...
        for rel_property_key, rel_property_value in rel.items():
            print("rel_property_key, rel_property_value")
            print(rel_property_key, rel_property_value)

            # Arguments and connectives have dict values with needed "CharacterSpanList" in it
            # That's why here is the second iteration:
            # over the key-value pairs of the "Arg1", "Arg2" and "Connective"
            if type(rel_property_value) == dict:
                for entity_key, entity_value in rel_property_value.items():

                    if entity_key == 'CharacterSpanList':
                        # Possible values for "CharacterSpanList":
                        # - [[300, 372]]] - normal case, simple continuous argument/connective
                        # - [[405, 457], [543, 590]] - discontinuous argument/connective
                        # - [] - empty argument/connective for implicit relations or

                        # WARNING Fix of the bug (22.3.21):
                        # the tested document contains empty arguments, which was filtered earlier
                        # and was causing the wrong alignment of the relations
                        # if entity_value:

                        # Create entity and add to the docData["entities"]
                        entity = ["E" + str(entities_counter_id), rel_property_key, entity_value]
                        docData["entities"] += [entity]
                        # Increase the entity counter id for entity enumeration
                        entities_counter_id += 1

    # SECTION GET TYPES
    relation_type = []
    print("Converting types...")
    for rel in input_data:
        for rel_property_key, rel_property_value in rel.items():
            if rel_property_key == "Type":
                relation_type.append(rel_property_value)

    # SECTION GET SENSES
    print("Converting senses...")
    for rel in input_data:
        for rel_property_key, rel_property_value in rel.items():
            #  Get the senses for relations
            if rel_property_key == "Sense":
                # Could be a random name but lets keep it as a number
                name = str(relation_type[relations_counter_id - 1]) + '.' + rel_property_value

                # relation_spans = relation_spans()

                print("Relation name:")
                print(name)
                print("Relation spans:")
                print(relation_spans())

                relation = [
                    "R" + str(relations_counter_id),
                    name,
                    [
                        [str(argname_counter),
                         relation_spans()[argname_counter - 1][0]
                         ],
                        [str(argname_counter + 1),
                         relation_spans()[argname_counter - 1][1]
                         ]
                    ]
                ]

                print("Relation for brat:")
                print(relation)

                # Format: ['R1', 'REL1', [['1', 'T1'], ['2', 'T2']]],
                docData["relations"] += [relation]

                relations_counter_id += 1
                argname_counter += 1

    # SECTION WRITE JSON
    with open(re.sub('\..*', '', jsoninput) + '.visualisation.json', "w") as f:
        json.dump(docData, f)


def main():
    """
    Main function of the program
    """
    if len(sys.argv) != 3:
        print("Usage: python3 {0} text-file file-parsed".format(sys.argv[0]))
        sys.exit(1)

    else:
        text_file = sys.argv[1]
        parsed_file = sys.argv[2]
        data_folder = Path(".")
        file_to_open_path = data_folder / text_file
        # Checking if provided file is empty
        if file_to_open_path.stat().st_size != 0:
            print("Converting file {} ...".format(text_file))
            convert(text_file, parsed_file)
        else:
            print("Your file is empty. Try passing another nonempty one and retry.")


if __name__ == '__main__':
    main()
