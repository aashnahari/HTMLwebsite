const para = document.createElement("p");
const element = document.querySelector("body");

getElementById("button1").onclick = function() {textFunction()};

function textFunction() {
    para.textContent = "You pressed a button!";
    element.appendChild(para);
}