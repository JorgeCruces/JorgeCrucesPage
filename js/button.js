'use strict'

var button = document.querySelector(".menu-movil");
var nav = document.querySelector(".header-nav");

var show = " display";
var hide = " hidden";
console.log(nav.className.search("display") != -1);

button.addEventListener('click',function(){

    if(nav.className.search("display") == -1){
        nav.className = "header-nav" + show;
    }else{
        nav.className = "header-nav" + hide;
    }
    
});
nav.toggleAttribute