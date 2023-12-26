const sunEl = document.querySelector('#sun')
const moonEl = document.querySelector('#moon');
const bodyEl = document.querySelector('body');
const divWrapEl = document.querySelector('#div-wrap');
const htmlEl = document.querySelector('html');

document.addEventListener("click", (e) => {
  if(e.target === moonEl) {
    htmlEl.classList.toggle('dark-mode');
    // adding classes;
    moonEl.classList.add('enable');
    sunEl.classList.add('desable');
    // removing classes;
    moonEl.classList.remove('desable');
    sunEl.classList.remove('enable');

  } else if(e.target === sunEl) {
    htmlEl.classList.toggle('dark-mode');
    // adding classes;
    sunEl.classList.add('enable');
    moonEl.classList.add('desable');
    // removing classes;
    sunEl.classList.remove('desable');
    moonEl.classList.remove('enable');

  }

})

