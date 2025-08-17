# Kodder.in - Tools & Calculators Hub

A React-based web application providing free tools, calculators, and converters with integrated Google AdSense.

## 🚀 Features

- **Unit Converter**: Convert between different units (km to miles, etc.)
- **Calculator**: Basic arithmetic operations with API fallback
- **Google AdSense**: Integrated advertising with secure configuration
- **Responsive Design**: Built with Tailwind CSS
- **Modern Stack**: React + Vite + Tailwind CSS

## 🛠️ Tech Stack

- **Frontend**: React 18 + Vite
- **Styling**: Tailwind CSS
- **Build Tool**: Vite
- **Package Manager**: npm
- **Ad Integration**: Google AdSense

## 📁 Project Structure

```
src/
├── components/          # Reusable components
│   ├── AdSense.jsx     # Google AdSense component
│   ├── Navbar.jsx      # Navigation component
│   └── Footer.jsx      # Footer component
├── pages/              # Page components
│   ├── Home.jsx        # Home page
│   ├── Converter.jsx   # Unit converter
│   ├── Calculator.jsx  # Basic calculator
│   ├── About.jsx       # About page
│   ├── Contact.jsx     # Contact page
│   ├── Terms.jsx       # Terms of service
│   └── PrivacyPolicy.jsx # Privacy policy
├── config/             # Configuration files
│   └── adsense.js      # AdSense configuration
└── main.jsx            # Application entry point
```

## 🚀 Getting Started

### Prerequisites
- Node.js 16+ 
- npm or yarn

### Installation
```bash
# Clone the repository
git clone <your-repo-url>
cd converter

# Install dependencies
npm install

# Create environment file
cp .env.example .env
# Edit .env with your AdSense publisher ID

# Start development server
npm run dev
```

### Environment Setup
Create a `.env` file in the project root:
```bash
VITE_ADSENSE_PUBLISHER_ID=ca-pub-1705087005488253
```

## 📚 Documentation

- [AdSense Setup Guide](ADSENSE_SETUP.md) - Complete AdSense integration guide
- [Security Setup Guide](SECURITY_SETUP.md) - Security best practices and configuration

## 🔒 Security Features

- **Environment Variables**: Secure AdSense configuration
- **Centralized Config**: All settings in one place
- **Dynamic Loading**: Secure script loading
- **Fallback Protection**: App stability with default values

## 📱 Available Pages

- **Home**: Welcome page with AdSense integration
- **Converter**: Unit conversion tools
- **Calculator**: Basic arithmetic operations
- **About**: Information about the platform
- **Contact**: Contact information
- **Terms**: Terms of service
- **Privacy**: Privacy policy

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Environment Variables for Production
Set these in your hosting platform:
- `VITE_ADSENSE_PUBLISHER_ID`: Your AdSense publisher ID

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🔗 Links

- [Live Demo](https://your-domain.com)
- [AdSense Setup](ADSENSE_SETUP.md)
- [Security Guide](SECURITY_SETUP.md)
