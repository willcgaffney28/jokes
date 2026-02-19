# Push this project to GitHub

Run these commands in your terminal from the **nepo-baby-advocacy** folder:

```bash
cd /Users/willgaffney/nepo-baby-advocacy

# Initialize git and make the first commit
git init
git add index.html styles.css script.js
git commit -m "Add nepo baby advocacy site"

# Add your GitHub repo as remote (use SSH if you prefer)
git remote add origin https://github.com/willcgaffney28/jokes.git

# If the repo already has content (e.g. a README), pull and merge first:
#   git branch -M main
#   git pull origin main --allow-unrelated-histories
#   git push -u origin main

# If the repo is empty, push:
git branch -M main
git push -u origin main
```

**If the repo already exists and has commits:** run the pull line above before pushing to avoid overwriting anything.

**Using SSH instead of HTTPS:**  
`git remote add origin git@github.com:willcgaffney28/jokes.git`

**If you hit permission or credential errors:**  
- HTTPS: GitHub may prompt for username/password; use a [Personal Access Token](https://github.com/settings/tokens) instead of your password.  
- SSH: Ensure your SSH key is added to your GitHub account.
