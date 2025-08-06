#!/bin/bash

# Deploy script for Photography Gallery
echo "🚀 Starting deployment process..."

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: package.json not found. Are you in the project root?"
    exit 1
fi

# Install dependencies
echo "📦 Installing dependencies..."
bun install

# Run type check
echo "🔍 Running type check..."
bun run type-check

# Run linting
echo "🧹 Running linting..."
bun run lint

# Build the project
echo "🏗️ Building the project..."
bun run build

# Check if build was successful
if [ $? -eq 0 ]; then
    echo "✅ Build successful!"
    echo "🚀 Ready for deployment!"
else
    echo "❌ Build failed!"
    exit 1
fi

echo "🎉 Deployment preparation complete!"
