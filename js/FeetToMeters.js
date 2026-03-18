let feetInput = prompt("Nhập vào số feet")
let result
if (feetInput === null) {
    let metersInput = +prompt("Nhập vào số meters")
    result=metersToFeet(metersInput)
    document.write(result)

}else{
    parseFloat(feetInput);
    result= feetToMeters(feetInput)
    document.write(result)
}




// feetToMeters(feetInput)





function feetToMeters(feet){
    return feet * 0.3048;
}

function metersToFeet(meters){
    return 3.279 * meters;
}