var bratLocation = './brat-v1.3_Crunchy_Frog';

head.js(
// External libraries
bratLocation + '/client/lib/jquery.min.js',
bratLocation + '/client/lib/jquery.svg.min.js',
bratLocation + '/client/lib/jquery.svgdom.min.js',

// brat helper modules
bratLocation + '/client/src/configuration.js',
bratLocation + '/client/src/util.js',
bratLocation + '/client/src/annotation_log.js',
bratLocation + '/client/lib/webfont.js',

// brat modules
bratLocation + '/client/src/dispatcher.js',
bratLocation + '/client/src/url_monitor.js',
bratLocation + '/client/src/visualizer.js'
);

var webFontURLs = [
bratLocation + '/static/fonts/Astloch-Bold.ttf',
bratLocation + '/static/fonts/PT_Sans-Caption-Web-Regular.ttf',
bratLocation + '/static/fonts/Liberation_Sans-Regular.ttf'
];

// Stable, doesn't need to be changed from outside
const collData = {
    entity_types: [ {
    type   : 'Arg1',
    labels : ['Arg1', 'Arg1'],
    bgColor: '#7fa2ff',
    borderColor: 'darken'
    },
    {
    type   : 'Arg2',
    labels : ['Arg2', 'Arg2'],
    bgColor: '#9FF781',
    borderColor: 'darken'
    },
    {
    type   : 'Connective',
    labels : ['Con', 'Con'],
    bgColor: '#FA5858',
    borderColor: 'darken'
    }]
    };

// I
// var docData = {"text": "Es d\u00fcrfte derzeit schwer zu vermitteln sein , weshalb ein Ressort pauschal von k\u00fcnftigen Einsparungen ausgenommen werden soll auf Kosten der anderen . Reiches Ministerkollegen werden mit Argusaugen dar\u00fcber wachen , dass das Konzept wasserdicht ist . Tats\u00e4chlich gibt es noch etliche offene Fragen . So ist etwa unklar , wer Abfindungen erhalten soll , oder was passiert , wenn zu wenig Lehrer die Angebote des vorzeitigen Ausstiegs nutzen . Dennoch gibt es zu Reiches Personalpapier eigentlich keine Alternative . Das Land hat k\u00fcnftig zu wenig Arbeit f\u00fcr zu viele P\u00e4dagogen . Und die Zeit dr\u00e4ngt . Der gro\u00dfe Einbruch der Sch\u00fclerzahlen an den weiterf\u00fchrenden Schulen beginnt bereits im Herbst 2003 . Die Regierung muss sich entscheiden , und zwar schnell . Entweder sparen um jeden Preis oder Priorit\u00e4t f\u00fcr die Bildung .", "entities": [["E1", "Arg1", [[439, 440]]], ["E2", "Arg2", [[357, 438]]], ["E3", "Connective", [[352, 356]]], ["E4", "Arg1", [[439, 440]]], ["E5", "Arg2", [[377, 438]]], ["E6", "Connective", [[372, 376]]], ["E7", "Arg1", [[299, 440]]], ["E8", "Arg2", [[449, 513]]], ["E9", "Connective", [[441, 448]]], ["E10", "Arg1", [[441, 513]]], ["E11", "Arg2", [[580, 597]]], ["E12", "Connective", [[576, 579]]], ["E13", "Arg1", [[765, 786]]], ["E14", "Arg2", [[792, 819]]], ["E15", "Connective", [[756, 764], [787, 791]]], ["E16", "Arg1", [[0, 150]]], ["E17", "Arg2", [[151, 249]]], ["E18", "Arg1", [[151, 249]]], ["E19", "Arg2", [[250, 298]]], ["E20", "Arg1", [[250, 298]]], ["E21", "Arg2", [[299, 440]]], ["E22", "Arg1", [[441, 513]]], ["E23", "Arg2", [[514, 575]]], ["E24", "Arg1", [[514, 575]]], ["E25", "Arg2", [[576, 597]]], ["E26", "Arg1", [[576, 597]]], ["E27", "Arg2", [[598, 698]]], ["E28", "Arg1", [[598, 698]]], ["E29", "Arg2", [[699, 755]]], ["E30", "Arg1", [[699, 755]]], ["E31", "Arg2", [[756, 819]]]], "relations": [["R1", "Explicit.Expansion.Disjunction", [["1", "E1"], ["2", "E2"]]], ["R2", "Explicit.Contingency.Condition.Arg2-as-cond", [["2", "E4"], ["3", "E5"]]], ["R3", "Explicit.Comparison.Concession.Arg2-as-denier", [["3", "E7"], ["4", "E8"]]], ["R4", "Explicit.Expansion.Conjunction", [["4", "E10"], ["5", "E11"]]], ["R5", "Explicit.Expansion.Disjunction", [["5", "E13"], ["6", "E14"]]], ["R6", "Implicit.Contingency.Cause.Reason", [["6", "E16"], ["7", "E17"]]], ["R7", "Implicit.Contingency.Cause.Result", [["7", "E18"], ["8", "E19"]]], ["R8", "Implicit.Contingency.Cause.Reason", [["8", "E20"], ["9", "E21"]]], ["R9", "Implicit.Contingency.Cause.Reason", [["9", "E22"], ["10", "E23"]]], ["R10", "Implicit.Expansion.Level-of-detail.Arg2-as-detail", [["10", "E24"], ["11", "E25"]]], ["R11", "Implicit.Contingency.Cause.Reason", [["11", "E26"], ["12", "E27"]]], ["R12", "Implicit.Contingency.Cause.Result", [["12", "E28"], ["13", "E29"]]], ["R13", "Implicit.Expansion.Conjunction", [["13", "E30"], ["14", "E31"]]]]};

// II
var docData = {"text": "  Das B\u00fcchergeld   Die Litanei ist nicht neu : Eltern beschweren sich \u00fcber veraltete Schulb\u00fccher , Kommunen jammern \u00fcber leere Kassen und Schulbuchverlage beklagen Umsatzeinbr\u00fcche . Trommeln geh\u00f6rt halt zum Gesch\u00e4ft . Doch unterm Strich stehen Brandenburgs Schulen ganz gut da . Zum einen wurden nach der Wende fast alle Schulbuchbest\u00e4nde ausgetauscht , zum anderen m\u00fcssen sich m\u00e4rkische Eltern am Buchkauf beteiligen . Daf\u00fcr gibt es sogar Lob von den Schulbuchverlagen . Denn in vielen alten Bundesl\u00e4ndern gilt noch immer die Lernmittelfreiheit : Eltern m\u00fcssen nichts zuzahlen . Der Preis daf\u00fcr ist hoch - gerade dort wird oft mit v\u00f6llig veraltetem Material gearbeitet . Doch auch Brandenburg muss aufpassen . Wenn immer mehr Kommunen finanziell ausbluten , wird die regelm\u00e4\u00dfige Schulbucherneuerung zur Illusion . Deshalb ist auch die Landesregierung gefragt : Es kann nicht sein , dass f\u00fcr teure Modellprojekte wie Schnelll\u00e4uferklassen oder Ganztagsschulen Geld locker gemacht , aber an der Grundausstattung gespart wird .   ",
"entities": [["E1", "Arg1", [[182, 217]]], ["E2", "Arg2", [[223, 278]]], ["E3", "Connective", [[218, 222]]], ["E4", "Arg1", [[218, 278]]], ["E5", "Arg2", [[289, 419]]], ["E6", "Connective", [[279, 288]]], ["E7", "Arg1", [[279, 353]]], ["E8", "Arg2", [[366, 419]]], ["E9", "Connective", [[354, 365]]], ["E10", "Arg1", [[420, 471]]], ["E11", "Arg2", [[477, 579]]], ["E12", "Connective", [[472, 476]]], ["E13", "Arg1", [[580, 671]]], ["E14", "Arg2", [[677, 693]]], ["E15", "Connective", [[672, 676]]], ["E16", "Arg1", [[759, 814]]], ["E17", "Arg2", [[716, 758]]], ["E18", "Connective", [[711, 715]]], ["E19", "Arg1", [[711, 814]]], ["E20", "Arg2", [[823, 861]]], ["E21", "Connective", [[815, 822]]], ["E22", "Arg1", [[815, 980], [1018, 1024]]], ["E23", "Arg2", [[986, 1017]]], ["E24", "Connective", [[981, 985]]], ["E25", "Arg1", [[0, 181]]], ["E26", "Arg2", [[182, 217]]], ["E27", "Arg1", [[279, 419]]], ["E28", "Arg2", [[420, 471]]], ["E29", "Arg1", [[472, 579]]], ["E30", "Arg2", [[580, 671]]], ["E31", "Arg1", [[672, 710]]], ["E32", "Arg2", [[711, 814]]], ["E33", "Arg1", [[815, 1024]]], ["E34", "Arg2", [[1025, 1026]]]],
"relations": [["R1", "Explicit.Comparison.Concession.Arg2-as-denier", [["1", "E1"], ["2", "E2"]]], ["R2", "Explicit.Expansion.Conjunction", [["2", "E4"], ["3", "E5"]]], ["R3", "Explicit.Expansion.Conjunction", [["3", "E7"], ["4", "E8"]]], ["R4", "Explicit.Contingency.Cause.Reason", [["4", "E10"], ["5", "E11"]]], ["R5", "Explicit.Comparison.Concession.Arg2-as-denier", [["5", "E13"], ["6", "E14"]]], ["R6", "Explicit.Contingency.Condition.Arg2-as-cond", [["6", "E16"], ["7", "E17"]]], ["R7", "Explicit.Contingency.Cause.Result", [["7", "E19"], ["8", "E20"]]], ["R8", "Explicit.Comparison.Concession.Arg2-as-denier", [["8", "E22"], ["9", "E23"]]], ["R9", "Implicit.Contingency.Cause.Reason", [["9", "E25"], ["10", "E26"]]], ["R10", "Implicit.Expansion.Conjunction", [["10", "E27"], ["11", "E28"]]], ["R11", "Implicit.Expansion.Conjunction", [["11", "E29"], ["12", "E30"]]], ["R12", "Implicit.Contingency.Cause.Reason", [["12", "E31"], ["13", "E32"]]], ["R13", "Implicit.Expansion.Level-of-detail.Arg1-as-detail", [["13", "E33"], ["14", "E34"]]]]};
//
// III
// var docData = {"text": "  Uneinsichtig  Im Streit um die fragw\u00fcrdige Spendenpraxis der stadteigenen Kommunalen Wohnungsbaugesellschaft ( KWR ) schlugen gestern Abend im Stadtparlament die Wogen erneut hoch .  Die eigentlich sachlich zu f\u00fchrende Auseinandersetzung um die Parteispenden von KWR-Chef Richter an B\u00fcrgermeister L\u00fcnsers Politverein Pro Rathenow wird zunehmend emotionaler .  Knapp einen Monat nach Ausbruch der Rathenower Parteispendenaff\u00e4re scheint sich nunmehr aber wenigstens der Gedanke durchzusetzen , die Spenden als moralisch nicht akzeptabel zu werten .  Nachdem nach langem Z\u00f6gern auch die CDU-Fraktion sich dieser Auffassung anschloss und B\u00fcrgermeister L\u00fcnser damit von der Fahne wich , hat das Umdenken nun auch in Teilen von Pro Rathenow eingesetzt .  Als erster seiner Fraktion sprach gestern der Abgeordnete Otto Timm von einem Fehler .  W\u00e4hrend Timm mit diesem Verhalten Pro Rathenow helfen d\u00fcrfte , nimmt das Verhalten von B\u00fcrgermeister L\u00fcnser langsam groteske Z\u00fcge an .  Als Legitimation f\u00fcr die Spenden will er nun Belege vorlegen , dass in Potsdam kommunale Betriebe jahrelang Parteien sponserten .  F\u00fcr Einsicht in Unrecht spricht auch das erneut nicht .    ",
//     "entities": [["E1", "Arg1", [[0, 183]]], ["E2", "Arg2", [[184, 360]]], ["E3", "Arg1", [[184, 360]]], ["E4", "Arg2", [[360, 548]]], ["E5", "Arg1", [[360, 548]]], ["E6", "Arg2", [[549, 749]]], ["E7", "Arg1", [[549, 749]]], ["E8", "Arg2", [[750, 837]]], ["E9", "Arg1", [[750, 837]]], ["E10", "Arg2", [[838, 973]]], ["E11", "Arg1", [[838, 973]]], ["E12", "Arg2", [[974, 1104]]], ["E13", "Arg1", [[974, 1104]]], ["E14", "Arg2", [[1105, 1161]]], ["E15", "Arg1", [[1105, 1161]]], ["E16", "Arg2", [[1162, 1165]]]],
//     "relations": [["R1", "Implicit.Expansion.Instantiation.Arg2-as-instance", [["1", "E1"], ["2", "E2"]]], ["R2", "Implicit.Expansion.Instantiation.Arg2-as-instance", [["2", "E3"], ["3", "E4"]]], ["R3", "Implicit.Expansion.Level-of-detail.Arg2-as-detail", [["3", "E5"], ["4", "E6"]]], ["R4", "Implicit.Expansion.Conjunction", [["4", "E7"], ["5", "E8"]]], ["R5", "Implicit.Expansion.Conjunction", [["5", "E9"], ["6", "E10"]]], ["R6", "Implicit.Expansion.Conjunction", [["6", "E11"], ["7", "E12"]]], ["R7", "Implicit.Comparison.Concession.Arg2-as-denier", [["7", "E13"], ["8", "E14"]]], ["R8", "Implicit.Expansion.Level-of-detail.Arg2-as-detail", [["8", "E15"], ["9", "E16"]]]]};

// IV
// var docData = {"text": "  Wichtige Botschaft  Lange hat sich die Europ\u00e4ische Zentralbank gestr\u00e4ubt .  Doch gestern hat sie auf die schwache Konjunktur mit einer kr\u00e4ftigen Leitzinssenkung um 0,5 Prozentpunkte auf 3,25 Prozent reagiert .  Auch wenn sich EZB-Chef Wim Duisenberg weiter weigert , das b\u00f6se R-Wort \" Rezession \" in den Mund zu nehmen - dass die Weltwirtschaft in eine schwere Krise rutscht , bestreitet niemand mehr .  Fraglich ist aber , ob niedrige Zinsen und damit billigeres Geld f\u00fcr mehr Investitionen und Konsum und so f\u00fcr den erhofften raschen Aufschwung sorgen .  Die Verunsicherung von Verbrauchern und Unternehmern ist seit dem 11. September weniger \u00f6konomisch als psychologisch begr\u00fcndet .  Au\u00dferdem wirkt Geldpolitik erfahrungsgem\u00e4\u00df erst nach einem Jahr .  Die wichtigste Botschaft der Zinsentscheidung ist deshalb eine andere :  Die W\u00e4hrungsh\u00fcter haben ihren Teil getan , jetzt k\u00f6nnen die Politiker nicht mehr die Verantwortung abschieben , sondern m\u00fcssen selbst mit ihren Mitteln aktiv werden .    ",
//     "entities": [["E1", "Arg1", [[0, 76]]], ["E2", "Arg2", [[77, 211]]], ["E3", "Arg1", [[77, 211]]], ["E4", "Arg2", [[212, 404]]], ["E5", "Arg1", [[212, 404]]], ["E6", "Arg2", [[405, 557]]], ["E7", "Arg1", [[405, 557]]], ["E8", "Arg2", [[558, 628]]], ["E9", "Arg1", [[558, 628]]], ["E10", "Arg2", [[629, 687]]], ["E11", "Arg1", [[629, 687]]], ["E12", "Arg2", [[688, 754]]], ["E13", "Arg1", [[688, 754]]], ["E14", "Arg2", [[755, 995]]], ["E15", "Arg1", [[755, 995]]], ["E16", "Arg2", [[996, 999]]]],
//     "relations": [["R1", "Implicit.Contingency.Cause.Reason", [["1", "E1"], ["2", "E2"]]], ["R2", "Implicit.Contingency.Cause.Result", [["2", "E3"], ["3", "E4"]]], ["R3", "Implicit.Comparison.Concession.Arg2-as-denier", [["3", "E5"], ["4", "E6"]]], ["R4", "Implicit.Contingency.Cause.Result", [["4", "E7"], ["5", "E8"]]], ["R5", "Implicit.Contingency.Cause.Reason", [["5", "E9"], ["6", "E10"]]], ["R6", "Implicit.Contingency.Cause.Result", [["6", "E11"], ["7", "E12"]]], ["R7", "Implicit.Expansion.Conjunction", [["7", "E13"], ["8", "E14"]]], ["R8", "Implicit.Expansion.Level-of-detail.Arg2-as-detail", [["8", "E15"], ["9", "E16"]]]]};
// V
// var docData = {"text": "  Wichtige Botschaft  Lange hat sich die Europ\u00e4ische Zentralbank gestr\u00e4ubt .  Doch gestern hat sie auf die schwache Konjunktur mit einer kr\u00e4ftigen Leitzinssenkung um 0,5 Prozentpunkte auf 3,25 Prozent reagiert .  Auch wenn sich EZB-Chef Wim Duisenberg weiter weigert , das b\u00f6se R-Wort \" Rezession \" in den Mund zu nehmen - dass die Weltwirtschaft in eine schwere Krise rutscht , bestreitet niemand mehr .  Fraglich ist aber , ob niedrige Zinsen und damit billigeres Geld f\u00fcr mehr Investitionen und Konsum und so f\u00fcr den erhofften raschen Aufschwung sorgen .  Die Verunsicherung von Verbrauchern und Unternehmern ist seit dem 11. September weniger \u00f6konomisch als psychologisch begr\u00fcndet .  Au\u00dferdem wirkt Geldpolitik erfahrungsgem\u00e4\u00df erst nach einem Jahr .  Die wichtigste Botschaft der Zinsentscheidung ist deshalb eine andere :  Die W\u00e4hrungsh\u00fcter haben ihren Teil getan , jetzt k\u00f6nnen die Politiker nicht mehr die Verantwortung abschieben , sondern m\u00fcssen selbst mit ihren Mitteln aktiv werden .    ", "entities": [["E1", "Arg1", [[0, 76]]], ["E2", "Arg2", [[77, 211]]], ["E3", "Arg1", [[77, 211]]], ["E4", "Arg2", [[212, 404]]], ["E5", "Arg1", [[212, 404]]], ["E6", "Arg2", [[405, 557]]], ["E7", "Arg1", [[405, 557]]], ["E8", "Arg2", [[558, 628]]], ["E9", "Arg1", [[558, 628]]], ["E10", "Arg2", [[629, 687]]], ["E11", "Arg1", [[629, 687]]], ["E12", "Arg2", [[688, 754]]], ["E13", "Arg1", [[688, 754]]], ["E14", "Arg2", [[755, 995]]], ["E15", "Arg1", [[755, 995]]], ["E16", "Arg2", [[996, 999]]]], "relations": [["R1", "Implicit.Contingency.Cause.Reason", [["1", "E1"], ["2", "E2"]]], ["R2", "Implicit.Contingency.Cause.Result", [["2", "E3"], ["3", "E4"]]], ["R3", "Implicit.Comparison.Concession.Arg2-as-denier", [["3", "E5"], ["4", "E6"]]], ["R4", "Implicit.Contingency.Cause.Result", [["4", "E7"], ["5", "E8"]]], ["R5", "Implicit.Contingency.Cause.Reason", [["5", "E9"], ["6", "E10"]]], ["R6", "Implicit.Contingency.Cause.Result", [["6", "E11"], ["7", "E12"]]], ["R7", "Implicit.Expansion.Conjunction", [["7", "E13"], ["8", "E14"]]], ["R8", "Implicit.Expansion.Level-of-detail.Arg2-as-detail", [["8", "E15"], ["9", "E16"]]]]};

// Minimal example for thesis
// var docData = {"text" : "  Das B\u00fcchergeld   Die Litanei ist nicht neu : Eltern beschweren sich \u00fcber veraltete Schulb\u00fccher , Kommunen jammern \u00fcber leere Kassen und Schulbuchverlage beklagen Umsatzeinbr\u00fcche . Trommeln geh\u00f6rt halt zum Gesch\u00e4ft . Doch unterm Strich stehen Brandenburgs Schulen ganz gut da . Doch unterm Strich stehen Brandenburgs Schulen ganz gut da . Zum einen wurden nach der Wende fast alle Schulbuchbest\u00e4nde ausgetauscht , zum anderen m\u00fcssen sich m\u00e4rkische Eltern am Buchkauf beteiligen . ",
//                 "entities" : [["E1", "Arg1", [[182, 217]]],
//                                 ["E2", "Arg2", [[223, 278]]],
//                                 ["E3", "Connective", [[218, 222]]]],
//                                 // ["E4", "Arg1", [[218, 278]]],
//                                 // ["E5", "Arg2", [[289, 419]]]],
//                 "relations": [["R1", "Explicit.Comparison.Concession.Arg2-as-denier",
//                                 [["1", "E1"], ["2", "E2"]]]
//                             // ["R2", "Explicit.Expansion.Conjunction", [["2", "E4"], ["3", "E5"]]]
//                 ]};


head.ready(function() {

var status = $('#status');
var liveDispatcher = Util.embed('anno',
$.extend({'collection': null}, collData),
$.extend({}, docData), webFontURLs);

var renderError = function() {
status.css({'border': '2px solid black'});
};

liveDispatcher.on('renderError: Fatal', renderError);

// Get array of checked relations and delete them from the docJSON input
// inputArray = {entities OR relations}
function deleteFromDocJSON(checksArray, inputArray) {
for (let value of Object.values(checksArray)) {
for (let value2 of Object.values(inputArray)) {
if (value[0] === value2[0]) {
inputArray.splice(inputArray.indexOf(value2), 1);
}
}
}
}

function getCheckedCheckboxesFor(checkboxName) {
var checkboxes = document.querySelectorAll('input[name="' + checkboxName + '"]:checked'), ids = [];
Array.prototype.forEach.call(checkboxes, function(el) {
ids.push(el.nextElementSibling.textContent);
});
return ids;
}

var docInputHandler = function(event) {
var docJSON = {"text": docData.text, "entities": [], "relations": []};
showLoader();

// SHOW
if (this.checked){

// IMPLICIT OR EXPLICIT CHECKED
if ($('#explicit').prop("checked") || $('#implicit').prop("checked")) {
// IF NONE OF THE SENSES CHECKED - WE JUST HAVE TYPES
// NO FILTERING NEEDED
if (!($('#temporal').prop("checked") === true
|| $('#contingency').prop("checked") === true
|| $('#comparison').prop("checked") === true
|| $('#expansion').prop("checked") === true)) {

var checks_types = pick_current_check(event.data.name, [], []);

docJSON.relations = (docJSON.relations.concat(checks_types.relations));
docJSON.entities = (docJSON.entities.concat(checks_types.entities));
docJSON.text = docData.text;

if (docJSON.relations.length === 0) {
    window.alert("No relations of selected type found in this document");
}

console.log("JUST TYPES CHECKED", docJSON);

// TYPES AND SENSES MIXED - FILTERING NEEDED
} else {
var types = getCheckedCheckboxesFor('types');
var senses = getCheckedCheckboxesFor('senses');
var checks_mixed =  pick_current_check(event.data.name, types, senses);

docJSON.text = docData.text;

if (senses.length > 1) {

console.log(senses);
docJSON.relations = (docJSON.relations.concat(checks_mixed.relations));
docJSON.entities = (docJSON.entities.concat(checks_mixed.entities));
docJSON.text = docData.text;
}

else {
docJSON.relations = checks_mixed.relations;
docJSON.entities = checks_mixed.entities;
docJSON.text = docData.text;
}

console.log("SENSES + TYPES CHECKED", docJSON);
}

// SENSES OR NONE
} else {
if ($('#temporal').prop("checked") === true
|| $('#contingency').prop("checked") === true
|| $('#comparison').prop("checked") === true
|| $('#expansion').prop("checked") === true) {

var checks_senses =  pick_current_check(event.data.name, [], []);

docJSON.relations = (docJSON.relations.concat(checks_senses.relations));
docJSON.entities = (docJSON.entities.concat(checks_senses.entities));
docJSON.text = docData.text;

if (docJSON.relations.length === 0) {
    window.alert("No relations of selected sense found in this document");
}
console.log("JUST SENSES CHECKED", docJSON);

}
else {
docJSON.relations = docData.relations;
docJSON.entities = docData.entities;
docJSON.text = docData.text;
console.log("NOTHING CHECKED", docJSON);
}
}
}

// HIDE
else{
docJSON.text = docData.text;
var checks_delete =  pick_current_check(event.data.name, [], []);
console.log("To delete: ", checks_delete);
deleteFromDocJSON(checks_delete.relations, docJSON.relations);
deleteFromDocJSON(checks_delete.entities, docJSON.entities);

console.log("After unchecking: ", docJSON)
}

try {
status.css({'border': '2px solid green'});
} catch (e) {
console.error('JSON parser went down with:', e);
status.css({'border': '2px solid red'});
return;
}
try {
    liveDispatcher.post('requestRenderData', [$.extend({}, docJSON)]);
    status.css({'border': '2px inset'});
} catch(e) {
console.error('requestRenderData went down with:', e);
status.css({'border': '2px solid blue'});
}
showPage();

};
var docJSON = {"text": docData.text, "entities": [], "relations": []};
liveDispatcher.post('requestRenderData', [$.extend({}, docJSON)]);
var listenTo = 'change';
$('#explicit').bind(listenTo, {name: "Explicit"}, docInputHandler);
$('#implicit').bind(listenTo, {name: "Implicit"}, docInputHandler);

$('#temporal').bind(listenTo, {name: "Temporal"}, docInputHandler);
$('#contingency').bind(listenTo, {name: "Contingency"}, docInputHandler);
$('#comparison').bind(listenTo, {name: "Comparison"}, docInputHandler);
$('#expansion').bind(listenTo, {name: "Expansion"}, docInputHandler);

});

// console.log(docData.text.length);

// var mydocInput = $('#myDocComplete');
// mydocJSON = JSON.stringify(docData.text, undefined, '    ');
// var packJSON = function(s) {
// 	// replace any space with ' ' in non-nested curly brackets
//     s = s.replace(/(\{[^\{\}\[\]]*\})/g,
//     	function(a, b) { return b.replace(/\s+/g, ' '); });
//         // replace any space with ' ' in [] up to nesting depth 1
//     s = s.replace(/(\[(?:[^\[\]\{\}]|\[[^\[\]\{\}]*\])*\])/g,
//     	function(a, b) { return b.replace(/\s+/g, ' '); });
//     return s
// };
// mydocInput.text(packJSON(mydocJSON));


function pick_current_check(id, types_selected, senses_selected){
// alert(id + " is " + checked);
var current_check = {"relations" : [], "entities" : []};
var relations_counter = 0;
for (let value of Object.values(docData.relations)) {
    if (value !== undefined) {
    // console.log(value[0], value[1]);
    //
    var sense = value[1].split(".")[1];
    var type = value[1].split(".")[0];

    // SECTION TYPES
    if (type === id) {
    if (senses_selected.length > 0) {
    console.log("FILTERING TYPES");
    for (let sense_selected of senses_selected) {
    if (sense_selected === sense) {
    console.log("Filtered value: ", value);
    var relation_type_number = value[0];
    }
    }
    }

    else {

    relation_type_number = Object.values(docData.relations[relations_counter])[0];

    }

    if (docData.relations[relations_counter].indexOf(relation_type_number) >= 0) {
    const index = docData.relations.indexOf(value);

    // SECTION TYPES: ENTITIES (ARGS AND CONNECTIVES)
    //  Get entities for selected type relation
    for (let arg of docData.relations[index][2]) {
    for (let value_ent of Object.values(docData.entities)) {
    // console.log("Ents value:", value);
    // value: ["E32", "Arg2",[x,y]]
    // console.log(docData.text.slice(value_ent[2][0], value_ent[2][1]));
    var entity_chunk = value_ent[2][0];
    var entity_text = docData.text.slice(entity_chunk[0],entity_chunk[1]);
    // console.log(entity_chunk, entity_text.length);

    // Check if the argument contains characters other than white spaces
    if (/\S/.test(entity_text)) {
    // SECTION TYPES: ARGS
    if (arg[1] === value_ent[0]) {
    // Push entity for the selected sense
    current_check.entities.push(value_ent);
    }

    }
    else{

    console.log("Chunk with no characters: ", entity_chunk, entity_text);

    }

    // SECTION TYPES: CONNECTIVES
    var next_entity = "E" + String(Number(arg[1].slice(1)) + 1);

    if (next_entity !== undefined ) {
    // Checking if the next entity is a connective
    // console.log("Next entity: ", next_entity, value[1]);
    if (value_ent[1] === "Connective"
    && current_check.entities.includes(value_ent) === false
    && next_entity === value_ent[0]) {
    // console.log("We have a connective next", value);
    current_check.entities.push(value_ent)

    }
    }
    }
    }
    // Push relation of selected sense
    current_check.relations.push(docData.relations[index]);
    }
    }

    // SECTION SENSES
    if (sense === id) {
    // Check if some types are also selected
    if (types_selected.length > 0) {
    console.log("FILTERING SENSES");
    for (let type_selected of types_selected) {
    if (type_selected === type) {
    console.log("Filtered value: ", value);
    var relation_sense_number = value[0];
    }
    }
    }

    else {

    relation_sense_number = Object.values(docData.relations[relations_counter])[0];
    }

    // Get the needed relation
    if (docData.relations[relations_counter].indexOf(relation_sense_number) >= 0) {
    const index = docData.relations.indexOf(value);

    // SECTION SENSES: ENTITIES (ARGS AND CONNECTIVES)
    for (let arg of docData.relations[index][2]) {
    for (let value_ent_sense of Object.values(docData.entities)) {

    entity_chunk = value_ent_sense[2][0];
    entity_text = docData.text.slice(entity_chunk[0],entity_chunk[1]);

    // Check if the argument contains characters other than white spaces
    if (/\S/.test(entity_text)) {

    // SECTION SENSES: ARGS
    if (arg[1] === value_ent_sense[0]) {
    // Push entity for the selected sense
    current_check.entities.push(value_ent_sense)
    }

    }
    else{
    console.log("Chunk with no characters: ", entity_chunk, entity_text);

    }

    // SECTION SENSES: CONNECTIVES
    next_entity = "E" + String(Number(arg[1].slice(1))+1);
    if (next_entity !== undefined ) {
    // value[0] -
    // value[1] - Arg1/Arg1/Connective
    if (value_ent_sense[1] === "Connective"
    && current_check.entities.includes(value_ent_sense) === false
    && next_entity === value_ent_sense[0]) {
    // console.log("We have a connective next", value);
    current_check.entities.push(value_ent_sense)
    }
    }
    }
    }
    // Push relation of selected sense
    current_check.relations.push(docData.relations[index]);
    }
    }
    relations_counter += 1
    }
    }

    return current_check;
}


function showLoader() {
    document.getElementById("loader").style.display = "block";
    document.getElementById("myDiv").style.display = "none";
}

function myFunction() {
    var x = document.getElementById("myDIV");
    if (x.style.display === "none") {
    x.style.display = "block";
    } else {
    x.style.display = "none";
}
}

///////////////////////////////////////////////////
///////////////// LOADER //////////////////////////
///////////////////////////////////////////////////

var myVar;
function Loader() {
myVar = setTimeout(showPage, 4500);
}

function showPage() {
document.getElementById("loader").style.display = "none";
document.getElementById("myDiv").style.display = "block";
}