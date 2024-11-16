let card;
if(localStorage.getItem('choosed')!=null){
    card =JSON.parse(localStorage.getItem('choosed'));
}else{
    card=[]
}
// console.log(card)
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
// ...... 
let product;
if(localStorage.getItem('view')!=null){
    product=JSON.parse(localStorage.getItem('view'));
}else{
    product=[]
}
// ....
function getproduct(){
    if (product.length==0) {
        let details =[];
    for(i=0;i<productsDb.length;i++){
        for(n=0;n<card.length;n++){
            if (productsDb[i]?.title?.includes(card[n])){
                details ={
                    title : productsDb[i].title,
                    price : productsDb[i].price,           
                    category : productsDb[i].category,
                    quantity: productsDb[i].qty,
                }
                product.push(details)
            }
        }
    }
    localStorage.setItem('view',JSON.stringify(product))
    }
}
getproduct();
// console.log(product).......
// ..............................................................
let container=document.getElementsByClassName('container')[0]
function viewproduct(){
    let td='';
    for(let i=0; i<product.length; i++){
        let quantity;
        if(localStorage.getItem(`count${i}`) != null){
            quantity = JSON.parse(localStorage.getItem(`count${i}`));
        } else {
            quantity = 1;
        }

        td += `
        <div class="innerdiv">
           <div class="innera">
               <img src="images/${product[i].title}.png" alt="">
           </div>
           <div class="innerb">
               <h2 id="title">${product[i].title}</h2>
               <p id="price">price: ${product[i].price}$</p>
               <p id="cg">category: ${product[i].category}</p>
               <p id="qu">quantity: ${product[i].quantity}</p>
               <div class="countdiv">
                   <button onclick="count(${i}, 'minus'); return false">-</button>
                   <span id="number${i}">${quantity}</span>
                   <button onclick="count(${i}, 'plus'); return false">+</button>
               </div>
               <button onclick="remove(${i});return false">remove from cart</button>
           </div>
       </div>`;
    }
    container.innerHTML=td;
}

function count(index, action){
    let quantityElement = document.getElementById(`number${index}`);
    let quantity = parseInt(quantityElement.innerHTML);

    if(action === 'plus' && quantity < 10){
        quantity++;
    } else if (action === 'minus' && quantity > 1){
        quantity--;
    }

    localStorage.setItem(`count${index}`, JSON.stringify(quantity));
    quantityElement.innerHTML = quantity;
}

viewproduct();
// localStorage.clear()
// عد الارقام 
console.log(container)
// ............................... 
function remove(i) {
    product.splice(i,1);
    localStorage.setItem('view',JSON.stringify(product));
    localStorage.setItem('choosed', JSON.stringify(product));
    viewproduct()
}
// 0...............................................................00000000000000000
let favcard;
if (localStorage.getItem('liked') != null) {
    favcard = JSON.parse(localStorage.getItem('liked'));
} else {
    favcard = [];
}

let favproduct;
if (localStorage.getItem('favview') != null) {
    favproduct = JSON.parse(localStorage.getItem('favview'));
} else {
    favproduct = [];
}

function getfavproduct() {
    if (favproduct.length == 0) {
        let favdetails = [];
        for (let i = 0; i < productsDb.length; i++) {
            for (let n = 0; n < favcard.length; n++) {
                if (productsDb[i]?.title?.includes(favcard[n])) {
                    favdetails = {
                        title: productsDb[i].title,
                        price: productsDb[i].price,
                        category: productsDb[i].category,
                    };
                    favproduct.push(favdetails);
                }
            }
        }
        localStorage.setItem('favview', JSON.stringify(favproduct));
    }
}

getfavproduct();

let cont = document.getElementsByClassName('cont')[0];

function viewfavproduct() {
    let td='' ;
    for (let i = 0; i < favproduct.length; i++) {
        td += `
        <div class="innerdiv">
           <div class="innera">
               <img src="images/${favproduct[i].title}.png" alt="">
           </div>
           <div class="innerb">
               <h2 id="title">${favproduct[i].title}</h2>
               <p id="price">price:${favproduct[i].price}$</p>
               <p id="cg">category:${favproduct[i].category}</p>
               <button id="remove"  onclick="removefav(${i});return false">remove from favourite</button>
           </div>
       </div>`;
    }
    cont.innerHTML = td;
}
viewfavproduct();
// ....... 
function removefav(i) {
    favproduct.splice(i, 1);
    localStorage.setItem('favview', JSON.stringify(favproduct));
    localStorage.setItem('liked', JSON.stringify(favproduct));
    viewfavproduct();
}
// ...... 
function loginpage(){
    window.location.href='../index - logined.html'
}























// function getproduct(){
//     let details =[];
//     for(i=0;i<productsDb.length;i++){
//         for(n=0;n<card.length;n++){
//             if (productsDb[i]?.title?.includes(card[n])){
//                 details ={
//                     title : productsDb[i].title,
//                     price : productsDb[i].price,           
//                     category : productsDb[i].category,
//                     quantity: productsDb[i].qty,
//                 }
//                 product.push(details)
//             }
//         }
//     }
//     localStorage.setItem('view',JSON.stringify(product))
// }
// getproduct();
// console.log(product)
