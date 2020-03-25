let safeOne = document.querySelector('.dangercloser')
let body = document.querySelector('.body')
let el = document.querySelector('.el')


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
  el.style.transform = 'translateX(100px)'
});
