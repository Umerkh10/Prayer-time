import { prayerSchedule } from "@/components/qaza-calculator-components/prayer-schedule-table"
import { differenceInDays, differenceInMonths, differenceInYears, addYears } from "date-fns"
import { CalculationParams, CalculationResult } from "./calculator-types"

// Calculate age in years, months, and days
export const calculateAge = (birthDate: Date, currentDate: Date) => {
  const years = differenceInYears(currentDate, birthDate)

  // Calculate months after subtracting years
  const dateAfterYears = addYears(birthDate, years)
  const months = differenceInMonths(currentDate, dateAfterYears)

  // Calculate remaining days
  const dateAfterMonths = new Date(dateAfterYears)
  dateAfterMonths.setMonth(dateAfterMonths.getMonth() + months)

  // Calculate days difference
  const days = differenceInDays(currentDate, dateAfterMonths)

  // Calculate total days
  const totalDays = differenceInDays(currentDate, birthDate)

  return { years, months, days, totalDays }
}

// Calculate prayer counts based on days
export const calculatePrayerCounts = (days: number) => {
  // Farz prayers
  const farzFajar = days * prayerSchedule.FAJR.farz
  const farzZohar = days * prayerSchedule.DHUHR.farz
  const farzAsar = days * prayerSchedule.ASR.farz
  const farzMaghrib = days * prayerSchedule.MAGHRIB.farz
  const farzIsha = days * prayerSchedule.ISHA.farz
  const farzTotal = farzFajar + farzZohar + farzAsar + farzMaghrib + farzIsha

  // Sunnat Mouaqda
  const sunnatMFajar = days * prayerSchedule.FAJR.sunnatMouaqda
  const sunnatMZohar = days * prayerSchedule.DHUHR.sunnatMouaqda
  const sunnatMAsar = days * prayerSchedule.ASR.sunnatMouaqda
  const sunnatMMaghrib = days * prayerSchedule.MAGHRIB.sunnatMouaqda
  const sunnatMIsha = days * prayerSchedule.ISHA.sunnatMouaqda
  const sunnatMTotal = sunnatMFajar + sunnatMZohar + sunnatMAsar + sunnatMMaghrib + sunnatMIsha

  // Sunnat Gher-Mouaqda
  const sunnatGFajar = days * prayerSchedule.FAJR.sunnatGherMouaqda
  const sunnatGZohar = days * prayerSchedule.DHUHR.sunnatGherMouaqda
  const sunnatGAsar = days * prayerSchedule.ASR.sunnatGherMouaqda
  const sunnatGMaghrib = days * prayerSchedule.MAGHRIB.sunnatGherMouaqda
  const sunnatGIsha = days * prayerSchedule.ISHA.sunnatGherMouaqda
  const sunnatGTotal = sunnatGFajar + sunnatGZohar + sunnatGAsar + sunnatGMaghrib + sunnatGIsha

  // Wittar
  const wittarFajar = days * prayerSchedule.FAJR.wittar
  const wittarZohar = days * prayerSchedule.DHUHR.wittar
  const wittarAsar = days * prayerSchedule.ASR.wittar
  const wittarMaghrib = days * prayerSchedule.MAGHRIB.wittar
  const wittarIsha = days * prayerSchedule.ISHA.wittar
  const wittarTotal = wittarFajar + wittarZohar + wittarAsar + wittarMaghrib + wittarIsha

  // Nafal
  const nafalFajar = days * prayerSchedule.FAJR.nafal
  const nafalZohar = days * prayerSchedule.DHUHR.nafal
  const nafalAsar = days * prayerSchedule.ASR.nafal
  const nafalMaghrib = days * prayerSchedule.MAGHRIB.nafal
  const nafalIsha = days * prayerSchedule.ISHA.nafal
  const nafalTotal = nafalFajar + nafalZohar + nafalAsar + nafalMaghrib + nafalIsha

  return {
    farz: {
      total: farzTotal,
      fajar: farzFajar,
      zohar: farzZohar,
      asar: farzAsar,
      maghrib: farzMaghrib,
      isha: farzIsha,
    },
    sunnatMouaqda: {
      total: sunnatMTotal,
      fajar: sunnatMFajar,
      zohar: sunnatMZohar,
      asar: sunnatMAsar,
      maghrib: sunnatMMaghrib,
      isha: sunnatMIsha,
    },
    sunnatGherMouaqda: {
      total: sunnatGTotal,
      fajar: sunnatGFajar,
      zohar: sunnatGZohar,
      asar: sunnatGAsar,
      maghrib: sunnatGMaghrib,
      isha: sunnatGIsha,
    },
    wittar: {
      total: wittarTotal,
      fajar: wittarFajar,
      zohar: wittarZohar,
      asar: wittarAsar,
      maghrib: wittarMaghrib,
      isha: wittarIsha,
    },
    nafal: {
      total: nafalTotal,
      fajar: nafalFajar,
      zohar: nafalZohar,
      asar: nafalAsar,
      maghrib: nafalMaghrib,
      isha: nafalIsha,
    },
  }
}

export const calculateQazaDetails = (params: CalculationParams): CalculationResult => {
  const { dateOfBirth, currentDate, gender, periodDays, balighAge, ramadanDays, otherPrayedDays } = params

  // Calculate age details
  const ageDetails = calculateAge(dateOfBirth, currentDate)

  // Calculate current age in years
  const birthYear = dateOfBirth.getFullYear()
  const currentYear = currentDate.getFullYear()
  const currentAge = currentYear - birthYear

  // Calculate missed years
  const missedYears = currentAge - balighAge

  // First 10 years after birth (no prayers required)
  const firstTenYearsDays = 10 * 365 + 3 // Adding 3 days for leap years

  // Calculate days after maturity
  const daysAfterMaturity = ageDetails.totalDays - balighAge * 365

  // Calculate period days for females
  let periodDaysTotal = 0
  let periodMonths = 0
  let periodDaysPerMonth = 0

  if (gender === "female") {
    // Calculate months since maturity
    const maturityDate = new Date(dateOfBirth)
    maturityDate.setFullYear(maturityDate.getFullYear() + balighAge)
    periodMonths = differenceInMonths(currentDate, maturityDate)

    // Calculate total period days
    periodDaysTotal = periodMonths * periodDays
    periodDaysPerMonth = periodDays
  }

  // Calculate remaining days after deductions
  const remainingDays = daysAfterMaturity - ramadanDays - otherPrayedDays - periodDaysTotal

  // Calculate prayer counts
  const prayerCounts = calculatePrayerCounts(remainingDays)

  return {
    ageDetails,
    calculationDetails: {
      firstTenYearsDays,
      ramadanDays,
      otherPrayedDays,
      remainingDays,
      missedYears,
      currentAge,
      periodDaysTotal,
      periodDaysPerMonth,
      periodMonths,
    },
    prayerCounts,
  }
}
