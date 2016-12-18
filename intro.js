//send diagnostic output to console
//(Ctrl-Shift-J in Chromium & Firefox to reveal console)
console.log("AYO");


var heading = document.getElementById("h");
var listElements = document.getElementsByTagName("li");

var button = document.getElementById("butt");
var list = document.getElementById("thelist");

var button2 = document.getElementById("butt2");
var list2 = document.getElementById("thesecondlist");


var removeItem = function(e) {
    this.remove();
};


var mouseOver = function(e) {
    heading.innerHTML = this.innerHTML;
};


var mouseOut = function(e) {
    heading.innerHTML = "Hello World!";
};


var addItem = function() {
    var n = document.createElement("li")
    n.innerHTML = "new item";
    n.addEventListener("click", removeItem);
    n.addEventListener("mouseover", mouseOver);
    n.addEventListener("mouseout", mouseOut);
	  list.appendChild(n);
};


var fib = function(n) {
    if (n <= 1){
	     return 1;
    }
    else {
	     return fib(n - 1) + fib(n - 2);
    }
}


var addFib = function() {
    var n = document.createElement("li");
    var len = list2.getElementsByTagName("li").length;

    if (len == 0) {
        n.innerHTML = fib(len);
    }
    else {
        n.innerHTML = fib(len);
    }

    //n.addEventListener("click", removeItem);
    n.addEventListener("mouseover", mouseOver);
    n.addEventListener("mouseout", mouseOut);
	  list2.appendChild(n);
};


for (i = 0; i < listElements.length; i++) {
    var el = listElements[i];
    el.addEventListener("click", removeItem);
    el.addEventListener("mouseover", mouseOver);
    el.addEventListener("mouseout", mouseOut);
};


button.addEventListener("click", addItem);
button2.addEventListener("click", addFib);
