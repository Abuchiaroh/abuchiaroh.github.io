// /////////////////// NAV TOGGLE ////////////////

const navMenu = document.querySelector('.nav_menu')
const navMenuc = document.querySelector('ul')
const navOpenBtn = document.querySelector('.nav_toggle-open')
const navCloseBtn = document.querySelector('.nav_toggle-close')

const openNavHandler = () =>{
   
    navMenu.style.display= 'inline-block';
    navOpenBtn.style.display= 'none';
    navCloseBtn.style.display= 'inline-block';
}
const closeNavHandler = () =>{
    navMenu.style.display= 'none';
    navOpenBtn.style.display= 'inline-block';
    navCloseBtn.style.display= 'none';  
}
navOpenBtn.addEventListener('click', openNavHandler)
navCloseBtn.addEventListener('click', closeNavHandler)



/////////////CLOSE NAV MENU ON CLICK OF NAV ITEM ON SMALL SCREEN///////////////

const navItems = navMenuc.querySelectorAll('a');
if (window.innerWidth < 1171) {
    navItems.forEach(item => {
        item.addEventListener('click', closeNavHandler)
    })
}