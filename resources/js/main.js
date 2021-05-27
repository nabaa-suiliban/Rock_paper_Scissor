

// DOM   store   controller 



var player1='';
var  player2='';


function SetPlayer2(){
        //get random number between 1 - 3 
        var option = Math.round(Math.random()*2)+1
        switch (option) {
            case 1:
                return 'rock'
                break;
            case 2:
                return 'scissors'
                break;
            case 3:
                return 'paper'
                break;
                
            default:
                break;
        }
}   



//  winner cases :  r > s |   s > p  |   p > r 
// tie      :  

function Get_result(player1,player2) {
        if ( player1 === 'rock' && player2 === 'scissors'){

            return { player1:'Winner', player2:'Loser', player1_icon:player1, player2_icon:player2 }
        }
        else if( player1 === 'scissors' && player2 === 'paper'){
            return { player1:'Winner', player2:'Loser', player1_icon:player1, player2_icon:player2 }
        }
        else if( player1 === 'paper' && player2 === 'rock'){
            return { player1:'Winner', player2:'Loser', player1_icon:player1, player2_icon:player2 }
        }
        else if ( player1 === player2 ){
                return { player1:'Tie', player2:'Tie', player1_icon:player1, player2_icon:player2 }
        }
        else if(player2 === 'rock' && player1 === 'scissors'){
            return { player1:'Loser', player2:'Winner', player1_icon:player1, player2_icon:player2 }

        }else if(player2 === 'scissors' && player1 === 'paper'){
            return { player1:'Loser', player2:'Winner', player1_icon:player1, player2_icon:player2 }

        }else if(player2 === 'paper' && player1 === 'rock'){
            return { player1:'Loser', player2:'Winner', player1_icon:player1, player2_icon:player2 }

        }else{
            
            }
}


function displayResult(obj) {
        // change the result icons
        //  >> for player 1
        document.getElementById(Dom.player1_icon).classList.replace(Dom.rock_class,'fa-hand-'+obj.player1_icon)
        if (obj.player1_icon === 'scissors') {
        document.getElementById(Dom.player1_icon).style.transform = 'rotate(-270deg)';
        }
        //  >> for player 2
        document.getElementById(Dom.player2_icon).classList.replace(Dom.rock_class,'fa-hand-'+obj.player2_icon)
        if (obj.player2_icon === 'scissors') {
            document.getElementById(Dom.player2_icon).style.transform = 'rotate(-90deg)';
            }
        // change lables
        // >> for player1 
         document.getElementById(Dom.player1_resualt).innerHTML = obj.player1;
        // console.log(Dom.player1_resualt);
        // // >> for player2
        document.getElementById('player2-resualt').innerHTML = obj.player2;
        
        // change the image and lables 
        if (obj.player2 === 'Winner'){
            document.getElementById(Dom.player2_img).src ='img/winner.png';
            document.getElementById(Dom.player2Chatt).innerHTML='Awesome I am the king in this game!';
        }else if (obj.player2 === 'Loser') {
            document.getElementById(Dom.player2_img).src ='img/loser.png';
            document.getElementById(Dom.player2Chatt).innerHTML='WT*, I Can\'t belive that I lost aginst you! ';
        }else{
            document.getElementById(Dom.player2_img).src ='img/waiting.png';
            document.getElementById(Dom.player2Chatt).innerHTML='Not bad, We should try again! ';

        }

}



// DOM variables
var Dom = {
    player1_Section : 'player1-section',
    player2_Section : 'player2-section',
    player2_img :'graham-img',
    // buttons
    btn_start:'btn-start',
    btn_rock :'btn-rock',
    btn_sissors : 'btn-sissors',
    btn_papper:'btn-papper',
    // battle area section
    timer:'timer',
    battle_area:'battle-area',
    //result section
    player2_icon:'player2-icon',
    player1_icon:'player1-icon',
    rock_class:'fa-hand-rock',
    player2_resualt:'player2-resualt',
    player1_resualt:'player1-resualt',
    player2Chatt : 'chatt',
}

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





// event Listener function
function CallEventListener() {
    //start button
    var btn_start = document.getElementById(Dom.btn_start);
    // game buttons
    var btn_rock = document.getElementById(Dom.btn_rock);
    var btn_papper = document.getElementById(Dom.btn_papper);
    var btn_sissors = document.getElementById(Dom.btn_sissors);

    btn_start.addEventListener('click',StartGame)
    btn_rock.addEventListener('click',function(){Btn_Click('rock')})
    btn_sissors.addEventListener('click',function(){Btn_Click('scissors')})
    btn_papper.addEventListener('click',function(){Btn_Click('paper')})
}

    // game button function 
    function Btn_Click(type) {
        console.log(type);
        // set player 2 choice
        var player2_option = SetPlayer2()

        // pass the type value to compare function
        var result = Get_result(type,player2_option );
        console.log(result);

        // display result in the DOM
        displayResult(result)
        

        // disable timer
        document.getElementById(Dom.timer).classList.replace('d-block','d-none');
        // disable the game button
        document.getElementById(Dom.btn_rock).classList.add('disabled');
        document.getElementById(Dom.btn_sissors).classList.add('disabled');
        document.getElementById(Dom.btn_papper).classList.add('disabled');
        
        // enable result section
        document.getElementById(Dom.battle_area).classList.replace('d-none','d-block');
    }




    // start game function 
    function StartGame() {
            var player1_Section = document.getElementById(Dom.player1_Section);
            var player2_Section = document.getElementById(Dom.player2_Section);
            // add  active class to both sections 
            player1_Section.classList.add('active');
            player2_Section.classList.add('active');
            
            // change player2 img to thinking.png and lable text
            document.getElementById(Dom.player2_img).src ='img/thinking.png';
            document.getElementById(Dom.player2Chatt).innerHTML='I already chose my move!';

            // hide start button
            document.getElementById(Dom.btn_start).classList.replace('d-block','d-none');
            
            // display timer
            document.getElementById(Dom.timer).classList.replace('d-none','d-block');

            // enable game buttons
            document.getElementById(Dom.btn_rock).classList.remove('disabled');
            document.getElementById(Dom.btn_sissors).classList.remove('disabled');
            document.getElementById(Dom.btn_papper).classList.remove('disabled');

            // set in the timer for 5s 
            setTimer(10);
    }

// call event listener 
CallEventListener();