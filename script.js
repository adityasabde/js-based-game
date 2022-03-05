let score = 0;
let cross = true;

audio = new Audio('song/game.mp3')
audiogo = new Audio('song/collide.mp3')
audiojump = new Audio('song/jump.mp3')
setTimeout(()=>{
   audio.play()
},1000);
document.onkeydown=function(e){
    console.log("key code", e.keyCode)
    if(e.keyCode == 38){
        audiojump.play();
        setTimeout(()=>{
           jump.pause();
        },1000);
        dino = document.querySelector('.dino');
        dino.classList.add('animateDino');
        setTimeout(()=>{
            dino.classList.remove('animateDino')
        },700);
    }
    if(e.keyCode == 39){
        dino = document.querySelector('.dino');
        dinox = parseInt(window.getComputedStyle(dino , null).getPropertyValue('left'));
        dino.style.left = dinox + 112+"px";
    }
    if(e.keyCode == 37){
        dino = document.querySelector('.dino');
        dinox = parseInt(window.getComputedStyle(dino , null).getPropertyValue('left'));
        dino.style.left = (dinox - 112)+"px";
    }
}


setInterval(() => {
    dino = document.querySelector('.dino');
    gameover = document.querySelector('.gameover');
    obstacle = document.querySelector('.obstacle');
    dx = parseInt(window.getComputedStyle(dino , null).getPropertyValue('left'));
    dy = parseInt(window.getComputedStyle(dino , null).getPropertyValue('top'));

    ox = parseInt(window.getComputedStyle(obstacle , null).getPropertyValue('left'));
    oy = parseInt(window.getComputedStyle(obstacle , null).getPropertyValue('top'));

    offsetX = Math.abs(dx-ox);
    offsetY = Math.abs(dy-oy);

    if(offsetX< 63 && offsetY<42){
        gameover.innerHTML = "Game Over - Reload to restart";
        obstacle.classList.remove('obstacleAni');
        audiogo.play();
        setTimeout(()=>{
            audiogo.pause();
            audio.pause();
        },1000);
    }else if(offsetX<145 && cross){
        
        score+=1;
        updatescore(score);
        cross = false;
        setTimeout(() => {
            cross = true;
        }, 1000);
        setTimeout(() => {
            aniDur  = parseFloat(window.getComputedStyle(obstacle , null).getPropertyValue('animation-duration'));
            newDur = aniDur - 0.1 ;
            obstacle.style.animationDuration = newDur + 's';
            console.log(newDur)
        }, 500);
       
    }


}, 10);


function updatescore(score){
    scorecount.innerHTML = "your score : " + score
}