const boxes = document.querySelectorAll('.box');

const checkboxes = () => {
  const bottom = window.innerHeight / 5 * 4;
  boxes.forEach(box => {
    const top = box.getBoundingClientRect().top;
    if (top < bottom) {
      box.classList.add('show')
    } else {
      box.classList.remove('show')
    }
  });
}

window.addEventListener('scroll', checkboxes);

checkboxes(); 