import { InheritanceFormData } from "../types/inheritance";

const STORAGE_KEY = 'inheritance_calculator_data';

export const saveToLocalStorage = (data: InheritanceFormData): void => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch (error) {
    console.error('Failed to save to local storage:', error);
  }
};

export const loadFromLocalStorage = (): InheritanceFormData | null => {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    if (data) {
      return JSON.parse(data);
    }
    return null;
  } catch (error) {
    console.error('Failed to load from local storage:', error);
    return null;
  }
};

export const clearLocalStorage = (): void => {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch (error) {
    console.error('Failed to clear local storage:', error);
  }
};