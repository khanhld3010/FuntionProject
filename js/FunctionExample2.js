function findSquare(){
    let inputNumber = +prompt("Nhập vào một số: ");
    let exponents = +prompt("Nhập lũy thừa:")
    alert(Math.pow(inputNumber, exponents))
}

function chuViVaDienTichHinhTron(){
    let suDungDuongKinh = confirm("Bạn muốn dùng đường kính để tính toán?")
    let chuvi;
    let dientich;
    if (suDungDuongKinh){
        let duongkinh = +prompt("Nhập vào đường kính:")
        chuvi = duongkinh * Math.PI
        dientich = (Math.pow(duongkinh, 2)/4) * Math.PI
        alert(`Chu vi hình tròn: ${chuvi} \n Diện tích hình tròn: ${dientich}`)
    }else {
        let banKinh = +prompt("Nhập vào bán kính:")
        chuvi = 2 * banKinh * Math.PI
        dientich = Math.pow(banKinh, 2) * Math.PI
        alert(`Chu vi hình tròn: ${chuvi} \n Diện tích hình tròn: ${dientich}`)
    }
}

function timGiaiThua(number){
    let result = 1;
    for (let i=1; i<=number;i++){
        result *= i;
    }
    alert(result);
}

function kiemTraSo(){
    let input = !isNaN(prompt("Text something"))
    if (input === true){
        alert(`Day la mot so`)
    }else {
        alert(`Day khong phai la mot so`)
    }
}

function timSoNguyenNhoNhat(number1,number2,number3){
    if (number1 < number2 && number1 < number3){
        alert(number1)
    }else if (number2 < number1 && number2 < number3){
        alert(number2)
    }else {
        alert(number3)
    }
}

function isPrositiveNumber(number){
    let isIntNumber = Number.isInteger(number);
    if (isIntNumber === true && number > 0){
        return true
    }else {
        return false
    }
}

function checkSwapNumber(){
    let a = 5;
    let b = 10;
    [a, b] = swapNumber(a,b)
    alert(a)
    alert(b)
}

function swapNumber(number1,number2){
    return [number2,number1]
}

function checkReverseArray(){
    let array = [1, 2, 3, 4,5,6]
    reverseArray(array)
    alert(array)
}

function reverseArray(array){
    for (let i = 0; i < Math.floor(array.length/2); i++) {
        let temp = array[i];
        array[i] = array[array.length - i - 1]
        array[array.length - i - 1] = temp;
    }
}

function checkFindInArray(){
    let arr = ['a', 'b', '3', 'a', 'Z', '3', 'k', 'k', '9', 'a']
    let input = prompt("Enter something")
    let result = findInArray(arr, input);
    alert(result)
}

function findInArray(array,str){
    let count = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] === str){
            count++;
        }
    }
    if (count === 0){
        return -1;
    }else {
        return count;
    }
}