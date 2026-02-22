# Gitopticon Homepage

Static marketing website for Gitopticon - Development lifecycle governance and security automation platform.

## Overview

This is a pure static HTML/CSS/JavaScript site extracted from the main Gitopticon Django application for deployment on Netlify. The homepage showcases Gitopticon's three core capabilities:

1. **Proactive Digests** - AI-generated executive summaries of relevant work
2. **Real-Time PR Guidance** - Automated comments on PRs with security recommendations
3. **Smart Conversations** - Natural language queries against stored work

## Technology Stack

- **HTML5** - Semantic markup
- **CSS3** - Tailwind CSS (compiled) + Flowbite components + custom animations
- **JavaScript** - Vanilla JS (no framework dependencies)
- **Hosting** - Netlify with CDN
- **Form Handling** - Formspree for contact form submissions

## Project Structure

```
gitopticon-homepage/
├── index.html                      # Main homepage
├── assets/
│   ├── css/
│   │   ├── styles.css             # Compiled Tailwind CSS
│   │   └── animations.css         # Custom scroll animations
│   ├── js/
│   │   ├── main.js                # Mobile menu, smooth scroll, cookies
│   │   └── animations.js          # Scroll triggers, form validation
│   ├── images/
│   │   ├── favicon.ico
│   │   ├── favicon-16x16.png
│   │   ├── favicon-32x32.png
│   │   └── apple-touch-icon.png
│   └── vendor/
│       └── flowbite/
│           ├── css/flowbite.min.css
│           └── js/flowbite.min.js
├── netlify.toml                   # Netlify configuration
├── .gitignore
└── README.md

```

## Local Development

### Prerequisites

- Web browser
- Optional: Local web server (Python, Node.js, or similar)

### Running Locally

#### Option 1: Simple file open
```bash
# Just open index.html in your browser
open index.html  # macOS
xdg-open index.html  # Linux
start index.html  # Windows
```

#### Option 2: Python HTTP server
```bash
python3 -m http.server 8000
# Visit http://localhost:8000
```

#### Option 3: Node.js serve
```bash
npx serve .
# Follow the URL provided
```

## Deployment

### Netlify Deployment (Recommended)

#### Option 1: Deploy via Git (Best for continuous deployment)

1. Push this repository to GitHub
2. Go to [Netlify](https://app.netlify.com/)
3. Click "New site from Git"
4. Choose GitHub and select this repository
5. Configure build settings:
   - **Build command:** (leave empty)
   - **Publish directory:** `.` (root)
6. Click "Deploy site"

#### Option 2: Deploy via Netlify CLI

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login to Netlify
netlify login

# Initialize site
netlify init

# Deploy
netlify deploy --prod
```

#### Option 3: Drag and Drop

1. Go to [https://app.netlify.com/drop](https://app.netlify.com/drop)
2. Drag the entire `gitopticon-homepage` folder
3. Site is deployed instantly

### Custom Domain Setup

1. Go to Site settings > Domain management in Netlify
2. Click "Add custom domain"
3. Follow DNS configuration instructions
4. HTTPS is automatically provisioned by Netlify

### Environment Variables (if needed)

1. Go to Site settings > Environment variables
2. Add any required variables
3. Redeploy the site

## Features

### SEO Optimization

- Meta descriptions and keywords
- Open Graph tags for social sharing
- Twitter Card support
- Canonical URLs
- Schema.org structured data (JSON-LD)

### Performance

- Optimized asset loading
- Long-term caching for static assets (1 year)
- No-cache for HTML (always fresh)
- Lazy loading where appropriate
- Minified vendor libraries

### Security

- Content Security Policy headers
- XSS protection
- Frame denial (clickjacking protection)
- Referrer policy
- Permissions policy

### Accessibility

- Semantic HTML5
- Skip to content link
- ARIA attributes
- Keyboard navigation support
- Focus states on interactive elements

## Form Handling

The contact form uses [Formspree](https://formspree.io/) for submission handling:
- Form endpoint: `https://formspree.io/f/xvzawpjz`
- Client-side validation
- AJAX submission (no page reload)
- Honeypot spam protection

## Browser Support

- Chrome/Edge (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Contributing

This is a static extracted version of the homepage. For changes to the main application, see the parent Gitopticon repository.

## License

Proprietary - All rights reserved

## Contact

For questions or issues, contact the Gitopticon team.

---

**Generated with [Claude Code](https://claude.com/claude-code)**
