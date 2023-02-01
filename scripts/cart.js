// global vars
let cart = [];
let productID = 0;
function addProduct(){
    let product = document.getElementById("txtProduct").value;
    cart.push(product);
    displayCart(product);
    document.getElementById("txtProduct").value ="";
    updateNumberProducts();
}
function displayCart(newProduct){
    let item = `<li id="${productID}"> ${newProduct} <span onclick="deleteProduct(${productID})">🗑️</span></li>`;
    const ul = document.getElementById("productsList");
    ul.innerHTML+=item;
    productID++;
}
function updateNumberProducts(){
    document.getElementById("amountProducts").innerHTML=cart.length;
}
function deleteProduct(id){
    document.getElementById(id).remove();
    cart.pop();
    updateNumberProducts();
}
function init(){
    console.log("Init");
    updateNumberProducts();
}
window.onload=init;