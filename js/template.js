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
          request.post('cgi-bin/template.py',{ //the URL of the server side handler
            data: {uid:u, pwd: p}, // pack up the form as an object
            handleAs: 'json',      // sets the return data type (in this case you get back a JS Object)
            timeout: 2000          // Wait 2 seconds for a response
          }).then(function(response){  // then is the area where you have an answer and can display results, etc
            //example of what you can do after you get a table back...
            
          });      
        }
    }, "test").startup(); //start the button to finish attaching to the test div
});
