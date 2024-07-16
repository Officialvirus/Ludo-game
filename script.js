// Game variables
let gameBoard = [];
let playerPieces = [];
let currentPlayer = 0;
let diceResult = 0;

// Generate game board grid
for (let i = 0; i < 15; i++) {
    gameBoard.push([]);
    for (let j = 0; j < 15; j++) {
        gameBoard[i].push({
            x: i,
            y: j,
            occupied: false,
        });
    }
}

// Generate player pieces
for (let i = 0; i < 4; i++) {
    playerPieces.push({
        id: i,
        x: 0,
        y: 0,
        color: getRandomColor(),
    });
}

// Roll dice function
document.getElementById("roll-dice").addEventListener("click", rollDice);

function rollDice() {
    diceResult = Math.floor(Math.random() * 6) + 1;
    document.getElementById("dice-result").innerHTML = `You rolled a ${diceResult}`;
    // Update game logic here
}

// Game logic functions
function movePiece(piece, distance) {
    //
