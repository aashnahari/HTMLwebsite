function textFunction() {
    const para = document.createElement('p');
    const text = document.createTextNode("You pressed a button!");
    para.appendChild(text);

    const element = document.querySelector("ul")
    element.appendChild(para);
}