#!/bin/sh

branch="$(git rev-parse --abbrev-ref HEAD)"

if [ "$branch" = "production" ]; then
  echo ""
  echo "🐶 You can't commit directly to 'production' branch, only 'merge' develop into it!"
  echo ""
  exit 1
fi
