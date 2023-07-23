const header = document.querySelector('header');
const logo = document.querySelector('nav img');

// Define a function to handle scroll event
function handleScroll() {
  if (window.pageYOffset > header.offsetHeight) {
    nav.classList.add('nav-scrolled');
    logo.setAttribute('src', './images/logo-black.png');
    logo.style.height = '75px';
  } else {
    nav.classList.remove('nav-scrolled');
    logo.setAttribute('src', './images/logo-white.png');
    logo.style.height = '150px';
  }
}
// Call the function on initial page load
handleScroll();

// Add a scroll event listener to call the function on scroll
window.addEventListener('scroll', handleScroll);