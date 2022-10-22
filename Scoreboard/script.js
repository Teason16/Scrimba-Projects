let scoreHome = 0;
let scoreGuest = 0;
let homeBoard = document.getElementById("score-home");
let guestBoard = document.getElementById("score-guest")

function add1H() {
scoreHome += 1
	homeBoard.textContent = scoreHome

	console.log(scoreHome)
}
function add2H() {
scoreHome += 2
	homeBoard.textContent = scoreHome

	console.log(scoreHome)
}
function add3H() {
scoreHome += 3
	homeBoard.textContent = scoreHome

	console.log(scoreHome)
}
function add1B() {
scoreGuest += 1
	guestBoard.textContent = scoreGuest

	console.log(scoreGuest)
}
function add2B() {
scoreGuest += 2
	guestBoard.textContent = scoreGuest

	console.log(scoreGuest)
}
function add3B() {
scoreGuest += 3
	guestBoard.textContent = scoreGuest

	console.log(scoreGuest)
}
function reset() {
	scoreHome = 0
	scoreGuest = 0
	homeBoard.textContent = scoreHome
	guestBoard.textContent = scoreGuest
}