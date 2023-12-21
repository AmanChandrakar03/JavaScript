const name = "aman";
const age  = 23;

console.log(`${name} is ${age} years old`);

const gameName = new String("table tennis");
console.log(gameName);
console.log(gameName[0]);
console.log(gameName[1]);
console.log(gameName.length);

const anotherString = gameName.substring(0,4);
console.log(anotherString);

const anotherStringSlice = gameName.slice(5,9);
console.log(anotherStringSlice);

const gameName2 = "    Aman    "
const anotherStringTrim = gameName2.trim();
console.log(anotherStringTrim);