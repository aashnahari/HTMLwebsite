function textFunction() {
    const unordered = document.querySelector('ul');
    const text = document.createElement('p');
    text.textContent = "You pressed a button!";
    unordered.appendChild(text);
}