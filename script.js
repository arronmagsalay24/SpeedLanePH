const reveals = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add('active');
    } 
    // Optional: remove class when out of view
    // else { entry.target.classList.remove('active'); }
  });
}, { threshold: 0.1 }); // 10% of element visible triggers animation

reveals.forEach(el => observer.observe(el));

const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('nav-active'); // match sa CSS
  hamburger.classList.toggle('toggle'); // animate hamburger icon
});
