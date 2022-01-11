let x1 = 1;
// let x1 = 2; // not allowed :  error Identifier 'x1' has already been declared
var x2 = 1;
var x2 = 2; // allowed


{
let y1 =11;
var y2 = 12;
}

console.log(y1) // not allowed error: y1 is not defined
console.log(y2) // allowed