let color= document.getElementsByTagName('button');
console.log(color);

var copycolor=[];
for(let i=0;i<color.length;i++){
    copycolor.push(color[i].classList[8 ])
}
console.log(copycolor[2]);

function colorchoice(btns){
    console.log(btns.value);
    if(btns.value=='original'){
        buttonreset();
    }
    else if(btns.value=='red'){
        buttonred();
    }
    else if(btns.value=='blue'){
        buttonblue();
    }
    else if(btns.value=='random'){
        buttonrandom();
    }
}
function buttonred() {
    for(let i=0;i<color.length;i++){
        color[i].classList.remove(color[i].classList[8])
        color[i].classList.add('bg-red-600')
    }
}
function buttonblue() {
    for(let i=0;i<color.length;i++){
        color[i].classList.remove(color[i].classList[8])
        color[i].classList.add('bg-blue-600')
    }
}
function buttonrandom(){
    let randomcolor=['bg-red-600','bg-blue-600','bg-pink-600','bg-green-600']
    for(let i=0;i<color.length;i++){
       let randomno=Math.floor(Math.random()*4);
        color[i].classList.remove(color[i].classList[8])
        color[i].classList.add(randomcolor[randomno])
    }
}
function buttonreset(){
    var copy=copycolor;
    for(let i=0;i<color.length;i++){
        color[i].classList.remove(color[i].classList[8]);
        color[i].classList.add(copy[i]);
     
    }
    console.log(copy);
}
