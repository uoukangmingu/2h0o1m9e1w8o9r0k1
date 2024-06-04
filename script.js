function adjustContainerHeight() {
  const desiredAspectRatio = 16 / 8;
  const newWidth = window.innerWidth;
  const newHeight = newWidth / desiredAspectRatio;
  document.querySelector('.container').style.height = `${newHeight}px`;
}

window.addEventListener('load', adjustContainerHeight);
window.addEventListener('resize', adjustContainerHeight);