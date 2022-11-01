

let base = [
    {id: 1,  img: './img/image 1.png', title: 'ppp'},
]



let row = document.querySelector('.row')

base.forEach((item) =>{
    row.innerHTML += '<div class="card" id="${item.id}"><img class="card__img" src="./image 1.png" alt="$item.subtitle"><h2 class="card__title">Syltherine</h2><h3 class="syl">Stylish cafe chair</h3> <h2 class="rr">Rp 2.500.000<h2> </div>',
    row.innerHTML += '<div class="card" id="${item.id}"><img class="card__img" src="./image 2.png" alt="$item.subtitle"><h2 class="card__title">Leviosa</h2><h3 class="syl">Stylish cafe chair</h3> <h2 class="rr">Rp 2.500.000<h2></div>',
    row.innerHTML += '<div class="card" id="${item.id}"><img class="card__img" src="./image 3.png" alt="$item.subtitle"><h2 class="card__title">Lolito</h2><h3 class="syl">Luxury big sofa</h3> <h2 class="rr">Rp 7.000.000<h2></div>',
    row.innerHTML += '<div class="card" id="${item.id}"><img class="card__img" src="./image 4.png" alt="$item.subtitle"><h2 class="card__title">Respira</h2><h3 class="syl">Minimalist fan</h3><h2 class="rr">Rp 500.000<h2> </div>',
    row.innerHTML += '<div class="card" id="${item.id}"><img class="card__img" src="./image 9.png" alt="$item.subtitle"><h2 class="card__title">Grifo</h2><h3 class="syl">Night lamp</h3>  <h2 class="rr">Rp 1.500.000<h2> </div>',
    row.innerHTML += '<div class="card" id="${item.id}"><img class="card__img" src="./image 6.png" alt="$item.subtitle"><h2 class="card__title">Muggo</h2><h3 class="syl">Small mug</h3>   <h2 class="rr">Rp 150.000<h2> </div>',
    row.innerHTML += '<div class="card" id="${item.id}"><img class="card__img" src="./image 7.png" alt="$item.subtitle"><h2 class="card__title">Pingky</h2><h3 class="syl">Cute bed set</h3>   <h2 class="rr">Rp 7.000.000<h2> </div>',
    row.innerHTML += '<div class="card" id="${item.id}"><img class="card__img" src="./image 8.png" alt="$item.subtitle"><h2 class="card__title">Potty</h2><h3 class="syl">Minimalist flower pot</h3>   <h2 class="rr">Rp 2.500.000<h2> </div>'
    
})
const butn = document.querySelector(".a")
butn.addEventListener('click', () => {
    const div = document.getElementById('1')
    if (div) {
        div.remove()
    }
})
const kul = document.querySelector(".b")
kul.addEventListener('click', () => {
    const div = document.getElementById('2')
    if (div) {
        div.remove()
    }
})
const lop = document.querySelector(".c")
lop.addEventListener('click', () => {
    const div = document.getElementById('3')
    if (div) {
        div.remove()
    }
})
const pub = document.querySelector(".d")
pub.addEventListener('click', () => {
    const div = document.getElementById('4')
    if (div) {
        div.remove()
    }
})
const ili = document.querySelector(".e")
ili.addEventListener('click', () => {
    const div = document.getElementById('5')
    if (div) {
        div.remove()
    }
})
const fot = document.querySelector(".f")
fot.addEventListener('click', () => {
    const div = document.getElementById('6')
    if (div) {
        div.remove()
    }
})
const cert = document.querySelector(".j")
cert.addEventListener('click', () => {
    const div = document.getElementById('7')
    if (div) {
        div.remove()
    }
})
const job = document.querySelector(".k")
job.addEventListener('click', () => {
    const div = document.getElementById('8')
    if (div) {
        div.remove()
    }
})