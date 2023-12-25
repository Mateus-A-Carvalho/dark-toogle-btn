const sunEl = document.querySelector('#sun')
const moonEl = document.querySelector('#moon');
const bodyEl = document.querySelector('body');
const divWrapEl = document.querySelector('#div-wrap');
const htmlEl = document.querySelector('html');

document.addEventListener("click", (e) => {
  if(e.target === sunEl) {
    htmlEl.classList.toggle('dark-mode');
  } else if(e.target === moonEl) {
    htmlEl.classList.toggle('dark-mode');
  }
})

