export interface LocationData {
    lat: number;
    lon: number;
    city: string;
    country: string;
    timezone: string;
  }
  
  export interface Currency {
    code: string;
    symbol: string;
    name: string;
    rate: number; // Exchange rate relative to PKR
  }
  
  export interface ZakatInputs {
    cash: number;
    goldWeight: number;
    goldRate: number;
    silverWeight: number;
    silverRate: number;
    businessAssets: number;
    receivables: number;
    investments: number;
    property: number;
    liabilities: number;
  }
  
  export interface ZakatResult {
    totalAssets: number;
    netAssets: number;
    nisabThreshold: number;
    zakatPayable: number;
    isDue: boolean;
  }