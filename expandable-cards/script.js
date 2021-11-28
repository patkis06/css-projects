
const panels = document.querySelectorAll('.panel');

panels.forEach(function (panel) {
  panel.addEventListener('click', () => {
    removeActiveClass();
    panel.classList.add('active')
  })
});

function removeActiveClass() {
  panels.forEach(function (panel) {
    if (panel.classList.contains('active')) {
      panel.classList.remove('active')
    }
  });
}