function isPalindrome(s){
    if (s.length <= 1){
        return true;
    }
    else if (s[0] === s[s.length - 1]){
        return isPalindrome(s.slice(1, - 1))
    }else{
        return false
    }
}

let string = "abcde"
let newString = string.split("");
console.log(newString);

let checkString = isPalindrome("kjttjk")
if (checkString === false){
    console.log("Không phải")
}else {
    console.log("Là chuỗi đối xứng")
}
