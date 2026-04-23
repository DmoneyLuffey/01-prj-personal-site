// This file is where all page JavaScript lives.
// Add new functionality here as your site grows.

// Grab elements from the page.
const nav = document.querySelector('.page-nav');
const music = document.getElementById('bg-music');
const muteToggle = document.getElementById('mute-toggle');

// Make the navigation bar slightly transparent after scrolling.
window.addEventListener('scroll', function () {
  if (!nav) {
    return;
  }

  if (window.scrollY > 0) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }
});

// Keep the background music at a low volume by default.
if (music) {
  music.volume = 0.2;
}

// Toggle mute/unmute when the button is clicked.
if (muteToggle && music) {
  muteToggle.addEventListener('click', function () {
    if (music.volume > 0) {
      music.volume = 0;
      muteToggle.classList.add('muted');
      muteToggle.innerHTML = '<i class="fas fa-volume-mute"></i>';
    } else {
      music.volume = 0.2;
      muteToggle.classList.remove('muted');
      muteToggle.innerHTML = '<i class="fas fa-volume-up"></i>';
    }
  });
}

// Try to start music. Most browsers allow this only after user interaction.
function startMusic() {
  if (!music) {
    return;
  }

  music.muted = false;

  const playPromise = music.play();
  if (playPromise !== undefined) {
    playPromise.catch(function () {
      // Ignore expected autoplay blocks to keep the console clean.
    });
  }
}

// Also try on the first click anywhere on the page.
document.addEventListener('click', startMusic, { once: true });
