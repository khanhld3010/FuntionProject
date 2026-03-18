let arr1 = [3, 5, 1, 8, -3, 7, 8];
let arr2 = [7, 12, 6, 9, 20, 56, 89];

let arr3= []

let arr4= [0, 0, 0, 0, 0, 0]


let result = smallestNumber(arr1);
let result2 = smallestNumber(arr2);
let result3= smallestNumber(arr3);
let result4 = smallestNumber(arr4);
document.write(result + "<br>");
document.write(result2+ "<br>");
document.write(result3+ "<br>");
document.write(result4);



function smallestNumber(arr){
    if (arr.length === 0){
        return null;
    }
    let min = arr[0];
    for (let i = 1; i < arr.length; i++){
        if (arr[i] < min){
            min = arr[i];
        }
    }
    return min;
}

