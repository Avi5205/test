import React, { useEffect } from "react";
import { ADSENSE_CONFIG } from "../config/adsense";

const AdSense = ({
  adSlot,
  adFormat = ADSENSE_CONFIG.DEFAULT_AD_FORMAT,
  fullWidthResponsive = ADSENSE_CONFIG.DEFAULT_FULL_WIDTH_RESPONSIVE,
  className = "",
  style = {},
}) => {
  useEffect(() => {
    // Push the ad to AdSense when component mounts
    if (window.adsbygoogle) {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    }
  }, []);

  return (
    <div className={`my-8 ${className}`} style={style}>
      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client={ADSENSE_CONFIG.PUBLISHER_ID}
        data-ad-slot={adSlot}
        data-ad-format={adFormat}
        data-full-width-responsive={fullWidthResponsive}
      />
    </div>
  );
};

export default AdSense;
