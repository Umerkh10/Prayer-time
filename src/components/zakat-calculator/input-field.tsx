import React from 'react';
import { useCurrency } from '../../context/CurrencyContext';

interface InputFieldProps {
  id: string;
  label: string;
  value: number | '';
  onChange: (value: number) => void;
  showCurrency?: boolean;
  placeholder?: string;
}

const InputField: React.FC<InputFieldProps> = ({
  id,
  label,
  value,
  onChange,
  showCurrency = true,
  placeholder
}) => {
  const { currency } = useCurrency();

  return (
    <div className="mb-4">
      <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-1">
        {label}
      </label>
      <div className="relative">
        {showCurrency && (
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <span className="text-gray-500">{currency.symbol}</span>
          </div>
        )}
        <input
          type="number"
          id={id}
          placeholder={placeholder || label}
          value={value}
          onChange={(e) => onChange(e.target.value === '' ? 0 : parseFloat(e.target.value))}
          className={`block w-full px-4 py-2 ${
            showCurrency ? 'pl-8' : 'pl-4'
          } pr-4 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 
          focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500
          transition-all duration-200`}
          min="0"
          step="any"
        />
      </div>
    </div>
  );
};

export default InputField;