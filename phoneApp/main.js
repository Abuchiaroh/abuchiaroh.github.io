const menuBtn = document.querySelector("#menubtn")
const closeBtn = document.querySelector("#closebtn")
const menu = document.querySelector(".navItems")

// open
menuBtn.addEventListener("click", () => {
    
    menu.style.display='block';
    menuBtn.style.display='none';
    closeBtn.style.display='inline-block'
})

// close
closeBtn.addEventListener("click", () => {
    
    menu.style.display='none';
    menuBtn.style.display='inline-block';
    closeBtn.style.display='none'
})

//  HIDE OR SHOW FAQs

const faqs = document.querySelectorAll('.faq');
faqs.forEach(faq => {
    faq.addEventListener('click', () => {
        faq.classList.toggle('open');
        // change
        const icon = faq.querySelector('.faqicon i')
            if (icon.className === 'uil uil-plus') {
                icon.className = 'uil uil-minus'
            }else{
                icon.className = 'uil uil-plus'
            }
        
    })
});
////// add bg style to navbar
window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle('window-scroll', window.scrollY > 0);
})







