// global vars
let list = [];
let listID = 0;
function addTask(){
    let task = document.getElementById("txtTask").value;
    list.push(task);
    displayList(task);
    document.getElementById("txtTask").value ="";
    updateNumberLists();
}
function displayList(newTask){
    let item = `<li id="${listID}"> ${newTask} <span onclick="deleteTask(${listID})">🗑️</span></li>`;
    const ul = document.getElementById("taskList");
    ul.innerHTML+=item;
    listID++;
}
function updateNumberLists(){
    document.getElementById("amountList").innerHTML=list.length;
}
function deleteTask(id){
    document.getElementById(id).remove();
    list.pop();
    updateNumberLists();
}
function init(){
    console.log("Init");
    updateNumberLists();
}
window.onload=init;