let randomeNumber1=Math.floor(Math.random()*6)+1
document.querySelector("img.img1").setAttribute("src","images/dice"+randomeNumber1+".png");

let randomeNumber2=Math.floor(Math.random()*6)+1
document.querySelector("img.img2").setAttribute("src","images/dice"+randomeNumber2+".png");

if(randomeNumber1>randomeNumber2){
    document.querySelector("h1").innerHTML="Player 1 Wins";
}
else if(randomeNumber1< randomeNumber2){
    document.querySelector("h1").innerHTML="Player 2 Wins" ;
}
else{
    document.querySelector("h1").innerHTML="Draw!" ;
}