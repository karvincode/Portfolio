window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    document.getElementById("navbar").style.top = "-120px";
  } else {
    document.getElementById("navbar").style.top = "0px";
  }
}
console.log("This is connected")

document.querySelector('#SkillsBtn').addEventListener('click', function () {
  document.querySelector('#Skills').scrollIntoView({ block: 'end', behavior: 'smooth' });
})

document.querySelector('#ProjectsBtn').addEventListener('click', function () {
  document.querySelector('#Projects').scrollIntoView({ block: 'end', behavior: 'smooth' });
})

document.querySelector('#AboutBtn').addEventListener('click', function () {
  document.querySelector('#About').scrollIntoView({ block: 'end', behavior: 'smooth' });
})

document.querySelector('#ContactBtn').addEventListener('click', function () {
  document.querySelector('#Contact').scrollIntoView({ block: 'end', behavior: 'smooth' });
})


const cards = document.querySelectorAll(".card");

function flipCard() {
  console.log("flip")
  this.classList.toggle("flip");
}
cards.forEach((card) => card.addEventListener("click", flipCard));