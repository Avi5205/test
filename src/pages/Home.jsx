import React from "react";
import AdSense from "../components/AdSense";
import { ADSENSE_CONFIG } from "../config/adsense";

export default function Home() {
  return (
    <div className="text-center space-y-6">
      <h1 className="text-3xl font-bold">Welcome to Kodder.in</h1>
      <p className="text-gray-700">
        Your free tools, calculators, and converters hub.
      </p>

      {/* Google AdSense Ad */}
      <AdSense adSlot={ADSENSE_CONFIG.AD_SLOTS.HOME_PAGE} />
    </div>
  );
}
