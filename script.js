// 1. Declares a const for guide name and current year
const guideName = "Rutchii's Compshop Guide";
const currentYear = 2026;

// 2. Declares a let for a running count, starting at 0
let runningCount = 0;

// Sample data arrays for our computed calculations (e.g., ratings or review scores)
const ratings = [4.8, 4.9, 4.7, 4.6, 5.0, 4.8];
runningCount = ratings.length; // Total places reviewed/featured

// 🧮 Compute a small calculation (Average rating)
const averageRating = (ratings.reduce((sum, current) => sum + current, 0) / runningCount).toFixed(1);

// 3. Uses document.getElementById(...).textContent to write the guide name into an element
const titleElement = document.getElementById("guide-title");
if (titleElement) {
  titleElement.textContent = `${guideName} 🎮 🗺️`;
}

// 4. Writes a dynamic copyright line into your footer
const footerElement = document.getElementById("footer-copyright");
if (footerElement) {
  footerElement.textContent = `© ${currentYear} ${guideName}. All rights reserved.`;
}

// Display the calculated calculation on the page
const statsElement = document.getElementById("computed-stats");
if (statsElement) {
  statsElement.textContent = `✨ Reviewed ${runningCount} spots with an average rating of ${averageRating} / 5.0! ✨`;
}

// 5. Logs at least three labelled values to the console using console.log('label:', value)
console.log("Guide Name:", guideName);
console.log("Current Year:", currentYear);
console.log("Running Count (Total Places):", runningCount);
console.log("Average Computed Rating:", averageRating);