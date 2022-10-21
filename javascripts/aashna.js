const button = document.createElement('button')
button.innerText = 'Press me!'

 
button.addEventListener('click', () => {
    alert('You clicked the button!')
})
document.body.appendChild(button)



