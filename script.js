const screenCalculator=document.querySelector('.screen');
const icon=document.querySelector('#historyIcon');
const historyList = document.querySelector('#historyList');
const historyContainer = document.querySelector('#historyContainer');
const closeIcon = document.querySelector('#close');
const btn = document.querySelectorAll('.btn');

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
let res;

function calculate(){
    try{
        const test=eval(screenCalculator.value);
        res=screenCalculator.value +'='+ test;
        screenCalculator.value=test;
        history();
    }
    catch(error){
        screenCalculator.value ="Error,please clear";
        
        
    }
}



icon.addEventListener('click',togglePage);
closeIcon.addEventListener('click',backPage);



function togglePage(){
    if(historyContainer.style.display=='none'){
        screenCalculator.value='';
        historyContainer.style.display ='block';
        btn.forEach(button => button.style.display = 'none');
  
        
    }else{
        historyContainer.style.display ='none';
    }
}

function backPage(){
    historyContainer.style.display ='none';
    btn.forEach(button => button.style.display = 'block');
}





function history() {

    const data = { "text": res };

    fetch('https://pm2-tenacious-feynman.circumeo-apps.net/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
        console.log(" server:", data);


        if (data.success) {
            const p = document.createElement('p');
            p.textContent = data.success;
            historyContainer.appendChild(p);
        } else {
            historyList.innerHTML = '<p>you do not have any history</p>';
        }
    })
    .catch(error => {
        console.error(" error for gat data:", error);
        historyList.innerHTML = '<p>error for gat data</p>';
    });
}