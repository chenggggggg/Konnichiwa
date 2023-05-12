const menuSections = document.querySelectorAll('.menu-section');
const previousButton = document.querySelector('#Prev');
const nextButton = document.querySelector('#Next');
const menuTitles = [
  { english: "Teppanyaki", japanese: "鉄板焼き" },
  { english: "Sushi", japanese: "寿司" },
  { english: "Otsumami", japanese: "おつまみ" },
  { english: "Lunch", japanese: "昼ご飯" },
  { english: "Wijn", japanese: "オープンワイン" },
  { english: "Sake", japanese: "日本酒" }];
let currentSectionIndex = 0;
let currentMenuIndex = 0;
const englishMenuTitle = document.querySelector("#english-menu-title");
const japaneseMenuTitle = document.querySelector("#japanese-menu-title");

function showCurrentSection() {
  menuSections.forEach((section, index) => {
    if (index === currentSectionIndex) {
      section.style.display = "block";
    } else {
      section.style.display = "none";
    }
  });
}

function showCurrentMenu() {
  const menuTitle = menuTitles[currentMenuIndex];
  englishMenuTitle.textContent = menuTitle.english;
  japaneseMenuTitle.textContent = menuTitle.japanese;
}

function nextSection() {
  currentSectionIndex++;
  if (currentSectionIndex >= menuSections.length) {
    currentSectionIndex = 0;
  }
  showCurrentSection();
}

function previousSection() {
  currentSectionIndex--;
  if (currentSectionIndex < 0) {
    currentSectionIndex = menuSections.length - 1;
  }
  showCurrentSection();
}

function nextMenu() {
  currentMenuIndex = (currentMenuIndex + 1) % menuTitles.length;
  showCurrentMenu();
}

function previousMenu() {
  currentMenuIndex = (currentMenuIndex - 1 + menuTitles.length) % menuTitles.length;
  showCurrentMenu();
}

showCurrentSection();
showCurrentMenu();

previousButton.addEventListener('click', () => {
  previousSection();
  previousMenu();
});

nextButton.addEventListener('click', () => {
  nextSection();
  nextMenu();
});
