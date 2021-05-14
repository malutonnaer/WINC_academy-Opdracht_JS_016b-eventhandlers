var buttonAlert = document.getElementById('mybutton');

buttonAlert.addEventListener("click", makeAlert);

function makeAlert() {
    alert("Button Clicked")
};

var buttonBackground = document.getElementById('background-button');
const bodyElement = document.body;

buttonBackground.addEventListener("click", changeBackground);
function changeBackground() {   
    bodyElement.classList.add("red-background");
};



