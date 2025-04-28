
import React, { useEffect } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';
import DynamicNotifications from '../components/DynamicNotifications';
import CookieConsent from '../components/CookieConsent';
import AnimatedParticles from '../components/AnimatedParticles';

const Index = () => {
  // Track scroll depth for analytics
  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPosition = window.scrollY;
      const scrollPercentage = (scrollPosition / scrollHeight) * 100;
      
      // Report scroll depth at specific thresholds
      if (scrollPercentage >= 25 && !sessionStorage.getItem('scroll_25')) {
        sessionStorage.setItem('scroll_25', 'true');
        if (typeof window.gtag === 'function') {
          window.gtag('event', 'scroll_depth', { depth: '25%' });
        }
        if (typeof window.fbq === 'function') {
          window.fbq('trackCustom', 'ScrollDepth25');
        }
      }
      
      if (scrollPercentage >= 50 && !sessionStorage.getItem('scroll_50')) {
        sessionStorage.setItem('scroll_50', 'true');
        if (typeof window.gtag === 'function') {
          window.gtag('event', 'scroll_depth', { depth: '50%' });
        }
        if (typeof window.fbq === 'function') {
          window.fbq('trackCustom', 'ScrollDepth50');
        }
      }
      
      if (scrollPercentage >= 75 && !sessionStorage.getItem('scroll_75')) {
        sessionStorage.setItem('scroll_75', 'true');
        if (typeof window.gtag === 'function') {
          window.gtag('event', 'scroll_depth', { depth: '75%' });
        }
        if (typeof window.fbq === 'function') {
          window.fbq('trackCustom', 'ScrollDepth75');
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    // Track time on page
    const timeIntervals = [10, 30, 60, 120];
    
    timeIntervals.forEach(seconds => {
      setTimeout(() => {
        if (typeof window.gtag === 'function') {
          window.gtag('event', 'time_on_page', { duration: `${seconds}s` });
        }
        if (typeof window.fbq === 'function') {
          window.fbq('trackCustom', 'TimeOnPage', { duration: seconds });
        }
      }, seconds * 1000);
    });
    
    // Generate unique session ID
    const sessionId = `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    sessionStorage.setItem('session_id', sessionId);
    
    if (typeof window.gtag === 'function') {
      window.gtag('set', { session_id: sessionId });
    }
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <div className="flex flex-col min-h-screen bg-black">
      <AnimatedParticles />
      <Header />
      <main>
        <Hero />
        <Testimonials />
      </main>
      <Footer />
      <DynamicNotifications />
      <CookieConsent />
    </div>
  );
};

export default Index;
