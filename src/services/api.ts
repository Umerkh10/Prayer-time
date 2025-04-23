import { LocationData } from '../types';

export const fetchLocationData = async (): Promise<LocationData> => {
  try {
    const response = await fetch('https://pro.ip-api.com/json/?key=kHg84ht9eNasCRN&fields=lat,lon,city,country,timezone');
    
    if (!response.ok) {
      throw new Error('Failed to fetch location data');
    }
    
    return await response.json();
  } catch (error) {
    console.error('Error fetching location data:', error);
    // Return default values if location fetch fails
    return {
      lat: 0,
      lon: 0,
      city: 'Unknown',
      country: 'Pakistan', // Default to Pakistan since calculations are in PKR
      timezone: 'UTC'
    };
  }
};

// Currency mapping based on common countries
export const getCurrencyByCountry = (country: string) => {
  const currencyMap: Record<string, { code: string, symbol: string, name: string, rate: number }> = {
    'Pakistan': { code: 'PKR', symbol: '₨', name: 'Pakistani Rupee', rate: 1 },
    'United States': { code: 'USD', symbol: '$', name: 'US Dollar', rate: 0.0036 }, // Example rates
    'United Kingdom': { code: 'GBP', symbol: '£', name: 'British Pound', rate: 0.0028 },
    'Saudi Arabia': { code: 'SAR', symbol: '﷼', name: 'Saudi Riyal', rate: 0.013 },
    'United Arab Emirates': { code: 'AED', symbol: 'د.إ', name: 'UAE Dirham', rate: 0.013 },
    'India': { code: 'INR', symbol: '₹', name: 'Indian Rupee', rate: 0.30 },
    'Euro': { code: 'EUR', symbol: '€', name: 'Euro', rate: 0.0033 },
    // Default fallback
    'default': { code: 'PKR', symbol: '₨', name: 'Pakistani Rupee', rate: 1 }
  };

  // Check if country exists in the map, otherwise return default
  return currencyMap[country] || currencyMap['default'];
};