//thub data form sending and table return handling tmeplate V1.0
var s = ''; //global string used to make the .csv version of the dgrid table object
require(["dijit/form/Button", "dojo/dom", "dojo/domReady!", "dojo/dom-construct",
         "dojo/request","dojo/dom-form","dojo/json",
         "dgrid/Grid","dojo/number"], 
  function(Button, dom, ready, con, request, domform, json, Grid, dojoNum){
    // Create a button programmatically:
    var myButton = new Button({
        label: "login",
        onClick: function(evt){ //attach an ajax POST call to the onclick event
          //con.place("<p>Loging in...</p>","result");
          // collect all the form values here
          var u = dom.byId("uid").value;
          var p = dom.byId("pwd").value;
          // prevent the page from navigating after submit
          evt.stopPropagation();
          evt.preventDefault();
          // formulate the POST request and wait for the server response
          request.post('cgi-bin/login.py',{ //the URL of the server side handler
            data: {uid:u, pwd: p}, // pack up the form as an object
            handleAs: 'json',      // sets the return data type (in this case you get back a JS Object)
            timeout: 2000          // Wait 2 seconds for a response
          }).then(function(response){  // then is the area where you have an answer and can display results, etc
            if(!("ERROR" in response)){   //no errors, login was good
                //clear out every thing but the body and go on to report or interactive tool
                con.empty("body");
                
                //some test code showing a report result
                con.place('<div id="result"></div>',"body");
                con.place('<div id="dl"></div>',"body");
                con.place('<div id="grid"></div>',"result");
                data_grid(response,"grid");
                download_csv(response,"dl");
            }
            else {                 //errors with login try again and log the IP
                var result = dom.byId("result");
                var text = response['ERROR']['text'];
                var ip   = response['ERROR']['IP'];
                result.innerHTML = '<br>'+text+'<br>'+'from IP adress: '+ip;
            }
          });      
        }
    }, "login").startup(); //start the button to finish attaching to the test div
});

function make_2D_array(data){
  var table = [];
  //var fields = data[0];
  var f = data[0];                             //get the field names
  var fields = [];
  fields.push('#');
  for(e in f){ fields.push(f[e]); }
  //delete data[0];                              //delete for easy iteration
  var i = 1;
  for(e in data){
    if(e>0){
      row = data[e];
      row['#'] = i;
      table.push(row);
      i++;
    } 
  }
  return {'table':table,'fields':fields};
}

function data_grid(data,div){
  require(["dgrid/Grid"], function(Grid){
    var tf = make_2D_array(data);
    var fields = tf['fields'];
    var table  = tf['table'];       
    cols = {};
    for(var i = 0; i < fields.length; i++){ cols[fields[i]] = fields[i]; }
    var grid = new Grid({                                                 //dgrid example like excel
      bufferRows: Infinity,                                               //have to construct
      columns: cols
    },div);                                                            //attach to the grid div
    grid.renderArray(table); 
  });
}

//to do
function download_csv(data,div){
  require(["dojo/dom"], function(dom){
    var tf = make_2D_array(data);
    var fields = tf['fields'];
    var table  = tf['table'];
    //this code constructs a .csv string from the table object
    s = '';
    for(e in fields){ s+=String(fields[e])+','; }
    s = s.slice(0,s.length-1); //take off last ','
    s+='\n';
    for(i in table){
        for(j in fields){ s+=String(table[i][fields[j]])+','; }
        s = s.slice(0,s.length-1);
        s+='\n';
    }
    //creates a client-side dynamic HTML5 download link with naming of the date using some jquery libs
    dom.byId(div).innerHTML = '<a id="link" href="#">Download</a>';
    $("a").on("click", function () {
        var d = new Date().toISOString().slice(0, 19).replace(/-/g, "");
        $(this).attr("href", "data:application/octet-stream," + encodeURIComponent(s)).attr("download", "file-" + d + ".csv");
    });
  });
}
