//minus and plus button grape bottle
let accordionGrape = document.querySelector('.product-one');
let accordionLemon = document.querySelector('.product-two');
let accordionPine = document.querySelector('.product-three');
let accordionOrange = document.querySelector('.product-four');



accordionGrape.addEventListener('click', function() {
    this.classList.toggle('active')
})


accordionLemon.addEventListener('click', function() {
    this.classList.toggle('active');
})


accordionPine.addEventListener('click', function() {
    this.classList.toggle('active');
})


accordionOrange.addEventListener('click', function() {
    this.classList.toggle('active')
})



