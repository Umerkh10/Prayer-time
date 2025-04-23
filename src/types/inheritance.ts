export interface InheritanceFormData {
    propertyValue: number;
    sons: number;
    daughters: number;
    brothers: number;
    sisters: number;
    father: boolean;
    mother: string;
    wives: number;
  }
  
  export interface InheritanceShare {
    recipient: string;
    count: number;
    share: number;
    amount: number;
    multiplier: number;
  }
  
  export interface CalculationResult {
    totalShares: number;
    valuePerShare: {
        Sons: number;
        Daughters: number;
        Brothers: number;
        Sisters: number;
        Father: number;
        Mother: number;
        Wives: number;
    };
    shares: InheritanceShare[];
  }