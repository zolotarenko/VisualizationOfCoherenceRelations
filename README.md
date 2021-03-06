# Welcome to the Visualization Approaches for Coherence Relations!

 This project is developed as a practical part of the bachelor thesis in computational liguistics 
 and attempts to analyse different tools for visualizing coherence relations.   
 
The best approach found in the research is used for visualizing the German Shallow Discourse Parser 
(check the project https://github.com/PeterBourgonje/GermanShallowDiscourseParser).

## Documentation of visualization with brat

### About brat visualization
The main approach used in this project is based on the brat rapid annotationtool (see http://brat.nlplab.org),
a web-based tool for text annotation.This tool allows for
convenient embedding of the visualized annotations in other projects.

The output of the German Shallow Discourse Parser of Peter Bourgonje (see above) was used
as a base for exploring the visualization strategies. The parser is the result of a PhD
dissertation (to appear), individual components of which are published in the papers 
„Explicit Discourse Argument Extraction for German“(see https://link.springer.com/chapter/10.1007%2F978-3-030-27947-9_3) and 
„Identifying Explicit Discourse Connectives in German“(see https://www.researchgate.net/publication/334116980_Identifying_Explicit_Discourse_Connectives_in_German).

The visualization implementation with brat uses JSON format for both input
data of the parser and its converted version, in order to suit brat internal format.
For proper embedding, brat needs two objects to be defined: the collection dataobject
with defined properties of entity types; and the document object with text,entities
and relations to be visualized.

### Setup

Follow these steps to set up the visualization component:

1. Clone this repository (`git clone https://github.com/zolotarenko/VisualizationOfCoherenceRelations/tree/second-implementation/brat`)
2. Navigate to the downloaded repository depending on your os
3. Navigate to the brat directory (`cd brat`)
4. Download the latest brat version inside brat direcroty (`curl -O http://weaver.nlplab.org/~brat/releases/brat-v1.3_Crunchy_Frog.tar.gz`)
5. Unpack the downloaded archive `tar -xf brat-v1.3_Crunchy_Frog.tar.gz`
6. Now you should be able to open the `index_brat.xhtml` to see the visualized input.

### Manipulating the input

So far (05.03.2021), the input for the visualization can be only manipulated manually (see the corresponding parts of `index_brat.xhtml`). 
The data for visualization has to match the brat internal format as given below.

The entities (arguments and connectives):  

`[${ID}, ${TYPE}, [[${START}, ${END}]]]`  

The relations:

`[${ID}, ${TYPE}, [[${ARGNAME}, ${TARGET}], 
[${ARGNAME}, ${TARGET}]]]`

The code below gives an example of the mentioned parser output and a 
relation to visualize. 

#### Parser output

An output example of a parsed document:

```
[{"ID": 1, 
	"DocID": "09-01-2020_13:03:49", 
	"Sense": "Comparison.Concession.Arg2-as-denier", 
	"Type": "Explicit", 
	"Arg1": 
		{"CharacterSpanList": [[182, 217]], 
		 "RawText": "Trommeln gehört halt zum Geschäft .", 
		 "TokenList": [[182, 190, 27, 1, 0], 
		 			 [191, 197, 28, 1, 1], 
					  [198, 202, 29, 1, 2], 
					  [203, 206, 30, 1, 3], 
					  [207, 215, 31, 1, 4], 
					  [216, 217, 32, 1, 5]]}, 
	"Arg2": 
		 {"CharacterSpanList": [[223, 278]], 
		 "RawText": "unterm Strich stehen Brandenburgs Schulen ganz gut da .", 			
		 "TokenList": [[223, 229, 34, 2, 1], 
		 				[230, 236, 35, 2, 2], 
						[237, 243, 36, 2, 3], 
						[244, 256, 37, 2, 4], 
						[257, 264, 38, 2, 5], 
						[265, 269, 39, 2, 6], 
						[270, 273, 40, 2, 7], 
						[274, 276, 41, 2, 8], 
						[277, 278, 42, 2, 9]]}, 
	"Connective": 
		 {"CharacterSpanList": [[218, 222]], 
		  "RawText": "Doch", 
		  "TokenList": [[218, 222, 33, 2, 0]]}},
```

#### DocData

The document data object of brat:

```
const docData = {
"text" : "Das Büchergeld  Die Litanei ist nicht neu : " +
     "Eltern beschweren sich über veraltete Schulbücher , " +  
     "Kommunen jammern über leere Kassen und " +
     "Schulbuchverlage beklagen Umsatzeinbrüche . " +
     "Trommeln gehört halt zum Geschäft . " +
     "Doch unterm Strich stehen Brandenburgs Schulen ganz gut da . ",
"entities" : [["E1", "Arg1", [[182, 217]]],
       ["E2", "Arg2", [[223, 278]]],
       ["E3", "Connective", [[218, 222]]]
       ],
"relations": [["R1",
        "Explicit.Comparison.Concession.Arg2-as-denier",
        [["1", "E1"], 
        ["2", "E2"]]]
       ]
};
```

#### CollData

The collection data object of brat for defining entity types:


```
const collData = {
  entity_types: [ {
  type  : "Arg1",
  labels : ["Arg1", "Arg1"],
  bgColor: "#7fa2ff",
  borderColor: "darken"
  },
  {
  type  : "Arg2",
  labels : ["Arg2", "Arg2"],
  bgColor: "#9FF781",
  borderColor: "darken"
  },
  {
  type  : "Connective",
  labels : ["Con", "Con"],
  bgColor: "#FA5858",
  borderColor: "darken"
  }]
};
```


## Other visualization approaches

Apart of brat there are also several other approaches tested in the thesis:

* d3
* displacy
* simple HTML tools such as coloring and highlighting or brackets

These could be found in the corresponding directories of this repository.

## About the branches
The main version of the visualization component is now completely on master.
However, there are also 2 other branches – `first-implementation` and `second-implementation` –
which represent developmental stages of the project for the bachelor thesis.

