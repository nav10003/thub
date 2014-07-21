require(["dijit/form/CheckBox", "dojo/on", "dijit/registry", "dojo/parser", "dojo/ready"], function(CheckBox, on, registry, parser, ready) {
	// create function to the checkboxes
	ready(function() {
		parser.parse();

		registry.byId("allTranSysCheck").on("change", function() {
			if (registry.byId("allTranSysCheck").get("checked") == true) {
				// Select All
				registry.byId("hartfordCheck").set("checked", true);
				registry.byId("newhavenCheck").set("checked", true);
				registry.byId("shorelineCheck").set("checked", true);
			}
			if (registry.byId("allTranSysCheck").get("checked") == false) {
				// Unselect All
				registry.byId("hartfordCheck").set("checked", false);
				registry.byId("newhavenCheck").set("checked", false);
				registry.byId("shorelineCheck").set("checked", false);
			}
		}, true);

		registry.byId("allPerformCheck").on("change", function() {
			if (registry.byId("allPerformCheck").get("checked") == true) {
				// Select All
				registry.byId("loadfCheck").set("checked", true);
				registry.byId("vehicleCheck").set("checked", true);
				registry.byId("stopAmeCheck").set("checked", true);
				registry.byId("onTimeCheck").set("checked", true);
				registry.byId("headAwayCheck").set("checked", true);
			}
			if (registry.byId("allPerformCheck").get("checked") == false) {
				// Unselect All
				registry.byId("loadfCheck").set("checked", false);
				registry.byId("vehicleCheck").set("checked", false);
				registry.byId("stopAmeCheck").set("checked", false);
				registry.byId("onTimeCheck").set("checked", false);
				registry.byId("headAwayCheck").set("checked", false);
			}
		}, true);

		registry.byId("allDemoGrCheck").on("change", function() {
			if (registry.byId("allDemoGrCheck").get("checked") == true) {
				// Select All
				registry.byId("minorityCheck").set("checked", true);
				registry.byId("nonMinoCheck").set("checked", true);
				registry.byId("lowIncomeCheck").set("checked", true);
				registry.byId("nonLowInCheck").set("checked", true);
				registry.byId("LEPCheck").set("checked", true);
			}
			if (registry.byId("allDemoGrCheck").get("checked") == false) {
				// Unselect All
				registry.byId("minorityCheck").set("checked", false);
				registry.byId("nonMinoCheck").set("checked", false);
				registry.byId("lowIncomeCheck").set("checked", false);
				registry.byId("nonLowInCheck").set("checked", false);
				registry.byId("LEPCheck").set("checked", false);
			}
		}, true);

		registry.byId("startOverButton").on("click", function() {
			// Select All
			registry.byId("allTranSysCheck").set("checked", true);
			registry.byId("allPerformCheck").set("checked", true);
			registry.byId("allDemoGrCheck").set("checked", true);
			// Unselect All
			registry.byId("allTranSysCheck").set("checked", false);
			registry.byId("allPerformCheck").set("checked", false);
			registry.byId("allDemoGrCheck").set("checked", false);
			registry.byId("blockGrCheck").set("checked", false);
			registry.byId("censusTrCheck").set("checked", false);

		}, true);
	});
});
