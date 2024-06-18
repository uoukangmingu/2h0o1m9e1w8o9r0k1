function adjustContainerHeight() {
  const desiredAspectRatio = 16 / 16;
  const newWidth = window.innerWidth;
  const newHeight = newWidth / desiredAspectRatio;
  document.querySelector('.container').style.height = `${newHeight}px`;
}

window.addEventListener('load', adjustContainerHeight);
window.addEventListener('resize', adjustContainerHeight);

const buttonClickSound = new Audio('../물방울 소리.mp3');

const buttons = document.querySelectorAll('.first-button, .second-button, .third-button, .fourth-button, .fifth-button, .sixth-button, .button1, .button2, .button3, .button4, .button5, .button6, .button-left');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    buttonClickSound.play();
  });
});

window.addEventListener('load', function() {
  window.scrollTo(0, document.body.scrollHeight);
});

document.addEventListener('keydown', function(event) {
  if (event.key === 'Escape') {
    window.location.href = 'index.html';
  }
});

window.addEventListener('hashchange', function() {
  window.scrollTo(0, document.body.scrollHeight);
});

