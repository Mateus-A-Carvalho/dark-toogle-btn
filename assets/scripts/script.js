const sunEl = document.querySelector('#sun')
const moonEl = document.querySelector('#moon');
const bodyEl = document.querySelector('body');
const divWrapEl = document.querySelector('#div-wrap');

document.addEventListener("click", (e) => {
  if(e.target === sunEl) {
    bodyEl.classList.toggle('dark-mode');
  } else if(e.target === moonEl) {
    bodyEl.classList.toggle('dark-mode');
  }
})

