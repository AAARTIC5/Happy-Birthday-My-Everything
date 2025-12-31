# 💕 Romantic New Year Website 💕

A cute, romantic single-page website with a soft pink gradient background, decorative elements, and interactive features.

## 🎨 Features

- **Soft pink/pastel gradient background**
- **Cute chocolate cake illustration** (left side)
- **"Press Me" button** that opens a romantic letter
- **Main image display** (center-right)
- **Background music player** with play/pause functionality
- **Floating decorative elements** (hearts, sparkles, stars)
- **Fully responsive design** for desktop and mobile
- **Smooth animations and transitions**

## 📁 Files

- `index.html` - Main HTML structure
- `style.css` - All styling and animations
- `script.js` - Interactive functionality
- `README.md` - This file

## 🎯 How to Customize

### 1. **Add Your Cake Image**

In `index.html`, find the cake section (around line 40) and replace:

```html
<!-- Remove or comment out the placeholder -->
<div class="cake-placeholder">...</div>

<!-- Uncomment and add your image path -->
<img src="cake.png" alt="Cute Chocolate Cake" class="cake-image">
```

### 2. **Add Your Main Image**

In `index.html`, find the image section (around line 50) and replace:

```html
<!-- Remove or comment out the placeholder -->
<div class="image-placeholder">...</div>

<!-- Uncomment and add your image path -->
<img src="your-image.jpg" alt="Special Image" class="main-image">
```

### 3. **Edit the Letter Text**

In `index.html`, find the letter content section (around line 75) and edit the text inside:

```html
<div class="letter-text">
    <p>Your custom text here...</p>
    <p>More paragraphs...</p>
</div>
```

### 4. **Add Background Music**

1. Place your audio file in the project folder (e.g., `background-music.mp3`)
2. In `index.html`, find the audio element (around line 65) and update the source:

```html
<audio id="backgroundMusic" loop>
    <source src="your-music-file.mp3" type="audio/mpeg">
</audio>
```

### 5. **Change the Title**

In `index.html`, find the main title (around line 25) and edit:

```html
<h1 class="main-title">Your Custom Title Here</h1>
```

## 🚀 How to Use

1. Open `index.html` in your web browser
2. Click the "Press Me" button to see the letter
3. Click the music button to play/pause background music
4. Enjoy the romantic atmosphere! 💕

## 📝 Notes

- All images should be in the same folder as `index.html` or use relative paths
- Supported audio formats: MP3, WAV, OGG
- The website is fully responsive and works on mobile devices
- All decorative elements are animated automatically

## 🎨 Color Scheme

- Primary Pink: `#d63384`
- Light Pink: `#ff6b9d`
- Background Gradient: Soft pink to pastel pink
- Text: Dark gray with pink accents

Enjoy your romantic website! 💖✨

