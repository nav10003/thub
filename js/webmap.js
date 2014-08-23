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

var map, geocoder, scalebar, navbar, sel_button, layers, layer_id, name_keys, lay_button, lay_boxes, next_query, by, m;
var services_ready = 0; //snchronize independant events
var names = {};  //given the layer_name string returns the integer 1 to n
var codes = {};  //given the integer 1 to n return the layer name string
require(["dojo/request/xhr","dojo/json"], function(xhr, json){
  xhr("json/codes2layernames.json", {
    handleAs: "json"
}).then(function(response){
  for(e in response){
    var i = parseInt(e);
    codes[i] = response[e];
    names[codes[i]] = i;
  }
  dojo.ready(pageReady); //imposes strict order loading json first...
  //console.log(names);
  }, function(err){
    console.log("error loading");
  });
});

function pageReady() {
  //map object bound to a customized Info popup
  map = new esri.Map("mapDiv", {
    basemap: "gray",
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
  
  //DEMO OF BINDING ONE MAP SERVICE AND CONTROLLING ITS LAYERS VISIBILITY------------------------------------------------
  //Takes a Map Service URL (AKA GIS server)
  layers = {}; //use this to keep all the map services thub_census, thub_HA, thub_NH
  //attach all three map services, controls hve to wait to read the layerInfos from the service
  //which is delayed, so we wait for all three to complete and then build a map and read the json file
  //to finilaize the name and code mappings so that they can toggle layers by name
  services_ready = 0;
  var gis_CE = "http://gis-srv.ad.engr.uconn.edu:6080/arcgis/rest/services/thub_census/MapServer";
  layers['Census'] = new esri.layers.ArcGISDynamicMapServiceLayer(gis_CE);
  layers['Census'].setVisibleLayers([-1]); //[-1] means show no layers
  layers['Census'].on('load',map_layer_names); //attach ajax call that waits for all three
  map.addLayer(layers['Census']);
  
  var gis_HA = "http://gis-srv.ad.engr.uconn.edu:6080/arcgis/rest/services/thub_HA/MapServer";
  layers['Hartford'] = new esri.layers.ArcGISDynamicMapServiceLayer(gis_HA);
  layers['Hartford'].setVisibleLayers([-1]); //[-1] means show no layers
  layers['Hartford'].on('load',map_layer_names); //attach ajax call that waits for all three
  map.addLayer(layers['Hartford']);
  
  var gis_NH = "http://gis-srv.ad.engr.uconn.edu:6080/arcgis/rest/services/thub_NH/MapServer";
  layers['New Haven'] = new esri.layers.ArcGISDynamicMapServiceLayer(gis_NH);
  layers['New Haven'].setVisibleLayers([-1]); //[-1] means show no layers
  layers['New Haven'].on('load',map_layer_names); //attach ajax call that waits for all three
  map.addLayer(layers['New Haven']);

  //HERE is the magic once it is setup
  //layers['Hartford'].setVisibleLayers([names['Hartford_Stops']]); //use the code to tun on layers by name...
  //DEMO OF BINDING ONE MAP SERVICE AND CONTROLLING ITS LAYERS VISIBILITY------------------------------------------------
   
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

//waits until all 3 layers and the json file have loaded before
//building the mapping one time to resolve layers by name
function map_layer_names(){
  services_ready++;
  //attach ajax call that waits for all four items to be read
  if(services_ready >= 3){ //we need all three services and the json code file to be ready
    var fkeys = {};
    var rkeys = {};
    for(e in layers){
        fkeys[e] = {};
        rkeys[e] = {};
        var infos = layers[e].layerInfos;
        for(i in infos){
            var j = parseInt(i);
            var name = parseInt(infos[i]['name']);           //leave out group layer roots
            if(!isNaN(name)){
                fkeys[e][name] = j;
                rkeys[e][j] = name;
            } //so only int values map
        }
    }
    name_keys = fkeys;
    //console.log(name_keys);
    
    //test out a layer code from two different services...
    I = ["Hartford_Wkdy_Local_97","Hartford_Wkdy_Local_97_25","Hartford_Wkdy_Local_97_50","Hartford_Wkdy_Local_97_75",
         "New_Haven_Wkday_Local_129","New_Haven_Wkday_Local_129_25","New_Haven_Wkday_Local_129_50","New_Haven_Wkday_Local_129_75"];
    turn_on_layers(I);
  }
}

//give the string, get back the service and index into it
function get_index(s){
    var i = names[s]; //test out s = 'Hartford_Saturday_Local_10'
    var l = ''; //the service index that matches
    //find which service the layer in in...
    for(e in layers){
        if(i in name_keys[e]){ l = e; }
    }
    return {'service':l, 'index':name_keys[l][i]};
}

//returns an array of service/index objects used to display layers
function index_list(S){ //S is an array of name strings you want to see...
    var A = [];
    for(var i = 0; i < S.length; i++){ A.push(get_index(S[i])); }
    return A;
}

//turns on the layers named in array S
//builds a map called services that will have all
//indexes good to go to minimize toggling drawing etc...
function turn_on_layers(S){
    var services = {};
    var E = index_list(S);
    for(e in E){
        var s = E[e]['service'];
        var i = E[e]['index'];
        if(s in services){ services[s].push(i); }
        else{ services[s] = [i]; }
    }
    //main side effect here that turns off and on layers by name
    for(e in layers){
        if(e in services){ layers[e].setVisibleLayers(services[e]); } //turn on if selected
        else{              layers[e].setVisibleLayers([-1]); }        //turn off if not needed
    }
}




