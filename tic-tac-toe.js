window.addEventListener('DOMContentLoaded',function(){
    var boardDivs = document.getElementById("board").querySelectorAll("div");
    boardDivs = [...boardDivs]
    boardDivs.map((board)=>{
        board.classList.add('square');
    })
    
    var lastState = 'O';
    const gameState = [];

    function addInput(board){
        if(board.innerText.includes('O')||board.innerText.includes('X')) return;
        if(lastState==='X'){
            board.classList.add('O')
            board.innerText = 'O'
            lastState = 'O'
            gameState.push('O')
        } else if(lastState==='O'){
            board.classList.add('X')
            board.innerText = 'X'
            lastState = 'X'
            gameState.push('X')
        }
        console.log(gameState)
    }
    
    var boards = document.getElementsByClassName("square");
    boards=[...boards]

    boards.map((board)=>{
        board.addEventListener('click', function(){
            addInput(board)
        })
        board.addEventListener('mouseover',function(){
            board.classList.add('hover')
        })
        board.addEventListener('mouseleave',function(){
            board.classList.remove('hover')
        })
    })
})
