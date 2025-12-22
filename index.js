const toggle = document.getElementById("style-toggle");
const body = document.body;

/* Restore saved mode */
const savedStyle = localStorage.getItem("style");

if (savedStyle === "plaintext") {
  body.classList.add("plaintext");
  toggle.textContent = "TXT";
} else {
  toggle.textContent = "⌘";
}

/* Toggle handler */
toggle.addEventListener("click", () => {
  // Trigger glitch animation
  body.classList.add("transitioning");

  setTimeout(() => {
    const isPlain = body.classList.toggle("plaintext");

    // Persist choice
    localStorage.setItem("style", isPlain ? "plaintext" : "apple");

    // Update toggle label
    toggle.textContent = isPlain ? "TXT" : "⌘";

    body.classList.remove("transitioning");
  }, 220);
});

const colorToggle = document.getElementById("color-toggle");

// Restore saved preference
if (localStorage.getItem("colorMode") === "light") {
  document.body.classList.add("light-mode");
  colorToggle.textContent = "☀️";
} else {
  colorToggle.textContent = "🌙";
}

// Toggle handler
colorToggle.addEventListener("click", () => {
  const isLight = document.body.classList.toggle("light-mode");
  localStorage.setItem("colorMode", isLight ? "light" : "dark");
  colorToggle.textContent = isLight ? "☀️" : "🌙";
});
