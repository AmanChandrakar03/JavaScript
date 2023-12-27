// const sayMyName = ()=>{
//     console.log("A");
//     console.log("M");
//     console.log("A");
//     console.log("N");
    
// }
// sayMyName()
function addTwoNumber(num1,num2){
    console.log(num1+num2);
}
addTwoNumber(33,55)

function addTwoNumbers(num1,num2){
    return num1+num2;
}
const sum = addTwoNumbers(5,7);
console.log(sum);

function loginUsername(username){
    return `${username} has logged inn`;
}
//loginUsername("aman")
console.log(loginUsername("aman"));
console.log(loginUsername()); //undefined
