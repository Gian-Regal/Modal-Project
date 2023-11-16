'use strict';

/** 
//? In this case the closing of modal window is only done by selecting x and the way we triggeer the open of modal winddow is done by using css styles.
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
*/

//? Working with classes
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
//* Use querySelectorAll when a selector matches multiple elements, otherwise it only select the first element
const btnsOpenModal = document.querySelectorAll('.show-modal');
console.log(btnsOpenModal);

const openModal = function () {
  //*when removing classes dont need the dot
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  //*when removing classes dont need the dot
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

//* We don't call it , we simply declared whenever a click please call this function we specified
for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener('click', openModal);
}

//* close modal window when selecting x button
btnCloseModal.addEventListener('click', closeModal);

//* close modal window wen selecting on any area out of the modal box
overlay.addEventListener('click', closeModal);
