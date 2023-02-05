let a = "John";
let b = "John";
let c = "John";

(a === b && b===c && a === c) ? console.log("All the names are same") : (a === b) ? console.log("a,b") : (b === c) ? console.log("b,c") : (a === c) ? console.log("a,c") : console.log("All are different");