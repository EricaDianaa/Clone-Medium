
const startButton = document.querySelector('#rect-start') // seleziono il bottone
const rectElement = document.querySelector('.rect')
startButton.addEventListener('click', function () {
  // devo aggiungere/togliere la classe "rect-animated" dall'elemento!
  rectElement.classList.toggle('rect-animated')
})

// just for fun aggiungiamo un console.log alla fine dell'animazione :)
rectElement.addEventListener('animationend', function (e) {
  console.log('animation ended', e)
})

document.addEventListener('scroll', function (e) {
  console.log(window.scrollY)

  if (window.scrollY > 50) {
    rectElement.classList.add('animated')
  }})











// document.addEventListener('scroll', function (e) {
//     console.log(window.scrollY)
//     if (window.scrollY > 110) {
//       rectElement.classList.add('rect-animated')
//     }
//   })