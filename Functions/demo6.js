"use strict";
let ssn = "111-22-3333";
//         0123456789A

let first3 = ssn.substring(0, 3);
let second2 = ssn.substring(4, 6);
let last4 = ssn.substring(7, 11);

let ssnWithoutDashes = first3 + second2 + last4;

console.log(ssn)
console.log(ssnWithoutDashes)