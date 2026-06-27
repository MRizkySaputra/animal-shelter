// Show Menu
const navMenu = document.getElementById('nav-menu'), 
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

// Remove Menu Mobile
const navLink = document.querySelectorAll('.nav__link') // Menggunakan double underscore (__) sesuai CSS BEM

const linkAction = () => {
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

// Navbar Scroll Effect
let lastScroll = 0

const scrollNav = () => {
    const header = document.getElementById('header'),
          currentScroll = window.scrollY

    if(currentScroll > lastScroll && currentScroll >= 400){
        header.classList.add('scroll-nav')
    } else {
        header.classList.remove('scroll-nav')
    }
    lastScroll = currentScroll
}
window.addEventListener('scroll', scrollNav)

// --- FITUR TABS (TIM BARK & TIM MEOW) ---
const tabs = document.querySelectorAll('.tab__btn');
const tabContents = document.querySelectorAll('.tab__pane');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.target);

        tabContents.forEach(tc => tc.classList.remove('active-tab'));
        tabs.forEach(t => t.classList.remove('active-tab'));

        tab.classList.add('active-tab');
        target.classList.add('active-tab');
    });
});

// Animation Effect
const sr = ScrollReveal({
    distance: '90px',
    duration: 3000,
    reset: true
})

sr.reveal('.data, .about__data', {origin: 'top', delay: 400})
sr.reveal('.home__img, .about__img, .pets__img', {origin: 'bottom', delay: 800})