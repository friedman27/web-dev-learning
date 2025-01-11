for (let i = 0; i < document.querySelectorAll('.drum').length; i++) {
  document.querySelectorAll('.drum')[i].addEventListener('click', function () {
    let keyClicked = this.innerHTML;
    playSound(keyClicked);
    buttonAnimation(keyClicked);
  });
}

document.addEventListener('keydown', (event) => {
  let keyPressed = event.key;
  playSound(keyPressed);
  buttonAnimation(keyPressed);
});

function playSound(keyPressed) {
  switch (keyPressed) {
    case 'w':
      let kick = new Audio('./sounds/kick-bass.mp3');
      kick.play();
      break;
    case 'a':
      let snare = new Audio('./sounds/snare.mp3');
      snare.play();
      break;
    case 's':
      let tom1 = new Audio('./sounds/tom-1.mp3');
      tom1.play();
      break;
    case 'd':
      let tom2 = new Audio('./sounds/tom-2.mp3');
      tom2.play();
      break;
    case 'j':
      let tom3 = new Audio('./sounds/tom-3.mp3');
      tom3.play();
      break;
    case 'k':
      let tom4 = new Audio('./sounds/tom-4.mp3');
      tom4.play();
      break;
    case 'l':
      let crash = new Audio('./sounds/crash.mp3');
      crash.play();
      break;
    default:
      console.log(`No sound set up for ${expr}.`);
  }
}

function buttonAnimation(keyPressed) {
  let button = document.querySelector('.' + keyPressed);
  button.classList.add('pressed');
  setTimeout(() => {
    button.classList.remove('pressed');
  }, '100');
}
