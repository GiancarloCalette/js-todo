let promptName = prompt("Enter your name");
function greet(name){
    return "Hello " + name + "!";
}
console.log(greet(promptName));
//console.log(greet("Eric"));
function sum(a,b){
    return a+b;
}
console.log(sum(2,5));

function multiplyThree(number){
    let total = number*3;
    document.write(`
    <p>${number} x 3 = ${total}</p>
    `);
}
multiplyThree(5);
multiplyThree(6);