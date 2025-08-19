console.log("variables");

var a = 67;  // 'a' contains 67
console.log(a);

a = "Rohan"; // now 'a' contains "Rohan"
console.log(a);


//--- let, const, var difference ---//
console.log("let, var, const");

// --- var ---
var x = 45;
var y = "harry";
{
    var y = 'this';  // 'var' is function-scoped or globally scoped
    console.log("Inside block with var y:", y); // Outputs: "this"
}
console.log("Outside block with var y:", y); // Still "this" because var is not block scoped


// --- let ---
var m = 45;
let n = "harry";
{
    let n = 'this'; // 'let' is block-scoped
    console.log("Inside block with let n:", n); // Outputs: "this"
}
console.log("Outside block with let n:", n); // Outputs: "harry"


// --- const ---
const PI = 3.14;
console.log("Constant PI:", PI);

// Trying to reassign a const will throw an error
// Uncommenting the below line will cause a TypeError
// PI = 3.1415; // ❌ Error: Assignment to constant variable
