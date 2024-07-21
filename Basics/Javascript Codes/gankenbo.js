let Score = JSON.parse((localStorage.getItem('Score'))) || {
    Win: 0,
    Lose: 0,
    Tie: 0
};
let result = '';

document.addEventListener('DOMContentLoaded', () => {
    UpdateScore();
});

function UpdateScore(){
    document.querySelector('.js-score').innerHTML = `Wins: ${Score.Win} Losses: ${Score.Lose} Ties: ${Score.Tie}`;
}

function Start(){
    let random = Math.random();
    let computerMove = '';
    
    if (random >= 0 && random <= 1/3){
        computerMove = 'Rock';
    }
    else if (random >= 1/3 && random <= 2/3){
        computerMove = 'Paper';
    }
    else if (random >= 2/3 && random <= 1){
        computerMove = 'Scissors';
    }
    return computerMove;
}


function Comparing(playerMove){
    let result = '';
    const computerMove = Start();
    
    
    if (playerMove === 'Rock'){
        if(computerMove === 'Rock'){
            result = 'Tie';
        }
        else if(computerMove === 'Scissors'){
            result = 'You Win';
        }
        else if(computerMove === 'Paper'){
            result = 'You Lose';
        }
    }
    
    if (playerMove === 'Scissors'){
        if(computerMove === 'Rock'){
            result = 'You Lose';
        }
        else if(computerMove === 'Scissors'){
            result = 'Tie';
        }
        else if(computerMove === 'Paper'){
            result = 'You Win';
        }
    }
    
    if (playerMove === 'Paper'){
        if(computerMove === 'Rock'){
            result = 'You Win';
        }
        else if(computerMove === 'Scissors'){
            result = 'You Lose';
        }
        else if(computerMove === 'Paper'){
            result = 'Tie';
        }
    }
    
    if (result === 'You Win'){
        Score.Win++;
    }
    else if(result === 'You Lose'){
        Score.Lose++;
    }
    else if(result === 'Tie'){
        Score.Tie++;
    }
    
    localStorage.setItem('Score', JSON.stringify(Score));
    
    UpdateScore();
    document.querySelector('.js-moves').innerHTML = `You Played <img src="Images/${playerMove}-emoji.png" class= "rps"> And Computer Played <img src="Images/${computerMove}-emoji.png" class= "rps">`;
    document.querySelector('.js-result').innerHTML = result;
}

function Reset(){
    Score.Lose = 0;
    Score.Win = 0;
    Score.Tie = 0;
    localStorage.removeItem('Score');
    UpdateScore();
}