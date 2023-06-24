
const startButton = document.querySelector(".animation") // seleziono il bottone


document.addEventListener('scroll', function (e) {
  console.log(window.scrollY)

  if (window.scrollY ===400 ||window.scrollY >400) {
startButton.style.backgroundColor="#1A8917"

  }
else if (window.scrollY<400){
startButton.style.backgroundColor="#191919"
}
})


const nav = document.querySelector("nav")

document.addEventListener('scroll', function (e) {
 

  if (window.scrollY ===400 ||window.scrollY >400) {
nav.style.backgroundColor="white"

  }
else if (window.scrollY<400){
nav.style.backgroundColor="#ffc017"
}
})