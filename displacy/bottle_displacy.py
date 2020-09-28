from bottle import route, run, template
import spacy
from spacy import displacy
nlp = spacy.load("de_core_news_sm")


def displacy_visual_ents():
    colors = {"ARG1": "linear-gradient(90deg, #aa9cfc, #fc9ce7)",
              "INT": "linear-gradient(203deg, #e0eed4, #f6ec00, #4e7a27)",
              "CONN": "linear-gradient(203deg, #f6ec00, #ff8647, #e32400)"}
    options = {"ents": ["ARG1", "ARG2", "CONN"], "colors": colors}
    ent_input = [{"text": "  Das B\u00fcchergeld   Die Litanei ist nicht neu : Eltern beschweren sich \u00fcber veraltete Schulb\u00fccher , Kommunen jammern \u00fcber leere Kassen und Schulbuchverlage beklagen Umsatzeinbr\u00fcche . Trommeln geh\u00f6rt halt zum Gesch\u00e4ft . Doch unterm Strich stehen Brandenburgs Schulen ganz gut da . Doch unterm Strich stehen Brandenburgs Schulen ganz gut da . Zum einen wurden nach der Wende fast alle Schulbuchbest\u00e4nde ausgetauscht , zum anderen m\u00fcssen sich m\u00e4rkische Eltern am Buchkauf beteiligen . ",
           "ents": [{"start": 182, "end": 217, "label": "ARG1"},
                    {"start": 218, "end": 222, "label": "CONN"},
                    {"start": 223, "end": 278, "label": "ARG2"}],
           "title": "Sentence 1"}]
    html = displacy.render(ent_input, style="ent", manual=True, options=options)

    # Export the image here
    # doc = nlp("Trommeln gehört halt zum Geschäft . Doch unterm Strich stehen Brandenburgs Schulen ganz gut da .")
    # svg = displacy.render(doc, style="dep")
    # output_path = Path("/Users/apple/ba_visualization/displacy/images/sentence.svg")
    # output_path.open("w", encoding="utf-8").write(svg)

    return html

def displacy_visual_deps():

    options = {"offset_x": 350, "distance": 350}
    dep_input = {
        "words": [
            {"text": "Span1", "tag": "ARG1"},
            {"text": "Connective", "tag": "CONN"},
            {"text": "Span2", "tag": "ARG2"},
            # {"text": "sentence", "tag": "NN"}
        ],
        "arcs": [
            {"start": 0, "end": 2, "label": "Relation", "dir": "left"},
            # {"start": 2, "end": 3, "label": "CONN", "dir": "r"},
            # {"start": 1, "end": 3, "label": "attr", "dir": "right"}
        ]
    }
    html = displacy.render(dep_input, style="dep", manual=True, page=True, options=options)

    return html


@route('/displacy/')
def index():
    """Home page"""

#     info = {'title': 'Welcome Home!',
#             'content': displacy_visual_ents()
#             }
#
#     return template('simple.tpl', info)

    return template(displacy_visual_ents())

run(host='localhost', port=8080)
