export interface City {
  name: string;
  latitude: number;
  longitude: number;
  timezone: string;
  countryCode: string;
}

export interface CountryData {
  name: string;
  code: string;
  cities: City[];
}

export const countriesData: CountryData[] = [
  {
    name: "Pakistan",
    code: "PK",
    cities: [
      {
        name: "Lahore",
        latitude: 31.5204,
        longitude: 74.3587,
        timezone: "Asia/Karachi",
        countryCode: "PK"
      },
      {
        name: "Karachi",
        latitude: 24.8607,
        longitude: 67.0011,
        timezone: "Asia/Karachi",
        countryCode: "PK"
      },
      {
        name: "Bahawalpur",
        latitude: 29.3956,
        longitude: 71.6836,
        timezone: "Asia/Karachi",
        countryCode: "PK"
      },
      {
        name: "Multan",
        latitude: 30.1575,
        longitude: 71.5249,
        timezone: "Asia/Karachi",
        countryCode: "PK"
      },
      {
        name: "Islamabad",
        latitude: 33.6844,
        longitude: 73.0479,
        timezone: "Asia/Karachi",
        countryCode: "PK"
      },
      {
        name: "Sialkot",
        latitude: 32.4945,
        longitude: 74.5229,
        timezone: "Asia/Karachi",
        countryCode: "PK"
      },
      {
        name: "Peshawar",
        latitude: 34.0151,
        longitude: 71.5805,
        timezone: "Asia/Karachi",
        countryCode: "PK"
      },
      {
        name: "Faisalabad",
        latitude: 31.4504,
        longitude: 73.1350,
        timezone: "Asia/Karachi",
        countryCode: "PK"
      },
      {
        name: "Gujranwala",
        latitude: 32.1877,
        longitude: 74.1945,
        timezone: "Asia/Karachi",
        countryCode: "PK"
      },
      {
        name: "Quetta",
        latitude: 30.1798,
        longitude: 66.9750,
        timezone: "Asia/Karachi",
        countryCode: "PK"
      },
      {
        name: "Rawalpindi",
        latitude: 33.5651,
        longitude: 73.0169,
        timezone: "Asia/Karachi",
        countryCode: "PK"
      },
      {
        name: "Hyderabad",
        latitude: 25.3960,
        longitude: 68.3578,
        timezone: "Asia/Karachi",
        countryCode: "PK"
      }
    ]
  },
  {
    name: "Saudi Arabia",
    code: "SA",
    cities: [
      {
        name: "Mecca",
        latitude: 21.3891,
        longitude: 39.8579,
        timezone: "Asia/Riyadh",
        countryCode: "SA"
      },
      // Add more Saudi cities
    ]
  },
  // Add more countries
];