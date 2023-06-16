
const elment = document.querySelector('.hamburger');
const elment1 = document.querySelector('.nav-list');

elment.addEventListener("click", ()=> {
  elment.classList.toggle('active');
  elment1.classList.toggle('active');
})