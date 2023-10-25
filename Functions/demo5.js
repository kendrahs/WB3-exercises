"use strict";
let a = 4;
function test5() { 
 a = 7; //alters a outside of scope
 function again() {
    let a = 8;
    console.log("a = " + a); 
}
    again();
    console.log("a = " + a); 
}
test5();
console.log("a = " + a);