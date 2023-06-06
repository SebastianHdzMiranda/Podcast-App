const menu = document.querySelector('.menu a');
console.log(menu);

const nav = document.querySelector('.navegacion');
console.log(nav);

menu.addEventListener('click', ()=>{
    nav.classList.toggle('nav-visible');
});