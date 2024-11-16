let title =['Headphones', 'Smart Watch', 'Bracelet' ,'T-shirt' ,'Laptop' ,'Jeans' ,'Running Shoes' , 'Sunglasses' ,'Bluetooth Speaker' ,'Fitness Tracker' ,'Ring' ,'Dress']
let price =[50,70, 120,120 ,800 ,80 ,100 , 50 ,80 ,60 ,40,100]
let category=['electronics', 'electronics', 'accessories','fashion' ,'electronics' ,'fashion' ,'sport shoes' , 'accessiories' ,'electronic' ,'electronic' ,'accessiories','fashion']
let container = document.querySelector('.container');
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
                    <button onclick="log();return false" class="btn">add to card</button>
                    <i class="fas fa-heart"></i>
                </div>
            </div>
        </div>`
        ch =i
    }
    container.innerHTML = td;
}
showdata()
// ... 
function log() {
    window.location.href = 'signin page/index.html';
}





    


 
