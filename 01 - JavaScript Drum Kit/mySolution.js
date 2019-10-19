const playSound = e => {
  const audio = document.querySelector(`audio[data-key='${e.keyCode}']`)
  const key = document.querySelector(`.key[data-key='${e.keyCode}']`)
  if (!audio) return

  audio.currentTime = 0 //rewind to start of audio to play multiple time
  audio.play()
  key.classList.add('playing')
}

const removeTransition = e => {
  if (e.propertyName !== 'transform') return // skip if transition of transform property not done yet
  e.target.classList.remove('playing')
}

const keys = document.querySelectorAll('.key')
keys.forEach(key => key.addEventListener('transitionend', removeTransition))
window.addEventListener('keydown', playSound)
