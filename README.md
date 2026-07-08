# advaith-appajodu.github.io

Personal site. Zero-build static HTML and CSS, deployed on GitHub Pages.

## Deploy (one time)

```bash
cd ~/code/advaith-appajodu.github.io
git init && git add -A && git commit -m "Personal site"
gh repo create advaith-appajodu.github.io --public --source=. --push
```

GitHub Pages serves user repos named `<username>.github.io` automatically from the main
branch (Settings → Pages to confirm). Live at https://advaith-appajodu.github.io within
a few minutes of the first push.

## Update

Edit the HTML, commit, push. No build step.

- `index.html`: the whole homepage. Sections: hero, research, projects, writing, now.
- `blog/index.html`: the writing page. Instructions for adding a post are in a comment
  inside the file.
- `style.css`: one stylesheet. Light editorial theme, warm paper + ink + a single
  forest-green accent. The `:root` CSS variables at the top control the whole palette,
  change `--accent` / `--paper` / `--ink` there to re-theme in one place.
- `reveal.js`: progressive-enhancement only (scroll reveals + hero tilt, both disabled
  under prefers-reduced-motion). The page is fully readable without it.
- `assets/`: paper figures, resume PDF. When the resume changes, replace
  `assets/Advaith_Appajodu_Resume.pdf` with the new export.

## Content rules

- Paper stays labeled "preprint in preparation" until it is actually submitted or on
  arXiv, then update the Research section with the real link.
- Every number on the site comes from the actual study. Do not round into fiction.
