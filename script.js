// === Part 1: Event Handling ===
// Button click greeting
document.getElementById("greetBtn").addEventListener("click", function() {
  document.getElementById("greetMessage").textContent =
    "👋 Hey gamer! Ready to level up with the squad?";
});

// === Part 2: Interactive Elements ===

// Light/Dark mode toggle
document.getElementById("toggleMode").addEventListener("click", function() {
  document.body.classList.toggle("dark-mode");
});

// Squad Score Counter
let count = 0;
document.getElementById("counterBtn").addEventListener("click", function() {
  count++;
  document.getElementById("count").textContent = count;
});

// Collapsible FAQ
const faqQuestions = document.querySelectorAll(".faq-question");
faqQuestions.forEach(function(question) {
  question.addEventListener("click", function() {
    const answer = this.nextElementSibling;
    answer.style.display = (answer.style.display === "none") ? "block" : "none";
  });
});

// === Bonus Feature: Random Gamer Quote Generator ===
const quotes = [
  "“Victory is reserved for those who are willing to pay its price.” – Sun Tzu",
  "“The right man in the wrong place can make all the difference in the world.” – Half-Life 2",
  "“Praise the Sun!” – Dark Souls",
  "“No matter how bad it gets, you can always reload.” – Gamer Wisdom",
  "“Games don’t make you violent, lag does.” – Anonymous"
];

document.getElementById("quoteBtn").addEventListener("click", function() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  document.getElementById("quoteDisplay").textContent = quotes[randomIndex];
});

// === Part 3: Form Validation ===
document.getElementById("squadForm").addEventListener("submit", function(e) {
  e.preventDefault(); // Prevent page reload

  // Clear old messages
  document.getElementById("nameError").textContent = "";
  document.getElementById("emailError").textContent = "";
  document.getElementById("passwordError").textContent = "";
  document.getElementById("formSuccess").textContent = "";

  let isValid = true;

  // Gamer Tag validation
  const gamerName = document.getElementById("gamerName").value.trim();
  if (gamerName.length < 3) {
    document.getElementById("nameError").textContent =
      "⚠️ Gamer tag must be at least 3 characters long.";
    isValid = false;
  }

  // Email validation
  const email = document.getElementById("email").value.trim();
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    document.getElementById("emailError").textContent =
      "⚠️ Enter a valid email to receive squad invites.";
    isValid = false;
  }

  // Password validation
  const password = document.getElementById("password").value;
  if (password.length < 6) {
    document.getElementById("passwordError").textContent =
      "⚠️ Password must be at least 6 characters for security.";
    isValid = false;
  }

  // Success message
  if (isValid) {
    document.getElementById("formSuccess").textContent =
      `🔥 Welcome ${gamerName}! You’ve officially joined the squad. Check your email for battle updates.`;
    this.reset();
  }
});
