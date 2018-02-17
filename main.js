var box = document.querySelector('.box');
var login = document.querySelector('#login');
var password= document.querySelector('#login input');
var btn = document.querySelector('#login button');

btn.addEventListener('click', passwordCheck);

function passwordCheck(){
    console.log(box);
    if(password.value=='zaczynam'){
        login.style.display="none";
        box.classList.remove('locked');
    }
}