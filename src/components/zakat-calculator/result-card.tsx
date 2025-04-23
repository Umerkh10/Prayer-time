import React, { useEffect, useState } from 'react';
import { ZakatResult } from '../../types';
import { useCurrency } from '../../context/CurrencyContext';
import { CheckCircle, AlertCircle } from 'lucide-react';
import { useTranslation } from '@/hooks/useTranslation';
import { Skeleton } from '../ui/skeleton';

interface ResultCardProps {
  result: ZakatResult;
  onReset: () => void;
}

const ResultCard: React.FC<ResultCardProps> = ({ result, onReset }) => {
  const { currency, convertFromPKR } = useCurrency();
  const { totalAssets, netAssets, nisabThreshold, zakatPayable, isDue } = result;
  const { t } = useTranslation("zakat")
  const [isLoading, setIsLoading] = useState(true);

  const formatCurrency = (amount: number): string => {
    const convertedAmount = convertFromPKR(amount);
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: currency.code,
      maximumFractionDigits: 2
    }).format(convertedAmount);
  };


  useEffect(() => {
    localStorage.setItem("loading", "true");
    setIsLoading(true);

    const timer = setTimeout(() => {
      localStorage.setItem("loading", "false");
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
    {isLoading ? <div className='px-8 mt-4'>
      <Skeleton className="h-48 w-full mx-auto max-w-xl" />
      <Skeleton className="mt-3 h-screen rounded-lg w-full mx-auto max-w-xl" />
    </div> :
      (<div
      className="w-full p-6  rounded-lg shadow-lg border border-emerald-100 
       flex flex-col"
    >
      <h3 className="text-xl font-semibold  mb-4 text-center">
      {t("zakat.resulttitle")}
      </h3>

      <div className="flex flex-col space-y-3">
        <div className="flex justify-between">
          <span className="text-muted-foreground"> {t("zakat.resultlabel1")}</span>
          <span className="font-medium">{formatCurrency(totalAssets)}</span>
        </div>

        <div className="flex justify-between">
          <span className="text-muted-foreground">{t("zakat.resultlabel2")}</span>
          <span className="font-medium">{formatCurrency(totalAssets - netAssets)}</span>
        </div>

        <div className="flex justify-between">
          <span className="text-muted-foreground">{t("zakat.resultlabel3")}</span>
          <span className="font-medium">{formatCurrency(netAssets)}</span>
        </div>

        <div className="flex justify-between">
          <span className="text-muted-foreground">{t("zakat.resultlabel4")}</span>
          <span className="font-medium">{formatCurrency(nisabThreshold)}</span>
        </div>

        <div className="h-px bg-gray-200 my-2"></div>

        <div className="flex justify-between items-center">
          <span className="text-muted-foreground font-medium">{t("zakat.resultlabel5")}</span>
          <span className={`font-bold ${isDue ? 'text-emerald-600' : 'text-amber-600'}`}>
            {isDue ? 'Yes' : 'No'}
          </span>
        </div>

        <div className="flex justify-between items-center">
          <span className="text-muted-foreground font-medium">{t("zakat.resultlabel6")}</span>
          <span className="font-bold text-emerald-600 text-lg">
            {formatCurrency(zakatPayable)}
          </span>
        </div>
      </div>

      <div className={`mt-6 p-4 rounded-md flex items-start ${isDue ? 'bg-zinc-100 dark:bg-black text-emerald-700' : 'bg-amber-50 text-amber-700'
        }`}>
        {isDue ? (
          <>
            <CheckCircle className="w-5 h-5 mt-0.5 mr-2 flex-shrink-0" />
            <div>
              <p className="font-medium">{t("zakat.resultinfotitle")}</p>
              <p className="text-sm mt-1">{t("zakat.resultinfodesc")} {formatCurrency(zakatPayable)}.</p>
            </div>
          </>
        ) : (
          <>
            <AlertCircle className="w-5 h-5 mt-0.5 mr-2 flex-shrink-0" />
            <div>
              <p className="font-medium">{t("zakat.resultinfotitle2")}</p>
              <p className="text-sm mt-1">{t("zakat.resultinfodesc2")}</p>
            </div>
          </>
        )}
      </div>

      <button
        onClick={onReset}
        className="mt-6 w-full py-2 px-4 bg-emerald-600 hover:bg-emerald-800 
        text-white font-medium rounded-md transition-colors duration-200"
      >
       {t("zakat.calculateagain")}
      </button>
    </div>)}
    </>
  )
}

export default ResultCard;