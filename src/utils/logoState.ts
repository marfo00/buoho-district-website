import { useState, useEffect } from 'react';
import customImages from '../data/customImages.json';

const DEFAULT_LOGO = '/images/gallery/logo_full.jpg';
const LOGO_STORAGE_KEY = 'buoho_district_custom_logo';

export function getChurchLogo(): string {
  if (customImages && (customImages as Record<string, string>)[LOGO_STORAGE_KEY]) {
    return (customImages as Record<string, string>)[LOGO_STORAGE_KEY];
  }
  if (typeof window !== 'undefined') {
    return localStorage.getItem(LOGO_STORAGE_KEY) || DEFAULT_LOGO;
  }
  return DEFAULT_LOGO;
}

export function useChurchLogo(): { logo: string } {
  const [logo, setLogo] = useState<string>(getChurchLogo);

  useEffect(() => {
    const handleUpdate = () => {
      setLogo(getChurchLogo());
    };
    window.addEventListener('buoho_logo_changed', handleUpdate);
    window.addEventListener('buoho_site_images_updated', handleUpdate);
    return () => {
      window.removeEventListener('buoho_logo_changed', handleUpdate);
      window.removeEventListener('buoho_site_images_updated', handleUpdate);
    };
  }, []);

  return { logo };
}
