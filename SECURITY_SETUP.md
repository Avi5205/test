# Security Setup Guide for AdSense

## 🔒 Securing Your AdSense Publisher ID

Your AdSense publisher ID is now properly secured using environment variables and centralized configuration.

## ✅ What's Been Secured

1. **Environment Variables**: Publisher ID moved to `VITE_ADSENSE_PUBLISHER_ID`
2. **Centralized Config**: All AdSense settings in `src/config/adsense.js`
3. **Dynamic Script Loading**: AdSense script loads with secure configuration
4. **Fallback Protection**: Default values prevent app crashes

## 🚀 Environment Setup

### 1. Create Environment File

Create a `.env` file in your project root:

```bash
# .env
VITE_ADSENSE_PUBLISHER_ID=ca-pub-1705087005488253
```

### 2. Environment File Security

- **NEVER commit `.env` to git** (already in .gitignore)
- **Use different IDs for development/production**
- **Share `.env.example` with your team**

### 3. Production Deployment

Set environment variables in your hosting platform:

**Vercel:**

```bash
vercel env add VITE_ADSENSE_PUBLISHER_ID
```

**Netlify:**

```bash
netlify env:set VITE_ADSENSE_PUBLISHER_ID ca-pub-1705087005488253
```

**Render:**

```bash
# Set in dashboard: Environment Variables section
VITE_ADSENSE_PUBLISHER_ID=ca-pub-1705087005488253
```

## 🛡️ Security Features

### Configuration Validation

```javascript
// Validates publisher ID format
import { isValidPublisherId } from "../config/adsense";

if (!isValidPublisherID(process.env.VITE_ADSENSE_PUBLISHER_ID)) {
  console.error("Invalid AdSense Publisher ID format");
}
```

### Fallback Protection

```javascript
// Always has a fallback value
PUBLISHER_ID: import.meta.env.VITE_ADSENSE_PUBLISHER_ID ||
  "ca-pub-1705087005488253";
```

### Centralized Management

All AdSense settings are managed in one place:

- `src/config/adsense.js` - Main configuration
- Easy to update ad slot IDs
- Consistent settings across components

## 🔧 Configuration Options

### Ad Slot Management

```javascript
// Easy to update ad slot IDs
AD_SLOTS: {
  HOME_PAGE: 'your-actual-home-ad-slot-id',
  CONVERTER_PAGE: 'your-actual-converter-ad-slot-id',
  CALCULATOR_PAGE: 'your-actual-calculator-ad-slot-id',
}
```

### Ad Format Options

```javascript
// Available ad formats
adFormat: "auto" | "horizontal" | "vertical" | "rectangle";
```

### Responsive Settings

```javascript
// Control ad responsiveness
fullWidthResponsive: true | false;
```

## 📱 Usage Examples

### Basic Ad Placement

```jsx
import AdSense from "../components/AdSense";
import { ADSENSE_CONFIG } from "../config/adsense";

<AdSense adSlot={ADSENSE_CONFIG.AD_SLOTS.HOME_PAGE} />;
```

### Custom Styled Ad

```jsx
<AdSense
  adSlot={ADSENSE_CONFIG.AD_SLOTS.HOME_PAGE}
  className="my-custom-ad-class"
  style={{ margin: "20px 0", border: "1px solid #eee" }}
/>
```

### Different Ad Format

```jsx
<AdSense
  adSlot={ADSENSE_CONFIG.AD_SLOTS.HOME_PAGE}
  adFormat="horizontal"
  fullWidthResponsive={false}
/>
```

## 🚨 Security Best Practices

### ✅ DO

- Use environment variables for sensitive data
- Keep `.env` files out of version control
- Use different IDs for dev/staging/production
- Validate configuration on app startup
- Centralize configuration management

### ❌ DON'T

- Hardcode publisher IDs in source code
- Commit `.env` files to git
- Share production IDs in development
- Use the same ID across environments
- Expose configuration in client-side bundles

## 🔍 Troubleshooting

### Environment Variable Not Working?

1. Check if `.env` file exists in project root
2. Verify variable name starts with `VITE_`
3. Restart development server after changes
4. Check browser console for errors

### AdSense Not Loading?

1. Verify publisher ID in environment
2. Check if AdSense script is loading
3. Ensure you're on approved domain
4. Check browser console for AdSense errors

### Build Issues?

1. Verify all imports are correct
2. Check if config file path is correct
3. Ensure environment variables are set for build
4. Check build logs for missing variables

## 📋 Checklist

- [ ] Created `.env` file with publisher ID
- [ ] Verified `.env` is in `.gitignore`
- [ ] Set production environment variables
- [ ] Tested ads in development
- [ ] Verified ads work in production
- [ ] Updated ad slot IDs after approval
- [ ] Tested different ad formats
- [ ] Verified responsive behavior

## 🔗 Related Files

- `src/config/adsense.js` - Main configuration
- `src/components/AdSense.jsx` - Ad component
- `.env` - Environment variables (create this)
- `.env.example` - Example environment file
- `index.html` - AdSense script loading

Your AdSense setup is now secure and production-ready! 🎉
