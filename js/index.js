var object = document.querySelector(".seconder")

function secondRotate() {
  object.style.transform = 'rotate(45deg)'
}

function secondRotateTwice() {
  object.style.transform = 'rotate(90deg)'
}

let igniteAnimation = anime({
  targets: '.clickl ',
  translateY: -50,
  rotate: 180,
  duration: 50,
  autoplay: false
})

let igniteBtn = document.querySelector('.clickl')
igniteBtn.onclick = igniteAnimation.play

let screenl = document.querySelector('.screen')

let igniteAnimation1 = anime({
    targets: '.clickr',
    translateY: -50,
    rotate: 180,
    duration: 50,
    autoplay: false
})
document.querySelector('.clickr').addEventListener('click', function() {
  screenl.style.background = "black"
});

let igniteBtn1 = document.querySelector('.clickr')
igniteBtn1.onclick = igniteAnimation1.play

let nextAnimationFirst = anime({
  targets: '.firstpanel',
  opacity: 0,
  autoplay: false
})

let nextOne = document.querySelector('.next')
nextOne.onclick = nextAnimationFirst.play
