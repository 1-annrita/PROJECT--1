var myMessage = document.getElementById("message");

function showMessage() {
    myMessage.className = "show";
}

setTimeout(showMessage, 3000);


var colourChanger = document.getElementById("color-changer");

var colors = ["red", "blue", "green", "pink", "yellow"];
var counter = 0;

function changeColour() {

    if (counter >= colors.length) {
        counter = 0;
    }
    colourChanger.style.background = colors[counter];
    counter++;
}
var myTimer = setInterval(changeColour, 3000);


colourChanger.onclick = function () {

    clearInterval(myTimer);
    colourChanger.innerHTML = "Timer stopped";
};