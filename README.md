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

- `index.html`: the whole homepage. Sections: bio, research, projects, writing.
- `blog/index.html`: the writing page. Instructions for adding a post are in a comment
  inside the file.
- `style.css`: one small stylesheet. Single column, serif, no scripts. The `:root`
  variables at the top are the whole palette.
- `assets/`: paper figures, resume PDF. When the resume changes, replace
  `assets/Advaith_Appajodu_Resume.pdf` with the new export.

## Content rules

- The cross-lingual study is presented as a blog post, not a paper. Do not label it a
  preprint.
- Every number on the site comes from the actual study. Do not round into fiction.
