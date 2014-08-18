require(["dojo/dom", "dojo/dom-construct", "dojo/domReady!"], 

function(dom, domConstruct) {
	// get the Body id and create a variable
	var Body = dom.byId("mainBody");	
	
	// create div for Accordion Container	
	domConstruct.create("div", {
		id : "accorContainerDiv",
		className : "accorContainer"
		// add style
		//, style : "margin-top: 30px; padding-left: 50px"				
	}, Body);
	
	// create buttons: start over and generate report	
	domConstruct.create("button", {
		id : "restartButton"			
	}, Body);
	
	domConstruct.create("button", {
		id : "generateButton"		
	}, Body);
	
	
	
});


require(["dijit/layout/AccordionContainer", "dijit/layout/ContentPane", "dojo/domReady!","dijit/form/Form","dijit/form/Textarea",
 "dojo/dom", "dojo/dom-construct", "dijit/form/CheckBox", "dijit/registry", "dijit/form/TextBox","dijit/Tooltip", "dijit/form/RadioButton",
 "dijit/form/Button", "dojo/query", "dojo/dom-construct", "dijit/_Widget", "dijit/_Templated"], 

function(AccordionContainer, ContentPane, dom, domConstruct, CheckBox, Button, query, registry, TextBox, Form, Textarea, document, Tooltip, RadioButton) {
	var aContainer = new AccordionContainer({
		id : "accorContainer",
		style : "height: 270px"
	}, "accorContainerDiv");
	
	var cPane1 = new ContentPane({
		title : "Select Transit System",
		id : "transitSysPane",
		orientation: "vertical"
	}).placeAt(aContainer);
	
	var cPane2 = new ContentPane({
		title : "Select Day of Week",
		id : "dayOfWeekPane"
	}).placeAt(aContainer); 
	
	var cPane3 = new ContentPane({
		title : "Select Performance Measures",
		id : "performancePane"
	}).placeAt(aContainer);
	
	var cPane4 = new ContentPane({
		title : "Select Demographic Reports",
		id : "demoGroupPane"
	}).placeAt(aContainer);
	
	var cPane5 = new ContentPane({
		title : "Select Demographic Spatial Unit",
		id : "demoSpatialUnitPane"
	}).placeAt(aContainer);
	
	var cPane6 = new ContentPane({
		title : "Select Buffer Distance",
		id : "bufferDistancePane"
	}).placeAt(aContainer);
	 
	// build accordion container
	aContainer.startup();
	
	// create forms for cPane1
	var form11 = new dijit.form.Form({
		id : "form11",
		name : "group1",
		style : "display: inline-block; width:270px;"
	});
	
	// create checkboxes and labels for cPane1
	var checkBox11 = new dijit.form.RadioButton({
		id : "hartfordCheck",
		checked : false,
		style: "display:inline-block"
	}).placeAt("form11");
	
	var labe11 = new dijit.form.Form({
		id : "hartfordLabel",
		innerHTML : "Hartford",
		style : {
			//fontWeight : "bold",
			display: "inline-block",
			width: "70px"
		}
	}).placeAt("form11");
	
	var checkBox12 = new dijit.form.RadioButton({
		id : "newhavenCheck",
		checked : false,
		style : "display:inline-block; margin-left: 80px"
	}).placeAt("form11");
	
	var labe12 = new dijit.form.Form({
		id : "newhavenLabel",
		innerHTML : "New Haven",
		style: "display:inline-block; width:80px"	
	}).placeAt("form11");
	
	// add children to cPane1
	cPane1.addChild(form11);
	
	// create forms for cPane2
	var form21 = new dijit.form.Form({
		id : "form21",
		name : "group2",
		style : "display: inline-block; width:380px;"
	});
	
	// create checkboxes and labels for cPane2
	var checkBox21 = new dijit.form.CheckBox({
		id : "weekdayCheck",
		name : "group2",
		checked : false,
		style: "display:inline-block",
	}).placeAt("form21");
	
	var labe21 = new dijit.form.Form({
		id : "weekdayLabel",
		innerHTML : "Weekday",
		style: "display:inline-block; width:70px"
	}).placeAt("form21");
	
	var checkBox22 = new dijit.form.CheckBox({
		id : "weekendCheck",
		name : "group2",
		checked : false,
		style : "display:inline-block; margin-left: 80px",
	}).placeAt("form21");
	
	var labe22 = new dijit.form.Form({
		id : "weekendLabel",
		innerHTML : "Weekend",
		style: "display:inline-block; width:70px",
	}).placeAt("form21");
	
	var checkBox23 = new dijit.form.CheckBox({
		id : "allDayOfWeekCheck",
		name : "group2",
		checked : false,
		style : "display:inline-block; margin-left: 80px",
		onClick : function() {
			// Do something:
			
			if (dijit.byId("allDayOfWeekCheck").get("checked") == true) {
				// Select All
				dijit.byId("weekdayCheck").set("checked", true);
				dijit.byId("weekendCheck").set("checked", true);
			}
			if (dijit.byId("allDayOfWeekCheck").get("checked") == false) {
				// Unselect All
				dijit.byId("weekdayCheck").set("checked", false);
				dijit.byId("weekendCheck").set("checked", false);
			}
		} 
	}).placeAt("form21");
	var labe23 = new dijit.form.Form({
		id : "allDayOfWeekLabel",
		innerHTML : "All",
		style: "display:inline-block",
	}).placeAt("form21");
	
	// add children to cPane2
	cPane2.addChild(form21);	
	
	// create forms for cPane3
	var form31 = new dijit.form.Form({
		id : "form31",
		name : "group3",
		style : "display: inline-block; width:460px;"
	});
	
	// create checkboxes and labels for cPane3
	var checkBox31 = new dijit.form.RadioButton({
		id : "loadFactorCheck",
		name : "group3",
		checked : false,
		style: "display:inline-block"
	}).placeAt("form31");
	
	var labe31 = new dijit.form.Form({
		id : "loadFactorLabel",
		innerHTML : "Load Factor",
		style: "display:inline-block; width:90px"
	}).placeAt("form31");
	
	var checkBox32 = new dijit.form.RadioButton({
		id : "vehicleCheck",
		name : "group3",
		checked : false,
		style : "display:inline-block; margin-left: 60px"
	}).placeAt("form31");
	
	var labe32 = new dijit.form.Form({
		id : "vehicleLabel",
		innerHTML : "Vehicle Age",
		style: "display:inline-block; width:90px"
	}).placeAt("form31");
	
	var checkBox33 = new dijit.form.RadioButton({
		id : "stopAmeniCheck",
		name : "group3",
		checked : false,
		style: "display:inline-block; margin-left: 60px"
	}).placeAt("form31");
	
	var labe33 = new dijit.form.Form({
		id : "stopAmeniLabel",
		innerHTML : "Stop Amenities <br>",
		style: "display:inline; width:120px"
	}).placeAt("form31");
	
	var checkBox34 = new dijit.form.RadioButton({
		id : "onTimeCheck",
		name : "group3",
		checked : false,
		style : "display:inline-block"
	}).placeAt("form31");
	
	var labe34 = new dijit.form.Form({
		id : "onTimeLabel",
		innerHTML : "On-Time %",
		style: "display:inline-block; width:90px"
	}).placeAt("form31");
	
	var checkBox35 = new dijit.form.RadioButton({
		id : "headwayCheck",
		name : "group3",
		checked : false,
		style: "display:inline-block; margin-left:60px"
	}).placeAt("form31");
	
	var labe35 = new dijit.form.Form({
		id : "headwayLabel",
		innerHTML : "Headway",
		style: "display:inline-block; width:70px"
	}).placeAt("form31");
	
	// add children to cPane3
	cPane3.addChild(form31);

	// create forms for cPane4
	var form41 = new dijit.form.Form({
		id : "form41",
		name : "group4",
		style : "display:inline-block; width:460px"
	});
	var form42 = new dijit.form.Form({
		id : "form42",
		name : "group4",
		style : "display:inline-block: width:460px"
	});
	
    // create checkboxes and labels for cPane4
	var checkBox41 = new dijit.form.RadioButton({
		id : "minorityCheck",
		name : "group4",
		checked : false,
		style: "display:inline-block",
		onClick : function() {
			// Do something:
			cPane4.removeChild(form42);
		} 
	}).placeAt("form41");
	
	var labe41 = new dijit.form.Form({
		id : "minorityLabel",
		innerHTML : "Minority",
		style: "display:inline-block; width:70px"
	}).placeAt("form41");
	
	var checkBox42 = new dijit.form.RadioButton({
		id : "nonMinorityCheck",
		name : "group4",
		checked : false,
		style : "display:inline-block; margin-left: 80px",
		onClick : function() {
			// Do something:
			cPane4.removeChild(form42);
		} 
	}).placeAt("form41");
	
	var labe42 = new dijit.form.Form({
		id : "nonMinorityLabel",
		innerHTML : "Non-minority",
		style: "display:inline-block; width:80px"
	}).placeAt("form41");
	
	var checkBox43 = new dijit.form.RadioButton({
		id : "lowIncomeCheck",
		name : "group4",
		checked : false,
		style: "display:inline-block; margin-left: 70px",
		onClick : function() {
			// Do something:
			cPane4.removeChild(form42);
		} 
	}).placeAt("form41");
	
	var labe43 = new dijit.form.Form({
		id : "lowIncomeLabel",
		innerHTML : "Low-income <br>",
		style: "display:inline"
	}).placeAt("form41");
	
	var checkBox44 = new dijit.form.RadioButton({
		id : "nonLowIncomeCheck",
		name : "group4",
		checked : false,
		style : "display:inline-block",
		onClick : function() {
			// Do something:
			cPane4.removeChild(form42);
		} 
	}).placeAt("form41");
	
	var labe44 = new dijit.form.Form({
		id : "nonLowIncomeLabel",
		innerHTML : "Non low-income",
		style: "display:inline-block; width:110px"
	}).placeAt("form41");
	
	var checkBox45 = new dijit.form.RadioButton({
		id : "lepCheck",
		name : "group4",
		checked : false,
		style: "display:inline-block; margin-left:40px",
		onClick : function() {
			// Do something:
			// add and display LEP form
			cPane4.addChild(form42);			
		} 
	}).placeAt("form41");
	
	var labe45 = new dijit.form.Form({
		id : "lepLabel",
		innerHTML : "LEP",
		style: "display:inline-block; width:40px",
	}).placeAt("form41");
	
	// create RadioButtons in form42
	var checkBox1LEP = new dijit.form.RadioButton({
		id : "frenchCheck",
		name : "group4LEP",
		checked : false,
		disabled : true,
		style : "display:inline-block; margin-left:180px",
	}).placeAt("form42");
	
	var labe1LEP = new dijit.form.Form({
		id : "frenchLabel",
		innerHTML : "French",
		disabled : true,
		style: "display:inline-block; font-size:10pt"
	}).placeAt("form42");
	
	var checkBox2LEP = new dijit.form.RadioButton({
		id : "italtianCheck",
		name : "group4LEP",
		checked : false,
		disabled : true,
		style: "display:inline-block; margin-left:10px"
	}).placeAt("form42");
	
	var labe2LEP = new dijit.form.Form({
		id : "italianLabel",
		innerHTML : "Italian",
		disabled : true,
		style: "display:inline-block; font-size:10pt"
	}).placeAt("form42");
	
	var checkBox3LEP = new dijit.form.RadioButton({
		id : "russianCheck",
		name : "group4LEP",
		checked : false,
		style: "display:inline-block; margin-left:10px"
	}).placeAt("form42");
	
	var labe3LEP = new dijit.form.Form({
		id : "russianLabel",
		innerHTML : "Russian",
		style: "display:inline-block; font-size:10pt"
	}).placeAt("form42");
	
	var checkBox4LEP = new dijit.form.RadioButton({
		id : "spanishCheck",
		name : "group4LEP",
		checked : false,
		style: "display:inline-block; margin-left:10px"
	}).placeAt("form42");
	
	var labe4LEP = new dijit.form.Form({
		id : "spanishLabel",
		innerHTML : "Spanish <br>",
		style: "display:inline; font-size:10pt; width:45px"
	}).placeAt("form42");
	
	var checkBox5LEP = new dijit.form.RadioButton({
		id : "frenchCreoleCheck",
		name : "group4LEP",
		checked : false,
		style: "display:inline-block; margin-left:180px"
	}).placeAt("form42");
	
	var labe5LEP = new dijit.form.Form({
		id : "frenchCreoleLabel",
		innerHTML : "French-Creole",
		style: "display:inline-block; font-size:10pt"
	}).placeAt("form42");
	
	var checkBox6LEP = new dijit.form.RadioButton({
		id : "polishCheck",
		name : "group4LEP",
		checked : false,
		style: "display:inline-block; margin-left:10px"
	}).placeAt("form42");
	
	var labe6LEP = new dijit.form.Form({
		id : "polishLabel",
		innerHTML : "Polish",
		style: "display:inline-block; font-size:10pt"
	}).placeAt("form42");	
	
	var checkBox7LEP = new dijit.form.RadioButton({
		id : "vietnameseCheck",
		name : "group4LEP",
		checked : false,
		style: "display:inline-block; margin-left:10px"
	}).placeAt("form42");
	
	var labe7LEP = new dijit.form.Form({
		id : "vietnameseLabel",
		innerHTML : "Vietnamese",
		style: "display:inline-block; font-size:10pt"
	}).placeAt("form42");
	
	// add children to cPane4
	cPane4.addChild(form41);
	
	// create forms for cPane5
	var form51 = new dijit.form.Form({
		id : "form51",
		name : "group5",
		style : "display: inline-block; width:300px;"
	});
	// create checkboxes and labels for cPane5
	var checkBox51 = new dijit.form.RadioButton({
		id : "blockGroupCheck",
		checked : false,
		style: "display:inline-block",
	}).placeAt("form51");
	
	var labe51 = new dijit.form.Form({
		id : "blockGroupLabel",
		innerHTML : "Block Group",
		style: "display:inline-block;width: 90px"		
	}).placeAt("form51");
	
	var checkBox52 = new dijit.form.RadioButton({
		id : "censusTrackCheck",
		checked : false,
		style : "display:inline-block; margin-left: 60px",
	}).placeAt("form51");
	
	var labe52 = new dijit.form.Form({
		id : "censusTrackLabel",
		innerHTML : "Census Track",
		style: "display:inline-block",
	}).placeAt("form51");
	
	// add children to cPane5
	cPane5.addChild(form51);
	
	// create forms and labels for cPane6
	var form60 = new dijit.form.Form({
		id : "form60",
		style : "display:inline-block; width:100px; vertical-align:top"
	});
	var form61 = new dijit.form.Form({
		id : "form61",
		style : "display:inline-block; width:260px; vertical-align:top"
	});
	var form62 = new dijit.form.Form({
		id : "form62",
		style : "display:inline-block; width:260px; vertical-align:top"
	});
	
	// create checkboxes and labels for cPane6
	var checkBox6local = new dijit.form.RadioButton({
		id : "6localCheck",
		checked : true,
		style: "display:inline-block",
		onClick : function() {
			// Do something:
			cPane6.removeChild(form62);
			cPane6.addChild(form61);			
		} 
	}).placeAt("form60");
	
	var labe6local = new dijit.form.Form({
		id : "6localLabel",
		innerHTML : "Local <br>",
		style : "display:inline; width:60px",
		
	}).placeAt("form60");
	
	var checkBox6express = new dijit.form.RadioButton({
		id : "6expressCheck",
		checked : false,
		style : "display:inline-block",
		onClick : function() {
			// Do something:
			cPane6.removeChild(form61);
			cPane6.addChild(form62);			
		} 
	}).placeAt("form60");
	
	var labe6express = new dijit.form.Form({
		id : "6expressLabel",
		innerHTML : "Express",
		style: "display:inline; width:60px"
	}).placeAt("form60");
	
	var checkBox61 = new dijit.form.RadioButton({
		id : "61Check",
		checked : false,
		style: "display:inline-block"
	}).placeAt("form61");
	
	var labe61 = new dijit.form.Form({
		id : "61Label",
		innerHTML : "1/4 mile",
		style : "display:inline-block; font-size:10pt; width:45px"
	}).placeAt("form61");
	
	var checkBox62 = new dijit.form.RadioButton({
		id : "62Check",
		checked : false,
		style : "display:inline-block; margin-left:20px"
	}).placeAt("form61");
	
	var labe62 = new dijit.form.Form({
		id : "62Label",
		innerHTML : "1/2 mile",
		style: "display:inline-block; font-size:10pt; width:45px"
	}).placeAt("form61");
	
	var checkBox63 = new dijit.form.RadioButton({
		id : "63Check",
		checked : false,
		style : "margin-left: 20px"
	}).placeAt("form61");
	
	var labe63 = new dijit.form.Form({
		id : "63Label",
		innerHTML : "3/4 mile",
		style: "display:inline-block; font-size:10pt; width:45px"
	}).placeAt("form61");
	
	var checkBox64 = new dijit.form.RadioButton({
		id : "64Check",
		checked : false,
		style: "display:inline-block"
	}).placeAt("form62");
	
	var labe64 = new dijit.form.Form({
		id : "64Label",
		innerHTML : "1/4 mile",
		style : "display:inline-block; font-size:10pt; width:45px"
	}).placeAt("form62");
	
	var checkBox65 = new dijit.form.RadioButton({
		id : "65Check",
		checked : false,
		style : "display:inline-block; margin-left:20px"
	}).placeAt("form62");
	
	var labe65 = new dijit.form.Form({
		id : "65Label",
		innerHTML : "1/2 mile",
		style: "display:inline-block; font-size:10pt; width:45px"
	}).placeAt("form62");
	
	var checkBox66 = new dijit.form.RadioButton({
		id : "66Check",
		checked : false,
		style : "margin-left:20px"
	}).placeAt("form62");
	
	var labe66 = new dijit.form.Form({
		id : "66Label",
		innerHTML : "3/4 mile <br>",
		style: "display:inline; font-size:10pt; width:45px"
	}).placeAt("form62");
	
	var checkBox67 = new dijit.form.RadioButton({
		id : "67Check",
		checked : false,
		style: "display:inline-block"
	}).placeAt("form62");	
	
	var labe67 = new dijit.form.Form({
		id : "67Label",
		innerHTML : "1 mile",
		style : "display:inline-block; font-size:10pt; width:45px"
	}).placeAt("form62");
	
	var checkBox68 = new dijit.form.RadioButton({
		id : "68Check",
		checked : false,
		style : "display:inline-block; margin-left:20px"
	}).placeAt("form62");
	
	var labe68 = new dijit.form.Form({
		id : "68Label",
		innerHTML : "2 miles",
		style: "display:inline-block; font-size:10pt; width:45px"
	}).placeAt("form62");
	
	var checkBox69 = new dijit.form.RadioButton({
		id : "69Check",
		checked : false,
		style : "margin-left:20px"
	}).placeAt("form62");
	
	var labe69 = new dijit.form.Form({
		id : "69Label",
		innerHTML : "5 miles",
		style: "display:inline-block; font-size:10pt; width:45px"
	}).placeAt("form62");
	
	// add children to cPane6	
	cPane6.addChild(form60);
	cPane6.addChild(form61);
		
	// create buttons ////////////////////////////////////////////////////
	var nextButton1 = new dijit.form.Button({
		style : "float:right",
		label : "Next",
		onClick : function() {
			// Do something:
			var container = dijit.byId("accorContainer");
			container.selectChild("dayOfWeekPane", true);
		}
	});
	var nextButton2 = new dijit.form.Button({
		style : "float:right",
		label : "Next",
		onClick : function() {
			// Do something:
			var container = dijit.byId("accorContainer");
			container.selectChild("performancePane", true);
		}
	});
	var nextButton3 = new dijit.form.Button({
		style : "float:right",
		label : "Next",
		onClick : function() {
			// Do something:
			var container = dijit.byId("accorContainer");
			container.selectChild("demoGroupPane", true);
		}
	});
	var nextButton4 = new dijit.form.Button({
		style : "float:right",
		label : "Next",
		onClick : function() {
			// Do something:
			var container = dijit.byId("accorContainer");
			container.selectChild("demoSpatialUnitPane", true);
		}
	});
	var nextButton5 = new dijit.form.Button({
		style : "float:right",
		label : "Next",
		onClick : function() {
			// Do something:
			var container = dijit.byId("accorContainer");
			container.selectChild("bufferDistancePane", true);
		}
	});
	
	// add buttons to each cPane
	cPane1.addChild(nextButton1);
	cPane2.addChild(nextButton2);
	cPane3.addChild(nextButton3);
	cPane4.addChild(nextButton4);
	cPane5.addChild(nextButton5);
 
	// create a new Tooltip and connect it to...
    var tooltip1 = new dijit.Tooltip({
      connectId: ["hartfordLabel"],
      label: "this is a tooltip for ..."
    });
    
    var tooltip3 = new dijit.Tooltip({
      connectId: ["allTransitSysLabel"],
      label: "this is a tooltip for ..."
    });
    //cPane1.addChild(tooltip1);
    //var node = dijit.byId("hartfordLabel");
  	//Tooltip.show("I am a tooltip", node);
  	
});
require(["dijit/form/Button", "dojo/dom", "dijit/registry", "dojo/domReady!"], 
function(Button, registry, dom) {
	// Create a button programmatically:

	var startOverButton = new Button({
		label : "Start Over",
		onClick : function() {
			// Do something:
			var container = dijit.byId("accorContainer");
			container.selectChild("transitSysPane", true);
		}
	},"restartButton");

	var generateRepButton = new Button({
		label : "Generate Report",
		onClick : function() {
			// Do something:
			alert("I was clicked: Generate Report");
		}
	},"generateButton");

});

require(["dijit/Tooltip", "dojo/dom", "dijit/registry", "dojo/domReady!"], 
function(Tooltip,registry, dom){
	
    var ttip1 = new dijit.Tooltip({
        connectId: ["newhavenLabel"],
        label: "the text for the tooltip"
    });
    var node = registry.byId("transitSysPane");
    node.addChild(ttip1);
});
