var sandwich = document.querySelector('.header .nav-bar .nav-list .sandwich');
var mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
var menu_item = document.querySelector('.header .nav-bar .nav-list ul li a');
var header = document.querySelector('.header.container');

sandwich.addEventListener('click',()=>{
    sandwich.classList.toggle('active');
    mobile_menu.classList.toggle('active');
});

