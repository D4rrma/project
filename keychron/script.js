var acc = document.getElementsByClassName("toggle");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}

var btn_switch = document.getElementsByClassName("red");
var btn_switch1 = document.getElementsByClassName("blue");
var btn_switch2 = document.getElementsByClassName("brown");
var bg = document.body;
var bg2 = Document.getElementsByClassName("slide");
var bg2 = document.getElementsByClassName("slide");
function key (){

  bg2[2].classList.toggle("newbg");
}


