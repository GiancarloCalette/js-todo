function addStudent(){
    let userName = prompt("Enter student name");
    let fsdi101 = Number(prompt("Enter grade FSDI 101: "));
    let fsdi102 = Number(prompt("Enter grade FSDI 102: "));
    let gpa = (fsdi101+fsdi102)/2;
    document.getElementById("text").innerHTML=`
    <h5>Welcome ${userName}</h5>
    <p>Name: ${userName}</p>
    <p>GPA: ${gpa}</p>
`;
}
