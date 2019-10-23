// ###################################

//  // PARALLAX SCOLL EFFECT
//
// ###################################
//
// // create scroll event listener
// window.addEventListener('scroll', function(e) {
//
//   // target the classname scroll in the HTML file
//   const targetOne = document.querySelector('.scroll');
//
//   // make the names and give them rules
//   var scrolled  = window.pageYOffset;
//   var rate = scrolled * -1;
//
//   // call rate variable in here
//   targetOne.style.transform = 'translate3d(0px, '+ rate +'px, 0px)';
//
// });


// ###################################

// DIAGONAL SCROLL EFFECT

// ###################################


// create scroll event listener
window.addEventListener('scroll', function(e) {

  // target the classname scroll in the HTML file
  const target = document.querySelectorAll('.scroll');

  var index = 0, length = target.length;
  for(index; index < length; index++) {
    var pos = window.pageYOffset * target[index].dataset.rate;

    if (target[index].dataset.direction === 'vertical') {
      target[index].style.transform = 'translate3d(0px, '+ pos +'px, 0px)';
    } else {
      var posX = window.pageYOffset * target[index].dataset.ratex;
      var posY = window.pageyOffset * target[index].dataset.ratey;

      target[index].style.transform = 'translate3d('+ posX +'px,'+ posY +'px, 0px)';
    }
  }
});






//
