import {creation} from './home'
import {menu} from './menu'

// const content = document.querySelector('#content');
const menubtn = document.querySelector('.menubtn');
const homebtn = document.querySelector('.homebtn');
const contactbtn = document.querySelector('.contactbtn');

creation();
 
menubtn.addEventListener('click',menu);
homebtn.addEventListener('click',creation);
console.log('is it indeed');

