let colorContainer = document.getElementById('colorContainer')

// For loop to add create 50 div elements
// and add a class 'rngColor' to each of them
for (let i = 0; i < 50; i++){
    let element = document.createElement('div')
    element.classList.add('rngColor')
    colorContainer.append(element)
}