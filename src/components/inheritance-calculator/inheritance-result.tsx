import React, { useEffect, useState } from 'react';
import { CalculationResult } from '../../types/inheritance';
import { useTranslation } from '@/hooks/useTranslation';
import { Skeleton } from '../ui/skeleton';

interface InheritanceResultsProps {
    result: CalculationResult;
    propertyValue: number;
}

const InheritanceResults: React.FC<InheritanceResultsProps> = ({ result, propertyValue }) => {
    const { t } = useTranslation("inheritance")
    const [isLoading, setIsLoading] = useState(true);
    const { shares, totalShares, valuePerShare } = result;

    useEffect(() => {
        localStorage.setItem("loading", "true");
        setIsLoading(true);

        const timer = setTimeout(() => {
            localStorage.setItem("loading", "false");
            setIsLoading(false);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);


    if (propertyValue === 0 || totalShares === 0) {
        return (
            <div className="bg-white dark:bg-black rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-bold  mb-4"> {t("inheritance.title2")}</h2>
                <p className="text-muted-foreground">{t("inheritance.desc2")}</p>
            </div>
        );
    }

    return (
        <>
        {isLoading ? <div className='px-8 mt-4'>
          <Skeleton className="h-48 w-full mx-auto max-w-xl" />
          <Skeleton className="mt-3 h-screen rounded-lg w-full mx-auto max-w-xl" />
        </div> :(<div className="bg-white dark:bg-black rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold  mb-6">{t("inheritance.title2")}</h2>

            <div className="mb-6">
                <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="bg-gray-50 dark:bg-black p-4 rounded-lg">
                        <p className="text-sm text-muted-foreground">{t("inheritance.resultvalue1")}</p>
                        <p className="text-2xl font-semibold ">
                            {propertyValue.toLocaleString()}
                        </p>
                    </div>
                    <div className="bg-gray-50 dark:bg-black p-4 rounded-lg">
                        <p className="text-sm text-muted-foreground">{t("inheritance.resultvalue2")}</p>
                        <p className="text-2xl font-semibold ">
                            {totalShares}
                        </p>
                    </div>
                </div>

                {Object.entries(valuePerShare).map(([key, value]) => (
                    <div key={key} className="bg-gray-50 dark:bg-black p-4 rounded-lg mb-4">
                        <p className="text-sm text-muted-foreground">{key}</p>
                        <p className="text-lg font-semibold">
                            {new Intl.NumberFormat(undefined, { maximumFractionDigits: 2 }).format(value)}
                        </p>
                    </div>
                ))}
            </div>

            <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50 dark:bg-black">
                        <tr>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                            {t("inheritance.recipient")}
                            </th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                            {t("inheritance.count")}
                            </th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                            {t("inheritance.multiplier")}
                            </th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                            {t("inheritance.shares")}
                            </th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                            {t("inheritance.amount")}
                            </th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                            {t("inheritance.percentage")}
                            </th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {shares.map((item, index) => {
                            const percentage = (item.share / totalShares) * 100;

                            return (
                                <tr key={index} className="hover:bg-gray-50 dark:bg-black transition-colors duration-150">
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium ">
                                        {item.recipient}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-muted-foreground">
                                        {item.count}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-muted-foreground">
                                        {item.multiplier}x
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-muted-foreground">
                                        {item.share}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm  font-medium">
                                        {item.amount.toLocaleString(undefined, { maximumFractionDigits: 2 })}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="flex items-center">
                                            <div className="w-full bg-gray-200 rounded-full h-2.5">
                                                <div
                                                    className="bg-emerald-600 h-2.5 rounded-full"
                                                    style={{ width: `${percentage}%` }}
                                                ></div>
                                            </div>
                                            <span className="ml-2 text-sm text-muted-foreground">
                                                {percentage.toFixed(1)}%
                                            </span>
                                        </div>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>)}
</>
)}

export default InheritanceResults;