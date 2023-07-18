let = form = document.querySelector("form")
let input = document.querySelector("input")
// let button = document.querySelector("button")
let ul = document.querySelector("ul")
let clearAllbtn = document.querySelector('#clearbtn')

function saveTodo(e){
    e.preventDefault()
    const newli = document.createElement("li")
    newli.innerText = input.value
    newli.className ="list-group-mt rounded-0"
    const clearbtn = document.createElement('button')
    clearbtn.innerText = "Delete"
    clearbtn.className = "btn btn-danger btn-sm float-end w-100"
    newli.appendChild(clearbtn)
    ul.appendChild(newli)
    form.reset()

}

form.addEventListener('submit', saveTodo)
function deleteTodo(e){
    if(e.target.className.includes('btn-danger')){
     let li = e.target.parentElement
     ul.removeChild(li)

    }
}
ul.addEventListener('click',deleteTodo)
function clearAll(e){
    ul.remove()
}
clearAllbtn.addEventListener('click' , clearAll)