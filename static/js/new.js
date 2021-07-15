function clickme(){
    reset()
var year=prompt('Enter The Year You Were Born.....');   
var days = (2020-year)*365;
var textyear = document.createTextNode("Days since you were born: "+days);
var h1=document.createElement('h1');
h1.setAttribute('id','result')
h1.setAttribute('class','w-256 h-24 text-4xl justify-center flex items-center bg-gray-100')
h1.appendChild(textyear);
document.getElementById('ages').appendChild(h1);

}


function reset(){
    document.getElementById("ages").innerHTML=null;
}