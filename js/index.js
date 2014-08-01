require(["dijit/form/Button", "dojo/dom", "dojo/domReady!", "dojo/dom-construct",
         "dojo/request","dojo/dom-form","dojo/json",
         "dgrid/Grid","dojo/number"], 
  function(Button, dom, ready, con, request, domform, json, Grid, dojoNum){
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
          }).then(function(data){
            con.place('<div id="grid">Grid Test</div>',"result");
            var table = []
            for(e in data){ table.push(data[e]); }

            var grid = new Grid({
              bufferRows: Infinity,
              columns: {
                "geoid":"geoid",
                "median":{"label":"median","formatter":dojoNum.format},
                "total":{"label":"total", "formatter":dojoNum.format}
              }
            },"grid");
            grid.renderArray(table);
            
            //con.place("<p>response: <code>" + json.stringify(data) +"</code></p>","result");
          });      
        }
    }, "test").startup();
});