
export {};

declare global {
  interface Window {
    dataLayer?: any[];
    gtag?: (...args: any[]) => void;
    fbq?: (...args: any[]) => void;
    hashString?: (str: string) => string;
    generateEventId?: () => string;
    getClientInfo?: () => any;
  }
}
