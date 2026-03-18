function alertMessage(){
    alert("Hello World")
}
function addNumberTo1(number){
    alert("Số nhận được là: "+(parseInt(number) + 1));
}

function compareNumber(a,b){
    if (a > b){
        alert(`Số lớn hơn là ${a}`)
    }else if (a === b){
        alert(`Hai số bằng nhau`)
    }
    else {
        alert(`Số lớn hơn là ${b}`)
    }
}

function baiTap4(){
    function addNumbers() {
        firstNum = 4;
        secondNum = 8;
        result = firstNum + secondNum;
        return result;
    }
    result = 0;
    alert(result)
    result = addNumbers();
    alert(result)
}

function findStar(){
    let array1 = ["Polaris", "Aldebaran", "Deneb", "Vega", "Altair", "Dubhe", "Regulus"]
    let array2 = ["Ursa Minor", "Taurus", "Cygnus", "Lyra", "Aquila", "Ursa Major", "Leo"]
    let input = prompt("Nhập vào tên của bạn")
    let result = "Không tìm thấy";
    for (let i = 0; i < array1.length; i++) {
        if (input === array1[i]) {
            result = array2[i];
            break;
        }
    }
    alert(result)
}