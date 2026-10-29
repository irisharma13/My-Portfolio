# Rishi Sharma — Portfolio Website

A responsive single-page personal portfolio built with plain HTML, CSS and a little vanilla JavaScript. No frameworks, no build step.

## Sections

- **Home:** intro, career focus, and "View Projects" / "Download Resume" buttons
- **About Me:** education, learning journey, interests and objectives
- **Skills:** Python, SQL, Advanced Excel, Power BI, plus core competencies
- **Projects:** three project cards with tech tags and Live Demo / GitHub links
- **Resume & Contact:** resume view/download, email, GitHub, LinkedIn, and a contact form with validation

## Files

```
portfolio/
├── index.html    # page structure and content
├── style.css     # all styling, colors and responsive rules
├── script.js     # footer year and contact form validation
├── resume.pdf    # your resume (add this yourself)
└── README.md
```

## Run locally

1. Put all the files in one folder.
2. Add your resume to the same folder, named `resume.pdf`.
3. Double-click `index.html` to open it in your browser.

## Customize

| What to change | Where |
| --- | --- |
| Learning Journey text | `index.html`, About section |
| Project titles, descriptions, tags, links | `index.html`, Projects section |
| Email address | `index.html` (the `mailto:` link) **and** `MY_EMAIL` at the top of `script.js` |
| GitHub / LinkedIn links | `index.html`, Contact section |
| Colors | CSS variables at the top of `style.css` (`--accent`, `--bg`, etc.) |
| Resume file | Replace `resume.pdf` or update the `href` in `index.html` |

## Notes

- The contact form validates name, email and message, then opens the visitor's email app addressed to you. A static page cannot send email by itself. To receive messages directly, connect a form service such as Formspree or Web3Forms.
- Light and dark themes follow the visitor's device setting.

## Deploy for free

- **GitHub Pages:** push the files to a repository, then go to Settings → Pages and select the main branch.
- **Netlify or Vercel:** drag the folder in, or connect the repository.

## Tech

HTML5 · CSS3 (Flexbox and Grid) · Vanilla JavaScript
