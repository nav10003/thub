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


require(["dijit/layout/AccordionContainer", "dijit/layout/ContentPane", "dojo/domReady!"], 

function(AccordionContainer, ContentPane) {
	var aContainer = new AccordionContainer({
		id : "accorContainer",
		style : "height: 250px"
	}, "accorContainerDiv");
	
	aContainer.addChild(new ContentPane({
		title : "Select Transit System",
		id : "transitSysPane",
		content : 
		'<div id="transitSysDiv"> select hartford.. </div>'+
		'<button id="button1" data-dojo-type="dijit/form/Button"> Next </button>'
	}));
	aContainer.addChild(new ContentPane({
		title : "Select Performance Measures",
		id : "performancePane",
		content : "<div id='performanceDiv'> select load factor.. </div>"
	}));
	aContainer.addChild(new ContentPane({
		title : "Select Demographic Groups",
		id : "demoGroupPane",
		content : "<div id='demoGroupDiv'> select minority.. </div>"
	}));
	aContainer.addChild(new ContentPane({
		title : "Select Demographic Spatial Unit",
		id : "demoSpatialUnitPane",
		content : "<div id='demoSpatialUnitDiv'> select block group.. </div>"
	}));
	aContainer.addChild(new ContentPane({
		title : "Select Buffer Distance",
		id : "bufferDistancePane",
		content : "<div id='bufferDistanceDiv'> select local, express, rail </div>"
	}));
	 
	var Pane6 = new ContentPane({
		title : "Sample Pane",
		id : "samplePane",
		content : "I did it!"
	});
	aContainer.addChild(Pane6);
	
	
	
	aContainer.startup();
	
	domConstruct.create("button", {
		id : "RestartButton",
		innerHTML: "the button"			
	}, "transitSysPane");
	
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
	
	var myButton1 = new Button({
		label : "Next",
		onClick : function() {
			// Do something:
			var container = dijit.byId("accorContainer");
			container.selectChild("performancePane", true);
		}
	});

});
