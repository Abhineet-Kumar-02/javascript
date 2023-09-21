const start=document.querySelector('#start');
const stop=document.querySelector('#stop');
let game;
const randomColor= function(){
    const hex='0123456789ABCDEF' ;
    let color='#';
    for(let i=0;i<6;i++){
       color+=hex[Math.floor(Math.random()*16)];
    }
    return color;
}

function colorChnager(){
 document.body.style.backgroundColor=randomColor();
}

start.addEventListener('click',function(){
    if(!game){
    game=setInterval(colorChnager,1000);
    }
})

stop.addEventListener('click',function(){
    clearInterval(game);
    game=null;
})

