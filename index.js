"use strict";

const greet = require("./lib/greet.js");
const math = require("./lib/arithmetic.js");

console.log(greet("JOHN"));
console.log(greet("Someone"));
console.log(greet());
console.log(math.add(1, 3)); // 4
console.log(math.subtract(1, 3)); //-2
console.log(math.multiply(4, 3)); // 12
console.log(math.divide(15, 3)); // 5
