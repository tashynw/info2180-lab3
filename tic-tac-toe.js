window.addEventListener('DOMContentLoaded',function(){
    //load the board
    var boardDivs = document.getElementById("board").querySelectorAll("div");
    boardDivs = [...boardDivs]
    boardDivs.map((board)=>{
        board.classList.add('square');
    })

    //logic used to control match state
    var lastState = 'O';
    var gameState = ['1','2','3','4','5','6','7','8','9'];
    const winningCombination = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]

    function isGameFinished(){
        for(let i=0;i<winningCombination.length;i++){
            const winningSet = winningCombination[i];
            if((gameState[winningSet[0]]===gameState[winningSet[1]]) && (gameState[winningSet[1]]===gameState[winningSet[2]])) return true   
        }
        return false
    }

    function endGame(winner){
        var statusDiv = document.getElementById("status");
        statusDiv.innerText = `Congratulations! ${winner} is the Winner!`;
        statusDiv.classList.add('you-won')
        
        //preventing user from cheating
        var boards = document.getElementsByClassName("square");
        boards=[...boards]
        boards.map((board,i)=>{
            board.style.pointerEvents = 'none'
            board.removeEventListener('click',function(){addInput(board,i)})
        })
    }

    function addInput(board,i){
        if(board.innerText.includes('O')||board.innerText.includes('X')) return;
        if(lastState==='X'){
            board.classList.add('O')
            board.innerText = 'O'
            lastState = 'O'
            gameState[i] = 'O'
        } else if(lastState==='O'){
            board.classList.add('X')
            board.innerText = 'X'
            lastState = 'X'
            gameState[i] = 'X'
        }
        if(isGameFinished()) return endGame(gameState[i])
    }
    
    //adding listeners to the boards
    var boards = document.getElementsByClassName("square");
    boards=[...boards]

    boards.map((board,i)=>{
        board.addEventListener('click', function(){
            addInput(board,i)
        })
        board.addEventListener('mouseover',function(){
            board.classList.add('hover')
        })
        board.addEventListener('mouseleave',function(){
            board.classList.remove('hover')
        })
    })

    //new game functionality
    var button = document.getElementsByClassName('btn')[0];
    button.addEventListener('click',function(){
        boards.map((board,i)=>{
            board.innerText = ''
            board.classList.remove('O')
            board.classList.remove('X')
            board.style.pointerEvents = 'auto'
        })
        var statusDiv = document.getElementById("status");
        statusDiv.innerText = `Move your mouse over a square and click to play an X or an O.`;
        statusDiv.classList.remove('you-won')
        gameState = ['1','2','3','4','5','6','7','8','9'];
        lastState = 'O';
    })
})
