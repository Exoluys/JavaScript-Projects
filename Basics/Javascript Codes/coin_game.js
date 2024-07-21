const score = {
    heads: 0,
    tails: 0
};

function script1 (){
    let random= Math.random();
    let result = random > 0.5 ? 'HEADS' : 'TAILS';

    if (result === 'HEADS'){
        score.heads++;
    }
    else {
        score.tails++;
    }

    alert(`The Result is ${result}.
Heads: ${score.heads} Tails: ${score.tails}`);

    console.log(result);
}