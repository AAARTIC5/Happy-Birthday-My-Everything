// ========================================
// Letter Modal Functionality
// ========================================

// Get modal elements
const modal = document.getElementById('letterModal');
const loveButton = document.getElementById('loveButton');
const closeBtn = document.querySelector('.close-btn');

// Open modal when "Press Me Love" button is clicked
loveButton.addEventListener('click', function() {
    modal.classList.add('show');
    // Add some sparkle effect when opening
    createClickSparkles(loveButton);
});

// Close modal when X button is clicked
closeBtn.addEventListener('click', function() {
    modal.classList.remove('show');
});

// Close modal when clicking outside of it
window.addEventListener('click', function(event) {
    if (event.target === modal) {
        modal.classList.remove('show');
    }
});

// Close modal with Escape key
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape' && modal.classList.contains('show')) {
        modal.classList.remove('show');
    }
});

// ========================================
// Audio Player Functionality
// ========================================

const playPauseBtn = document.getElementById('playPauseBtn');
const backgroundMusic = document.getElementById('backgroundMusic');

// Toggle play/pause
playPauseBtn.addEventListener('click', function() {
    if (backgroundMusic.paused) {
        backgroundMusic.play().catch(error => {
            console.log('Audio playback failed. Make sure to add your audio file!');
            alert('Please add your background music file named "background-music.mp3" in the same folder!');
        });
        playPauseBtn.classList.add('playing');
        playPauseBtn.textContent = '🎵';
    } else {
        backgroundMusic.pause();
        playPauseBtn.classList.remove('playing');
        playPauseBtn.textContent = '🎵';
    }
});

// Update button when audio ends (shouldn't happen due to loop, but just in case)
backgroundMusic.addEventListener('ended', function() {
    playPauseBtn.classList.remove('playing');
});

// ========================================
// Image Handling
// ========================================

const mainImage = document.getElementById('mainImage');
const imagePlaceholder = document.querySelector('.image-placeholder');

// Check if image loads successfully
mainImage.addEventListener('load', function() {
    imagePlaceholder.style.display = 'none';
    mainImage.style.display = 'block';
});

mainImage.addEventListener('error', function() {
    // Image failed to load - show placeholder
    imagePlaceholder.style.display = 'block';
    mainImage.style.display = 'none';
});

// Check on page load
if (mainImage.src.includes('placeholder-image.jpg') || !mainImage.src) {
    imagePlaceholder.style.display = 'block';
    mainImage.style.display = 'none';
}

// ========================================
// Decorative Effects & Animations
// ========================================

// Create sparkles effect when button is clicked
function createClickSparkles(element) {
    const sparkles = ['✨', '⭐', '💫', '💖', '💕'];
    const rect = element.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    for (let i = 0; i < 12; i++) {
        setTimeout(() => {
            const sparkle = document.createElement('div');
            sparkle.textContent = sparkles[Math.floor(Math.random() * sparkles.length)];
            sparkle.style.position = 'fixed';
            sparkle.style.left = centerX + 'px';
            sparkle.style.top = centerY + 'px';
            sparkle.style.fontSize = '2rem';
            sparkle.style.pointerEvents = 'none';
            sparkle.style.zIndex = '1000';
            
            const angle = (Math.PI * 2 * i) / 12;
            const distance = 100 + Math.random() * 50;
            const x = Math.cos(angle) * distance;
            const y = Math.sin(angle) * distance;
            
            sparkle.style.transform = `translate(${x}px, ${y}px)`;
            sparkle.style.opacity = '1';
            sparkle.style.transition = 'all 0.8s ease-out';
            
            document.body.appendChild(sparkle);
            
            setTimeout(() => {
                sparkle.style.opacity = '0';
                sparkle.style.transform += ' scale(0.5)';
                setTimeout(() => {
                    document.body.removeChild(sparkle);
                }, 800);
            }, 100);
        }, i * 30);
    }
}

// Add floating hearts when modal opens
function createFloatingHearts() {
    if (!modal.classList.contains('show')) return;
    
    const hearts = ['💖', '💕', '💗', '💝', '💓'];
    const modalContent = document.querySelector('.modal-content');
    const rect = modalContent.getBoundingClientRect();
    
    for (let i = 0; i < 5; i++) {
        setTimeout(() => {
            const heart = document.createElement('div');
            heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
            heart.style.position = 'fixed';
            heart.style.left = rect.left + rect.width / 2 + 'px';
            heart.style.top = rect.top + 'px';
            heart.style.fontSize = '2rem';
            heart.style.pointerEvents = 'none';
            heart.style.zIndex = '2001';
            heart.style.opacity = '0.8';
            
            const randomX = (Math.random() - 0.5) * 200;
            const randomY = -100 - Math.random() * 100;
            
            document.body.appendChild(heart);
            
            setTimeout(() => {
                heart.style.transition = 'all 1.5s ease-out';
                heart.style.transform = `translate(${randomX}px, ${randomY}px)`;
                heart.style.opacity = '0';
                
                setTimeout(() => {
                    if (heart.parentNode) {
                        document.body.removeChild(heart);
                    }
                }, 1500);
            }, 100);
        }, i * 200);
    }
}

// Add floating hearts when modal is opened
const observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
        if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
            if (modal.classList.contains('show')) {
                createFloatingHearts();
            }
        }
    });
});

observer.observe(modal, {
    attributes: true,
    attributeFilter: ['class']
});

// ========================================
// Smooth Scroll (if needed)
// ========================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// ========================================
// Page Load Animation
// ========================================

window.addEventListener('load', function() {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
});

// ========================================
// Instructions for Customization
// ========================================

/*
 * CUSTOMIZATION GUIDE:
 * 
 * 1. TO CHANGE THE LETTER TEXT:
 *    - Open index.html
 *    - Find the <div class="letter-text"> section
 *    - Edit the <p> tags with your custom message
 * 
 * 2. TO ADD YOUR IMAGE:
 *    - Place your image in the same folder as index.html
 *    - Open index.html
 *    - Find: <img src="placeholder-image.jpg" ...>
 *    - Replace "placeholder-image.jpg" with your image filename
 *      Example: <img src="my-photo.jpg" ...>
 * 
 * 3. TO ADD BACKGROUND MUSIC:
 *    - Place your audio file (MP3 format) in the same folder
 *    - Rename it to "background-music.mp3" OR
 *    - Open index.html
 *    - Find: <source src="background-music.mp3" ...>
 *    - Replace "background-music.mp3" with your audio filename
 *      Example: <source src="love-song.mp3" ...>
 * 
 * 4. TO CHANGE THE TITLE:
 *    - Open index.html
 *    - Find: <h1 class="main-title">Happy New Year to My Princess Maather</h1>
 *    - Change the text to whatever you want
 * 
 * 5. TO CHANGE THE NAME ON THE CAKE:
 *    - Open index.html
 *    - Find: <div class="cake-text">Maather</div>
 *    - Change "Maather" to the desired name
 */
