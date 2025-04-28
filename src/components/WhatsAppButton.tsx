
import React, { useCallback } from "react";
import { MessageSquare } from "lucide-react";

const WhatsAppButton = () => {
  const handleWhatsAppClick = useCallback(() => {
    // Função encapsulada para geração de ID de evento
    const generateEventId = window.generateEventId || (() => 'event_' + Math.random().toString(36).substr(2, 9) + '_' + Date.now());
    
    // Função encapsulada para obtenção de informações do cliente
    const getClientInfo = window.getClientInfo || (() => {
      try { 
        const ua = navigator.userAgent;
        const sr = window.screen.width + 'x' + window.screen.height;
        const lang = navigator.language || navigator.userLanguage;
        const tz = new Date().getTimezoneOffset() / 60;
        const ref = encodeURIComponent(document.referrer || '');
        const utm = new URLSearchParams(window.location.search);
        
        // Função para hash de string
        const hashString = (str) => {
          let hash = 0; 
          if (str.length === 0) return hash.toString(); 
          for (let i = 0; i < str.length; i++) { 
            const char = str.charCodeAt(i); 
            hash = ((hash << 5) - hash) + char; 
            hash = hash & hash; 
          } 
          return hash.toString();
        };
        
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
        console.error("Erro ao obter informações do cliente", e);
        return {};
      }
    });
    
    const eventId = generateEventId();
    const clientInfo = getClientInfo();
    
    // Dispara eventos para o dataLayer
    try {
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
    } catch (e) {
      console.error("Erro ao enviar para dataLayer", e);
    }

    // Dispara eventos para o GA4
    try {
      if (typeof window.gtag === 'function') {
        window.gtag('event', 'lead', {
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
    } catch (e) {
      console.error("Erro ao enviar para GA4", e);
    }

    // Dispara eventos para o Facebook Pixel
    try {
      if (typeof window.fbq === 'function') {
        window.fbq('track', 'Lead', {
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

        window.fbq('track', 'InitiateCheckout', {
          content_type: 'lead',
          content_name: 'WhatsApp Lead',
          content_category: 'Gambling',
          content_ids: ['pliim_bet_whatsapp_lead'],
          event_id: eventId
        });
      }
    } catch (e) {
      console.error("Erro ao enviar para Facebook Pixel", e);
    }
  }, []);

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

export default WhatsAppButton;
