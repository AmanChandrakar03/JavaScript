function myFunction(...num1){
    return num1;
}
//console.log(myFunction(200,2000,20000));

const user = {
    name : "Aman",
    prices : 23
}
function handleObject(anyObject){
    console.log(`Username is ${anyObject.name} and price is ${anyObject.prices}`);
}
//handleObject(user)
handleObject({
    name: "mclovin",
    age : 22
})

//passing arrray in finallyconst 

const myArray = [200,300,400]

function myFunctionArr(getArray){
    return getArray;//[1]
}
//console.log(myFunctionArr(myArray));
console.log(myFunctionArr([200,300,400]));