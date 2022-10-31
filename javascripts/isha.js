//task1
const button1 = document.createElement('button')
button1.innerText = 'Press me!' 

//task2
const button2 = document.createElement('button')
button2.innerText = 'Press me too!'

const htmlEle = document.getElementById("number")
let num = 0

//task3
const color1 = document.createElement('button')
color1.innerText = 'Pink'
const color2 = document.createElement('button')
color2.innerText = 'Purple'
const color3 = document.createElement('button')
color3.innerText = 'Blue'

//task4
const textBox = document.createElement('input') 
textBox.setAttribute("type", "text")
document.body.appendChild(textBox)
const textBoxButton = document.createElement('button') 
textBoxButton.innerText = "Enter!"
document.body.appendChild(textBoxButton)

//task1
button1.addEventListener('click', () => {

    const text1 = document.createElement('p')
    text1.innerText = 'You clicked the button!'
    document.body.appendChild(text1)
})
document.body.appendChild(button1)

//task2
button2.addEventListener('click', () => {
    htmlEle.innerText = num++
    
})
document.body.appendChild(button2)

//task3
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

//task4
textBoxButton.addEventListener("click", () => {
    const text3 = textBox.value 
    let text4 = document.createElement('p') 
    text4.innerText = text3
    document.body.appendChild(text4)

})

//task5
var changeFont = function (font){
    document.getElementById("fonts").style.fontFamily = font.value
}


 
