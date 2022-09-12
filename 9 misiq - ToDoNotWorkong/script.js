let addToDoButton = document.getElementById('addToDo');
let toDoContainer = document.getElementById('toDoContainer');
let inputField = document.getElementById('inputField');

addToDoButton.addEventListener('click', function(){
    let paragraph = document.createElement('p' + counter++);
    paragraph.classList.add('paragraph-styline');
    paragraph.innerText = inputField.value;
    toDoContainer.append(paragraph);
    inputField.value = "";
    paragraph.addEventListener('click', function(){
        paragraph.style.textDecoration = ('line-through');
    })
    
    
})