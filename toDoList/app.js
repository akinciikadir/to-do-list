const addButton = document.getElementById("buttonId");
const inputText = document.getElementById("inputId");
const listDiv = document.querySelector(".toDoList");

let temp = 1;
let empty = 1;

function addToDo() {
    if (inputText.value == "") {
        alert("You must write something");
    } 
    
    else {
        const paragraf = document.createElement('p');
        paragraf.innerHTML = temp + "-" + inputText.value;

        const deleteButton = document.createElement('button');
        deleteButton.innerHTML = "Delete";

        const newDiv = document.createElement('div');
        newDiv.appendChild(paragraf);
        newDiv.appendChild(deleteButton);

        listDiv.appendChild(newDiv);

        inputText.value = "";
        
        temp++;

        deleteButton.addEventListener('click', function() {

            empty++;
            listDiv.removeChild(newDiv);
            temp = listDiv.children.length + empty;

        });
        
        const finishButton = document.createElement('button');
        finishButton.innerHTML="Finish";
        newDiv.appendChild(finishButton);

        finishButton.addEventListener('click',function(){
            
            const item = this.parentNode; 
            const text = item.querySelector('p'); 
            text.style.textDecoration = 'line-through';

        });


    }
}

inputText.addEventListener('keyup',function(key){
    if(key.keyCode == 13){
        addToDo();
    }
});

addButton.addEventListener('click', addToDo);

