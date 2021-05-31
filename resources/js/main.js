



// timer function 
function setTimer(second) {
    var timeleft=second;
    const setTimer = setInterval(()=>{
    if(timeleft <=0){
        
     document.getElementById('timer').innerHTML='Shoot!!';   
     clearInterval(setTimer)
    }else{
            document.getElementById('timer').innerHTML=timeleft + ' second to start...';
    }
    --timeleft;
    },1000)
}





