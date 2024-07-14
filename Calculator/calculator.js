document.addEventListener('DOMContentLoaded', (event) => {
    const display = document.getElementById("display");

    window.AppendToDisplay =  function(input){
        display.value += input;
    }

    window.Clear = function(){
        display.value = " ";
    }

    window.Equal = function(){
        try{
            display.value = eval(display.value);
        }
        catch(error){
            display.value = "Error";
        }
    }
});