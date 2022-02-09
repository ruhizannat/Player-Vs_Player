(function(){
    const inputElm = document.querySelector('#input');
    const formElm = document.querySelector('form');
    const winScoreElm = document.querySelector('.winScore');
    const p1BtnElm = document.querySelector('.p1Btn');
    const p1ScoreElm = document.querySelector('.p1Score');
    const p2BtnElm = document.querySelector('.p2Btn');
    const p2ScoreElm = document.querySelector('.p2Score');
    const resetElm = document.querySelector('.reset');
    
    // console.log(formElm);
    
    let winScore = 20; // data layer
    let p1Score = 0;
    let p2Score = 0;
    let turn = 'player1'
    
    
    // updated view data 
    winScoreElm.textContent= winScore;
    p1ScoreElm.textContent = p1Score;
    p2ScoreElm.textContent = p2Score;


    // generate random number
    function generateNum(max){
    return Math.floor(Math.random() *max +1);
    }


    function validatedInput(inputVal){
        if(inputVal === '' || inputVal <1){
            if(!document.querySelector('.input-valid')){
                formElm.insertAdjacentHTML("beforebegin", `<div class="alert alert-danger text-center input-valid" role="alert">
            please input your valid number</div>`)
            }else if(document.querySelector('.input-valid')){
                 document.querySelector('.input-valid').remove();
            }
        }
    }
    
    formElm.addEventListener('submit', (e)=>{
        e.preventDefault();
        const inputVal =+inputElm.value; 
        // validation
        validatedInput(inputVal);
        // data layer
        winScore = +inputElm.value; 
        //view layer
        winScoreElm.textContent=winScore;
        // console.log(inputElm.value);
    
        // clearing the input
        inputElm.value = '';
    
        // change to all default state
        initialPlayState();
        
    });
    p1BtnElm.addEventListener('click', (e)=>{
        if(turn === 'player1'){
            p1Score = generateNum(winScore);
         //view layer
         p1ScoreElm.textContent = p1Score;
         turn = 'player2';
         p1BtnElm.setAttribute('disabled', 'disabled');
         p2BtnElm.removeAttribute('disabled');
        //  check winner state
        checkWinner();
    
        }
    
    });
    
    
    function checkWinner(){
       isP1Winner = (winScore === p1Score);
       isP2Winner = (winScore === p2Score);
       console.log(isP1Winner, isP2Winner);
       if(isP1Winner || isP2Winner){
        p1BtnElm.setAttribute('disabled', 'disabled');
        p2BtnElm.setAttribute('disabled', 'disabled');
       }
       displayWinner(isP1Winner, isP2Winner)
    }
    
    function displayWinner(p1WinState, p2WinState){
        
        if(p1WinState){
            formElm.insertAdjacentHTML("beforebegin", `<div class="alert alert-success text-center winnerMsg" role="alert">
            player1 is winner</div>`)
        }else if(p2WinState){
            formElm.insertAdjacentHTML("beforebegin", `<div class="alert alert-success text-center winnerMsg" role="alert">
            player1 is winner</div>`)
        }
    }
    
    
    p2BtnElm.addEventListener('click', (e)=>{
        if(turn === 'player2'){
            p2Score = generateNum(winScore);
         //view layer
         p2ScoreElm.textContent = p2Score;
         turn = 'player1';
         p2BtnElm.setAttribute('disabled', 'disabled');
         p1BtnElm.removeAttribute('disabled');
    
        }
    
    });
    resetElm.addEventListener('click', (e)=>{
         winScore = 20; // data layer
        initialPlayState();
    });
    
    function initialPlayState(){
        p1Score = 0;
        p2Score = 0;
        turn = 'player1'
        winScoreElm.textContent= winScore;
        p1ScoreElm.textContent = p1Score;
        p2ScoreElm.textContent = p2Score;
        p1BtnElm.removeAttribute('disabled');
        p2BtnElm.removeAttribute('disabled');
    
        // reset winning message
        if(document.querySelector('.winnerMsg')){
            document.querySelector('.winnerMsg').remove();
        }
    }
    
    
    




})()