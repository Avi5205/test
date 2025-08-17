#!/bin/bash

# AdSense Environment Setup Script
echo "🔒 Setting up secure environment for AdSense..."

# Check if .env already exists
if [ -f ".env" ]; then
    echo "⚠️  .env file already exists. Backing up to .env.backup"
    cp .env .env.backup
fi

# Create .env file
cat > .env << EOF
# AdSense Configuration
# Your Google AdSense Publisher ID
VITE_ADSENSE_PUBLISHER_ID=ca-pub-1705087005488253

# Optional: API Base URL for calculator
# VITE_API_BASE=https://your-api-domain.com
EOF

echo "✅ .env file created successfully!"
echo "📝 Please review and edit the .env file if needed"
echo "🔒 Remember: .env files are automatically ignored by git"
echo ""
echo "🚀 Next steps:"
echo "1. Review the .env file"
echo "2. Start your development server: npm run dev"
echo "3. Check the AdSense setup guide: ADSENSE_SETUP.md"
echo "4. Review security best practices: SECURITY_SETUP.md"
