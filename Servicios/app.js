let nextButton = document.querySelector('.next');
let plusButton = document.querySelector('.plus')
let minusButton = document.querySelector('.minus')
let plusButtonLem = document.querySelector('.plus-lemon');
let minusButtonLem = document.querySelector('.minus-lemon');
let plusButtonGra = document.querySelector('.plus-grape');
let minusButtonGra = document.querySelector('.minus-grape');

let slider = document.querySelector('.bottle-slider')
let sliderImage = document.querySelectorAll('.bottle-slider img');
let sliderPara = document.querySelectorAll('.par-slider p')
let sliderSlo = document.querySelectorAll('.slogan-slider h1')
let sliderObj = document.querySelectorAll('.obj-slider h6')







// display products

let ingredientFirst = document.querySelector('.ingredient-one');
let ingredientSecond = document.querySelector('.ingredient-two');
let bottleDisOrange = document.querySelector('.bottle-orange');
let lemonLine = document.querySelector('.lemon-line-one')
let lemonInfo = document.querySelector('.lemon-info')
let ingredientLemonFirst = document.querySelector('.ingredient-one-lemon')
let ingredientLemonTwo = document.querySelector('.ingredient-two-lemon')
let ingredientLemonThree = document.querySelector('.ingredient-three-lemon')
let bottleDisLemon = document.querySelector('.bottle-lemon');
let displayPro = document.querySelector('.display-products')
let grapeLine = document.querySelector('.grape-line-one');
let grapeInfo = document.querySelector('.grape-info');
let ingredientGrapeFirst = document.querySelector('.ingredient-one-grape');
let ingredientGrapeTwo = document.querySelector('.ingredient-two-grape');
let ingredientGrapeThree = document.querySelector('.ingredient-three-grape');
let bottleDisGrape = document.querySelector('.bottle-grape');



let indexOf;
let indexOfActive = 0;

nextButton.addEventListener('click', function() {
    for(let i = 0; i < sliderImage.length; i++) {
        if(sliderImage[i].classList.contains('active')) {
            indexOf = i;
        }
    }

    if(sliderImage[indexOf].classList.contains('active')) {
        sliderImage[indexOf].classList.remove('active');
        indexOfActive++;
        //console.log(indexOfActive)
        if(indexOfActive >= sliderImage.length) {
            indexOfActive = 0;
        }
        //console.log(indexOfActive)
        sliderImage[indexOfActive].classList.add('active');

    }
    //console.log(sliderImage[indexOfActive])
})

let indexOfPara;
let indexOfActivePar = 0;


nextButton.addEventListener('click', function() {
    for(let i = 0; i < sliderPara.length; i++) {
        if(sliderPara[i].classList.contains('active')) {
            indexOfPara = i;
        }
    }

    if(sliderPara[indexOfPara].classList.contains('active')) {
        sliderPara[indexOfPara].classList.remove('active');
        indexOfActivePar++;
        console.log(indexOfActivePar)
        if(indexOfActivePar >= sliderPara.length) {
            indexOfActivePar = 0;
        }
        console.log(indexOfActivePar)
        sliderPara[indexOfActivePar].classList.add('active');

    }
    console.log(sliderPara[indexOfActivePar])
})


let indexOfSlide;
let indexOfActiveSlider = 0;


nextButton.addEventListener('click', function() {
    for(let i = 0; i < sliderSlo.length; i++) {
        if(sliderSlo[i].classList.contains('active')) {
            indexOfSlide = i;
        }
    }

    if(sliderSlo[indexOfSlide].classList.contains('active')) {
        sliderSlo[indexOfSlide].classList.remove('active');
        indexOfActiveSlider++;
        console.log(indexOfActiveSlider)
        if(indexOfActiveSlider >= sliderSlo.length) {
            indexOfActiveSlider = 0;
        }
        console.log(indexOfActiveSlider)
        sliderSlo[indexOfActiveSlider].classList.add('active');

    }
    console.log(sliderSlo[indexOfActiveSlider])
})


let indexOfObj;
let indexOfActiveObj = 0;


nextButton.addEventListener('click', function() {
    for(let i = 0; i < sliderObj.length; i++) {
        if(sliderObj[i].classList.contains('active')) {
            indexOfObj = i;
        }
    }

    if(sliderObj[indexOfObj].classList.contains('active')) {
        sliderObj[indexOfObj].classList.remove('active');
        indexOfActiveObj++;
        console.log(indexOfActiveObj)
        if(indexOfActiveObj >= sliderObj.length) {
            indexOfActiveObj = 0;
        }
        console.log(indexOfActiveObj)
        sliderObj[indexOfActiveObj].classList.add('active');

    }
    console.log(sliderObj[indexOfActiveObj])
})


/* Burger Menu

plusButton.addEventListener('click', function() {
    ingredientFirst.style.display = 'block'
    ingredientSecond.style.display = 'block'
    bottleDisOrange.style.display = 'block'
    plusButton.style.display = 'none';
    minusButton.style.display = 'block';
    lemonLine.style['grid-area'] = '20 / 3 / 20 / 11';
    lemonInfo.style['grid-area'] = '21 / 3 / 22 / 11';
    ingredientLemonFirst.style['grid-area'] = '24 / 3 / 28 / 5';
    ingredientLemonTwo.style['grid-area'] = '24 / 8 / 28 / 10';
    ingredientLemonThree.style['grid-area'] = '32 / 9 / 36 / 11';
    bottleDisLemon.style['grid-area'] = '22 / 5 / 35 / 9';
    displayPro.style['grid-template'] = 'repeat(55, 1fr) / repeat(12, 1fr)';
    if(plusButton.style.display === 'none') {
        grapeLine.style['grid-area'] = '23 / 3 / 23 / 11';
        grapeInfo.style['grid-area'] = '24 / 3 / 25 / 11';
    } 
    if(plusButton.style.display === 'none' && plusButtonLem.style.display === 'none') {
        grapeLine.style['grid-area'] = '36 / 3 / 36 / 11';
        grapeInfo.style['grid-area'] = '37 / 3 / 38 / 11';
    }
    if(minusButtonGra.style.display === 'block' &&  minusButton.style.display === 'block') {
        ingredientGrapeFirst.style['grid-area'] = '29 / 3 / 33 / 5';
        ingredientGrapeTwo.style['grid-area'] = '27 / 8 / 31 / 10';
        ingredientGrapeThree.style['grid-area'] = '36 / 9 / 40 / 11';
        bottleDisGrape.style['grid-area'] = '26 / 5 / 39 / 9';
    }
    if(minusButtonGra.style.display === 'block' && minusButtonLem.style.display === 'block' && minusButton.style.display === 'block') {
        ingredientGrapeFirst.style['grid-area'] = '40 / 3 / 44 / 5';
        ingredientGrapeTwo.style['grid-area'] = ' 39 / 8 / 43 / 10';
        ingredientGrapeThree.style['grid-area'] = '48 / 9 / 52 / 11';
        bottleDisGrape.style['grid-area'] = '38 / 5 / 51 / 9';
    }
    if(minusButtonGra.style.display === 'block' &&  minusButton.style.display === 'block' && plusButtonLem.style.display === 'block') {
        ingredientGrapeFirst.style['grid-area'] = '29 / 3 / 33 / 5';
        ingredientGrapeTwo.style['grid-area'] = '27 / 8 / 31 / 10';
        ingredientGrapeThree.style['grid-area'] = '36 / 9 / 40 / 11';
        bottleDisGrape.style['grid-area'] = '26 / 5 / 39 / 9';
    }

    //console.log(lemonLine)
})


minusButton.addEventListener('click', function() {
    ingredientFirst.style.display = 'none'
    ingredientSecond.style.display = 'none'
    bottleDisOrange.style.display = 'none'
    plusButton.style.display = 'block';
    minusButton.style.display = 'none';
    lemonLine.style['grid-area'] = '6 / 3 / 6 / 11';
    lemonInfo.style['grid-area'] = '7 / 3 / 8 / 11';
    ingredientLemonFirst.style['grid-area'] = '12 / 3 / 16 / 5';
    ingredientLemonTwo.style['grid-area'] = '10 / 8 / 14 / 10';
    ingredientLemonThree.style['grid-area'] = '19 / 9 / 23 / 11';
    bottleDisLemon.style['grid-area'] = '9 / 5 / 22 / 9';
    displayPro.style['grid-template'] = 'repeat(35, 1fr) / repeat(12, 1fr)';
    if(minusButton.style.display === 'none') {
        grapeLine.style['grid-area'] = '9 / 3 / 9 / 11';
        grapeInfo.style['grid-area'] = '10 / 3 / 11 / 11';
    }
    if(minusButtonLem.style.display === 'none' && minusButton.style.display === 'block') {
        grapeLine.style['grid-area'] = '23 / 3 / 23 / 11';
        grapeInfo.style['grid-area'] = '24 / 3 / 25 / 11'; 
    }
    if(minusButtonLem.style.display === 'block' && plusButton.style.display === 'block') {
        grapeLine.style['grid-area'] = '23 / 3 / 23 / 11';
        grapeInfo.style['grid-area'] = '24 / 3 / 25 / 11';
    }



})

plusButtonLem.addEventListener('click', function() {
    ingredientLemonFirst.style.display = 'block';
    ingredientLemonTwo.style.display = 'block';
    ingredientLemonThree.style.display = 'block';
    bottleDisLemon.style.display = 'block';
    plusButtonLem.style.display = 'none';
    minusButtonLem.style.display = 'block';
    displayPro.style['grid-template'] = 'repeat(60, 1fr) / repeat(12, 1fr)';
    if(plusButtonLem.style.display === 'none') {
        grapeLine.style['grid-area'] = '23 / 3 / 23 / 11';
        grapeInfo.style['grid-area'] = '24 / 3 / 25 / 11';
    } if(plusButton.style.display === 'none' && plusButtonLem.style.display === 'none') {
        grapeLine.style['grid-area'] = '36 / 3 / 36 / 11';
        grapeInfo.style['grid-area'] = '37 / 3 / 38 / 11';
    }
    if(plusButtonLem.style.display === 'none') {
        ingredientGrapeFirst.style['grid-area'] = '17 / 3 / 20 / 5';
        ingredientGrapeTwo.style['grid-area'] = '11 / 8 / 15 / 10';
        ingredientGrapeThree.style['grid-area'] = '22 / 9 / 26 / 11';
        bottleDisGrape.style['grid-area'] = '12 / 5 / 25 / 9';
    }

    if(minusButtonGra.style.display === 'block' && minusButtonLem.style.display === 'block') {
        ingredientGrapeFirst.style['grid-area'] = '29 / 3 / 33 / 5';
        ingredientGrapeTwo.style['grid-area'] = '27 / 8 / 31 / 10';
        ingredientGrapeThree.style['grid-area'] = '36 / 9 / 40 / 11';
        bottleDisGrape.style['grid-area'] = '26 / 5 / 39 / 9';
    }
    if(minusButtonGra.style.display === 'block' && minusButtonLem.style.display === 'block' && minusButton.style.display === 'block') {
        ingredientGrapeFirst.style['grid-area'] = '40 / 3 / 44 / 5';
        ingredientGrapeTwo.style['grid-area'] = ' 39 / 8 / 43 / 10';
        ingredientGrapeThree.style['grid-area'] = '48 / 9 / 52 / 11';
        bottleDisGrape.style['grid-area'] = '38 / 5 / 51 / 9';
    }


})

minusButtonLem.addEventListener('click', function() {
    ingredientLemonFirst.style.display = 'none';
    ingredientLemonTwo.style.display = 'none';
    ingredientLemonThree.style.display = 'none';
    bottleDisLemon.style.display = 'none';
    plusButtonLem.style.display = 'block';
    minusButtonLem.style.display = 'none';
    displayPro.style['grid-template'] = 'repeat(55, 1fr) / repeat(12, 1fr)';
    if(minusButtonLem.style.display === 'none') {
        grapeLine.style['grid-area'] = '9 / 3 / 9 / 11';
        grapeInfo.style['grid-area'] = '10 / 3 / 11 / 11';
    }
    if(minusButtonLem.style.display === 'none' && minusButton.style.display === 'block') {
        grapeLine.style['grid-area'] = '23 / 3 / 23 / 11';
        grapeInfo.style['grid-area'] = '24 / 3 / 25 / 11'; 
    }
    if(minusButtonLem.style.display === 'block' && plusButton.style.display === 'block') {
        grapeLine.style['grid-area'] = '23 / 3 / 23 / 11';
        grapeInfo.style['grid-area'] = '24 / 3 / 25 / 11'; 
    }
    if(plusButtonLem.style.display === 'block' && minusButtonGra.style.display === 'block') {
        ingredientGrapeFirst.style['grid-area'] = '15 / 3 / 18 / 5';
        ingredientGrapeTwo.style['grid-area'] = '13 / 8 / 17 / 10';
        ingredientGrapeThree.style['grid-area'] = '22 / 9 / 26 / 11';
        bottleDisGrape.style['grid-area'] = '12 / 5 / 25 / 9';
    }
    if(minusButtonGra.style.display === 'block' &&  minusButton.style.display === 'block' && plusButtonLem.style.display === 'block') {
        ingredientGrapeFirst.style['grid-area'] = '29 / 3 / 33 / 5';
        ingredientGrapeTwo.style['grid-area'] = '27 / 8 / 31 / 10';
        ingredientGrapeThree.style['grid-area'] = '36 / 9 / 40 / 11';
        bottleDisGrape.style['grid-area'] = '26 / 5 / 39 / 9';
    }



})

plusButtonGra.addEventListener('click', function() {
    ingredientGrapeFirst.style.display = 'block';
    ingredientGrapeTwo.style.display = 'block';
    ingredientGrapeThree.style.display = 'block';
    bottleDisGrape.style.display = 'block';
    plusButtonGra.style.display = 'none';
    minusButtonGra.style.display = 'block';
    displayPro.style['grid-template'] = 'repeat(70, 1fr) / repeat(12, 1fr)';
    if(minusButtonGra.style.display === 'block' && plusButton.style.display === 'block' && plusButtonLem.style.display === 'block') {
        ingredientGrapeFirst.style['grid-area'] = ' 15 / 3 / 19 / 5';
        ingredientGrapeTwo.style['grid-area'] = '12 / 8 / 16 / 10';
        ingredientGrapeThree.style['grid-area'] = '22 / 9 / 26 / 11';
        bottleDisGrape.style['grid-area'] = '12 / 5 / 25 / 9';
    }
    if(minusButtonGra.style.display === 'block' && plusButton.style.display === 'block') {
        ingredientGrapeFirst.style['grid-area'] = ' 15 / 3 / 19 / 5';
        ingredientGrapeTwo.style['grid-area'] = '12 / 8 / 16 / 10';
        ingredientGrapeThree.style['grid-area'] = '22 / 9 / 26 / 11';
        bottleDisGrape.style['grid-area'] = '12 / 5 / 25 / 9';
    }
    if(plusButtonLem.style.display === 'none') {
        ingredientGrapeFirst.style['grid-area'] = '28 / 3 / 32 / 5';
        ingredientGrapeTwo.style['grid-area'] = '27 / 8 / 31 / 10';
        ingredientGrapeThree.style['grid-area'] = '35 / 9 / 39 / 11';
        bottleDisGrape.style['grid-area'] = '25 / 5 / 39 / 9';
    }
    if(plusButton.style.display === 'none' && plusButtonLem.style.display === 'none' && plusButtonGra.style.display === 'none') {
        ingredientGrapeFirst.style['grid-area'] = '41 / 3 / 45 / 5';
        ingredientGrapeTwo.style['grid-area'] = '40 / 8 / 44 / 10';
        ingredientGrapeThree.style['grid-area'] = '50 / 9 / 54 / 11';
        bottleDisGrape.style['grid-area'] = '39 / 5 / 53 / 9';
    }
    if(minusButtonGra.style.display === 'block' &&  minusButton.style.display === 'block') {
        ingredientGrapeFirst.style['grid-area'] = '29 / 3 / 33 / 5';
        ingredientGrapeTwo.style['grid-area'] = '27 / 8 / 31 / 10';
        ingredientGrapeThree.style['grid-area'] = '36 / 9 / 40 / 11';
        bottleDisGrape.style['grid-area'] = '26 / 5 / 39 / 9';
    }

    if(minusButtonGra.style.display === 'block' &&  minusButton.style.display === 'block' && plusButtonLem.style.display === 'block') {
        ingredientGrapeFirst.style['grid-area'] = '29 / 3 / 33 / 5';
        ingredientGrapeTwo.style['grid-area'] = '27 / 8 / 31 / 10';
        ingredientGrapeThree.style['grid-area'] = '36 / 9 / 40 / 11';
        bottleDisGrape.style['grid-area'] = '26 / 5 / 39 / 9';
    }

    if(minusButtonGra.style.display === 'block' && minusButtonLem.style.display === 'block' && minusButton.style.display === 'block') {
        ingredientGrapeFirst.style['grid-area'] = '40 / 3 / 44 / 5';
        ingredientGrapeTwo.style['grid-area'] = ' 39 / 8 / 43 / 10';
        ingredientGrapeThree.style['grid-area'] = '48 / 9 / 52 / 11';
        bottleDisGrape.style['grid-area'] = '38 / 5 / 51 / 9';
    }



})


minusButtonGra.addEventListener('click', function() {
    ingredientGrapeFirst.style.display = 'none';
    ingredientGrapeTwo.style.display = 'none';
    ingredientGrapeThree.style.display = 'none';
    bottleDisGrape.style.display = 'none';
    plusButtonGra.style.display = 'block';
    minusButtonGra.style.display = 'none';
    displayPro.style['grid-template'] = 'repeat(60, 1fr) / repeat(12, 1fr)';

})

*/









