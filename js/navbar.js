const nav = document.querySelector('nav');
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

// Define a function to handle navbar link clicks
function handleNavClick(event) {
  event.preventDefault();
  
  // Get the target element from the href attribute of the clicked link
  const targetId = event.target.getAttribute('href').substr(1);
  const target = document.getElementById(targetId);
  
  // Scroll to the target element, taking into account the navbar height
  const navHeight = nav.offsetHeight;
  const targetPosition = target.offsetTop - navHeight;
  window.scrollTo({ top: targetPosition, behavior: 'smooth' });
}

// Add click event listeners to all navbar links
const navLinks = document.querySelectorAll('nav a');
navLinks.forEach(link => {
  link.addEventListener('click', handleNavClick);
});
