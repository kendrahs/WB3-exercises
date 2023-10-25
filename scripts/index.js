"use script";


function buttonConvertClick() {
    const inputDate = document.getElementById ("inputDate").ariaValueMax;
    console.log(inputDate);
    let dateObj = new Date(inputDate)


let date = dateObj.toISOString();

let outputDate = document.getElementById("outputDate");
outputDate.innerText = date;

}