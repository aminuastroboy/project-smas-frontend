#!/usr/bin/env bash
        set -e
        echo "Running build-fix steps..."
        # Ensure correct node version on CI (use nvm or actions/setup-node on GH)
        echo "Node version: $(node -v)"
        npm ci
        npm run build
        echo "Build complete."
