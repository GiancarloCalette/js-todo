let myArray = ["string", 10, {}];
let array = ["What is the meaning of life", 42, true];
console.table(array);

const numbers=[10,20,30,40,50];
console.table(numbers);

const months=["Jan","Feb","Mar","Apr", "May"];
console.table(months);

// Array dimension
console.log(numbers.length); 
for(let i=0;i<5;i++){
    document.write(`<p>${numbers[i]} ${months[i]}</p>`);
}

let j=0;
while (j<20){
    console.log(j + "bottles of beet on the wall");
    i +=1;
}