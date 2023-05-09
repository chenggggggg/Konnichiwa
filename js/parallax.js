document.addEventListener("DOMContentLoaded", function (event) {
  // get the background container and its image
  var backgroundContainer = document.querySelector(".first-parallax");
  var backgroundImg = backgroundContainer.querySelector("img");

  // define a function to adjust the transform of the image based on scroll position
  function adjustParallaxTransform() {
    var scrollPosition = window.scrollY;
    var parallaxAmount = scrollPosition / 5;
    
    backgroundImg.style.transform = "translate3d(0, calc(-50% + " + parallaxAmount + "px), 0)";
  }

  // add a scroll event listener to call the parallax function
  window.addEventListener("scroll", adjustParallaxTransform);

  // call the function initially in case the page starts scrolled
  adjustParallaxTransform();
});

document.addEventListener("DOMContentLoaded", function (event) {
  // get the background container and its image
  var backgroundContainer = document.querySelector(".second-parallax");
  var backgroundImg = backgroundContainer.querySelector("img");

  // define a function to adjust the transform of the image based on scroll position
  function adjustParallaxTransform() {
    var windowWidth = window.innerWidth;
    var scrollPosition = window.scrollY;
    var parallaxAmount = scrollPosition / 3;

    switch (true) {
      case (windowWidth <= 320):
        backgroundImg.style.transform = "translate3d(0, calc(-100% + " + ((parallaxAmount / 2) - 300) + "px), 0)";
        break;
      case (windowWidth <= 576):
        backgroundImg.style.transform = "translate3d(0, calc(-90% + " + ((parallaxAmount / 2) - 100) + "px), 0)";
        break;
      case (windowWidth <= 768):
        backgroundImg.style.transform = "translate3d(0, calc(-80% + " + ((parallaxAmount / 2) - 100) + "px), 0)";
        break;
      case (windowWidth <= 992):
        backgroundImg.style.transform = "translate3d(0, calc(-70% + " + (parallaxAmount - 300) + "px), 0)";
        break;
      case (windowWidth <= 1200):
        backgroundImg.style.transform = "translate3d(0, calc(-60% + " + (parallaxAmount - 300) + "px), 0)";
        break;
      default:
        backgroundImg.style.transform = "translate3d(0, calc(-50% + " + (parallaxAmount / 2) + "px), 0)";
        break;
    }
  }

  // add a scroll event listener to call the parallax function
  window.addEventListener("scroll", adjustParallaxTransform);

  // call the function initially in case the page starts scrolled
  adjustParallaxTransform();
});
