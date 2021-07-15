const rps=['rock','paper','scissor'];
let win=0;
let lose=0;
let draw=0;
let roundscore;

function humanchoice(choice) {
     roundscore=0;
    let userentry=choice;  
    let botentry=botchoice()
    console.log(userentry);
    console.log(botentry);
    let result=check(userentry,botentry);
    document.getElementById('questbox').style.display="none";
    document.getElementById('resultbox').style.display='flex'
    let img=document.createElement('img');
    img.src=document.getElementById(botentry).src;
    img.setAttribute('class','rps');
    img.style.boxShadow='1px 3px 25px red'
    document.getElementById('resultbox').appendChild(img);
    let results=document.createElement('h1')
    results.innerHTML=result;
    results.setAttribute('class','font-bold text-4xl mt-20');
    
    if(roundscore==1){
        results.style.color='blue';
    }
    else{
        results.style.color='red'
    }
    document.getElementById('resultbox').appendChild(results);
    var imgs=document.createElement('img');
    imgs.src=document.getElementById(userentry).src;
    imgs.setAttribute('class','rps');
    imgs.style.boxShadow = '1px 3px 25px blue';
    document.getElementById('resultbox').appendChild(imgs);
    document.getElementById('trybtn').style.display='flex';
    document.getElementById('won').innerHTML=win;
    document.getElementById('lost').innerHTML=lose;
    document.getElementById('draw').innerHTML=draw;
}

function botchoice() {
    var randomno= Math.floor(Math.random() * 3) ;
    return rps[randomno];
 }

function check(userentry,botentry) {
    if(userentry===botentry){
        draw++;
         console.log(draw);
         return 'Draw';
    }
    else if(userentry=='rock')
    {
        if(botentry=='paper'){
            lose++;
            return 'Player lost';
            
        }
        else{
            win++;
            roundscore=1;
            return 'player won';
        }
    }
    else if(userentry=='paper'){
        if(botentry=='scissor'){
            lose++;
            return 'Player lost';
        }
        else{
            win++;
            roundscore=1;
            return 'player won';
        }
    }
    else{
        if(botentry=='rock'){
            lose++;
            return 'Player lost';
        }
        else{
            win++;
            roundscore=1;
            return 'player won';
        }
    }

}
function tryagain(){
   document.getElementById('questbox').style.display='flex';
   document.getElementById('resultbox').innerHTML=null;
   document.getElementById('resultbox').style.display='none';
   document.getElementById('trybtn').style.display='none';
}