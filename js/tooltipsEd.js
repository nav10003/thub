require(["dijit/Tooltip", "dojo/domReady!"], function(Tooltip) {
	// create a new Tooltip and connect it
	new Tooltip({
		connectId : ["hartfordDiv"],
		label : "this is the tooltip of hartford"
	});
	// create a new Tooltip and connect it
	new Tooltip({
		connectId : ["newhavenDiv"],
		label : "this is the tooltip of new haven"
	});
	// create a new Tooltip and connect it
	new Tooltip({
		connectId : ["shorelineDiv"],
		label : "this is the tooltip of shoreline"
	});
	// create a new Tooltip and connect it
	new Tooltip({
		connectId : ["allTranSysDiv"],
		label : "this is the tooltip of allTranSys"
	});
}); 