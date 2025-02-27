// Track scores in global variables
let homeScore = 0;
let guestScore = 0;

// Get references to the score displays
const homeScoreDisplay = document.getElementById('home-score-display');
const guestScoreDisplay = document.getElementById('guest-score-display');

// Update the DOM to reflect the current score
function updateScoreDisplay() {
  homeScoreDisplay.textContent = homeScore;
  guestScoreDisplay.textContent = guestScore;
}

// Functions called by the "onclick" attributes
function incrementHome(amount) {
  homeScore += amount;
  updateScoreDisplay();
}

function incrementGuest(amount) {
  guestScore += amount;
  updateScoreDisplay();
}

function resetScores() {
  homeScore = 0;
  guestScore = 0;
  updateScoreDisplay();
}
