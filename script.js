// ==========================================
// CODE THAT CHOOSES (Decisions Layer)
// ==========================================

// 1. Rating label decision (if / else if / else chain)
// Declaring a direct numeric rating out of 5 as required
const placeRating = Number(4.5); 
let ratingLabel = "";

if (placeRating >= 4) {
  ratingLabel = "Highly recommended";
} else if (placeRating >= 2.5) {
  ratingLabel = "Worth a visit";
} else {
  ratingLabel = "Only if you're nearby";
}

const ratingElement = document.getElementById("rating-label");
if (ratingElement) {
  ratingElement.textContent = `⭐ Rating: ${ratingLabel}`;
}

// 2. Budget check decision (&&, ===, and ternary)
const priceLevel = Number(2); // 1 = cheap, 2 = moderate, 3 = expensive
const isOpenNow = true;       // Place open status

// Must meet both conditions: priceLevel <= 2 AND open right now
const isGoodBudgetOption = (priceLevel <= 2 && isOpenNow === true);
const budgetText = isGoodBudgetOption ? "Good option right now" : "Maybe another time";

const budgetElement = document.getElementById("budget-status");
if (budgetElement) {
  budgetElement.textContent = `💡 Budget: ${budgetText}`;
}

// 3. Distance note decision (boolean, ===, and ternary)
const isWalkingDistance = true;

// Strict equality check with ternary operator
const distanceText = (isWalkingDistance === true) ? "Walking distance" : "Better to commute";

const distanceElement = document.getElementById("distance-note");
if (distanceElement) {
  distanceElement.textContent = `🚶 Distance: ${distanceText}`;
}

// Console verification
console.log("Rating Label:", ratingLabel);
console.log("Budget Decision:", budgetText);
console.log("Distance Decision:", distanceText);