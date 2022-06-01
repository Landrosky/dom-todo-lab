//console.log('sanity check')
//constants


//Variables


//Cached Element References
//const form = document.querySelector("form")
let input = document.getElementById('listItem')
const submitButton = document.getElementById('submit-button')
const listBank = document.getElementById('todo-list')
const resetBtn = document.querySelector('#reset-button')


//Events Listeners
//form.addEventListener('reset', init)
//form.addEventListener('submit', function(evt) {
submitButton.addEventListener('click', function(evt) {
    
    const li = document.createElement('li')
    li.textContent = input.value
    document.querySelector('ul').appendChild(li)
    console.log(li)
})
//evt.preventDefault()
    



//Functions
init()

function init() {
    console.log("init invoked")
    resetBtn.setAttribute('hidden', true)
    input.textContent = ''
    
}
function addToDo(input) {

}


