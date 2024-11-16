let email = document.getElementById('email');
let password = document.getElementById('password');
let button = document.getElementById('button');

let information;
if(localStorage.getItem('datauser') != null) {
    information = JSON.parse(localStorage.getItem('datauser'));
} else {
    information = [];
}
console.log(information);
let condition;

function page() {
    let found = false; 
    for (let i = 0; i < information.length; i++) {
        if (email.value === information[i].email && password.value === information[i].password) {
            window.location.href='../index - logined.html';
            found = true;
            localStorage.setItem('condition','signed')
            break; 
        }
    }

    if (!found) {
        email.style.backgroundColor = 'red';
        password.style.backgroundColor = 'red';
        email.value = 'Invalid email ! Please try again.';
        email.onfocus = function() {
            if (email.value === 'Invalid email ! Please try again.') {
                email.value = '';
            }
        };
        password.value = '';
    }
}
// for(i=0;i<information.length;i++){
//     if(email.value===information[i].email &&password.value===information[i].password){
//         document.body.style.backgroundColor='blue'
//     }
//     else {
//         if(email.value!=information[i].email &&password.value==information[i].password){
//             email.style.backgroundColor='red';
//             email.value = 'Invalid email ! Please try again.';
//             email.onfocus = function() {
//                 if (email.value === 'Invalid email ! Please try again.') {
//                     email.value = '';
//                 }
//             };                
//         }else if(password.value!=information[i].password&&email.value==information[i].email &&password.value){
//             password.style.backgroundColor='red';
//             password.value=''
//         }else {
//             email.style.backgroundColor='red';
//             password.style.backgroundColor='red';
//             email.value = 'Invalid email ! Please try again.';
//             password.value='';
//             email.onfocus = function() {
//                 if (email.value === 'Invalid email ! Please try again.') {
//                     email.value = '';
//                 }
//             };                
//         }
//     }
// }

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