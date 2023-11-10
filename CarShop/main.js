let search = document.querySelector('.search-box')

document.querySelector('#search-icon').onclick = () => {
    search.classList.toggle('active');
}

// /////////////////// NAV TOGGLE ////////////////

const navMenu = document.querySelector('.navbar')
const navOpenBtn = document.querySelector('.nav_toggle-open')
const navCloseBtn = document.querySelector('.nav_toggle-close')

const openNavHandler = () =>{
    navMenu.style.display= 'flex';
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

const navItems = navMenu.querySelectorAll('a');
if (window.innerWidth < 768) {
    navItems.forEach(item => {
        item.addEventListener('click', closeNavHandler)
    })
}
