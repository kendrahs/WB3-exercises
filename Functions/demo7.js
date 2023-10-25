"use strict";

let partCode = "275656543-large";
//              0123456789A1234

let partNum, size;
let dashPos = partCode.indexOf("-");
partNum = partCode.substring(0, dashPos);
size = partCode.substring(dashPos + 1);



function getProductNumber(productCode) {
    let positionOfFirstDash = productCode.indexOf(" ");
    let productNumber = productCode.substring(0, positionOfFirstDash );
    return productNumber;
}