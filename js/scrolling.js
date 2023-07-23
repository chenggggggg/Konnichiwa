const nav = document.querySelector('nav');

// Define a function to handle navbar link clicks
function handleNavClick(event) {
  event.preventDefault();

  const href = event.target.getAttribute('href');
  const targetId = href.substring(href.indexOf('#') + 1);
  const target = document.querySelector(".section." + targetId);

  if (target) {
    const navHeight = nav.getBoundingClientRect().height;
    const targetPosition = target.offsetTop - navHeight;

    window.scrollTo({ top: targetPosition, behavior: 'smooth' });
  }
}

const links = nav.querySelectorAll('a');

links.forEach(function (link) {
  // Get the current page URL
  const currentPageUrl = window.location.href;

  // Extract the page name from the URL
  const currentPageName = currentPageUrl.substring(currentPageUrl.lastIndexOf('/') + 1);

  if (currentPageName == "menu.html") {
    window.location.href = 'index.html';
  }
  else{
    link.addEventListener("click", handleNavClick)
  }
})