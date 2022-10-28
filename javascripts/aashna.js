const button1 = document.createElement('button')
button1.innerText = 'Press me!'

const button2 = document.createElement('button')
button2.innerText = 'Press me too!'

const htmlEle = document.getElementById("number")
let num = 0

const color1 = document.createElement('button')
color1.innerText = 'Pink'
const color2 = document.createElement('button')
color2.innerText = 'Purple'
const color3 = document.createElement('button')
color3.innerText = 'Blue'

const textBox = document.createElement('input') 
textBox.setAttribute("type", "text")
document.body.appendChild(textBox)
const textBoxButton = document.createElement('button') 
textBoxButton.innerText = "Enter!"
document.body.appendChild(textBoxButton)


var fontSelect = document.createElement('select') 
var option1 = document.createElement('option');
option1.value = "Times New Roman"
option1.text = "Times New Roman"
fontSelect.add(option1, null)
var option2 = document.createElement('option');
option2.value = "Arial"
option2.text = "Arial"
fontSelect.add(option2, null)
var option3 = document.createElement('option');
option3.value = "Courier New"
option3.text = "Courier New"
fontSelect.add(option3, null)
document.body.appendChild(fontSelect)


button1.addEventListener('click', () => {

    const text1 = document.createElement('p')
    text1.innerText = 'You clicked the button!'
    document.body.appendChild(text1)
})
document.body.appendChild(button1)


button2.addEventListener('click', () => {
    htmlEle.innerText = num++
    
})
document.body.appendChild(button2)


color1.addEventListener('click', () => {

    const text2 = document.getElementById("color")
    text2.style.color = "pink"


})
document.body.appendChild(color1)

color2.addEventListener('click', () => {

    const text2 = document.getElementById("color")
    text2.style.color = "purple"


})
document.body.appendChild(color2)

color3.addEventListener('click', () => {

    const text2 = document.getElementById("color")
    text2.style.color = "blue"


})
document.body.appendChild(color3)


textBoxButton.addEventListener("click", () => {
    const text3 = textBox.value 
    let text4 = document.createElement('p') 
    text4.innerText = text3
    document.body.appendChild(text4)

})

fontSelect.addEventListener("onchange", () => {
    changeFont.call("this;")
    
})

function changeFont(font){
    var text5 = document.getElementById("fonts")
    text5.style.fontFamily = font.value
}


 
