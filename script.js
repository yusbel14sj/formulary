const oneCard =document.getElementById("cardUno") ;
const twoCard = document.getElementById("cardDos");
const threeCard = document.getElementById("cardTres");
const fourCard = document.getElementById("cardCuatro");
const finish = document.getElementById("finish");

const numeroCuatro = document.getElementById("numberColorCuatro");
const numeroTres = document.getElementById("numberColorTres");
const numeroDos = document.getElementById("numberColorDos");
const numeroUno = document.getElementById("numberColorUno");

const buttomOneNext = document.getElementById("buttonOneNext") 
const buttomTwoBack = document.getElementById("buttonTwoBack") 
const buttomTwoNext = document.getElementById("buttonTwoNext") 
const buttomThreeBack = document.getElementById("buttonThreeBack") 
const buttomThreeNext = document.getElementById("buttonThreeNext") 
const buttomFourBack = document.getElementById("buttonFourBack") 
const buttomFourNext = document.getElementById("buttonFourNext") 

let position = 1;

function showOneCard(){
    oneCard.style.display= "block";
    cambio()
}

buttomOneNext.addEventListener("click",nextCard );
buttomTwoNext.addEventListener("click",nextCard);
buttomThreeNext.addEventListener("click",nextCard);
buttomFourNext.addEventListener("click",nextCard);
buttomTwoBack.addEventListener("click",backCard);
buttomThreeBack.addEventListener("click",backCard);
buttomFourBack.addEventListener("click",backCard);

function nextCard() {
    if (position == 1) {
        oneCard.style.display="none"
        twoCard.style.display="block"
        position =position+1;
        cambio();

    } else if(position == 2) {
        twoCard.style.display="none"
        threeCard.style.display="block"
        position =position+1;
        cambio();
    } else if (position == 3) {
        threeCard.style.display="none"
        fourCard.style.display="block"
        position =position+1;
        cambio();
    }else if(position == 4){
        fourCard.style.display="none"
        finish.style.display="flex"
        cambio();
    }
}

function backCard(){
    if (position == 2) {
        cambio();
        twoCard.style.display="none"
        oneCard.style.display="block"
        position = position-1;
        cambio();
    } else if(position == 3) {
        twoCard.style.display="block"
        threeCard.style.display="none"
        position = position-1;
        cambio();
    } else if (position == 4) {
        threeCard.style.display="block"
        fourCard.style.display="none"
        position = position -1;
        cambio();
    }
}

function cambio() {
    if (position == 1) {
        numeroUno.classList.add('ubi')

        numeroDos.classList.remove('ubi')
        numeroTres.classList.remove('ubi');
        numeroCuatro.classList.remove('ubi');
    } else if (position == 2){
        numeroTres.classList.remove('ubi');
        numeroCuatro.classList.remove('ubi');
        numeroUno.classList.remove('ubi')

        numeroDos.classList.add('ubi')
    } else if (position ==3){
        numeroUno.classList.remove('ubi')
        numeroCuatro.classList.remove('ubi');
        numeroDos.classList.remove('ubi');

        numeroTres.classList.add('ubi');
    }else if (position === 4){
        numeroTres.classList.remove('ubi')
        numeroDos.classList.remove('ubi')
        numeroUno.classList.remove('ubi');

        numeroCuatro.classList.add('ubi')
    }
    
}