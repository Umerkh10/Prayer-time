import React, { useState, useEffect } from 'react';
import { InheritanceFormData } from '../../types/inheritance';
import { saveToLocalStorage, loadFromLocalStorage, clearLocalStorage } from '../../utils/storageUtils';
import { useTranslation } from '@/hooks/useTranslation';
import { Skeleton } from '../ui/skeleton';

interface InheritanceFormProps {
  onCalculate: (data: InheritanceFormData) => void;
}

const defaultFormData: InheritanceFormData = {
  propertyValue: 0,
  sons: 0,
  daughters: 0,
  brothers: 0,
  sisters: 0,
  father: false,
  mother: 'none',
  wives: 0
};

const countryCurrencyMap: Record<string, string> = {
  'United States': 'USD',
  'Canada': 'CAD',
  'United Kingdom': 'GBP',
  'Germany': 'EUR',
  'France': 'EUR',
  'India': 'INR',
  'Japan': 'JPY',
  'Australia': 'AUD',
  'United Arab Emirates': 'AED',
  'Saudi Arabia': 'SAR',
  'Pakistan': 'RS'
};

const InheritanceForm: React.FC<InheritanceFormProps> = ({ onCalculate }) => {
  const { t } = useTranslation("inheritance")
  const [isLoading, setIsLoading] = useState(true);
  const [formData, setFormData] = useState<InheritanceFormData>(defaultFormData);
  const [currency, setCurrency] = useState<string>("");

  useEffect(() => {
    const fetchCurrency = async () => {
      try {
        const res = await fetch("https://pro.ip-api.com/json/?key=kHg84ht9eNasCRN&fields=country");
        const data = await res.json();
        const country = data?.country;
        if (country) {
          const currencyCode = countryCurrencyMap[country] || '';
          setCurrency(currencyCode);
        }
      } catch (err) {
        console.error("Failed to fetch user location", err);
      }
    };

    fetchCurrency();
  }, []);

  useEffect(() => {
    localStorage.setItem("loading", "true");
    setIsLoading(true);

    const timer = setTimeout(() => {
      localStorage.setItem("loading", "false");
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const savedData = loadFromLocalStorage();
    if (savedData) {
      setFormData(savedData);
      onCalculate(savedData);
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;

    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData(prev => ({ ...prev, [name]: checked }));
    }
    else if (type === 'number') {
      let numValue = parseFloat(value);

      if (name === 'wives' && numValue > 4) {
        numValue = 4;
      }

      if (numValue < 0 || isNaN(numValue)) {
        numValue = 0;
      }

      setFormData(prev => ({ ...prev, [name]: numValue }));
    }
    else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    saveToLocalStorage(formData);
    onCalculate(formData);
  };

  const handleClear = () => {
    setFormData(defaultFormData);
    clearLocalStorage();
    onCalculate(defaultFormData);
  };

  return (
    <>
      {isLoading ? <div className='px-8 mt-4'>
        <Skeleton className="h-48 w-full mx-auto max-w-xl" />
        <Skeleton className="mt-3 h-screen rounded-lg w-full mx-auto max-w-xl" />
      </div> : (<div className="bg-white dark:bg-black rounded-lg shadow-md p-6 mb-6">
        <h2 className="text-2xl font-bold  mb-6">{t("inheritance.heading")} </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid md:grid-cols-1 gap-6">
            <div className="space-y-2">
              <label htmlFor="propertyValue" className="block text-sm font-medium text-muted-foreground">
                {t("inheritance.field1")} {currency && `(${currency})`}
              </label>
              <div className="relative">
                {currency && (
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 text-sm">
                    {currency}
                  </span>
                )}
                <input
                  type="number"
                  id="propertyValue"
                  name="propertyValue"
                  value={formData.propertyValue}
                  onChange={handleChange}
                  className={`w-full pl-16 p-2 border border-gray-300 rounded-md shadow-sm focus:ring-emerald-500 focus:border-emerald-500`}
                  required
                />
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="sons" className="block text-sm font-medium text-muted-foreground">
                {t("inheritance.field2")}
              </label>
              <input
                type="number"
                id="sons"
                name="sons"
                value={formData.sons}
                onChange={handleChange}
                min="0"
                className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-emerald-500 focus:border-emerald-500"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="daughters" className="block text-sm font-medium text-muted-foreground">
                {t("inheritance.field3")}
              </label>
              <input
                type="number"
                id="daughters"
                name="daughters"
                value={formData.daughters}
                onChange={handleChange}
                min="0"
                className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-emerald-500 focus:border-emerald-500"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="brothers" className="block text-sm font-medium text-muted-foreground">
                {t("inheritance.field4")}
              </label>
              <input
                type="number"
                id="brothers"
                name="brothers"
                value={formData.brothers}
                onChange={handleChange}
                min="0"
                className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-emerald-500 focus:border-emerald-500"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="sisters" className="block text-sm font-medium text-muted-foreground">
                {t("inheritance.field5")}
              </label>
              <input
                type="number"
                id="sisters"
                name="sisters"
                value={formData.sisters}
                onChange={handleChange}
                min="0"
                className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-emerald-500 focus:border-emerald-500"
              />
            </div>

            <div className="space-y-2">
              <span className="block text-sm font-medium text-muted-foreground">{t("inheritance.field6")}</span>
              <div className="flex items-center space-x-2">
                <label className="inline-flex items-center">
                  <input
                    type="checkbox"
                    name="father"
                    checked={formData.father}
                    onChange={handleChange}
                    className="h-4 w-4 text-emerald-600 focus:ring-emerald-500 border-gray-300 rounded"
                  />
                  <span className="ml-2 text-muted-foreground">{t("inheritance.field6yes")}</span>
                </label>
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="mother" className="block text-sm font-medium text-muted-foreground">
                {t("inheritance.field7")}
              </label>
              <select
                id="mother"
                name="mother"
                value={formData.mother}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-emerald-500 focus:border-emerald-500"
              >
                <option value="none">None</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
              </select>
            </div>

            <div className="space-y-2">
              <label htmlFor="wives" className="block text-sm font-medium text-muted-foreground">
                {t("inheritance.field8")}
              </label>
              <input
                type="number"
                id="wives"
                name="wives"
                value={formData.wives}
                onChange={handleChange}
                min="0"
                max="4"
                className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-emerald-500 focus:border-emerald-500"
              />
            </div>
          </div>

          <div className="pt-4 flex flex-col sm:flex-row space-y-3 sm:space-y-0 justify-between">
            <button
              type="button"
              onClick={handleClear}
              className="px-4 py-2 text-sm font-medium text-muted-foregroundbg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 dark:hover:bg-gray-950 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 transition-colors duration-200"
            >
              {t("inheritance.clear")}
            </button>
            <button
              type="submit"
              className="px-4 py-2 text-sm font-medium text-white bg-emerald-800 border border-transparent rounded-md shadow-sm hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 transition-colors duration-200"
            >
              {t("inheritance.calculate")}
            </button>
          </div>
        </form>
      </div>)}
    </>
  )
}

export default InheritanceForm;