function adjustContainerHeight() {
  const desiredAspectRatio = 16 / 8;
  const newWidth = window.innerWidth;
  const newHeight = newWidth / desiredAspectRatio;
  document.querySelector('.container').style.height = `${newHeight}px`;
}

window.addEventListener('load', adjustContainerHeight);
window.addEventListener('resize', adjustContainerHeight);

const buttonClickSound = new Audio('물방울 소리.mp3');

const buttons = document.querySelectorAll('.first-button, .second-button');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    buttonClickSound.play();
  });
});
