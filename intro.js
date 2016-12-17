//send diagnostic output to console
//(Ctrl-Shift-J in Chromium & Firefox to reveal console)
console.log("AYO");


var button = document.getElementById("butt");
var list = document.getElementById("thelist");
var listElements = document.getElementsByTagName("li");
var heading = document.getElementById("h");


var removeItem = function(e) {
    this.remove();
};


var mouseOver = function(e) {
    heading.innerHTML = this.innerHTML;
};


var mouseOut = function(e) {
    heading.innerHTML = "Hello World";
};


var addItem = function() {
    var n = document.createElement("li")
    var num = listElements.length;
    n.innerHTML = "item " + num;
    n.addEventListener("click", removeItem);
    n.addEventListener("mouseover", mouseOver);
    n.addEventListener("mouseout", mouseOut);
	  list.appendChild(n);
};


for (i = 0; i < listElements.length; i++) {
    listElements[i].addEventListener("click", removeItem);
    listElements[i].addEventListener("mouseover", mouseOver);
    listElements[i].addEventListener("mouseout", mouseOut);
};


button.addEventListener("click", addItem);
