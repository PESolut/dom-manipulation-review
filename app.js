// Reading an Element from the Document

h1 = document.querySelector('h1')
// console.log(h1)


// Removing an Element

// h1.remove()

// Creating an Element

const h2 = document.createElement('h2');
const div = document.createElement('div');

// Giving the Element Content
h2.textContent = 'Here is an H2'
div.textContent = 'Here is a Div'

// Appending the Element to another Element
// first we grab the parent element 
const body = document.querySelector('body');
//now we append
body.append(div)
div.append(h2);

// we can use element.innerHTML = '' to empty out an element
div.innerHTML = ''
h2.innerHTML = ''

// innerHTML will format any tags inlcuded
// div.innerHTML = '<h1>Hello World<h1>

/// innerText or textContent will not format the tags
// div.textContent = '<h3>Hello World!</h3>'


// Adding and Event Listener
h1.addEventListener('click',(event)=>{
// Changing the styling of an Element
console.log('Click on h1!')
h1.style.color = 'red'
h1.style.fontFamily = 'Arial'
// event.target.style.backgroundColor
});

const form = document.createElement('form')
const nameInput = document.createElement('input')
const submit = document.createElement('input')

nameInput.type = 'text'
submit.type = 'submit'

form.append(nameInput,submit)
body.append(form)

console.log(nameInput, submit)

// setAttribute // can be used too
// Adding an event listener to a Form
form.addEventListener('submit', (event) => {
    // Preventing default behavior using event.preventDefault()
    event.preventDefault()
    console.log('form has been submitted')
    const name = nameInput.value
    const h4 = document.createElement('h3')
    h4.innerText = `Welcome, ${name}`
    body.append(h4)
    form.reset()
})
// Getting the 'value' from an input

