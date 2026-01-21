// ========== MUSIC CONTROL ==========
const audioElement = document.getElementById("bg-music");
const muteToggle = document.getElementById("mute-toggle");

// Some browsers block autoplay with sound. We try, but also allow manual play.
document.addEventListener("DOMContentLoaded", () => {
  // Attempt to play (may be blocked until user interacts)
  if (audioElement) {
    const playPromise = audioElement.play();
    if (playPromise !== undefined) {
      playPromise.catch(() => {
        // If autoplay is blocked, show muted icon to hint user to tap.
        muteToggle.textContent = "🔇";
      });
    }
  }
});

// Toggle mute / unmute when clicking the floating button
muteToggle.addEventListener("click", () => {
  if (!audioElement) return;

  audioElement.muted = !audioElement.muted;

  if (audioElement.muted) {
    muteToggle.textContent = "🔇";
  } else {
    muteToggle.textContent = "🔊";
    // Make sure it actually plays when unmuted
    const playPromise = audioElement.play();
    if (playPromise !== undefined) {
      playPromise.catch(() => {
        // Ignore errors here; often just autoplay policy
      });
    }
  }
});

// ========== FLOATING HEART BACKGROUND ==========
const heartContainer = document.getElementById("heart-background");

// Create one floating heart with random properties
function createHeart() {
  if (!heartContainer) return;

  const heart = document.createElement("span");
  heart.classList.add("floating-heart");
  heart.innerText = "❤";

  // Random horizontal position (0–100% of viewport width)
  heart.style.left = Math.random() * 100 + "vw";

  // Random animation duration between 6s and 12s
  const duration = 6 + Math.random() * 6;
  heart.style.animationDuration = duration + "s";

  // Random size between 14px and 26px
  const size = 14 + Math.random() * 12;
  heart.style.fontSize = size + "px";

  // Slight random opacity
  const opacity = 0.4 + Math.random() * 0.5;
  heart.style.opacity = opacity.toString();

  heartContainer.appendChild(heart);

  // Remove heart once animation ends to avoid DOM bloat
  setTimeout(() => {
    heart.remove();
  }, duration * 1000);
}

// Create hearts continuously at a gentle pace
setInterval(createHeart, 800);

// Create some initial hearts right away so the page doesn't feel empty
for (let i = 0; i < 8; i++) {
  setTimeout(createHeart, i * 250);
}