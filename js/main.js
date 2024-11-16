let title =['Headphones', 'Smart Watch', 'Bracelet' ,'T-shirt' ,'Laptop' ,'Jeans' ,'Running Shoes' , 'Sunglasses' ,'Bluetooth Speaker' ,'Fitness Tracker' ,'Ring' ,'Dress']
let price =[50,70, 120,120 ,800 ,80 ,100 , 50 ,80 ,60 ,40,100]
let category=['electronics', 'electronics', 'accessories','fashion' ,'electronics' ,'fashion' ,'sport shoes' , 'accessiories' ,'electronic' ,'electronic' ,'accessiories','fashion']
let container = document.querySelector('.container');
let btn=document.getElementsByClassName('btn');
let loved=document.getElementsByClassName('fas fa-heart');
let added=document.getElementById('added');
let ul=document.getElementById('ul')
let icon=document.getElementById('icon')
let look =document.getElementById('search')
ul.style.display='none'
function showdata(){
    let td='';
    for(i=0;i<title.length;i++){
        td+=`
        <div class="innerdiv">
                <img src="images/${i}.png" alt="">
                <a href="" id="show${i}" class="name" onclick="show(${i}); return false;">${title[i]}</a>
                <p class="price">${price[i]}</p>
                <p class="category">${category[i]}</p>
                <!-- start button div-->
                <div class="adddiv">
                    <button onclick="addproduct(${i}) ;return false;" class="btn">add to card</button>
                    <i onclick="favproduct(${i}) ;return false;" class="fas fa-heart" class="love"></i>
                </div>
        </div>`
        ch =i
    }
    container.innerHTML = td;
}
showdata()
// ........................ 
// add to  card 
let count=0;
let choose;
if(localStorage.getItem('choosed')!=null){
    choose = JSON.parse(localStorage.getItem('choosed'));
} 
else {
    choose = [];
}
function addproduct(index){
    if (choose.includes(title[index])){
        count=count-1;
        choose.splice(choose.indexOf(title[index]), 1);
        btn[index].innerHTML=`add to card`;
        btn[index].style.backgroundColor = '#1c6ee8';
    }else{
        count++;
        choose.push(title[index]);
        btn[index].innerHTML=`remove from card`;
        btn[index].style.backgroundColor = 'black';
    }
    localStorage.setItem('choosed',JSON.stringify(choose));
    count = choose.length;
    added.innerHTML=count;
}
// ...........
function showpicked() {
    for (let i = 0; i < choose.length; i++) {
        if (choose.includes(title[i])) {
            btn[i].innerHTML = 'remove from card';
            btn[i].style.backgroundColor = 'black';
            ul.innerHTML += `<li>${choose[i]}</li>`;
        } else {
            btn[i].innerHTML = 'add to card';
            btn[i].style.backgroundColor = '#1c6ee8';
        }
    }
}
showpicked() 
// ....
count = choose.length;
added.innerHTML=count
// ...
function list() {
    if (ul.style.display == 'none') {
        ul.style.display = 'block';
        ul.innerHTML = ''; // ينظف قائمة العناصر المحددة لتجنب تكرارها
        for (let i = 0; i < choose.length; i++) {
            let selectedIndex = title.indexOf(choose[i]);
            ul.innerHTML += `
                <li>
                    <span>${choose[i]}</span>
                </li>`;
        }
    } else {
        ul.style.display = 'none';
    }
    ul.innerHTML +=`
    <li class="li"><a href="view all product/index.html">view all product</a></li>
    `
}
// ............................... 
let favourite;
if(localStorage.getItem('liked')!=null){
    favourite = JSON.parse(localStorage.getItem('liked'));
} 
else {
    favourite = [];
}
// .....
function favproduct(i){
    if (favourite.includes(title[i])){
        favourite.splice(favourite.indexOf(title[i]), 1);
        loved[i].style.color = 'black';
    }else{
        favourite.push(title[i]);
        loved[i].style.color = 'red';
    }
    localStorage.setItem('liked',JSON.stringify(favourite));
}
// ...
function showfav(){
    for (let i = 0; i < loved.length; i++) {
        if (favourite.includes(title[i])) {
            loved[i].style.color = 'red';
        } else {
            loved[i].style.color = 'black';
        }
    }
}
showfav()
// ........
function showsearch(value) {
    let table = '';
    for (let i = 0; i < title.length; i++) {
        if (title[i].toLowerCase().includes(value.toLowerCase())) {
            table += `
            <div class="innerdiv">
                <img src="images/${i}.png" alt="">
                <a href="" id="show${i}" class="name" onclick="show(${i}); return false;">${title[i]}</a>
                <p class="price">${price[i]}$</p>
                <p class="category">${category[i]}</p>
                <!-- start button div-->
                <div class="adddiv">
                    <button onclick="addproduct(${i}) ;return false;" class="btn">add to card</button>
                    <i onclick="favproduct(${i}) ;return false;" class="fas fa-heart" class="love"></i>
                </div>
            </div>`;
        } 
    }
    container.innerHTML = table;
}
// ................................................ 
window.onload = function() {
    // تحقق من localStorage وتحديث البيانات
    if (localStorage.getItem('choosed') !== null) {
        choose = JSON.parse(localStorage.getItem('choosed'));
        showpicked();
    }

    if (localStorage.getItem('liked') !== null) {
        favourite = JSON.parse(localStorage.getItem('liked'));
        showfav();
    }
}

function showFavorites() {
    choose.forEach((title, i) => {
        if (favourite.includes(title)) {
            loved[i].style.color = 'red';
            btn[i].innerHTML = 'remove from card';
            btn[i].style.backgroundColor = 'black';
        } else {
            loved[i].style.color = 'black';
            btn[i].innerHTML = 'add to card';
            btn[i].style.backgroundColor = '#1c6ee8';
        }
    });
}

function list(){
    window.location.href = 'view all product/index.html'
}

   


 
