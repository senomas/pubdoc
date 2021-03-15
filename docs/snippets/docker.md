---
id: docker
title: Docker Snippets
sidebar: Snippets
---

### Clean up

```
docker builder prune -f && \
  docker image prune -f && \
  docker container prune -f
```
