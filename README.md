# Diego Serrano Portfolio

A free, static website hosted on GitHub Pages. Four pages (Home, About, Projects, Resume), works on phones and computers, and every project and certification opens in a popup.

## Put it online (one time, about 5 minutes)

You already have a GitHub Pages site at `diegoserrano-git.github.io`, so the easiest path is to replace what's there.

1. Go to github.com/diegoserrano-git/diegoserrano-git.github.io
2. Delete the old files (or keep a copy somewhere first).
3. Click **Add file > Upload files** and drag in everything from this folder: `index.html`, `about.html`, `projects.html`, `resume.html`, `.nojekyll` and the `assets` folder.
4. Click **Commit changes**. The site updates at https://diegoserrano-git.github.io in a minute or two.

If you'd rather start a new repository, create one named exactly `diegoserrano-git.github.io`, upload the files, then turn on **Settings > Pages > Deploy from a branch > main / root**.

Tip: on Windows, `.nojekyll` can hide in File Explorer. If it doesn't upload, the site still works; it just skips a GitHub step.

## Updating the site

Almost everything you'll change lives in one file: **`assets/js/data.js`**. On GitHub, open that file, click the pencil icon, edit, and click **Commit changes**.

### Add a new project
Copy any `{ ... },` block inside `window.PROJECTS`, paste it at the top of the list, and change the text:

```js
{
  id: "my-new-project",            // unique, lowercase, no spaces
  mark: "ABC",                     // big label on the cover (2 to 5 characters)
  title: "My New Project",
  category: "FP&A",                // also creates a filter button
  date: "2026",
  subtitle: "One-line teaser shown under the title",
  summary: "A few sentences about the project.",
  highlights: ["What you did", "Another thing you did"],
  tools: ["Excel", "Power BI"],
  image: "",                       // optional: "assets/img/my-project.jpg"
  links: [
    { label: "Open workbook", url: "assets/files/my-project.xlsx" },
    { label: "View dashboard", url: "https://..." },
  ],
},
```

It appears on the Projects page and in the Projects list on the Resume page automatically.

### Add a picture or file
Upload images to `assets/img` and files (PDF, XLSX, PBIX) to `assets/files`, then point to them in `data.js`. File links download; web links open in a new tab.

### Add a certification
Copy a block in `window.CERTIFICATIONS`. Paste your verification URL into `credentialUrl` to show a "Verify credential" button in the popup.

### Other edits
- Contact info, social links, headline: `window.SITE` at the top of `data.js`
- Resume text: `window.RESUME` at the bottom of `data.js`
- Downloadable resume: upload a PDF to `assets/files` and set `resumePdf`
- Background Info and About page text: `index.html` and `about.html`
- About page photo: upload `assets/img/about.jpg` (until then it shows your headshot)
- Colors and fonts: the top of `assets/css/style.css`

## Shareable popup links
Each popup has its own link, handy for applications:
- `https://diegoserrano-git.github.io/projects.html#p/13-week-cash-flow`
- `https://diegoserrano-git.github.io/resume.html#c/bida`

## Preview on your computer
Double-click `index.html` to open it in your browser. Everything works offline except the fonts.
