// JavaScript for Dynamic Functionality

// Select the elements for theme toggle
const body = document.body;
const themeToggle = document.createElement("button");

// Set up theme toggle button
themeToggle.innerText = "Toggle Theme";
themeToggle.style.position = "fixed";
themeToggle.style.bottom = "20px";
themeToggle.style.right = "20px";
themeToggle.style.padding = "10px 20px";
themeToggle.style.backgroundColor = "#fddb3a";
themeToggle.style.border = "none";
themeToggle.style.borderRadius = "5px";
themeToggle.style.cursor = "pointer";
themeToggle.style.color = "black";
themeToggle.style.fontWeight = "bold";

// Append the button to the body
body.appendChild(themeToggle);

// Add event listener for theme toggle
themeToggle.addEventListener("click", () => {
  if (body.style.backgroundColor === "white") {
    body.style.backgroundColor = "black";
    body.style.color = "white";
    themeToggle.style.backgroundColor = "#fddb3a";
    themeToggle.style.color = "black";
  } else {
    body.style.backgroundColor = "white";
    body.style.color = "black";
    themeToggle.style.backgroundColor = "black";
    themeToggle.style.color = "white";
  }
});

// Scroll to Top Button
const scrollToTopButton = document.createElement("button");
scrollToTopButton.innerText = "Scroll to Top";
scrollToTopButton.style.position = "fixed";
scrollToTopButton.style.bottom = "60px";
scrollToTopButton.style.right = "20px";
scrollToTopButton.style.padding = "10px 20px";
scrollToTopButton.style.backgroundColor = "#fddb3a";
scrollToTopButton.style.border = "none";
scrollToTopButton.style.borderRadius = "5px";
scrollToTopButton.style.cursor = "pointer";
scrollToTopButton.style.display = "none"; // Initially hidden

// Append the Scroll to Top button to the body
body.appendChild(scrollToTopButton);

// Show or hide the Scroll to Top button based on scroll position
window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    scrollToTopButton.style.display = "block";
  } else {
    scrollToTopButton.style.display = "none";
  }
});

// Scroll to top when the button is clicked
scrollToTopButton.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Adjust background animation speed dynamically
const background = document.querySelector('.animated-background');

document.addEventListener('keydown', (event) => {
  if (event.key === '+') {
    background.style.animationDuration = '5s'; // Speed up
  } else if (event.key === '-') {
    background.style.animationDuration = '15s'; // Slow down
  }
});


