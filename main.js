const form=document.querySelector('.form')
const input=document.querySelector('.add-input')
const addBtn=document.querySelector('.add-list')
const toDoList=document.querySelector('.todo-list')


addBtn.addEventListener('click',function(e){
e.preventDefault()
if(input.value.trim()==''){
    return alert('sehv')
}else{


 let li =document.createElement('li')
 let updateTodo=document.createElement('i')
updateTodo.classList.add('fa-pen-to-square')
updateTodo.classList.add('fa-regular')
let deleteTodo=document.createElement('i')
deleteTodo.classList.add('fa-trash')
deleteTodo.classList.add('fa-solid')
let seperateDiv=document.createElement('div')
seperateDiv.appendChild(updateTodo)
seperateDiv.appendChild(deleteTodo)
 li.textContent=input.value
 li.appendChild(seperateDiv)


 li.classList.add('new-li')
 deleteTodo.addEventListener('click',function(e){
    e.preventDefault()
    li.remove(this.parentNode.parentNode)
   console.log(this.parentNode.parentNode);
})
updateTodo.addEventListener('click',function(e){
    e.preventDefault()
   input.value=li.innerText
   addBtn.innerText='change'
   if(addBtn.innerText='change'){
    addBtn.addEventListener('click',function(){
li.innerText=input.value
addBtn.innerText='add'
    })
   }
})
toDoList.appendChild(li)
console.log(updateTodo);

input.value=''
}
})