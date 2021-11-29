// DOM elements
const panels = document.querySelectorAll('.panel');

// Events
panels.forEach(function (panel) {
  panel.addEventListener('click', () => {
    removeActiveClass();
    panel.classList.add('active')
  })
});

// Functions
function removeActiveClass() {
  panels.forEach(function (panel) {
    if (panel.classList.contains('active')) {
      panel.classList.remove('active')
    }
  });
}