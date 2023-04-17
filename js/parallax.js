document.addEventListener("DOMContentLoaded", function(event) { 
  // get the background container and its image
  var backgroundContainer = document.querySelector(".background-container");
  var backgroundImg = backgroundContainer.querySelector("img");
  
  // define a function to adjust the transform of the image based on scroll position
  function adjustParallaxTransform() {
    var scrollPosition = window.scrollY;
    var parallaxAmount = scrollPosition / 3;
    backgroundImg.style.transform = "translate3d(0, calc(-50% + " + parallaxAmount + "px), 0)";
  }
  
  // add a scroll event listener to call the parallax function
  window.addEventListener("scroll", adjustParallaxTransform);
  
  // call the function initially in case the page starts scrolled
  adjustParallaxTransform();
});
