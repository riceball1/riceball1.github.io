const themeToggle = document.querySelector("#toggle");

const currentTheme = localStorage.getItem("theme");
const pageTheme = document.body;

let isLight = true;
const sun = "🌕";
const moon = "🌑";

if (currentTheme == "dark") {
  isLight = !isLight;
  pageTheme.classList = "darkMode";
  themeToggle.innerText = sun;
} else {
  pageTheme.classList = "lightMode";
  themeToggle.innerText = moon;
}

function switchThemeMode() {
  isLight = !isLight;
  !isLight
    ? (themeToggle.innerText = sun)
    : (themeToggle.innerText = moon);
  const rootElement = document.body;

  let theme = isLight ? "light" : "dark";

  rootElement.classList.toggle(
    theme === "light" ? "lightMode" : "darkMode"
  );
  pageTheme.classList = theme === "light" ? "lightMode" : "darkMode";
  localStorage.setItem("theme", theme);
}

themeToggle.addEventListener("click", switchThemeMode);