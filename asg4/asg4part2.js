// first i use addeventlistener to utilize the createnodes function when the button in the html is clicked

document.getElementById("activate").addEventListener("click", function(event) {
    event.preventDefault;
    createnodes();
}, false);

// for this function i will need an array. i make an array of 5 strings, which will be used as classes in conjunction with my css page later
var myarray = ["new1", "new2", "new3", "new4", "new5"];


// the createnodes function creates variables node and textnode with the methods createlement and createtextnode to make two new "li" elements in the html
function createnodes() {
    
    var node = document.createElement("li");
    var textnode = document.createTextNode("New One");
    node.appendChild(textnode);
    document.getElementById("list").appendChild(node);
    
    var nodetwo = document.createElement("li");
    var textnodetwo = document.createTextNode("New Two");
    nodetwo.appendChild(textnodetwo);
    document.getElementById("list").appendChild(nodetwo);
    
    // finally i use an array to randomize the name of the new elements. the new elements get that name as their class, and it will consequently effect their html
    var items = document.querySelectorAll("li");
    for (var i = 1; i < items.length; i++) {
        var mystyle = Math.floor(Math.random() * 5);
        items[i].className = myarray[mystyle];
    }
}