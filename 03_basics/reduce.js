const nums = [1,2,3,4,5]

// const sum = nums.reduce(function(acc,curr){
//     console.log(`acc ${acc} and curr : ${curr}`);
//     return acc+curr
// },0)  //or

// const sum = nums.reduce((acc,curr)=>acc+curr,0)
// console.log(sum);

const shoppingCart = [
    {
        itemName : "js course",
        price : 2999
    },
    {
        itemName : "java dev",
        price : 1999
    },
    {
        itemName : "Data Science",
        price : 4999
    },
    {
        itemName : "Python course",
        price : 2999
    }
]
const price = shoppingCart.reduce((acc,item)=>acc+item.price,0)
console.log(price);