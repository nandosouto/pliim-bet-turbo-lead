
import React, { useState, useEffect } from "react";

const CookieConsent = () => {
  const [showConsent, setShowConsent] = useState(false);

  useEffect(() => {
    // Check if user has already consented
    const hasConsented = localStorage.getItem("cookie-consent") === "true";
    
    // If not, show the consent banner
    if (!hasConsented) {
      setShowConsent(true);
    } else {
      // If already consented, enable tracking
      enableTracking();
    }
  }, []);

  const acceptCookies = () => {
    // Save consent in localStorage
    localStorage.setItem("cookie-consent", "true");
    setShowConsent(false);
    
    // Enable tracking scripts
    enableTracking();
  };

  const enableTracking = () => {
    // Enable Facebook Pixel tracking
    if (typeof window.fbq === "function") {
      window.fbq("consent", "grant");
    }
    
    // Enable Google Analytics tracking
    if (typeof window.gtag === "function") {
      window.gtag("consent", "update", {
        analytics_storage: "granted",
        ad_storage: "granted",
      });
    }
  };

  if (!showConsent) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-black/90 backdrop-blur-md text-white p-4 z-50 border-t border-[#FFD700]/20 animate-fade-in">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-sm">
            Este site usa cookies para melhorar sua experiência. Ao continuar navegando, você concorda com nossa política de cookies.
          </div>
          <div className="flex gap-2">
            <button
              onClick={acceptCookies}
              className="bg-[#00B300] text-white px-4 py-2 rounded-md text-sm whitespace-nowrap hover:bg-[#009900] transition-colors"
            >
              Aceitar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
