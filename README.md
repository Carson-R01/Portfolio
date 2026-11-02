# Portfolio

A personal portfolio / resume site built with plain HTML, CSS, and Bootstrap 5. No build tools or frameworks required — just static files.

## Structure

```
index.html              Main page (About, Skills, Projects, Experience, Contact)
css/style.css           Custom styling on top of Bootstrap
js/projects-data.js     Project list — edit this to add/remove projects
js/main.js              Renders project cards from projects-data.js
images/projects/        Project preview images
images/profile-placeholder.svg   Placeholder profile photo
```

## Customize your info

Open `index.html` and replace the placeholder text in:
- **Hero** — your name and title
- **About** — your bio and photo (`images/profile-placeholder.svg`)
- **Skills** — the skill badges
- **Experience & Education** — the timeline items
- **Contact** — email/social links (update the `mailto:` and social links in the hero and contact section)

Add a `resume.pdf` file to the project root if you want the "Download Resume" button to work.

## Adding a new project card

Open `js/projects-data.js` and add a new object to the `projects` array:

```js
{
  title: "Project Name",
  description: "What it does in a sentence or two.",
  image: "images/projects/your-image.png",
  tags: ["Tag1", "Tag2"],
  liveUrl: "https://your-demo-link",
  repoUrl: "https://github.com/your-username/your-repo"
}
```

A card is generated automatically — no HTML editing needed. Put the preview image in `images/projects/`.

## Running locally

Just open `index.html` in a browser, or serve the folder with any static server, e.g.:

```
npx serve .
```

## Deploying to GitHub Pages

1. Create a new GitHub repository (or use an existing one) and push this project to it:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio site"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<your-repo>.git
   git push -u origin main
   ```
2. On GitHub, go to **Settings → Pages**.
3. Under **Build and deployment**, set **Source** to **Deploy from a branch**.
4. Set **Branch** to `main` and folder to `/ (root)`, then click **Save**.
5. Your site will be live at `https://<your-username>.github.io/<your-repo>/` within a minute or two.

No build step or GitHub Actions workflow is needed since this is a static site.
