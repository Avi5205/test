// AdSense Configuration
export const ADSENSE_CONFIG = {
  // Publisher ID - Replace with your actual AdSense publisher ID
  PUBLISHER_ID:
    import.meta.env.VITE_ADSENSE_PUBLISHER_ID || "ca-pub-1705087005488253",

  // Default ad settings
  DEFAULT_AD_FORMAT: "auto",
  DEFAULT_FULL_WIDTH_RESPONSIVE: true,

  // Ad slot IDs - Replace these with your actual ad unit IDs after AdSense approval
  AD_SLOTS: {
    HOME_PAGE: "home-page-ad",
    CONVERTER_PAGE: "converter-page-ad",
    CALCULATOR_PAGE: "calculator-page-ad",
  },

  // AdSense script URL
  SCRIPT_URL: "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js",
};

// Helper function to get full AdSense script URL
export const getAdSenseScriptUrl = () => {
  return `${ADSENSE_CONFIG.SCRIPT_URL}?client=${ADSENSE_CONFIG.PUBLISHER_ID}`;
};

// Helper function to validate publisher ID format
export const isValidPublisherId = (publisherId) => {
  return /^ca-pub-\d+$/.test(publisherId);
};
