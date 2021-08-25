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
var collData = {
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


function getDocText() {

    var searchText;
    searchText = document.getElementById("searchText").value;
    document.getElementById("anno").innerHTML = searchText;

  return searchText;

}

async function getDocDataResponse(text){
    var requestOptions = {
        method: 'POST',
        redirect: 'follow',
      };

    const url = "http://localhost:5500/parse?viz=true&input="+text;

    return await fetch(url, requestOptions)
        .then(response => response.json())
        .catch(error => alert('error: '+error));
    }

async function getDocData(text){
    var resp =  await getDocDataResponse(text);
    console.log("response before parse", resp);
    console.log("response type before parse", typeof(resp));
    // resp = JSON.parse(resp);
    // console.log("response after parse", resp);

    var dataOut = {};
    dataOut.text =  resp.text;
    dataOut.relations = resp.relations;
    dataOut.entities = check_response(resp.entities);
    console.log("response type:",typeof(resp.entities));
    console.log("new entities", dataOut.entities);
    console.log("Out: ", dataOut);
    console.log("Out type: ", typeof(dataOut));

    return dataOut;
}

function check_response(chunk){
    var new_chunk = [];

    for (var c of chunk){
        // console.log("c0", c[0]);
        // console.log("c1", c[1]);
        // console.log("c2", c[2]);

        if (c[2].length !== 0){
            // console.log("c", c);
            new_chunk.push(c)
        }
    }

    // console.log("new chunk", new_chunk);
    // console.log("typeof chunk", typeof(chunk));

    return new_chunk;
}

// var submit = document.getElementById('searchBtn').addEventListener('click', getDocDataVisualization());

function getDocDataVisualization() {

    var docText = getDocText();
    console.log("text: ", docText);
    // docData  = document.getElementById('searchBtn').addEventListener('click', getDocData(docText));

    var docData = getDocData(docText);
    console.log("data: ", docData);
    console.log("collection data: " , collData);

    var status = $('#status');
    var liveDispatcher = Util.embed(
        'anno',
        $.extend({'collection': null}, collData),
        $.extend({}, docData),
        webFontURLs
    );

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

    // Get the names of checkboxes
    function getCheckedCheckboxesFor(checkboxName) {

        var checkboxes = document.querySelectorAll('input[name="' + checkboxName + '"]:checked'), ids = [];
        Array.prototype.forEach.call(checkboxes, function(el) {
            ids.push(el.nextElementSibling.textContent);
        });

        return ids;
    }

    async function pick_current_check(id, types_selected, senses_selected) {
        // alert(id + " is " + checked);
        // docData = await getDocData(docText);
        console.log('docData in pick current check: ', docData);
        var current_check = {"relations": [], "entities": []};
        var relations_counter = 0;
        var docDataCurrentCheck = await docData;

        for (let value of Object.values(docDataCurrentCheck.relations)) {
            if (value !== undefined) {
                // console.log(value[0], value[1]);

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
                    } else {

                        relation_type_number = Object.values(docDataCurrentCheck.relations[relations_counter])[0];

                    }

                    if (docDataCurrentCheck.relations[relations_counter].indexOf(relation_type_number) >= 0) {
                        const index = docDataCurrentCheck.relations.indexOf(value);

                        // SECTION TYPES: ENTITIES (ARGS AND CONNECTIVES)
                        //  Get entities for selected type relation
                        for (let arg of docDataCurrentCheck.relations[index][2]) {
                            for (let value_ent of Object.values(docDataCurrentCheck.entities)) {
                                // console.log("Ents value:", value);
                                // value: ["E32", "Arg2",[x,y]]
                                // console.log(docData.text.slice(value_ent[2][0], value_ent[2][1]));
                                var entity_chunk = value_ent[2][0];
                                var entity_text = docDataCurrentCheck.text.slice(entity_chunk[0], entity_chunk[1]);
                                // console.log(entity_chunk, entity_text.length);

                                // Check if the argument contains characters other than white spaces
                                if (/\S/.test(entity_text)) {
                                    // SECTION TYPES: ARGS
                                    if (arg[1] === value_ent[0]) {
                                        // Push entity for the selected sense
                                        current_check.entities.push(value_ent);
                                    }

                                } else {

                                    console.log("Chunk with no characters: ", entity_chunk, entity_text);

                                }

                                // SECTION TYPES: CONNECTIVES
                                var next_entity = "E" + String(Number(arg[1].slice(1)) + 1);

                                if (next_entity !== undefined) {
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
                        current_check.relations.push(docDataCurrentCheck.relations[index]);
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
                    } else {

                        relation_sense_number = Object.values(docDataCurrentCheck.relations[relations_counter])[0];
                    }

                    // Get the needed relation
                    if (docDataCurrentCheck.relations[relations_counter].indexOf(relation_sense_number) >= 0) {
                        const index = docDataCurrentCheck.relations.indexOf(value);

                        // SECTION SENSES: ENTITIES (ARGS AND CONNECTIVES)
                        for (let arg of docDataCurrentCheck.relations[index][2]) {
                            for (let value_ent_sense of Object.values(docDataCurrentCheck.entities)) {

                                entity_chunk = value_ent_sense[2][0];
                                entity_text = docDataCurrentCheck.text.slice(entity_chunk[0], entity_chunk[1]);

                                // Check if the argument contains characters other than white spaces
                                if (/\S/.test(entity_text)) {

                                    // SECTION SENSES: ARGS
                                    if (arg[1] === value_ent_sense[0]) {
                                        // Push entity for the selected sense
                                        current_check.entities.push(value_ent_sense)
                                    }

                                } else {
                                    console.log("Chunk with no characters: ", entity_chunk, entity_text);
                                }

                                // SECTION SENSES: CONNECTIVES
                                next_entity = "E" + String(Number(arg[1].slice(1)) + 1);
                                if (next_entity !== undefined) {
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
                        current_check.relations.push(docDataCurrentCheck.relations[index]);
                    }
                }
                relations_counter += 1

            } else {

                alert("No relations");
            }

        }

        return current_check;
    }


    var docInputHandler = async function(event) {

        var docJSON = {"text": docText, "entities": [], "relations": []};
        // var docJSON = {"text": docData.text, "entities": [], "relations": []};

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

                    var checks_types = await pick_current_check(event.data.name,
                                                    [],
                                                    []);

                    console.log("check types:", checks_types);

                    docJSON.relations = (docJSON.relations.concat(checks_types.relations));
                    docJSON.entities = (docJSON.entities.concat(checks_types.entities));
                    // docJSON.text = docData.text;
                    docJSON.text = docText;

                    if (docJSON.relations.length === 0) {

                        window.alert("No relations of selected type found in this document");
                    }

                    console.log("JUST TYPES CHECKED", docJSON);

                // TYPES AND SENSES MIXED - FILTERING NEEDED
                } else {
                    var types = await getCheckedCheckboxesFor('types');
                    var senses = await getCheckedCheckboxesFor('senses');
                    var checks_mixed = await pick_current_check(event.data.name, types, senses);

                    // docJSON.text = docData.text;
                    docJSON.text = docText;

                    if (senses.length > 1) {

                    console.log(senses);
                    docJSON.relations = (docJSON.relations.concat(checks_mixed.relations));
                    docJSON.entities = (docJSON.entities.concat(checks_mixed.entities));
                    docJSON.text = docData.text;

                    } else {
                    docJSON.relations = checks_mixed.relations;
                    docJSON.entities = checks_mixed.entities;
                    // docJSON.text = docData.text;
                    docJSON.text = docText;

                    }

                    console.log("SENSES + TYPES CHECKED", docJSON);
                }

            // SENSES OR NONE
            } else {

                if ($('#temporal').prop("checked") === true
                || $('#contingency').prop("checked") === true
                || $('#comparison').prop("checked") === true
                || $('#expansion').prop("checked") === true) {

                    var checks_senses = await pick_current_check(event.data.name,
                                                            [],
                                                            []);

                    docJSON.relations = (docJSON.relations.concat(checks_senses.relations));
                    docJSON.entities = (docJSON.entities.concat(checks_senses.entities));
                    // docJSON.text = docData.text;
                    docJSON.text = docText;

                    if (docJSON.relations.length === 0) {

                        window.alert("No relations of selected sense found in this document");
                    }

                    console.log("JUST SENSES CHECKED", docJSON);

                } else {
                    docJSON.relations = docData.relations;
                    docJSON.entities = docData.entities;
                    docJSON.text = docData.text;
                    console.log("NOTHING CHECKED", docJSON);

                }
            }
        }

        // HIDE
        else{

            docJSON.text = docText;

            var checks_delete = await pick_current_check(event.data.name, [], []);
            console.log("To delete: ", checks_delete);
            await deleteFromDocJSON(checks_delete.relations, docJSON.relations);
            await deleteFromDocJSON(checks_delete.entities, docJSON.entities);

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
            console.log("docJSON in try:", docJSON);
            liveDispatcher.post('requestRenderData', [$.extend({}, docJSON)]);
            status.css({'border': '2px inset'});
        } catch(e) {
            console.error('requestRenderData went down with:', e);
            status.css({'border': '2px solid blue'});
            return;
        }

        showPage();

    };

    var docJSON = {"text": docText, "entities": [], "relations": []};
    liveDispatcher.post('requestRenderData', [$.extend({}, docJSON)]);
    var listenTo = 'change';
    $('#explicit').bind(listenTo, {name: "Explicit"}, docInputHandler);
    $('#implicit').bind(listenTo, {name: "Implicit"}, docInputHandler);

    $('#temporal').bind(listenTo, {name: "Temporal"}, docInputHandler);
    $('#contingency').bind(listenTo, {name: "Contingency"}, docInputHandler);
    $('#comparison').bind(listenTo, {name: "Comparison"}, docInputHandler);
    $('#expansion').bind(listenTo, {name: "Expansion"}, docInputHandler);

}
// );


function showLoader() {
    document.getElementById("loader").style.display = "block";
    document.getElementById("myDiv").style.display = "none";
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