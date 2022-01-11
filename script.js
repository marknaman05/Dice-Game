'use strict';
// console.log(document.getElementById('score--0').innerHTML);


    let currentScore = document.getElementById('current--0').innerHTML;

    const switchToPlayer2 = () => {
        document.getElementById('score--0').innerHTML = 0;
        document.querySelector('.player--0').classList.remove('player--active');
        document.querySelector('.player--1').classList.add('player--active');
    };

    const switchToPlayer1 = () => {
        document.getElementById('score--1').innerHTML = 0;
        document.querySelector('.player--1').classList.remove('player--active');
        document.querySelector('.player--0').classList.add('player--active');
    };

    document.querySelector('.btn--roll').addEventListener('click',function() {
        const dice = Math.trunc(Math.random() * 6) + 1;

        //To roll the dice
        switch (dice){
            case 1: document.querySelector('.dice').src = "dice-1.png";
                break;
            case 2: document.querySelector('.dice').src = "dice-2.png";
                break;
            case 3: document.querySelector('.dice').src = "dice-3.png";
                break;
            case 4: document.querySelector('.dice').src = "dice-4.png";
                break;
            case 5: document.querySelector('.dice').src = "dice-5.png";
                break;
            case 6: document.querySelector('.dice').src = "dice-6.png";
                break;
        
        }

        //To switch players
        if(document.querySelector(".player--0").classList.contains("player--active")){
            if(dice !==  1){
                document.getElementById('score--0').innerHTML = Number(document.getElementById('score--0').innerHTML) + dice;
            }
            else{
                switchToPlayer2();
                document.getElementById('current--0').innerHTML = 0;
            }
        }
        else if(document.querySelector(".player--1").classList.contains("player--active")){
            if(dice !==  1){
                document.getElementById('score--1').innerHTML = Number(document.getElementById('score--1').innerHTML) + dice;
            }
            else{
                switchToPlayer1();
                document.getElementById('current--1').innerHTML = 0;
            }
        }              


            
        // if(Number(document.getElementById('current--0').innerHTML) >= 100){
        //     // Player 1 WINS !!
        //     document.getElementById('name--0').innerHTML = "Player 1 WINS !! 🥳"
        // }
        // else {
        //     if(Number(document.getElementById('current--1').innerHTML >= 100)){
        //     // Player 2 WINS !!
        //     document.getElementById('name--1').innerHTML = "Player 2 WINS !! 🥳"
        //     }
        // }

})

    document.querySelector('.btn--hold').addEventListener('click',function() {
            if(Number(document.getElementById('current--1').innerHTML) >= 100){
                document.querySelector(".dice").classList.add("hidden")
            }
            else if(document.querySelector(".player--0").classList.contains("player--active")){
                    //console.log('hold pressed')
                    document.getElementById('current--0').innerHTML = Number(document.getElementById('score--0').innerHTML) + Number(document.getElementById('current--0').innerHTML);
                    switchToPlayer2();
            }
            
            else if(document.querySelector(".player--1").classList.contains("player--active")){
                    //console.log('hold pressed')
                    document.getElementById('current--1').innerHTML = Number(document.getElementById('score--1').innerHTML) + Number(document.getElementById('current--1').innerHTML);
                    switchToPlayer1();
            }



    })
document.querySelector('.btn--new').addEventListener('click',function() {
    document.getElementById('score--0').innerHTML = 0;
    document.getElementById('score--1').innerHTML = 0;
    document.getElementById('current--1').innerHTML = 0;
    document.getElementById('current--0').innerHTML = 0;
    switchToPlayer1();
})