// header background change when scroll down
const header = document.querySelector('header');

function headerBackgroundChange() {
  if (window.scrollY > 0) {
    header.classList.add('on');
  } else {
    header.classList.remove('on');
  }
}

window.addEventListener('scroll', headerBackgroundChange);
