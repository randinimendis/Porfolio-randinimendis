// script.js

// toggle icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick =()=>{
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

// scroll sections
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
  let scrollY = window.scrollY;

  // Active navbar links
  sections.forEach((sec) => {
    let top = sec.offsetTop - 100;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if (scrollY >= top && scrollY < top + height) {
      navLinks.forEach((link) => {
        link.classList.remove('active');
      });
      document.querySelector(`header nav a[href="#${id}"]`).classList.add('active');
    }
  });

  // Sticky header
  let header = document.querySelector('header');
  header.classList.toggle('sticky', scrollY > 100);

  //remove  toggle icon navbar when click navbar link(scroll)
  menuIcon.classList.remove('bx-x');
  navbar.classList.remove('active');
};
  