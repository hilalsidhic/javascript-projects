function newcat(){
    var imgs=document.createElement('img')
imgs.setAttribute('id','catgif')
imgs.setAttribute('class','rounded-sm shadow-lg flex my-4 hover:shadow-2xl duration:500 ')
imgs.setAttribute('src','https://media.giphy.com/media/ASvQ3A2Q7blzq/giphy.gif')
document.getElementById('catimg').appendChild(imgs);
}
