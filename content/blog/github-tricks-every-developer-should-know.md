---
title: "My Top 10 GitHub Tricks Every Developer Should Know"
date: "2026-02-04"
description: "Boost your productivity with these essential GitHub tips and tricks. From hidden features to power-user shortcuts, learn how to leverage GitHub like a pro and streamline your development workflow."
author: "Pamoth Kumarasinghe"
tags: ["github", "productivity", "git", "developer-tools", "tips"]
readTime: "7 min read"
---

# My Top 10 GitHub Tricks Every Developer Should Know

GitHub is more than just a code hosting platform—it's a powerful development tool with countless features that most developers never discover. After years of using GitHub daily, I've compiled my favorite tricks that have significantly improved my workflow.

## 1. Press "." to Open VS Code in Browser

This is my absolute favorite! When viewing any GitHub repository, simply press the **period (.)** key on your keyboard.

**What happens?**

- Instantly opens VS Code in your browser (github.dev)
- Full IDE experience without cloning
- Perfect for quick edits or code reviews

```
On any GitHub repo:
1. Press "."
2. VS Code opens in browser
3. Start editing immediately
```

**Alternative:** Change `.com` to `.dev` in the URL:

```
github.com/user/repo → github.dev/user/repo
```

## 2. Search Code Like a Pro

GitHub's search is incredibly powerful when you know the syntax:

### Basic Search Operators

```
# Search in specific file types
extension:ts useState

# Search in specific repositories
repo:facebook/react useState

# Search by file path
path:src/components Button

# Search by language
language:typescript interface

# Combine operators
repo:microsoft/vscode language:typescript async await
```

### Advanced Search

```
# Code added after a date
created:>2024-01-01

# Code by specific user
author:PamothKumarasinghe

# Exclude terms
react -redux

# Search in file name
filename:package.json
```

## 3. Use GitHub CLI for Everything

The GitHub CLI (`gh`) is a game-changer:

### Installation

```bash
# Windows (with winget)
winget install GitHub.cli

# macOS
brew install gh

# Linux
sudo apt install gh
```

### Powerful Commands

```bash
# Create a PR from terminal
gh pr create --title "Add feature" --body "Description"

# View PR status
gh pr status

# Clone repo with one command
gh repo clone username/repo

# Create new repo
gh repo create my-new-project --public

# View issues
gh issue list

# Create issue
gh issue create --title "Bug report" --body "Details"

# Run workflows
gh workflow run deploy.yml

# View recent releases
gh release list
```

## 4. Quick File Navigation with "t"

When browsing a repository, press **"t"** to activate the file finder:

```
1. Navigate to any repo
2. Press "t"
3. Type filename
4. Hit Enter to open
```

**Bonus:** It supports fuzzy search! Type parts of the filename and it'll find it.

## 5. Blame Previous Versions

Ever used `git blame` and found the line was last changed in a "formatting commit"? Here's the trick:

When viewing blame view:

1. Click the line number
2. Click "View blame prior to this change"
3. See previous versions of that line

**Pro tip:** Keep clicking to trace the history of that specific line through time!

## 6. Compare Branches Directly in URL

Want to see what changed between branches? Use this URL pattern:

```
github.com/user/repo/compare/main...feature-branch
```

### Compare Options

```
# Compare branches
/compare/main...develop

# Compare tags
/compare/v1.0.0...v2.0.0

# Compare commits
/compare/abc123...def456

# Compare across forks
/compare/main...username:feature
```

**Bonus:** Add `.patch` or `.diff` to URL for raw output:

```
github.com/user/repo/compare/main...feature.patch
```

## 7. Saved Replies for Common Comments

Stop typing the same PR comments repeatedly!

### Setup Saved Replies

1. Click your profile → Settings
2. Scroll to "Saved replies"
3. Create common responses

### My Saved Replies

```markdown
**LGTM**
Looks good to me! 👍 Approved.

**Needs Tests**
Great work! Could you add tests for the new functionality?

**Merge Conflicts**
Hey! This PR has merge conflicts with main. Could you resolve them?

**Update Dependencies**
Please run `npm update` to get the latest dependency versions.
```

**Usage:** When commenting, click "Saved replies" dropdown and select!

## 8. Keyboard Shortcuts Master List

Press **"?"** on any GitHub page to see all available shortcuts.

### My Most-Used Shortcuts

| Shortcut   | Action              |
| ---------- | ------------------- |
| `g` + `c`  | Go to Code          |
| `g` + `i`  | Go to Issues        |
| `g` + `p`  | Go to Pull Requests |
| `s` or `/` | Focus search bar    |
| `.`        | Open in VS Code     |
| `t`        | File finder         |
| `b`        | Browse commits      |
| `w`        | Branch selector     |
| `?`        | Show shortcuts      |
| `l`        | Jump to line        |
| `e`        | Edit file           |

### PR Review Shortcuts

| Shortcut        | Action         |
| --------------- | -------------- |
| `c`             | Create comment |
| `r`             | Quote reply    |
| `Ctrl`+ `Enter` | Submit comment |
| `Ctrl`+`k`      | Insert link    |

## 9. GitHub Actions Workflow Tricks

### Matrix Builds

Test across multiple versions:

```yaml
strategy:
  matrix:
    node-version: [16, 18, 20]
    os: [ubuntu-latest, windows-latest, macos-latest]

steps:
  - uses: actions/setup-node@v3
    with:
      node-version: ${{ matrix.node-version }}
```

### Cache Dependencies

```yaml
- uses: actions/cache@v3
  with:
    path: ~/.npm
    key: ${{ runner.os }}-node-${{ hashFiles('**/package-lock.json') }}
    restore-keys: |
      ${{ runner.os }}-node-
```

### Manual Trigger

```yaml
on:
  workflow_dispatch: # Adds "Run workflow" button
    inputs:
      environment:
        description: "Environment to deploy"
        required: true
        default: "staging"
```

## 10. Secret Gist Tricks

Gists are more powerful than you think!

### Clone Gists Like Repos

```bash
# Every gist is a git repo!
git clone https://gist.github.com/[gist-id].git

# Make changes
git add .
git commit -m "Update gist"
git push
```

### Embed Gists in Websites

```html
<script src="https://gist.github.com/username/gist-id.js"></script>
```

### Version Control for Gists

- Every edit creates a new version
- Click "Revisions" to see history
- Each version has its own URL

## Bonus Tricks

### 11. README Auto-Generation

When creating a repo, check "Add a README file" and GitHub will:

- Detect your license
- Add badges automatically
- Suggest structure based on repo content

### 12. Profile README

Create a special repository with your username:

```
username/username
```

Add a README.md to customize your profile page!

### 13. Issue Templates

Create `.github/ISSUE_TEMPLATE/bug_report.md`:

```markdown
---
name: Bug Report
about: Report a bug
title: "[BUG] "
labels: bug
---

**Describe the bug**
A clear description...

**To Reproduce**
Steps to reproduce...

**Expected behavior**
What should happen...
```

### 14. Code Owners

Create `.github/CODEOWNERS`:

```
# Auto-assign reviewers
*.js @frontend-team
*.py @backend-team
/docs/ @documentation-team
```

### 15. GitHub Mobile App

Install GitHub mobile for:

- Push notifications for PRs
- Quick code reviews
- Comment on issues
- Merge PRs from your phone

## Productivity Tips

### Daily Workflow

```bash
# Morning routine
gh pr status              # Check your PRs
gh issue list --assignee @me    # Your assigned issues
gh workflow list          # Check CI/CD status

# Creating features
gh pr create              # Create PR
gh pr review              # Review others' PRs
gh pr merge               # Merge when ready
```

### Automation Ideas

1. **Auto-assign reviewers** with CODEOWNERS
2. **Auto-label PRs** based on changed files
3. **Auto-close stale issues** with Actions
4. **Auto-deploy on merge** with CI/CD
5. **Auto-generate changelog** from commits

## Common Mistakes to Avoid

❌ **Don't commit secrets** - Use GitHub Secrets for sensitive data
❌ **Don't force push to main** - Protect your main branch
❌ **Don't ignore .gitignore** - Keep repo clean
❌ **Don't skip PR reviews** - Quality > Speed
❌ **Don't forget to pull** - Always pull before pushing

## My GitHub Setup

### Browser Extensions I Use

- **Octotree** - File tree for repos
- **Refined GitHub** - UI improvements
- **GitHub Dark Theme** - Easy on the eyes

### Git Aliases

```bash
# ~/.gitconfig
[alias]
  co = checkout
  br = branch
  ci = commit
  st = status
  unstage = reset HEAD --
  last = log -1 HEAD
  visual = log --oneline --graph --decorate
```

## Conclusion

These GitHub tricks have saved me countless hours and made me a more productive developer. Start with a few that solve your immediate pain points, then gradually incorporate more.

**Remember:** GitHub is constantly adding new features, so keep exploring and learning!

### Resources

- [GitHub Documentation](https://docs.github.com)
- [GitHub CLI](https://cli.github.com)
- [GitHub Keyboard Shortcuts](https://docs.github.com/en/get-started/using-github/keyboard-shortcuts)
- [GitHub Actions](https://docs.github.com/en/actions)

---

**What's your favorite GitHub trick?** [Let me know](/contact) - I'm always looking to learn more!

**Want more productivity tips?** Follow me on [GitHub](https://github.com/PamothKumarasinghe) for regular updates.
