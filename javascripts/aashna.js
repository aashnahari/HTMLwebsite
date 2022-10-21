const button1 = document.createElement('button')
button1.innerText = 'Press me!'

button1.addEventListener('click', () => {
    alert('You clicked the button!')
})

document.body.appendChild(button1)


