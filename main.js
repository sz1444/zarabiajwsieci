var locked = document.querySelector('.locked');
var password= document.querySelector('#login');
var btn = document.querySelector('#locked button');


btn.addEventListener('click', passwordCheck);

function passwordCheck(){
    if(password.value=='zaczynam'){
        locked.style.display="none";
    }
}