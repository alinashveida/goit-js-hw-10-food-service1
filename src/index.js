import cardTemplate from './templates/card.hbs';
import dishes from './js/menu.json';

console.log(cardTemplate);

function createMarkUp (dishes){
   return dishes.map(cardTemplate).join('');
};

const cardsList = document.querySelector('.js-menu');
console.log(cardsList);

const markUp = createMarkUp(dishes);

cardsList.insertAdjacentHTML('beforeend', markUp);

//--------------------------Тема------------

const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
  };

 
  const input = document.getElementById('theme-switch-toggle');
  console.log(input);

  const body = document.querySelector('body');
  console.log(body);

  
  input.addEventListener('change', changeTheme);

  establishmentTheme()

  function changeTheme(event){
      if(input.checked){
        updateClass(Theme.DARK, Theme.LIGHT)
        localStorage.setItem("theme", Theme.DARK)
      }

      else{
        updateClass(Theme.LIGHT, Theme.DARK)
        localStorage.setItem("theme", Theme.LIGHT)
      }
      
    }

    function updateClass(addClass, removeClass){
      body.classList.add(addClass);
      body.classList.remove(removeClass)

    }

    function establishmentTheme (){
        const currentTheme = localStorage.getItem("theme")||Theme.LIGHT;  
      body.classList.add(currentTheme);
      
      input.checked = currentTheme === Theme.DARK;

    }

   

