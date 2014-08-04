require(["dojo/dom", "dojo/dom-construct", "dojo/domReady!"], 

function(dom, domConstruct) {
	// get the Body id and create a variable
	var Body = dom.byId("mainBody");	
	// create a node "div" inside body (sample)
	domConstruct.create("div", {
		id : "sampleDiv",		
		className : "sample",
		innerHTML : "Detail Reporting",
		style : {
			fontWeight : "bold",
			marginBottom : "30px",
			marginLeft : "50px",
			fontSize : "20pt",
			color : "green"
		}
	}, Body);
	
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
 "dojo/dom", "dojo/dom-construct", "dijit/form/CheckBox", "dijit/registry", "dijit/form/TextBox",
 "dijit/form/Button", "dojo/query", "dojo/dom-construct", "dijit/_Widget", "dijit/_Templated"], 

function(AccordionContainer, ContentPane, dom, domConstruct, CheckBox, Button, query, registry, TextBox, Form, Textarea, document) {
	var aContainer = new AccordionContainer({
		id : "accorContainer",
		style : "height: 250px"
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
	
	// create checkboxes and labels for cPane1
	var checkBox11 = new dijit.form.CheckBox({
		id : "hartfordCheck",
		checked : false,
		style: "display:inline-block"
	});
	
	var labe11 = new dijit.form.Form({
		id : "hartfordLabel",
		innerHTML : "Hartford",
		style : {
			fontWeight : "bold",
			display: "inline-block"
		}
	});
	
	var checkBox12 = new dijit.form.CheckBox({
		id : "newhavenCheck",
		checked : false,
		style : "display:inline-block; margin-left: 20px"
	});
	
	var labe12 = new dijit.form.Form({
		id : "newhavenLabel",
		innerHTML : "New Haven",
		style: "display:inline-block"
	});
	
	var checkBox13 = new dijit.form.CheckBox({
		id : "allTransitSysCheck",
		checked : false,
		style : "margin-left: 20px",
		onClick : function() {
			// Do something:
			
			if (dijit.byId("allTransitSysCheck").get("checked") == true) {
				// Select All
				dijit.byId("hartfordCheck").set("checked", true);
				dijit.byId("newhavenCheck").set("checked", true);
			}
			if (dijit.byId("allTransitSysCheck").get("checked") == false) {
				// Unselect All
				dijit.byId("hartfordCheck").set("checked", false);
				dijit.byId("newhavenCheck").set("checked", false);
			}
		} 
	});
	var labe13 = new dijit.form.Form({
		id : "allTransitSysLabel",
		innerHTML : "All",
		style: "display:inline-block"
	});
	
	// add children to cPane1
	cPane1.addChild(checkBox11);
	cPane1.addChild(labe11);
	cPane1.addChild(checkBox12);
	cPane1.addChild(labe12);
	cPane1.addChild(checkBox13);
	cPane1.addChild(labe13);
	
	// create checkboxes and labels for cPane2
	var checkBox21 = new dijit.form.CheckBox({
		id : "weekdayCheck",
		checked : false,
		style: "display:inline-block",
	});
	
	var labe21 = new dijit.form.Form({
		id : "weekdayLabel",
		innerHTML : "Weekday",
		style: "display:inline-block"
	});
	
	var checkBox22 = new dijit.form.CheckBox({
		id : "weekendCheck",
		checked : false,
		style : "display:inline-block; margin-left: 20px",
	});
	
	var labe22 = new dijit.form.Form({
		id : "weekendLabel",
		innerHTML : "Weekend",
		style: "display:inline-block",
	});
	
	var checkBox23 = new dijit.form.CheckBox({
		id : "allDayOfWeekCheck",
		checked : false,
		style : "margin-left: 20px",
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
	});
	var labe23 = new dijit.form.Form({
		id : "allDayOfWeekLabel",
		innerHTML : "All",
		style: "display:inline-block",
	});
	
	// add children to cPane2
	cPane2.addChild(checkBox21);
	cPane2.addChild(labe21);
	cPane2.addChild(checkBox22);
	cPane2.addChild(labe22);
	cPane2.addChild(checkBox23);
	cPane2.addChild(labe23);
	
	// create checkboxes and labels for cPane3
	var checkBox31 = new dijit.form.CheckBox({
		id : "loadFactorCheck",
		checked : false,
		style: "display:inline-block"
	});
	
	var labe31 = new dijit.form.Form({
		id : "loadFactorLabel",
		innerHTML : "Load Factor",
		style: "display:inline-block"
	});
	
	var checkBox32 = new dijit.form.CheckBox({
		id : "vehicleCheck",
		checked : false,
		style : "display:inline-block; margin-left: 20px"
	});
	
	var labe32 = new dijit.form.Form({
		id : "vehicleLabel",
		innerHTML : "Vehicle Age",
		style: "display:inline"
	});
	
	var checkBox33 = new dijit.form.CheckBox({
		id : "stopAmeniCheck",
		checked : false,
		style: "display:inline-block; margin-left: 20px"
	});
	
	var labe33 = new dijit.form.Form({
		id : "stopAmeniLabel",
		innerHTML : "Stop Amenities",
		style: "display:inline-block"
	});
	
	var checkBox34 = new dijit.form.CheckBox({
		id : "onTimeCheck",
		checked : false,
		style : "display:inline-block; margin-left: 20px"
	});
	
	var labe34 = new dijit.form.Form({
		id : "onTimeLabel",
		innerHTML : "On-Time %",
		style: "display:inline-block;"
	});
	
	var checkBox35 = new dijit.form.CheckBox({
		id : "headwayCheck",
		checked : false,
		style: "display:inline-block; margin-left:20px"
	});
	
	var labe35 = new dijit.form.Form({
		id : "headwayLabel",
		innerHTML : "Headway",
		style: "display:inline-block"
	});
	
	var checkBox36 = new dijit.form.CheckBox({
		id : "allPerformanceCheck",
		checked : false,
		style : "display:inline-block; margin-left: 20px",
		onClick : function() {
			// Do something:
			
			if (dijit.byId("allPerformanceCheck").get("checked") == true) {
				// Select All
				dijit.byId("loadFactorCheck").set("checked", true);
				dijit.byId("vehicleCheck").set("checked", true);
				dijit.byId("stopAmeniCheck").set("checked", true);
				dijit.byId("onTimeCheck").set("checked", true);
				dijit.byId("headwayCheck").set("checked", true);
			}
			if (dijit.byId("allPerformanceCheck").get("checked") == false) {
				// Unselect All
				dijit.byId("loadFactorCheck").set("checked", false);
				dijit.byId("vehicleCheck").set("checked", false);
				dijit.byId("stopAmeniCheck").set("checked", false);
				dijit.byId("onTimeCheck").set("checked", false);
				dijit.byId("headwayCheck").set("checked", false);
			}
		} 
	});
	var labe36 = new dijit.form.Form({
		id : "allPerformanceLabel",
		innerHTML : "All",
		style: "display:inline-block"
	});
	
	/*var form31 = new dijit.form.Form({
		id : "form1",
		innerHTML : "new block",
		style : "display:block;clear:both"
	});*/
	
	// add children to cPane3
	cPane3.addChild(checkBox31);
	cPane3.addChild(labe31);
	cPane3.addChild(checkBox32);
	cPane3.addChild(labe32);
	cPane3.addChild(checkBox33);
	cPane3.addChild(labe33);
	//cPane3.addChild(form31);
	cPane3.addChild(checkBox34);
	cPane3.addChild(labe34);
	cPane3.addChild(checkBox35);
	cPane3.addChild(labe35);
	cPane3.addChild(checkBox36);
	cPane3.addChild(labe36);


// create checkboxes and labels for cPane4
	var checkBox41 = new dijit.form.CheckBox({
		id : "minorityCheck",
		checked : false,
		style: "display:inline-block"
	});
	
	var labe41 = new dijit.form.Form({
		id : "minorityLabel",
		innerHTML : "Minority",
		style: "display:inline-block"
	});
	
	var checkBox42 = new dijit.form.CheckBox({
		id : "nonMinorityCheck",
		checked : false,
		style : "display:inline-block; margin-left: 20px"
	});
	
	var labe42 = new dijit.form.Form({
		id : "nonMinorityLabel",
		innerHTML : "Non-minority",
		style: "display:inline"
	});
	
	var checkBox43 = new dijit.form.CheckBox({
		id : "lowIncomeCheck",
		checked : false,
		style: "display:inline-block; margin-left: 20px"
	});
	
	var labe43 = new dijit.form.Form({
		id : "lowIncomeLabel",
		innerHTML : "Low-income",
		style: "display:inline-block"
	});
	
	var checkBox44 = new dijit.form.CheckBox({
		id : "nonLowIncomeCheck",
		checked : false,
		style : "display:inline-block; margin-left: 20px"
	});
	
	var labe44 = new dijit.form.Form({
		id : "nonLowIncomeLabel",
		innerHTML : "Non low-income",
		style: "display:inline-block;"
	});
	
	var checkBox45 = new dijit.form.CheckBox({
		id : "lepCheck",
		checked : false,
		style: "display:inline-block; margin-left:20px"
	});
	
	var labe45 = new dijit.form.Form({
		id : "lepLabel",
		innerHTML : "LEP",
		style: "display:inline-block"
	});
	
	var checkBox46 = new dijit.form.CheckBox({
		id : "allDemoReportCheck",
		checked : false,
		style : "display:inline-block; margin-left: 20px",
		onClick : function() {
			// Do something:
			
			if (dijit.byId("allDemoReportCheck").get("checked") == true) {
				// Select All
				dijit.byId("minorityCheck").set("checked", true);
				dijit.byId("nonMinorityCheck").set("checked", true);
				dijit.byId("lowIncomeCheck").set("checked", true);
				dijit.byId("nonLowIncomeCheck").set("checked", true);
				dijit.byId("lepCheck").set("checked", true);
			}
			if (dijit.byId("allDemoReportCheck").get("checked") == false) {
				// Unselect All
				dijit.byId("minorityCheck").set("checked", false);
				dijit.byId("nonMinorityCheck").set("checked", false);
				dijit.byId("lowIncomeCheck").set("checked", false);
				dijit.byId("nonLowIncomeCheck").set("checked", false);
				dijit.byId("lepCheck").set("checked", false);
			}
		} 
	});
	var labe46 = new dijit.form.Form({
		id : "allDemoReportLabel",
		innerHTML : "All",
		style: "display:inline-block"
	});
	
	/*var form41 = new dijit.form.Form({
		id : "form1",
		innerHTML : "new block",
		style : "display:block;clear:both"
	});*/
	
	// add children to cPane4
	cPane4.addChild(checkBox41);
	cPane4.addChild(labe41);
	cPane4.addChild(checkBox42);
	cPane4.addChild(labe42);
	cPane4.addChild(checkBox43);
	cPane4.addChild(labe43);
	//cPane4.addChild(form41);
	cPane4.addChild(checkBox44);
	cPane4.addChild(labe44);
	cPane4.addChild(checkBox45);
	cPane4.addChild(labe45);
	cPane4.addChild(checkBox46);
	cPane4.addChild(labe46);
	
	// create checkboxes and labels for cPane5
	var checkBox51 = new dijit.form.CheckBox({
		id : "blockGroupCheck",
		checked : false,
		style: "display:inline-block",
	});
	
	var labe51 = new dijit.form.Form({
		id : "blockGroupLabel",
		innerHTML : "Block Group",
		style: "display:inline-block"
	});
	
	var checkBox52 = new dijit.form.CheckBox({
		id : "censusTrackCheck",
		checked : false,
		style : "display:inline-block; margin-left: 20px",
	});
	
	var labe52 = new dijit.form.Form({
		id : "censusTrackLabel",
		innerHTML : "Census Track",
		style: "display:inline-block",
	});
	
	// add children to cPane5
	cPane5.addChild(checkBox51);
	cPane5.addChild(labe51);
	cPane5.addChild(checkBox52);
	cPane5.addChild(labe52);
	
	
	// create forms and labels for cPane6
	var form61 = new dijit.form.Form({
		id : "form61",
		style : "display: inline-block; width:260px"
	});
	var form62 = new dijit.form.Form({
		id : "form62",
		style : "display: inline-block; width:260px"
	});
	var form621 = new dijit.form.Form({
		id : "form621",
		style : "display:block"
	});
	var form622 = new dijit.form.Form({
		id : "form622",
		style : "display:block"
	});
	var labelForm61 = new dijit.form.Form({
		id : "labelForm61",
		innerHTML : "Select stop buffer size for Local Bus",
		style : "display: block"
	});
	var labelForm62 = new dijit.form.Form({
		id : "labelForm62",
		innerHTML : "Select stop buffer size for Express Bus",
		style : "display: block"
	});
	
	// create checkboxes and labels for cPane6
	var checkBox61 = new dijit.form.CheckBox({
		id : "61Check",
		checked : false,
		style: "display:inline-block"
	});
	
	var labe61 = new dijit.form.Form({
		id : "61Label",
		innerHTML : "1/4 mile",
		style : "display: inline-block; font-size: 10pt"
	});
	
	var checkBox62 = new dijit.form.CheckBox({
		id : "62Check",
		checked : false,
		style : "display:inline-block; margin-left: 20px"
	});
	
	var labe62 = new dijit.form.Form({
		id : "62Label",
		innerHTML : "1/2 mile",
		style: "display:inline-block; font-size: 10pt"
	});
	
	var checkBox63 = new dijit.form.CheckBox({
		id : "63Check",
		checked : false,
		style : "margin-left: 20px"
	});
	var labe63 = new dijit.form.Form({
		id : "63Label",
		innerHTML : "3/4 mile",
		style: "display:inline-block"
	});
	
	
	
	// add children to cPane6
	labelForm61.placeAt("form61");
	checkBox61.placeAt("form61");
	labe61.placeAt("form61");
	checkBox62.placeAt("form61");
	labe62.placeAt("form61");
	checkBox63.placeAt("form61");
	labe63.placeAt("form61");
	
	labelForm62.placeAt("form62");
	
	cPane6.addChild(form61);
	cPane6.addChild(form62);
	
	
	
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
}); 



require(["dijit/form/Button", "dojo/dom", "dijit/registry", "dojo/domReady!"], 

function(Button, registry, dom) {
	// Create a button programmatically:
	var divSample = dijit.byId("RestartGenerateDiv");

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
	
	var Button4 = new Button({
		label : "new button",
		onClick : function() {
			// Do something:
			alert("I was clicked: Generate Report");
		}
	}).placeAt("transitSysPane");

});
