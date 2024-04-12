const btnLeft = document.querySelector(".btn-left"),
      btnRight = document.querySelector(".btn-right"),
      slider = document.querySelector("#slider"),
      sliderSections = document.querySelectorAll(".slider-section");

btnLeft.addEventListener("click", e => moveLeft());
btnRight.addEventListener("click", e => moveRight());

setInterval(() => {
    moveRight();
}, 3000);

let operacion = 0; 
    counter = 0;
    widthImg = 100/sliderSections.length;

function moveRight() {
    if(counter >= sliderSections.length-1){
        counter = 0;
        operacion = 0;
        slider.style.transform = `translate(-${operacion}%)`
        return;
    }
    counter++;
    operacion = operacion+ widthImg
    slider.style.transform = `translate(-${operacion}%)`
    slider.style.transition = "all ease .6s"
    
}

function moveLeft() {
    counter--;
    if(counter < 0){
        counter = sliderSections.length-1;
        operacion = widthImg*(sliderSections.length-1)
        slider.style.transform = `translate(-${operacion}%)`
        return;
    } 
    operacion = operacion - widthImg
    slider.style.transform = `translate(-${operacion}%)`
    slider.style.transition = "all ease .6s"
}
