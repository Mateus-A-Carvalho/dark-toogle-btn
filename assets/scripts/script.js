const bodyEl = document.querySelector('body');
const inputEl = document.querySelector('#dark-mode');
const labelEl = document.querySelector('#label')
const circleEl = document.querySelector('.circle')

inputEl.checked = JSON.parse(localStorage.getItem("mode"));
updateTheme();

inputEl.addEventListener("input", () => {
  updateTheme();
  updateLocalStorage();
})

function updateTheme() {
  if(inputEl.checked) {
    bodyEl.style.background = "rgba(15, 15, 15)";
    circleEl.style.backgroundColor = "#2b2b2b"
  } else {
    bodyEl.style.background = "rgba(245, 245, 245)";
    circleEl.style.backgroundColor = "#fffffa"
  }
}

function updateLocalStorage() {
  localStorage.setItem("mode", JSON.stringify(inputEl.checked))
}