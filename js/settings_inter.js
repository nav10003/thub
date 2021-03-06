require(["dojo/dom", "dojo/dom-construct", "dojo/domReady!"], 

function(dom, domConstruct) {
	// get the Body id and create a variable
	var Body = dom.byId("mainBodyInter");	
	
	// create div for Accordion Container	
	domConstruct.create("div", {
		id : "accorContainerDiv",
		className : "accorContainer"
		// add style
		//, style : "margin-top: 30px; padding-left: 50px"				
	}, Body);
	
	// create buttons: start over and generate report	
	domConstruct.create("div", {
		id : "restarButtonDiv",
		// add style
		style : "display:inline; margin-left: 40%"				
	}, Body);
	
	domConstruct.create("button", {
		id : "restartButton",
		style : "float: right"			
	}, "restarButtonDiv");
	
	domConstruct.create("div", {
		id : "generateButtonDiv",
		// add style
		style : "display:inline; margin-right: 30%"				
	}, Body);
	
	domConstruct.create("button", {
		id : "generateButton",
		style : "float: left"	
	}, "generateButtonDiv");
	
});



require(["dijit/layout/AccordionContainer", "dijit/layout/ContentPane", "dojo/domReady!","dijit/form/Form","dijit/form/Textarea",
 "dojo/dom", "dojo/dom-construct", "dijit/form/CheckBox", "dijit/registry", "dijit/form/TextBox","dijit/Tooltip", "dijit/form/RadioButton",
 "dijit/form/Button", "dojo/query", "dojo/dom-construct", "dijit/_Widget", "dijit/_Templated","dijit/form/Select"], 

function(AccordionContainer, ContentPane, dom, domConstruct, CheckBox, Button, query, registry, TextBox, Form, Textarea, document, Tooltip, RadioButton, Select) {
	var aContainer = new AccordionContainer({
		id : "accorContainer",
		style : "height: 275px"
	}, "accorContainerDiv");
	
	var cPane1 = new ContentPane({
		title : "Transit System",
		id : "transitSysPane",
		orientation: "vertical"
	}).placeAt(aContainer);
	
	var cPane2 = new ContentPane({
		title : "Day of Week",
		id : "dayOfWeekPane"
	}).placeAt(aContainer); 
	
	var cPane3 = new ContentPane({
		title : "Type of Analysis",
		id : "analysisPane"
	}).placeAt(aContainer);
	
	/*var cPane4 = new ContentPane({
		title : "Demographic Reports",
		id : "demoReportsPane"
	}).placeAt(aContainer);*/
	
	var cPane5 = new ContentPane({
		title : "Demographic Spatial Unit",
		id : "demoSpatialUnitPane"
	}).placeAt(aContainer);
	
	var cPane6 = new ContentPane({
		title : "Buffer Distance",
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
		name : "group1",
		value : "1_1",
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
		name : "group1",
		value : "1_2",
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
		value : "2_1",
		name : "group2",
		checked : false,
		style: "display:inline-block",
		onClick : function() {
			// Do something:			
			if (dijit.byId("allDayOfWeekCheck").get("checked") == true &&
				dijit.byId("weekdayCheck").get("checked") == false) {
					
				dijit.byId("allDayOfWeekCheck").set("checked", false);
			}
			if (dijit.byId("weekendCheck").get("checked") == true &&
				dijit.byId("weekdayCheck").get("checked") == true) {
					
				dijit.byId("allDayOfWeekCheck").set("checked", true);
			}
		} 
	}).placeAt("form21");
	
	var labe21 = new dijit.form.Form({
		id : "weekdayLabel",
		innerHTML : "Weekday",
		style: "display:inline-block; width:70px"
	}).placeAt("form21");
	
	var checkBox22 = new dijit.form.CheckBox({
		id : "weekendCheck",
		value : "2_2",
		name : "group2",
		checked : false,
		style : "display:inline-block; margin-left: 80px",
		onClick : function() {
			// Do something:			
			if (dijit.byId("allDayOfWeekCheck").get("checked") == true &&
				dijit.byId("weekendCheck").get("checked") == false) {
					
				dijit.byId("allDayOfWeekCheck").set("checked", false);
			}
			if (dijit.byId("weekendCheck").get("checked") == true &&
				dijit.byId("weekdayCheck").get("checked") == true) {
					
				dijit.byId("allDayOfWeekCheck").set("checked", true);
			}
		} 
	}).placeAt("form21");
	
	var labe22 = new dijit.form.Form({
		id : "weekendLabel",
		innerHTML : "Weekend",
		style: "display:inline-block; width:70px",
	}).placeAt("form21");
	
	var checkBox23 = new dijit.form.CheckBox({
		id : "allDayOfWeekCheck",
		value : "2_3",
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
		style : "display: inline-block; width:800px"
	});
	var form32 = new dijit.form.Form({
		id : "form32",
		name : "group3",
		style : "display:block; width:800px"
	});
	
	// create checkboxes and labels for cPane3
	var labe31 = new dijit.form.Form({
		innerHTML : "Performance Measures",
		style: "display:block; font-size:10pt"
	}).placeAt("form31");
	
	var checkBox311 = new dijit.form.RadioButton({
		id : "loadFactorCheck",
		value : "3_1_1",
		name : "group3",
		checked : false,
		style: "display:inline-block",
		onChange : function() {
			// Do something:
			if (dijit.byId("loadFactorCheck").get("checked") == true){
				dijit.byId("loadFactorSelect").set("disabled", false);
				dijit.byId("localCheck").set("checked", false);	
				dijit.byId("expressCheck").set("checked", false);
			}
			if (dijit.byId("loadFactorCheck").get("checked") == false){
				dijit.byId("loadFactorSelect").set("disabled", true);
			}
		},
		onClick : function() {
			resetLEP();			
		}
	}).placeAt("form31");
	
	var labe311 = new dijit.form.Form({
		id : "loadFactorLabel",
		innerHTML : "Load Factor",
		style: "display:inline-block; width:85px"
	}).placeAt("form31");
	
	var select311 = new dijit.form.Select({
		id : "loadFactorSelect",
		name : "group3",
		disabled : true,
		style:"display:inline-block;font-size:10pt",
		options: [
			{ label: "AM Peak", selected: true, value: "3_1_1_1"},
			{ label: "Midday", value: "3_1_1_2"},
			{ label: "PM Peak", value: "3_1_1_3"},
			{ label: "Off-Peak", value: "3_1_1_4"},
			{ label: "Total", value: "3_1_1_5"},
		]
	}).placeAt("form31");
	
	var checkBox312 = new dijit.form.RadioButton({
		id : "vehicleCheck",
		value : "3_1_2",
		name : "group3",
		checked : false,
		style : "display:inline-block; margin-left: 20px",
		onClick : function() {
			// Do something:
			resetLEP();		
			dijit.byId("localCheck").set("checked", false);	
			dijit.byId("expressCheck").set("checked", false);	
		} 
	}).placeAt("form31");
	
	var labe312 = new dijit.form.Form({
		id : "vehicleLabel",
		innerHTML : "Vehicle Age",
		style: "display:inline-block; width:90px"
	}).placeAt("form31");
	
	var checkBox313 = new dijit.form.RadioButton({
		id : "stopAmeniCheck",
		value : "3_1_3",
		name : "group3",
		checked : false,
		style: "display:inline-block; margin-left:30px",
		onClick : function() {
			// Do something:
			resetLEP();		
			dijit.byId("localCheck").set("checked", false);	
			dijit.byId("expressCheck").set("checked", false);	
		} 
	}).placeAt("form31");
	
	var labe313 = new dijit.form.Form({
		id : "stopAmeniLabel",
		innerHTML : "Stop Amenities",
		style: "display:inline-block; width:100px"
	}).placeAt("form31");
	
	var checkBox314 = new dijit.form.RadioButton({
		id : "onTimeCheck",
		value : "3_1_4",
		name : "group3",
		checked : false,
		style : "display:inline-block; margin-left:40px",
		onClick : function() {
			// Do something:
			resetLEP();			
			dijit.byId("localCheck").set("checked", false);	
			dijit.byId("expressCheck").set("checked", false);
		} 
	}).placeAt("form31");
	
	var labe314 = new dijit.form.Form({
		id : "onTimeLabel",		
		innerHTML : "On-Time %",
		style: "display:inline-block; width:80px"
	}).placeAt("form31");
	
	var checkBox315 = new dijit.form.RadioButton({
		id : "headwayCheck",
		value : "3_1_5",
		name : "group3",
		checked : false,
		style: "display:inline-block; margin-left:40px",
		onChange : function() {
			// Do something:
			if (dijit.byId("headwayCheck").get("checked") == true){
				dijit.byId("headwaySelect").set("disabled", false);
				dijit.byId("localCheck").set("checked", false);	
				dijit.byId("expressCheck").set("checked", false);
			}
			if (dijit.byId("headwayCheck").get("checked") == false){
				dijit.byId("headwaySelect").set("disabled", true);
			}
		},
		onClick : function() {
			resetLEP();
		}
	}).placeAt("form31");
	
	var labe315 = new dijit.form.Form({
		id : "headwayLabel",
		innerHTML : "Headway",
		style: "display:inline-block; width:65px"
	}).placeAt("form31");
	
	var select315 = new dijit.form.Select({
		id : "headwaySelect",
		name : "group3",
		disabled : true,
		style:"display:inline-block;font-size:10pt",
		options: [
			{ label: "AM Peak",  value: "3_1_5_1"},
			{ label: "Midday", value: "3_1_5_2"},
			{ label: "PM Peak",  value: "3_1_5_3"},
		]
	}).placeAt("form31");
	
	///////////////////////
	
	var labe32 = new dijit.form.Form({
		innerHTML : "Demographic Reports",
		style: "display:block; font-size:10pt; margin-top:7px"
	}).placeAt("form31");
	
	var checkBox321 = new dijit.form.RadioButton({
		id : "minorityCheck",
		value : "3_2_1",
		name : "group3",
		checked : false,
		style: "display:inline-block",
		onClick : function() {
			// Do something:
			resetLEP();		
			dijit.byId("localCheck").set("checked", false);	
			dijit.byId("expressCheck").set("checked", false);	
		} 
	}).placeAt("form31");
	
	var labe321 = new dijit.form.Form({
		id : "minorityLabel",
		innerHTML : "Minority",
		style: "display:inline-block; width:70px"
	}).placeAt("form31");
	
	/*var checkBox322 = new dijit.form.RadioButton({
		id : "nonMinorityCheck",
		value : "3_2_2",
		name : "group3",
		checked : false,
		style : "display:inline-block; margin-left: 40px",
		onClick : function() {
			// Do something:
			resetLEP();			
		} 
	}).placeAt("form31");
	
	var labe322 = new dijit.form.Form({
		id : "nonMinorityLabel",
		innerHTML : "Non-minority",
		style: "display:inline-block; width:90px"
	}).placeAt("form31");*/
	
	var checkBox323 = new dijit.form.RadioButton({
		id : "lowIncomeCheck",
		value : "3_2_3",
		name : "group3",
		checked : false,
		style: "display:inline-block; margin-left:40px",
		onClick : function() {
			// Do something:
				resetLEPsetDemo();
				dijit.byId("localCheck").set("checked", false);	
				dijit.byId("expressCheck").set("checked", false);
		} 
	}).placeAt("form31");
	
	var labe323 = new dijit.form.Form({
		id : "lowIncomeLabel",
		innerHTML : "Low-Income",
		style: "display:inline-block; width:90px"
	}).placeAt("form31");
	
	/*var checkBox324 = new dijit.form.RadioButton({
		id : "nonLowIncomeCheck",
		value : "3_2_4",
		name : "group3",
		checked : false,
		style : "display:inline-block; margin-left:40px",
		onClick : function() {
			// Do something:
				resetLEPsetDemo();
		} 
	}).placeAt("form31");
	
	var labe324 = new dijit.form.Form({
		id : "nonLowIncomeLabel",
		innerHTML : "Non low-income",
		style: "display:inline-block; width:110px"
	}).placeAt("form31");*/
	
	var checkBox325 = new dijit.form.RadioButton({
		id : "lepCheck",
		value : "3_2_5",
		name : "group3",
		checked : false,
		style: "display:inline-block; margin-left:40px",		
		onChange : function() {
			if (dijit.byId("lepCheck").get("checked") == true){
				dijit.byId("lepSelect").set("disabled", false);	
				dijit.byId("localCheck").set("checked", false);	
				dijit.byId("expressCheck").set("checked", false);				
			}
			if (dijit.byId("lepCheck").get("checked") == false){
				dijit.byId("lepSelect").set("disabled", true);
			}
		},
		onClick : function() {
			resetLEPsetDemo();
		}
	}).placeAt("form31");
	
	var labe325 = new dijit.form.Form({
		id : "lepLabel",
		innerHTML : "LEP",
		style: "display:inline-block; width:40px",
	}).placeAt("form31");
	
	var select325 = new dijit.form.Select({
		id : "lepSelect",
		name : "group3",
		disabled : true,
		style:"display:inline-block;font-size:10pt",
		options: [
			{ label: "Select Language", value: "3_2_5_0", selected: true},
			{ label: "French",  value: "3_2_5_1"},
			{ label: "French-Creole", value: "3_2_5_2"},
			{ label: "Italian",  value: "3_2_5_3"},
			{ label: "Polish",  value: "3_2_5_4"},
			{ label: "Russian",  value: "3_2_5_5"},
			{ label: "Spanish",  value: "3_2_5_6"},
			{ label: "Vietnamese",  value: "3_2_5_7"},
		]
	}).placeAt("form31");
	
	
	// add children to cPane3
	cPane3.addChild(form31);
	
	/////////////////////////////////
	// cPane4 was merged with cPane3
	
	// create forms for cPane5
	var form51 = new dijit.form.Form({
		id : "form51",
		name : "group5",
		style : "display: inline-block; width:300px;"
	});
	// create checkboxes and labels for cPane5
	var checkBox51 = new dijit.form.RadioButton({
		id : "blockGroupCheck",
		value : "5_1",
		name : "group5",
		checked : false,
		style: "display:inline-block",
	}).placeAt("form51");
	
	var labe51 = new dijit.form.Form({
		id : "blockGroupLabel",
		name : "group5",
		innerHTML : "Block Group",
		style: "display:inline-block;width: 90px"		
	}).placeAt("form51");
	
	var checkBox52 = new dijit.form.RadioButton({
		id : "censusTractCheck",
		value : "5_2",
		name : "group5",
		checked : false,
		style : "display:inline-block; margin-left: 60px",
	}).placeAt("form51");
	
	var labe52 = new dijit.form.Form({
		id : "censusTractLabel",
		name : "group5",
		innerHTML : "Census Tract",
		style: "display:inline-block",
	}).placeAt("form51");
	
	// add children to cPane5
	cPane5.addChild(form51);
	
	// create forms and labels for cPane6
	var form61 = new dijit.form.Form({
		id : "form61",
		name : "group6",
		style : "display:block; width:320px "
	});
	var form62 = new dijit.form.Form({
		id : "form62",
		name : "group6",
		style : "display:block; width:600px; margin-top:10px "
	});
	var labe6select = new dijit.form.Form({
		id : "6selectLabel",
		name : "group6",
		innerHTML : "Select buffer size:",
		style : "display:block"
	}).placeAt("bufferDistancePane");
	
	// create checkboxes and labels for cPane6
	var checkBox61 = new dijit.form.CheckBox({
		id : "localCheck",
		value : "6_1",
		name : "group6",
		checked : false,
		style: "display:inline-block",
		onChange : function() {
			// Do something:		
			if (dijit.byId("localCheck").get("checked") == true &&
				dijit.byId("loadFactorCheck").get("checked") == false &&
				dijit.byId("vehicleCheck").get("checked") == false &&
				dijit.byId("stopAmeniCheck").get("checked") == false &&
				dijit.byId("onTimeCheck").get("checked") == false &&
				dijit.byId("headwayCheck").get("checked") == false ){
					
				dijit.byId("local1Check").set("disabled", false);
				dijit.byId("local1Check").set("checked", true);
				dijit.byId("local2Check").set("disabled", false);
				dijit.byId("local3Check").set("disabled", false);
			}	
			if (dijit.byId("localCheck").get("checked") == false){
				unCheck("form61");
				dijit.byId("local1Check").set("disabled", true);
				dijit.byId("local2Check").set("disabled", true);
				dijit.byId("local3Check").set("disabled", true);
			}	
		} 
	}).placeAt("form61");
	
	var labe61 = new dijit.form.Form({
		id : "localLabel",
		name : "group6",
		innerHTML : "Local",
		style : "display:inline-block; width:40px"		
	}).placeAt("form61");
	
	var checkBox1Local = new dijit.form.RadioButton({
		id : "local1Check",
		value : "6_1_1",
		name : "group6Local",
		checked : false,
		disabled : true,
		style: "display:inline-block; margin-left:30px"
	}).placeAt("form61");
	
	var labe1Local = new dijit.form.Form({
		id : "local1Label",
		name : "group6Local",
		innerHTML : "1/4 mile",
		style : "display:inline-block; font-size:10pt; width:45px"
	}).placeAt("form61");
	
	var checkBox2Local = new dijit.form.RadioButton({
		id : "local2Check",
		value : "6_1_2",
		name : "group6Local",
		checked : false,
		disabled : true,
		style : "display:inline-block; margin-left:20px"
	}).placeAt("form61");
	
	var labe2Local = new dijit.form.Form({
		id : "local2Label",
		name : "group6Local",
		innerHTML : "1/2 mile",
		style: "display:inline-block; font-size:10pt; width:45px"
	}).placeAt("form61");
	
	var checkBox3Local = new dijit.form.RadioButton({
		id : "local3Check",
		value : "6_1_3",
		name : "group6Local",
		checked : false,
		disabled : true,
		style : "display:inline-block; margin-left: 20px"
	}).placeAt("form61");
	
	var labe3Local = new dijit.form.Form({
		id : "63Label",
		name : "group6Local",
		innerHTML : "3/4 mile",
		style: "display:inline-block; font-size:10pt; width:45px"
	}).placeAt("form61");
	
	var checkBox62 = new dijit.form.CheckBox({
		id : "expressCheck",
		value : "6_2",
		name : "group6",
		checked : false,
		style : "display:inline-block",
		onChange : function() {
			// Do something:
			if (dijit.byId("expressCheck").get("checked") == true &&
				dijit.byId("loadFactorCheck").get("checked") == false &&
				dijit.byId("vehicleCheck").get("checked") == false &&
				dijit.byId("stopAmeniCheck").get("checked") == false &&
				dijit.byId("onTimeCheck").get("checked") == false &&
				dijit.byId("headwayCheck").get("checked") == false ){
					
				dijit.byId("exp1Check").set("disabled", false);
				dijit.byId("exp2Check").set("disabled", false);
				dijit.byId("exp2Check").set("checked", true);
				dijit.byId("exp3Check").set("disabled", false);
				dijit.byId("exp4Check").set("disabled", false);
				dijit.byId("exp5Check").set("disabled", false);
				dijit.byId("exp6Check").set("disabled", false);
			}		
			if (dijit.byId("expressCheck").get("checked") == false){
				unCheck("form62");
				dijit.byId("exp1Check").set("disabled", true);
				dijit.byId("exp2Check").set("disabled", true);
				dijit.byId("exp3Check").set("disabled", true);
				dijit.byId("exp4Check").set("disabled", true);
				dijit.byId("exp5Check").set("disabled", true);
				dijit.byId("exp6Check").set("disabled", true);
			}				
		} 
	}).placeAt("form62");
	
	var labe62 = new dijit.form.Form({
		id : "expressLabel",
		name : "group6",
		innerHTML : "Express",
		style: "display:inline-block; width:50px"
	}).placeAt("form62");
	
	var checkBox1Exp = new dijit.form.RadioButton({
		id : "exp1Check",
		value : "6_2_1",
		name : "group6Exp",
		checked : false,
		disabled : true,
		style: "display:inline-block; margin-left:20px"
	}).placeAt("form62");
	
	var labe1Exp = new dijit.form.Form({
		id : "exp1Label",
		name : "group6Exp",
		innerHTML : "1/4 mile",
		style : "display:inline-block; font-size:10pt; width:45px"
	}).placeAt("form62");
	
	var checkBox2Exp = new dijit.form.RadioButton({
		id : "exp2Check",
		value : "6_2_2",
		name : "group6Exp",
		checked : false,
		disabled : true,
		style : "display:inline-block; margin-left:20px"
	}).placeAt("form62");
	
	var labe2Exp = new dijit.form.Form({
		id : "exp2Label",
		name : "group6Exp",
		innerHTML : "1/2 mile",
		style: "display:inline-block; font-size:10pt; width:45px"
	}).placeAt("form62");
	
	var checkBox3Exp = new dijit.form.RadioButton({
		id : "exp3Check",
		value : "6_2_3",
		name : "group6Exp",
		checked : false,
		disabled : true,
		style : "margin-left:20px"
	}).placeAt("form62");
	
	var labe3Exp = new dijit.form.Form({
		id : "exp3Label",
		name : "group6Exp",
		innerHTML : "3/4 mile",
		style: "display:inline-block; font-size:10pt; width:45px"
	}).placeAt("form62");
	
	var checkBox4Exp = new dijit.form.RadioButton({
		id : "exp4Check",
		value : "6_2_4",
		name : "group6Exp",
		checked : false,
		disabled : true,
		style: "display:inline-block; margin-left:20px"
	}).placeAt("form62");	
	
	var labe4Exp = new dijit.form.Form({
		id : "exp4Label",
		name : "group6Exp",
		innerHTML : "1 mile",
		style : "display:inline-block; font-size:10pt; width:45px"
	}).placeAt("form62");
	
	var checkBox5Exp = new dijit.form.RadioButton({
		id : "exp5Check",
		value : "6_2_5",
		name : "group6Exp",
		checked : false,
		disabled : true,
		style : "display:inline-block; margin-left:20px"
	}).placeAt("form62");
	
	var labe5Exp = new dijit.form.Form({
		id : "exp5Label",
		name : "group6Exp",
		innerHTML : "2 miles",
		style: "display:inline-block; font-size:10pt; width:45px"
	}).placeAt("form62");
	
	var checkBox6Exp = new dijit.form.RadioButton({
		id : "exp6Check",
		value : "6_2_6",
		name : "group6Exp",
		checked : false,
		disabled : true,
		style : "margin-left:20px"
	}).placeAt("form62");
	
	var labe6Exp = new dijit.form.Form({
		id : "exp6Label",
		name : "group6Exp",
		innerHTML : "5 miles",
		style: "display:inline-block; font-size:10pt; width:45px"
	}).placeAt("form62");
	
	// add children to cPane6
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
			container.selectChild("analysisPane", true);
		}
	});
	
	/*var nextButton3 = new dijit.form.Button({
		style : "float:right",
		label : "Next",
		onClick : function() {
			// Do something:
			var container = dijit.byId("accorContainer");
			container.selectChild("demoReportsPane", true);
		}
	});*/
	
	var nextButton4 = new dijit.form.Button({
		style : "float:right",
		label : "Next",
		onClick : function() {
			// Do something:
			if (dijit.byId("lepCheck").get("checked") == true && 
				dijit.byId("lepSelect").get("value") == "3_2_5_0") {					
					var container = dijit.byId("accorContainer");
					container.selectChild("analysisPane", true);
					alert("Please select a Language");
			}
			else{
				var container = dijit.byId("accorContainer");
				container.selectChild("demoSpatialUnitPane", true);
			}
			
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
	cPane3.addChild(nextButton4);
	//cPane4.addChild(nextButton4);
	cPane5.addChild(nextButton5);
  	
  	///////////////////////////////////
  	// functions:
  	
  	// reset type of analysis form
  	var resetLEP = function() {	
		// uncheck census tract and enable block group check		
		dijit.byId("blockGroupCheck").set("checked", false);
		dijit.byId("blockGroupCheck").set("disabled", false);
		dijit.byId("censusTractCheck").set("checked", false);
	};  			
  	
	var resetLEPsetDemo = function() {	
		// check census tract and disable block group check
		dijit.byId("blockGroupCheck").set("checked", false);
		dijit.byId("blockGroupCheck").set("disabled", true);
		dijit.byId("censusTractCheck").set("checked", true);
	};
  	// uncheck inside form
	var unCheck = function(formID) {		
		var dijitForm = dijit.byId(formID);
		aDijits = dijitForm.getDescendants();
		max = aDijits.length;
		var k;
		if (max > 0) {
			for ( k = 0; k < max; k++) {
				aDijits[k].set("checked", false);				
			}
		}
	};
	// this function uncheck all descendants 
	var unCheckAll = function(formID) {		
		var dijitForm = dijit.byId(formID);
		aDijits = dijitForm.getDescendants();
		max = aDijits.length;
		var i;
		if (max > 0) {
			for ( i = 0; i < max; i++) {
				if (aDijits[i].get('declaredClass') == 'dijit.form.CheckBox' ||
					aDijits[i].get('declaredClass') == 'dijit.form.RadioButton' ){
						// uncheck and enable each checkbox or radio button 
						aDijits[i].set("checked", false);
						aDijits[i].set("disabled", false);
						cPane3.removeChild(form32);
				}				
				dijit.byId("local1Check").set("disabled", true);
				dijit.byId("local2Check").set("disabled", true);
				dijit.byId("local3Check").set("disabled", true);
				dijit.byId("exp1Check").set("disabled", true);
				dijit.byId("exp2Check").set("disabled", true);
				dijit.byId("exp3Check").set("disabled", true);
				dijit.byId("exp4Check").set("disabled", true);
				dijit.byId("exp5Check").set("disabled", true);
				dijit.byId("exp6Check").set("disabled", true);
			}
		}
	};
	// this function get values to all descendants 
	var getCheckValues = function(formID) {		
		//var allValues = [];
		var allValues = new Array();
		var allColumNames = new Array();
		var dijitChecks = dijit.byId(formID);
		checkDijits = dijitChecks.getDescendants();
		Max = checkDijits.length;
		var j;
		if (Max > 0) {
			for ( j = 0; j < Max; j++) {
				if (checkDijits[j].get('declaredClass') == 'dijit.form.CheckBox' ||
					checkDijits[j].get('declaredClass') == 'dijit.form.RadioButton' ||
					checkDijits[j].get('declaredClass') == 'dijit.form.Select' ){
						
						if (checkDijits[j].get("checked") !== false &&
							checkDijits[j].get("value") !== null &&
							checkDijits[j].get("disabled") == false){	
								
								if (dijit.byId("hartfordCheck").get("checked") == false && 	
									dijit.byId("newhavenCheck").get("checked") == false ){
										alert("Please select a transit system");
										var container = dijit.byId("accorContainer");
										container.selectChild("transitSysPane", true);
										return 0;									
								}	
								
								if (dijit.byId("weekdayCheck").get("checked") == false && 	
									dijit.byId("weekendCheck").get("checked") == false ){
										alert("Please select a day of week");
										var container = dijit.byId("accorContainer");
										container.selectChild("dayOfWeekPane", true);
										return 0;									
								}		
								
								if (dijit.byId("loadFactorCheck").get("checked") == false &&
									dijit.byId("vehicleCheck").get("checked") == false &&
									dijit.byId("stopAmeniCheck").get("checked") == false &&
									dijit.byId("onTimeCheck").get("checked") == false &&
									dijit.byId("headwayCheck").get("checked") == false &&
									(dijit.byId("minorityCheck").get("checked") == false &&
									 dijit.byId("lowIncomeCheck").get("checked") == false &&
									 dijit.byId("lepCheck").get("checked") == false)){
										alert("Please select a type of analysis");
										var container = dijit.byId("accorContainer");
										container.selectChild("analysisPane", true);
										return 0;									
								}						
								
								if (dijit.byId("lepCheck").get("checked") == true && 
									dijit.byId("lepSelect").get("value") == "3_2_5_0"){
										alert("Please select a LEP language");
										var container = dijit.byId("accorContainer");
										container.selectChild("analysisPane", true);
										return 0;									
								}	
								
								if (dijit.byId("blockGroupCheck").get("checked") == false && 	
									dijit.byId("censusTractCheck").get("checked") == false ){
										alert("Please select a demographic spatial unit");
										var container = dijit.byId("accorContainer");
										container.selectChild("demoSpatialUnitPane", true);
										return 0;									
								}									
								
								if (dijit.byId("localCheck").get("checked") == true && 
									dijit.byId("loadFactorCheck").get("checked") == false &&
									dijit.byId("vehicleCheck").get("checked") == false &&
									dijit.byId("stopAmeniCheck").get("checked") == false &&
									dijit.byId("onTimeCheck").get("checked") == false &&
									dijit.byId("headwayCheck").get("checked") == false &&
									(dijit.byId("local1Check").get("checked") == false &&
									 dijit.byId("local2Check").get("checked") == false &&
									 dijit.byId("local3Check").get("checked") == false)){
										alert("Please select a buffer size for Local");
										var container = dijit.byId("accorContainer");
										container.selectChild("bufferDistancePane", true);
										return 0;									
								}					
								
								if (dijit.byId("expressCheck").get("checked") == true && 
									dijit.byId("loadFactorCheck").get("checked") == false &&
									dijit.byId("vehicleCheck").get("checked") == false &&
									dijit.byId("stopAmeniCheck").get("checked") == false &&
									dijit.byId("onTimeCheck").get("checked") == false &&
									dijit.byId("headwayCheck").get("checked") == false &&
									(dijit.byId("exp1Check").get("checked") == false &&
									 dijit.byId("exp2Check").get("checked") == false &&
									 dijit.byId("exp3Check").get("checked") == false &&
									 dijit.byId("exp4Check").get("checked") == false &&
									 dijit.byId("exp5Check").get("checked") == false &&
									 dijit.byId("exp6Check").get("checked") == false)){
										alert("Please select a buffer size for Express");
										var container = dijit.byId("accorContainer");
										container.selectChild("bufferDistancePane", true);
										return 0;									
								}			
								if (dijit.byId("localCheck").get("checked") == false && 	
									dijit.byId("expressCheck").get("checked") == false ){
										alert("Please select a buffer distance Local or express");
										var container = dijit.byId("accorContainer");
										container.selectChild("bufferDistancePane", true);
										return 0;									
								}								
								
								if (checkDijits[j].get("value") !== "2_3" ){
									if (checkDijits[j].get("value") !== "3_1_1" ){
										if (checkDijits[j].get("value") !== "3_1_5" ){
											if (checkDijits[j].get("value") !== "3_2_5" ){
												
												allValues.push(new Array(checkDijits[j].get("name") ,checkDijits[j].get("value")));
											
											}
											
										}
									}
									
								}
								
						}
				}				
			}
		}
		
		if (allValues.length > 0){
			 alert("The Selected Values are : \n" + allValues.join("\n"));
			// submitInteractiveAnalysisSettings(allValues);
			return allValues;
		}
		else alert("Select Parameters");
	};
	
	///////////////////  MAPPING  ////////////////////
	var arrAnalysis = [
		{ value : "1_1", system: "Hartford"},
		{ value : "1_2", system: "New Haven"},
		{ value : "2_1", day: "Weekday"},
		{ value : "2_2", day: "Weekend"},
		{ value : "3_1_1_1", type_of_analysis: "load_factor_AM"},
		{ value : "3_1_1_2", type_of_analysis: "load_factor_MID"},
		{ value : "3_1_1_3", type_of_analysis: "load_factor_PM"},
		{ value : "3_1_1_4", type_of_analysis: "load_factor_Off"},
		{ value : "3_1_1_5", type_of_analysis: "load_factor_Total"},
		{ value : "3_1_2",   type_of_analysis: "vehicle_age"},
		{ value : "3_1_3",   type_of_analysis: "shelters_percent"},
		{ value : "3_1_4",   type_of_analysis: "ontime_percentage"},
		{ value : "3_1_5_1", type_of_analysis: "frequency_AM"},
		{ value : "3_1_5_2", type_of_analysis: "frequency_MID"},
		{ value : "3_1_5_3", type_of_analysis: "frequency_PM"},
		{ value : "3_2_1",   type_of_analysis: "minoriry_area_percent"},
		{ value : "3_2_3",   type_of_analysis: "poverty_area_percent"},
		{ value : "3_2_5_1", type_of_analysis: "LEP_french"},
		{ value : "3_2_5_2", type_of_analysis: "LEP_french-creole"},
		{ value : "3_2_5_3", type_of_analysis: "LEP_italian"},
		{ value : "3_2_5_4", type_of_analysis: "LEP_polish"},
		{ value : "3_2_5_5", type_of_analysis: "LEP_russian"},
		{ value : "3_2_5_6", type_of_analysis: "LEP_spanish"},
		{ value : "3_2_5_7", type_of_analysis: "LEP_viet"},
		{ value : "5_1", unit: "Block_Group"},
		{ value : "5_2", unit: "Census_Tract"},
		{ value : "6_1", type: "Local"},
		{ value : "6_2", type: "Express"},
		{ value : "6_1_1", local_buffer: "25"},
		{ value : "6_1_2", local_buffer: "50"},
		{ value : "6_1_3", local_buffer: "75"},
		{ value : "6_2_1", express_buffer: "25"},
		{ value : "6_2_2", express_buffer: "50"},
		{ value : "6_2_3", express_buffer: "75"},
		{ value : "6_2_4", express_buffer: "1"},
		{ value : "6_2_5", express_buffer: "2"},
		{ value : "6_2_6", express_buffer: "5"}
		];
	
	function getDisplayForYAxis(typeAnalysis){
		var displayY = "";
		
		switch(typeAnalysis){
			case "load_factor_AM":
					displayY = " % Vehicle Capaicty Used "
					break;					
			case "load_factor_MID":
					displayY = " % Vehicle Capaicty Used "
					break;
			case "load_factor_PM":
					displayY = " % Vehicle Capaicty Used "
					break;
			case "load_factor_Off":
					displayY = " % Vehicle Capaicty Used "
					break;
			case "load_factor_Total":
					displayY = " % Vehicle Capaicty Used "
					break;
			case "vehicle_age":
					displayY = " Years "
					break;
			case "shelters_precent":
					displayY = " % Stops of Shelters "
					break;
			case "ontime_percentage":
					displayY = " On-Time Percentage "
					break;
			case "frequency_AM":
					displayY = " Minutes "
					break;
			case "frequency_MID":
					displayY = " Minutes "
					break;
			case "frequency_PM":
					displayY = " Minutes "
					break;
			case "minoriry_area_percent":
					displayY = " % Route Revenue Miles "
					break;
			case "poverty_area_percent":
					displayY = " % Route Revenue Miles "
					break;
			case "LEP_french":
					displayY = " LEP French Population Served "
					break;
			case "LEP_french-creole":
					displayY = " LEP French-Creole Population Served "
					break;
			case "LEP_italian":
					displayY = " LEP Italian Population Served "
					break;
			case "LEP_polish":
					displayY = " LEP Polish Population Served "
					break;
			case "LEP_russian":
					displayY = " LEP Russian Population Served "
					break;
			case "LEP_spanish":
					displayY = " LEP Spanish Population Served "
					break;
			case "LEP_viet":
					displayY = " LEP Vietnamese Population Served "
					break;
			default: 
					break;		
		}		
		return displayY;
	};
	
	var getSelectedAnalysis = function(){
		//var allValues = [];
		var SelectedValues = new Array();
		var dijitChecks = dijit.byId("accorContainer");
		checkDijits = dijitChecks.getDescendants();
		Max = checkDijits.length;
		var j;
		if (Max > 0) {
			for ( j = 0; j < Max; j++) {
				if (checkDijits[j].get('declaredClass') == 'dijit.form.CheckBox' ||
					checkDijits[j].get('declaredClass') == 'dijit.form.RadioButton' ||
					checkDijits[j].get('declaredClass') == 'dijit.form.Select' ){
						
						if (checkDijits[j].get("checked") !== false &&
							checkDijits[j].get("value") !== null &&
							checkDijits[j].get("disabled") == false){									
								
								valueNumber = checkDijits[j].get("value");								
								var columName = "";
								var vValue = "";
								
								switch (checkDijits[j].get("name")){									
									
									case "group1":			
										if (valueNumber == "1_1" ||
											valueNumber == "1_2" ){			
															
											columName = "Transit System:  \t";
											if (valueNumber == "1_1")
												vValue = " Hartford";
											else if (valueNumber == "1_2")
												vValue = " New Haven";										
											}					
											break;				
				
									case "group2":
										switch(valueNumber){
											case "2_1":
												if (dijit.byId("allDayOfWeekCheck").get("checked") == false){
													columName = "Day of Week:  \t\t";
													vValue = " Weekday ";
												}
												break;						
											case "2_2":
												if (dijit.byId("allDayOfWeekCheck").get("checked") == false){
													columName = "Day of Week:  \t\t";
													vValue = " Weekend ";
												}
												break;						
											case "2_3":
												columName = "Day of Week:  \t\t";
												vValue = " Weekday & Weekend ";
												break;											
										}		
										break;										
										
									case "group3":
										switch(valueNumber){
											case "3_1_1_1":
												columName = "Type of Analysis:  \t";
												vValue = " Load Factor AM Peak ";
												break;						
											case "3_1_1_2":
												columName = "Type of Analysis:  \t";
												vValue = " Load Factor Midday ";
												break;						
											case "3_1_1_3":
												columName = "Type of Analysis:  \t";
												vValue = " Load Factor PM Peak ";
												break;
											case "3_1_1_4":
												columName = "Type of Analysis:  \t";
												vValue = " Load Factor Off-Peak ";
												break;
											case "3_1_1_5":
												columName = "Type of Analysis:  \t";
												vValue = " Load Factor Total ";
												break;
											case "3_1_2":
												columName = "Type of Analysis:  \t";
												vValue = " Vehicle Age ";
												break;
											case "3_1_3":
												columName = "Type of Analysis:  \t";
												vValue = " Stop Amenities ";
												break;
											case "3_1_4":
												columName = "Type of Analysis:  \t";
												vValue = " On-Time % ";
												break;					
											case "3_1_5_1":
												columName = "Type of Analysis:  \t";
												vValue = " Headway AM Peak ";
												break;						
											case "3_1_5_2":
												columName = "Type of Analysis:  \t";
												vValue = " Headway Midday ";
												break;						
											case "3_1_5_3":
												columName = "Type of Analysis:  \t";
												vValue = " Headway PM Peak ";
												break;							
											case "3_2_1":
												columName = "Type of Analysis:  \t";
												vValue = " Minority ";
												break;
											case "3_2_3":
												columName = "Type of Analysis:  \t";
												vValue = " Low-Income ";
												break;
											case "3_2_5_1":
												columName = "Type of Analysis:  \t";
												vValue = " LEP French ";
												break;
											case "3_2_5_2":
												columName = "Type of Analysis:  \t";
												vValue = " LEP French-Creole ";
												break;
											case "3_2_5_3":
												columName = "Type of Analysis:  \t";
												vValue = " LEP Italian ";
												break;
											case "3_2_5_4":
												columName = "Type of Analysis:  \t";
												vValue = " LEP Polish ";
												break;
											case "3_2_5_5":
												columName = "Type of Analysis:  \t";
												vValue = " LEP Russian ";
												break;
											case "3_2_5_6":
												columName = "Type of Analysis:  \t";
												vValue = " LEP Spanish ";
												break;
											case "3_2_5_7":
												columName = "Type of Analysis:  \t";
												vValue = " LEP Vietnamese ";
												break;											
											default:
												break;							
										}		
										break;
									case "group5":
										if (valueNumber == "5_1" ||
											valueNumber == "5_2" ){
												columName = "Unit of Analysis:  \t";
												if (valueNumber == "5_1")
													vValue = " Block Group ";
												else if (valueNumber == "5_2")
													vValue = " Census Tract ";
										}
										break;
									case "group6":
										if (valueNumber == "6_1" ||
											valueNumber == "6_2" ){
												columName = "Buffer Type:  \t\t";
												if (valueNumber == "6_1" &&
													dijit.byId("expressCheck").get("checked") == true){
													vValue = " Local & Express";
													break;
												}													
												else if (valueNumber == "6_1" &&
													dijit.byId("expressCheck").get("checked") == false){
													vValue = " Local ";
													break;
												}
												else if (valueNumber == "6_2" &&
													dijit.byId("localCheck").get("checked") == false){
													vValue = " Express ";
													break;
												}
										}
										break;
									case "group6Local":
										if (valueNumber == "6_1_1" ||
											valueNumber == "6_1_2" ||
											valueNumber == "6_1_3" ){
												columName = "Buffer Distance:  \t";
												if (valueNumber == "6_1_1")
													vValue = " Local 1/4 mile ";
												else if (valueNumber == "6_1_2")
													vValue = " Local 1/2 mile ";
												else if (valueNumber == "6_1_3")
													vValue = " Local 3/4 mile ";
										}
										break;
									case "group6Exp":
										if (valueNumber == "6_2_1" ||
											valueNumber == "6_2_2" ||
											valueNumber == "6_2_3" ||
											valueNumber == "6_2_4" ||
											valueNumber == "6_2_5" ||
											valueNumber == "6_2_6" ){
												columName = "Buffer Distance:  \t";
												if (valueNumber == "6_2_1")
													vValue = " Express 1/4 mile ";
												else if (valueNumber == "6_2_2")
													vValue = " Express 1/2 mile ";
												else if (valueNumber == "6_2_3")
													vValue = " Express 3/4 mile ";
												else if (valueNumber == "6_2_4")
													vValue = " Express 1 mile ";
												else if (valueNumber == "6_2_5")
													vValue = " Express 2 miles ";
												else if (valueNumber == "6_2_6")
													vValue = " Express 5 miles ";
										}
										break;		
									default:
												break;														
								}
								if (vValue !== "")
								SelectedValues.push(columName + vValue);								
									
							}
						}
					}
				}			
				return SelectedValues;
		};
	
	// Create buttons programmatically:
	var startOverButton = new dijit.form.Button({
		label : "Clear Selections",
		style: "font-family: arial; text-color: blue",
		onClick : function() {
			// uncheck all 
			unCheckAll("accorContainer");
						
			// go to first container pane
			var container = dijit.byId("accorContainer");
			container.selectChild("transitSysPane", true);
		}
	},"restartButton");

	var generateRepButton = new dijit.form.Button({
		label : "Run Analysis",
		style: "font-family: arial; ",
		onClick : function() {
			// Do something:
			getCheckValues("accorContainer");
			var selectPa = getSelectedAnalysis();
			alert("The Selected Parameters are : \n" + selectPa.join("\n"));
			
		}
	},"generateButton");
	
	
	///////////////////////////////////////////////////////////
	// here are two alerts
	//alert(PO_DR);
	//alert(PO_IA);
	
	// create a new Tooltip and connect it to...
    var tooltip1_11 = new dijit.Tooltip({
      connectId: ["hartfordCheck","hartfordLabel"],
      label: TT_1_11,
      position: ["below"]
    });
    
    var tooltip1_12 = new dijit.Tooltip({
      connectId: ["newhavenCheck","newhavenLabel"],
      label: TT_1_12,
      position: ["below"]
    });
    
    var tooltip3_31 = new dijit.Tooltip({
      connectId: ["loadFactorCheck","loadFactorLabel"],
      label: TT_3_31,
      position: ["after"]
    });
    
    var tooltip3_32 = new dijit.Tooltip({
      connectId: ["vehicleCheck","vehicleLabel"],
      label: TT_3_32,
      position: ["after"]
    });
    
    var tooltip3_33 = new dijit.Tooltip({
      connectId: ["stopAmeniCheck","stopAmeniLabel"],
      label: TT_3_33,
      position: ["below"]
    });
    
    var tooltip3_34 = new dijit.Tooltip({
      connectId: ["onTimeCheck","onTimeLabel"],
      label: TT_3_34,
      position: ["below"]
    });
    
    var tooltip3_35 = new dijit.Tooltip({
      connectId: ["headwayCheck","headwayLabel"],
      label: TT_3_35,
      position: ["below"]
    });
    
    var tooltip4 = new dijit.Tooltip({
      connectId: ["demoReportsPane"],
      label: TT_4,
      position: ["below"]
    });
    
    var tooltip4_41 = new dijit.Tooltip({
      connectId: ["minorityCheck","minorityLabel"],
      label: TT_4_41,
      position: ["after"]
    });
    
    var tooltip4_43 = new dijit.Tooltip({
      connectId: ["lowIncomeCheck","lowIncomeLabel"],
      label: TT_4_43,
      position: ["below"]
    });
    
    var tooltip4_45 = new dijit.Tooltip({
      connectId: ["lepCheck","lepLabel"],
      label: TT_4_45,
      position: ["below"]
    });
    
    var tooltip5 = new dijit.Tooltip({
      connectId: ["demoSpatialUnitPane"],
      label: TT_5,
      position: ["below"]
    });
    
    var tooltip5_51 = new dijit.Tooltip({
      connectId: ["blockGroupCheck","blockGroupLabel"],
      label: TT_5_51,
      position: ["below"]
    });
    
    var tooltip5_52 = new dijit.Tooltip({
      connectId: ["censusTractCheck","censusTractLabel"],
      label: TT_5_52,
      position: ["below"]
    });
    
    var tooltip6_61 = new dijit.Tooltip({
      connectId: ["localCheck","localLabel"],
      label: TT_6_61
    });
    
    var tooltip6_62 = new dijit.Tooltip({
      connectId: ["expressCheck","expressLabel"],
      label: TT_6_62
    });
  	
});
