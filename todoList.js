"use strict";

const list=document.getElementById("todos");
const addTodo=document.getElementById("addTodo");

const createTodoList=todo=>{
    const html = `
            <li>
            <span>${todo}</span>
            <i></i>
            </li>
        `;
    list.innerHTML+=html;
};

addTodo.addEventListener("submit",e=>{
    e.preventDefault();
    const todo=addTodo.addTodo.value.trim();
    if(todo.length){
        createTodoList(todo);
        addTodo.reset();
    }
});
