import data from '../menu.json';

import cards from '../template/temp.hbs';

const markUp = data.map(e => cards(e));
const dishesMenu = document.querySelector('.js-menu');
const themeSwitchBtn = document.querySelector('.theme-switch__toggle');
const bodyRef = document.querySelector('body');
dishesMenu.insertAdjacentHTML('beforeend', markUp.join(''));

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};
bodyRef.classList.add(
  localStorage.getItem('key') === null
    ? Theme.LIGHT
    : localStorage.getItem('key'),
);
themeSwitchBtn.checked = localStorage.getItem('key') === Theme.DARK;
function changeTheme() {
  if (themeSwitchBtn.checked) {
    bodyRef.classList.add(Theme.DARK);
    bodyRef.classList.remove(Theme.LIGHT);
    localStorage.setItem('key', Theme.DARK);
  } else {
    bodyRef.classList.remove(Theme.DARK);
    bodyRef.classList.add(Theme.LIGHT);
    localStorage.setItem('key', Theme.LIGHT);
  }
}
themeSwitchBtn.addEventListener('change', changeTheme);
