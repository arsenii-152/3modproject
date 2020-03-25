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
let audioWarn = new Audio('audio/warning.mp3');
let audioWarnTwo = new Audio('audio/siren.mp3');


let onePressed = anime ({
  targets: '.fakescreen',
  opacity: 0,
  autoplay: false,
  duration: 1000,
})
buttonOne.onclick = onePressed.play
let el = document.querySelector('.el')
let twoPressed = anime({
  targets: '.el',
  opacity: 1,
  autoplay: false,
  duration: 1000,
  translateX: function(el) {
    return el.getAttribute('data-x');
  },
  translateY: function(el, i) {
    return 50 + (-50 * i);
  },
  scale: function(el, i, l) {
    return (l - i) + .25;
  },
  rotate: function() { return anime.random(-360, 360); },
  duration: function() { return anime.random(1200, 1800); },
  delay: function() { return anime.random(0, 400); },
  direction: 'alternate',
});
buttonTwo.onclick = twoPressed.play
document.querySelector('.lastbtn').addEventListener('click', function() {
  audioWarnTwo.play()
});
