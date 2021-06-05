//Selecting the Elements
const clear = document.querySelector('.clear');
const dateElement = document.getElementById('date');
const list = document.getElementById('list');
const input = document.getElementById('input');

//Class names
const CHECK = "fa-check-circle";
const UNCHECK = "fa-circle-thin";
const LINE_THROUGH = "lineThrough";

//Show today's date
let today = new Date();
let options = {weekday:'long', month:'short', day:'numeric'};
dateElement.innerHTML = today.toLocaleDateString("en-US", options);

let LIST = [];
let id = 0;

//add item to local storage
//localStorage.setItem('TODO', JSON.stringify(LIST));

//get item from local storage
let data = localStorage.getItem("TODO");
if(data){// check's if the data is empty
    LIST = JSON.parse(data);
    id = LIST.length; 
    loadToDo(LIST);
} else {
    LIST = []; // if the data is empty
    id = 0;
}

// load previously saved items
function loadToDo(array){
    array.forEach(function(item){
        addToDo(item.name, item.id, item.done, item.trash);
    });
}

clear.addEventListener('click', function(){
    localStorage.clear();
    location.reload();
});

//Change the selected text to red or black
function mouseDown() {
    var color = document.getElementById("item").style.color;
   if (color == "black"){
    document.getElementById("item").style.color = "red";
   } else if (color == "red"){
    document.getElementById("item").style.color = "black";
   }
} 

// Adding an Item to the list
function addToDo(todo, id, done, trash){
    if(trash){return};
    const DONE = done ? CHECK : UNCHECK; // checks if done class is true
    const LINE = done ? LINE_THROUGH : "";
const text = `<li class="item">
<i class="fa ${DONE} co" job="complete" id="0"></i>
<p class="text ${LINE}" id="item" onclick="mouseDown()" style="color:black;">${todo}</p>
<i class="fa fa-trash-o de" job="delete" id="0"></i>
</li>`;
const position = "beforeend";
list.insertAdjacentHTML(position, text);
}

//When the Enter key is pressed, an itme is added
document.addEventListener("keyup", function(event){
    if(event.code == "Enter"){ 
        const todo = input.value;
        //is the input is empty
        if(todo){
            addToDo(todo, id, false, false);
            LIST.push(
                {
                    name: todo,
                    id: id,
                    done: false,
                    trash: false
            });
            window.localStorage.setItem("TODO", JSON.stringify(LIST));
            id++
        }
        input.value = "";
    }
});

function completeTodo(element){
    element.classList.toggle(CHECK);
    element.classList.toggle(UNCHECK);
    element.parentNode.querySelector('.text').classList.toggle(LINE_THROUGH);
    LIST[element.id].done = LIST[element.id]. done ? false: true;
}

function removeToDo(element){
    element.parentNode.parentNode.removeChild(element.parentNode);
    LIST[element.id].trash = true;
}

// target the dynamically created items
list.addEventListener('click', function(event){
    let element = event.target; //returns the clicked element inside the list
    const elementJob = element.attributes.job.value; // checks if the element is "complete" or "delete"

    if(elementJob == "complete"){
        completeTodo(element);
    } else if (elementJob == "delete"){
        removeToDo(element)
    }
    localStorage.setItem("TODO", JSON.stringify(LIST));
});





