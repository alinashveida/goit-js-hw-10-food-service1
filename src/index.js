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
        body.classList.add(Theme.DARK)
        localStorage.setItem("theme", Theme.DARK)

        if(body.classList.contains(Theme.LIGHT)){
            body.classList.remove(Theme.LIGHT)
        }
      }
      if(!input.checked){
        body.classList.add(Theme.LIGHT) || body.classList.remove(Theme.DARK);
        localStorage.setItem("theme", Theme.LIGHT)
      }
      
    }

    function establishmentTheme (){
        const currentTheme = localStorage.getItem("theme");  
      body.classList.add(currentTheme)
      
      if(currentTheme === Theme.DARK){
        input.checked = true;
        
      }

    }

   

