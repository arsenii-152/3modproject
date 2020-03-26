let safeOne = document.querySelector('.dangercloser')
let body = document.querySelector('.body')
let panel = document.querySelector('.panel')
let screenFrame = document.querySelector('.screenframe')
let screenl = document.querySelector('.screen')
let dangerback = document.querySelector('.dangerback')
let danger = document.querySelector('.danger')
let sound = document.querySelector('.sound')
let wire = document.querySelector('.wire')
let nextback = document.querySelector('.nextback')
let signnext = document.querySelector('.signnext')
let next = document.querySelector('.next')
let dangerb = document.querySelector('.dangerb')
let dangerbutton = document.querySelector('.dangerbutton')
let dangercloser = document.querySelector('.dangercloser')











let openFirst = anime ({
  targets: '.dangercloser',
  translateY: -246,
  rotate: 180,
  autoplay: false,
  duration: 100,
})
safeOne.onclick = openFirst.play


let safeTwo = document.querySelector('.lastsafe')


let openSecond = anime ({
  targets: '.lastsafe',
  translateY: -212,
  rotate: 180,
  autoplay: false,
  duration: 100,
})
safeTwo.onclick = openSecond.play

let lastOne = document.querySelector('.lastone')
let lastHolder = document.querySelector('.lastholder')
let fakeScreen = document.querySelector('.fakescreen')
let buttonOne = document.querySelector('.dangerbutton')
let buttonTwo = document.querySelector('.lastbtn')
let audioWarn = new Audio('audio/warning.mp3');
let audioWarnTwo = new Audio('audio/siren.mp3');


let onePressed = anime ({
  targets: '.fakescreen',
  opacity: 0,
  autoplay: false,
  duration: 1000,
})
buttonOne.onclick = onePressed.play

let twoPressed = anime ({
  targets: '.fade',
  opacity: 1,
  autoplay: false,
  duration: 1000,
})

buttonTwo.onclick = twoPressed.play
document.querySelector('.lastbtn').addEventListener('click', function() {
  audioWarnTwo.play()
  panel.style.transform = 'translateX(10000px)'
  screenl.style.transform = 'translateX(10000px)'
  dangerback.style.transform = 'translateX(10000px)'
  danger.style.transform = 'translateX(10000px)'
  sound.style.transform = 'translateX(10000px)'
  wire.style.transform = 'translateX(10000px)'
  nextback.style.transform = 'translateX(10000px)'
  signnext.style.transform = 'translateX(10000px)'
  next.style.transform = 'translateX(10000px)'
  dangerb.style.transform = 'translateX(10000px)'
  dangerbutton.style.transform = 'translateX(10000px)'
  dangercloser.style.transform = 'translateX(10000px)'
  fakeScreen.style.opacity = 0
  screenFrame.style.opacity = 0
  buttonTwo.style.opacity = 0
  lastHolder.style.opacity = 0
  fakeScreen.style.opacity = 0
  safeTwo.style.opacity = 0
  lastOne.style.opacity = 0

});
