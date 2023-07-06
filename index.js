var randomNumber1 = (Math.floor(Math.random()*6)) + 1;

var image1 = "dice" + randomNumber1 + ".png";

var imageSource1 = "./images/" + image1;

var randomImage1 = document.querySelectorAll("img")[0];

randomImage1.setAttribute("src", imageSource1);

var randomNumber2 = (Math.floor(Math.random()*6)) + 1;

var imageSource2 = "./images/dice" + randomNumber2 + ".png";

var randomImage2 = document.querySelectorAll("img")[1];

randomImage2.setAttribute("src", imageSource2);

if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "Player 1 Won!";
}
else if(randomNumber2 > randomNumber1){
    document.querySelector("h1").innerHTML = "Player 2 Won!";
}
else{
    document.querySelector("h1").innerHTML = "Draw!";
}