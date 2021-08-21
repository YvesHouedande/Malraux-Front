// set category background
let categories = document.querySelectorAll('.category');

categories.forEach(category => {
    category.style.backgroundImage = `url(${category.dataset['url']})`
})
// menu logo
let menu = document.querySelector('.menu');
let menuItems = document.querySelector('.nav__items');
menu.addEventListener('click', (e) => {
    e.preventDefault()
    menuItems.classList.toggle('show_menu')

})