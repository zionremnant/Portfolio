var sandwich = document.querySelector('.header .nav-bar .nav-list .sandwich');
var mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
var header = document.querySelector('.header.container');

sandwich.addEventListener('click',()=>{
    sandwich.classList.toggle('active');
    mobile_menu.classList.toggle('active');
});