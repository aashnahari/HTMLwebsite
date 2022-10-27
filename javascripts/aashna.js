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

<form>
<input type = "text" name = "input something here">
</form>