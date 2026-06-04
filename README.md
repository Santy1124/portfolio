# Portfolio Deployment Workflow

## Local Development

Start the development server:

```bash
npm run dev
```

Build locally:

```bash
npm run build
```

## Updating the Portfolio

Open Command Prompt and navigate to the project folder:

```cmd
cd /d "D:\Personal\portfolio\portfolio"
```

Check current status:

```cmd
git status
```

Add changes:

```cmd
git add .
```

Commit changes:

```cmd
git commit -m "Describe your changes"
```

Push to GitHub:

```cmd
git push
```

## Automatic Deployment

The portfolio is connected to:

* GitHub Repository
* Vercel

After every successful `git push`, Vercel automatically deploys the latest version.

No manual deployment is required.

## Useful Commands

Check repository status:

```cmd
git status
```

View commit history:

```cmd
git log --oneline
```

Check connected remote repository:

```cmd
git remote -v
```

Run locally:

```cmd
npm run dev
```

Create production build:

```cmd
npm run build
```




cd /d "D:\Personal\portfolio\portfolio"

git add .
git commit -m "Updated mobile layout"
git push