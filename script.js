const hoverSound = new Audio('hover.mp3');
document.querySelectorAll('.tool').forEach(tool => {
  tool.addEventListener('mouseenter', () => {
    hoverSound.currentTime = 0;
    hoverSound.play();
  });
});

const clickSound = new Audio('click.mp3');
document.querySelectorAll('a, button').forEach(el => {
  el.addEventListener('click', () => {
    clickSound.currentTime = 0;
    clickSound.play();
  });
});

const bgMusic = new Audio('background.mp3');
bgMusic.loop = true;
bgMusic.volume = 0.5;
window.addEventListener('click', () => {
  if (bgMusic.paused) bgMusic.play();
}, { once: true });
