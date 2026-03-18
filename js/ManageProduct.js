const phones = [
    "Sony Xperia",
    "Samsung Galaxy",
    "Nokia 6",
    "Xiaomi Redmi Note 4",
    "Apple iPhone 6S",
    "Xiaomi Mi 5s Plus",
    "Apple iPhone 8 Plus",
    "Fujitsu F-04E",
    "Oppo A71"
];

function displayProduct(){
    let totalProduct = document.getElementById("totalProduct");
    let bodyTableProduct = document.getElementById("bodyTableProduct");
    display(totalProduct, `Đang có tổng cộng ${phones.length} sản phẩm`);
    let result = "";
    for (let i = 0; i < phones.length; i++) {
        result +=
            `                 <tr> 
                                <td>${phones[i]}</td> 
                                <td><button onclick="editProduct(${i})\">Edit</button></td> 
                                <td><button onclick="removeProduct(${i})\">Delete</button></td> 
                                <td></td> 
                            </tr>`
    }
    display(bodyTableProduct,result);
}

function addProduct(){
    let productName = document.getElementById("productName").value;
    phones.push(productName);
    displayProduct();
}


function editProduct(index){
    phones[index] = prompt("Nhập tên sản phẩm mới");
    displayProduct();
}

function removeProduct(index){
    phones.splice(index,1);
    displayProduct();
}


function display(tagId, data){
    tagId.innerHTML = data;
}