/*-------------------- MENU SHOW Y HIDDEN --------------------*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')


/*----- MENU SHOW -----*/
/* valida se a constante existe */
if (navToggle){
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}
/*----- MENU HIDDEN -----*/
/* valida se a constante existe */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu') // desepear the menu
    })
}
/*-------------------- REMOVE MENU MOBILE --------------------*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // Quando clicamos em cada nav__link, removemos a classe show-menu
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*-------------------- SKILLS --------------------*/
const skillsContent = document.getElementsByClassName('skills__content'),
      skillsHeader = document.querySelectorAll('.skills__header')

function toggleSkills(){
    let itemclass = this.parentNode.className

    for (i = 0; i < skillsContent.length; i++){
        skillsContent[i].className = 'skills__content skills__close'
    }
    if (itemclass === 'skills__content skills__close'){
    this.parentNode.className = 'skills__content skills__open'
    }
}

skillsHeader.forEach((el) =>{
    el.addEventListener('click', toggleSkills)
})

/*-------------------- SERVICES MODAL --------------------*/
const modalViews = document.querySelectorAll('.services__modal'),
      modalBtns = document.querySelectorAll('.services__button'),
      modalCloses = document.querySelectorAll('.services__modal-close')

let modal = function(modalClick){
    modalViews[modalClick].classList.add('active-modal')
}

modalBtns.forEach((modalBtn, i) =>{
    modalBtn.addEventListener('click', () => {
        modal(i)
    })
})

modalCloses.forEach((modalClose) =>  {
    modalClose.addEventListener('click', () =>{
        modalViews.forEach((modalView) => {
            modalView.classList.remove('active-modal')
        })
    })
})


/*-------------------- PORTFOLIO SWIPER  --------------------*/
let swiper = new Swiper(".portfolio__container", {
    cssMode: true,
    loop: true,

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
});

/*-------------------- TESTIMONIAL --------------------*/


/*-------------------- SCROLL SECTIONS ACTIVE LINK --------------------*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*-------------------- CHANGE BACKGROUND HEADER --------------------*/ 
function scrollHeader(){
    const nav = document.getElementById('header')
    // Quando a rolagem ?? maior que 200 na altura da janela de visualiza????o, adicione a classe scroll-header ?? tag de cabe??alho
    if(this.scrollY >= 80) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*-------------------- SHOW SCROLL UP --------------------*/ 
function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    // Quando a rolagem ?? superior a 560 de altura da janela de visualiza????o, adicione a classe show-scroll ?? tag a com a classe scroll-top
    if(this.scrollY >= 560) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*-------------------- DARK LIGHT THEME --------------------*/ 
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'uil-brightness'

// T??pico selecionado anteriormente (se o usu??rio selecionou)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// Obtemos o tema atual da interface validando a classe dark-theme
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-brightness'

// N??s validamos se o usu??rio escolheu previamente um t??pico
if (selectedTheme) {
  // Se a valida????o for cumprida, perguntamos qual era o problema para saber se ativamos ou desativamos o escuro
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme)
}

// Ative / desative o tema manualmente com o bot??o
themeButton.addEventListener('click', () => {
    // Adicionar ou remover o tema escuro / ??cone
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // N??s salvamos o tema e o ??cone atual que o usu??rio escolheu
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})


