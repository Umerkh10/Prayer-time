import { CalculationResult, InheritanceFormData, InheritanceShare } from "../types/inheritance";

export const calculateInheritance = (data: InheritanceFormData): CalculationResult => {
  const { propertyValue, sons, daughters, brothers, sisters, father, mother, wives } = data;
  
  const shares: InheritanceShare[] = [];
  let totalShares = 0;
  
  // Add sons (multiplier of 2)
  if (sons > 0) {
    const sonsShares = sons * 2;
    totalShares += sonsShares;
    shares.push({
      recipient: 'Sons',
      count: sons,
      share: sonsShares,
      amount: 0, // Will calculate after determining valuePerShare
      multiplier: 2
    });
  }
  
  // Add daughters (multiplier of 1)
  if (daughters > 0) {
    const daughtersShares = daughters * 1;
    totalShares += daughtersShares;
    shares.push({
      recipient: 'Daughters',
      count: daughters,
      share: daughtersShares,
      amount: 0,
      multiplier: 1
    });
  }
  
  // Add brothers (multiplier of 2)
  if (brothers > 0) {
    const brothersShares = brothers * 2;
    totalShares += brothersShares;
    shares.push({
      recipient: 'Brothers',
      count: brothers,
      share: brothersShares,
      amount: 0,
      multiplier: 2
    });
  }
  
  // Add sisters (multiplier of 1)
  if (sisters > 0) {
    const sistersShares = sisters * 1;
    totalShares += sistersShares;
    shares.push({
      recipient: 'Sisters',
      count: sisters,
      share: sistersShares,
      amount: 0,
      multiplier: 1
    });
  }
  
  // Add father (if yes)
  if (father) {
    const fatherShares = 1;
    totalShares += fatherShares;
    shares.push({
      recipient: 'Father',
      count: 1,
      share: fatherShares,
      amount: 0,
      multiplier: 1
    });
  }
  
  // Add mother (if specified)
  if (mother && mother !== 'none') {
    const motherShares = parseFloat(mother);
    totalShares += motherShares;
    shares.push({
      recipient: 'Mother',
      count: 1,
      share: motherShares,
      amount: 0,
      multiplier: parseFloat(mother)
    });
  }
  
  // Add wives (max 4)
  if (wives > 0) {
    const wivesShares = wives * 1;
    totalShares += wivesShares;
    shares.push({
      recipient: 'Wives',
      count: wives,
      share: wivesShares,
      amount: 0,
      multiplier: 1
    });
  }
  
  // Calculate value per share
  const valuePerShare = {
    Sons: sons > 0 ? (propertyValue * 2) / totalShares : 0,
    Daughters: daughters > 0 ? propertyValue / totalShares : 0,
    Brothers: brothers > 0 ? (propertyValue * 2) / totalShares : 0,
    Sisters: sisters > 0 ? propertyValue / totalShares : 0,
    Father: father ? propertyValue / totalShares : 0,
    Mother: mother && mother !== 'none' ? (propertyValue * parseFloat(mother)) / totalShares : 0,
    Wives: wives > 0 ? propertyValue / totalShares : 0
  };
  
  // Calculate final amounts
  shares.forEach(item => {
    item.amount = item.count * valuePerShare[item.recipient as keyof typeof valuePerShare];
  });
  
  return {
    totalShares,
    valuePerShare,
    shares
  };
};