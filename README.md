# Valentine's Day Love Website

A romantic, responsive website built with HTML, CSS, and vanilla JavaScript. This website celebrates a special love story with an interactive quiz and beautiful animated storytelling.

## 🌹 Features

### Pages
1. **Home Page** - Welcome landing page with navigation to all sections
2. **Our Story So Far** - A beautifully animated timeline of how our relationship began
3. **Valentine's Day (14th February 2026)** - A heartfelt Valentine's Day message with smooth animations
4. **Quiz - Your Gift** - Interactive multiple-choice quiz to unlock a special gift
5. **Gift Celebration** - Surprise gift reveal with confetti animations

### Design & UX
- **Dark Elegant Theme** - Gold (#d4af37) and Crimson (#dc143c) color palette on dark backgrounds
- **Fully Responsive** - Perfect on mobile phones, tablets, and desktop computers
- **Timeline Animations** - Scroll-triggered fade-in animations for story sections
- **Interactive Quiz** - Multiple attempts allowed, real-time validation, smooth transitions
- **Sticky Navigation** - Always-visible navigation bar with active link highlighting
- **Confetti Animations** - Celebratory animations on the gift reveal page

## 📱 Responsive Breakpoints

- **Mobile** (< 640px) - Single-column layout, optimized touch targets (48px minimum)
- **Tablet** (640px - 1023px) - Adjusted spacing and font sizes
- **Desktop** (≥ 1024px) - Full multi-column layout

## 🚀 Deployment

### Local Testing
Run a local HTTP server to test the website:

```bash
python3 -m http.server 8000
# or
python -m http.server 8000
```

Then open your browser to `http://localhost:8000`

### Server Deployment
1. Upload all files to your web server (keep the directory structure intact)
2. Ensure all `.html`, `.css`, and `.js` files are in the root directory
3. Make sure the server supports serving static files
4. Visit the domain/IP where files are hosted

### Popular Hosting Options
- **GitHub Pages** - Free, easy deployment for static sites
- **Netlify** - Drag and drop deployment
- **Vercel** - Optimized for web applications
- **Any web server** - Works with Apache, Nginx, etc.

## 📁 File Structure

```
web-av/
├── index.html          # Home page
├── story.html          # Our Story page
├── valentine.html      # Valentine's Day message
├── quiz.html           # Interactive quiz
├── gift.html           # Gift celebration page
├── styles.css          # All styling and animations
├── script.js           # JavaScript logic and interactivity
├── .gitignore          # Git ignore configuration
└── README.md           # This file
```

## 🎨 Customization

### Color Scheme
Edit the CSS custom properties at the top of `styles.css`:

```css
:root {
  --dark-bg: #0f0f1e;
  --accent-crimson: #dc143c;
  --accent-gold: #d4af37;
  /* ... other colors ... */
}
```

### Quiz Answers
Edit the `QUIZ_ANSWERS` object in `script.js`:

```javascript
const QUIZ_ANSWERS = {
  question1: 'A', // Change to B, C, or D
  question2: 'B',
  question3: 'D'
};
```

### Content
Simply edit the HTML content in each `.html` file. The styling will automatically apply.

## ✨ Browser Support

- Chrome/Chromium (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile, Samsung Internet)

## 🔧 Technical Stack

- **HTML5** - Semantic markup
- **CSS3** - Grid, Flexbox, animations, custom properties
- **Vanilla JavaScript** - No dependencies, pure JS for interactivity
- **Intersection Observer API** - For scroll-triggered animations

## 📝 Notes

- All story content includes author's original text (please preserve copyright/attribution)
- The quiz allows unlimited attempts and resets on navigation
- No external dependencies - works offline after initial load
- No cookies or local storage - fully stateless design
- All animations are performant and GPU-accelerated

## 💝 Made with Love

This website is a creative expression of love and appreciation. Feel free to customize it for your own special someone!

---

**Created:** Valentine's Day 2026
**Built by:** A Software Engineer in Love ❤️
