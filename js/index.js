require(["dijit/form/Button", "dojo/dom", "dojo/domReady!", "dojo/dom-construct",
         "dojo/request","dojo/dom-form","dojo/json"],
         //"dgrid/Grid"], 
  function(Button, dom, ready, con, request, domform, json){//}, Grid){
    // Create a button programmatically:
    var myButton = new Button({
        label: "test cgi",
        onClick: function(evt){
          con.place("<p>Requesting...</p>","result");
          // prevent the page from navigating after submit
          u = dom.byId("uid").value
          p = dom.byId("pwd").value
          
          evt.stopPropagation();
          evt.preventDefault();
          
          request.post('cgi-bin/test.py',{
            // Send the username and password
            data: {uid:u, pwd: p},
            handleAs: 'json',
            // Wait 2 seconds for a response
            timeout: 2000
          }).then(function(data){/*
            con.place('<div id="grid">Grid Test</div>',"result");
            var grid = new Grid({
              columns: {
                geoid:"geoid",
                median:"median",
                total:"total"
              }
            },"grid");
            grid.renderArray(data);*/
            con.place("<p>response: <code>" + json.stringify(data) +"</code></p>","result");
          });      
        }
    }, "test").startup();
});