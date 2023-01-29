function startCalculator(){
    let number1 = Number(prompt("Enter the first number"));
    let number2 = Number(prompt("Enter the second number"));
    sum(number1,number2);
    subs(number1,number2);
    mult(number1,number2);
    div(number1,number2);
}
function sum(a,b){
    document.getElementById("sum").innerHTML=`<p> ${a} + ${b} = ${a+b}`;
}
function subs(a,b){
    document.getElementById("subs").innerHTML=`<p> ${a} - ${b} = ${a-b}`;
}
function mult(a,b){
    document.getElementById("mult").innerHTML=`<p> ${a} * ${b} = ${a*b}`;
}
function div(a,b){
    document.getElementById("div").innerHTML=`<p> ${a} / ${b} = ${a/b}`;
}