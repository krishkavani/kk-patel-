burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')
navList = document.querySelector('.navList')
rightnav = document.querySelector('.rightnav')



burger.addEventListener('click',()=>{
    rightnav.classList.toggle('v-class-resp');
    navlist.classList.toggle('v-class-resp');
    navbar.classList.toggle('h-nav-resp');
})