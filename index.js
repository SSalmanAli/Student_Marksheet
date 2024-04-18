import inquirer from "inquirer";
let Name = await inquirer.prompt([
    {
        name: "studentName",
        type: "string",
        message: "Enter Student Name"
    },
]);
let studentName = Name.studentName;
console.log(`Welcome ${studentName} Please enter your Max Marks and Subject Marks`);
console.log('----------------------------------------------------------------');
let Maxmarks = await inquirer.prompt([
    {
        name: "marks",
        type: "number",
        message: "Enter Max marks"
    },
]);
const x = Maxmarks.marks;
console.log('----------------------------------------------------------------');
const markSheet = await inquirer.prompt([
    {
        name: "Biology",
        type: "number",
        message: "Enter Marks obtained in Biology"
    },
    {
        name: "Maths",
        type: "number",
        message: "Enter Marks obtained in Maths"
    },
    {
        name: "Computer",
        type: "number",
        message: "Enter Marks obtained in Computer Science"
    },
    {
        name: "Chemistry",
        type: "number",
        message: "Enter Marks obtained in Chemistry"
    },
    {
        name: "Physics",
        type: "number",
        message: "Enter Marks obtained in Physics"
    },
]);
let Maths = markSheet.Maths;
let Bio = markSheet.Biology;
let phy = markSheet.Physics;
let chem = markSheet.Chemistry;
let comp = markSheet.Computer;
let a = (Maths / x) * 100;
let b = (phy / x) * 100;
let c = (chem / x) * 100;
let d = (Bio / x) * 100;
let e = (comp / x) * 100;
console.log('---------------------------------------------------------------------------');
console.log(`This MarkSheet is of Mr.${studentName}`);
console.log('---------------------------------------------------------------------------');
console.log(`SUBJECTS   |     MARKS OBTAINED    |     MAX MARKS    |    PERCENTAGE
---------------------------------------------------------------------------
Maths      |          ${Maths}          |        ${x}        |       ${a}%                                                                     
---------------------------------------------------------------------------   
Physics    |          ${phy}          |        ${x}        |       ${b}%                                                       
---------------------------------------------------------------------------
Chemistry  |          ${chem}          |        ${x}        |       ${c}%                                                       
---------------------------------------------------------------------------
Biology    |          ${Bio}          |        ${x}        |       ${d}%                                                                 
---------------------------------------------------------------------------
Computer   |          ${comp}          |        ${x}        |       ${e}%                                                                  
---------------------------------------------------------------------------
`);
