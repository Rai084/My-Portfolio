function myFunction (x) {
   const body = document.querySelector('body');
   x.classList.toggle("change");
   body.classList.toggle('active')
}


const tl = gsap.timeline({default: {duration: 1}});
   tl
   .from('.myFoto', 5, {x: -1000, opacity: 0, ease: "elastic.out(1, 0.3)"})
   .from('.bulat', 5, {x: 1000, opacity: 0, ease: "elastic.out(1, 0.3)"}, '-=5.5')
   .from('.anim1', 1, {y: -20, opacity: 0, stagger: .4, scaleY: -1},'-=2.5')
   .from('.anim2', {y: 20, opacity: 0, stagger: .4, scaleX: -1}, '-=3')
   .from('.nama', {y: 20, opacity: 0}, '-=2.5')
   .from('.navbar-nav a', {opacity: 0, x: 20, stagger: .4, scaleY: -1}, '-=2')
   .from('.borderRight', {opacity: 0, width: 0, height: 0, duration: 1.2}, '-=4')


