function textFunction() {
    const para = document.createElement("p");
    para.textContent= "You pressed a button!";

    const element = document.querySelector("body")
    element.appendChild(para);
}