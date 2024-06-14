// Meue js
let ClikToShow = document.getElementById("menu");
let MobileMenu = document.getElementsByClassName("mob-menu")[0];
let Webapp = document.getElementsByClassName("webapp")[0];
let Cross = document.getElementById("cross");
console.log(MobileMenu);

ClikToShow.addEventListener("click", function () {
  console.log("iam cliked");
  MobileMenu.style.display = "block";
  Webapp.style.display = "none";
});

Cross.addEventListener("click", function () {
  MobileMenu.style.display = "none";
  Webapp.style.display = "block";
});

// making a tab section for portfoli 

function openCity(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}








// Create a smooth scroller 
document.addEventListener('DOMContentLoaded', () => {
  gsap.registerPlugin(ScrollTrigger);


  // Example ScrollTrigger animation
  gsap.to('.banner', {
      scrollTrigger: {
          trigger: '.container-full',
          start: 'top center',
          end: 'bottom center',
          scrub: true
      },
      scale: 0.8,
      opacity: 0
  });
});


// gsap.registerPlugin(ScrollTrigger);
// let tl = gsap.timeline()
// tl.from(["#text-1"],{xPercent: -100, y: 500} )
// .from(["#text-2"],{xPercent: 100, y: 500}, 0 )

//  ScrollTrigger.create({
//     trigger: ".wrapper",
//     start: "top 30%",
//     end: "90% 30%",
//     scrub: 1,
//     pin: true,
//   //  markers: true,
//     animation: tl.play()
//   })