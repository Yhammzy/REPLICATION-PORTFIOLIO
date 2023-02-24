var overlay = document.getElementById("preloader")
let innerCursor = document.querySelector(".inner-cursor");
let outerCursor = document.querySelector(".outer-cursor");

window.addEventListener('load',function(){
    overlay.style.display = 'none';
    // overlay.style.opacity = '0';
})
document.addEventListener("mousemove", moveCursor);

function moveCursor(e) {
    let x = e.clientX;
    let y = e.clientY;
    
    // console.log(x,y)
    innerCursor.style.left = `${x}px`;
    innerCursor.style.top = `${y}px`;
    outerCursor.style.left = `${x}px`;
    outerCursor.style.top = `${y}px`;
}

let links = Array.from(document.querySelectorAll("a"));

console.log(links);

links.forEach((link) => {
    link.addEventListener("mouseover", () => {
        innerCursor.classList.add("grow");
    });
    link.addEventListener("mouseleave", () => {
        innerCursor.classList.remove("grow");
    });
})
const loader = document.querySelector('.body')

// document.addEventListener('DOMContentLoaded', () => {
//     loader.style.display = 'block'
// })

window.addEventListener('load', () => {
    loader.style.display = 'none'
})

var button = document.querySelector('.fa-bars')
var list = document.querySelector('.menu')
var icons = document.querySelector('.hover-i a')
// var icony = document.querySelectorAll('.fa-heart')
var icon = document.querySelector('.fa-share')
//  document.querySelectorAll(".bouncing-title span").forEach(span =>{
//     span.addEventListener("mouseover", function() {
//         this.classList.add("bounce")
//         setTimeout(function() {
//             this.classList.remove("bounce")
//         }.bind(this), 1000)
//     })
// })

var count = 0

icon.addEventListener('click', function() {
    if (count == 0 ) {
        icons.style.display = 'flex'
        count = 1
        return;
    }
    icons.style.display = 'none'
    count = 0
    return
})

const faders = document.querySelectorAll('.fade-in');
const sliders = document.querySelectorAll('.slide-in')


const appearOptions = {
    threshold: 0,
    rootMargin: "0px 0px -60% 0px"

};
const appearOnScroll = new IntersectionObserver
(function(
    entries,
    appearOnScroll
    ) {
        entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        }  else {
            entry.target.classList.add('appear');
            appearOnScroll.unobserve(entry.target);
        }   
        });
    },
    appearOptions);

    faders.forEach(fader => {
        appearOnScroll.observe(fader);
    });

    sliders.forEach(slider => {
        appearOnScroll.observe(slider);
    });

    function openForm() {
        document.getElementById("myForm").style.display = "block";
      }
      
      function closeForm() {
        document.getElementById("myForm").style.display = "none";
      }