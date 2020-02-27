function myFunction (x) {
   const body = document.querySelector('body');
   x.classList.toggle("change");
   body.classList.toggle('active')
}

const tl = gsap.timeline({default: {duration: 1}});
   tl
   .to('.kotak1', {opacity: 0, y: -100, duration: 1})
   .to('.kotak2', {opacity: 0, y: 100, duration: 1}, '-=.5')
   .to('.kotak3', {opacity: 0, y: -100, duration: 1}, '-=.5')
   .to('.kotak4', {opacity: 0, y: 100, duration: 1}, '-=.5')
   .to('.kotak5', {opacity: 0, y: -100, duration: 1}, '-=.5')
   .to('.loader-wrapper', {opacity: 1, x: -1500, duration: 3})
   .to('nav', {y: 0, opacity: 1, duration: 1.2}, '-=2.5')
   .from('.myFoto', {x: -1000, opacity: 0,duration: 4, ease: "elastic.out(1, 0.3)"})
   .from('.bulat', {opacity: 0, x: 1000, duration: 4, ease: "elastic.out(1, 0.3)"}, '-=3')
   .from('.borderRight', {opacity: 0, width: 0, height: 0, duration: 2}, '-=4')
   .from('.anim2', {y: 20, opacity: 0, stagger: .4, scaleX: -1, duration: 1}, '-=3')
   .from('.anim1', {y: -20, opacity: 0, stagger: .4, scaleY: -1, duration: 1}, '-=.5')
   .from('.nama', {y: 20, opacity: 0}, '-=2.5')
   .from('.navbar-nav a', {opacity: 0, x: 20, stagger: .4, scaleY: -1}, '-=2')
   .from('button', {x: 20, opacity: 0}, '-=2.5')

$('.kotak6, .description').on('mouseover', function() {
   $('.kotak6').css({
      'transform': 'rotate(0deg)',
      'borderRadius': '50%',
      'backgroundColor': '#1641ff'
   })
   // $('.kotak').addClass('animateKotak');

   $('.description').css({
      'color': 'white'
   })
})

$('.kotak6').on('mouseout', function() {
   $('.kotak6').css({
      'transform': 'rotate(45deg)',
      'borderRadius': '4px',
      'border': '4px solid #1641ff',
      'backgroundColor': '#fff'
   })

   $('.description').css({
      'color': ''
   })
})

$('.kotak7, .description2').on('mouseover', function() {
   $('.kotak7').css({
      'transform': 'rotate(0deg)',
      'borderRadius': '50%',
      'backgroundColor': '#1641ff'
   })
   $('.kotak').addClass('animateKotak');

   $('.description2').css({
      'color': 'white'
   })
})

$('.kotak7').on('mouseout', function() {
   $('.kotak7').css({
      'transform': 'rotate(45deg)',
      'borderRadius': '4px',
      'border': '4px solid #1641ff',
      'backgroundColor': '#fff'
   })

   $('.description2').css({
      'color': ''
   })
})

$('.kotak8, .description3').on('mouseover', function() {
   $('.kotak8').css({
      'transform': 'rotate(0deg)',
      'borderRadius': '50%',
      'backgroundColor': '#1641ff'
   })
   $('.kotak').addClass('animateKotak');

   $('.description3').css({
      'color': 'white'
   })
})

$('.kotak8').on('mouseout', function() {
   $('.kotak8').css({
      'transform': 'rotate(45deg)',
      'borderRadius': '4px',
      'border': '4px solid #1641ff',
      'backgroundColor': '#fff'
   })

   $('.description3').css({
      'color': ''
   })
})
