const screenCalculator=document.querySelector('.screen');
function addChar(input){
    screenCalculator.value+=input;
}

function clearAll(){
    screenCalculator.value='';
}

function calculate(){
    try{
        screenCalculator.value=eval(screenCalculator.value);
    }
    catch(error){
        screenCalculator.value ="Error,please clear";
        
        
    }
}

