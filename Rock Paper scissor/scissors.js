var a;
var b;
var score1=0;
var score2=0;

function fun()
{
  
    document.getElementById("aa").innerHTML="LETS PLAY";
        
    document.getElementById("aa").style.color="red";
    document.getElementById("hide").style.display="none";
    


}




// window.onload=function()
// {


//   for(let i=0;i<3;i++)
//   {

//     let s=document.createElement('img');
//     s.id=select[i];
//     s.src=select[i]+".png";
//     document.addEventListener("click",selection);
//     document.getElementById('p').append(s);
//   }


// }
function selection(n)
{
    a=n;
    b=Math.floor(Math.random()*3);

  
    // let k=document.createElement('img');
    //  k.id=a;
    //   k.src=a+".png";
    //   document.getElementById('ii').append(k);
    // let l=document.createElement('img');
    //    l.id=b;
    //  l.src=b+".png";
    
    // document.getElementById('ii').append(l);
  document.getElementById("ia").src=a+".png";
  document.getElementById("ib").src=b+".png";
  document.getElementById("ia").style.animation="move 1s 4 ease-in";
  document.getElementById("ib").style.animation="move 1s 4 ease-in";
  if(a==b)
  {
    score1=score1+1;
    score2=score2+1;
    document.getElementById("aa").innerHTML="IT WAS A TIE";
  }
  else{
    if(a==0)
    {
        if(b==2)
        {
            score1=score1+1;
            document.getElementById("aa").innerHTML="YOU WON";
        }
        else if(b==1)
        {
            score2=score2+1;
            document.getElementById("aa").innerHTML="COMPUTER WON";
        }
    }
    else if(a==1)
    {
        if(b==0)
        {
            score1=score1+1;
            document.getElementById("aa").innerHTML="YOU WON";
        }
        else if(b==2)
        {
            score2=score2+1;
            document.getElementById("aa").innerHTML="COMPUTER WON";
        }
    }
    else if(a==2)
    {
        if(b==1)
        {
            score1=score1+1;
            document.getElementById("aa").innerHTML="YOU WON";
        }
        else if(b==0)
        {
            score2=score2+1;
            document.getElementById("aa").innerHTML="COMPUTER WON";
        }
    }
  }
  document.getElementById('sa').innerText=score1;
  document.getElementById('sb').innerText=score2;
}
function stop()
{
 if(score1==score2)
 {
    document.getElementById('stop1').style.display="none";
    document.getElementById('pic').src="https://media.giphy.com/media/mGo8dkPOF6GLm/giphy.gif";
    document.getElementById('aa').innerText="IT WAS A TIE";
 }
 else if(score1>score2)
 {
    document.getElementById('stop1').style.display="none";
    document.getElementById('pic').src="https://media1.tenor.com/images/f96edc451b512a723f836b13f9fd120a/tenor.gif?itemid=12169576";
    document.getElementById('aa').innerText="YOU WON";
    document.getElementById('pic').style.height="300px";
 }
 else{
    document.getElementById('stop1').style.display="none";
    document.getElementById('pic').src="https://media1.tenor.com/images/77e20a7ed0ab4507b6e89938a12cbad0/tenor.gif?itemid=5261096";
    document.getElementById('aa').innerText="COMPUTER WON";
 }
 
}
