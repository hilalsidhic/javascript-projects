let blackjackelements={
    'user':{'spanScore':'#user-score','imgDiv':'#user-blackjack','score':0},
    'dealer':{'spanScore':'#dealer-score','imgDiv':'#dealer-blackjack','score':0},
    'cards':['A','2','3','4','5','6','7','8','9','10','J','Q','K'],
    'cardvalue':{'A':[1,11],'2':2,'3':3,'4':4,'5':5,'6':6,'7':7,'8':8,'9':9,'10':10,'J':10,'Q':10,'K':10},
    'win':0,
    'loss':0,
    'draw':0,
    'isstand':'false',
    'turnsover':'false',
};
const USER=blackjackelements.user;
const DEALER=blackjackelements.dealer;
const CARDS=blackjackelements.cards;
const CARDVALUE=blackjackelements.cardvalue;
const HITSOUND=new Audio('../static/audio/swish.m4a')
const WINSOUND=new Audio('../static/audio/cash.mp3')
const LOSSSOUND=new Audio('../static/audio/aww.mp3')

document.querySelector('#hit_button').addEventListener('click',blackjack_hit);
document.querySelector('#deal_button').addEventListener('click',blackjack_deal);
document.querySelector('#stand_button').addEventListener('click',blackjack_stand);



function blackjack_hit() {
  if (blackjackelements['isstand']==='false') {     
    let blackjack_card_random=pickacard();  
    blackjack_card(USER,blackjack_card_random);
    blackjack_score(blackjack_card_random,USER); 
    blackjack_update_score(USER);
}
}

function blackjack_card(activeuser,card) {
    if(activeuser['score']<=21){
    let image_blackjack = document.createElement('img');
    image_blackjack.src=`../static/images/${card}.png`;
    document.querySelector(activeuser['imgDiv']).appendChild(image_blackjack);
    console.log('finished');
    HITSOUND.play() 
    }
}

function pickacard() {
    let choice=Math.floor(Math.random()*13);
    return CARDS[choice];
}

function blackjack_score(card,activeuser) {
    if (card==='A') {
        if (activeuser['score']+CARDVALUE[card][1]<=21) {
        activeuser['score']+=CARDVALUE[card][1];
        }
        else{
            activeuser['score']+=CARDVALUE[card][0];
        }
    }
    else {
    activeuser['score']+=CARDVALUE[card];
    }
    
}

function blackjack_update_score(activeuser) {
    if (activeuser['score']>21) {
        document.querySelector(activeuser['spanScore']).textContent='BUST!!'
        document.querySelector(activeuser['spanScore']).style.color='red';
    }
    else{
        document.querySelector(activeuser['spanScore']).textContent=activeuser['score'];

    }
}

function blackjack_deal() {
 if(blackjackelements['turnsover']==='true'){

        let userimages= document.querySelector(USER['imgDiv']).querySelectorAll('img');
        let dealerimages=document.querySelector(DEALER['imgDiv']).querySelectorAll('img');
        for (let i = 0; i < userimages.length; i++) {
            userimages[i].remove(); 
        }
        for (let i = 0; i < dealerimages.length; i++) {
            dealerimages[i].remove(); 
        }
        document.querySelector(USER['spanScore']).textContent=0;
        document.querySelector(DEALER['spanScore']).textContent=0;
        document.querySelector(USER['spanScore']).style.color='white';
        document.querySelector(DEALER['spanScore']).style.color='white';

        USER['score']=0;
        DEALER['score']=0;

        document.querySelector('#blackjack_result').textContent=null;

        document.querySelector('#win-count').textContent=blackjackelements['win'];
        document.querySelector('#draw-count').textContent=blackjackelements['draw'];
        document.querySelector('#loss-count').textContent=blackjackelements['loss'];
        
        blackjackelements['turnsover']='false';
        blackjackelements['isstand']='false';
 }
}
function sleep(ms) {
    return new Promise(resolve=>setTimeout(resolve,ms));
}

async function blackjack_stand() {
    blackjackelements['isstand']='true';
    while (DEALER['score']<16) {
        let blackjack_card_random=pickacard();  
        blackjack_card(DEALER,blackjack_card_random);
        blackjack_score(blackjack_card_random,DEALER); 
        blackjack_update_score(DEALER);
       await sleep(1000);
    }
    
  display_result(blackjack_winner());  
  blackjackelements['turnsover']='true';
    
}

function blackjack_winner() {
   let winner; 
    if (USER['score']<=21) {
        if (USER['score']>DEALER['score'] || DEALER['score']>21) {
            console.log('user won');
            blackjackelements['win']++;
            winner=USER;
        }
        else if (USER['score']<DEALER['score']) {
            console.log('dealer won');
            blackjackelements['loss']++;
            winner=DEALER;
        }
        else{
            console.log('draw');
            blackjackelements['draw']++;
        }
    }
    else if (USER['score']>21) {
        if(DEALER['score']>21){
            console.log('draw');
            blackjackelements['draw']++;
        }
        else if (DEALER['score']<=21) {
            console.log('dealer won');
            blackjackelements['loss']++;
            winner=DEALER;
        }
    }
    return winner;
}

function display_result(activeuser) {
    if (activeuser===USER) {
        document.querySelector('#blackjack_result').textContent='YOU WON';
        document.querySelector('#blackjack_result').style.color='green';
        WINSOUND.play();
    }
    else if (activeuser==DEALER) {
        document.querySelector('#blackjack_result').textContent='DEALER WON';
        document.querySelector('#blackjack_result').style.color='red';
        LOSSSOUND.play();
    }
    else{
        document.querySelector('#blackjack_result').textContent='DRAW';
        document.querySelector('#blackjack_result').style.color='black';
    }
}