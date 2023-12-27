const mySym = Symbol("keyt")

const jusers = {
    name : "Aman",
    age : 23,
    [mySym] : "myKet1",
    email : "aman@gmail.com",
    skills : ["JS","java","MySQL"],
    employed : true
}
console.log(jusers);
console.log(jusers.email);
console.log(jusers["email"]);
console.log(jusers.employed);
console.log(typeof jusers[mySym]);

//to change
jusers.email = "aman0301@gmail.com"
//console.log(jusers.email);
console.log(jusers);
//Object.freeze(jusers); //value will not be change
jusers.email = "aman03@gmail.com";
console.log(jusers);

jusers.greeting = ()=>{
    console.log("hello jsvascript users");
}
console.log(jusers.greeting());
