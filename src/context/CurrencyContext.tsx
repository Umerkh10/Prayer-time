"use client"
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Currency, LocationData } from '../types';
import { fetchLocationData, getCurrencyByCountry } from '../services/api';

interface CurrencyContextType {
  currency: Currency;
  location: LocationData | null;
  loading: boolean;
  error: string | null;
  convertToPKR: (amount: number) => number;
  convertFromPKR: (amount: number) => number;
}

const defaultCurrency: Currency = {
  code: 'PKR',
  symbol: '₨',
  name: 'Pakistani Rupee',
  rate: 1
};

const CurrencyContext = createContext<CurrencyContextType>({
  currency: defaultCurrency,
  location: null,
  loading: true,
  error: null,
  convertToPKR: (amount) => amount,
  convertFromPKR: (amount) => amount
});

export const useCurrency = () => useContext(CurrencyContext);

interface CurrencyProviderProps {
  children: ReactNode;
}

export const CurrencyProvider: React.FC<CurrencyProviderProps> = ({ children }) => {
  const [currency, setCurrency] = useState<Currency>(defaultCurrency);
  const [location, setLocation] = useState<LocationData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getLocationAndCurrency = async () => {
      try {
        setLoading(true);
        const locationData = await fetchLocationData();
        setLocation(locationData);
        
        const currencyInfo = getCurrencyByCountry(locationData.country);
        setCurrency(currencyInfo);
      } catch (err) {
        setError('Failed to load location data. Using default currency (PKR).');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    getLocationAndCurrency();
  }, []);

  // Convert from local currency to PKR
  const convertToPKR = (amount: number): number => {
    return amount / currency.rate;
  };

  // Convert from PKR to local currency
  const convertFromPKR = (amount: number): number => {
    return amount * currency.rate;
  };

  return (
    <CurrencyContext.Provider value={{ 
      currency, 
      location, 
      loading, 
      error,
      convertToPKR,
      convertFromPKR
    }}>
      {children}
    </CurrencyContext.Provider>
  );
};