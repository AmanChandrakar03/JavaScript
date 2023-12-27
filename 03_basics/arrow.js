const user = {
    username : "Aman",
    price : 3999,
    
    welcomMessage : function(){
        console.log(`${this.username} welcome to the website`);
        console.log(this)
    }
}
// user.welcomMessage()
// user.username = "sam"
// user.welcomMessage();
//console.log(this); {}

function chai(){
    const username = "A,man"
    console.log(this.username);
}
//console.log(chai());

const chai1 =()=>{
    const username = "A,man"
    console.log(this);
}
console.log(chai1());

// const addTwo = (num1,num2)=>{
//     return num1+num2
// }
const addTwo = (num1,num2)=>num1+num2

console.log(addTwo(5,6));