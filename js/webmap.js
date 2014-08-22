dojo.require("dojo.dom");
dojo.require("dojo.on");
dojo.require("dojo._base.window");
dojo.require("dojo._base.array");
dojo.require("dojo._base.lang");
dojo.require("dojo.dnd.Moveable");
dojo.require("dojo.domReady!");
dojo.require("dojo.dom-style");
dojo.require("dojo.dom-construct");
dojo.require("dojo.Deferred");
dojo.require("dojo.keys");
dojo.require("dojo.on");
dojo.require("dojo.NodeList-manipulate");
dojo.require("dojo.ready");
dojo.require("dojo.html");
dojo.require("dojox.layout.ExpandoPane");
dojo.require("dijit.popup");
dojo.require("dijit.ColorPalette");
dojo.require("dijit.form.Form");
dojo.require("dijit.form.Button");
dojo.require("dijit.form.DropDownButton");
dojo.require("dijit.form.MultiSelect");
dojo.require("dijit.MenuItem");
dojo.require("dijit.CheckedMenuItem");
dojo.require("dijit.Dialog");
dojo.require("dijit.DropDownMenu");
dojo.require("dijit.form.ComboBox");
dojo.require("dijit.form.CheckBox");
dojo.require("dijit.form.ToggleButton");
dojo.require("dijit.layout.BorderContainer");
dojo.require("dijit.layout.ContentPane");
dojo.require("dijit.layout.TabContainer");
dojo.require("dijit.Toolbar");
dojo.require("dijit.TooltipDialog");
dojo.require("dijit.registry");
dojo.require("esri.map");
dojo.require("esri.dijit.BasemapGallery");
dojo.require("esri.arcgis.utils");
dojo.require("esri.layers.QueryDataSource");
dojo.require("esri.layers.GraphicsLayer");
dojo.require("esri.layers.FeatureLayer"); //needed to access the crash points
dojo.require("esri.renderers.Renderer");  //used for rendering points
dojo.require("esri.tasks.query");         //defrred query framework for basic query functionality
dojo.require("esri.toolbars.navigation"); //needed for zooming paning tools
dojo.require("esri.toolbars.draw");       //needed for drawing tools
dojo.require("esri.dijit.Geocoder");      //needed to search by town, street etc
dojo.require("esri.dijit.Legend");        //needed for a side legenend, not implemented yet!!!
dojo.require("esri.dijit.Popup");         //needed to get the basic popup functionality working
dojo.require("esri.dijit.Scalebar");      //needed to make an auto-sizing scale bar (with km/mi)

var map, geocoder, scalebar, navbar, sel_button, layers, layer_id, lay_button, lay_boxes, next_query, by, m;

function pageReady() {
  //map object bound to a customized Info popup
  map = new esri.Map("mapDiv", {
    basemap: "streets",
    center: [-72.6856,41.7636],
    zoom: 12
  });
  
  //add the basemap gallery, in this case we'll display maps from ArcGIS.com including bing maps
  var basemapGallery = new esri.dijit.BasemapGallery({
    showArcGISBasemaps: true,
    map: map
  }, "basemap");
  basemapGallery.startup();     
  basemapGallery.on("error", function(msg) {
    console.log("basemap gallery error:  ", msg);
  });

  // create the geocoder, this is the text search bar
  geocoder = new esri.dijit.Geocoder({ 
    autoComplete: true,
    maxLocations: 5,
    map: map 
  }, "search");
  geocoder.startup();
      
  //add the scale bar, this is the zoom in zoom out (mouse-scroll is keyed to this as well)
  scalebar = new esri.dijit.Scalebar({
    map: map,
    scalebarUnit: "dual",
    attachTo: "bottom-left"
  });
  
  //Selection and Viewing Tools-------------------------------------------------------------------------------------------
  //Takes a Map Service URL (AKA GIS server)
  var gis_HA = "http://gis-srv.ad.engr.uconn.edu:6080/arcgis/rest/services/thub_HA/MapServer";
  var HALayer = new esri.layers.ArcGISDynamicMapServiceLayer(gis_HA);
  HALayer.setVisibleLayers([0,1,2,3,4,5,6,7,8,9,10]); //make a few of the codes visible
  
  //add the layer controller
  var codes = {};  //array container that holds all layer objects which contain parameters for controlling the map
  require(["dojo/request/xhr","dojo/json"], function(xhr, json){
    xhr("json/layernames_codes.json", {
      handleAs: "json"
    }).then(function(response){
        codes = response; //save the data for looking at further
      // Do something with the handled data
    }, function(err){
      // Handle the error condition
    }, function(evt){
      // Handle a progress event from the request if XHR2
    });
  });
  console.log(codes);
  map.addLayer(HALayer);

  
 //example code here       XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
  //var gis_srv = "http://gis-srv.ad.engr.uconn.edu:6080/arcgis/rest/services/cas/MapServer";
  //var crashLayer = new esri.layers.ArcGISDynamicMapServiceLayer(gis_srv,{opacity:0.5,id:"crash"});
  //Takes a URL to a non cached map service.
  //crashLayer.setVisibility(false); //command for changing visibility
  //map.addLayer(crashLayer)
  //example code ends hereXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
   
  // add the navigation tool bar
  navbar = new esri.toolbars.Navigation(map);
  //dojo.connect(navbar,"onExtentHistoryChange", extentHistoryChangeHandler);
  
  //mouse tools visual indicator array
  var m_buttons = ["pan","zoomin","zoomout","zoomprev","zoomnext"];
  var b_colors = { desel:"transparent", sel:"#a3d1ff" }; //unselected, selected colors
  
  //mouse pan tool
  var mouse_pan = new dijit.form.Button({
    iconClass:'panIcon',
    onClick: function(){
        //selbar.deactivate();
        navbar.activate(esri.toolbars.Navigation.PAN);
        dojo.style(m_buttons[0], { backgroundColor: b_colors.sel });
        dojo.forEach(m_buttons.filter(function(i){ return i != m_buttons[0]}), function(buttons){
          dojo.style(buttons, {backgroundColor: b_colors.desel})
        });
      }
  }, "pan");
  
  //mouse zoom in tool
  var mouse_z_in = new dijit.form.Button({
    iconClass:'zoominIcon',
    onClick: function(){
        //selbar.deactivate();
        navbar.activate(esri.toolbars.Navigation.ZOOM_IN);
        dojo.style(m_buttons[1], { backgroundColor: b_colors.sel });
        dojo.forEach(m_buttons.filter(function(i){ return i != m_buttons[1]}), function(buttons){
          dojo.style(buttons, {backgroundColor: b_colors.desel})
        });
      }
  }, "zoomin");
  
  //mouse zoom out tool
  var mouse_z_out = new dijit.form.Button({
    iconClass:'zoomoutIcon',
    onClick: function(){
        //selbar.deactivate();
        navbar.activate(esri.toolbars.Navigation.ZOOM_OUT);
        dojo.style(m_buttons[2], { backgroundColor: b_colors.sel });
        dojo.forEach(m_buttons.filter(function(i){ return i != m_buttons[2]}), function(buttons){
          dojo.style(buttons, {backgroundColor: b_colors.desel})
        });
      }
  }, "zoomout");
  
  //zoom history previous
  var zoom_prev = new dijit.form.Button({
    iconClass:'zoomprevIcon',
    onClick: function(){
        //selbar.deactivate();
        navbar.zoomToPrevExtent();
        dojo.style(m_buttons[3], { backgroundColor: b_colors.sel });
        dojo.forEach(m_buttons.filter(function(i){ return i != m_buttons[3]}), function(buttons){
          dojo.style(buttons, {backgroundColor: b_colors.desel})
        });
      }
  }, "zoomprev");
  
  //zoom history forward
  var zoom_next = new dijit.form.Button({
    iconClass:'zoomnextIcon',
    onClick: function(){
        //selbar.deactivate();
        navbar.zoomToNextExtent();
        dojo.style(m_buttons[4], { backgroundColor: b_colors.sel });
        dojo.forEach(m_buttons.filter(function(i){ return i != m_buttons[4]}), function(buttons){
          dojo.style(buttons, {backgroundColor: b_colors.desel})
        });        
      }
  }, "zoomnext");

  
  //movable floating window enabling
  var move_toolbar = new dojo.dnd.Moveable(dojo.byId("toolbar"),{skip:true});

  //check for direct url ids to query on
  //var urlobject = dojo.queryToObject(dojo.doc.location.search.substr((dojo.doc.location.search[0] === "?" ? 1 : 0)));

}
    
dojo.ready(pageReady); //makes a function call to pageReady()?







