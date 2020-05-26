# -*- coding: utf-8 -*-

#!/usr/bin/python3


from spacy import displacy
import json
from nltk import word_tokenize
from bottle import route, run, template


# app = Flask(__name__)
# CORS(app)

parser = None
cc = None
arg = None

# export FLASK_APP=flaskController.py 
# nohup python3 -m flask run &

def getTokenised(sentences):
    tokenised = []
    for sent in sentences:
        tokenised.append(' '.join(word_tokenize(sent)))
    return tokenised
    
def displacy_visual(text):
    
    colors = {"ARG1": "linear-gradient(90deg, #aa9cfc, #fc9ce7)",
              "INT": "linear-gradient(203deg, #e0eed4, #f6ec00, #4e7a27)",
              "CONN": "linear-gradient(203deg, #f6ec00, #ff8647, #e32400)"}
    options = {"ents": ["ARG1", "ARG2", "CONN"], "colors": colors}
    ex = [{"text": text,
           "ents": [{"start": 12, "end": 31, "label": "ARG1"}, {"start": 33, "end": 37, "label": "CONN"}, {"start": 36, "end": 50, "label": "ARG2"}],
           "title": "Sentence 1"}]
    html = displacy.render(ex, style="ent", manual=True, options=options)

#    nlp = spacy.load("de_core_news_sm")
#    doc = nlp(text)
#    html = displacy.render(doc, style="ent")

    return html
    
def loadOutput(file):

    with open(file) as json_data:
        data = json.load(json_data)
        for rel in range(len(data)):
            print('Arg1:', data[rel]['Arg1'])
            print('Arg2:', data[rel]['Arg2'])

    return

# @app.route('/train', methods=['GET'])
# def train():
#
#     starttime = time.time()
#     global parser, cc, arg
#
#     parser = Parser.Parser()
#     #parser.loadEmbeddings(True)
#     parser.loadEmbeddings()
#     cc = ConnectiveClassifier.ConnectiveClassifier()
#     #cc.setGraph() # not needed anymore with old-fashioned RandomForest Classifier
#     #cc.train(parser, True)
#     cc.train(parser)
#     arg = ArgumentExtractor.ArgumentExtractor()
#     arg.setGraph()
#     #arg.train(parser, True)
#     arg.train(parser)
#
#     endtime = time.time()
#
#     return 'Succesfully initialized and trained models, took %s seconds.\n' % (str(endtime - starttime))

# @app.route('/parse', methods=['GET'])
def parse():

#    if not parser or not cc or not arg:
#        return 'Please use the train endpoint first to initialize models.\n'

#    if request.args.get('input') == None:
#        return 'Please provide an input text.\n'

#    sentences = ['Auf Grund der dramatischen Kassenlage in Brandenburg hat sie jetzt eine seit mehr als einem Jahr erarbeitete Kabinettsvorlage überraschend auf Eis gelegt und vorgeschlagen , erst 2003 darüber zu entscheiden .','Überraschend , weil das Finanz- und das Bildungsressort das Lehrerpersonalkonzept gemeinsam entwickelt hatten .','Der Rückzieher der Finanzministerin ist aber verständlich .','Es dürfte derzeit schwer zu vermitteln sein , weshalb ein Ressort pauschal von künftigen Einsparungen ausgenommen werden soll auf Kosten der anderen .','Reiches Ministerkollegen werden mit Argusaugen darüber wachen , dass das Konzept wasserdicht ist .', 'Tatsächlich gibt es noch etliche offene Fragen .','So ist etwa unklar , wer Abfindungen erhalten soll , oder was passiert , wenn zu wenig Lehrer die Angebote des vorzeitigen Ausstiegs nutzen .','Dennoch gibt es zu Reiches Personalpapier eigentlich keine Alternative .','Das Land hat künftig zu wenig Arbeit für zu viele Pädagogen .','Und die Zeit drängt .','Der große Einbruch der Schülerzahlen an den weiterführenden Schulen beginnt bereits im Herbst 2003 .','Die Regierung muss sich entscheiden , und zwar schnell .','Entweder sparen um jeden Preis oder Priorität für die Bildung .','Es regnet Hunde und Katze .','Und was soll ich machen ?','Weil es regnet , bleiben wir zu Hause .','Es regnet , aber wir bleiben zu Hause .', 'Und wie geht es weiter ?']
    
    sentences = ['blablabla. The snow was heavy. But we kept going. Until the sun came back. more blabla.']

#    sentences = [x.strip() for x in request.args.get('input').split('___NEWLINE___')]
    sentences = [x for x in sentences if x] # take out empty sents
#    # pre-tokenize here. Important that this is in line with tokenization when the painting happens below
#
    # print('debugging sentences:', sentences)
    sentences = getTokenised(sentences)
    # print('debugging tokenised sentences:', sentences)
#    runtimeparsermemory = parser.preParse(sentences)
#    #print('runtimeparsermemory:', runtimeparsermemory)
#
#    connectivepositions = cc.run(parser, sentences, runtimeparsermemory)
#    print('debugging connectivepositions:', connectivepositions)
#    #connectivepositions = [(14, [0]), (15, [0]), (16, [3]), (17, [0])]
#    relations = arg.run(parser, sentences, runtimeparsermemory, connectivepositions)
#
#    # the following results in heavy painting (every token its own markup), but otherwise getting the overlapping spans right is a lot of code, and this is for demo purposes only anyway
#    paintedOutput = [x.split() for x in sentences]
#    for rid in relations:
#        conn = relations[rid]['connective']
#        intarg = relations[rid]['intarg']
#        extarg = relations[rid]['extarg']
#        print('rid:', rid)
#        print('\tconn:', conn)
#        print('\tintarg:', intarg)
#        print('\textarg:', extarg)
#
#        for i in conn[1]:
#            paintedOutput[conn[0]][i] = '<connRef id=%s class="badge badge-warning">' % str(rid) + paintedOutput[conn[0]][i] + '</connRef id=%s>' % str(rid)
#        for i in intarg[1]:
#            paintedOutput[intarg[0]][i] = '<intargRef id=%s class="badge badge-success">' % str(rid) + paintedOutput[intarg[0]][i] + '</intargRef id=%s>' % str(rid) # bold face?
#        if extarg:
#            if extarg[1]:
#                for i in extarg[1]:
#                    paintedOutput[extarg[0]][i] = '<extargRef id=%s class="badge badge-primary">' % str(rid) + paintedOutput[extarg[0]][i] + '</extargRef id=%s>' % str(rid) # italics?
#
#    painted = []
#    for sent in paintedOutput:
#        painted.append(' '.join(sent))
#    ret = '<br/>'.join(painted)
#    print('debug raw response:', ret)
    
    html = displacy_visual(sentences[0])
    #     displacyOutput.append(html)

    return html


@route('/hello/<name>')
def index(name):
    # return template('<b>Hello {{name}}</b>!', name=name)
    return template(parse(), name=name)


if __name__ == '__main__':
    file = '/Users/apple/ba_visualization/data/minimal.json'
    loadOutput(file)

# #     port = int(os.environ.get('PORT',63342))
#     port = int(os.environ.get('PORT',8000))

    # app.run(host='0.0.0.0', port=port,debug=True)


    run(host='localhost', port=8080)



