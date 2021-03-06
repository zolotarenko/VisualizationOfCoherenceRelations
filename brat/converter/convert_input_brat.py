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
    relationsCounter_ID = 1
    entitiesCounter_ID = 1
    argnameCounter = 1

    # Add the text to visualize
    def relation_spans():
        relation_pairs = []
        span_outgoing = []
        span_target = []
        for i in docData["entities"]:
            if i[1] == "Arg1":
                span_outgoing.append(i[0])

            elif i[1] == "Arg2":
                span_target.append(i[0])

        # print(span_outgoing, span_target)
        for x, y in zip(span_outgoing, span_target):
            pair = (x, y)
            relation_pairs.append(pair)

        return relation_pairs

    # SECTION Read internal json-file
    with open(jsoninput, "r") as f:
        input_data = json.load(f)

    for rel in input_data:
        for key1, value1 in rel.items():
            # Get the spans
            if type(value1) == dict:
                for key2, value2 in value1.items():
                    if key2 == 'CharacterSpanList':
                        # Could be: "CharacterSpanList": [[405, 457], [543, 590]] - discont
                        # Or: [] when implicit

                        if value2:
                            entity = ["E" + str(entitiesCounter_ID), key1, value2]
                            docData["entities"] += [entity]
                            entitiesCounter_ID += 1

    # SECTION GET TYPES
    relation_type = []
    for rel in input_data:
        for key1, value1 in rel.items():
            if key1 == "Type":
                relation_type.append(value1)
    # SECTION GET SENSES
    for rel in input_data:
        for key1, value1 in rel.items():
            #  Get the senses for relations
            if key1 == "Sense":
                # Could be a random name but lets keep it a a number
                name = str(relation_type[relationsCounter_ID-1]) + '.' + value1
                relation = ["R" + str(relationsCounter_ID),
                            name, [[str(argnameCounter),
                                    relation_spans()[argnameCounter-1][0]],
                                   [str(argnameCounter+1),
                                    relation_spans()[argnameCounter-1][1]]]]
                # Format: ['R1', 'REL1', [['1', 'T1'], ['2', 'T2']]],
                docData["relations"] += [relation]

                relationsCounter_ID += 1
                argnameCounter += 1

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
            convert(text_file,parsed_file)
        else:
            print("Your file is empty. Try passing another nonempty one and retry.")

if __name__ == '__main__':
    main()
