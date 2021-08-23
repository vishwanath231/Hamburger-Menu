
const hamburgerOne = document.querySelector('.hamburger-1');
const hamburgerTwo = document.querySelector('.hamburger-2');
const hamburgerThree = document.querySelector('.hamburger-3');

hamburgerOne.addEventListener('click', () => {
    hamburgerOne.classList.toggle('open');
})
hamburgerTwo.addEventListener('click', () => {
    hamburgerTwo.classList.toggle('open');
})
hamburgerThree.addEventListener('click', () => {
    hamburgerThree.classList.toggle('open');
})