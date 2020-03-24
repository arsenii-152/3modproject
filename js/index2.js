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
   stroke1.style.fontSize = '18px';
   stroke2.style.fontSize = '9px';
});
let rotateTwoL = anime ({
  targets: '.rotator1',
  rotate: 90,
  autoplay: false,
  duration: 200,
})
roundl3.onclick = rotateTwoL.play
document.querySelector('.roundl3').addEventListener('click', function() {

});
let rotateThreeL = anime ({
  targets: '.rotator1',
  rotate: 135,
  autoplay: false,
  duration: 200,
})
roundl4.onclick = rotateThreeL.play
document.querySelector('.roundl4').addEventListener('click', function() {

});
let rotateFourL = anime ({
  targets: '.rotator1',
  rotate: 180,
  autoplay: false,
  duration: 200,
})
roundl5.onclick = rotateFourL.play
document.querySelector('.roundl5').addEventListener('click', function() {

});
let rotateFiveL = anime ({
  targets: '.rotator1',
  rotate: 225,
  autoplay: false,
  duration: 200,
})
roundl6.onclick = rotateFiveL.play
document.querySelector('.roundl6').addEventListener('click', function() {

});
let rotateSixL = anime ({
  targets: '.rotator1',
  rotate: 270,
  autoplay: false,
  duration: 200,
})
roundl7.onclick = rotateSixL.play
document.querySelector('.roundl7').addEventListener('click', function() {

});
let rotateSevenL = anime ({
  targets: '.rotator1',
  rotate: 315,
  autoplay: false,
  duration: 200,
})
roundl8.onclick = rotateSevenL.play
document.querySelector('.roundl').addEventListener('click', function() {

});




let rotateOneR = anime ({
  targets: '.rotator2',
  rotate: 45,
  autoplay: false,
  duration: 200,
})
roundr2.onclick = rotateOneR.play
document.querySelector('.roundr1').addEventListener('click', function() {

});
let rotateTwoR = anime ({
  targets: '.rotator2',
  rotate: 90,
  autoplay: false,
  duration: 200,
})
roundr3.onclick = rotateTwoR.play
document.querySelector('.roundl1').addEventListener('click', function() {

});
let rotateThreeR = anime ({
  targets: '.rotator2',
  rotate: 135,
  autoplay: false,
  duration: 200,
})
roundr4.onclick = rotateThreeR.play
document.querySelector('.roundl1').addEventListener('click', function() {

});
let rotateFourR = anime ({
  targets: '.rotator2',
  rotate: 180,
  autoplay: false,
  duration: 200,
})
roundr5.onclick = rotateFourR.play
document.querySelector('.roundl1').addEventListener('click', function() {

});
let rotateFiveR = anime ({
  targets: '.rotator2',
  rotate: 225,
  autoplay: false,
  duration: 200,
})
roundr6.onclick = rotateFiveR.play
document.querySelector('.roundl1').addEventListener('click', function() {

});
let rotateSixR = anime ({
  targets: '.rotator2',
  rotate: 270,
  autoplay: false,
  duration: 200,
})
roundr7.onclick = rotateSixR.play
document.querySelector('.roundl1').addEventListener('click', function() {

});
let rotateSevenR = anime ({
  targets: '.rotator2',
  rotate: 315,
  autoplay: false,
  duration: 200,
})
roundr8.onclick = rotateSevenR.play
document.querySelector('.roundl1').addEventListener('click', function() {

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
