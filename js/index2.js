let body = document.querySelector('.body')
let roundl1 = document.querySelector('.roundl1')
let roundl2 = document.querySelector('.roundl2')
let roundl3 = document.querySelector('.roundl3')
let roundl4 = document.querySelector('.roundl4')
let roundl5 = document.querySelector('.roundl5')
let roundl6 = document.querySelector('.roundl6')
let roundl7 = document.querySelector('.roundl7')
let roundl8 = document.querySelector('.roundl8')
let roundr1 = document.querySelector('.roundr1')
let roundr2 = document.querySelector('.roundr2')
let roundr3 = document.querySelector('.roundr3')
let roundr4 = document.querySelector('.roundr4')
let roundr5 = document.querySelector('.roundr5')
let roundr6 = document.querySelector('.roundr6')
let roundr7 = document.querySelector('.roundr7')
let roundr8 = document.querySelector('.roundr8')
let stroke1 = document.querySelector('.stroke1')
let stroke2 = document.querySelector('.stroke2')
let rotateOneL = anime ({
  targets: '.rotator1',
  rotate: 45,
  autoplay: false,
  duration: 200,
})
roundl2.onclick = rotateOneL.play
document.querySelector('.roundl2').addEventListener('click', function() {
   stroke1.style.fontSize = '24px';
   stroke2.style.fontSize = '12px';
   stroke1.style.margin = '53px 132px'
   stroke2.style.margin = '53px 132px'
});
let rotateTwoL = anime ({
  targets: '.rotator1',
  rotate: 90,
  autoplay: false,
  duration: 200,
})
roundl3.onclick = rotateTwoL.play
document.querySelector('.roundl3').addEventListener('click', function() {
  stroke1.style.fontSize = '30px';
  stroke2.style.fontSize = '15px';
  stroke1.style.margin = '56px 98px'
  stroke2.style.margin = '50px 103px'
});
let rotateThreeL = anime ({
  targets: '.rotator1',
  rotate: 135,
  autoplay: false,
  duration: 200,
})
roundl4.onclick = rotateThreeL.play
document.querySelector('.roundl4').addEventListener('click', function() {
  stroke1.style.fontSize = '36px';
  stroke2.style.fontSize = '18px';
  stroke1.style.margin = '53px 85px'
  stroke2.style.margin = '47px 94px'
});
let rotateFourL = anime ({
  targets: '.rotator1',
  rotate: 180,
  autoplay: false,
  duration: 200,
})
roundl5.onclick = rotateFourL.play
document.querySelector('.roundl5').addEventListener('click', function() {
  stroke1.style.fontSize = '42px';
  stroke2.style.fontSize = '21px';
  stroke1.style.margin = '53px 79px'
  stroke2.style.margin = '44px 97px'
});
let rotateFiveL = anime ({
  targets: '.rotator1',
  rotate: 225,
  autoplay: false,
  duration: 200,
})
roundl6.onclick = rotateFiveL.play
document.querySelector('.roundl6').addEventListener('click', function() {
  stroke1.style.fontSize = '48px';
  stroke2.style.fontSize = '24px';
  stroke1.style.margin = '53px 43px'
  stroke2.style.margin = '34px 59px'
});
let rotateSixL = anime ({
  targets: '.rotator1',
  rotate: 270,
  autoplay: false,
  duration: 200,
})
roundl7.onclick = rotateSixL.play
document.querySelector('.roundl7').addEventListener('click', function() {
  stroke1.style.fontSize = '54px';
  stroke2.style.fontSize = '27px'
  stroke1.style.margin = '53px 11px'
  stroke2.style.margin = '25px 27px'
  ;
});
let rotateSevenL = anime ({
  targets: '.rotator1',
  rotate: 315,
  autoplay: false,
  duration: 200,
})
roundl8.onclick = rotateSevenL.play
document.querySelector('.roundl8').addEventListener('click', function() {
  stroke1.style.fontSize = '59px';
  stroke2.style.fontSize = '33px'
  stroke2.style.margin = '25px -7px'
  stroke1.style.textShadow = 'white 0px 0px 10px'
});






let rotateOneR = anime ({
  targets: '.rotator2',
  rotate: 45,
  autoplay: false,
  duration: 200,
})
roundr2.onclick = rotateOneR.play
document.querySelector('.roundr2').addEventListener('click', function() {
   stroke1.innerHTML = 'Свет в окне может стать лучом надежды...'
   stroke2.style.opacity = 0
   stroke1.style.width = '800px'
   stroke1.style.transform = 'translateX(-126px)'
});
let rotateTwoR = anime ({
  targets: '.rotator2',
  rotate: 90,
  autoplay: false,
  duration: 200,
})
roundr3.onclick = rotateTwoR.play
document.querySelector('.roundr3').addEventListener('click', function() {
  stroke1.innerHTML = 'Не бойся теней, они означают, что рядом горит свет'
  stroke2.style.opacity = 0
  stroke1.style.width = '800px'
  stroke1.style.transform = 'translateX(-126px)'
});
let rotateThreeR = anime ({
  targets: '.rotator2',
  rotate: 135,
  autoplay: false,
  duration: 200,
})
roundr4.onclick = rotateThreeR.play
document.querySelector('.roundr4').addEventListener('click', function() {
  stroke1.innerHTML = 'Не жалуйся на тьму. Стань сам маленьким источником света'
  stroke2.style.opacity = 0
  stroke1.style.width = '800px'
  stroke1.style.transform = 'translateX(-126px)'
});
let rotateFourR = anime ({
  targets: '.rotator2',
  rotate: 180,
  autoplay: false,
  duration: 200,
})
roundr5.onclick = rotateFourR.play
document.querySelector('.roundr5').addEventListener('click', function() {
  stroke1.innerHTML = 'Свет превыше всякой цены.'
  stroke2.style.opacity = 0
  stroke1.style.width = '800px'
  stroke1.style.transform = 'translateX(-126px)'
});
let rotateFiveR = anime ({
  targets: '.rotator2',
  rotate: 225,
  autoplay: false,
  duration: 200,
})
roundr6.onclick = rotateFiveR.play
document.querySelector('.roundr6').addEventListener('click', function() {
  stroke1.innerHTML = 'Даруй свет, и тьма исчезнет сама собой.'
  stroke2.style.opacity = 0
  stroke1.style.width = '800px'
  stroke1.style.transform = 'translateX(-126px)'
});
let rotateSixR = anime ({
  targets: '.rotator2',
  rotate: 270,
  autoplay: false,
  duration: 200,
})
roundr7.onclick = rotateSixR.play
document.querySelector('.roundr7').addEventListener('click', function() {
  stroke1.innerHTML = 'Грех не в темноте, а в нежелании света'
  stroke2.style.opacity = 0
  stroke1.style.width = '800px'
  stroke1.style.transform = 'translateX(-126px)'
});
let rotateSevenR = anime ({
  targets: '.rotator2',
  rotate: 315,
  autoplay: false,
  duration: 200,
})
roundr8.onclick = rotateSevenR.play
document.querySelector('.roundr8').addEventListener('click', function() {
  stroke1.innerHTML = 'Да будет свет, когда душа во мраке!'
  stroke2.style.opacity = 0
  stroke1.style.width = '800px'
  stroke1.style.transform = 'translateX(-126px)'
});
$( function() {
  function hexFromRGB(r, g, b) {
    var hex = [
      r.toString( 16 ),
      g.toString( 16 ),
      b.toString( 16 )
    ];
    $.each( hex, function( nr, val ) {
      if ( val.length === 1 ) {
        hex[ nr ] = "0" + val;
      }
    });
    return hex.join( "" ).toUpperCase();
  }
  function refreshSwatch() {
    var red = $( "#red" ).slider( "value" ),
      green = $( "#green" ).slider( "value" ),
      blue = $( "#blue" ).slider( "value" ),
      hex = hexFromRGB( red, green, blue );
    $( "#swatch" ).css( "color", "#" + hex );
  }

  $( "#red, #green, #blue" ).slider({
    orientation: "horizontal",
    range: "min",
    max: 255,
    value: 127,
    slide: refreshSwatch,
    change: refreshSwatch
  });
  $( "#red" ).slider( "value", 255 );
  $( "#green" ).slider( "value", 140 );
  $( "#blue" ).slider( "value", 60 );
} );
