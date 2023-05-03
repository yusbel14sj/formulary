const oneCard =document.getElementById("cardUno") ;
const twoCard = document.getElementById("cardDos");
const threeCard = document.getElementById("cardTres");
const fourCard = document.getElementById("cardCuatro");
const finish = document.getElementById("finish");

const buttomOneNext = document.getElementById("buttonOneNext") 
const buttomTwoBack = document.getElementById("buttonTwoBack") 
const buttomTwoNext = document.getElementById("buttonTwoNext") 
const buttomThreeBack = document.getElementById("buttonThreeNext") 
const buttomThreeNext = document.getElementById("buttonThreeNext") 
const buttomFourBack = document.getElementById("buttonFourBack") 
const buttomFourNext = document.getElementById("buttonFourBack") 

let position = 1;

function showOneCard(){
    oneCard.style.display= "block";
}

buttomOneNext.addEventListener("click",nextCard);
buttomTwoNext.addEventListener("click",nextCard);
buttomThreeNext.addEventListener("click",nextCard);
buttomFourNext.addEventListener("click",nextCard);

function nextCard() {
    if (position = 1) {
        oneCard.style.display="none"
        twoCard.style.display="block"
        return position =position+1;

    } else if(position = 2) {
        twoCard.style.display="none"
        threeCard.style.display="block"
        return position = position+1;
    } else if (position = 3) {
        threeCard.style.display="none"
        fourCard.style.display="block"
        return position = position +1;
    }else if(position = 4){
        fourCard.style.display="none"
        finish.style.display="block"
        return position=+ 1;
    }
}