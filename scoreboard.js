// scoreboard.js

// These variables store the current scores for the home team and the guest team.
// They start at 0 and will update throughout the game.
let homeScore = 0;
let guestScore = 0;

// Here, we select the HTML elements that display the scores to the user.
// We use the DOM method getElementById to find the elements by their IDs.
const homeScoreDisplay = document.getElementById('home-score-display');
const guestScoreDisplay = document.getElementById('guest-score-display');

// This function updates the score displays in the HTML to match the current score values.
// By calling this function, we ensure the user interface always shows the latest scores.
function updateScoreDisplay() {
  homeScoreDisplay.textContent = homeScore;
  guestScoreDisplay.textContent = guestScore;
}

// This function increases the home team's score by a certain amount (passed as 'amount'),
// and then updates the display so the new score appears on the webpage.
function incrementHome(amount) {
  homeScore += amount;
  updateScoreDisplay();
}

// This function increases the guest team's score by a certain amount (passed as 'amount'),
// and then updates the display so the new score appears on the webpage.
function incrementGuest(amount) {
  guestScore += amount;
  updateScoreDisplay();
}

// This function resets both the home and guest scores to zero,
// and then refreshes the display so it shows 0 for both teams.
function resetScores() {
  homeScore = 0;
  guestScore = 0;
  updateScoreDisplay();
}
