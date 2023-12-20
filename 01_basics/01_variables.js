const accId = 1212;
let accEmail = "aman@google.com";
var accountPassword = "abcd";

accountCity = "Bhilai";

console.table([accId,accEmail,accountPassword,accountCity]);


/*
prefer not to use var because of issue in block scope and functional scope
*/

accEmail = "aman.chandrakar@gmail.com";
accountPassword = "1234";
accountCity = "Durg";
//accId = 999;  not posssible
console.table([accId,accEmail,accountPassword,accountCity]);
