/*Iconos menú */
let menuIcon = document.querySelector('#menuIcon');
let navbar = document.querySelector('.navbar');


menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};



/*SCROLL */
let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top< offset + height) {
            navlinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active')
            });
        };
    });



/*Stick NAVBAR */
let header = document.querySelector('.header');

header.classList.toggle('sticky', window.scrollY > 100)

/*remove menu scroll*/

menuIcon.classList.remove('bx-x');
navbar.classList.remove('active');

};

/*night mode */


let darkModeIcon = document.querySelector('#darkMode-icon');

darkModeIcon.onclick = () => {
    darkModeIcon.classList.toggle('bx-sun');
    document.body.classList.toggle('darkMode');
};

/*scroll reveal */

ScrollReveal({ 
    reset: true,
    distance: '80px',
    durantion: 2000, 
    delay: 200 

});


ScrollReveal().reveal('.homeContent, .heading', { origin: 'top' });
ScrollReveal().reveal('.servicesContainer, .portfolioBox, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.homeContent h1, .about-img img', { origin: 'left' });
ScrollReveal().reveal('.homeContent h3, .homeContent p, .aboutContent', { origin: 'right' });


