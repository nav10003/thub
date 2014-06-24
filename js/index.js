require(["dijit/form/Button", "dojo/dom", "dojo/domReady!"], function(Button, dom){
    // Create a button programmatically:
    var myButton = new Button({
        label: "dojo!",
        onClick: function(){
            // Do something:
            dom.byId("result").innerHTML += "Hello Dojo! ";
        }
    }, "test").startup();
});