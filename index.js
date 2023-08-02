var randomNumber1 = Math.floor(Math.random() * 6) + 1;
if(randomNumber1===1){
    document.querySelector(".dice1").setAttribute("src","images/dice1.png");
}else if(randomNumber1===2){
    document.querySelector(".dice1").setAttribute("src","images/dice2.png");
}else if(randomNumber1===3){
    document.querySelector(".dice1").setAttribute("src","images/dice3.png");
}else if(randomNumber1===4){
    document.querySelector(".dice1").setAttribute("src","images/dice4.png");
}else if(randomNumber1===5){
    document.querySelector(".dice1").setAttribute("scr","images/dice5.png")
}else{
    document.querySelector(".dice1").setAttribute("src","images/dice6.png");
}


var randomNumber2 = Math.floor(Math.random() * 6) + 1;
if(randomNumber2===1){
    document.querySelector(".dice2").setAttribute("src","images/dice1.png");
}else if(randomNumber2===2){
    document.querySelector(".dice2").setAttribute("src","images/dice2.png");
}else if(randomNumber2===3){
    document.querySelector(".dice2").setAttribute("src","images/dice3.png");
}else if(randomNumber2===4){
    document.querySelector(".dice2").setAttribute("src","images/dice4.png");
}else if(randomNumber2===5){
    document.querySelector(".dice2").setAttribute("scr","images/dice5.png")
}else{
    document.querySelector(".dice2").setAttribute("src","images/dice6.png");
}
var winner = document.querySelector("h1");
if(randomNumber1 > randomNumber2){
    winner.innerHTML= "🏆 player 1 wins";
}else if(randomNumber1===randomNumber2){
    winner.innerHTML= "Draw 🤝";
}else{
    winner.innerHTML= "player 2 wins 🏆";
}