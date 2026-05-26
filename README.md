# The Brutal Playbook - Interactive Adventure Site

An interactive, gamified website featuring **The Brutal Playbook** - a no-bullshit guide to unfucking your life. Explore three complete playbooks, answer 100+ questions, track your progress, and transform through daily adventures.

## 🎮 Features

✨ **Three Complete Playbooks:**
- The Original Brutal Playbook
- The Playbook (Revised) - Christ-Centered
- The Missing Chapters - Deep Wisdom

🎯 **Gamification System:**
- Daily Quest system with question shuffling
- Quote of the Day (changes daily)
- Rapid-Fire Question Deck (shuffles hourly)
- Question of the Day (personalized)
- Progress tracking and achievements
- XP system and task completion

📊 **Interactive Features:**
- Carousel navigation with smooth animations
- Question response tracker
- Daily dashboard with stats
- Weekly progress monitoring
- Sound effects (Web Audio API)
- Responsive design (mobile-first)

🎨 **Design:**
- Adventure-themed, bright & vibey aesthetic
- Gen-Z inspired spatial design
- 3D card effects
- Smooth animations and transitions
- Light mode only
- Cross-platform responsive

## 📁 Project Structure

```
web/
├── index.html              # Landing page & hub
├── css/
│   └── styles.css         # Global styles & design system
├── js/
│   └── content-data.js    # All content data & gamification logic
├── pages/
│   ├── playbook.html      # Playbook viewer
│   ├── questions.html     # Question deck viewer
│   └── dashboard.html     # Daily dashboard
├── assets/
│   └── sounds/            # Sound effects (future expansion)
└── README.md              # This file

```

## 🚀 Getting Started

### Local Development

1. **Clone or download the repository**
2. **Open in VS Code or any code editor**
3. **Use Live Server extension to run locally:**
   - Install VS Code Live Server extension
   - Right-click `index.html` → "Open with Live Server"
   - Site opens at `http://localhost:5500`

4. **Or use a simple HTTP server:**
   ```bash
   # Python 3
   python -m http.server 8000
   
   # Node.js (with http-server package)
   npx http-server
   ```

## 📦 Deploy to GitHub Pages

### Method 1: Direct GitHub Pages (Recommended)

1. **Create a GitHub repository:**
   - Go to [github.com/new](https://github.com/new)
   - Name it: `life-book` or `brutal-playbook`
   - Make it PUBLIC
   - Click "Create repository"

2. **Push your code to GitHub:**
   ```bash
   cd c:\Users\joel.yeow\Documents\UIUX\ TESTS\life-book\web
   
   git init
   git add .
   git commit -m "Initial commit: The Brutal Playbook Interactive Site"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/life-book.git
   git push -u origin main
   ```

3. **Enable GitHub Pages:**
   - Go to your GitHub repository settings
   - Navigate to "Pages" section (left sidebar)
   - Under "Build and deployment" → "Branch"
   - Select `main` branch
   - Click "Save"
   - Wait 1-2 minutes for deployment
   - Your site will be live at: `https://YOUR_USERNAME.github.io/life-book/`

### Method 2: Using GitHub CLI

```bash
# Install GitHub CLI from https://cli.github.com/
gh auth login
gh repo create life-book --public --source=. --remote=origin --push
```

### Method 3: Using GitHub Web Interface

1. Upload files via GitHub web interface:
   - Go to your new repository
   - Click "Add file" → "Upload files"
   - Drag and drop all files from the `web` folder
   - Commit changes

## 🎯 Features Explained

### Daily Gamification

- **Quote of the Day:** Changes daily, never repeats (20+ unique quotes)
- **Question of the Day:** Different reflective question each day
- **Rapid Fire Questions:** Shuffled hourly with different ordering
- **Streak Tracking:** Counts consecutive days of engagement
- **XP System:** Earn points for reading, answering questions, completing tasks

### Content Organization

**Playbook Viewer:**
- All 5 phases with complete content
- Sortable sections
- Scrollable card system for long content
- Quick navigation jump links
- Progress tracking

**Question Deck:**
- 25 rapid-fire questions (extracted from playbooks)
- 15 deep-dive questions
- Interactive carousel
- Response saving to browser localStorage
- Statistics dashboard

**Daily Dashboard:**
- Today's missions (3 tasks)
- Current streak
- Weekly progress grid
- XP earned today
- Next steps recommendations

### Responsive Design

✅ **Desktop:** Full 3-column layouts, large cards, optimal spacing
✅ **Tablet:** 2-column grids, adjusted sizing
✅ **Mobile:** Single column, optimized for touch, scrollable carousels
✅ **All:** Fixed card heights, scrollable content, no horizontal scroll

## 🎨 Design System

### Colors
- **Primary Gradient:** #FF6B35 → #FF8A5B (Orange/Adventure)
- **Secondary Gradient:** #4F46E5 → #7C3AED (Purple/Grace)
- **Tertiary Gradient:** #D946EF → #EC4899 (Magenta/Depth)
- **Light Mode:** White backgrounds, dark text

### Typography
- **Headlines:** 700-900 weight, tight spacing
- **Body:** System font stack for performance
- **Code:** Fira Code monospace

### Animations
- **Float:** Gentle up/down movement (3s)
- **Glow:** Pulsing box shadow (2s)
- **Slide In:** Entrance animations (0.6s)
- **Transitions:** Smooth 0.3s defaults, fast 0.2s hover states

### Spacing
- **Base unit:** 0.5rem (8px increment system)
- **Cards:** 1.5rem padding
- **Sections:** 3rem top/bottom margins
- **Gaps:** 1-2rem between elements

## 💾 Data Storage

The site uses browser **localStorage** to persist:
- User responses to questions
- Completed daily tasks
- Reading progress
- Streaks and statistics

**No account needed!** All data stays in your browser.

## 🔊 Sound Effects

Web Audio API creates dynamic sound effects for:
- Button hovers (C5: 523.25 Hz)
- Question completion (E5: 659.25 Hz)
- Task completion (G5: 783.99 Hz)

Can be disabled per browser's audio preferences.

## 📱 Browser Compatibility

✅ Chrome/Chromium 90+
✅ Firefox 88+
✅ Safari 14+
✅ Edge 90+
✅ Mobile browsers (iOS Safari, Chrome Mobile)

**Note:** Web Audio API may require user interaction before playing sounds (browser security).

## 🛠️ Customization

### Change Colors
Edit CSS variables in `css/styles.css`:
```css
:root {
  --primary-gradient: linear-gradient(135deg, #YOUR_COLOR_1 0%, #YOUR_COLOR_2 100%);
  /* ... other variables ... */
}
```

### Add More Questions
Edit `js/content-data.js`:
```javascript
questions: {
  rapidFire: [
    "Your new question here",
    // ... more questions
  ]
}
```

### Update Playbook Content
Edit `js/content-data.js` → `contentData.playbooks` object

## 📈 Performance Optimization

- ✅ No external dependencies (pure HTML/CSS/JS)
- ✅ Minimal file sizes
- ✅ Lazy loading for images (future)
- ✅ Optimized animations (GPU acceleration)
- ✅ Responsive images
- ✅ Efficient CSS (no bloat)

### Lighthouse Scores Target:
- Performance: 95+
- Accessibility: 90+
- Best Practices: 95+
- SEO: 100

## 🔒 Privacy

- ✅ No tracking
- ✅ No analytics
- ✅ No external API calls
- ✅ All data stored locally
- ✅ No cookies set
- ✅ HTTPS ready on GitHub Pages

## 📝 Content Attribution

All content is original from **The Brutal Playbook** materials:
1. `1.txt` - The Original Brutal Playbook
2. `2.txt` - The Brutal Playbook (Revised, Christ-Centered)
3. `THE_BRUTAL_PLAYBOOK_MISSING_CHAPTERS.md` - The Missing Chapters

## 🎓 Educational Use

This site is designed as:
- Personal development tool
- Self-reflection platform
- Interactive learning experience
- Daily habit tracker
- Gamified education

## 🚀 Future Enhancements

Potential additions:
- [ ] PDF export of responses
- [ ] Community features (optional)
- [ ] Dark mode toggle
- [ ] Multiple languages
- [ ] Mobile app version
- [ ] Advanced analytics
- [ ] Email digest of responses
- [ ] Social sharing (optional)

## 🐛 Troubleshooting

**Site won't load after push to GitHub:**
- Wait 2-3 minutes for GitHub Pages to build
- Clear browser cache (Ctrl+Shift+Delete)
- Check repository settings → Pages section
- Ensure branch is set to `main`

**Questions/Quotes not changing:**
- Clear browser cache
- Check console (F12) for errors
- Reload page (Ctrl+R or Cmd+R)

**Sound effects not working:**
- Click somewhere on the page first (browser security)
- Check browser audio permissions
- Try different browser

**Responses not saving:**
- Check browser's localStorage is enabled
- Try incognito/private window
- Clear site data and reload

## 📞 Support

For issues or questions:
1. Check the troubleshooting section above
2. Review browser console (F12) for error messages
3. Clear cache and reload
4. Try a different browser

## 📄 License

Original content from The Brutal Playbook.
Site design and code: Custom built.

---

**Ready to unfuck your life?** 🔥

Start at: `index.html`

Built with obsessive attention to quality, solid engineering principles, and a commitment to your transformation.
