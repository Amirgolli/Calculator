const screenCalculator=document.querySelector('.screen');
function addChar(input){
    screenCalculator.value+=input;
}

function clearAll(){
    screenCalculator.value='';
}

function clearLast(){
    if(screenCalculator.value.length>0){
        screenCalculator.value=screenCalculator.value.slice(0,-1);
    }
}

function calculate(){
    try{
        screenCalculator.value=eval(screenCalculator.value);
    }
    catch(error){
        screenCalculator.value ="Error,please clear";
        
        
    }
}

