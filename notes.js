//TIC TAC TOE

//whiteboarding

//need 9 squares 
    //aligned in columns and rows
//two players -> X and O
    //specify who goes first OR choose who goes first
//win condition -> three of the same in a row
//have player's turn on screen and have them be able to mark the board with their X or O
    //once a square is taken it cannot be replaced with another X or O
    //turns must alternate

//end game logic -> when the board is full with no winner, it is a tie and the game ends
    // 9 turns max
    //tell players who has won OR
    //tell players who has lost

//game restart option
//scoreboard for multiple games to show wins/losses


//pseudocoding

//9 squares -> divs or buttons
    //div.addEventListeners on each to add X or O
    //style squares with display: flexbox or grid to make rows AND columns

//value of turns / turn counter
    //modulus to control trun X or O
    //turns % 2 === 0 ... player1(X)
    //if turns % 2 !== 0 ... player2(O)
    //if turns === 9 restart game button pops up

    let turns = 0
    turns++

    turns % 2 == 0 ? X : O
    //conditional or ternary operator
    //a condition followed by a question mark (?), 
    //then an expression to execute if the condition is truthy followed by a colon (:),
    //and finally the expression to execute if the condition is falsy. 