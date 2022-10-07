window.addEventListener('DOMContentLoaded',function(){
    var boardDivs = document.getElementById("board").querySelectorAll("div");
    boardDivs = [...boardDivs]
    boardDivs.map((board)=>{
        board.classList.add('square');
    })
})