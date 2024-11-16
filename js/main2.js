let img =document.getElementById('img') 
let productname =document.getElementById('productname') 
let productcategory =document.getElementById('category') 
let quantity=document.getElementById('quantity') 
// ...
let tmp;
if(localStorage!=null){
    tmp=JSON.parse(localStorage.getItem('tmp'))
} else {
    tmp=null
}

let productsDb;
if(localStorage!=null){
    productsDb=JSON.parse(localStorage.getItem('products'))
} else {
    productsDb =[]
}
// .....
function show(index){
    window.location.href='show/index.html';
    let productsDb = [
        {      id : 5,
            title : "Headphones",
            price : 50 ,           
            category : "Electronics",
            imageUrl : "images/headphones.png",
            qty : 1,
        },
        {      id : 6,
            title : "Smart Watch",
            price : 70,           
            category : "Electronics",
            imageUrl : "images/smart-watch.png",
            qty : 1,
        },
        {      id : 7,
            title : "Bracelet",
            price : 120 ,           
            category : "Accessories",
            imageUrl : "images/bracelet.png",
            qty : 1,
        },
        {      id : 8,
            title : "T-shirt",
            price : 120,           
            category : "Fashion",
            imageUrl : "images/t-shirt.png",
            qty : 1,
        },
        {      id : 9,
            title : "Laptop",
            price : 800 ,           
            category : "Electronics",
            imageUrl : "images/laptop.png",
            qty : 1,
        },
        {      id : 10,
            title : "Jeans",
            price : 80,           
            category : "Fashion",
            imageUrl : "images/jeans.png",
            qty : 1,
        },
        {      id : 11,
            title : "Running Shoes",
            price : 100 ,           
            category : "Sportshoes",
            imageUrl : "images/running-shoes.png",
            qty : 1,
        },
        {      id : 12,
            title : "Sunglasses",
            price : 50,           
            category : "Accessories",
            imageUrl : "images/sunglasses.png",
            qty : 1,
        },
        {      id : 13,
            title : "Bluetooth Speaker",
            price : 80 ,           
            category : "Electronics",
            imageUrl : "images/bluetooth-speaker.png",
            qty : 1,
        },
        {      id : 14,
            title : "Fitness Tracker",
            price : 60,           
            category : "Electronics",
            imageUrl : "images/fitness-tracker.png",
            qty : 1,
        },
        {      id : 15,
            title : "Ring",
            price : 40 ,           
            category : "Accessories",
            imageUrl : "images/ring.png",
            qty : 1,
        },
        {      id : 16,
            title : "Dress",
            price : 100,           
            category : "Fashion",
            imageUrl : "images/dress.png",
            qty : 1,
        }
    ];
    localStorage.setItem("products", JSON.stringify(productsDb));  
    tmp=index;
    localStorage.setItem("tmp", JSON.stringify(tmp))
    // document.body.style.backgroundColor='red'
}
img.src=`../images/${tmp}.png`
productname.innerHTML=productsDb[tmp].title;
productcategory.innerHTML+=productsDb[tmp].category;
quantity.innerHTML+=productsDb[tmp].qty;
let td;
if(localStorage.getItem('condition') !== null){
    td = localStorage.getItem('condition');
}

function loginpage() {
    if(td === 'signed'){
        window.location.href = '../index - logined.html';
    } else {
        window.location.href = '../index.html';
    }
}

