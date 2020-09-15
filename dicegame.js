// var p1=prompt("Enter Player1's name");
// var p2=prompt("Enter Player2's name");
// if(p1==null||p2==null){
//   p1="PLayer 1";
//   p2="Player 2";
// }

// document.querySelectorAll("p")[0].innerHTML=p1;
// document.querySelectorAll("p")[1].innerHTML=p2;

document.querySelector(".startbutton").addEventListener("click",function(){

  var randomnumber1=Math.round(Math.random()*5)+1;
  var s1 =document.querySelectorAll('img')[0];
  sn1="images/dice"+randomnumber1+".png";
  s1.setAttribute("src",sn1);

  var randomnumber2=Math.round(Math.random()*5)+1;
  var s2 =document.querySelectorAll('img')[1];
  sn2="images/dice"+randomnumber2+".png";
  s2.setAttribute("src",sn2);

  if(randomnumber1>randomnumber2){
    document.querySelector('h1').innerHTML="Player1 Wins!";
  }else if(randomnumber1<randomnumber2){
    document.querySelector('h1').innerHTML="Player2 Wins!";
  }else{
    document.querySelector('h1').innerHTML="Draw!";
  }

 document.querySelector(".startbutton").innerHTML="Play Again";

});
