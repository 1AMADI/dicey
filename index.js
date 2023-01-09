function result(){
    //  Creating an array for names of dice images names//
    var images=["dice1.png","dice2.png","dice3.png","dice4.png","dice5.png","dice6.png"];
    // Selecting at random number for first player//
    var diceFace1=Math.random();
    diceFace1=Math.floor(diceFace1*6);
    var diceFirst= images[diceFace1];
    // getting the score for the first player//
    var score1=diceFace1+1;
    // selecting the random number for second player//
    var diceFace2 =Math.random();
    diceFace2=Math.floor(diceFace2*6);
    // getting the score for the second number //
    var score2=diceFace2+1;
    var diceSecond=images[diceFace2];
    // setting the image as attributes for both the players//
    document.querySelector(".dice-1").setAttribute("src",diceFirst);
    document.querySelector(".dice-2").setAttribute("src",diceSecond);
    // deciding the winner and printing the winner messsage//
    if(score1===score2){
        document.querySelector(".top-text").textContent="Draw";
    }
    else if(score1>score2){
        document.querySelector(".top-text").textContent="Player 1 wins🚩"

    }
    else if (score2>score1){
        document.querySelector(".top-text").textContent="Player 2 wins🚩";
    }


}
