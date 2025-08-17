# Google AdSense Setup Guide

## Overview

This guide explains how to set up and use Google AdSense in your React application.

## What's Already Done ✅

1. **AdSense Script**: Added to `index.html` with your publisher ID `ca-pub-1705087005488253`
2. **Reusable Component**: Created `src/components/AdSense.jsx` for easy ad placement
3. **Page Integration**: Added ads to Home, Converter, and Calculator pages

## Next Steps for You

### 1. Get AdSense Approval

- Go to [Google AdSense](https://www.google.com/adsense)
- Sign in with your Google account
- Submit your site for review
- Wait for approval (usually 1-2 weeks)

### 2. Create Ad Units

After approval, create ad units in your AdSense dashboard:

- **Home Page Ad**: Create a display ad unit
- **Converter Page Ad**: Create another display ad unit
- **Calculator Page Ad**: Create a third display ad unit

### 3. Replace Placeholder Ad Slots

Update the `adSlot` prop in each page:

```jsx
// In Home.jsx
<AdSense adSlot="1234567890" /> // Replace with actual ad slot ID

// In Converter.jsx
<AdSense adSlot="0987654321" /> // Replace with actual ad slot ID

// In Calculator.jsx
<AdSense adSlot="1122334455" /> // Replace with actual ad slot ID
```

### 4. Test Your Ads

- Run your development server
- Check browser console for any AdSense errors
- Verify ads are loading properly

## AdSense Component Usage

```jsx
import AdSense from "../components/AdSense";

// Basic usage
<AdSense adSlot="your-ad-slot-id" />

// With custom styling
<AdSense
  adSlot="your-ad-slot-id"
  className="my-custom-class"
  style={{ margin: '20px 0' }}
/>

// Different ad formats
<AdSense
  adSlot="your-ad-slot-id"
  adFormat="horizontal"
  fullWidthResponsive={false}
/>
```

## Important Notes

⚠️ **Development vs Production**:

- Ads won't show in development (localhost)
- Only work on your live domain after AdSense approval
- Test on a live domain to verify functionality

⚠️ **Ad Placement Guidelines**:

- Don't place too many ads (Google limits)
- Ensure ads don't interfere with user experience
- Follow AdSense policies for ad placement

⚠️ **Performance**:

- AdSense script is loaded asynchronously
- Ads are loaded only when components mount
- Minimal impact on page performance

## Troubleshooting

### Ads Not Showing?

1. Check if AdSense is approved
2. Verify publisher ID is correct
3. Ensure you're on a live domain (not localhost)
4. Check browser console for errors

### Console Errors?

- Make sure AdSense script is loading
- Verify ad slot IDs are correct
- Check if ads are blocked by ad blockers

## Support

- [Google AdSense Help Center](https://support.google.com/adsense)
- [AdSense Policies](https://support.google.com/adsense/answer/48182)
- [AdSense Community](https://support.google.com/adsense/community)

## File Structure

```
src/
├── components/
│   └── AdSense.jsx          # Reusable AdSense component
├── pages/
│   ├── Home.jsx             # Home page with ad
│   ├── Converter.jsx        # Converter page with ad
│   └── Calculator.jsx       # Calculator page with ad
└── index.html               # Contains AdSense script
```

Your AdSense setup is now complete! Just wait for approval and replace the placeholder ad slot IDs with your actual ones.
