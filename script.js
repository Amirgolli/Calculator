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

function calculate(){
    try{
        screenCalculator.value=eval(screenCalculator.value);
    }
    catch(error){
        screenCalculator.value ="Error,please clear";
        
        
    }
}

icon.addEventListener('click',togglePage);
closeIcon.addEventListener('click',backPage);



function togglePage(){
    if(historyContainer.style.display=='none'){
        
        historyContainer.style.display ='block';
        btn.forEach(button => button.style.display = 'none');
        history();
        
    }else{
        historyContainer.style.display ='none';
    }
}

function backPage(){
    historyContainer.style.display ='none';
    btn.forEach(button => button.style.display = 'block');
}





function history(){
    const data = {
        "text": screenCalculator.value 
    };
    
    fetch('https://pm2-tenacious-feynman.circumeo-apps.net/history', {
        method: 'POST', 
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data) 
    })
    .then(response => response.json())
    .then(data => {
        historyList.innerHTML = ''; 
        data.forEach(item => {
            const p = document.createElement('p');
            p.textContent = item; 
            historyList.appendChild(p);
        });
    })
    .catch(error => {
        historyList.innerHTML = '<p>خطا</p>';
    });
};
    
    

