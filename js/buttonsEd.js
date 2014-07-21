require(["dijit/form/Button", "dojo/dom", "dijit/registry", "dojo/domReady!"], function(Button, registry, dom) {
	// Create a button programmatically:
	var myButton1 = new Button({
		label : "Next",
		onClick : function() {
			// Do something:
			var container = dijit.byId("accorContainer");
			container.selectChild("cpane2", true);
		}
	}, "nextButton1").startup();
	// Create a button programmatically:
	var myButton2 = new Button({
		label : "Next",
		onClick : function() {
			// Do something:
			var container = dijit.byId("accorContainer");
			container.selectChild("cpane3", true);

		}
	}, "nextButton2").startup();
	// Create a button programmatically:
	var myButton3 = new Button({
		label : "Next",
		onClick : function() {
			// Do something:
			var container = dijit.byId("accorContainer");
			container.selectChild("cpane4", true);
		}
	}, "nextButton3").startup();
	// Create a button programmatically:
	var myButton4 = new Button({
		label : "Next",
		onClick : function() {
			// Do something:
			var container = dijit.byId("accorContainer");
			container.selectChild("cpane5", true);
		}
	}, "nextButton4").startup();
	// Create a button programmatically:
	var myButton5 = new Button({
		label : "Start Over",
		onClick : function() {
			// Do something:
			var container = dijit.byId("accorContainer");
			container.selectChild("cpane1", true);
		}
	}, "startOverButton").startup();

	var myButton6 = new Button({
		label : "Generate Report",
		onClick : function() {
			// Do something:
			alert("I was clicked: Generate Report");
		}
	}, "generateRepButton").startup();
}); 