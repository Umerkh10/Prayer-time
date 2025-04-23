import { ZakatInputs, ZakatResult } from '../types';

export const calculateZakat = (inputs: ZakatInputs): ZakatResult => {
  const {
    cash,
    goldWeight,
    goldRate,
    silverWeight,
    silverRate,
    businessAssets,
    receivables,
    investments,
    property,
    liabilities
  } = inputs;

  const goldValue = goldWeight * goldRate;
  const silverValue = silverWeight * silverRate;

  const totalAssets = cash + goldValue + silverValue + businessAssets + receivables + investments + property;
  const netAssets = totalAssets - liabilities;

  // Nisab threshold is the value of 612.36 grams of silver
  const nisabThreshold = 612.36 * silverRate;
  
  const isDue = netAssets >= nisabThreshold;
  const zakatPayable = isDue ? netAssets * 0.025 : 0;

  return {
    totalAssets,
    netAssets,
    nisabThreshold,
    zakatPayable,
    isDue
  };
};