"use client"
import React, { useEffect, useState } from 'react';
import { InheritanceFormData } from '../../../types/inheritance';
import InheritanceForm from '../../../components/inheritance-calculator/inheritance-form';
import InheritanceResults from '../../../components/inheritance-calculator/inheritance-result';
import { calculateInheritance } from '../../../utils/calculation';
import { CalculatorIcon as CalculateIcon } from 'lucide-react';
import { useTranslation } from '@/hooks/useTranslation';
import { Skeleton } from '@/components/ui/skeleton';

function CalculationPage() {
  const { t } = useTranslation("inheritance")
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    localStorage.setItem("loading", "true");
    setIsLoading(true);

    const timer = setTimeout(() => {
      localStorage.setItem("loading", "false");
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);
  
  const [formData, setFormData] = useState<InheritanceFormData>({
    propertyValue: 0,
    sons: 0,
    daughters: 0,
    brothers: 0,
    sisters: 0,
    father: false,
    mother: 'none',
    wives: 0
  });

  const [calculationResult, setCalculationResult] = useState(calculateInheritance(formData));

  const handleCalculate = (data: InheritanceFormData) => {
    setFormData(data);
    setCalculationResult(calculateInheritance(data));
  };

  return (
    <>
    {isLoading ? <div className='px-8 mt-4'>
      <Skeleton className="h-48 w-full mx-auto max-w-xl" />
      <Skeleton className="mt-3 h-screen rounded-lg w-full mx-auto max-w-xl" />
    </div> :(
      <div className="min-h-screen ">
      <header className="bg-emerald-800 text-white shadow-lg">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center space-x-3">
            <CalculateIcon size={28} />
            <h1 className="text-2xl md:text-3xl font-bold">{t("inheritance.title")}</h1>
          </div>
          <p className="mt-2 text-emerald-100">{t("inheritance.desc")}</p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <InheritanceForm onCalculate={handleCalculate} />
          <InheritanceResults result={calculationResult} propertyValue={formData.propertyValue} />
        </div>
      </main>


    </div>)}
</>
)}

export default CalculationPage;