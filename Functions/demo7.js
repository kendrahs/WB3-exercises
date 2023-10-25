"use strict";

function getProductNumber(productCode){
    let positionOfFirstDash = productCode.indexOf("-");
    let productNumber = productCode.substring(0, positionOfFirstDash );
    return productNumber;
}

function getProductSize(productCode){
    let positionOfFirstDash = productCode.indexOf("-");
    let positionOfSize = positionOfFirstDash + 1 ;
    let productSize = productCode.substring(positionOfSize);
    return productSize;
}

let partCode = "275656543-large";
//              0123456789A1234

let partCode2 = "275656543-small";

let partCode3 = "133243-large";
//               0123456789A1234
let partCode4 = "133243-medium";


let partCode1Number = getProductNumber(partCode);
let partCode1Size = getProductSize(partCode);
console.log(partCode)
console.log(partCode1Number);
console.log(partCode1Size);

let partCode2Number = getProductNumber(partCode2);
let partCode2Size = getProductSize(partCode2);
console.log(partCode2)
console.log(partCode2Number);
console.log(partCode2Size);


let partCode3Number = getProductNumber(partCode3);
let partCode3Size = getProductSize(partCode3);
console.log(partCode3)
console.log(partCode3Number);
console.log(partCode3Size);

let partCode4Number = getProductNumber(partCode4);
let partCode4Size = getProductSize(partCode4);
console.log(partCode4)
console.log(partCode4Number);
console.log(partCode4Size);
