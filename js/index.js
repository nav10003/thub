//thub data form sending and table return handling tmeplate V1.0
var s = ''; //global string used to make the .csv version of the dgrid table object
require(["dijit/form/Button", "dojo/dom", "dojo/domReady!", "dojo/dom-construct",
         "dojo/request","dojo/dom-form","dojo/json",
         "dgrid/Grid","dojo/number"], 
  function(Button, dom, ready, con, request, domform, json, Grid, dojoNum){
    // Create a button programmatically:
    var myButton = new Button({
        label: "test cgi",
        onClick: function(evt){ //attach an ajax POST call to the onclick event
          con.place("<p>Requesting...</p>","result");
          // collect all the form values here
          u = dom.byId("uid").value;
          p = dom.byId("pwd").value;
          // prevent the page from navigating after submit
          evt.stopPropagation();
          evt.preventDefault();
          // formulate the POST request and wait for the server response
          request.post('cgi-bin/test.py',{ //the URL of the server side handler
            data: {uid:u, pwd: p}, // pack up the form as an object
            handleAs: 'json',      // sets the return data type (in this case you get back a JS Object)
            timeout: 2000          // Wait 2 seconds for a response
          }).then(function(data){  // then is the area where you have an answer and can display results, etc
            //example of what you can do after you get a table back...
            con.place('<div id="grid"></div>',"result");  //make a new div called grid
            var table = []                                //empty array
            for(e in data){ table.push(data[e]); }        //fill the array with rows
            var grid = new Grid({                                                 //dgrid example like excel
              bufferRows: Infinity,                                               //have to construct
              columns: {                                                          //data as an array
                "geoid":"geoid",                                                  //and specify the names
                "median":{"label":"median","formatter":dojoNum.format},           //of the columns to display
                "total":{"label":"total", "formatter":dojoNum.format}             //and format the data if needed
              }                                                                   //
            },"grid");                                                            //attach to the grid div
            grid.renderArray(table);                                              //load the data in from the array
            
            //this code constructs a .csv string from the table object
            s = '';
            for(e in table){ s+=String(table[e].geoid)+','+String(table[e].median)+','+String(table[e].total)+'\n'; }
            //creates a client-side dynamic HTML5 download link with naming of the date using some jquery libs
            dojo.byId("dl").innerHTML = '<a id="link" href="#">Download</a>';
            $("a").on("click", function () {
              var d = new Date().toISOString().slice(0, 19).replace(/-/g, "");
              $(this).attr("href", "data:application/octet-stream," + encodeURIComponent(s)).attr("download", "file-" + d + ".csv");
            });
            //con.place("<p>response: <code>" + json.stringify(data) +"</code></p>","result"); //alternate place code
          });      
        }
    }, "test").startup(); //start the button to finish attaching to the test div
});
