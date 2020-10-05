"use strict";

const [add] = document.querySelectorAll('.add');
const [clear] = document.querySelectorAll('.clear');
const [list] = document.querySelectorAll('ul');

add.addEventListener('click', () => {
	const value = prompt('enter url here');
  if (value != "" && value != null) {
  const newLi = document.createElement('li');
  newLi.innerHTML = `<a href="${value}" target="_blank">${value}</a>`;
  list.appendChild(newLi);
}})

clear.addEventListener('click', () => {
	list.innerHTML = "";
});


