export interface City {
    name: string
    latitude: number
    longitude: number
  }
  
  export interface CountryData {
    timezones: string[]
    cities: {
      [timezone: string]: City[]
    }
  }
  
  export const countriesData: { [country: string]: CountryData } = {
    "United States": {
      timezones: ["America/New_York", "America/Los_Angeles", "America/Chicago", "America/Denver"],
      cities: {
          "America/New_York": [
            { name: "New York", latitude: 40.7128, longitude: -74.006 },
            { name: "Miami", latitude: 25.7617, longitude: -80.1918 },
            { name: "Boston", latitude: 42.3584, longitude: -71.0596 },
          ],
        "America/Los_Angeles": [
          { name: "Los Angeles", latitude: 34.0522, longitude: -118.2437 },
          { name: "San Francisco", latitude: 37.7749, longitude: -122.4194 },
          { name: "Seattle", latitude: 47.6067, longitude: -122.3321 },
        ],
        "America/Chicago": [
          { name: "Chicago", latitude: 41.8781, longitude: -87.6298 },
          { name: "Houston", latitude: 29.7633, longitude: -95.3632 },
          { name: "Dallas", latitude: 32.7763, longitude: -96.7969 },
        ],
        "America/Denver": [
          { name: "Denver", latitude: 39.7392, longitude: -104.9903 },
          { name: "Phoenix", latitude: 33.4484, longitude: -112.0739 },
          { name: "Salt Lake City", latitude: 40.7677, longitude: -111.8906 },
        ],
      },
    },
    Pakistan: {
      timezones: ["Asia/Karachi"],
      cities: {
        "Asia/Karachi": [
          { name: "Karachi", latitude: 24.8607, longitude: 67.0011 },
          { name: "Lahore", latitude: 31.5497, longitude: 74.3436 },
          { name: "Islamabad", latitude: 33.6844, longitude: 73.0479 },
          { name: "Faisalabad", latitude: 31.4167, longitude: 73.0833 },
          { name: "Rawalpindi", latitude: 33.6007, longitude: 73.0679 },
          { name: "Gujranwala", latitude: 32.1611, longitude: 74.1883 },
          { name: "Peshawar", latitude: 34.0083, longitude: 71.5783 },
          { name: "Multan", latitude: 30.1956, longitude: 71.4681 },
          { name: "Hyderabad", latitude: 25.3925, longitude: 68.3734 },
          { name: "Quetta", latitude: 30.1843, longitude: 67.0099 },
          { name: "Sialkot", latitude: 32.5069, longitude: 74.5319 },
          { name: "Bahawalpur", latitude: 29.3956, longitude: 71.6839 },
        ],
      },
    },
    "Saudi Arabia": {
      timezones: ["Asia/Riyadh"],
      cities: {
        "Asia/Riyadh": [
          { name: "Riyadh", latitude: 24.7136, longitude: 46.6753 },
          { name: "Mecca", latitude: 21.3891, longitude: 39.8579 },
          { name: "Medina", latitude: 24.5247, longitude: 39.5692 },
        ],
      },
    },
    Egypt: {
      timezones: ["Africa/Cairo"],
      cities: {
        "Africa/Cairo": [
          { name: "Cairo", latitude: 30.0444, longitude: 31.2357 },
          { name: "Alexandria", latitude: 31.2156, longitude: 29.9553 },
          { name: "Giza", latitude: 29.9765, longitude: 31.1313 },
        ],
      },
    },
    "United Kingdom": {
      timezones: ["Europe/London"],
      cities: {
        "Europe/London": [
          { name: "London", latitude: 51.5074, longitude: -0.1278 },
          { name: "Birmingham", latitude: 52.4862, longitude: -1.8904 },
          { name: "Manchester", latitude: 53.4808, longitude: -2.2426 },
        ],
      },
    },
    // Add other countries here...
  }
  
  