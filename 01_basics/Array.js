const arr = [1,2,4,6,9];
// console.log(arr);
// console.log(arr[0]);

const myArr = new Array(3,7,1,5,0);
// console.log(myArr);

const arr1 = [3,4,5,6,7,8];
// console.log("A",arr1);

const arr2 = arr1.slice(1,3);
// console.log(arr2);

const arr3 = arr1.splice(1,3);
// console.log((arr3));
// console.log("A",arr1);

const marvel_heroes = ["Thor","Iron Man","Natasha","CA"];
const dc_heroes = ["Batman","SuperMan","Wonder women"];

// console.log(marvel_heroes.push(dc_heroes));
const allHeros = marvel_heroes.concat(dc_heroes);
//console.log(marvel_heroes);
// console.log(allHeros);

const all_new_Heros = [...marvel_heroes,...dc_heroes];
console.log(all_new_Heros);
