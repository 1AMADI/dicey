function result(){
    var images=["dice1.png","dice2.png","dice3.png","dice4.png","dice5.png","dice6.png"];
    var diceFace1=Math.random();
    diceFace1=Math.floor(diceFace1*6);
    var diceFirst= images[diceFace1];
    var score1=diceFace1+1;
    var diceFace2 =Math.random();
    diceFace2=Math.floor(diceFace2*6);
    var score2=diceFace2+1;
    var diceSecond=images[diceFace2];
    document.querySelector(".dice-1").setAttribute("src",diceFirst);
    document.querySelector(".dice-2").setAttribute("src",diceSecond);

    if(score1===score2){
        document.querySelector(".top-text").textContent="Draw";
    }
    else if(score1>score2){
        document.querySelector(".top-text").textContent="Player 1 wins !!! 🚩"

    }
    else if (score2>score1){
        document.querySelector(".top-text").textContent="Player 2 wins !!! 🚩";
    }


}
