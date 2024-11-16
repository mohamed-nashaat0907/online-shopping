let email =document.getElementById('email')
let password =document.getElementById('password')
let confirmation =document.getElementById('confirmation')
let submit =document.getElementById('button')
let loginpage=document.getElementById('loginpage')
let mood=''

// function color(id) {
//     let input=document.getElementById(id);
    
// }
function color(id) {
    let input=document.getElementById(id);
    if(input.value==''){
        input.style.backgroundColor='white';
    }
    else{
        input.style.backgroundColor='skyblue';
        if(confirmation.value!=password.value &confirmation.value!=''&password.value!=''&confirmation.value.length>=password.value.length) {
            confirmation.style.backgroundColor='red';
        }
    }    
}
// .................................................
let datamail;
if(localStorage.getItem('datauser') != null){
    datamail = JSON.parse(localStorage.getItem('datauser'));
}
else{
    datamail=[];
}
function create(){
    let newmail ={
        email:email.value,
        password:password.value
    }
    if(confirmation.value==password.value &&confirmation.value!=''&&password.value!=''&&confirmation.value.length==password.value.length&&email.value!='') {
        datamail.push(newmail);
        localStorage.setItem('datauser',JSON.stringify(datamail));
        window.location.href='../signin page/index.html'
    }else{
       email.style.backgroundColor='red'
       password.style.backgroundColor='red'
       confirmation.style.backgroundColor='red'
    }
}
function page(){
    window.location.href='../index.html'
}

// .............. 
// let datapro;
// if(localStorage.product!=null){
//     datapro = JSON.parse(localStorage.user);
// }
// else{
//     datapro=[''];
// }

// submit.onmouseup =function(){
//     let newpro={
//         email:email.value,
//         password:password.value,
//     }
//     if(confirmation.value!=password.value &confirmation.value!=''&password.value!=''&confirmation.value.length>password.value.length&email!='') {
//         confirmation.style.backgroundColor='red';
//     }
//    else  {
//     datapro.push(newpro);
//     localStorage.setItem(user, JSON.stringify(datapro));
//     console.log(datapro)
// }
//    }