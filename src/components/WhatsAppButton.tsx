
import React, { useEffect } from "react";
import { MessageSquare } from "lucide-react";

const WhatsAppButton = () => {
  const handleWhatsAppClick = () => {
    const eventId = generateEventId();
    const clientInfo = getClientInfo();
    
    // Trigger dataLayer event
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: 'lead',
      event_category: 'Engagement',
      event_label: 'WhatsApp_Click',
      screen_resolution: clientInfo.screenResolution,
      language: clientInfo.language,
      timezone_offset: clientInfo.timezoneOffset,
      referrer: clientInfo.referrer,
      utm_source: clientInfo.utm_source,
      utm_medium: clientInfo.utm_medium,
      utm_campaign: clientInfo.utm_campaign,
      utm_content: clientInfo.utm_content,
      utm_term: clientInfo.utm_term,
      external_id: clientInfo.external_id,
      event_id: eventId
    });

    // GA4 event
    if (typeof gtag === 'function') {
      gtag('event', 'lead', {
        event_category: 'Engagement',
        event_label: 'WhatsApp_Click',
        screen_resolution: clientInfo.screenResolution,
        language: clientInfo.language,
        timezone_offset: clientInfo.timezoneOffset,
        referrer: clientInfo.referrer,
        utm_source: clientInfo.utm_source,
        utm_medium: clientInfo.utm_medium,
        utm_campaign: clientInfo.utm_campaign,
        utm_content: clientInfo.utm_content,
        utm_term: clientInfo.utm_term,
        event_id: eventId
      });
    }

    // Facebook Pixel events
    if (typeof fbq === 'function') {
      fbq('track', 'Lead', {
        event_name: 'Lead',
        event_id: eventId,
        event_time: Math.floor(Date.now()/1000),
        action_source: 'website',
        event_source_url: window.location.href,
        user_data: {
          client_user_agent: clientInfo.userAgent,
          external_id: clientInfo.external_id,
          fn: 'hashed_firstname_example',
          ln: 'hashed_lastname_example'
        },
        custom_data: {
          screen_resolution: clientInfo.screenResolution,
          language: clientInfo.language,
          timezone_offset: clientInfo.timezoneOffset,
          referrer: clientInfo.referrer,
          utm_source: clientInfo.utm_source,
          utm_medium: clientInfo.utm_medium,
          utm_campaign: clientInfo.utm_campaign,
          utm_content: clientInfo.utm_content,
          utm_term: clientInfo.utm_term,
          content_type: 'lead',
          content_name: 'WhatsApp Lead',
          content_category: 'Gambling',
          content_ids: ['pliim_bet_whatsapp_lead']
        }
      });

      fbq('track', 'InitiateCheckout', {
        content_type: 'lead',
        content_name: 'WhatsApp Lead',
        content_category: 'Gambling',
        content_ids: ['pliim_bet_whatsapp_lead'],
        event_id: eventId
      });
    }
    
    // Try API conversions call if needed
    try {
      // This is just for reference - would require server-side implementation for proper token handling
      /*
      fetch('https://graph.facebook.com/v20.0/2435486353491805/events', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          data: [{
            event_name: 'Lead',
            event_time: Math.floor(Date.now()/1000),
            action_source: 'website',
            event_id: eventId,
            // Additional data would go here
          }] 
        })
      });
      */
    } catch (error) {
      console.error("API conversion call failed", error);
    }
  };

  return (
    <a
      href="https://wa.me/5581999842899?text=quero%20jogar%20na%20Pliim%20Bet!"
      target="_blank"
      rel="noopener noreferrer"
      className="btn-cta flex items-center gap-3"
      onClick={handleWhatsAppClick}
      aria-label="Quero meu cupom agora no WhatsApp"
    >
      <MessageSquare className="h-6 w-6" />
      <span>QUERO MEU CUPOM AGORA!</span>
    </a>
  );
};

// TypeScript declarations to avoid compilation errors
declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
    fbq: (...args: any[]) => void;
  }
}

function generateEventId() { 
  return 'event_' + Math.random().toString(36).substr(2, 9) + '_' + Date.now(); 
}

function getClientInfo() { 
  try { 
    const ua = navigator.userAgent;
    const sr = window.screen.width + 'x' + window.screen.height;
    const lang = navigator.language || navigator.userLanguage;
    const tz = new Date().getTimezoneOffset() / 60;
    const ref = encodeURIComponent(document.referrer || '');
    const utm = new URLSearchParams(window.location.search);
    
    return { 
      userAgent: ua, 
      screenResolution: sr, 
      language: lang, 
      timezoneOffset: tz, 
      referrer: ref, 
      utm_source: utm.get('utm_source') || '', 
      utm_medium: utm.get('utm_medium') || '', 
      utm_campaign: utm.get('utm_campaign') || '', 
      utm_content: utm.get('utm_content') || '', 
      utm_term: utm.get('utm_term') || '',
      external_id: hashString(navigator.userAgent+navigator.language+(new Date().getTimezoneOffset()/60))
    }; 
  } catch (e) {
    console.error("Error getting client info", e);
    return {};
  }
}

function hashString(str: string) { 
  let hash = 0; 
  if (str.length === 0) return hash.toString(); 
  for (let i = 0; i < str.length; i++) { 
    const char = str.charCodeAt(i); 
    hash = ((hash << 5) - hash) + char; 
    hash = hash & hash; 
  } 
  return hash.toString(); 
}

export default WhatsAppButton;
