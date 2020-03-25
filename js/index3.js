let safeOne = document.querySelector('.dangercloser')
let body = document.querySelector('.body')
let panel = document.querySelector('.panel')
let screenframe = document.querySelector('.screenframe')
let screenl = document.querySelector('.screen')
let fakescreen = document.querySelector('.fakescreen')


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
  screenframe.style.transform = 'translateX(10000px)'
  screenl.style.transform = 'translateX(10000px)'
  fakescreen.style.transform = 'translateX(10000px)'

});
