import menuItemsTpl from './templates/menu-items.hbs'
import menu from './menu.json';

const menuContainer = document.querySelector('.js-menu');
// const menuCardsMarkup = createMenuItemCards(menu);
menuContainer.insertAdjacentHTML('beforeend', createMenuItemCards(menu));

function createMenuItemCards(menu) {
  return menuItemsTpl(menu);
}

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const checkBox = document.querySelector('#theme-switch-toggle');
const bodyTheme = document.querySelector('body');
checkBox.addEventListener('change', onChangeBodyTheme);

currentTheme()

function onChangeBodyTheme() {
  const activatedCheckbox = checkBox.checked;
  
  if (activatedCheckbox) {
    localStorage.setItem('theme', Theme.DARK);
    return switchClass(Theme.LIGHT, Theme.DARK);

  } else {

    localStorage.setItem('theme', Theme.LIGHT);
    switchClass(Theme.DARK, Theme.LIGHT);    
  }
}

function switchClass(currentClass, newClass) {
 bodyTheme.classList.remove(currentClass);
 bodyTheme.classList.add(newClass); 
}

function currentTheme() {
  const savedTheme = localStorage.getItem('theme');

  if (savedTheme === Theme.DARK) {
  bodyTheme.classList.add(Theme.DARK);
  checkBox.checked = true;
  };
}






