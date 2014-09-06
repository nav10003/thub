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
 "dijit/form/Button", "dojo/query", "dojo/dom-construct", "dijit/_Widget", "dijit/_Templated", "dijit/form/Select"], 

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
		title : "Performance Measures",
		id : "performancePane"
	}).placeAt(aContainer);
	
	var cPane4 = new ContentPane({
		title : "Demographic Groups",
		id : "demoReportsPane"
	}).placeAt(aContainer);
	
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
		style : "display: inline-block; width:380px"
	});
	
	// create checkboxes and labels for cPane1
	var checkBox11 = new dijit.form.CheckBox({
		id : "hartfordCheck",
		name : "group1",
		value : "1_1",
		checked : false,
		style: "display:inline-block",
		onClick : function() {
			// Do something:			
			if (dijit.byId("allTransitSystemCheck").get("checked") == true &&
				dijit.byId("hartfordCheck").get("checked") == false) {
				// uncheck "All" checkbox	
				dijit.byId("allTransitSystemCheck").set("checked", false);
			}
			if (dijit.byId("newhavenCheck").get("checked") == true &&
				dijit.byId("hartfordCheck").get("checked") == true) {
				// check "All" checkbox	
				dijit.byId("allTransitSystemCheck").set("checked", true);
			}
		} 
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
	
	var checkBox12 = new dijit.form.CheckBox({
		id : "newhavenCheck",
		name : "group1",
		value : "1_2",
		checked : false,
		style : "display:inline-block; margin-left: 80px",
		onClick : function() {
			// Do something:			
			if (dijit.byId("allTransitSystemCheck").get("checked") == true &&
				dijit.byId("newhavenCheck").get("checked") == false) {
				// uncheck "All" checkbox	
				dijit.byId("allTransitSystemCheck").set("checked", false);
			}
			if (dijit.byId("newhavenCheck").get("checked") == true &&
				dijit.byId("hartfordCheck").get("checked") == true) {
				// check "All" checkbox	
				dijit.byId("allTransitSystemCheck").set("checked", true);
			}
		} 
	}).placeAt("form11");
	
	var labe12 = new dijit.form.Form({
		id : "newhavenLabel",
		innerHTML : "New Haven",
		style: "display:inline-block; width:80px"	
	}).placeAt("form11");
	
	var checkBox13 = new dijit.form.CheckBox({
		id : "allTransitSystemCheck",
		value : "1_3",
		name : "group1",
		checked : false,
		style : "display:inline-block; margin-left: 70px",
		onClick : function() {
			// Do something:			
			if (dijit.byId("allTransitSystemCheck").get("checked") == true) {
				// Select All
				dijit.byId("hartfordCheck").set("checked", true);
				dijit.byId("newhavenCheck").set("checked", true);
			}
			if (dijit.byId("allTransitSystemCheck").get("checked") == false) {
				// Unselect All
				dijit.byId("hartfordCheck").set("checked", false);
				dijit.byId("newhavenCheck").set("checked", false);
			}
		} 
	}).placeAt("form11");
	
	var labe13 = new dijit.form.Form({
		id : "allTransitSystemLabel",
		innerHTML : "All",
		style: "display:inline-block",
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
				// uncheck "All" checkbox	
				dijit.byId("allDayOfWeekCheck").set("checked", false);
			}
			if (dijit.byId("weekdayCheck").get("checked") == true &&
				dijit.byId("weekendCheck").get("checked") == true) {
				// check "All" checkbox	
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
				// uncheck "All" checkbox	
				dijit.byId("allDayOfWeekCheck").set("checked", false);
			}
			if (dijit.byId("weekdayCheck").get("checked") == true &&
				dijit.byId("weekendCheck").get("checked") == true) {
				// check "All" checkbox	
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
		style : "display: inline-block; width:560px;"
	});
	
	// create checkboxes and labels for cPane3
	var checkBox31 = new dijit.form.CheckBox({
		id : "loadFactorCheck",
		value : "3_1",
		name : "group3",
		checked : false,
		style: "display:inline-block",
		onClick : function() {
			// Do something:			
			if (dijit.byId("allPerformanceCheck").get("checked") == true &&
				dijit.byId("loadFactorCheck").get("checked") == false) {
				// uncheck "All" checkbox	
				dijit.byId("allPerformanceCheck").set("checked", false);
			}
			setAllPerform();
		},
		onChange : function() {
			// Do something:
			if (dijit.byId("loadFactorCheck").get("checked") == true){
				dijit.byId("loadFactorSelect").set("disabled", false);
			}
			if (dijit.byId("loadFactorCheck").get("checked") == false){
				dijit.byId("loadFactorSelect").set("disabled", true);
			}
		}
	}).placeAt("form31");
	
	var labe31 = new dijit.form.Form({
		id : "loadFactorLabel",
		innerHTML : "Load Factor",
		style: "display:inline-block; width:85px"
	}).placeAt("form31");
	
	var select31 = new dijit.form.Select({
		id : "loadFactorSelect",
		name : "group3",
		disabled : true,
		style:"display:inline-block;font-size:10pt",
		options: [
			{ label: "AM", selected: true, value: "3_1_1"},
			{ label: "MID", value: "3_1_2"},
			{ label: "PM", value: "3_1_3"},
			{ label: "Off", value: "3_1_4"},
			{ label: "Total", value: "3_1_5"},
		]
	}).placeAt("form31");
	
	var checkBox32 = new dijit.form.CheckBox({
		id : "vehicleCheck",
		value : "3_2",
		name : "group3",
		checked : false,
		style : "display:inline-block; margin-left: 29px",
		onClick : function() {
			// Do something:			
			if (dijit.byId("allPerformanceCheck").get("checked") == true &&
				dijit.byId("vehicleCheck").get("checked") == false) {
				// uncheck "All" checkbox	
				dijit.byId("allPerformanceCheck").set("checked", false);
			}
			setAllPerform();
		} 
	}).placeAt("form31");
	
	var labe32 = new dijit.form.Form({
		id : "vehicleLabel",
		innerHTML : "Vehicle Age",
		style: "display:inline-block; width:90px"
	}).placeAt("form31");
	
	var checkBox33 = new dijit.form.CheckBox({
		id : "stopAmeniCheck",
		value : "3_3",
		name : "group3",
		checked : false,
		style: "display:inline-block; margin-left: 60px",
		onClick : function() {
			// Do something:			
			if (dijit.byId("allPerformanceCheck").get("checked") == true &&
				dijit.byId("stopAmeniCheck").get("checked") == false){
				// uncheck "All" checkbox	
				dijit.byId("allPerformanceCheck").set("checked", false);
			}
			setAllPerform();
		} 
	}).placeAt("form31");
	
	var labe33 = new dijit.form.Form({
		id : "stopAmeniLabel",
		innerHTML : "Stop Amenities <br>",
		style: "display:inline; width:120px"
	}).placeAt("form31");
	
	var checkBox34 = new dijit.form.CheckBox({
		id : "onTimeCheck",
		value : "3_4",
		name : "group3",
		checked : false,
		style : "display:inline-block",
		onClick : function() {
			// Do something:			
			if (dijit.byId("allPerformanceCheck").get("checked") == true &&
				dijit.byId("onTimeCheck").get("checked") == false){
				// uncheck "All" checkbox	
				dijit.byId("allPerformanceCheck").set("checked", false);
			}
			setAllPerform();
		} 
	}).placeAt("form31");
	
	var labe34 = new dijit.form.Form({
		id : "onTimeLabel",		
		innerHTML : "On-Time %",
		style: "display:inline-block; width:90px"
	}).placeAt("form31");
	
	var checkBox35 = new dijit.form.CheckBox({
		id : "headwayCheck",
		value : "3_5",
		name : "group3",
		checked : false,
		style: "display:inline-block; margin-left:70px",
		onClick : function() {
			// Do something:			
			if (dijit.byId("allPerformanceCheck").get("checked") == true &&
				dijit.byId("headwayCheck").get("checked") == false){
				// uncheck "All" checkbox	
				dijit.byId("allPerformanceCheck").set("checked", false);
			}
			setAllPerform();
		},
		onChange : function() {
			// Do something:
			if (dijit.byId("headwayCheck").get("checked") == true){
				dijit.byId("headwaySelect").set("disabled", false);
			}
			if (dijit.byId("headwayCheck").get("checked") == false){
				dijit.byId("headwaySelect").set("disabled", true);
			}
		}
	}).placeAt("form31");
	
	var labe35 = new dijit.form.Form({
		id : "headwayLabel",
		innerHTML : "Headway",
		style: "display:inline-block; width:70px"
	}).placeAt("form31");
	
	var select35 = new dijit.form.Select({
		id : "headwaySelect",
		name : "group3",
		disabled : true,
		style:"display:inline-block;font-size:10pt",
		options: [
			{ label: "AM",  value: "3_5_1"},
			{ label: "MID", value: "3_5_2"},
			{ label: "PM",  value: "3_5_3"},
		]
	}).placeAt("form31");
	
	var checkBox36 = new dijit.form.CheckBox({
		id : "allPerformanceCheck",
		value : "3_6",
		name : "group3",
		checked : false,
		style : "display:inline-block; margin-left: 34px",
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
	}).placeAt("form31");
	
	var labe36 = new dijit.form.Form({
		id : "allPerformanceLabel",
		innerHTML : "All",
		style: "display:inline-block",
	}).placeAt("form31");
	
	// add children to cPane3
	cPane3.addChild(form31);

	// create forms for cPane4
	var form41 = new dijit.form.Form({
		id : "form41",		
		name : "group4",
		style : "display:block; width:460px"
	});
	var form42 = new dijit.form.Form({
		id : "form42",
		name : "group4",
		style : "display:block: width:460px"
	});
	
    // create checkboxes and labels for cPane4
	var checkBox41 = new dijit.form.CheckBox({
		id : "minorityCheck",
		value : "4_1",
		name : "group4",
		checked : false,
		style: "display:inline-block",
		onChange : function() {
			// Do something:
			if (dijit.byId("allDemoGroupsCheck").get("checked") == true &&
				dijit.byId("minorityCheck").get("checked") == false){
				// uncheck "All" checkbox	
				dijit.byId("allDemoGroupsCheck").set("checked", false);
			}
			setDemoUnit();
		} 
	}).placeAt("form41");
	
	var labe41 = new dijit.form.Form({
		id : "minorityLabel",
		innerHTML : "Minority",
		style: "display:inline-block; width:70px"
	}).placeAt("form41");
	
	var checkBox42 = new dijit.form.CheckBox({
		id : "nonMinorityCheck",
		value : "4_2",
		name : "group4",
		checked : false,
		style : "display:inline-block; margin-left: 80px",
		onChange : function() {
			// Do something:
			if (dijit.byId("allDemoGroupsCheck").get("checked") == true &&
				dijit.byId("nonMinorityCheck").get("checked") == false){
				// uncheck "All" checkbox	
				dijit.byId("allDemoGroupsCheck").set("checked", false);
			}
			setDemoUnit();
		} 
	}).placeAt("form41");
	
	var labe42 = new dijit.form.Form({
		id : "nonMinorityLabel",
		innerHTML : "Non-minority",
		style: "display:inline-block; width:100px"
	}).placeAt("form41");
	
	var checkBox43 = new dijit.form.CheckBox({
		id : "lowIncomeCheck",
		value : "4_3",
		name : "group4",
		checked : false,
		style: "display:inline-block; margin-left: 60px",
		onChange : function() {
			// Do something:
			if (dijit.byId("allDemoGroupsCheck").get("checked") == true &&
				dijit.byId("lowIncomeCheck").get("checked") == false){
				// uncheck "All" checkbox	
				dijit.byId("allDemoGroupsCheck").set("checked", false);
			}
			setDemoUnit();
		} 
	}).placeAt("form41");
	
	var labe43 = new dijit.form.Form({
		id : "lowIncomeLabel",
		innerHTML : "Low-income <br>",
		style: "display:inline"
	}).placeAt("form41");
	
	var checkBox44 = new dijit.form.CheckBox({
		id : "nonLowIncomeCheck",
		value : "4_4",
		name : "group4",
		checked : false,
		style : "display:inline-block",
		onChange : function() {
			// Do something:
			if (dijit.byId("allDemoGroupsCheck").get("checked") == true &&
				dijit.byId("nonLowIncomeCheck").get("checked") == false){
				// uncheck "All" checkbox	
				dijit.byId("allDemoGroupsCheck").set("checked", false);
			}
			setDemoUnit();	
		} 
	}).placeAt("form41");
	
	var labe44 = new dijit.form.Form({
		id : "nonLowIncomeLabel",
		innerHTML : "Non low-income",
		style: "display:inline-block; width:110px"
	}).placeAt("form41");
	
	var checkBox45 = new dijit.form.CheckBox({
		id : "lepCheck",
		value : "4_5",
		name : "group4",
		checked : false,
		style: "display:inline-block; margin-left:40px",
		onChange : function() {
			// Do something:
			if (dijit.byId("allDemoGroupsCheck").get("checked") == true &&
				dijit.byId("lepCheck").get("checked") == false){
				// uncheck "All" checkbox
				dijit.byId("allDemoGroupsCheck").set("checked", false);
			}			
			if (dijit.byId("lepCheck").get("checked") == true){
				dijit.byId("lepSelect").set("disabled", false);
				// check census tract and disable block group check
				setDemoUnit();
			}
			if (dijit.byId("lepCheck").get("checked") == false){
				dijit.byId("lepSelect").set("disabled", true);
				// check census tract and disable block group check
				setDemoUnit();				
			}			
		}
	}).placeAt("form41");
	
	var labe45 = new dijit.form.Form({
		id : "lepLabel",
		innerHTML : "LEP",
		style: "display:inline-block; width:30px",
	}).placeAt("form41");
	
	var select45 = new dijit.form.Select({
		id : "lepSelect",
		name : "group4",
		disabled : true,
		style:"display:inline-block; font-size:10pt",
		options: [
			{ label: "Select Language", value: "4_5_0", selected: true},
			{ label: "French",  value: "4_5_1"},
			{ label: "French-Creole", value: "4_5_2"},
			{ label: "Italian",  value: "4_5_3"},
			{ label: "Polish",  value: "4_5_4"},
			{ label: "Russian",  value: "4_5_5"},
			{ label: "Spanish",  value: "4_5_6"},
			{ label: "Vietnamese",  value: "4_5_7"},
		]
	}).placeAt("form41");
	
	var checkBox46 = new dijit.form.CheckBox({
		id : "allDemoGroupsCheck",
		value : "4_6",
		name : "group4",
		checked : false,
		style : "display:inline-block; margin-left:40px",
		onClick : function() {
			// Do something:			
			if (dijit.byId("allDemoGroupsCheck").get("checked") == true) {
				// Select All
				dijit.byId("minorityCheck").set("checked", true);
				dijit.byId("nonMinorityCheck").set("checked", true);
				dijit.byId("lowIncomeCheck").set("checked", true);
				dijit.byId("nonLowIncomeCheck").set("checked", true);
				dijit.byId("lepCheck").set("checked", true);
			}
			if (dijit.byId("allDemoGroupsCheck").get("checked") == false) {
				// Unselect All
				dijit.byId("minorityCheck").set("checked", false);
				dijit.byId("nonMinorityCheck").set("checked", false);
				dijit.byId("lowIncomeCheck").set("checked", false);
				dijit.byId("nonLowIncomeCheck").set("checked", false);
				dijit.byId("lepCheck").set("checked", false);
			}
		} 
	}).placeAt("form41");
	
	var labe36 = new dijit.form.Form({
		id : "allDemoGroupsLabel",
		innerHTML : "All",
		style: "display:inline-block",
	}).placeAt("form41");
	
	/*	 
	// create RadioButtons in form42
	var checkBox1LEP = new dijit.form.RadioButton({
		id : "frenchCheck",
		value : "451",
		name : "group4LEP",
		checked : false,
		//disabled : true,
		style : "display:inline-block; margin-left:180px",
	}).placeAt("form42");
	
	var labe1LEP = new dijit.form.Form({
		id : "frenchLabel",
		innerHTML : "French",
		style: "display:inline-block; font-size:10pt"
	}).placeAt("form42");
	
	var checkBox2LEP = new dijit.form.RadioButton({
		id : "italianCheck",
		value : "452",
		name : "group4LEP",
		checked : false,
		//disabled : true,
		style: "display:inline-block; margin-left:10px"
	}).placeAt("form42");
	
	var labe2LEP = new dijit.form.Form({
		id : "italianLabel",
		innerHTML : "Italian",
		style: "display:inline-block; font-size:10pt"
	}).placeAt("form42");
	
	var checkBox3LEP = new dijit.form.RadioButton({
		id : "russianCheck",
		value : "453",
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
		value : "454",
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
		value : "455",
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
		value : "456",
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
		value : "457",
		name : "group4LEP",
		checked : false,
		style: "display:inline-block; margin-left:10px"
	}).placeAt("form42");
	
	var labe7LEP = new dijit.form.Form({
		id : "vietnameseLabel",
		innerHTML : "Vietnamese",
		style: "display:inline-block; font-size:10pt"
	}).placeAt("form42");
	*/
	
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
		onClick : function() {
			// Do something:		
			if (dijit.byId("localCheck").get("checked") == true){
				dijit.byId("local1Check").set("disabled", false);
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
		onClick : function() {
			// Do something:
			if (dijit.byId("expressCheck").get("checked") == true){
				dijit.byId("exp1Check").set("disabled", false);
				dijit.byId("exp2Check").set("disabled", false);
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
			container.selectChild("performancePane", true);
		}
	});
	var nextButton3 = new dijit.form.Button({
		style : "float:right",
		label : "Next",
		onClick : function() {
			// Do something:
			var container = dijit.byId("accorContainer");
			container.selectChild("demoReportsPane", true);
		}
	});
	
	var nextButton4 = new dijit.form.Button({
		style : "float:right",
		label : "Next",
		onClick : function() {
			// Do something:
			if (dijit.byId("lepCheck").get("checked") == true && 
				(dijit.byId("frenchCheck").get("checked") == false && 
				dijit.byId("italianCheck").get("checked") == false && 
				dijit.byId("russianCheck").get("checked") == false && 
				dijit.byId("spanishCheck").get("checked") == false && 
				dijit.byId("frenchCreoleCheck").get("checked") == false && 
				dijit.byId("polishCheck").get("checked") == false && 
				dijit.byId("vietnameseCheck").get("checked") == false)) {
					
					var container = dijit.byId("accorContainer");
					container.selectChild("demoReportsPane", true);
					alert("please select a language");
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
	cPane3.addChild(nextButton3);
	cPane4.addChild(nextButton4);
	cPane5.addChild(nextButton5);
  	
  	///////////////////////////////////
  	// functions:
  	
  	// set the All performance check
  	var setAllPerform = function() {	
  		// check if Low-Income and LEP are checked  		
  		if (dijit.byId("loadFactorCheck").get("checked") == true &&
			dijit.byId("vehicleCheck").get("checked") == true &&
			dijit.byId("stopAmeniCheck").get("checked") == true &&
			dijit.byId("onTimeCheck").get("checked") == true &&
			dijit.byId("headwayCheck").get("checked") == true) {
			// check "All" checkbox	
			dijit.byId("allPerformanceCheck").set("checked", true);
		}
	};  	
  	// set demographic spatial unit
  	var setDemoUnit = function() {	
  		// check if Low-Income and LEP are checked  		
  		if (dijit.byId("lowIncomeCheck").get("checked") == false &&
  			dijit.byId("nonLowIncomeCheck").get("checked") == false &&
  			dijit.byId("lepCheck").get("checked") == false ){
			// uncheck census tract and enable block group check
			dijit.byId("blockGroupCheck").set("disabled", false);
			dijit.byId("blockGroupCheck").set("checked", false);
			dijit.byId("censusTractCheck").set("checked", false);
		}
		if (dijit.byId("lowIncomeCheck").get("checked") == true ||
  			dijit.byId("nonLowIncomeCheck").get("checked") == true ||
  			dijit.byId("lepCheck").get("checked") == true ){
			// uncheck census tract and enable block group check
			dijit.byId("blockGroupCheck").set("checked", false);
			dijit.byId("blockGroupCheck").set("disabled", true);
			dijit.byId("censusTractCheck").set("checked", true);
		}
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
					aDijits[i].get('declaredClass') == 'dijit.form.RadioButton'){
						// uncheck and enable each checkbox or radio button 
						aDijits[i].set("checked", false);
						aDijits[i].set("disabled", false);
						cPane4.removeChild(form42);
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
		var allValues = new Array();
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
								
								if (dijit.byId("lepCheck").get("checked") == true && 
									dijit.byId("lepSelect").get("value") == "4_5_0"){
										alert("Please select a LEP language");
										var container = dijit.byId("accorContainer");
										container.selectChild("demoReportsPane", true);
										return 0;									
								}			
								if (dijit.byId("localCheck").get("checked") == true && 
									(dijit.byId("local1Check").get("checked") == false &&
									dijit.byId("local2Check").get("checked") == false &&
									dijit.byId("local3Check").get("checked") == false)){
										alert("Please select a buffer size for Local");
										var container = dijit.byId("accorContainer");
										container.selectChild("bufferDistancePane", true);
										return 0;									
								}					
								if (dijit.byId("expressCheck").get("checked") == true && 
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
								allValues.push(new Array(checkDijits[j].get("name") ,checkDijits[j].get("value")));
								//allValues.push(checkDijits[j].get("value"));
						}
				}				
			}
		}
		alert("The Selected Values are : \n" + allValues.join("\n"));
		//submitInteractiveAnalysisSettings(allValues);
	};
	
	// Create buttons programmatically:
	var startOverButton = new dijit.form.Button({
		label : "Start Over",
		onClick : function() {
			// Do something:
			// uncheck all 
			unCheckAll("accorContainer");
			// go to first container pane
			var container = dijit.byId("accorContainer");
			container.selectChild("transitSysPane", true);
		}
	},"restartButton");

	var generateRepButton = new dijit.form.Button({
		label : "Generate Report",
		onClick : function() {
			// Do something:
			//alert("....Generating Report");
			getCheckValues("accorContainer");
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
      //position: ["below"]
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
      //position: ["below"]
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
