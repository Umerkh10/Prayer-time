export interface CalculationResult {
    ageDetails: {
      years: number
      months: number
      days: number
      totalDays: number
    }
    calculationDetails: {
      firstTenYearsDays: number
      ramadanDays: number
      otherPrayedDays: number
      remainingDays: number
      missedYears: number
      currentAge: number
      periodDaysTotal: number
      periodDaysPerMonth: number
      periodMonths: number
    }
    prayerCounts: {
      farz: {
        total: number
        fajar: number
        zohar: number
        asar: number
        maghrib: number
        isha: number
      }
      sunnatMouaqda: {
        total: number
        fajar: number
        zohar: number
        asar: number
        maghrib: number
        isha: number
      }
      sunnatGherMouaqda: {
        total: number
        fajar: number
        zohar: number
        asar: number
        maghrib: number
        isha: number
      }
      wittar: {
        total: number
        fajar: number
        zohar: number
        asar: number
        maghrib: number
        isha: number
      }
      nafal: {
        total: number
        fajar: number
        zohar: number
        asar: number
        maghrib: number
        isha: number
      }
    }
  }
  
  export interface CalculationParams {
    dateOfBirth: Date
    currentDate: Date
    gender: "male" | "female"
    periodDays: number
    balighAge: number
    ramadanDays: number
    otherPrayedDays: number
  }
  