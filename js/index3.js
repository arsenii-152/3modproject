let safeOne = document.querySelector('.dangercloser')
let body = document.querySelector('.body')

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



let onePressed = anime ({
  targets: '.fakescreen',
  opacity: 0,
  autoplay: false,
  duration: 1000,
})
buttonOne.onclick = onePressed.play
function soundOne() {
  let audioWarn = new Audio('audio/warning.mp3');
  audioWarn.play()
}
