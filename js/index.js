require(["dijit/form/Button", "dojo/dom", "dojo/domReady!", "dojo/dom-construct","dojo/request","dojo/dom-form","dojo/json"], 
  function(Button, dom, ready, con, request, domform, json){
    // Create a button programmatically:
    var myButton = new Button({
        label: "test cgi",
        onClick: function(evt){
          con.place("<p>Requesting...</p>","result");
          // prevent the page from navigating after submit
          n = dom.byId("name").value
          a = dom.byId("age").value
          
          evt.stopPropagation();
          evt.preventDefault();
          
          request.post('cgi-bin/test.cgi',{
            // Send the username and password
            data: {name:n, age: a},
            handleAs: 'json',
            // Wait 2 seconds for a response
            timeout: 2000
          }).then(function(data){
            con.place("<p>response: <code>" + json.stringify(data) +"</code></p>","result");
          });      
        }
    }, "test").startup();
});