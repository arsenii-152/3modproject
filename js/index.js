let lampFirst = document.querySelector('.tmlightu1')
let lampSecond = document.querySelector('.tmlightu2')


let igniteAnimation = anime({
  targets: '.clickl ',
  translateY: -50,
  rotate: 180,
  duration: 50,
  autoplay: false
})

let igniteBtn = document.querySelector('.clickl')
igniteBtn.onclick = igniteAnimation.play
document.querySelector('.clickl').addEventListener('click', function() {
    lampFirst.style.background = "#24FF00"
});


let screenl = document.querySelector('.screen')
let danger = document.querySelector('.danger')
let text = document.querySelector('.text')
let igniteAnimation1 = anime({
    targets: '.clickr',
    translateY: -50,
    rotate: 180,
    duration: 50,
    autoplay: false
})
document.querySelector('.clickr').addEventListener('click', function() {
  screenl.style.background = "black"
  text.style.opacity = 1
  danger.style.background = "radial-gradient(50% 50% at 50% 50%, #05FF00 0%, #68BC66 100%)"
  lampSecond.style.background = "#24FF00"
});

let igniteBtn1 = document.querySelector('.clickr')
igniteBtn1.onclick = igniteAnimation1.play

let body = document.querySelector('.body')
let off = document.querySelector('.off')
let turnOff = anime({
    targets: '.seconder',
    rotate: 1,
    duration: 200,
    autoplay: false
})
off.onclick = turnOff.play
document.querySelector('.off').addEventListener('click', function() {
  body.style.background = `black`
});
let becomeStable = anime({
    targets: '.seconder',
    rotate: 45,
    duration: 200,
    autoplay: false
})
document.querySelector('.stable').addEventListener('click', function() {
  body.style.background = `rgb(${anime.random(0,255)},${anime.random(0,255)},${anime.random(0,255)})`
});


let stable = document.querySelector('.stable')
stable.onclick = becomeStable.play
let becomeDynamic = anime({
    targets: '.seconder',
    rotate: 90,
    duration: 200,
    autoplay: false
})

document.querySelector('.dynamic').addEventListener('click', function() {
  body.style.background = "linear-gradient(90deg, #6A3093 5.44%, #A044FF 100%)"
});
let dynamic = document.querySelector('.dynamic')
dynamic.onclick = becomeDynamic.play


let thirdOne = document.querySelector('.thirdup1')
let thirdTwo = document.querySelector('.thirdup2')
let thirdThree = document.querySelector('.thirdup3')
let thirdFour = document.querySelector('.thirdup4')

let changeScreen = anime({
    targets: '.screen',
    autoplay: false,
    background: '#E9E9E9',
})
thirdOne.onclick = changeScreen.play
let changeScreenOne = anime({
    targets: '.screen',
    autoplay: false,

})
thirdTwo.onclick = changeScreenOne.play
document.querySelector('.thirdup2').addEventListener('click', function() {
  screenl.style.background = `rgb(${anime.random(0,255)},${anime.random(0,255)},${anime.random(0,255)})`
});
