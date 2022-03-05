allButtons = document.querySelectorAll(".box")
let turn = 0
resetButton = document.querySelector("#reset")
let playerX = "X"
let playerO = "O"
let scoreX = 0
let scoreO = 0
let currentPlayer = document.querySelector("#whichPlayerTurn").innerText

resetButton.addEventListener('click', event => {
    event.preventDefault()
    turn = 0
    for (let i=0; i<9; i++){
        allButtons[i].innerText = ""
    }
    resetGame(event)
})

for (let i=0; i<9; i++){
    allButtons[i].addEventListener('click', event => {
        event.preventDefault()
        console.log("click!")
        playGame(event)
    })
}

function gameOver (event) {
    if(turn<=9){
        if (box1.innerText === box2.innerText && box1.innerText === box3.innerText &&
            box1.innerText != "" && box2 != "" && box3.innerText != "" || 
            box4.innerText === box5.innerText && box4.innerText === box6.innerText &&
            box4.innerText != "" && box5 != "" && box6.innerText != "" || 
            box7.innerText === box8.innerText && box7.innerText === box9.innerText &&
            box7.innerText != "" && box8 != "" && box9.innerText != "" ||
            box1.innerText === box4.innerText && box1.innerText === box7.innerText &&
            box1.innerText != "" && box4 != "" && box7.innerText != "" ||
            box2.innerText === box5.innerText && box2.innerText === box8.innerText &&
            box2.innerText != "" && box5 != "" && box8.innerText != "" ||
            box3.innerText === box6.innerText && box3.innerText === box9.innerText && 
            box3.innerText != "" && box6 != "" && box9.innerText != "" ||
            box1.innerText === box5.innerText && box1.innerText === box9.innerText &&
            box1.innerText != "" && box5 != "" && box9.innerText != "" ||
            box3.innerText === box5.innerText && box3.innerText === box7.innerText &&
            box3.innerText != "" && box5 != "" && box7.innerText != "" ){
                let winningPlayer = event.target.innerText
                setTimeout(function() {
                    alert(`GAME OVER, PLAYER ${winningPlayer} WINS`)}, 200)
                function updateScore (event) {
                if (winningPlayer === "X"){
                    document.querySelector("#scoreX").innerText = scoreX+=1
                } else if (winningPlayer === "O"){
                    document.querySelector("#scoreO").innerText = scoreO +=1
                }
            }    
            updateScore()
        }
    } else if(turn>=9){
        setTimeout(function() {
            alert(`GAME OVER, IT'S A TIE`)}, 200)
    }else if(turn>=8)
        setTimeout(function() {
            alert(`GAME OVER, IT'S A TIE`)}, 200)
}

function resetGame () {
    let response = prompt("Which player will go first (X or O)?")
    player = response
    if (player == "O") {
        turn+=1
        currentPlayer = "O"
    } else if (player == "X") {
        currentPlayer = "X"
    }
}

function playGame (event) {
    if (turn % 2 === 0 && event.target.innerText == ""){
        event.target.innerText = `${playerX}`
        currentPlayer = `${playerO}`
        turn++
        gameOver(event)
        } else if(turn % 2 != 0 && event.target.innerText == ""){
        event.target.innerText = `${playerO}`
        currentPlayer = `${playerX}`
        turn++
        gameOver(event)
        }
}
