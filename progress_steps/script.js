// DOM elements
const progress = document.getElementById('progress');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const circles = document.querySelectorAll('.circle');

// State of the active circle
let current = 1;

// Events
next.addEventListener('click', () => {
  const circleLength = circles.length;
  if (current < circleLength) {
    current++;
    progress.style.width = (current - 1) * 33 + '%';
    prev.removeAttribute('disabled', 'disabled')
    updateCircle();
  }
  if (current === circleLength) {
    console.log(current)
    next.setAttribute('disabled', 'disabled')
  }
});

prev.addEventListener('click', () => {
  if (current > 1) {
    current--;
    const width = parseInt(progress.style.width) - 33;
    progress.style.width = width + '%';
    next.removeAttribute('disabled', 'disabled')
    updateCircle();
  }
  if (current === 1) {
    prev.setAttribute('disabled', 'disabled')
  }
});

// Functions
function updateCircle() {
  circles.forEach((circle, index) => {
    if (index > current - 1) {
      circle.classList.remove('active')
    } else {
      circle.classList.add('active')
    }
  });
}