---
id: git
title: GIT Snippets
sidebar: Snippets
---

## Save Username & Password Globally

```
git config --global credential.helper store
```

## Update & Display Log Tree

```
git fetch --all && \
  git log --oneline --decorate --color --graph --all
```

## Pull Unmerged Pull Request

```
git pull upstream pull/63/head
```
