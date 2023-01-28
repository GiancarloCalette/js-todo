let productName = prompt("Enter the product name:");
let productPrice = Number(prompt("Enter the price: "));
let productQty = Number(prompt("Enter the product quantity"));
let subTotal = (productPrice*productQty);
let total = (subTotal*1.16);
let rounded = total.toFixed(2);
document.write(`
    <h5> Product name: ${productName}</h5>
    <h5> Price: ${productPrice}</h5>
    <h5> Quantity: ${productQty}</h5>
    <h5> TAX: 16%</h5>
    <h5> Subtotal: ${subTotal}</h5>
    <h5> Total: ${rounded}</h5>
    `);