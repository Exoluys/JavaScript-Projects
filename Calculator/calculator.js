const display = document.getElementById("display");
const body = document.body;

AppendToDisplay =  function(input){
    display.value += input;
}

Clear = function(){
    display.value = " ";
}

Equal = function(){
    try{
        display.value = eval(display.value);
    }
    catch(error){
        display.value = "Error";
    }
}

function lights(){
    body.classList.toggle("lightmode");
}