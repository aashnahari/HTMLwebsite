const para = document.createElement("p");
const element = document.querySelector("body");
function textFunction() {
    para.textContent= "You pressed a button!";
    element.appendChild(para);
}