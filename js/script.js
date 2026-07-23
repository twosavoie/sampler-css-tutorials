// * Theme picker: Kevin Powell's tutorial
const colorThemes = document.querySelectorAll('[name="theme"]');

// store theme
const storeTheme = function (theme) {
  localStorage.setItem("theme", theme);
};

// set theme when visitor returns
const setTheme = function () {
  const activeTheme = localStorage.getItem("theme");
  colorThemes.forEach((themeOption) => {
    if (themeOption.id === activeTheme) {
      themeOption.checked = true;
    }
  });
  // fallback for no :has() support
  document.documentElement.className = activeTheme;
};

colorThemes.forEach((themeOption) => {
  themeOption.addEventListener("click", () => {
    storeTheme(themeOption.id);
    // fallback for no :has() support
    document.documentElement.className = themeOption.id;
  });
});

document.onload = setTheme();
// * End theme picker Kevin Powell tutorial

// * Click for stars: Josh Comeau's animation course https://courses.joshwcomeau.com/wham/01-particles/01.02-initial-exercises
// ? This only shows in the blue theme which is where I originally added it??? But I do see the stars in the DOM. I wonder if this is a querySelector issue? When I remove the -1 z-index from the starLayer it works. Maybe the background is too opaque? When I remove it, it works even with the -1 z-index.
// ? AI ADDED NOTE: I think it is because the starLayer is in the body and not in the container div. I will try moving it to the container div and see if that works. I also need to add a z-index to the starLayer so that it is above the other elements. 
// Vanilla JS replacements for Lodash helpers
const random = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
const range = (length) => Array.from({ length }, (_, index) => index);

const btn = document.querySelector('.particleButton');
const starLayer = document.querySelector('.starLayer');

btn.addEventListener('click', () => {
  // Add 10 stars with each click
  range(10).forEach(() => {
    // Each star
    const star = document.createElement('div');
    // Give each star a class
    star.classList.add('star');
    // The contents of the div created above - a star
    star.innerText = '⭐';

    // While positioned absolutely in the CSS this specifies the placement of the star by randomly assigning a top and left position
    star.style.top = random(0, 100) + '%';
    star.style.left = random(0, 100) + '%';

    // Appending the star to the starLayer coded in to the HTML
    starLayer.appendChild(star);
  });
  // TODO: Generate stars on click!
  // Here’s the emoji to use: ⭐
});

/*
  DOM manipulation cheatsheet:

  - Select an element:
    `document.querySelector('.someCssSelector');`
  - Create new elements:
    `document.createElement('tagName');`
  - Add a CSS class:
    `element.classList.add('className');`
  - Add the element to the DOM:
    `parentNode.appendChild(childNode);`
  - Add text to a node:
    `element.innerText = "Stuff";`
*/

// * End click for stars

