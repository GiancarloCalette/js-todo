// let yourName = "Samantha";
// if(confirm("Are you "+ yourName + "?")){
// 	console.log("Hello " + yourName);
// }else{
// 	console.log("Then what is your name?");
// }
// let number = 99;
// if(number == 98){
// 	console.log("The number is correct");
// }else{
//     console.log("The number is not correct")
// }

// let num1 = 10;
// let num2 = 2;

// if(num1 < num2){
// 	console.log("num1 is smaller than num2");
// }else{
//     console.log("num2 is smaller than num1")
// }
// let num1 = 1;
// let num2 = 2;
// let num3 = 3;
// let notTrue = false;

// if(num1<num2 && num3>num2){
// 	console.log("num1 is smaller than num2 AND num3 is larger than num2");
// }

// if(num1 == 1 || num2 == 1 || num3 == 1){
// 	console.log("num1 is 1 OR num2 is 1 OR num3 is 1");
// }

// if(!notTrue){
// 	console.log("not not true is true!");
// }

// loops
let products = [];
function displayNumbers(){
    for(let i=0;i<111;i++){
        document.write(`<li>${i}</li>`);
    }
}

//switch
let op = prompt("Enter your option");
switch(op){
    case '1':
        displayNumbers();
        break;
    case '2':
        console.log("Option 2");
        break;
    default:
        alert('Sorry, this is not an option');
        break;
}