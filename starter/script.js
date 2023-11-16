'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
//* Use querySelectorAll when a selector matches multiple elements, otherwise it only select the first element
const btnsOpenModal = document.querySelectorAll('.show-modal');
console.log(btnsOpenModal);
for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener('click', function () {
    modal.style.display = 'block';
    overlay.style.display = 'block';
    btnCloseModal.addEventListener('click', function () {
      modal.style.display = 'none';
      overlay.style.display = 'none';
    });
  });
}
