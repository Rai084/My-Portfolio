$('.fas1').hide();
$('a.home').on('mouseover', function() {
   $('.fas1').show()

   $('.fas1').css({
      'left': '760px'
   })

   $('.span1').css({
      'left': '5px'
   })

   $('.home').css({
      'opacity': '1'
   })
})

$('a.home').on('mouseout', function() {
   $('.fas1').hide();
   $('.fas1').css({
      'left': '0'
   })
   
   $('.span1').css({
      'left': '0'
   })

   $('.home').css({
      'opacity': '.7'
   })
})


$('a.about').on('mouseover',function() {
   $('.fas1').show()
   $('.fas1').css({
      'left': '910px'
   })
   $('.span2').css({
      'left': '5px'
   })

   $('.about').css({
      'opacity': '1'
   })
})

$('a.about').on('mouseout', function() {
   $('.fas1').hide();
   $('.fas1').css({
      'left': '0'
   })
   $('.span2').css({
      'left': '0'
   })

   $('.about').css({
      'opacity': '.7'
   });
})

$('a.skills').on('mouseover', function() {
   $('.fas1').show()
   $('.fas1').css({
      'left': '1060px'
   })
   $('.span3').css({
      'left': '3px'
   })

   $('a.skills').css({
      'opacity': '1'
   })
})

$('a.skills').on('mouseout', function() {
   $('.fas1').hide()
   $('.fas1').css({
      'left': '0'
   })
   $('.span3').css({
      'left': '0'
   })

   $('a.skills').css({
      'opacity': '.7'
   })
})

$('a.contact').on('mouseover', function() {
   $('.fas1').show()
   $('.fas1').css({
      'left': '1210px'
   })
   $('.span4').css({
      'left': '7px'
   })

   $('a.contact').css({
      'opacity': '1'
   })
})

$('a.contact').on('mouseout', function() {
   $('.fas1').hide()
   $('.fas1').css({
      'left': '0'
   })
   $('.span4').css({
      'left': '0'
   })

   $('a.contact').css({
      'opacity': '.7'
   })
});

$('.kotak, .description').on('mouseover', function() {
   $('.kotak').css({
      'transform': 'rotate(0deg)',
      'borderRadius': '50%',
      'backgroundColor': '#1641ff'
   })
   // $('.kotak').addClass('animateKotak');

   $('.description').css({
      'color': 'white'
   })
})

$('.kotak').on('mouseout', function() {
   $('.kotak').css({
      'transform': 'rotate(45deg)',
      'borderRadius': '4px',
      'border': '4px solid #1641ff',
      'backgroundColor': '#fff'
   })

   $('.description').css({
      'color': ''
   })
})

$('.kotak2, .description2').on('mouseover', function() {
   $('.kotak2').css({
      'transform': 'rotate(0deg)',
      'borderRadius': '50%',
      'backgroundColor': '#1641ff'
   })
   // $('.kotak').addClass('animateKotak');

   $('.description2').css({
      'color': 'white'
   })
})

$('.kotak2').on('mouseout', function() {
   $('.kotak2').css({
      'transform': 'rotate(45deg)',
      'borderRadius': '4px',
      'border': '4px solid #1641ff',
      'backgroundColor': '#fff'
   })

   $('.description2').css({
      'color': ''
   })
})

$('.kotak3, .description3').on('mouseover', function() {
   $('.kotak3').css({
      'transform': 'rotate(0deg)',
      'borderRadius': '50%',
      'backgroundColor': '#1641ff'
   })
   // $('.kotak').addClass('animateKotak');

   $('.description3').css({
      'color': 'white'
   })
})

$('.kotak3').on('mouseout', function() {
   $('.kotak3').css({
      'transform': 'rotate(45deg)',
      'borderRadius': '4px',
      'border': '4px solid #1641ff',
      'backgroundColor': '#fff'
   })

   $('.description3').css({
      'color': ''
   })
})



// $('.hireMe').on('mouseover', function() {
//    $('.fas2').show();
//    $('.fas2').css({
//       'left': '195px'
//    })

//    $('.span5').css({
//       'marginLeft': '11px'
//    })

//    $('hireMe').css({
//       'opacity': '1'
//    })
// })

// $('.hireMe').on('mouseout', function() {
//    $('.fas2').hide();
//    $('.fas2').css({
//       'left': '0px'
//    })

//    $('.span5').css({
//       'marginLeft': '0'
//    })

//    $('hireMe').css({
//       'opacity': '.7'
//    })
// })


const nama = document.querySelector('.nama');
const huruf = [...nama.textContent].map(name => `<span>${name}</span>`).join(' ')
nama.innerHTML = huruf;

