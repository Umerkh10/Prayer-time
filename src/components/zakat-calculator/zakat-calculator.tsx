"use client"
import React, { useState, useEffect } from 'react';
import { Calculator } from 'lucide-react';
import InputField from './input-field';
import ResultCard from './result-card';
import { ZakatInputs, ZakatResult } from '../../types';
import { calculateZakat } from '../../utils/calculator';
import { useCurrency } from '../../context/CurrencyContext';
import { useTranslation } from '@/hooks/useTranslation';
import { Skeleton } from '../ui/skeleton';

const STORAGE_KEY = 'zakatCalculatorInputs';

const ZakatCalculator: React.FC = () => {
  const { currency, convertToPKR } = useCurrency();
  const [showResult, setShowResult] = useState(false);
  const [result, setResult] = useState<ZakatResult | null>(null);
  const { t } = useTranslation("zakat")
  const [isLoading, setIsLoading] = useState(true);




  const [inputs, setInputs] = useState<ZakatInputs>(() => {
    if (typeof window === 'undefined') return {
      cash: 0,
      goldWeight: 0,
      goldRate: 0,
      silverWeight: 0,
      silverRate: 0,
      businessAssets: 0,
      receivables: 0,
      investments: 0,
      property: 0,
      liabilities: 0
    };

    const savedInputs = localStorage.getItem(STORAGE_KEY);
    return savedInputs ? JSON.parse(savedInputs) : {
      cash: 0,
      goldWeight: 0,
      goldRate: 0,
      silverWeight: 0,
      silverRate: 0,
      businessAssets: 0,
      receivables: 0,
      investments: 0,
      property: 0,
      liabilities: 0
    };
  });

  useEffect(() => {
    localStorage.setItem("loading", "true");
    setIsLoading(true);

    const timer = setTimeout(() => {
      localStorage.setItem("loading", "false");
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(inputs));
  }, [inputs]);

  const handleInputChange = (field: keyof ZakatInputs, value: number) => {
    setInputs(prev => ({ ...prev, [field]: value }));
  };

  const handleCalculate = () => {
    const pkrInputs = {
      ...inputs,
      cash: convertToPKR(inputs.cash),
      businessAssets: convertToPKR(inputs.businessAssets),
      receivables: convertToPKR(inputs.receivables),
      investments: convertToPKR(inputs.investments),
      property: convertToPKR(inputs.property),
      liabilities: convertToPKR(inputs.liabilities),
      goldRate: convertToPKR(inputs.goldRate),
      silverRate: convertToPKR(inputs.silverRate)
    };

    const zakatResult = calculateZakat(pkrInputs);
    setResult(zakatResult);
    setShowResult(true);
  };

  const resetCalculator = () => {
    setShowResult(false);
    setResult(null);
    setInputs({
      cash: 0,
      goldWeight: 0,
      goldRate: 0,
      silverWeight: 0,
      silverRate: 0,
      businessAssets: 0,
      receivables: 0,
      investments: 0,
      property: 0,
      liabilities: 0
    });
    localStorage.removeItem(STORAGE_KEY);
  };

  return (
    <>
      {isLoading ? <div className='px-8 mt-4'>
        <Skeleton className="h-48 w-full mx-auto max-w-xl" />
        <Skeleton className="mt-3 h-screen rounded-lg w-full mx-auto max-w-xl" />
      </div> :
        (<div className="w-full max-w-3xl px-4">
          {!showResult ? (
            <div className="bg-gray-50 dark:bg-black rounded-lg shadow-lg p-6 md:p-8 animate-fade-in">
              <div className="flex items-center justify-center mb-6">
                <Calculator className="w-8 h-8 text-emerald-600 mr-3" />
                <h2 className="text-2xl font-bold ">{t("zakat.heading2")}</h2>
              </div>

              <p className="text-muted-foreground mb-6 max-sm:text-sm text-center">
                {t("zakat.desc1")}
                {currency.code !== 'PKR' && (
                  <span className="block mt-2 text-sm">
                    {t("zakat.desc2")} {currency.code}  {t("zakat.desc3")}.
                  </span>
                )}
              </p>

              <div className="mb-6">
                <h3 className="text-lg font-semibold  mb-3">
                  {t("zakat.investment")}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <InputField
                    id="cash"
                    label={t("zakat.labelinvestment")}
                    value={inputs.cash}
                    onChange={(value) => handleInputChange('cash', value)}
                  />
                  <InputField
                    id="investments"
                    label={t("zakat.labelinvestment2")}
                    value={inputs.investments}
                    onChange={(value) => handleInputChange('investments', value)}
                  />
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold  mb-3">
                  {t("zakat.metals")}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <InputField
                    id="goldWeight"
                    label={t("zakat.labelgold")}
                    value={inputs.goldWeight}
                    onChange={(value) => handleInputChange('goldWeight', value)}
                    showCurrency={false}
                  />
                  <InputField
                    id="goldRate"
                    label={t("zakat.labelgold2")}
                    value={inputs.goldRate}
                    onChange={(value) => handleInputChange('goldRate', value)}
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <InputField
                    id="silverWeight"
                    label={t("zakat.labelsilver")}
                    value={inputs.silverWeight}
                    onChange={(value) => handleInputChange('silverWeight', value)}
                    showCurrency={false}
                  />
                  <InputField
                    id="silverRate"
                    label={t("zakat.labelsilver2")}
                    value={inputs.silverRate}
                    onChange={(value) => handleInputChange('silverRate', value)}
                  />
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold  mb-3">
                  {t("zakat.assets")}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <InputField
                    id="businessAssets"
                    label={t("zakat.assetslabel")}
                    value={inputs.businessAssets}
                    onChange={(value) => handleInputChange('businessAssets', value)}
                  />
                  <InputField
                    id="property"
                    label={t("zakat.assetslabel2")}
                    value={inputs.property}
                    onChange={(value) => handleInputChange('property', value)}
                  />
                  <InputField
                    id="receivables"
                    label={t("zakat.assetslabel3")}
                    value={inputs.receivables}
                    onChange={(value) => handleInputChange('receivables', value)}
                  />
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-lg font-semibold  mb-3">
                  {t("zakat.liabilities")}
                </h3>
                <InputField
                  id="liabilities"
                  label={t("zakat.liabilitieslabel")}
                  value={inputs.liabilities}
                  onChange={(value) => handleInputChange('liabilities', value)}
                />
              </div>

              <button
                onClick={handleCalculate}
                className="w-full py-3 px-4 bg-emerald-600 hover:bg-emerald-700 
            text-white font-medium rounded-md shadow transition-colors duration-200
            flex items-center justify-center"
              >
                <Calculator className="w-5 h-5 mr-2" />
                {t("zakat.calculatebutton")}
              </button>
            </div>
          ) : (
            result && <ResultCard result={result} onReset={resetCalculator} />
          )}
        </div>)}
    </>
  )
}

export default ZakatCalculator;