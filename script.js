"use strict";


let addButton = document.getElementById("addButton");
let taskList = document.getElementById("taskList");


function getTaskText() {
    return document.getElementById("taskInput").value;
}

function addTaskToList(text) {
    if(!text) return alert("Enter a description for the task");
    if(text.length > 150) return alert("The maximum length is 150 characters");

    let li = document.createElement("li");
    let span = document.createElement("span");
    span.textContent = text;
    
    let deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", () => li.remove());

    li.appendChild(span);
    li.appendChild(deleteButton);
    taskList.appendChild(li);

    document.getElementById("taskInput").value = "";
}
    
addButton.addEventListener("click", function() { 
   addTaskToList(getTaskText());
});
