// game board
const gameBoard = document.querySelector('#game-board')
// message board
const messageBoard = document.querySelector('#message-board')
messageBoard.innerHTML = 'X Starts, GO!'
//reset button
const resetBtn = document.querySelector('#reset')
let isPlayerOne = true
let currentPlayedBoard = ['', '', '', '', '', '', '', '', '']
let isGameOver = false
let moveCount = 0
const checkWin = () => {
	const winX1 =
		currentPlayedBoard[`cell${0}`] === 'x' &&
		currentPlayedBoard[`cell${1}`] === 'x' &&
		currentPlayedBoard[`cell${2}`] === 'x'
	const winX2 =
		currentPlayedBoard[`cell${0}`] === 'x' &&
		currentPlayedBoard[`cell${3}`] === 'x' &&
		currentPlayedBoard[`cell${6}`] === 'x'
	const winX3 =
		currentPlayedBoard[`cell${0}`] === 'x' &&
		currentPlayedBoard[`cell${4}`] === 'x' &&
		currentPlayedBoard[`cell${8}`] === 'x'
	const winX4 =
		currentPlayedBoard[`cell${1}`] === 'x' &&
		currentPlayedBoard[`cell${4}`] === 'x' &&
		currentPlayedBoard[`cell${7}`] === 'x'
	const winX5 =
		currentPlayedBoard[`cell${2}`] === 'x' &&
		currentPlayedBoard[`cell${5}`] === 'x' &&
		currentPlayedBoard[`cell${8}`] === 'x'
	const winX6 =
		currentPlayedBoard[`cell${2}`] === 'x' &&
		currentPlayedBoard[`cell${4}`] === 'x' &&
		currentPlayedBoard[`cell${6}`] === 'x'
	const winX7 =
		currentPlayedBoard[`cell${3}`] === 'x' &&
		currentPlayedBoard[`cell${4}`] === 'x' &&
		currentPlayedBoard[`cell${5}`] === 'x'
	const winX8 =
		currentPlayedBoard[`cell${6}`] === 'x' &&
		currentPlayedBoard[`cell${7}`] === 'x' &&
		currentPlayedBoard[`cell${8}`] === 'x'
	const winO1 =
		currentPlayedBoard[`cell${0}`] === 'o' &&
		currentPlayedBoard[`cell${1}`] === 'o' &&
		currentPlayedBoard[`cell${2}`] === 'o'
	const winO2 =
		currentPlayedBoard[`cell${0}`] === 'o' &&
		currentPlayedBoard[`cell${3}`] === 'o' &&
		currentPlayedBoard[`cell${6}`] === 'o'
	const winO3 =
		currentPlayedBoard[`cell${0}`] === 'o' &&
		currentPlayedBoard[`cell${4}`] === 'o' &&
		currentPlayedBoard[`cell${8}`] === 'o'
	const winO4 =
		currentPlayedBoard[`cell${1}`] === 'o' &&
		currentPlayedBoard[`cell${4}`] === 'o' &&
		currentPlayedBoard[`cell${7}`] === 'o'
	const winO5 =
		currentPlayedBoard[`cell${2}`] === 'o' &&
		currentPlayedBoard[`cell${5}`] === 'o' &&
		currentPlayedBoard[`cell${8}`] === 'o'
	const winO6 =
		currentPlayedBoard[`cell${2}`] === 'o' &&
		currentPlayedBoard[`cell${4}`] === 'o' &&
		currentPlayedBoard[`cell${6}`] === 'o'
	const winO7 =
		currentPlayedBoard[`cell${3}`] === 'o' &&
		currentPlayedBoard[`cell${4}`] === 'o' &&
		currentPlayedBoard[`cell${5}`] === 'o'
	const winO8 =
		currentPlayedBoard[`cell${6}`] === 'o' &&
		currentPlayedBoard[`cell${7}`] === 'o' &&
		currentPlayedBoard[`cell${8}`] === 'o'

    ++moveCount
    if (moveCount === 9 ) {
        messageBoard.innerText = "it's a draw"
        return true
    }

	if (winX1 || winX2 || winX3 || winX4 || winX5 || winX6 || winX7 || winX8) {
		messageBoard.innerText = 'Winner is X'
		return true
	} else if (
		winO1 ||
		winO2 ||
		winO3 ||
		winO4 ||
		winO5 ||
		winO6 ||
		winO7 ||
		winO8
	) {
        messageBoard.innerText = 'Winner is O'
        return true
	}
}

const playSpot = (event) => {
	
	const playedSpot = event.target.getAttribute('id')
	const currentPlayer = isPlayerOne ? 'x' : 'o'
    if (isGameOver) return
	if (!currentPlayedBoard[playedSpot]) {
        messageBoard.innerText = ''
		isPlayerOne = !isPlayerOne
		event.target.innerText = currentPlayer
		currentPlayedBoard[playedSpot] = currentPlayer
		isGameOver = checkWin()
	} else {
		messageBoard.innerText = 'Choose another'
	}

}

const makeBoard = () => {

    while(gameBoard.firstChild) {
        gameBoard.removeChild(gameBoard.firstChild)
    }

	for (let i = 0; i < 9; i++) {
		
		const playableSpot = document.createElement('div')
		
		playableSpot.setAttribute('id', `cell${i}`)
		
		playableSpot.classList.add('playableSpot')
		
		gameBoard.appendChild(playableSpot)
		
		playableSpot.addEventListener('click', playSpot)
	}
}

const resetGame = () => {
    isPlayerOne = true
	currentPlayedBoard = ['', '', '', '', '', '', '', '', '']
	isGameOver = false
	moveCount = 0
    messageBoard.innerText = 'X starts'
    makeBoard()
}

document.addEventListener('DOMContentLoaded', makeBoard)
resetBtn.addEventListener('click', resetGame)