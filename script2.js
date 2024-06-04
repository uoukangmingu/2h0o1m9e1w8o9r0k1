function adjustContainerHeight() {
  const desiredAspectRatio = 16 / 16;
  const newWidth = window.innerWidth;
  const newHeight = newWidth / desiredAspectRatio;
  document.querySelector('.container').style.height = `${newHeight}px`;
}

window.addEventListener('load', adjustContainerHeight);
window.addEventListener('resize', adjustContainerHeight);

document.addEventListener('keydown', function(event) {
if (event.key === 'Escape') {
window.location.href = 'index.html';
}
});