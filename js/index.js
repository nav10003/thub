require(["dijit/form/Button", "dojo/dom", "dojo/domReady!", "dojo/dom-construct","dojo/request","dojo/dom-form","dojo/json"], 
  function(Button, dom, ready, con, request, form, json){
    // Create a button programmatically:
    var myButton = new Button({
        label: "test cgi",
        onClick: function(){
          con.place("<p>Requesting...</p>","result");
          request.get('cgi-bin/test.cgi',{
            data: dom.byId("name").value,
            handleAs: 'json'
            }).then(function(data){
              con.place("<p>response: <code>" + json.stringify(data) +"</code></p>","result");
            }, function(err){
              domConst.place("<p>error: <p>" + err.response.text + "</p></p>", "result");
            });
        }
      }, "test").startup();
});