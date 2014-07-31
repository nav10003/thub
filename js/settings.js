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


require(["dijit/layout/AccordionContainer", "dijit/layout/ContentPane", "dojo/domReady!",
 "dojo/dom", "dojo/dom-construct", "dijit/form/CheckBox", "dijit/registry", "dijit/form/TextBox",
 "dijit/form/Button", "dojo/query", "dojo/dom-construct", "dijit/_Widget", "dijit/_Templated"], 

function(AccordionContainer, ContentPane, dom, domConstruct, CheckBox, Button, query, registry, TextBox) {
	var aContainer = new AccordionContainer({
		id : "accorContainer",
		style : "height: 250px"
	}, "accorContainerDiv");
	
	var cPane1 = new ContentPane({
		title : "Select Transit System",
		id : "transitSysPane",
		content : 
		"<div id='transitSysDiv'> select hartford.. </div>"
		//'<button id="button1" data-dojo-type="dijit/form/Button"> Next </button>'
	}).placeAt(aContainer);
	
	var cPane2 = new ContentPane({
		title : "Select Day of Week",
		id : "dayOfWeekPane",
		content : 
		"<div id='dayOfWeekDiv'> select day of.. </div>"
	}).placeAt(aContainer); 
	
	var cPane3 = new ContentPane({
		title : "Select Performance Measures",
		id : "performancePane",
		content : "<div id='performanceDiv'> select load factor.. </div>"
	}).placeAt(aContainer);
	
	var cPane4 = new ContentPane({
		title : "Select Demographic Reports",
		id : "demoGroupPane",
		content : "<div id='demoGroupDiv'> select minority.. </div>"
	}).placeAt(aContainer);
	
	var cPane5 = new ContentPane({
		title : "Select Demographic Spatial Unit",
		id : "demoSpatialUnitPane",
		content : "<div id='demoSpatialUnitDiv'> select block group.. </div>"
	}).placeAt(aContainer);
	
	var cPane6 = new ContentPane({
		title : "Select Buffer Distance",
		id : "bufferDistancePane",
		content : "<div id='bufferDistanceDiv'> select local, express, rail </div>"
	}).placeAt(aContainer);
	 

	aContainer.startup();
	
	// add checkboxes for cPane1
	var checkBox11 = new dijit.form.CheckBox({
		name : "hartfordCheck",
		label :"hartford",
		checked : false,
		//style: "width: 100px",
	});
	var labe11 = new dijit.form.TextBox({
        name: 'text',
        title: 'My Label'
  	});
	
	var checkBox12 = new dijit.form.CheckBox({
		name : "newhavenCheck",
		checked : false,
		style : "margin-left: 20px",
	});
	
	var checkBox13 = new dijit.form.CheckBox({
		name : "allTransitSysCheck",
		checked : false,
		style : "margin-left: 20px",
		onClick : "function()" 
	});
	
	
	cPane1.addChild(checkBox11);
	cPane1.addChild(checkBox12);
	cPane1.addChild(checkBox13);
	
	
	// add buttons
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
