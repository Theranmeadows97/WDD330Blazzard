/*------JavaScript Chapter 6: Document Object Model Practice------*/

const para = document.querySelector('p');
console.log(para);

para.innerHTML = "Ninjas are awesome!";

const para2 = document.querySelector('p:nth-child(2)')
console.log(para2);

para2.innerHTML = "This paragrph was changed using query selector!";

const link = document.querySelector('a');

console.log(link.getAttribute('href'));
link.setAttribute('href', 'https://www.youtube.com/')
link.innerHTML = "This was a link to google, but nows it's to YouTube.."
console.log(link.getAttribute('href'));


console.log(document.getElementsByClassName("attribute"));
const color = document.querySelector('div:nth-child(3) p:nth-child(2)');
color.setAttribute('style', 'color: red');
color.innerHTML = "I changed this using setAttribute."

const title = document.querySelector('h1');
title.style.color = 'blue'
title.style.fontSize = '40px'
//title.style.color = ''

const colorAdd = document.querySelectorAll('p');

colorAdd.forEach(p => {
  if(p.textContent.includes('red')){
    p.style.color = 'red';
  } 
  if(p.textContent.includes('blue')){
    p.style.color = 'blue'
  } 
  if(p.textContent.includes('green')){
    p.style.color = 'green'
  } 
  if(p.textContent.includes('yellow')){
    p.style.color = 'yellow'
  } 
});