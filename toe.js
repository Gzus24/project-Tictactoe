const squares = Array.from(document.querySelectorAll('#board div'))
const message = document.querySelector('h2');
const clearBoard = document.getElementById('clear');
let player = 'O'
let winner;

function board(){
    squares.forEach(function(e){
        e.onclick = ()=>{
            e.textContent = player = player === 'O' ? 'X' : 'O';
            e.textContent === 'X' ? message.textContent = "It's O's Turn !" : 
            message.textContent = "It's X's Turn !";
            winner = win();
            if(winner){
                message.textContent = `${player} Wins!`
            } else if(draw()){
                message.textContent = "Tie Game!"
            }
        }
    })
}
board();

function win(){
    if(squares[0].textContent === player && squares[1].textContent === player && squares[2].textContent === player){
        squares[0].style.color = 'red',squares[1].style.color = 'red',squares[2].style.color = 'red';return player};
        if(squares[3].textContent === player && squares[4].textContent === player && squares[5].textContent === player){
            squares[3].style.color = 'red',squares[4].style.color = 'red',squares[5].style.color = 'red';return player};
            if(squares[6].textContent === player && squares[7].textContent === player && squares[8].textContent === player){
                squares[6].style.color = 'red',squares[7].style.color = 'red',squares[8].style.color = 'red';return player};
                if(squares[0].textContent === player && squares[3].textContent === player && squares[6].textContent === player){
                    squares[0].style.color = 'red',squares[3].style.color = 'red',squares[6].style.color = 'red';return player};
                    if(squares[1].textContent === player && squares[4].textContent === player && squares[7].textContent === player){
                        squares[1].style.color = 'red',squares[4].style.color = 'red',squares[7].style.color = 'red';return player};
                        if(squares[2].textContent === player && squares[5].textContent === player && squares[8].textContent === player){
                            squares[2].style.color = 'red',squares[5].style.color = 'red',squares[8].style.color = 'red';return player};
                            if(squares[0].textContent === player && squares[4].textContent === player && squares[8].textContent === player){
                                squares[0].style.color = 'red',squares[4].style.color = 'red',squares[8].style.color = 'red';return player};
                                if(squares[2].textContent === player && squares[4].textContent === player && squares[6].textContent === player){
                                    squares[2].style.color = 'red',squares[4].style.color = 'red',squares[6].style.color = 'red';return player}3
}

function draw(){
    if(squares[0].textContent !== '' && squares[1].textContent !== '' &&
    squares[2].textContent !== '' && squares[3].textContent !== '' &&
    squares[4].textContent !== '' && squares[5].textContent !== '' &&
    squares[6].textContent !== '' && squares[7].textContent !== '' &&
    squares[8].textContent !== ''){return true}
}
    clearBoard.onclick = ()=>{
        squares.forEach(function(e){
            e.textContent = '';
            e.style.color = 'black';
        })
    }