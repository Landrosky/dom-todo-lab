//console.log('sanity check')
//constants


//Variables


//Cached Element References
const form = document.querySelector("form")
let input = document.getElementById('listItem')
const submitButton = document.getElementById('submit-button')
const listBank = document.getElementById('todo-list')
const resetBtn = document.querySelector('#reset-button')


//Events Listeners
form.addEventListener('reset', init)
form.addEventListener('submit', function(evt) {
    evt.preventDefault()
    const newToDo = document.createElement('li');
    //below gives you the value of the input
    newToDo.textContent = input.value 
    //below resets the text in the input field to an empty string
    input.value = ''
    //below adds the new li element to the page, inside the ul element
    input.appendChild(listBank)
})
// submitButton.addEventListener('click', function(event)) {
//     const newToDo = document.createElement('li');
//     //below gives you the value of the input
//     newToDo.textContent = input.value 
//     input.value = ''
//}


//Functions
init()

function init() {
    console.log("init invoked")
    resetBtn.setAttribute('hidden', true)
    input.textContent = ''
}
function addToDo(input)

// function doThings() {
//     inp = ''
    //let newItem = document.createElement('li')
    // newItem.textContent = inp.value 
    // inp.textContent = ''
    // inp.appendChild('todo-List')


//