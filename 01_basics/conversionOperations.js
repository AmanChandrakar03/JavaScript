let num = undefined;
console.log(typeof num);
console.log(num);

let numberInValue = Number(num);
console.log(typeof numberInValue);
console.log(numberInValue);

//"33" -> 33
//"33abc" -> NaN

let n = "";
let numIsBool = Boolean(n);
console.log(numIsBool);
console.log(typeof(numIsBool));

//1 = true, 0 = false

//"" = false
//"aman" = true