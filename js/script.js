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


// * Vanilla JS replacements for Lodash helpers for Josh Comeau's animation course: https://courses.joshwcomeau.com/wham/01-particles/01.02-initial-exercises
const random = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
const range = (length) => Array.from({ length }, (_, index) => index);

// * Like button: Josh Comeau's animation course https://courses.joshwcomeau.com/wham/01-particles/01.01-cleanup
const btnLike = document.querySelector('.particleButton-like');

// Our “source of truth” for the animation’s fade duration.
// This ensures that the cleanup timeout will never fire
// before the animation has completed.
const FADE_DURATION = 1000;

btnLike.addEventListener('click', () => {
  btnLike.classList.toggle('liked');

  if (!btnLike.classList.contains('liked')) {
    return;
  }

  // We’ll collect all freshly-created particles in this array:
  const particles = [];

  range(5).forEach(() => {
    const particle = document.createElement('span');
    particle.classList.add('particle');

    particle.style.top = random(0, 100) + '%';
    particle.style.left = random(0, 100) + '%';

    // Set the fade duration through an inline style,
    // so that we can use our “source of truth”:
    particle.style.animationDuration = FADE_DURATION + 'ms';

    btnLike.appendChild(particle);

    // Keep track of this particle, so that it can be cleaned up:
    particles.push(particle);
  });

  // Schedule a timeout that will destroy all freshly-created
  // particles after the animation has completed:
  window.setTimeout(() => {
    particles.forEach((particle) => {
      particle.remove();
    });

    // We add 200ms to really be 100% sure that the cleanup
    // function won’t interrupt the fade-out animation:
  }, FADE_DURATION + 200);
});

// * Click for stars: Josh Comeau's animation course https://courses.joshwcomeau.com/wham/01-particles/01.02-initial-exercises
const btnStars = document.querySelector('.particleButton-stars');
const starLayer = document.querySelector('.starLayer');

btnStars.addEventListener('click', () => {
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

