const button1 = document.createElement('button')
button1.innerText = 'Press me!'

const button2 = document.createElement('button')
button2.innerText = 'Press me too!'

 
button1.addEventListener('click', () => {

    const text1 = document.createElement('p')
    text1.innerText = 'You clicked the button!'
    document.body.appendChild(text1)
})
document.body.appendChild(button1)


button2.addEventListener('click', () => {

    var heading = document.h4;
    var style = window.getComputedStyle(heading, null).getPropertyValue('font-size');
    var currentSize = parseInt(style);
    currentSize++;
    document.h4.style.fontSize = currentSize.toString();

})


document.body.appendChild(button2)