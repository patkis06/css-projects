const progress = document.getElementById('progress');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const circles = document.querySelectorAll('.circle');

let current = 1;

next.addEventListener('click', () => {
  if (current < circles.length) {
    prev.removeAttribute('disabled', 'disabled')
    current++;
    progress.style.width = (current - 1) * 33 + '%';
    updateCircle();
  }
  if (current === circles.length) {
    next.setAttribute('disabled', 'disabled')
  }
});

prev.addEventListener('click', () => {
  if (current > 1) {
    next.removeAttribute('disabled', 'disabled')
    current--;
    const width = parseInt(progress.style.width) - 33;
    progress.style.width = width + '%';
    updateCircle();
  }
  if (current === 1) {
    prev.setAttribute('disabled', 'disabled')
  }
});

function updateCircle() {
  circles.forEach((circle, index) => {
    if (index > current - 1) {
      circle.classList.remove('active')
    } else {
      circle.classList.add('active')
    }
  });
}