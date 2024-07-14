let score = JSON.parse(localStorage.getItem('score')) || { 
    heads: 0, 
    tails: 0
};

function computerplayz(){
    let random= Math.random();
    let computerMove = random > 0.5 ? 'HEADS' : 'TAILS';

    return computerMove;
}

function script1 (PlayerMove){
    let computerMove = computerplayz();
    let result = '';

    if(PlayerMove === 'HEADS'){
        if(computerMove === 'HEADS'){
            result = 'U Win';
        }
        else if(computerMove === 'TAILS'){
            result = 'U Lose';
        }
    }

    if(PlayerMove === 'TAILS'){
        if(computerMove === 'HEADS'){
            result = 'U Lose';
        }
        else if(computerMove === 'TAILS'){
            result = 'U Win';
        }
    }

    if (result === 'U Win'){
        score.heads++;
    }
    else if(result === 'U Lose') {
        score.tails++;
    }

   localStorage.setItem('score', JSON.stringify(score));

    alert(`The Result is ${result}.
Heads: ${score.heads} Tails: ${score.tails}`);

    console.log(computerMove);
}