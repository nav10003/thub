dojo.require("dojo._base");
dojo.require("dojo.xhrGet");
require(["dijit/form/Button", "dojo/dom", "dojo/domReady!"], function(Button, dom){
    // Create a button programmatically:
    var myButton = new Button({
        label: "test cgi",
        onClick: function(){
          dojo.xhrGet({
            url: 'test.cgi',
            load: helloCallback,
            error: helloError,
            content: {name: dom.byId('name').value }
          });
        }
    }, "test").startup();
});

function helloCallback(data, ioArgs){
  alert(data);
}
function helloError(data, ioArgs){
  alert('Error when retrieving data from the server!');
}