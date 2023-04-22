const inputBox = document.querySelector("#value");
const todoList = document.querySelector(".list-con");
const addBtn = document.querySelector(".add-btn");
const warning = document.querySelector("h4");
const clear = document.querySelector("#clear");
const wait = document.querySelector(".wait");
const todo = todoList.childNodes;
const message = document.querySelector(".pending-message");


function addTodo(){
    if(inputBox.value === ""){
        warning.innerHTML = '<i class="fa-solid fa-triangle-exclamation"></i> Please, add a todo'
        warning.setAttribute("class","warning")
    }else{
        warning.innerHTML = '';
        warning.setAttribute("class",'');
        let li = document.createElement("li");
        li.setAttribute("class","li-todo")
        todoList.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        span.setAttribute("class","edit-span")
        li.appendChild(span);
        let edit = document.createElement("i")
        edit.setAttribute("class","fa-solid fa-pen-to-square")
        li.appendChild(edit)
        localStorage.setItem("Wait",todo.length)
        wait.innerHTML = localStorage.getItem("Wait")
        let inp = document.createElement("input")
        inp.setAttribute("type","text")
        inp.setAttribute("disabled","disable")
        inp.setAttribute("class","inp")
        inp.value = inputBox.value;
        li.appendChild(inp)
        // local()
    }
    inputBox.value = "";
    saveData();
};

todoList.addEventListener('click',(e)=>{
    if(e.target.tagName === "LI"){;
        e.target.classList.toggle("checked");
        saveData();
    }else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        localStorage.setItem("Wait",todo.length)
        wait.innerHTML = localStorage.getItem("Wait")
        saveData();
    }else if(e.target.tagName === "I"){
        e.target.style.right = "58px"
        let li = document.querySelector(".li-todo")
        let saveBtn = document.createElement("button")
        saveBtn.innerHTML = "Save"
        li.appendChild(saveBtn)
        let inp = document.querySelector(".inp")
        inp.removeAttribute("disabled")
        saveData();
    }
});

let local = localStorage.getItem("Wait")

const clearAll = ()=>{
    localStorage.clear();
    wait.innerHTML = localStorage.getItem("Wait")
    showTodo();
};
clear.addEventListener('click',clearAll);

const saveData = ()=>{
    localStorage.setItem("Data",todoList.innerHTML);
};

const showTodo = ()=>{
    todoList.innerHTML = localStorage.getItem("Data");
};
showTodo();
wait.innerHTML = localStorage.getItem("Wait")

