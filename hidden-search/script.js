const container = document.querySelector('.container');
const button = document.querySelector('.container button');

button.addEventListener('click', function () {
  container.classList.toggle('active');
});