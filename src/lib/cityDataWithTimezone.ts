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
    name: "Afghanistan",
    code: "AF",
    cities: [
      {
        name: "Kabul",
        latitude: 34.52813,
        longitude: 69.17233,
        timezone: "Asia/Kabul",
        countryCode: "AF"
      },
      {
        name: "Herat",
        latitude: 34.343044,
        longitude: 62.199074,
        timezone: "Asia/Kabul",
        countryCode: "AF"
      },
      {
        name: "Mazar-i-Sharif",
        latitude: 36.715771,
        longitude: 67.105865,
        timezone: "Asia/Kabul",
        countryCode: "AF"
      },
      {
        name: "Kandahar",
        latitude: 31.739847,
        longitude: 65.75592,
        timezone: "Asia/Kabul",
        countryCode: "AF"
      },
      {
        name: "Jalalabad",
        latitude: 34.4265,
        longitude: 70.4515,
        timezone: "Asia/Kabul",
        countryCode: "AF"
      },
      {
        name: "Lashkar Gah",
        latitude: 31.5938,
        longitude: 64.3716,
        timezone: "Asia/Kabul",
        countryCode: "AF"
      },
      {
        name: "Kunduz",
        latitude: 36.7289,
        longitude: 68.8687,
        timezone: "Asia/Kabul",
        countryCode: "AF"
      }
    ]
  },
  {
    name: "Algeria",
    code: "DZ",
    cities: [
      {
        name: "Algiers",
        latitude: 36.737232,
        longitude: 3.086472,
        timezone: "Africa/Algiers",
        countryCode: "DZ"
      },
      {
        name: "Oran",
        latitude: 35.6911,
        longitude: 0.6417,
        timezone: "Africa/Algiers",
        countryCode: "DZ"
      },
      {
        name: "Constantine",
        latitude: 36.365,
        longitude: 6.6147,
        timezone: "Africa/Algiers",
        countryCode: "DZ"
      },
      {
        name: "Annaba",
        latitude: 36.9,
        longitude: 7.7667,
        timezone: "Africa/Algiers",
        countryCode: "DZ"
      },
      {
        name: "Blida",
        latitude: 36.4700,
        longitude: 2.8333,
        timezone: "Africa/Algiers",
        countryCode: "DZ"
      },
      {
        name: "Batna",
        latitude: 35.55,
        longitude: 6.1667,
        timezone: "Africa/Algiers",
        countryCode: "DZ"
      }
    ]
  },
  {
    name: "American Samoa",
    code: "AS",
    cities: [
      {
        name: "Pago Pago",
        latitude: -14.2756,
        longitude: -170.7020,
        timezone: "Pacific/Pago_Pago",
        countryCode: "AS"
      },
      {
        name: "Tafuna",
        latitude: -14.3311,
        longitude: -170.7136,
        timezone: "Pacific/Pago_Pago",
        countryCode: "AS"
      },
      {
        name: "Leone",
        latitude: -14.3436,
        longitude: -170.7744,
        timezone: "Pacific/Pago_Pago",
        countryCode: "AS"
      },
      {
        name: "Faleniu",
        latitude: -14.3450,
        longitude: -170.7197,
        timezone: "Pacific/Pago_Pago",
        countryCode: "AS"
      },
      {
        name: "Aua",
        latitude: -14.2781,
        longitude: -170.6825,
        timezone: "Pacific/Pago_Pago",
        countryCode: "AS"
      }
    ]
  },
  {
    name: "Andorra",
    code: "AD",
    cities: [
      {
        name: "Andorra la Vella",
        latitude: 42.5078,
        longitude: 1.5211,
        timezone: "Europe/Andorra",
        countryCode: "AD"
      },
      {
        name: "Escaldes-Engordany",
        latitude: 42.5075,
        longitude: 1.5341,
        timezone: "Europe/Andorra",
        countryCode: "AD"
      },
      {
        name: "Sant Julià de Lòria",
        latitude: 42.4636,
        longitude: 1.4917,
        timezone: "Europe/Andorra",
        countryCode: "AD"
      },
      {
        name: "La Massana",
        latitude: 42.5440,
        longitude: 1.5148,
        timezone: "Europe/Andorra",
        countryCode: "AD"
      },
      {
        name: "Ordino",
        latitude: 42.5562,
        longitude: 1.5339,
        timezone: "Europe/Andorra",
        countryCode: "AD"
      }
    ]
  },
  {
    name: "Albania",
    code: "AL",
    cities: [
      {
        name: "Tirana",
        countryCode: "AL",
        timezone: "Europe/Tirane",
        latitude: 41.3275,
        longitude: 19.8187
      },
      {
        name: "Durres",
        countryCode: "AL",
        timezone: "Europe/Tirane",
        latitude: 41.3236,
        longitude: 19.4416
      },
      {
        name: "Vlore",
        countryCode: "AL",
        timezone: "Europe/Tirane",
        latitude: 40.4667,
        longitude: 19.4833
      },
      {
        name: "Shkoder",
        countryCode: "AL",
        timezone: "Europe/Tirane",
        latitude: 42.0685,
        longitude: 19.5188
      },
      {
        name: "Fier",
        countryCode: "AL",
        timezone: "Europe/Tirane",
        latitude: 40.7206,
        longitude: 19.5561
      },
      {
        name: "Korce",
        countryCode: "AL",
        timezone: "Europe/Tirane",
        latitude: 40.6186,
        longitude: 20.7800
      },
      {
        name: "Berat",
        countryCode: "AL",
        timezone: "Europe/Tirane",
        latitude: 40.7058,
        longitude: 19.9524
      }
    ]
  },
  {
    name: "Angola",
    code: "AO",
    cities: [
      {
        name: "Luanda",
        latitude: -8.8383,
        longitude: 13.2344,
        timezone: "Africa/Luanda",
        countryCode: "AO"
      },
      {
        name: "Benguela",
        latitude: -12.5763,
        longitude: 13.4055,
        timezone: "Africa/Luanda",
        countryCode: "AO"
      },
      {
        name: "Lubango",
        latitude: -14.9172,
        longitude: 13.4925,
        timezone: "Africa/Luanda",
        countryCode: "AO"
      },
      {
        name: "Kuito",
        latitude: -12.3833,
        longitude: 16.9333,
        timezone: "Africa/Luanda",
        countryCode: "AO"
      },
      {
        name: "Malanje",
        latitude: -9.5402,
        longitude: 16.3410,
        timezone: "Africa/Luanda",
        countryCode: "AO"
      },
      {
        name: "Cabinda",
        latitude: -5.5500,
        longitude: 12.2000,
        timezone: "Africa/Luanda",
        countryCode: "AO"
      }
    ]
  },
  {
    name: "Antigua and Barbuda",
    code: "AG",
    cities: [
      {
        name: "St. John's",
        latitude: 17.1274,
        longitude: -61.8468,
        timezone: "America/Antigua",
        countryCode: "AG"
      },
      {
        name: "All Saints",
        latitude: 17.0667,
        longitude: -61.8000,
        timezone: "America/Antigua",
        countryCode: "AG"
      },
      {
        name: "Liberta",
        latitude: 17.0333,
        longitude: -61.7833,
        timezone: "America/Antigua",
        countryCode: "AG"
      }
    ]
  },
  {
    name: "Argentina",
    code: "AR",
    cities: [
      {
        name: "Buenos Aires",
        latitude: -34.603722,
        longitude: -58.381592,
        timezone: "America/Argentina/Buenos_Aires",
        countryCode: "AR"
      },
      {
        name: "cordoba",
        latitude: -31.4167,
        longitude: -64.1833,
        timezone: "America/Argentina/Cordoba",
        countryCode: "AR"
      },
      {
        name: "Rosario",
        latitude: -32.950001,
        longitude: -60.666668,
        timezone: "America/Argentina/Buenos_Aires",
        countryCode: "AR"
      },
      {
        name: "Mendoza",
        latitude: -32.8908,
        longitude: -68.8276,
        timezone: "America/Argentina/Mendoza",
        countryCode: "AR"
      },
      {
        name: "La Plata",
        latitude: -34.9215,
        longitude: -57.9545,
        timezone: "America/Argentina/Buenos_Aires",
        countryCode: "AR"
      },
      {
        name: "San Miguel de Tucuman",
        latitude: -26.8241,
        longitude: -65.2226,
        timezone: "America/Argentina/Tucuman",
        countryCode: "AR"
      }
    ]
  },
  {
    name: "Armenia",
    code: "AM",
    cities: [
      {
        name: "Yerevan",
        latitude: 40.18111,
        longitude: 44.51361,
        timezone: "Asia/Yerevan",
        countryCode: "AM"
      },
      {
        name: "Gyumri",
        latitude: 40.7942,
        longitude: 43.84528,
        timezone: "Asia/Yerevan",
        countryCode: "AM"
      },
      {
        name: "Vanadzor",
        latitude: 40.8077,
        longitude: 44.4939,
        timezone: "Asia/Yerevan",
        countryCode: "AM"
      },
      {
        name: "Vagharshapat",
        latitude: 40.1632626,
        longitude: 44.2935926,
        timezone: "Asia/Yerevan",
        countryCode: "AM"
      },
      {
        name: "Vayk",
        latitude: 39.691,
        longitude: 45.46653,
        timezone: "Asia/Yerevan",
        countryCode: "AM"
      }
    ]
  },
  {
    name: "Australia",
    code: "AU",
    cities: [
      {
        name: "Sydney",
        latitude: -33.865143,
        longitude: 151.2099,
        timezone: "Australia/Sydney",
        countryCode: "AU"
      },
      {
        name: "Wollongong",
        latitude: -34.425072,
        longitude: 150.893143,
        timezone: "Australia/Sydney",
        countryCode: "AU"
      },
      {
        name: "Newcastle",
        latitude: -32.916668,
        longitude: 151.750000,
        timezone: "Australia/Sydney",
        countryCode: "AU"
      },
      {
        name: "Central Coast",
        latitude: -33.2928,
        longitude: 151.1887,
        timezone: "Australia/Sydney",
        countryCode: "AU"
      },
      {
        name: "Blue Mountains",
        latitude: -33.7125,
        longitude: 150.3119,
        timezone: "Australia/Sydney",
        countryCode: "AU"
      },
      {
        name: "Melbourne",
        latitude: -37.8136,
        longitude: 144.9631,
        timezone: "Australia/Melbourne",
        countryCode: "AU"
      },
      {
        name: "Geelong",
        latitude: -38.1499,
        longitude: 144.3617,
        timezone: "Australia/Melbourne",
        countryCode: "AU"
      },
      {
        name: "Ballarat",
        latitude: -37.5622,
        longitude: 143.8503,
        timezone: "Australia/Melbourne",
        countryCode: "AU"
      },
      {
        name: "Bendigo",
        latitude: -36.7570,
        longitude: 144.2794,
        timezone: "Australia/Melbourne",
        countryCode: "AU"
      },
      {
        name: "Shepparton",
        latitude: -36.3805,
        longitude: 145.3980,
        timezone: "Australia/Melbourne",
        countryCode: "AU"
      },
      {
        name: "Brisbane",
        latitude: -27.4698,
        longitude: 153.0251,
        timezone: "Australia/Brisbane",
        countryCode: "AU"
      },
      {
        name: "Gold Coast",
        latitude: -28.0167,
        longitude: 153.4000,
        timezone: "Australia/Brisbane",
        countryCode: "AU"
      },
      {
        name: "Toowoomba",
        latitude: -27.5606,
        longitude: 151.9539,
        timezone: "Australia/Brisbane",
        countryCode: "AU"
      },
      {
        name: "Sunshine Coast",
        latitude: -26.6500,
        longitude: 153.0667,
        timezone: "Australia/Brisbane",
        countryCode: "AU"
      },
      {
        name: "Cairns",
        latitude: -16.9186,
        longitude: 145.7781,
        timezone: "Australia/Brisbane",
        countryCode: "AU"
      },
      {
        name: "Perth",
        latitude: -31.9505,
        longitude: 115.8605,
        timezone: "Australia/Perth",
        countryCode: "AU"
      },
      {
        name: "Fremantle",
        latitude: -32.0569,
        longitude: 115.7439,
        timezone: "Australia/Perth",
        countryCode: "AU"
      },
      {
        name: "Bunbury",
        latitude: -33.3271,
        longitude: 115.6414,
        timezone: "Australia/Perth",
        countryCode: "AU"
      },
      {
        name: "Geraldton",
        latitude: -28.7780,
        longitude: 114.6140,
        timezone: "Australia/Perth",
        countryCode: "AU"
      },
      {
        name: "Kalgoorlie",
        latitude: -30.7489,
        longitude: 121.4650,
        timezone: "Australia/Perth",
        countryCode: "AU"
      },
      {
        name: "Adelaide",
        latitude: -34.9285,
        longitude: 138.6007,
        timezone: "Australia/Adelaide",
        countryCode: "AU"
      },
      {
        name: "Port Augusta",
        latitude: -32.4950,
        longitude: 137.7650,
        timezone: "Australia/Adelaide",
        countryCode: "AU"
      },
      {
        name: "Mount Gambier",
        latitude: -37.8333,
        longitude: 140.7667,
        timezone: "Australia/Adelaide",
        countryCode: "AU"
      },
      {
        name: "Whyalla",
        latitude: -33.0333,
        longitude: 137.5833,
        timezone: "Australia/Adelaide",
        countryCode: "AU"
      },
      {
        name: "Port Pirie",
        latitude: -33.1833,
        longitude: 138.0167,
        timezone: "Australia/Adelaide",
        countryCode: "AU"
      },
      {
        name: "Hobart",
        latitude: -42.8821,
        longitude: 147.3272,
        timezone: "Australia/Hobart",
        countryCode: "AU"
      },
      {
        name: "Launceston",
        latitude: -41.4332,
        longitude: 147.1441,
        timezone: "Australia/Hobart",
        countryCode: "AU"
      },
      {
        name: "Devonport",
        latitude: -41.1806,
        longitude: 146.3515,
        timezone: "Australia/Hobart",
        countryCode: "AU"
      },
      {
        name: "Burnie",
        latitude: -41.0525,
        longitude: 145.9042,
        timezone: "Australia/Hobart",
        countryCode: "AU"
      },
      {
        name: "Darwin",
        latitude: -12.4634,
        longitude: 130.8456,
        timezone: "Australia/Darwin",
        countryCode: "AU"
      },
      {
        name: "Katherine",
        latitude: -14.4650,
        longitude: 132.2635,
        timezone: "Australia/Darwin",
        countryCode: "AU"
      },
      {
        name: "Tennant Creek",
        latitude: -19.6470,
        longitude: 134.1916,
        timezone: "Australia/Darwin",
        countryCode: "AU"
      },
      {
        name: "Nhulunbuy",
        latitude: -12.1825,
        longitude: 136.7819,
        timezone: "Australia/Darwin",
        countryCode: "AU"
      },
      {
        name: "Canberra",
        latitude: -35.2820,
        longitude: 149.1290,
        timezone: "Australia/Canberra",
        countryCode: "AU"
      },
      {
        name: "Queanbeyan",
        latitude: -35.3549,
        longitude: 149.2320,
        timezone: "Australia/Canberra",
        countryCode: "AU"
      },
      {
        name: "Goulburn",
        latitude: -34.7547,
        longitude: 149.6186,
        timezone: "Australia/Canberra",
        countryCode: "AU"
      },
      {
        name: "Yass",
        latitude: -34.8363,
        longitude: 148.9157,
        timezone: "Australia/Canberra",
        countryCode: "AU"
      },
      {
        name: "Cooma",
        latitude: -36.2343,
        longitude: 149.1333,
        timezone: "Australia/Canberra",
        countryCode: "AU"
      }
    ]
  },
  {
    name: "Austria",
    code: "AT",
    cities: [
      {
        name: "Vienna",
        latitude: 48.2085,
        longitude: 16.3721,
        timezone: "Europe/Vienna",
        countryCode: "AT"
      },
      {
        name: "Graz",
        latitude: 47.0667,
        longitude: 15.4500,
        timezone: "Europe/Vienna",
        countryCode: "AT"
      },
      {
        name: "Linz",
        latitude: 48.3064,
        longitude: 14.2861,
        timezone: "Europe/Vienna",
        countryCode: "AT"
      },
      {
        name: "Salzburg",
        latitude: 47.7994,
        longitude: 13.0439,
        timezone: "Europe/Vienna",
        countryCode: "AT"
      },
      {
        name: "Innsbruck",
        latitude: 47.2627,
        longitude: 11.4004,
        timezone: "Europe/Vienna",
        countryCode: "AT"
      }
    ]
  },
  {
    name: "Azerbaijan",
    code: "AZ",
    cities: [
      {
        name: "Baku",
        latitude: 40.3777,
        longitude: 49.8920,
        timezone: "Asia/Baku",
        countryCode: "AZ"
      },
      {
        name: "Ganja",
        latitude: 40.6828,
        longitude: 46.3606,
        timezone: "Asia/Baku",
        countryCode: "AZ"
      },
      {
        name: "Mingachevir",
        latitude: 40.7700,
        longitude: 47.0489,
        timezone: "Asia/Baku",
        countryCode: "AZ"
      },
      {
        name: "Lankaran",
        latitude: 38.7543,
        longitude: 48.8506,
        timezone: "Asia/Baku",
        countryCode: "AZ"
      },
      {
        name: "Sumqayit",
        latitude: 40.5897,
        longitude: 49.6686,
        timezone: "Asia/Baku",
        countryCode: "AZ"
      },
      {
        name: "Sheki",
        latitude: 41.1919,
        longitude: 47.1706,
        timezone: "Asia/Baku",
        countryCode: "AZ"
      }
    ]
  },
  {
    name: "Bahrain",
    code: "BH",
    cities: [
      {
        name: "Manama",
        latitude: 26.2285,
        longitude: 50.5860,
        timezone: "Asia/Bahrain",
        countryCode: "BH"
      },
      {
        name: "Riffa",
        latitude: 26.1154,
        longitude: 50.5138,
        timezone: "Asia/Bahrain",
        countryCode: "BH"
      },
      {
        name: "Muharraq",
        latitude: 26.2572,
        longitude: 50.6119,
        timezone: "Asia/Bahrain",
        countryCode: "BH"
      },
      {
        name: "Isa Town",
        latitude: 26.1736,
        longitude: 50.5470,
        timezone: "Asia/Bahrain",
        countryCode: "BH"
      },
      {
        name: "Sitra",
        latitude: 26.1547,
        longitude: 50.6206,
        timezone: "Asia/Bahrain",
        countryCode: "BH"
      },
      {
        name: "A'ali",
        latitude: 26.1736,
        longitude: 50.5470,
        timezone: "Asia/Bahrain",
        countryCode: "BH"
      },
      {
        name: "Hamad Town",
        latitude: 26.1154,
        longitude: 50.5138,
        timezone: "Asia/Bahrain",
        countryCode: "BH"
      }
    ]
  },
  {
    name: "Bahamas",
    code: "BS",
    cities: [
      {
        name: "Nassau",
        latitude: 25.0343,
        longitude: -77.3963,
        timezone: "America/Nassau",
        countryCode: "BS"
      },
      {
        name: "Freeport",
        latitude: 26.5333,
        longitude: -78.7000,
        timezone: "America/Nassau",
        countryCode: "BS"
      },
      {
        name: "West End",
        latitude: 26.6864,
        longitude: -78.9781,
        timezone: "America/Nassau",
        countryCode: "BS"
      },
      {
        name: "Marsh Harbour",
        latitude: 26.5412,
        longitude: -77.0636,
        timezone: "America/Nassau",
        countryCode: "BS"
      },
      {
        name: "Alice Town",
        latitude: 25.7194,
        longitude: -79.2969,
        timezone: "America/Nassau",
        countryCode: "BS"
      }
    ]
  },
  {
    name: "Bangladesh",
    code: "BD",
    cities: [
      {
        name: "Dhaka",
        latitude: 23.8103,
        longitude: 90.4125,
        timezone: "Asia/Dhaka",
        countryCode: "BD"
      },
      {
        name: "Comilla",
        latitude: 23.4682,
        longitude: 91.1782,
        timezone: "Asia/Dhaka",
        countryCode: "BD"
      },
      {
        name: "Chittagong",
        latitude: 22.3569,
        longitude: 91.7832,
        timezone: "Asia/Dhaka",
        countryCode: "BD"
      },
      {
        name: "Khulna",
        latitude: 22.8456,
        longitude: 89.5403,
        timezone: "Asia/Dhaka",
        countryCode: "BD"
      },
      {
        name: "Rajshahi",
        latitude: 24.3745,
        longitude: 88.6042,
        timezone: "Asia/Dhaka",
        countryCode: "BD"
      },
      {
        name: "Sylhet",
        latitude: 24.8949,
        longitude: 91.8687,
        timezone: "Asia/Dhaka",
        countryCode: "BD"
      },
      {
        name: "Tongi",
        latitude: 23.8896,
        longitude: 90.4023,
        timezone: "Asia/Dhaka",
        countryCode: "BD"
      },
      {
        name: "Narayanganj",
        latitude: 23.6238,
        longitude: 90.5000,
        timezone: "Asia/Dhaka",
        countryCode: "BD"
      }
    ]
  },
  {
    name: "Barbados",
    code: "BB",
    cities: [
      {
        name: "Bridgetown",
        latitude: 13.0975,
        longitude: -59.6167,
        timezone: "America/Barbados",
        countryCode: "BB"
      },
      {
        name: "Holetown",
        latitude: 13.1833,
        longitude: -59.6333,
        timezone: "America/Barbados",
        countryCode: "BB"
      },
      {
        name: "Oistins",
        latitude: 13.0667,
        longitude: -59.5667,
        timezone: "America/Barbados",
        countryCode: "BB"
      },
      {
        name: "Speightstown",
        latitude: 13.2500,
        longitude: -59.6500,
        timezone: "America/Barbados",
        countryCode: "BB"
      },
      {
        name: "Bathsheba",
        latitude: 13.2167,
        longitude: -59.5167,
        timezone: "America/Barbados",
        countryCode: "BB"
      }
    ]
  },
  {
    name: "Belarus",
    code: "BY",
    cities: [
      {
        name: "Minsk",
        latitude: 53.9006,
        longitude: 27.5590,
        timezone: "Europe/Minsk",
        countryCode: "BY"
      },
      {
        name: "Gomel",
        latitude: 52.4453,
        longitude: 30.9842,
        timezone: "Europe/Minsk",
        countryCode: "BY"
      },
      {
        name: "Mogilev",
        latitude: 53.9168,
        longitude: 30.3449,
        timezone: "Europe/Minsk",
        countryCode: "BY"
      },
      {
        name: "Vitebsk",
        latitude: 55.1904,
        longitude: 30.2049,
        timezone: "Europe/Minsk",
        countryCode: "BY"
      },
      {
        name: "Hrodna",
        latitude: 53.6694,
        longitude: 23.8131,
        timezone: "Europe/Minsk",
        countryCode: "BY"
      },
      {
        name: "Brest",
        latitude: 52.0976,
        longitude: 23.7341,
        timezone: "Europe/Minsk",
        countryCode: "BY"
      },
      {
        name: "Baranovichi",
        latitude: 53.1327,
        longitude: 26.0139,
        timezone: "Europe/Minsk",
        countryCode: "BY"
      },
      {
        name: "Bobruisk",
        latitude: 53.1381,
        longitude: 29.2214,
        timezone: "Europe/Minsk",
        countryCode: "BY"
      }
    ]
  },
  {
    name: "Belgium",
    code: "BE",
    cities: [
      {
        name: "Brussels",
        latitude: 50.8503,
        longitude: 4.3517,
        timezone: "Europe/Brussels",
        countryCode: "BE"
      },
      {
        name: "Antwerp",
        latitude: 51.2194,
        longitude: 4.4025,
        timezone: "Europe/Brussels",
        countryCode: "BE"
      },
      {
        name: "Ghent",
        latitude: 51.0543,
        longitude: 3.7174,
        timezone: "Europe/Brussels",
        countryCode: "BE"
      },
      {
        name: "Charleroi",
        latitude: 50.4114,
        longitude: 4.4447,
        timezone: "Europe/Brussels",
        countryCode: "BE"
      },
      {
        name: "Liège",
        latitude: 50.6333,
        longitude: 5.5667,
        timezone: "Europe/Brussels",
        countryCode: "BE"
      },
      {
        name: "Bruges",
        latitude: 51.2093,
        longitude: 3.2247,
        timezone: "Europe/Brussels",
        countryCode: "BE"
      },
      {
        name: "Namur",
        latitude: 50.4669,
        longitude: 4.8675,
        timezone: "Europe/Brussels",
        countryCode: "BE"
      }
    ]
  },
  {
    name: "Belgium",
    code: "BE",
    cities: [
      {
        name: "Brussels",
        latitude: 50.8503,
        longitude: 4.3517,
        timezone: "Europe/Brussels",
        countryCode: "BE"
      },
      {
        name: "Antwerp",
        latitude: 51.2194,
        longitude: 4.4025,
        timezone: "Europe/Brussels",
        countryCode: "BE"
      },
      {
        name: "Ghent",
        latitude: 51.0543,
        longitude: 3.7174,
        timezone: "Europe/Brussels",
        countryCode: "BE"
      },
      {
        name: "Charleroi",
        latitude: 50.4114,
        longitude: 4.4447,
        timezone: "Europe/Brussels",
        countryCode: "BE"
      },
      {
        name: "Liege",
        latitude: 50.6333,
        longitude: 5.5667,
        timezone: "Europe/Brussels",
        countryCode: "BE"
      },
      {
        name: "Bruges",
        latitude: 51.2093,
        longitude: 3.2247,
        timezone: "Europe/Brussels",
        countryCode: "BE"
      },
      {
        name: "Namur",
        latitude: 50.4669,
        longitude: 4.8675,
        timezone: "Europe/Brussels",
        countryCode: "BE"
      }
    ]
  },
  {
    name: "Belize",
    code: "BZ",
    cities: [
      {
        name: "Belmopan",
        latitude: 17.2514,
        longitude: -88.7669,
        timezone: "America/Belize",
        countryCode: "BZ"
      },
      {
        name: "San Ignacio",
        latitude: 17.1600,
        longitude: -89.0696,
        timezone: "America/Belize",
        countryCode: "BZ"
      },
      {
        name: "Orange Walk",
        latitude: 18.0800,
        longitude: -88.5583,
        timezone: "America/Belize",
        countryCode: "BZ"
      },
      {
        name: "Belize City",
        latitude: 17.5046,
        longitude: -88.1962,
        timezone: "America/Belize",
        countryCode: "BZ"
      },
      {
        name: "Dangriga",
        latitude: 16.9708,
        longitude: -88.2331,
        timezone: "America/Belize",
        countryCode: "BZ"
      }
    ]
  },
  {
    name: "Benin",
    code: "BJ",
    cities: [
      {
        name: "Cotonou",
        latitude: 6.3654,
        longitude: 2.4183,
        timezone: "Africa/Porto-Novo",
        countryCode: "BJ"
      },
      {
        name: "Porto-Novo",
        latitude: 6.4969,
        longitude: 2.6289,
        timezone: "Africa/Porto-Novo",
        countryCode: "BJ"
      },
      {
        name: "Parakou",
        latitude: 9.3378,
        longitude: 2.6303,
        timezone: "Africa/Porto-Novo",
        countryCode: "BJ"
      },
      {
        name: "Abomey",
        latitude: 7.1828,
        longitude: 1.9912,
        timezone: "Africa/Porto-Novo",
        countryCode: "BJ"
      },
      {
        name: "Bohicon",
        latitude: 7.1796,
        longitude: 2.0654,
        timezone: "Africa/Porto-Novo",
        countryCode: "BJ"
      }
    ]
  },
  {
    name: "Bhutan",
    code: "BT",
    cities: [
      {
        name: "Thimphu",
        latitude: 27.4728,
        longitude: 89.6390,
        timezone: "Asia/Thimphu",
        countryCode: "BT"
      },
      {
        name: "Phuntsholing",
        latitude: 26.8516,
        longitude: 89.3884,
        timezone: "Asia/Thimphu",
        countryCode: "BT"
      },
      {
        name: "Punakha",
        latitude: 27.5916,
        longitude: 89.8771,
        timezone: "Asia/Thimphu",
        countryCode: "BT"
      },
      {
        name: "Paro",
        latitude: 27.4305,
        longitude: 89.4136,
        timezone: "Asia/Thimphu",
        countryCode: "BT"
      },
      {
        name: "Wangdue Phodrang",
        latitude: 27.4784,
        longitude: 89.8994,
        timezone: "Asia/Thimphu",
        countryCode: "BT"
      }
    ]
  },
  {
    name: "Bolivia",
    code: "BO",
    cities: [
      {
        name: "La Paz",
        latitude: -16.5000,
        longitude: -68.1500,
        timezone: "America/La_Paz",
        countryCode: "BO"
      },
      {
        name: "Santa Cruz de la Sierra",
        latitude: -17.7833,
        longitude: -63.1833,
        timezone: "America/La_Paz",
        countryCode: "BO"
      },
      {
        name: "Cochabamba",
        latitude: -17.3833,
        longitude: -66.1667,
        timezone: "America/La_Paz",
        countryCode: "BO"
      },
      {
        name: "Sucre",
        latitude: -19.0333,
        longitude: -65.2667,
        timezone: "America/La_Paz",
        countryCode: "BO"
      },
      {
        name: "El Alto",
        latitude: -16.5167,
        longitude: -68.1833,
        timezone: "America/La_Paz",
        countryCode: "BO"
      }
    ]
  },
  {
    name: "Bosnia and Herzegovina",
    code: "BA",
    cities: [
      {
        name: "Sarajevo",
        latitude: 43.8563,
        longitude: 18.4131,
        timezone: "Europe/Sarajevo",
        countryCode: "BA"
      },
      {
        name: "Banja Luka",
        latitude: 44.7722,
        longitude: 17.1910,
        timezone: "Europe/Sarajevo",
        countryCode: "BA"
      },
      {
        name: "Tuzla",
        latitude: 44.5384,
        longitude: 18.6671,
        timezone: "Europe/Sarajevo",
        countryCode: "BA"
      },
      {
        name: "Zenica",
        latitude: 44.2017,
        longitude: 17.9032,
        timezone: "Europe/Sarajevo",
        countryCode: "BA"
      },
      {
        name: "Mostar",
        latitude: 43.3438,
        longitude: 17.8078,
        timezone: "Europe/Sarajevo",
        countryCode: "BA"
      }
    ]
  },
  {
    name: "Botswana",
    code: "BW",
    cities: [
      {
        name: "Gaborone",
        latitude: -24.6282,
        longitude: 25.9231,
        timezone: "Africa/Gaborone",
        countryCode: "BW"
      },
      {
        name: "Francistown",
        latitude: -21.1736,
        longitude: 27.5126,
        timezone: "Africa/Gaborone",
        countryCode: "BW"
      },
      {
        name: "Maun",
        latitude: -19.9833,
        longitude: 23.4167,
        timezone: "Africa/Gaborone",
        countryCode: "BW"
      },
      {
        name: "Kanye",
        latitude: -24.9667,
        longitude: 25.3500,
        timezone: "Africa/Gaborone",
        countryCode: "BW"
      },
      {
        name: "Serowe",
        latitude: -22.4000,
        longitude: 26.7167,
        timezone: "Africa/Gaborone",
        countryCode: "BW"
      }
    ]
  },
  {
    name: "Brazil",
    code: "BR",
    cities: [
      {
        name: "Brasilia",
        latitude: -15.7939,
        longitude: -47.8828,
        timezone: "America/Sao_Paulo",
        countryCode: "BR"
      },
      {
        name: "Sao Paulo",
        latitude: -23.5505,
        longitude: -46.6333,
        timezone: "America/Sao_Paulo",
        countryCode: "BR"
      },
      {
        name: "Rio de Janeiro",
        latitude: -22.9068,
        longitude: -43.1729,
        timezone: "America/Sao_Paulo",
        countryCode: "BR"
      },
      {
        name: "Salvador",
        latitude: -12.9777,
        longitude: -38.5016,
        timezone: "America/Sao_Paulo",
        countryCode: "BR"
      },
      {
        name: "Curitiba",
        latitude: -25.4284,
        longitude: -49.2733,
        timezone: "America/Sao_Paulo",
        countryCode: "BR"
      },
      {
        name: "Belo Horizonte",
        latitude: -19.9167,
        longitude: -43.9345,
        timezone: "America/Sao_Paulo",
        countryCode: "BR"
      },
      {
        name: "Campinas",
        latitude: -22.9099,
        longitude: -47.0626,
        timezone: "America/Sao_Paulo",
        countryCode: "BR"
      },
      {
        name: "Santos",
        latitude: -23.9608,
        longitude: -46.3336,
        timezone: "America/Sao_Paulo",
        countryCode: "BR"
      }
    ]
  },
  {
    name: "Bulgaria",
    code: "BG",
    cities: [
      {
        name: "Sofia",
        latitude: 42.6975,
        longitude: 23.3242,
        timezone: "Europe/Sofia",
        countryCode: "BG"
      },
      {
        name: "Plovdiv",
        latitude: 42.1354,
        longitude: 24.7453,
        timezone: "Europe/Sofia",
        countryCode: "BG"
      },
      {
        name: "Varna",
        latitude: 43.2141,
        longitude: 27.9147,
        timezone: "Europe/Sofia",
        countryCode: "BG"
      },
      {
        name: "Burgas",
        latitude: 42.5048,
        longitude: 27.4626,
        timezone: "Europe/Sofia",
        countryCode: "BG"
      },
      {
        name: "Ruse",
        latitude: 43.8456,
        longitude: 25.9533,
        timezone: "Europe/Sofia",
        countryCode: "BG"
      },
      {
        name: "Stara Zagora",
        latitude: 42.4258,
        longitude: 25.6345,
        timezone: "Europe/Sofia",
        countryCode: "BG"
      },
      {
        name: "Pleven",
        latitude: 43.4170,
        longitude: 24.6067,
        timezone: "Europe/Sofia",
        countryCode: "BG"
      }
    ]
  },
  {
    name: "Cambodia",
    code: "KH",
    cities: [
      {
        name: "Phnom Penh",
        latitude: 11.5564,
        longitude: 104.9282,
        timezone: "Asia/Phnom_Penh",
        countryCode: "KH"
      },
      {
        name: "Siem Reap",
        latitude: 13.4105,
        longitude: 103.8593,
        timezone: "Asia/Phnom_Penh",
        countryCode: "KH"
      },
      {
        name: "Battambang",
        latitude: 13.0956,
        longitude: 103.2195,
        timezone: "Asia/Phnom_Penh",
        countryCode: "KH"
      },
      {
        name: "Sihanoukville",
        latitude: 10.6167,
        longitude: 103.5333,
        timezone: "Asia/Phnom_Penh",
        countryCode: "KH"
      },
      {
        name: "Kampong Cham",
        latitude: 11.9903,
        longitude: 105.4524,
        timezone: "Asia/Phnom_Penh",
        countryCode: "KH"
      }
    ]
  },
  {
    name: "Cameroon",
    code: "CM",
    cities: [
      {
        name: "Douala",
        latitude: 4.061536,
        longitude: 9.786072,
        timezone: "Africa/Douala",
        countryCode: "CM"
      },
      {
        name: "Yaounde",
        latitude: 3.844119,
        longitude: 11.501346,
        timezone: "Africa/Douala",
        countryCode: "CM"
      },
      {
        name: "Bafoussam",
        latitude: 5.47775,
        longitude: 10.41759,
        timezone: "Africa/Douala",
        countryCode: "CM"
      },
      {
        name: "Garoua",
        latitude: 9.3225,
        longitude: 13.3983,
        timezone: "Africa/Douala",
        countryCode: "CM"
      },
      {
        name: "Maroua",
        latitude: 10.5954,
        longitude: 14.3248,
        timezone: "Africa/Douala",
        countryCode: "CM"
      }
    ]
  },
  {
    name: "Canada",
    code: "CA",
    cities: [
      {
        name: "Toronto",
        latitude: 43.65107,
        longitude: -79.347015,
        timezone: "America/Toronto",
        countryCode: "CA"
      },
      {
        name: "Ottawa",
        latitude: 45.424721,
        longitude: -75.695,
        timezone: "America/Toronto",
        countryCode: "CA"
      },
      {
        name: "Montreal",
        latitude: 45.508888,
        longitude: -73.561668,
        timezone: "America/Toronto",
        countryCode: "CA"
      },
      {
        name: "Edmonton",
        latitude: 53.631611,
        longitude: -113.323975,
        timezone: "America/Edmonton",
        countryCode: "CA"
      },
      {
        name: "Red Deer",
        latitude: 52.268112,
        longitude: -113.811241,
        timezone: "America/Edmonton",
        countryCode: "CA"
      },
      {
        name: "Grande Prairie",
        latitude: 55.170834,
        longitude: -118.794724,
        timezone: "America/Edmonton",
        countryCode: "CA"
      },
      {
        name: "Lethbridge",
        latitude: 49.7000,
        longitude: -112.8333,
        timezone: "America/Edmonton",
        countryCode: "CA"
      },
      {
        name: "Medicine Hat",
        latitude: 50.0407,
        longitude: -110.6791,
        timezone: "America/Edmonton",
        countryCode: "CA"
      },
      {
        name: "Fort McMurray",
        latitude: 56.72676,
        longitude: -111.38103,
        timezone: "America/Edmonton",
        countryCode: "CA"
      },
      {
        name: "Vancouver",
        latitude: 49.246292,
        longitude: -123.116226,
        timezone: "America/Vancouver",
        countryCode: "CA"
      },
      {
        name: "Victoria",
        latitude: 48.4284,
        longitude: -123.3656,
        timezone: "America/Vancouver",
        countryCode: "CA"
      },
      {
        name: "Kelowna",
        latitude: 49.8880,
        longitude: -119.4960,
        timezone: "America/Vancouver",
        countryCode: "CA"
      },
      {
        name: "Surrey",
        latitude: 49.1913,
        longitude: -122.8490,
        timezone: "America/Vancouver",
        countryCode: "CA"
      },
      {
        name: "Burnaby",
        latitude: 49.2488,
        longitude: -122.9805,
        timezone: "America/Vancouver",
        countryCode: "CA"
      },
      {
        name: "Kamloops",
        latitude: 50.6745,
        longitude: -120.3273,
        timezone: "America/Vancouver",
        countryCode: "CA"
      }
    ]
  },
  {
    name: "Central African Republic",
    code: "CF",
    cities: [
      {
        name: "Bangui",
        latitude: 4.3947,
        longitude: 18.5582,
        timezone: "Africa/Bangui",
        countryCode: "CF"
      },
      {
        name: "Berberati",
        latitude: 4.2611,
        longitude: 15.7861,
        timezone: "Africa/Bangui",
        countryCode: "CF"
      },
      {
        name: "Bimbo",
        latitude: 4.2567,
        longitude: 18.4158,
        timezone: "Africa/Bangui",
        countryCode: "CF"
      },
      {
        name: "Carnot",
        latitude: 4.9428,
        longitude: 15.8778,
        timezone: "Africa/Bangui",
        countryCode: "CF"
      },
      {
        name: "Mbaiki",
        latitude: 3.8678,
        longitude: 17.9892,
        timezone: "Africa/Bangui",
        countryCode: "CF"
      }
    ]
  },
  {
    name: "Chad",
    code: "TD",
    cities: [
      {
        name: "N'Djamena",
        latitude: 12.1348,
        longitude: 15.0557,
        timezone: "Africa/Ndjamena",
        countryCode: "TD"
      },
      {
        name: "Moundou",
        latitude: 8.5674,
        longitude: 16.0836,
        timezone: "Africa/Ndjamena",
        countryCode: "TD"
      },
      {
        name: "Abeche",
        latitude: 13.8416,
        longitude: 20.8324,
        timezone: "Africa/Ndjamena",
        countryCode: "TD"
      },
      {
        name: "Kélo",
        latitude: 9.3080,
        longitude: 15.8069,
        timezone: "Africa/Ndjamena",
        countryCode: "TD"
      },
      {
        name: "Am Timan",
        latitude: 11.0333,
        longitude: 20.2833,
        timezone: "Africa/Ndjamena",
        countryCode: "TD"
      }
    ]
  },
  {
    name: "Chile",
    code: "CL",
    cities: [
      {
        name: "Santiago",
        latitude: -33.4489,
        longitude: -70.6693,
        timezone: "America/Santiago",
        countryCode: "CL"
      },
      {
        name: "Valparaiso",
        latitude: -33.0472,
        longitude: -71.6127,
        timezone: "America/Santiago",
        countryCode: "CL"
      },
      {
        name: "Concepcion",
        latitude: -36.8201,
        longitude: -73.0444,
        timezone: "America/Santiago",
        countryCode: "CL"
      },
      {
        name: "Antofagasta",
        latitude: -23.6500,
        longitude: -70.4000,
        timezone: "America/Santiago",
        countryCode: "CL"
      },
      {
        name: "La Serena",
        latitude: -29.9000,
        longitude: -71.2500,
        timezone: "America/Santiago",
        countryCode: "CL"
      }
    ]
  },
  {
    name: "China",
    code: "CN",
    cities: [
      {
        name: "Beijing",
        latitude: 39.9042,
        longitude: 116.4074,
        timezone: "Asia/Shanghai",
        countryCode: "CN"
      },
      {
        name: "Shanghai",
        latitude: 31.2304,
        longitude: 121.4737,
        timezone: "Asia/Shanghai",
        countryCode: "CN"
      },
      {
        name: "Hangzhou",
        latitude: 30.2741,
        longitude: 120.1551,
        timezone: "Asia/Shanghai",
        countryCode: "CN"
      },
      {
        name: "Nanjing",
        latitude: 32.0603,
        longitude: 118.7969,
        timezone: "Asia/Shanghai",
        countryCode: "CN"
      },
      {
        name: "Suzhou",
        latitude: 31.2989,
        longitude: 120.5853,
        timezone: "Asia/Shanghai",
        countryCode: "CN"
      },
      {
        name: "Wuxi",
        latitude: 31.4912,
        longitude: 120.3119,
        timezone: "Asia/Shanghai",
        countryCode: "CN"
      },
      {
        name: "Tianjin",
        latitude: 39.3434,
        longitude: 117.3616,
        timezone: "Asia/Shanghai",
        countryCode: "CN"
      },
      {
        name: "Qingdao",
        latitude: 36.0661,
        longitude: 120.3826,
        timezone: "Asia/Shanghai",
        countryCode: "CN"
      },
      {
        name: "Chongqing",
        latitude: 29.5628,
        longitude: 106.5533,
        timezone: "Asia/Shanghai",
        countryCode: "CN"
      }
    ]
  },
  {
    name: "Colombia",
    code: "CO",
    cities: [
      {
        name: "Bogota",
        latitude: 4.624335,
        longitude: -74.063644,
        timezone: "America/Bogota",
        countryCode: "CO"
      },
      {
        name: "Medellin",
        latitude: 6.23083,
        longitude: -75.59056,
        timezone: "America/Bogota",
        countryCode: "CO"
      },
      {
        name: "Cali",
        latitude: 3.420556,
        longitude: -76.522224,
        timezone: "America/Bogota",
        countryCode: "CO"
      },
      {
        name: "Barranquilla",
        latitude: 10.9685,
        longitude: -74.7813,
        timezone: "America/Bogota",
        countryCode: "CO"
      },
      {
        name: "Cartagena",
        latitude: 10.3997,
        longitude: -75.5144,
        timezone: "America/Bogota",
        countryCode: "CO"
      }
    ]
  },
  {
    name: "Comoros",
    code: "KM",
    cities: [
      {
        name: "Moroni",
        latitude: -11.7022,
        longitude: 43.2551,
        timezone: "Indian/Comoros",
        countryCode: "KM"
      },
      {
        name: "Fomboni",
        latitude: -12.2800,
        longitude: 43.7425,
        timezone: "Indian/Comoros",
        countryCode: "KM"
      },
      {
        name: "Mutsamudu",
        latitude: -12.1667,
        longitude: 44.4000,
        timezone: "Indian/Comoros",
        countryCode: "KM"
      },
      {
        name: "Domoni",
        latitude: -12.2569,
        longitude: 44.5242,
        timezone: "Indian/Comoros",
        countryCode: "KM"
      },
      {
        name: "Chindini",
        latitude: -11.9233,
        longitude: 43.4911,
        timezone: "Indian/Comoros",
        countryCode: "KM"
      }
    ]
  },
  {
    name: "Costa Rica",
    code: "CR",
    cities: [
      {
        name: "San Jose",
        latitude: 9.9333,
        longitude: -84.0833,
        timezone: "America/Costa_Rica",
        countryCode: "CR"
      },
      {
        name: "Alajuela",
        latitude: 10.0167,
        longitude: -84.2167,
        timezone: "America/Costa_Rica",
        countryCode: "CR"
      },
      {
        name: "Cartago",
        latitude: 9.8644,
        longitude: -83.9194,
        timezone: "America/Costa_Rica",
        countryCode: "CR"
      },
      {
        name: "Heredia",
        latitude: 10.0024,
        longitude: -84.1165,
        timezone: "America/Costa_Rica",
        countryCode: "CR"
      },
      {
        name: "Liberia",
        latitude: 10.6333,
        longitude: -85.4333,
        timezone: "America/Costa_Rica",
        countryCode: "CR"
      }
    ]
  },
  {
    name: "Croatia",
    code: "HR",
    cities: [
      {
        name: "Zagreb",
        latitude: 45.8150,
        longitude: 15.9819,
        timezone: "Europe/Zagreb",
        countryCode: "HR"
      },
      {
        name: "Split",
        latitude: 43.5081,
        longitude: 16.4402,
        timezone: "Europe/Zagreb",
        countryCode: "HR"
      },
      {
        name: "Rijeka",
        latitude: 45.3271,
        longitude: 14.4422,
        timezone: "Europe/Zagreb",
        countryCode: "HR"
      },
      {
        name: "Osijek",
        latitude: 45.5511,
        longitude: 18.6939,
        timezone: "Europe/Zagreb",
        countryCode: "HR"
      },
      {
        name: "Zadar",
        latitude: 44.1194,
        longitude: 15.2314,
        timezone: "Europe/Zagreb",
        countryCode: "HR"
      },
      {
        name: "Slavonski Brod",
        latitude: 45.1603,
        longitude: 18.0156,
        timezone: "Europe/Zagreb",
        countryCode: "HR"
      },
      {
        name: "Pula",
        latitude: 44.8666,
        longitude: 13.8496,
        timezone: "Europe/Zagreb",
        countryCode: "HR"
      }
    ]
  },
  {
    name: "Cuba",
    code: "CU",
    cities: [
      {
        name: "Havana",
        latitude: 23.1136,
        longitude: -82.3666,
        timezone: "America/Havana",
        countryCode: "CU"
      },
      {
        name: "Santiago de Cuba",
        latitude: 20.0250,
        longitude: -75.8210,
        timezone: "America/Havana",
        countryCode: "CU"
      },
      {
        name: "Camaguey",
        latitude: 21.3833,
        longitude: -77.9167,
        timezone: "America/Havana",
        countryCode: "CU"
      },
      {
        name: "Holguin",
        latitude: 20.8872,
        longitude: -76.2631,
        timezone: "America/Havana",
        countryCode: "CU"
      },
      {
        name: "Santa Clara",
        latitude: 22.4069,
        longitude: -79.9647,
        timezone: "America/Havana",
        countryCode: "CU"
      },
      {
        name: "Guantanamo",
        latitude: 20.1444,
        longitude: -75.2092,
        timezone: "America/Havana",
        countryCode: "CU"
      },
      {
        name: "Bayamo",
        latitude: 20.3792,
        longitude: -76.6433,
        timezone: "America/Havana",
        countryCode: "CU"
      }
    ]
  },
  {
    name: "Cyprus",
    code: "CY",
    cities: [
      {
        name: "Nicosia",
        latitude: 35.1856,
        longitude: 33.3823,
        timezone: "Asia/Nicosia",
        countryCode: "CY"
      },
      {
        name: "Limassol",
        latitude: 34.7071,
        longitude: 33.0226,
        timezone: "Asia/Nicosia",
        countryCode: "CY"
      },
      {
        name: "Larnaca",
        latitude: 34.9167,
        longitude: 33.6333,
        timezone: "Asia/Nicosia",
        countryCode: "CY"
      },
      {
        name: "Famagusta",
        latitude: 35.1253,
        longitude: 33.9500,
        timezone: "Asia/Nicosia",
        countryCode: "CY"
      },
      {
        name: "Paphos",
        latitude: 34.7750,
        longitude: 32.4297,
        timezone: "Asia/Nicosia",
        countryCode: "CY"
      }
    ]
  },
  {
    name: "Czech Republic",
    code: "CZ",
    cities: [
      {
        name: "Prague",
        latitude: 50.0755,
        longitude: 14.4378,
        timezone: "Europe/Prague",
        countryCode: "CZ"
      },
      {
        name: "Brno",
        latitude: 49.1951,
        longitude: 16.6068,
        timezone: "Europe/Prague",
        countryCode: "CZ"
      },
      {
        name: "Ostrava",
        latitude: 49.8346,
        longitude: 18.2920,
        timezone: "Europe/Prague",
        countryCode: "CZ"
      },
      {
        name: "Plzen",
        latitude: 49.7480,
        longitude: 13.3776,
        timezone: "Europe/Prague",
        countryCode: "CZ"
      },
      {
        name: "Liberec",
        latitude: 50.7671,
        longitude: 15.0562,
        timezone: "Europe/Prague",
        countryCode: "CZ"
      },
      {
        name: "Olomouc",
        latitude: 49.5938,
        longitude: 17.2509,
        timezone: "Europe/Prague",
        countryCode: "CZ"
      },
      {
        name: "Ceske Budejovice",
        latitude: 48.9747,
        longitude: 14.4744,
        timezone: "Europe/Prague",
        countryCode: "CZ"
      }
    ]
  },
  {
    name: "Denmark",
    code: "DK",
    cities: [
      {
        name: "Copenhagen",
        latitude: 55.6759,
        longitude: 12.5655,
        timezone: "Europe/Copenhagen",
        countryCode: "DK"
      },
      {
        name: "Aarhus",
        latitude: 56.1572,
        longitude: 10.2108,
        timezone: "Europe/Copenhagen",
        countryCode: "DK"
      },
      {
        name: "Odense",
        latitude: 55.4038,
        longitude: 10.4024,
        timezone: "Europe/Copenhagen",
        countryCode: "DK"
      },
      {
        name: "Aalborg",
        latitude: 57.0480,
        longitude: 9.9187,
        timezone: "Europe/Copenhagen",
        countryCode: "DK"
      },
      {
        name: "Esbjerg",
        latitude: 55.4703,
        longitude: 8.4519,
        timezone: "Europe/Copenhagen",
        countryCode: "DK"
      },
      {
        name: "Randers",
        latitude: 56.4607,
        longitude: 10.0364,
        timezone: "Europe/Copenhagen",
        countryCode: "DK"
      },
      {
        name: "Kolding",
        latitude: 55.4904,
        longitude: 9.4722,
        timezone: "Europe/Copenhagen",
        countryCode: "DK"
      }
    ]
  },
  {
    name: "Djibouti",
    code: "DJ",
    cities: [
      {
        name: "Djibouti",
        latitude: 11.5944,
        longitude: 43.1481,
        timezone: "Africa/Djibouti",
        countryCode: "DJ"
      },
      {
        name: "Ali Sabieh",
        latitude: 11.1558,
        longitude: 42.7125,
        timezone: "Africa/Djibouti",
        countryCode: "DJ"
      },
      {
        name: "Tadjoura",
        latitude: 11.7853,
        longitude: 42.8844,
        timezone: "Africa/Djibouti",
        countryCode: "DJ"
      },
      {
        name: "Doraleh",
        latitude: 11.5666,
        longitude: 43.1500,
        timezone: "Africa/Djibouti",
        countryCode: "DJ"
      },
      {
        name: "Obock",
        latitude: 11.9631,
        longitude: 43.2906,
        timezone: "Africa/Djibouti",
        countryCode: "DJ"
      }
    ]
  },
  {
    name: "Dominica",
    code: "DM",
    cities: [
      {
        name: "Roseau",
        latitude: 15.3017,
        longitude: -61.3880,
        timezone: "America/Dominica",
        countryCode: "DM"
      },
      {
        name: "Portsmouth",
        latitude: 15.5833,
        longitude: -61.4667,
        timezone: "America/Dominica",
        countryCode: "DM"
      },
      {
        name: "Marigot",
        latitude: 15.5333,
        longitude: -61.3000,
        timezone: "America/Dominica",
        countryCode: "DM"
      },
      {
        name: "Castle Bruce",
        latitude: 15.4167,
        longitude: -61.2667,
        timezone: "America/Dominica",
        countryCode: "DM"
      },
      {
        name: "Grand Bay",
        latitude: 15.2333,
        longitude: -61.3167,
        timezone: "America/Dominica",
        countryCode: "DM"
      },
      {
        name: "La Plaine",
        latitude: 15.2833,
        longitude: -61.2500,
        timezone: "America/Dominica",
        countryCode: "DM"
      }
    ]
  },
  {
    name: "Dominican Republic",
    code: "DO",
    cities: [
      {
        name: "Santo Domingo",
        latitude: 18.4861,
        longitude: -69.9312,
        timezone: "America/Santo_Domingo",
        countryCode: "DO"
      },
      {
        name: "Santiago de los Caballeros",
        latitude: 19.4500,
        longitude: -70.7000,
        timezone: "America/Santo_Domingo",
        countryCode: "DO"
      },
      {
        name: "La Romana",
        latitude: 18.4333,
        longitude: -68.9667,
        timezone: "America/Santo_Domingo",
        countryCode: "DO"
      },
      {
        name: "San Pedro de Macoris",
        latitude: 18.4500,
        longitude: -69.3000,
        timezone: "America/Santo_Domingo",
        countryCode: "DO"
      },
      {
        name: "Puerto Plata",
        latitude: 19.8000,
        longitude: -70.7000,
        timezone: "America/Santo_Domingo",
        countryCode: "DO"
      },
      {
        name: "San Cristobal",
        latitude: 18.4167,
        longitude: -70.1000,
        timezone: "America/Santo_Domingo",
        countryCode: "DO"
      }
    ]
  },
  {
    name: "Ecuador",
    code: "EC",
    cities: [
      {
        name: "Quito",
        latitude: -0.2299,
        longitude: -78.5249,
        timezone: "America/Guayaquil",
        countryCode: "EC"
      },
      {
        name: "Guayaquil",
        latitude: -2.1709,
        longitude: -79.9224,
        timezone: "America/Guayaquil",
        countryCode: "EC"
      },
      {
        name: "Cuenca",
        latitude: -2.9006,
        longitude: -79.0045,
        timezone: "America/Guayaquil",
        countryCode: "EC"
      },
      {
        name: "Machala",
        latitude: -3.2581,
        longitude: -79.9556,
        timezone: "America/Guayaquil",
        countryCode: "EC"
      },
      {
        name: "Loja",
        latitude: -3.9931,
        longitude: -79.2042,
        timezone: "America/Guayaquil",
        countryCode: "EC"
      }
    ]
  },
  {
    name: "Egypt",
    code: "EG",
    cities: [
      {
        name: "Cairo",
        latitude: 30.0444,
        longitude: 31.2357,
        timezone: "Africa/Cairo",
        countryCode: "EG"
      },
      {
        name: "Alexandria",
        latitude: 31.2001,
        longitude: 29.9187,
        timezone: "Africa/Cairo",
        countryCode: "EG"
      },
      {
        name: "Giza",
        latitude: 30.0131,
        longitude: 31.2089,
        timezone: "Africa/Cairo",
        countryCode: "EG"
      }
    ]
  },
  {
    name: "El Salvador",
    code: "SV",
    cities: [
      {
        name: "San Salvador",
        latitude: 13.6929,
        longitude: -89.2182,
        timezone: "America/El_Salvador",
        countryCode: "SV"
      },
      {
        name: "Santa Ana",
        latitude: 13.9946,
        longitude: -89.5597,
        timezone: "America/El_Salvador",
        countryCode: "SV"
      },
      {
        name: "San Miguel",
        latitude: 13.4833,
        longitude: -88.1833,
        timezone: "America/El_Salvador",
        countryCode: "SV"
      },
      {
        name: "La Libertad",
        latitude: 13.4886,
        longitude: -89.3220,
        timezone: "America/El_Salvador",
        countryCode: "SV"
      },
      {
        name: "Sonsonate",
        latitude: 13.7181,
        longitude: -89.7217,
        timezone: "America/El_Salvador",
        countryCode: "SV"
      }
    ]
  },
  {
    name: "Equatorial Guinea",
    code: "GQ",
    cities: [
      {
        name: "Malabo",
        latitude: 3.7500,
        longitude: 8.7833,
        timezone: "Africa/Malabo",
        countryCode: "GQ"
      },
      {
        name: "Bata",
        latitude: 1.8500,
        longitude: 9.7667,
        timezone: "Africa/Malabo",
        countryCode: "GQ"
      },
      {
        name: "Ebebiyin",
        latitude: 2.1500,
        longitude: 11.3167,
        timezone: "Africa/Malabo",
        countryCode: "GQ"
      },
      {
        name: "Luba",
        latitude: 3.4500,
        longitude: 8.5667,
        timezone: "Africa/Malabo",
        countryCode: "GQ"
      },
      {
        name: "Aconibe",
        latitude: 1.3000,
        longitude: 10.9333,
        timezone: "Africa/Malabo",
        countryCode: "GQ"
      }
    ]
  },
  {
    name: "Eritrea",
    code: "ER",
    cities: [
      {
        name: "Asmara",
        latitude: 15.3333,
        longitude: 38.9333,
        timezone: "Africa/Asmara",
        countryCode: "ER"
      },
      {
        name: "Keren",
        latitude: 15.7833,
        longitude: 38.4500,
        timezone: "Africa/Asmara",
        countryCode: "ER"
      },
      {
        name: "Massawa",
        latitude: 15.6000,
        longitude: 39.4500,
        timezone: "Africa/Asmara",
        countryCode: "ER"
      },
      {
        name: "Mendefera",
        latitude: 14.8872,
        longitude: 38.8163,
        timezone: "Africa/Asmara",
        countryCode: "ER"
      },
      {
        name: "Adigrat",
        latitude: 14.2770,
        longitude: 39.4632,
        timezone: "Africa/Asmara",
        countryCode: "ER"
      }
    ]
  },
  {
    name: "Estonia",
    code: "EE",
    cities: [
      {
        name: "Tallinn",
        latitude: 59.4370,
        longitude: 24.7536,
        timezone: "Europe/Tallinn",
        countryCode: "EE"
      },
      {
        name: "Tartu",
        latitude: 58.3776,
        longitude: 26.7290,
        timezone: "Europe/Tallinn",
        countryCode: "EE"
      },
      {
        name: "Narva",
        latitude: 59.3794,
        longitude: 28.1792,
        timezone: "Europe/Tallinn",
        countryCode: "EE"
      },
      {
        name: "Pärnu",
        latitude: 58.3859,
        longitude: 24.4971,
        timezone: "Europe/Tallinn",
        countryCode: "EE"
      },
      {
        name: "Kohtla-Järve",
        latitude: 59.3986,
        longitude: 27.2731,
        timezone: "Europe/Tallinn",
        countryCode: "EE"
      },
      {
        name: "Viljandi",
        latitude: 58.3639,
        longitude: 25.5972,
        timezone: "Europe/Tallinn",
        countryCode: "EE"
      },
      {
        name: "Maardu",
        latitude: 59.4767,
        longitude: 25.0239,
        timezone: "Europe/Tallinn",
        countryCode: "EE"
      }
    ]
  },
  {
    name: "Eswatini",
    code: "SZ",
    cities: [
      {
        name: "Mbabane",
        latitude: -26.3200,
        longitude: 31.1600,
        timezone: "Africa/Mbabane",
        countryCode: "SZ"
      },
      {
        name: "Manzini",
        latitude: -26.4833,
        longitude: 31.3667,
        timezone: "Africa/Mbabane",
        countryCode: "SZ"
      },
      {
        name: "Lobamba",
        latitude: -26.4333,
        longitude: 31.2000,
        timezone: "Africa/Mbabane",
        countryCode: "SZ"
      },
      {
        name: "Nhlangano",
        latitude: -27.1167,
        longitude: 31.2000,
        timezone: "Africa/Mbabane",
        countryCode: "SZ"
      },
      {
        name: "Big Bend",
        latitude: -26.8333,
        longitude: 31.9333,
        timezone: "Africa/Mbabane",
        countryCode: "SZ"
      }
    ]
  },
  {
    name: "Ethiopia",
    code: "ET",
    cities: [
      {
        name: "Addis Ababa",
        latitude: 9.0300,
        longitude: 38.7400,
        timezone: "Africa/Addis_Ababa",
        countryCode: "ET"
      },
      {
        name: "Mekelle",
        latitude: 13.4967,
        longitude: 39.4753,
        timezone: "Africa/Addis_Ababa",
        countryCode: "ET"
      },
      {
        name: "Gondar",
        latitude: 12.6000,
        longitude: 37.4667,
        timezone: "Africa/Addis_Ababa",
        countryCode: "ET"
      },
      {
        name: "Dire Dawa",
        latitude: 9.6000,
        longitude: 41.8667,
        timezone: "Africa/Addis_Ababa",
        countryCode: "ET"
      },
      {
        name: "Hawassa",
        latitude: 7.0621,
        longitude: 38.4762,
        timezone: "Africa/Addis_Ababa",
        countryCode: "ET"
      }
    ]
  },
  {
    name: "Fiji",
    code: "FJ",
    cities: [
      {
        name: "Suva",
        latitude: -18.1416,
        longitude: 178.4419,
        timezone: "Pacific/Fiji",
        countryCode: "FJ"
      },
      {
        name: "Nadi",
        latitude: -17.8031,
        longitude: 177.4192,
        timezone: "Pacific/Fiji",
        countryCode: "FJ"
      },
      {
        name: "Lautoka",
        latitude: -17.6169,
        longitude: 177.4500,
        timezone: "Pacific/Fiji",
        countryCode: "FJ"
      },
      {
        name: "Labasa",
        latitude: -16.4302,
        longitude: 179.3833,
        timezone: "Pacific/Fiji",
        countryCode: "FJ"
      },
      {
        name: "Ba",
        latitude: -17.5333,
        longitude: 177.6833,
        timezone: "Pacific/Fiji",
        countryCode: "FJ"
      }
    ]
  },
  {
    name: "Finland",
    code: "FI",
    cities: [
      {
        name: "Helsinki",
        latitude: 60.1695,
        longitude: 24.9354,
        timezone: "Europe/Helsinki",
        countryCode: "FI"
      },
      {
        name: "Tampere",
        latitude: 61.4982,
        longitude: 23.7610,
        timezone: "Europe/Helsinki",
        countryCode: "FI"
      },
      {
        name: "Turku",
        latitude: 60.4518,
        longitude: 22.2666,
        timezone: "Europe/Helsinki",
        countryCode: "FI"
      },
      {
        name: "Oulu",
        latitude: 65.0121,
        longitude: 25.4651,
        timezone: "Europe/Helsinki",
        countryCode: "FI"
      },
      {
        name: "Espoo",
        latitude: 60.2055,
        longitude: 24.6559,
        timezone: "Europe/Helsinki",
        countryCode: "FI"
      },
      {
        name: "Vantaa",
        latitude: 60.2941,
        longitude: 25.0402,
        timezone: "Europe/Helsinki",
        countryCode: "FI"
      },
      {
        name: "Jyväskylä",
        latitude: 62.2426,
        longitude: 25.7473,
        timezone: "Europe/Helsinki",
        countryCode: "FI"
      }
    ]
  },
  {
    name: "France",
    code: "FR",
    cities: [
      {
        name: "Paris",
        latitude: 48.8566,
        longitude: 2.3522,
        timezone: "Europe/Paris",
        countryCode: "FR"
      },
      {
        name: "Marseille",
        latitude: 43.2965,
        longitude: 5.3698,
        timezone: "Europe/Paris",
        countryCode: "FR"
      },
      {
        name: "Lyon",
        latitude: 45.7640,
        longitude: 4.8357,
        timezone: "Europe/Paris",
        countryCode: "FR"
      },
      {
        name: "Toulouse",
        latitude: 43.6047,
        longitude: 1.4442,
        timezone: "Europe/Paris",
        countryCode: "FR"
      },
      {
        name: "Nice",
        latitude: 43.7102,
        longitude: 7.2620,
        timezone: "Europe/Paris",
        countryCode: "FR"
      },
      {
        name: "Nantes",
        latitude: 47.2184,
        longitude: -1.5536,
        timezone: "Europe/Paris",
        countryCode: "FR"
      },
      {
        name: "Strasbourg",
        latitude: 48.5734,
        longitude: 7.7521,
        timezone: "Europe/Paris",
        countryCode: "FR"
      }
    ]
  },
  {
    name: "Gabon",
    code: "GA",
    cities: [
      {
        name: "Libreville",
        timezone: "Africa/Libreville",
        latitude: 0.3901,
        longitude: 9.4544,
        countryCode: "GA"
      },
      {
        name: "Port-Gentil",
        timezone: "Africa/Libreville",
        latitude: -0.7193,
        longitude: 8.7815,
        countryCode: "GA"
      },
      {
        name: "Franceville",
        timezone: "Africa/Libreville",
        latitude: -1.6196,
        longitude: 13.6015,
        countryCode: "GA"
      },
      {
        name: "Oyem",
        timezone: "Africa/Libreville",
        latitude: 1.5995,
        longitude: 11.5793,
        countryCode: "GA"
      },
      {
        name: "Moanda",
        timezone: "Africa/Libreville",
        latitude: -1.5667,
        longitude: 13.2000,
        countryCode: "GA"
      }
    ]
  },
  {
    name: "Gambia",
    code: "GM",
    cities: [
      {
        name: "Banjul",
        timezone: "Africa/Banjul",
        latitude: 13.4527,
        longitude: -16.5780,
        countryCode: "GM"
      },
      {
        name: "Serekunda",
        timezone: "Africa/Banjul",
        latitude: 13.4484,
        longitude: -16.6851,
        countryCode: "GM"
      },
      {
        name: "Brikama",
        timezone: "Africa/Banjul",
        latitude: 13.2714,
        longitude: -16.6494,
        countryCode: "GM"
      },
      {
        name: "Kerewan",
        timezone: "Africa/Banjul",
        latitude: 13.5000,
        longitude: -16.0833,
        countryCode: "GM"
      },
      {
        name: "Bakau",
        timezone: "Africa/Banjul",
        latitude: 13.4781,
        longitude: -16.6819,
        countryCode: "GM"
      }
    ]
  },
  {
    name: "Georgia",
    code: "GE",
    cities: [
      {
        name: "Tbilisi",
        timezone: "Asia/Tbilisi",
        latitude: 41.6971,
        longitude: 44.7737,
        countryCode: "GE"
      },
      {
        name: "Batumi",
        timezone: "Asia/Tbilisi",
        latitude: 41.6423,
        longitude: 41.6339,
        countryCode: "GE"
      },
      {
        name: "Kutaisi",
        timezone: "Asia/Tbilisi",
        latitude: 42.2679,
        longitude: 42.6946,
        countryCode: "GE"
      },
      {
        name: "Zugdidi",
        timezone: "Asia/Tbilisi",
        latitude: 42.5088,
        longitude: 41.8709,
        countryCode: "GE"
      },
      {
        name: "Rustavi",
        timezone: "Asia/Tbilisi",
        latitude: 41.5436,
        longitude: 45.0117,
        countryCode: "GE"
      }
    ]
  },
  {
    name: "Germany",
    code: "DE",
    cities: [
      {
        name: "Berlin",
        timezone: "Europe/Berlin",
        latitude: 52.5200,
        longitude: 13.4050,
        countryCode: "DE"
      },
      {
        name: "Munich",
        timezone: "Europe/Berlin",
        latitude: 48.1351,
        longitude: 11.5820,
        countryCode: "DE"
      },
      {
        name: "Hamburg",
        timezone: "Europe/Berlin",
        latitude: 53.5511,
        longitude: 9.9937,
        countryCode: "DE"
      },
      {
        name: "Frankfurt",
        timezone: "Europe/Berlin",
        latitude: 50.1109,
        longitude: 8.6821,
        countryCode: "DE"
      },
      {
        name: "Stuttgart",
        timezone: "Europe/Berlin",
        latitude: 48.7758,
        longitude: 9.1829,
        countryCode: "DE"
      },
      {
        name: "Cologne",
        timezone: "Europe/Berlin",
        latitude: 50.9375,
        longitude: 6.9603,
        countryCode: "DE"
      },
      {
        name: "Dusseldorf",
        timezone: "Europe/Berlin",
        latitude: 51.2277,
        longitude: 6.7735,
        countryCode: "DE"
      }
    ]
  },
  {
    name: "Ghana",
    code: "GH",
    cities: [
      {
        name: "Accra",
        timezone: "Africa/Accra",
        latitude: 5.6037,
        longitude: -0.1870,
        countryCode: "GH"
      },
      {
        name: "Kumasi",
        timezone: "Africa/Accra",
        latitude: 6.6885,
        longitude: -1.6244,
        countryCode: "GH"
      },
      {
        name: "Tamale",
        timezone: "Africa/Accra",
        latitude: 9.4071,
        longitude: -0.8539,
        countryCode: "GH"
      },
      {
        name: "Sunyani",
        timezone: "Africa/Accra",
        latitude: 7.3390,
        longitude: -2.3268,
        countryCode: "GH"
      },
      {
        name: "Takoradi",
        timezone: "Africa/Accra",
        latitude: 4.9128,
        longitude: -1.7597,
        countryCode: "GH"
      }
    ]
  },
  {
    name: "Greece",
    code: "GR",
    cities: [
      {
        name: "Athens",
        timezone: "Europe/Athens",
        latitude: 37.9838,
        longitude: 23.7275,
        countryCode: "GR"
      },
      {
        name: "Thessaloniki",
        timezone: "Europe/Athens",
        latitude: 40.6401,
        longitude: 22.9444,
        countryCode: "GR"
      },
      {
        name: "Patras",
        timezone: "Europe/Athens",
        latitude: 38.2466,
        longitude: 21.7346,
        countryCode: "GR"
      },
      {
        name: "Heraklion",
        timezone: "Europe/Athens",
        latitude: 35.3387,
        longitude: 25.1442,
        countryCode: "GR"
      },
      {
        name: "Larissa",
        timezone: "Europe/Athens",
        latitude: 39.6390,
        longitude: 22.4191,
        countryCode: "GR"
      },
      {
        name: "Volos",
        timezone: "Europe/Athens",
        latitude: 39.3620,
        longitude: 22.9420,
        countryCode: "GR"
      },
      {
        name: "Rhodes",
        timezone: "Europe/Athens",
        latitude: 36.4340,
        longitude: 28.2176,
        countryCode: "GR"
      }
    ]
  },
  {
    name: "Grenada",
    code: "GD",
    cities: [
      {
        name: "St. George's",
        timezone: "America/Grenada",
        latitude: 12.0561,
        longitude: -61.7486,
        countryCode: "GD"
      },
      {
        name: "Gouyave",
        timezone: "America/Grenada",
        latitude: 12.1645,
        longitude: -61.7290,
        countryCode: "GD"
      }
    ]
  },
  {
    name: "Guatemala",
    code: "GT",
    cities: [
      {
        name: "Guatemala City",
        timezone: "America/Guatemala",
        latitude: 14.6349,
        longitude: -90.5069,
        countryCode: "GT"
      },
      {
        name: "Quetzaltenango",
        timezone: "America/Guatemala",
        latitude: 14.8340,
        longitude: -91.5189,
        countryCode: "GT"
      },
      {
        name: "Escuintla",
        timezone: "America/Guatemala",
        latitude: 14.3050,
        longitude: -90.7850,
        countryCode: "GT"
      },
      {
        name: "Chimaltenango",
        timezone: "America/Guatemala",
        latitude: 14.6614,
        longitude: -90.8200,
        countryCode: "GT"
      }
    ]
  },
  {
    name: "Guyana",
    code: "GY",
    cities: [
      {
        name: "Georgetown",
        timezone: "America/Guyana",
        latitude: 6.8013,
        longitude: -58.1551,
        countryCode: "GY"
      },
      {
        name: "Linden",
        timezone: "America/Guyana",
        latitude: 6.0086,
        longitude: -58.3075,
        countryCode: "GY"
      },
      {
        name: "New Amsterdam",
        timezone: "America/Guyana",
        latitude: 6.2500,
        longitude: -57.5167,
        countryCode: "GY"
      }
    ]
  },
  {
    name: "Haiti",
    code: "HT",
    cities: [
      {
        name: "Port-au-Prince",
        latitude: 18.5944,
        longitude: -72.3074,
        timezone: "America/Port-au-Prince",
        countryCode: "HT"
      },
      {
        name: "Cap-Haitien",
        latitude: 19.7553,
        longitude: -72.2081,
        timezone: "America/Port-au-Prince",
        countryCode: "HT"
      },
      {
        name: "Gonaïves",
        latitude: 19.4525,
        longitude: -72.6828,
        timezone: "America/Port-au-Prince",
        countryCode: "HT"
      },
      {
        name: "Les Cayes",
        latitude: 18.2206,
        longitude: -73.7544,
        timezone: "America/Port-au-Prince",
        countryCode: "HT"
      },
      {
        name: "Jacmel",
        latitude: 18.2375,
        longitude: -72.5336,
        timezone: "America/Port-au-Prince",
        countryCode: "HT"
      },
      {
        name: "Saint-Marc",
        latitude: 19.0667,
        longitude: -72.7167,
        timezone: "America/Port-au-Prince",
        countryCode: "HT"
      }
    ]
  },
  {
    name: "Honduras",
    code: "HN",
    cities: [
      {
        name: "Tegucigalpa",
        latitude: 13.9671,
        longitude: -66.9512,
        timezone: "America/Tegucigalpa",
        countryCode: "HN"
      },
      {
        name: "San Pedro Sula",
        latitude: 13.9597,
        longitude: -88.1059,
        timezone: "America/Tegucigalpa",
        countryCode: "HN"
      },
      {
        name: "La Ceiba",
        latitude: 15.7797,
        longitude: -86.7833,
        timezone: "America/Tegucigalpa",
        countryCode: "HN"
      },
      {
        name: "Choloma",
        latitude: 13.9869,
        longitude: -87.9664,
        timezone: "America/Tegucigalpa",
        countryCode: "HN"
      },
      {
        name: "Puerto Cortés",
        latitude: 13.1806,
        longitude: -87.9797,
        timezone: "America/Tegucigalpa",
        countryCode: "HN"
      },
      {
        name: "Comayagua",
        latitude: 13.9603,
        longitude: -86.7806,
        timezone: "America/Tegucigalpa",
        countryCode: "HN"
      }
    ]

  },

  {
    name: "Hungary",
    code: "HU",
    cities: [
      {
        name: "Budapest",
        latitude: 47.4979,
        longitude: 19.0402,
        timezone: "Europe/Budapest",
        countryCode: "HU"
      },
      {
        name: "Debrecen",
        latitude: 47.5316,
        longitude: 21.6276,
        timezone: "Europe/Budapest",
        countryCode: "HU"
      },
      {
        name: "Szeged",
        latitude: 46.2530,
        longitude: 20.1419,
        timezone: "Europe/Budapest",
        countryCode: "HU"
      },
      {
        name: "Miskolc",
        latitude: 48.1033,
        longitude: 20.7794,
        timezone: "Europe/Budapest",
        countryCode: "HU"
      },
      {
        name: "Pécs",
        latitude: 46.0727,
        longitude: 18.2292,
        timezone: "Europe/Budapest",
        countryCode: "HU"
      },
      {
        name: "Győr",
        latitude: 47.6869,
        longitude: 17.6500,
        timezone: "Europe/Budapest",
        countryCode: "HU"
      }
    ]
  },
  {
    name: "India",
    code: "IN",
    cities: [
      {
        name: "Kolkata",
        countryCode: "IN",
        timezone: "Asia/Kolkata",
        latitude: 22.5726,
        longitude: 88.3639
      },
      {
        name: "Mumbai",
        countryCode: "IN",
        timezone: "Asia/Kolkata",
        latitude: 19.0760,
        longitude: 72.8777
      },
      {
        name: "Delhi",
        countryCode: "IN",
        timezone: "Asia/Kolkata",
        latitude: 28.6139,
        longitude: 77.2090
      },
      {
        name: "Bangalore",
        countryCode: "IN",
        timezone: "Asia/Kolkata",
        latitude: 12.9716,
        longitude: 77.5946
      },
      {
        name: "Chennai",
        countryCode: "IN",
        timezone: "Asia/Kolkata",
        latitude: 13.0827,
        longitude: 80.2707
      },
      {
        name: "Hyderabad",
        countryCode: "IN",
        timezone: "Asia/Kolkata",
        latitude: 17.3850,
        longitude: 78.4867
      },
      {
        name: "Pune",
        countryCode: "IN",
        timezone: "Asia/Kolkata",
        latitude: 18.5204,
        longitude: 73.8567
      },
      {
        name: "Ahmedabad",
        countryCode: "IN",
        timezone: "Asia/Kolkata",
        latitude: 23.0225,
        longitude: 72.5714
      },
      {
        name: "Surat",
        countryCode: "IN",
        timezone: "Asia/Kolkata",
        latitude: 21.1702,
        longitude: 72.8311
      },
      {
        name: "Jaipur",
        countryCode: "IN",
        timezone: "Asia/Kolkata",
        latitude: 26.9124,
        longitude: 75.7873
      },
      {
        name: "Lucknow",
        countryCode: "IN",
        timezone: "Asia/Kolkata",
        latitude: 26.8467,
        longitude: 80.9462
      },
      {
        name: "Kanpur",
        countryCode: "IN",
        timezone: "Asia/Kolkata",
        latitude: 26.4499,
        longitude: 80.3319
      },
      {
        name: "Nagpur",
        countryCode: "IN",
        timezone: "Asia/Kolkata",
        latitude: 21.1458,
        longitude: 79.0882
      },
      {
        name: "Indore",
        countryCode: "IN",
        timezone: "Asia/Kolkata",
        latitude: 22.7196,
        longitude: 75.8577
      },
      {
        name: "Vadodara",
        countryCode: "IN",
        timezone: "Asia/Kolkata",
        latitude: 22.3072,
        longitude: 73.1812
      },
      {
        name: "Bhopal",
        countryCode: "IN",
        timezone: "Asia/Kolkata",
        latitude: 23.2599,
        longitude: 77.4126
      },
      {
        name: "Patna",
        countryCode: "IN",
        timezone: "Asia/Kolkata",
        latitude: 25.5941,
        longitude: 85.1376
      },
      {
        name: "Kochi",
        countryCode: "IN",
        timezone: "Asia/Kolkata",
        latitude: 9.9312,
        longitude: 76.2673
      },
      {
        name: "Vishakhapatnam",
        countryCode: "IN",
        timezone: "Asia/Kolkata",
        latitude: 17.6869,
        longitude: 83.2185
      },
      {
        name: "Ranchi",
        countryCode: "IN",
        timezone: "Asia/Kolkata",
        latitude: 23.3441,
        longitude: 85.3096
      },
      {
        name: "Guwahati",
        countryCode: "IN",
        timezone: "Asia/Kolkata",
        latitude: 26.1445,
        longitude: 91.7362
      },
      {
        name: "Chandigarh",
        countryCode: "IN",
        timezone: "Asia/Kolkata",
        latitude: 30.7333,
        longitude: 76.7794
      },
      {
        name: "Noida",
        countryCode: "IN",
        timezone: "Asia/Kolkata",
        latitude: 28.5355,
        longitude: 77.3910
      },
      {
        name: "Faridabad",
        countryCode: "IN",
        timezone: "Asia/Kolkata",
        latitude: 28.4089,
        longitude: 77.3178
      },
      {
        name: "Amritsar",
        countryCode: "IN",
        timezone: "Asia/Kolkata",
        latitude: 31.5497,
        longitude: 74.3436
      },
      {
        name: "Rajkot",
        countryCode: "IN",
        timezone: "Asia/Kolkata",
        latitude: 22.3039,
        longitude: 70.8022
      },
      {
        name: "Udaipur",
        countryCode: "IN",
        timezone: "Asia/Kolkata",
        latitude: 24.5854,
        longitude: 73.7125
      },
      {
        name: "Jammu",
        countryCode: "IN",
        timezone: "Asia/Kolkata",
        latitude: 32.7266,
        longitude: 74.8570
      },
      {
        name: "Agra",
        countryCode: "IN",
        timezone: "Asia/Kolkata",
        latitude: 27.1767,
        longitude: 78.0081
      }
    ]
  },
  {
    name: "Indonesia",
    code: "ID",
    cities: [
      {
        name: "Jakarta",
        countryCode: "ID",
        timezone: "Asia/Jakarta",
        latitude: -6.2088,
        longitude: 106.8456
      },
      {
        name: "Surabaya",
        countryCode: "ID",
        timezone: "Asia/Jakarta",
        latitude: -7.2575,
        longitude: 112.7521
      },
      {
        name: "Bandung",
        countryCode: "ID",
        timezone: "Asia/Jakarta",
        latitude: -6.9175,
        longitude: 107.6191
      }
    ]
  },
  {
    name: "Iran",
    code: "IR",
    cities: [
      {
        name: "Tehran",
        countryCode: "IR",
        timezone: "Asia/Tehran",
        latitude: 35.6892,
        longitude: 51.3890
      },
      {
        name: "Isfahan",
        countryCode: "IR",
        timezone: "Asia/Tehran",
        latitude: 32.6525,
        longitude: 51.6740
      },
      {
        name: "Shiraz",
        countryCode: "IR",
        timezone: "Asia/Tehran",
        latitude: 29.6197,
        longitude: 52.5311
      },
      {
        name: "Tabriz",
        countryCode: "IR",
        timezone: "Asia/Tehran",
        latitude: 38.0962,
        longitude: 46.2917
      },
      {
        name: "Mashhad",
        countryCode: "IR",
        timezone: "Asia/Tehran",
        latitude: 36.2605,
        longitude: 59.6168
      },
      {
        name: "Ahvaz",
        countryCode: "IR",
        timezone: "Asia/Tehran",
        latitude: 31.3197,
        longitude: 48.6692
      }
    ]
  },
  {
    name: "Iraq",
    code: "IQ",
    cities: [
      {
        name: "Baghdad",
        countryCode: "IQ",
        timezone: "Asia/Baghdad",
        latitude: 33.3152,
        longitude: 44.3661
      },
      {
        name: "Basra",
        countryCode: "IQ",
        timezone: "Asia/Baghdad",
        latitude: 30.5085,
        longitude: 47.7820
      },
      {
        name: "Erbil",
        countryCode: "IQ",
        timezone: "Asia/Baghdad",
        latitude: 36.1911,
        longitude: 44.0094
      },
      {
        name: "Najaf",
        countryCode: "IQ",
        timezone: "Asia/Baghdad",
        latitude: 32.0500,
        longitude: 44.3800
      },
      {
        name: "Kirkuk",
        countryCode: "IQ",
        timezone: "Asia/Baghdad",
        latitude: 35.4704,
        longitude: 44.3928
      },
      {
        name: "Fallujah",
        countryCode: "IQ",
        timezone: "Asia/Baghdad",
        latitude: 33.3750,
        longitude: 43.7800
      }
    ]
  },
  {
    name: "Ireland",
    code: "IE",
    cities: [
      {
        name: "Dublin",
        countryCode: "IE",
        timezone: "Europe/Dublin",
        latitude: 53.3498,
        longitude: -6.2603
      },
      {
        name: "Cork",
        countryCode: "IE",
        timezone: "Europe/Dublin",
        latitude: 51.8979,
        longitude: -8.4756
      },
      {
        name: "Limerick",
        countryCode: "IE",
        timezone: "Europe/Dublin",
        latitude: 52.6632,
        longitude: -8.6267
      },
      {
        name: "Galway",
        countryCode: "IE",
        timezone: "Europe/Dublin",
        latitude: 53.2707,
        longitude: -9.0555
      }
    ]
  },
  {
    name: "Israel",
    code: "IL",
    cities: [
      {
        name: "Tel Aviv",
        countryCode: "IL",
        timezone: "Asia/Jerusalem",
        latitude: 32.0853,
        longitude: 34.7818
      },
      {
        name: "Jerusalem",
        countryCode: "IL",
        timezone: "Asia/Jerusalem",
        latitude: 31.7683,
        longitude: 35.2137
      },
      {
        name: "Haifa",
        countryCode: "IL",
        timezone: "Asia/Jerusalem",
        latitude: 32.7940,
        longitude: 34.9896
      },
      {
        name: "Eilat",
        countryCode: "IL",
        timezone: "Asia/Jerusalem",
        latitude: 29.5581,
        longitude: 34.9519
      },
      {
        name: "Ashkelon",
        countryCode: "IL",
        timezone: "Asia/Jerusalem",
        latitude: 31.6687,
        longitude: 34.5704
      },
      {
        name: "Petah Tikva",
        countryCode: "IL",
        timezone: "Asia/Jerusalem",
        latitude: 32.0800,
        longitude: 34.8880
      },
      {
        name: "Ashdod",
        countryCode: "IL",
        timezone: "Asia/Jerusalem",
        latitude: 31.8010,
        longitude: 34.6437
      },
      {
        name: "Netanya",
        countryCode: "IL",
        timezone: "Asia/Jerusalem",
        latitude: 32.3210,
        longitude: 34.8556
      }
    ]
  },
  {
    name: "Italy",
    code: "IT",
    cities: [
      {
        name: "Rome",
        countryCode: "IT",
        timezone: "Europe/Rome",
        latitude: 41.9028,
        longitude: 12.4964
      },
      {
        name: "Milan",
        countryCode: "IT",
        timezone: "Europe/Rome",
        latitude: 45.4642,
        longitude: 9.1900
      },
      {
        name: "Naples",
        countryCode: "IT",
        timezone: "Europe/Rome",
        latitude: 40.8522,
        longitude: 14.2681
      },
      {
        name: "Turin",
        countryCode: "IT",
        timezone: "Europe/Rome",
        latitude: 45.0703,
        longitude: 7.6869
      },
      {
        name: "Palermo",
        countryCode: "IT",
        timezone: "Europe/Rome",
        latitude: 38.1157,
        longitude: 13.3615
      },
      {
        name: "Genoa",
        countryCode: "IT",
        timezone: "Europe/Rome",
        latitude: 44.4056,
        longitude: 8.9463
      },
      {
        name: "Bologna",
        countryCode: "IT",
        timezone: "Europe/Rome",
        latitude: 44.4949,
        longitude: 11.3426
      }
    ]
  },
  {
    name: "Jamaica",
    code: "JM",
    cities: [
      {
        name: "Kingston",
        countryCode: "JM",
        timezone: "America/Jamaica",
        latitude: 17.9714,
        longitude: -76.7936
      },
      {
        name: "Montego Bay",
        countryCode: "JM",
        timezone: "America/Jamaica",
        latitude: 18.4750,
        longitude: -77.9110
      },
      {
        name: "Spanish Town",
        countryCode: "JM",
        timezone: "America/Jamaica",
        latitude: 17.9950,
        longitude: -77.0111
      },
      {
        name: "Portmore",
        countryCode: "JM",
        timezone: "America/Jamaica",
        latitude: 17.9533,
        longitude: -76.9122
      },
      {
        name: "Ocho Rios",
        countryCode: "JM",
        timezone: "America/Jamaica",
        latitude: 18.4131,
        longitude: -77.0997
      },
      {
        name: "Mandeville",
        countryCode: "JM",
        timezone: "America/Jamaica",
        latitude: 17.9803,
        longitude: -77.5833
      }
    ]
  },
  {
    name: "Japan",
    code: "JP",
    cities: [
      {
        name: "Tokyo",
        countryCode: "JP",
        timezone: "Asia/Tokyo",
        latitude: 35.6762,
        longitude: 139.6503
      },
      {
        name: "Osaka",
        countryCode: "JP",
        timezone: "Asia/Tokyo",
        latitude: 34.6937,
        longitude: 135.5023
      },
      {
        name: "Kyoto",
        countryCode: "JP",
        timezone: "Asia/Tokyo",
        latitude: 35.0116,
        longitude: 135.7681
      },
      {
        name: "Yokohama",
        countryCode: "JP",
        timezone: "Asia/Tokyo",
        latitude: 35.4437,
        longitude: 139.6380
      },
      {
        name: "Fukuoka",
        countryCode: "JP",
        timezone: "Asia/Tokyo",
        latitude: 33.5902,
        longitude: 130.4017
      },
      {
        name: "Sapporo",
        countryCode: "JP",
        timezone: "Asia/Tokyo",
        latitude: 43.0667,
        longitude: 141.3500
      }
    ]
  },
  {
    name: "Jordan",
    code: "JO",
    cities: [
      {
        name: "Amman",
        countryCode: "JO",
        timezone: "Asia/Amman",
        latitude: 31.9634,
        longitude: 35.9304
      },
      {
        name: "Irbid",
        countryCode: "JO",
        timezone: "Asia/Amman",
        latitude: 32.5550,
        longitude: 35.8500
      },
      {
        name: "Zarqa",
        countryCode: "JO",
        timezone: "Asia/Amman",
        latitude: 32.0684,
        longitude: 36.0931
      }
    ]
  },
  {
    name: "Kazakhstan",
    code: "KZ",
    cities: [
      {
        name: "Almaty",
        countryCode: "KZ",
        timezone: "Asia/Almaty",
        latitude: 43.2565,
        longitude: 76.9285
      },
      {
        name: "Astana",
        countryCode: "KZ",
        timezone: "Asia/Almaty",
        latitude: 51.1801,
        longitude: 71.4460
      },
      {
        name: "Shymkent",
        countryCode: "KZ",
        timezone: "Asia/Almaty",
        latitude: 42.3000,
        longitude: 69.6000
      },
      {
        name: "Karaganda",
        countryCode: "KZ",
        timezone: "Asia/Almaty",
        latitude: 49.8333,
        longitude: 73.1667
      },
      {
        name: "Aktobe",
        countryCode: "KZ",
        timezone: "Asia/Almaty",
        latitude: 50.2833,
        longitude: 57.1500
      }
    ]
  },
  {
    name: "Kenya",
    code: "KE",
    cities: [
      {
        name: "Nairobi",
        countryCode: "KE",
        timezone: "Africa/Nairobi",
        latitude: -1.2864,
        longitude: 36.8172
      },
      {
        name: "Mombasa",
        countryCode: "KE",
        timezone: "Africa/Nairobi",
        latitude: -4.0500,
        longitude: 39.6667
      },
      {
        name: "Kisumu",
        countryCode: "KE",
        timezone: "Africa/Nairobi",
        latitude: -0.0917,
        longitude: 34.7680
      },
      {
        name: "Nakuru",
        countryCode: "KE",
        timezone: "Africa/Nairobi",
        latitude: -0.2833,
        longitude: 36.0667
      },
      {
        name: "Eldoret",
        countryCode: "KE",
        timezone: "Africa/Nairobi",
        latitude: 0.5167,
        longitude: 35.2833
      }
    ]
  },
  {
    name: "Kiribati",
    code: "KI",
    cities: [
      {
        name: "Tarawa",
        countryCode: "KI",
        timezone: "Pacific/Tarawa",
        latitude: 1.4167,
        longitude: 173.0333
      },
      {
        name: "Bairiki",
        countryCode: "KI",
        timezone: "Pacific/Tarawa",
        latitude: 1.3292,
        longitude: 172.9752
      },
      {
        name: "Betio",
        countryCode: "KI",
        timezone: "Pacific/Tarawa",
        latitude: 1.3580,
        longitude: 172.9333
      },
      {
        name: "Buota",
        countryCode: "KI",
        timezone: "Pacific/Tarawa",
        latitude: 1.3908,
        longitude: 173.1308
      },
      {
        name: "Tabiteuea",
        countryCode: "KI",
        timezone: "Pacific/Tarawa",
        latitude: -1.3500,
        longitude: 174.8000
      }
    ]
  },
  {
    name: "Kuwait",
    code: "KW",
    cities: [
      {
        name: "Kuwait City",
        countryCode: "KW",
        timezone: "Asia/Kuwait",
        latitude: 29.3759,
        longitude: 47.9774
      },
      {
        name: "Al Ahmadi",
        countryCode: "KW",
        timezone: "Asia/Kuwait",
        latitude: 29.0825,
        longitude: 48.1303
      },
      {
        name: "Hawalli",
        countryCode: "KW",
        timezone: "Asia/Kuwait",
        latitude: 29.3339,
        longitude: 48.0286
      },
      {
        name: "Mubarak Al Kabeer",
        countryCode: "KW",
        timezone: "Asia/Kuwait",
        latitude: 29.2450,
        longitude: 48.0833
      },
      {
        name: "Farwaniya",
        countryCode: "KW",
        timezone: "Asia/Kuwait",
        latitude: 29.2775,
        longitude: 47.9583
      }
    ]
  },
  {
    name: "Kyrgyzstan",
    code: "KG",
    cities: [
      {
        name: "Bishkek",
        countryCode: "KG",
        timezone: "Asia/Bishkek",
        latitude: 42.8746,
        longitude: 74.5698
      },
      {
        name: "Osh",
        countryCode: "KG",
        timezone: "Asia/Bishkek",
        latitude: 40.5283,
        longitude: 72.7985
      },
      {
        name: "Jalal-Abad",
        countryCode: "KG",
        timezone: "Asia/Bishkek",
        latitude: 40.9333,
        longitude: 73.0000
      },
      {
        name: "Karakol",
        countryCode: "KG",
        timezone: "Asia/Bishkek",
        latitude: 42.4907,
        longitude: 78.3957
      },
      {
        name: "Tokmok",
        countryCode: "KG",
        timezone: "Asia/Bishkek",
        latitude: 42.8419,
        longitude: 75.3015
      }
    ]
  },
  {
    name: "Laos",
    code: "LA",
    cities: [
      {
        name: "Vientiane",
        countryCode: "LA",
        timezone: "Asia/Vientiane",
        latitude: 17.9667,
        longitude: 102.6000
      },
      {
        name: "Luang Prabang",
        countryCode: "LA",
        timezone: "Asia/Vientiane",
        latitude: 19.8833,
        longitude: 102.1333
      },
      {
        name: "Pakse",
        countryCode: "LA",
        timezone: "Asia/Vientiane",
        latitude: 15.1167,
        longitude: 105.7833
      },
      {
        name: "Champasak",
        countryCode: "LA",
        timezone: "Asia/Vientiane",
        latitude: 14.8833,
        longitude: 105.8667
      },
      {
        name: "Xam Neua",
        countryCode: "LA",
        timezone: "Asia/Vientiane",
        latitude: 20.4167,
        longitude: 104.0500
      }
    ]
  },
  {
    name: "Latvia",
    code: "LV",
    cities: [
      {
        name: "Riga",
        countryCode: "LV",
        timezone: "Europe/Riga",
        latitude: 56.9460,
        longitude: 24.1059
      },
      {
        name: "Daugavpils",
        countryCode: "LV",
        timezone: "Europe/Riga",
        latitude: 55.8833,
        longitude: 26.5333
      },
      {
        name: "Jurmala",
        countryCode: "LV",
        timezone: "Europe/Riga",
        latitude: 56.9680,
        longitude: 23.7708
      },
      {
        name: "Liepaja",
        countryCode: "LV",
        timezone: "Europe/Riga",
        latitude: 56.5111,
        longitude: 21.0139
      },
      {
        name: "Jelgava",
        countryCode: "LV",
        timezone: "Europe/Riga",
        latitude: 56.6480,
        longitude: 23.7139
      }
    ]
  },
  {
    name: "Lebanon",
    code: "LB",
    cities: [
      {
        name: "Beirut",
        countryCode: "LB",
        timezone: "Asia/Beirut",
        latitude: 33.8938,
        longitude: 35.5018
      },
      {
        name: "Sidon",
        countryCode: "LB",
        timezone: "Asia/Beirut",
        latitude: 33.5606,
        longitude: 35.3758
      },
      {
        name: "Tyre",
        countryCode: "LB",
        timezone: "Asia/Beirut",
        latitude: 33.2700,
        longitude: 35.2033
      },
      {
        name: "Zahle",
        countryCode: "LB",
        timezone: "Asia/Beirut",
        latitude: 33.8500,
        longitude: 35.9000
      }
    ]
  },
  {
    name: "Lesotho",
    code: "LS",
    cities: [
      {
        name: "Maseru",
        countryCode: "LS",
        timezone: "Africa/Maseru",
        latitude: -29.3167,
        longitude: 27.4833
      },
      {
        name: "Maputsoe",
        countryCode: "LS",
        timezone: "Africa/Maseru",
        latitude: -28.9000,
        longitude: 27.9000
      },
      {
        name: "Butha-Buthe",
        countryCode: "LS",
        timezone: "Africa/Maseru",
        latitude: -28.7667,
        longitude: 28.2500
      },
      {
        name: "Mohale's Hoek",
        countryCode: "LS",
        timezone: "Africa/Maseru",
        latitude: -30.1500,
        longitude: 27.4667
      },
      {
        name: "Quthing",
        countryCode: "LS",
        timezone: "Africa/Maseru",
        latitude: -30.4000,
        longitude: 27.7000
      }
    ]
  },
  {
    name: "Liberia",
    code: "LR",
    cities: [
      {
        name: "Monrovia",
        countryCode: "LR",
        timezone: "Africa/Monrovia",
        latitude: 6.3005,
        longitude: -10.7969
      },
      {
        name: "Kakata",
        countryCode: "LR",
        timezone: "Africa/Monrovia",
        latitude: 6.5333,
        longitude: -10.3500
      },
      {
        name: "Gbarnga",
        countryCode: "LR",
        timezone: "Africa/Monrovia",
        latitude: 7.0167,
        longitude: -9.4833
      },
      {
        name: "Buchanan",
        countryCode: "LR",
        timezone: "Africa/Monrovia",
        latitude: 5.8667,
        longitude: -10.0500
      },
      {
        name: "Voinjama",
        countryCode: "LR",
        timezone: "Africa/Monrovia",
        latitude: 8.4167,
        longitude: -9.7500
      }
    ]
  },
  {
    name: "Libya",
    code: "LY",
    cities: [
      {
        name: "Tripoli",
        countryCode: "LY",
        timezone: "Africa/Tripoli",
        latitude: 32.8872,
        longitude: 13.1913
      },
      {
        name: "Benghazi",
        countryCode: "LY",
        timezone: "Africa/Tripoli",
        latitude: 32.1167,
        longitude: 20.0667
      },
      {
        name: "Misrata",
        countryCode: "LY",
        timezone: "Africa/Tripoli",
        latitude: 32.3754,
        longitude: 15.0925
      },
      {
        name: "Zliten",
        countryCode: "LY",
        timezone: "Africa/Tripoli",
        latitude: 32.4674,
        longitude: 14.5687
      },
      {
        name: "Tajoura",
        countryCode: "LY",
        timezone: "Africa/Tripoli",
        latitude: 32.8281,
        longitude: 13.3536
      }
    ]
  },
  {
    name: "Liechtenstein",
    code: "LI",
    cities: [
      {
        name: "Vaduz",
        countryCode: "LI",
        timezone: "Europe/Vaduz",
        latitude: 47.1416,
        longitude: 9.5215
      },
      {
        name: "Schaan",
        countryCode: "LI",
        timezone: "Europe/Vaduz",
        latitude: 47.1667,
        longitude: 9.5167
      },
      {
        name: "Balzers",
        countryCode: "LI",
        timezone: "Europe/Vaduz",
        latitude: 47.0667,
        longitude: 9.5000
      },
      {
        name: "Eschen",
        countryCode: "LI",
        timezone: "Europe/Vaduz",
        latitude: 47.2100,
        longitude: 9.5200
      }
    ]
  },
  {
    name: "Lithuania",
    code: "LT",
    cities: [
      {
        name: "Vilnius",
        countryCode: "LT",
        timezone: "Europe/Vilnius",
        latitude: 54.6872,
        longitude: 25.2797
      },
      {
        name: "Klaipeda",
        countryCode: "LT",
        timezone: "Europe/Vilnius",
        latitude: 55.7089,
        longitude: 21.1342
      },
      {
        name: "Kaunas",
        countryCode: "LT",
        timezone: "Europe/Vilnius",
        latitude: 54.9000,
        longitude: 23.9000
      },
      {
        name: "Siauliai",
        countryCode: "LT",
        timezone: "Europe/Vilnius",
        latitude: 55.9333,
        longitude: 23.3167
      },
      {
        name: "Panevezys",
        countryCode: "LT",
        timezone: "Europe/Vilnius",
        latitude: 55.7333,
        longitude: 24.3500
      }
    ]
  },
  {
    name: "Luxembourg",
    code: "LU",
    cities: [
      {
        name: "Luxembourg City",
        countryCode: "LU",
        timezone: "Europe/Luxembourg",
        latitude: 49.6117,
        longitude: 6.1319
      },
      {
        name: "Ettelbruck",
        countryCode: "LU",
        timezone: "Europe/Luxembourg",
        latitude: 49.8478,
        longitude: 6.1039
      },
      {
        name: "Differdange",
        countryCode: "LU",
        timezone: "Europe/Luxembourg",
        latitude: 49.5250,
        longitude: 5.8906
      },
      {
        name: "Esch-sur-Alzette",
        countryCode: "LU",
        timezone: "Europe/Luxembourg",
        latitude: 49.4958,
        longitude: 5.9806
      }
    ]
  },
  {
    name: "Madagascar",
    code: "MG",
    cities: [
      {
        name: "Antananarivo",
        countryCode: "MG",
        timezone: "Indian/Antananarivo",
        latitude: -18.8792,
        longitude: 47.5079
      },
      {
        name: "Toamasina",
        countryCode: "MG",
        timezone: "Indian/Antananarivo",
        latitude: -18.1492,
        longitude: 49.4023
      },
      {
        name: "Antsirabe",
        countryCode: "MG",
        timezone: "Indian/Antananarivo",
        latitude: -19.8659,
        longitude: 47.0333
      },
      {
        name: "Fianarantsoa",
        countryCode: "MG",
        timezone: "Indian/Antananarivo",
        latitude: -21.4527,
        longitude: 47.0857
      },
      {
        name: "Mahajanga",
        countryCode: "MG",
        timezone: "Indian/Antananarivo",
        latitude: -15.7167,
        longitude: 46.3167
      }
    ]
  },
  {
    name: "Malawi",
    code: "MW",
    cities: [
      {
        name: "Lilongwe",
        countryCode: "MW",
        timezone: "Africa/Blantyre",
        latitude: -13.9833,
        longitude: 33.7833
      },
      {
        name: "Blantyre",
        countryCode: "MW",
        timezone: "Africa/Blantyre",
        latitude: -15.7861,
        longitude: 35.0058
      },
      {
        name: "Mzuzu",
        countryCode: "MW",
        timezone: "Africa/Blantyre",
        latitude: -11.45,
        longitude: 34.0167
      },
      {
        name: "Zomba",
        countryCode: "MW",
        timezone: "Africa/Blantyre",
        latitude: -15.3833,
        longitude: 35.3333
      },
      {
        name: "Mangochi",
        countryCode: "MW",
        timezone: "Africa/Blantyre",
        latitude: -14.4781,
        longitude: 35.2645
      }
    ]
  },
  {
    name: "Malaysia",
    code: "MY",
    cities: [
      {
        name: "Kuala Lumpur",
        countryCode: "MY",
        timezone: "Asia/Kuala_Lumpur",
        latitude: 3.1390,
        longitude: 101.6869
      },
      {
        name: "George Town",
        countryCode: "MY",
        timezone: "Asia/Kuala_Lumpur",
        latitude: 5.4141,
        longitude: 100.3288
      },
      {
        name: "Ipoh",
        countryCode: "MY",
        timezone: "Asia/Kuala_Lumpur",
        latitude: 4.5975,
        longitude: 101.0901
      },
      {
        name: "Johor Bahru",
        countryCode: "MY",
        timezone: "Asia/Kuala_Lumpur",
        latitude: 1.4927,
        longitude: 103.7414
      },
      {
        name: "Malacca",
        countryCode: "MY",
        timezone: "Asia/Kuala_Lumpur",
        latitude: 2.1896,
        longitude: 102.2501
      },
      {
        name: "Kuching",
        countryCode: "MY",
        timezone: "Asia/Kuala_Lumpur",
        latitude: 1.5533,
        longitude: 110.3592
      },
      {
        name: "Kota Kinabalu",
        countryCode: "MY",
        timezone: "Asia/Kuala_Lumpur",
        latitude: 5.9804,
        longitude: 116.0735
      },
      {
        name: "Shah Alam",
        countryCode: "MY",
        timezone: "Asia/Kuala_Lumpur",
        latitude: 3.0738,
        longitude: 101.5183
      }
    ]
  },
  {
    name: "Maldives",
    code: "MV",
    cities: [
      {
        name: "Malé",
        countryCode: "MV",
        timezone: "Indian/Maldives",
        latitude: 4.1755,
        longitude: 73.5093
      },
      {
        name: "Addu City",
        countryCode: "MV",
        timezone: "Indian/Maldives",
        latitude: -0.6000,
        longitude: 73.0833
      },
      {
        name: "Fuvahmulah",
        countryCode: "MV",
        timezone: "Indian/Maldives",
        latitude: -0.3000,
        longitude: 73.4167
      },
      {
        name: "Hulhumale",
        countryCode: "MV",
        timezone: "Indian/Maldives",
        latitude: 4.2106,
        longitude: 73.5392
      },
      {
        name: "Kulhudhuffushi",
        countryCode: "MV",
        timezone: "Indian/Maldives",
        latitude: 6.6167,
        longitude: 73.0667
      }
    ]
  },
  {
    name: "Malta",
    code: "MT",
    cities: [
      {
        name: "Valletta",
        countryCode: "MT",
        timezone: "Europe/Malta",
        latitude: 35.8997,
        longitude: 14.5146
      },
      {
        name: "Mosta",
        countryCode: "MT",
        timezone: "Europe/Malta",
        latitude: 35.9091,
        longitude: 14.4265
      },
      {
        name: "Mellieħa",
        countryCode: "MT",
        timezone: "Europe/Malta",
        latitude: 35.9560,
        longitude: 14.3639
      },
      {
        name: "Birkirkara",
        countryCode: "MT",
        timezone: "Europe/Malta",
        latitude: 35.8956,
        longitude: 14.4781
      },
      {
        name: "Sliema",
        countryCode: "MT",
        timezone: "Europe/Malta",
        latitude: 35.9122,
        longitude: 14.5042
      }
    ]
  },
  {
    name: "Marshall Islands",
    code: "MH",
    cities: [
      {
        name: "Majuro",
        countryCode: "MH",
        timezone: "Pacific/Majuro",
        latitude: 7.1167,
        longitude: 171.3667
      },
      {
        name: "Ebaye",
        countryCode: "MH",
        timezone: "Pacific/Majuro",
        latitude: 8.7833,
        longitude: 167.7333
      },
      {
        name: "Laura",
        countryCode: "MH",
        timezone: "Pacific/Majuro",
        latitude: 7.0833,
        longitude: 171.25
      },
      {
        name: "Rairok",
        countryCode: "MH",
        timezone: "Pacific/Majuro",
        latitude: 7.0667,
        longitude: 171.3667
      },
      {
        name: "Bikini Atoll",
        countryCode: "MH",
        timezone: "Pacific/Majuro",
        latitude: 11.6000,
        longitude: 165.3833
      }
    ]
  },
  {
    name: "Mauritius",
    code: "MU",
    cities: [
      {
        name: "Port Louis",
        countryCode: "MU",
        timezone: "Indian/Mauritius",
        latitude: -20.1609,
        longitude: 57.5012
      },
      {
        name: "Curepipe",
        countryCode: "MU",
        timezone: "Indian/Mauritius",
        latitude: -20.3162,
        longitude: 57.5166
      },
      {
        name: "Vacoas",
        countryCode: "MU",
        timezone: "Indian/Mauritius",
        latitude: -20.2988,
        longitude: 57.4783
      },
      {
        name: "Quatre Bornes",
        countryCode: "MU",
        timezone: "Indian/Mauritius",
        latitude: -20.2644,
        longitude: 57.4791
      },
      {
        name: "Rose Hill",
        countryCode: "MU",
        timezone: "Indian/Mauritius",
        latitude: -20.2333,
        longitude: 57.4667
      }
    ]
  },
  {
    name: "Mexico",
    code: "MX",
    cities: [
      {
        name: "Mexico City",
        countryCode: "MX",
        timezone: "America/Mexico_City",
        latitude: 19.432608,
        longitude: -99.133209
      },
      {
        name: "Guadalajara",
        countryCode: "MX",
        timezone: "America/Mexico_City",
        latitude: 20.67667,
        longitude: -103.3475
      },
      {
        name: "Monterrey",
        countryCode: "MX",
        timezone: "America/Monterrey",
        latitude: 25.67507,
        longitude: -100.31847
      },
      {
        name: "Puebla",
        countryCode: "MX",
        timezone: "America/Mexico_City",
        latitude: 19.033333,
        longitude: -98.183334
      },
      {
        name: "Toluca",
        countryCode: "MX",
        timezone: "America/Mexico_City",
        latitude: 19.2879,
        longitude: -99.6532
      },
      {
        name: "Leon",
        countryCode: "MX",
        timezone: "America/Mexico_City",
        latitude: 21.1305,
        longitude: -101.6825
      },
      {
        name: "Cancun",
        countryCode: "MX",
        timezone: "America/Cancun",
        latitude: 21.17429,
        longitude: -86.84656
      },
      {
        name: "Playa del Carmen",
        countryCode: "MX",
        timezone: "America/Cancun",
        latitude: 20.6274,
        longitude: -87.0799
      },
      {
        name: "Tulum",
        countryCode: "MX",
        timezone: "America/Cancun",
        latitude: 20.2117,
        longitude: -87.46325
      },
      {
        name: "Cozumel",
        countryCode: "MX",
        timezone: "America/Cancun",
        latitude: 20.50225,
        longitude: -86.93916
      },
      {
        name: "Isla Holbox",
        countryCode: "MX",
        timezone: "America/Cancun",
        latitude: 21.5221343,
        longitude: -87.3783129
      },
      {
        name: "Akumal",
        countryCode: "MX",
        timezone: "America/Cancun",
        latitude: 20.396826,
        longitude: -87.314288
      },
      {
        name: "Chihuahua",
        countryCode: "MX",
        timezone: "America/Chihuahua",
        latitude: 28.632996,
        longitude: -106.069099
      },
      {
        name: "Ciudad Juarez",
        countryCode: "MX",
        timezone: "America/Chihuahua",
        latitude: 31.738581,
        longitude: -106.487015
      },
      {
        name: "Delicias",
        countryCode: "MX",
        timezone: "America/Chihuahua",
        latitude: 28.1905,
        longitude: -105.4701
      },
      {
        name: "Camargo",
        countryCode: "MX",
        timezone: "America/Chihuahua",
        latitude: 27.6906,
        longitude: -105.1706
      },
      {
        name: "Cuauhtemoc",
        countryCode: "MX",
        timezone: "America/Chihuahua",
        latitude: 28.4089,
        longitude: -106.8678
      },
      {
        name: "Parral",
        countryCode: "MX",
        timezone: "America/Chihuahua",
        latitude: 26.932,
        longitude: -105.666
      },
      {
        name: "Hermosillo",
        countryCode: "MX",
        timezone: "America/Hermosillo",
        latitude: 29.072967,
        longitude: -110.955919
      },
      {
        name: "Nogales",
        countryCode: "MX",
        timezone: "America/Hermosillo",
        latitude: 31.3322,
        longitude: -110.933
      },
      {
        name: "San Luis Río Colorado",
        countryCode: "MX",
        timezone: "America/Hermosillo",
        latitude: 32.456,
        longitude: -114.771
      },
      {
        name: "Agua Prieta",
        countryCode: "MX",
        timezone: "America/Hermosillo",
        latitude: 31.3322,
        longitude: -109.548
      },
      {
        name: "Cananea",
        countryCode: "MX",
        timezone: "America/Hermosillo",
        latitude: 30.9861,
        longitude: -110.3003
      },
      {
        name: "Puerto Peñasco",
        countryCode: "MX",
        timezone: "America/Hermosillo",
        latitude: 31.3167,
        longitude: -113.5361
      }
    ]
  },
  {
    name: "Moldova",
    code: "MD",
    cities: [
      {
        name: "Chisinau",
        countryCode: "MD",
        timezone: "Europe/Chisinau",
        latitude: 47.0105,
        longitude: 28.8638
      },
      {
        name: "Balti",
        countryCode: "MD",
        timezone: "Europe/Chisinau",
        latitude: 47.7617,
        longitude: 27.9289
      },
      {
        name: "Bender",
        countryCode: "MD",
        timezone: "Europe/Chisinau",
        latitude: 46.8316,
        longitude: 29.4772
      },
      {
        name: "Tiraspol",
        countryCode: "MD",
        timezone: "Europe/Chisinau",
        latitude: 46.8427,
        longitude: 29.5966
      }
    ]
  },
  {
    name: "Monaco",
    code: "MC",
    cities: [
      {
        name: "Monaco",
        countryCode: "MC",
        timezone: "Europe/Monaco",
        latitude: 43.7384,
        longitude: 7.4246
      },
      {
        name: "Monte Carlo",
        countryCode: "MC",
        timezone: "Europe/Monaco",
        latitude: 43.7397,
        longitude: 7.4272
      },
      {
        name: "Fontvieille",
        countryCode: "MC",
        timezone: "Europe/Monaco",
        latitude: 43.7280,
        longitude: 7.4172
      },
      {
        name: "Moneghetti",
        countryCode: "MC",
        timezone: "Europe/Monaco",
        latitude: 43.7368,
        longitude: 7.4165
      },
      {
        name: "La Condamine",
        countryCode: "MC",
        timezone: "Europe/Monaco",
        latitude: 43.7344,
        longitude: 7.4202
      }
    ]
  },
  {
    name: "Mongolia",
    code: "MN",
    cities: [
      {
        name: "Ulaanbaatar",
        countryCode: "MN",
        timezone: "Asia/Ulaanbaatar",
        latitude: 47.8864,
        longitude: 106.9057
      },
      {
        name: "Erdenet",
        countryCode: "MN",
        timezone: "Asia/Ulaanbaatar",
        latitude: 49.0233,
        longitude: 104.0400
      },
      {
        name: "Darkhan",
        countryCode: "MN",
        timezone: "Asia/Ulaanbaatar",
        latitude: 49.5377,
        longitude: 105.9604
      },
      {
        name: "Choibalsan",
        countryCode: "MN",
        timezone: "Asia/Ulaanbaatar",
        latitude: 48.0737,
        longitude: 114.5343
      },
      {
        name: "Moron",
        countryCode: "MN",
        timezone: "Asia/Ulaanbaatar",
        latitude: 49.6386,
        longitude: 100.1542
      }
    ]
  },
  {
    name: "Montenegro",
    code: "ME",
    cities: [
      {
        name: "Podgorica",
        countryCode: "ME",
        timezone: "Europe/Podgorica",
        latitude: 42.4304,
        longitude: 19.2594
      },
      {
        name: "Bijelo Polje",
        countryCode: "ME",
        timezone: "Europe/Podgorica",
        latitude: 43.0383,
        longitude: 19.7476
      },
      {
        name: "Niksic",
        countryCode: "ME",
        timezone: "Europe/Podgorica",
        latitude: 42.7731,
        longitude: 18.9445
      },
      {
        name: "Herceg Novi",
        countryCode: "ME",
        timezone: "Europe/Podgorica",
        latitude: 42.4531,
        longitude: 18.5375
      },
      {
        name: "Tivat",
        countryCode: "ME",
        timezone: "Europe/Podgorica",
        latitude: 42.4364,
        longitude: 18.6961
      }
    ]
  },
  {
    name: "Morocco",
    code: "MA",
    cities: [
      {
        name: "Rabat",
        countryCode: "MA",
        timezone: "Africa/Casablanca",
        latitude: 34.0209,
        longitude: -6.8416
      },
      {
        name: "Casablanca",
        countryCode: "MA",
        timezone: "Africa/Casablanca",
        latitude: 33.5886,
        longitude: -7.6114
      },
      {
        name: "Marrakech",
        countryCode: "MA",
        timezone: "Africa/Casablanca",
        latitude: 31.6295,
        longitude: -7.9811
      },
      {
        name: "Fes",
        countryCode: "MA",
        timezone: "Africa/Casablanca",
        latitude: 34.0331,
        longitude: -5.0003
      }
    ]
  },
  {
    name: "Mozambique",
    code: "MZ",
    cities: [
      {
        name: "Maputo",
        countryCode: "MZ",
        timezone: "Africa/Maputo",
        latitude: -25.9655,
        longitude: 32.5832
      },
      {
        name: "Beira",
        countryCode: "MZ",
        timezone: "Africa/Maputo",
        latitude: -19.8333,
        longitude: 34.8500
      },
      {
        name: "Chimoio",
        countryCode: "MZ",
        timezone: "Africa/Maputo",
        latitude: -19.1164,
        longitude: 33.4833
      },
      {
        name: "Nampula",
        countryCode: "MZ",
        timezone: "Africa/Maputo",
        latitude: -15.1167,
        longitude: 39.2667
      },
      {
        name: "Quelimane",
        countryCode: "MZ",
        timezone: "Africa/Maputo",
        latitude: -17.8786,
        longitude: 36.8883
      }
    ]
  },
  {
    name: "Myanmar",
    code: "MM",
    cities: [
      {
        name: "Naypyidaw",
        countryCode: "MM",
        timezone: "Asia/Yangon",
        latitude: 19.7633,
        longitude: 96.0785
      },
      {
        name: "Yangon",
        countryCode: "MM",
        timezone: "Asia/Yangon",
        latitude: 16.8409,
        longitude: 96.1735
      },
      {
        name: "Mandalay",
        countryCode: "MM",
        timezone: "Asia/Yangon",
        latitude: 21.9588,
        longitude: 96.0891
      },
      {
        name: "Bago",
        countryCode: "MM",
        timezone: "Asia/Yangon",
        latitude: 17.3369,
        longitude: 96.4797
      },
      {
        name: "Magway",
        countryCode: "MM",
        timezone: "Asia/Yangon",
        latitude: 20.1500,
        longitude: 94.9167
      }
    ]
  },
  {
    name: "North Korea",
    code: "KP",
    cities: [
      {
        name: "Pyongyang",
        countryCode: "KP",
        timezone: "Asia/Pyongyang",
        latitude: 39.0339,
        longitude: 125.7543
      },
      {
        name: "Hamhung",
        countryCode: "KP",
        timezone: "Asia/Pyongyang",
        latitude: 39.9183,
        longitude: 127.5364
      },
      {
        name: "Chongjin",
        countryCode: "KP",
        timezone: "Asia/Pyongyang",
        latitude: 41.7956,
        longitude: 129.7758
      },
      {
        name: "Sinuiju",
        countryCode: "KP",
        timezone: "Asia/Pyongyang",
        latitude: 40.1000,
        longitude: 124.4000
      },
      {
        name: "Nampo",
        countryCode: "KP",
        timezone: "Asia/Pyongyang",
        latitude: 38.7375,
        longitude: 125.4075
      }
    ]
  },
  {
    name: "Namibia",
    code: "NA",
    cities: [
      {
        name: "Windhoek",
        countryCode: "NA",
        timezone: "Africa/Windhoek",
        latitude: -22.5594,
        longitude: 17.0832
      },
      {
        name: "Swakopmund",
        countryCode: "NA",
        timezone: "Africa/Windhoek",
        latitude: -22.6833,
        longitude: 14.5333
      },
      {
        name: "Walvis Bay",
        countryCode: "NA",
        timezone: "Africa/Windhoek",
        latitude: -22.9575,
        longitude: 14.5053
      },
      {
        name: "Rundu",
        countryCode: "NA",
        timezone: "Africa/Windhoek",
        latitude: -17.9333,
        longitude: 19.7500
      },
      {
        name: "Oshakati",
        countryCode: "NA",
        timezone: "Africa/Windhoek",
        latitude: -17.7833,
        longitude: 15.6833
      }
    ]
  },
  {
    name: "Nauru",
    code: "NR",
    cities: [
      {
        name: "Yaren",
        countryCode: "NR",
        timezone: "Pacific/Nauru",
        latitude: -0.5477,
        longitude: 166.9209
      },
      {
        name: "Anibare",
        countryCode: "NR",
        timezone: "Pacific/Nauru",
        latitude: -0.5306,
        longitude: 166.9444
      },
      {
        name: "Denigomodu",
        countryCode: "NR",
        timezone: "Pacific/Nauru",
        latitude: -0.5226,
        longitude: 166.9144
      },
      {
        name: "Baiti",
        countryCode: "NR",
        timezone: "Pacific/Nauru",
        latitude: -0.5080,
        longitude: 166.9295
      },
      {
        name: "Aiwo",
        countryCode: "NR",
        timezone: "Pacific/Nauru",
        latitude: -0.5247,
        longitude: 166.9070
      }
    ]
  },
  {
    name: "Nepal",
    code: "NP",
    cities: [
      {
        name: "Kathmandu",
        countryCode: "NP",
        timezone: "Asia/Kathmandu",
        latitude: 27.7008,
        longitude: 85.3333
      },
      {
        name: "Pokhara",
        countryCode: "NP",
        timezone: "Asia/Kathmandu",
        latitude: 28.2669,
        longitude: 83.9685
      },
      {
        name: "Lalitpur",
        countryCode: "NP",
        timezone: "Asia/Kathmandu",
        latitude: 27.6670,
        longitude: 85.3170
      },
      {
        name: "Biratnagar",
        countryCode: "NP",
        timezone: "Asia/Kathmandu",
        latitude: 26.4831,
        longitude: 87.2834
      },
      {
        name: "Birgunj",
        countryCode: "NP",
        timezone: "Asia/Kathmandu",
        latitude: 27.0000,
        longitude: 84.8670
      }
    ]
  },
  {
    name: "Netherlands",
    code: "NL",
    cities: [
      {
        name: "Amsterdam",
        countryCode: "NL",
        timezone: "Europe/Amsterdam",
        latitude: 52.3676,
        longitude: 4.9041
      },
      {
        name: "Rotterdam",
        countryCode: "NL",
        timezone: "Europe/Amsterdam",
        latitude: 51.9225,
        longitude: 4.4792
      },
      {
        name: "The Hague",
        countryCode: "NL",
        timezone: "Europe/Amsterdam",
        latitude: 52.0705,
        longitude: 4.3007
      },
      {
        name: "Utrecht",
        countryCode: "NL",
        timezone: "Europe/Amsterdam",
        latitude: 52.0907,
        longitude: 5.1214
      },
      {
        name: "Eindhoven",
        countryCode: "NL",
        timezone: "Europe/Amsterdam",
        latitude: 51.4416,
        longitude: 5.4697
      },
      {
        name: "Tilburg",
        countryCode: "NL",
        timezone: "Europe/Amsterdam",
        latitude: 51.5555,
        longitude: 5.0913
      },
      {
        name: "Groningen",
        countryCode: "NL",
        timezone: "Europe/Amsterdam",
        latitude: 53.2194,
        longitude: 6.5665
      }
    ]
  },
  {
    name: "New Zealand",
    code: "NZ",
    cities: [
      {
        name: "Wellington",
        countryCode: "NZ",
        timezone: "Pacific/Auckland",
        latitude: -41.2867,
        longitude: 174.7762
      },
      {
        name: "Auckland",
        countryCode: "NZ",
        timezone: "Pacific/Auckland",
        latitude: -36.8485,
        longitude: 174.7633
      },
      {
        name: "Christchurch",
        countryCode: "NZ",
        timezone: "Pacific/Auckland",
        latitude: -43.5321,
        longitude: 172.6362
      },
      {
        name: "Hamilton",
        countryCode: "NZ",
        timezone: "Pacific/Auckland",
        latitude: -37.7870,
        longitude: 175.2793
      },
      {
        name: "Dunedin",
        countryCode: "NZ",
        timezone: "Pacific/Auckland",
        latitude: -45.8788,
        longitude: 170.5028
      },
      {
        name: "Tauranga",
        countryCode: "NZ",
        timezone: "Pacific/Auckland",
        latitude: -37.6872,
        longitude: 176.1659
      },
      {
        name: "Palmerston North",
        countryCode: "NZ",
        timezone: "Pacific/Auckland",
        latitude: -40.3520,
        longitude: 175.6084
      }
    ]
  },
  {
    name: "Nicaragua",
    code: "NI",
    cities: [
      {
        name: "Managua",
        countryCode: "NI",
        timezone: "America/Managua",
        latitude: 12.1364,
        longitude: -86.2514
      },
      {
        name: "Leon",
        countryCode: "NI",
        timezone: "America/Managua",
        latitude: 12.4345,
        longitude: -86.8781
      },
      {
        name: "Masaya",
        countryCode: "NI",
        timezone: "America/Managua",
        latitude: 11.9700,
        longitude: -86.1025
      },
      {
        name: "Chinandega",
        countryCode: "NI",
        timezone: "America/Managua",
        latitude: 13.0031,
        longitude: -87.1510
      },
      {
        name: "Estelí",
        countryCode: "NI",
        timezone: "America/Managua",
        latitude: 13.0867,
        longitude: -86.3556
      }
    ]
  },
  {
    name: "Niger",
    code: "NE",
    cities: [
      {
        name: "Niamey",
        countryCode: "NE",
        timezone: "Africa/Niamey",
        latitude: 13.5128,
        longitude: 2.1128
      },
      {
        name: "Maradi",
        countryCode: "NE",
        timezone: "Africa/Niamey",
        latitude: 13.4604,
        longitude: 7.1002
      },
      {
        name: "Zinder",
        countryCode: "NE",
        timezone: "Africa/Niamey",
        latitude: 13.8333,
        longitude: 8.9833
      },
      {
        name: "Agadez",
        countryCode: "NE",
        timezone: "Africa/Niamey",
        latitude: 16.9700,
        longitude: 7.9833
      },
      {
        name: "Tahoua",
        countryCode: "NE",
        timezone: "Africa/Niamey",
        latitude: 13.3000,
        longitude: 5.2500
      }
    ]
  },
  {
    name: "Nigeria",
    code: "NG",
    cities: [
      {
        name: "Lagos",
        countryCode: "NG",
        timezone: "Africa/Lagos",
        latitude: 6.5244,
        longitude: 3.3792
      },
      {
        name: "Kano",
        countryCode: "NG",
        timezone: "Africa/Lagos",
        latitude: 12.0022,
        longitude: 8.5919
      },
      {
        name: "Port Harcourt",
        countryCode: "NG",
        timezone: "Africa/Lagos",
        latitude: 4.8155,
        longitude: 7.0498
      },
      {
        name: "Ibadan",
        countryCode: "NG",
        timezone: "Africa/Lagos",
        latitude: 7.3775,
        longitude: 3.8954
      },
      {
        name: "Benin City",
        countryCode: "NG",
        timezone: "Africa/Lagos",
        latitude: 6.3370,
        longitude: 5.6037
      },
      {
        name: "Kaduna",
        countryCode: "NG",
        timezone: "Africa/Lagos",
        latitude: 10.5241,
        longitude: 7.4384
      },
      {
        name: "Maiduguri",
        countryCode: "NG",
        timezone: "Africa/Lagos",
        latitude: 11.8346,
        longitude: 13.1578
      }
    ]
  },
  {
    name: "North Macedonia",
    code: "MK",
    cities: [
      {
        name: "Skopje",
        countryCode: "MK",
        timezone: "Europe/Skopje",
        latitude: 41.9981,
        longitude: 21.4254
      },
      {
        name: "Bitola",
        countryCode: "MK",
        timezone: "Europe/Skopje",
        latitude: 41.0319,
        longitude: 21.3260
      },
      {
        name: "Kumanovo",
        countryCode: "MK",
        timezone: "Europe/Skopje",
        latitude: 42.1378,
        longitude: 21.7159
      },
      {
        name: "Prilep",
        countryCode: "MK",
        timezone: "Europe/Skopje",
        latitude: 41.3406,
        longitude: 21.5547
      },
      {
        name: "Ohrid",
        countryCode: "MK",
        timezone: "Europe/Skopje",
        latitude: 41.1153,
        longitude: 20.8011
      }
    ]
  },
  {
    name: "Norway",
    code: "NO",
    cities: [
      {
        name: "Oslo",
        countryCode: "NO",
        timezone: "Europe/Oslo",
        latitude: 59.9127,
        longitude: 10.7461
      },
      {
        name: "Bergen",
        countryCode: "NO",
        timezone: "Europe/Oslo",
        latitude: 60.3929,
        longitude: 5.3243
      },
      {
        name: "Trondheim",
        countryCode: "NO",
        timezone: "Europe/Oslo",
        latitude: 63.4305,
        longitude: 10.3951
      },
      {
        name: "Stavanger",
        countryCode: "NO",
        timezone: "Europe/Oslo",
        latitude: 58.9690,
        longitude: 5.7331
      },
      {
        name: "Kristiansand",
        countryCode: "NO",
        timezone: "Europe/Oslo",
        latitude: 58.1467,
        longitude: 7.9950
      },
      {
        name: "Fredrikstad",
        countryCode: "NO",
        timezone: "Europe/Oslo",
        latitude: 59.2172,
        longitude: 10.9397
      }
    ]
  },
  {
    name: "Oman",
    code: "OM",
    cities: [
      {
        name: "Muscat",
        countryCode: "OM",
        timezone: "Asia/Muscat",
        latitude: 23.5880,
        longitude: 58.3829
      },
      {
        name: "Nizwa",
        countryCode: "OM",
        timezone: "Asia/Muscat",
        latitude: 22.9333,
        longitude: 57.5300
      },
      {
        name: "Salalah",
        countryCode: "OM",
        timezone: "Asia/Muscat",
        latitude: 17.0194,
        longitude: 54.0920
      },
      {
        name: "Sohar",
        countryCode: "OM",
        timezone: "Asia/Muscat",
        latitude: 24.3667,
        longitude: 56.7167
      },
      {
        name: "Sur",
        countryCode: "OM",
        timezone: "Asia/Muscat",
        latitude: 22.5667,
        longitude: 59.5297
      }
    ]
  },
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
    name: "Palestine",
    code: "PS",
    cities: [
      {
        name: "Gaza",
        countryCode: "PS",
        timezone: "Asia/Gaza",
        latitude: 31.5,
        longitude: 34.47
      },
      {
        name: "Khan Yunis",
        countryCode: "PS",
        timezone: "Asia/Gaza",
        latitude: 31.35,
        longitude: 34.31
      },
      {
        name: "Rafah",
        countryCode: "PS",
        timezone: "Asia/Gaza",
        latitude: 31.27,
        longitude: 34.26
      },
      {
        name: "Deir al-Balah",
        countryCode: "PS",
        timezone: "Asia/Gaza",
        latitude: 31.4,
        longitude: 34.45
      },
      {
        name: "Jabalia",
        countryCode: "PS",
        timezone: "Asia/Gaza",
        latitude: 31.6,
        longitude: 34.47
      },
      {
        name: "Hebron",
        countryCode: "PS",
        timezone: "Asia/Hebron",
        latitude: 31.5314,
        longitude: 35.0923
      },
      {
        name: "Bethlehem",
        countryCode: "PS",
        timezone: "Asia/Hebron",
        latitude: 31.7044,
        longitude: 35.2112
      },
      {
        name: "Jericho",
        countryCode: "PS",
        timezone: "Asia/Hebron",
        latitude: 31.8684,
        longitude: 35.4417
      },
      {
        name: "Nablus",
        countryCode: "PS",
        timezone: "Asia/Hebron",
        latitude: 32.2211,
        longitude: 35.2547
      },
      {
        name: "Ramallah",
        countryCode: "PS",
        timezone: "Asia/Hebron",
        latitude: 31.903,
        longitude: 35.205
      }
    ]
  },
  {
    name: "Palau",
    code: "PW",
    cities: [
      {
        name: "Ngerulmud",
        countryCode: "PW",
        timezone: "Pacific/Palau",
        latitude: 7.5000,
        longitude: 134.6333
      },
      {
        name: "Melekeok",
        countryCode: "PW",
        timezone: "Pacific/Palau",
        latitude: 7.4644,
        longitude: 134.6361
      },
      {
        name: "Koror",
        countryCode: "PW",
        timezone: "Pacific/Palau",
        latitude: 7.3319,
        longitude: 134.4810
      },
      {
        name: "Arai",
        countryCode: "PW",
        timezone: "Pacific/Palau",
        latitude: 7.3319,
        longitude: 134.4810
      },
      {
        name: "Babeldaob",
        countryCode: "PW",
        timezone: "Pacific/Palau",
        latitude: 7.4644,
        longitude: 134.6333
      }
    ]
  },
  {
    name: "Panama",
    code: "PA",
    cities: [
      {
        name: "Panama City",
        countryCode: "PA",
        timezone: "America/Panama",
        latitude: 8.9833,
        longitude: -79.5167
      },
      {
        name: "Colon",
        countryCode: "PA",
        timezone: "America/Panama",
        latitude: 9.3582,
        longitude: -79.9000
      },
      {
        name: "David",
        countryCode: "PA",
        timezone: "America/Panama",
        latitude: 8.4280,
        longitude: -82.4280
      },
      {
        name: "Chiriqui",
        countryCode: "PA",
        timezone: "America/Panama",
        latitude: 8.1406,
        longitude: -82.4306
      },
      {
        name: "La Chorrera",
        countryCode: "PA",
        timezone: "America/Panama",
        latitude: 8.9111,
        longitude: -79.7647
      }
    ]
  },
  {
    name: "Papua New Guinea",
    code: "PG",
    cities: [
      {
        name: "Port Moresby",
        countryCode: "PG",
        timezone: "Pacific/Port_Moresby",
        latitude: -9.4438,
        longitude: 147.1803
      },
      {
        name: "Lae",
        countryCode: "PG",
        timezone: "Pacific/Port_Moresby",
        latitude: -6.7263,
        longitude: 146.9910
      },
      {
        name: "Mount Hagen",
        countryCode: "PG",
        timezone: "Pacific/Port_Moresby",
        latitude: -5.8600,
        longitude: 144.2217
      },
      {
        name: "Goroka",
        countryCode: "PG",
        timezone: "Pacific/Port_Moresby",
        latitude: -6.0833,
        longitude: 145.3806
      },
      {
        name: "Madang",
        countryCode: "PG",
        timezone: "Pacific/Port_Moresby",
        latitude: -5.2078,
        longitude: 145.7892
      },
      {
        name: "Rabaul",
        countryCode: "PG",
        timezone: "Pacific/Port_Moresby",
        latitude: -4.2010,
        longitude: 152.2017
      }
    ]
  },
  {
    name: "Paraguay",
    code: "PY",
    cities: [
      {
        name: "Asunción",
        countryCode: "PY",
        timezone: "America/Asuncion",
        latitude: -25.2637,
        longitude: -57.5759
      },
      {
        name: "Ciudad del Este",
        countryCode: "PY",
        timezone: "America/Asuncion",
        latitude: -25.5089,
        longitude: -54.6203
      },
      {
        name: "Encarnacion",
        countryCode: "PY",
        timezone: "America/Asuncion",
        latitude: -27.3353,
        longitude: -55.8681
      },
      {
        name: "Luque",
        countryCode: "PY",
        timezone: "America/Asuncion",
        latitude: -25.2422,
        longitude: -57.4597
      },
      {
        name: "San Lorenzo",
        countryCode: "PY",
        timezone: "America/Asuncion",
        latitude: -25.3278,
        longitude: -57.5036
      }
    ]
  },
  {
    name: "Peru",
    code: "PE",
    cities: [
      {
        name: "Lima",
        countryCode: "PE",
        timezone: "America/Lima",
        latitude: -12.0464,
        longitude: -77.0428
      },
      {
        name: "Arequipa",
        countryCode: "PE",
        timezone: "America/Lima",
        latitude: -16.4090,
        longitude: -71.5375
      },
      {
        name: "Trujillo",
        countryCode: "PE",
        timezone: "America/Lima",
        latitude: -8.1090,
        longitude: -79.0208
      },
      {
        name: "Chiclayo",
        countryCode: "PE",
        timezone: "America/Lima",
        latitude: -6.7716,
        longitude: -79.8390
      },
      {
        name: "Piura",
        countryCode: "PE",
        timezone: "America/Lima",
        latitude: -5.1945,
        longitude: -80.6328
      }
    ]
  },
  {
    name: "Philippines",
    code: "PH",
    cities: [
      {
        name: "Manila",
        countryCode: "PH",
        timezone: "Asia/Manila",
        latitude: 14.5995,
        longitude: 120.9842
      },
      {
        name: "Cebu City",
        countryCode: "PH",
        timezone: "Asia/Manila",
        latitude: 10.3157,
        longitude: 123.8854
      },
      {
        name: "Davao City",
        countryCode: "PH",
        timezone: "Asia/Manila",
        latitude: 7.1907,
        longitude: 125.4553
      },
      {
        name: "Quezon City",
        countryCode: "PH",
        timezone: "Asia/Manila",
        latitude: 14.6760,
        longitude: 121.0437
      },
      {
        name: "Zamboanga City",
        countryCode: "PH",
        timezone: "Asia/Manila",
        latitude: 6.9281,
        longitude: 122.0808
      },
      {
        name: "Taguig",
        countryCode: "PH",
        timezone: "Asia/Manila",
        latitude: 14.5449,
        longitude: 121.0501
      },
      {
        name: "General Santos",
        countryCode: "PH",
        timezone: "Asia/Manila",
        latitude: 6.1167,
        longitude: 125.1700
      }
    ]
  },
  {
    name: "Poland",
    code: "PL",
    cities: [
      {
        name: "Warsaw",
        countryCode: "PL",
        timezone: "Europe/Warsaw",
        latitude: 52.2298,
        longitude: 21.0118
      },
      {
        name: "Krakow",
        countryCode: "PL",
        timezone: "Europe/Warsaw",
        latitude: 50.0647,
        longitude: 19.9450
      },
      {
        name: "Wroclaw",
        countryCode: "PL",
        timezone: "Europe/Warsaw",
        latitude: 51.1079,
        longitude: 17.0385
      },
      {
        name: "Poznan",
        countryCode: "PL",
        timezone: "Europe/Warsaw",
        latitude: 52.4084,
        longitude: 16.9342
      },
      {
        name: "Gdansk",
        countryCode: "PL",
        timezone: "Europe/Warsaw",
        latitude: 54.3520,
        longitude: 18.6466
      },
      {
        name: "Lodz",
        countryCode: "PL",
        timezone: "Europe/Warsaw",
        latitude: 51.7592,
        longitude: 19.4560
      },
      {
        name: "Szczecin",
        countryCode: "PL",
        timezone: "Europe/Warsaw",
        latitude: 53.4289,
        longitude: 14.5530
      },
      {
        name: "Lublin",
        countryCode: "PL",
        timezone: "Europe/Warsaw",
        latitude: 51.2465,
        longitude: 22.5684
      },
      {
        name: "Katowice",
        countryCode: "PL",
        timezone: "Europe/Warsaw",
        latitude: 50.2649,
        longitude: 19.0238
      },
      {
        name: "Bydgoszcz",
        countryCode: "PL",
        timezone: "Europe/Warsaw",
        latitude: 53.1235,
        longitude: 18.0084
      }
    ]
  },
  {
    name: "Puerto Rico",
    code: "PR",
    cities: [
      {
        name: "San Juan",
        countryCode: "PR",
        timezone: "America/Puerto_Rico",
        latitude: 18.4655,
        longitude: -66.1057
      },
      {
        name: "Bayamon",
        countryCode: "PR",
        timezone: "America/Puerto_Rico",
        latitude: 18.1984,
        longitude: -66.1511
      },
      {
        name: "Ponce",
        countryCode: "PR",
        timezone: "America/Puerto_Rico",
        latitude: 17.9784,
        longitude: -66.9733
      },
      {
        name: "Mayaguez",
        countryCode: "PR",
        timezone: "America/Puerto_Rico",
        latitude: 18.2010,
        longitude: -67.1394
      },
      {
        name: "Carolina",
        countryCode: "PR",
        timezone: "America/Puerto_Rico",
        latitude: 18.3414,
        longitude: -65.9825
      }
    ]
  },
  {
    name: "Portugal",
    code: "PT",
    cities: [
      {
        name: "Lisbon",
        countryCode: "PT",
        timezone: "Europe/Lisbon",
        latitude: 38.7223,
        longitude: -9.1393
      },
      {
        name: "Porto",
        countryCode: "PT",
        timezone: "Europe/Lisbon",
        latitude: 41.1579,
        longitude: -8.6291
      },
      {
        name: "Braga",
        countryCode: "PT",
        timezone: "Europe/Lisbon",
        latitude: 41.5453,
        longitude: -8.3966
      },
      {
        name: "Coimbra",
        countryCode: "PT",
        timezone: "Europe/Lisbon",
        latitude: 40.2033,
        longitude: -8.4103
      },
      {
        name: "Funchal",
        countryCode: "PT",
        timezone: "Atlantic/Madeira",
        latitude: 32.6669,
        longitude: -16.9246
      },
      {
        name: "Vila Nova de Gaia",
        countryCode: "PT",
        timezone: "Europe/Lisbon",
        latitude: 41.1335,
        longitude: -8.6110
      },
      {
        name: "Amadora",
        countryCode: "PT",
        timezone: "Europe/Lisbon",
        latitude: 38.7544,
        longitude: -9.2295
      }
    ]
  },
  {
    name: "Qatar",
    code: "QA",
    cities: [
      {
        name: "Doha",
        countryCode: "QA",
        timezone: "Asia/Qatar",
        latitude: 25.276987,
        longitude: 51.520008
      },
      {
        name: "Al Wakrah",
        countryCode: "QA",
        timezone: "Asia/Qatar",
        latitude: 25.171219,
        longitude: 51.608923
      },
      {
        name: "Al Khor",
        countryCode: "QA",
        timezone: "Asia/Qatar",
        latitude: 25.6866,
        longitude: 51.5280
      },
      {
        name: "Umm Salal",
        countryCode: "QA",
        timezone: "Asia/Qatar",
        latitude: 25.4394,
        longitude: 51.2333
      },
      {
        name: "Al Rayyan",
        countryCode: "QA",
        timezone: "Asia/Qatar",
        latitude: 25.2768,
        longitude: 51.3694
      }
    ]
  },
  {
    name: "Romania",
    code: "RO",
    cities: [
      {
        name: "Bucharest",
        countryCode: "RO",
        timezone: "Europe/Bucharest",
        latitude: 44.4268,
        longitude: 26.1025
      },
      {
        name: "Cluj-Napoca",
        countryCode: "RO",
        timezone: "Europe/Bucharest",
        latitude: 46.7712,
        longitude: 23.6236
      },
      {
        name: "Timișoara",
        countryCode: "RO",
        timezone: "Europe/Bucharest",
        latitude: 45.7489,
        longitude: 21.2087
      },
      {
        name: "Iași",
        countryCode: "RO",
        timezone: "Europe/Bucharest",
        latitude: 47.1585,
        longitude: 27.6014
      },
      {
        name: "Constanța",
        countryCode: "RO",
        timezone: "Europe/Bucharest",
        latitude: 44.4268,
        longitude: 28.1592
      },
      {
        name: "Brașov",
        countryCode: "RO",
        timezone: "Europe/Bucharest",
        latitude: 45.6576,
        longitude: 25.6012
      },
      {
        name: "Craiova",
        countryCode: "RO",
        timezone: "Europe/Bucharest",
        latitude: 44.3318,
        longitude: 23.7944
      }
    ]
  },
  {
    name: "Russia",
    code: "RU",
    cities: [
      {
        name: "Moscow",
        countryCode: "RU",
        timezone: "Europe/Moscow",
        latitude: 55.7558,
        longitude: 37.6173
      },
      {
        name: "Saint Petersburg",
        countryCode: "RU",
        timezone: "Europe/Moscow",
        latitude: 59.9343,
        longitude: 30.3351
      },
      {
        name: "Kazan",
        countryCode: "RU",
        timezone: "Europe/Moscow",
        latitude: 55.8304,
        longitude: 49.0661
      },
      {
        name: "Yekaterinburg",
        countryCode: "RU",
        timezone: "Asia/Yekaterinburg",
        latitude: 56.8389,
        longitude: 60.6057
      },
      {
        name: "Chelyabinsk",
        countryCode: "RU",
        timezone: "Asia/Yekaterinburg",
        latitude: 55.1604,
        longitude: 61.4028
      },
      {
        name: "Tyumen",
        countryCode: "RU",
        timezone: "Asia/Yekaterinburg",
        latitude: 57.1534,
        longitude: 65.5343
      },
      {
        name: "Novosibirsk",
        countryCode: "RU",
        timezone: "Asia/Novosibirsk",
        latitude: 55.0084,
        longitude: 82.9357
      },
      {
        name: "Barnaul",
        countryCode: "RU",
        timezone: "Asia/Novosibirsk",
        latitude: 53.3541,
        longitude: 83.7633
      },
      {
        name: "Tomsk",
        countryCode: "RU",
        timezone: "Asia/Novosibirsk",
        latitude: 56.4977,
        longitude: 84.9907
      },
      {
        name: "Vladivostok",
        countryCode: "RU",
        timezone: "Asia/Vladivostok",
        latitude: 43.1198,
        longitude: 131.8855
      },
      {
        name: "Nakhodka",
        countryCode: "RU",
        timezone: "Asia/Vladivostok",
        latitude: 42.8108,
        longitude: 132.8796
      },
      {
        name: "Ussuriysk",
        countryCode: "RU",
        timezone: "Asia/Vladivostok",
        latitude: 44.3903,
        longitude: 131.9362
      }
    ]
  },
  {
    name: "Rwanda",
    code: "RW",
    cities: [
      {
        name: "Kigali",
        countryCode: "RW",
        timezone: "Africa/Kigali",
        latitude: 1.9706,
        longitude: 30.1044
      },
      {
        name: "Butare",
        countryCode: "RW",
        timezone: "Africa/Kigali",
        latitude: -2.6000,
        longitude: 29.7500
      },
      {
        name: "Musanze",
        countryCode: "RW",
        timezone: "Africa/Kigali",
        latitude: -1.5022,
        longitude: 29.5956
      },
      {
        name: "Rubavu",
        countryCode: "RW",
        timezone: "Africa/Kigali",
        latitude: -1.6500,
        longitude: 29.2500
      },
      {
        name: "Nyamata",
        countryCode: "RW",
        timezone: "Africa/Kigali",
        latitude: -2.2406,
        longitude: 30.1247
      }
    ]
  },
  {
    name: "Saint Kitts and Nevis",
    code: "KN",
    cities: [
      {
        name: "Basseterre",
        countryCode: "KN",
        timezone: "America/St_Kitts",
        latitude: 17.3026,
        longitude: -62.7177
      },
      {
        name: "Charlestown",
        countryCode: "KN",
        timezone: "America/St_Kitts",
        latitude: 17.1327,
        longitude: -62.5843
      },
      {
        name: "Sandy Point Town",
        countryCode: "KN",
        timezone: "America/St_Kitts",
        latitude: 17.3214,
        longitude: -62.8521
      },
      {
        name: "Tabernacle",
        countryCode: "KN",
        timezone: "America/St_Kitts",
        latitude: 17.2419,
        longitude: -62.8200
      },
      {
        name: "Cayon",
        countryCode: "KN",
        timezone: "America/St_Kitts",
        latitude: 17.3411,
        longitude: -62.7351
      }
    ]
  },
  {
    name: "Saint Lucia",
    code: "LC",
    cities: [
      {
        name: "Castries",
        countryCode: "LC",
        timezone: "America/St_Lucia",
        latitude: 13.9892,
        longitude: -61.9981
      },
      {
        name: "Vieux Fort",
        countryCode: "LC",
        timezone: "America/St_Lucia",
        latitude: 13.7163,
        longitude: -60.9827
      },
      {
        name: "Soufriere",
        countryCode: "LC",
        timezone: "America/St_Lucia",
        latitude: 13.8529,
        longitude: -61.0548
      },
      {
        name: "Gros Islet",
        countryCode: "LC",
        timezone: "America/St_Lucia",
        latitude: 14.0567,
        longitude: -60.9440
      },
      {
        name: "Dennery",
        countryCode: "LC",
        timezone: "America/St_Lucia",
        latitude: 13.8845,
        longitude: -60.9580
      }
    ]
  },
  {
    name: "Samoa",
    code: "WS",
    cities: [
      {
        name: "Apia",
        countryCode: "WS",
        timezone: "Pacific/Apia",
        latitude: -13.8293,
        longitude: -171.7510
      },
      {
        name: "Vaitele",
        countryCode: "WS",
        timezone: "Pacific/Apia",
        latitude: -13.8519,
        longitude: -172.1062
      },
      {
        name: "Faleula",
        countryCode: "WS",
        timezone: "Pacific/Apia",
        latitude: -13.8028,
        longitude: -172.0864
      },
      {
        name: "Siumu",
        countryCode: "WS",
        timezone: "Pacific/Apia",
        latitude: -13.8380,
        longitude: -172.3414
      },
      {
        name: "Saleufi",
        countryCode: "WS",
        timezone: "Pacific/Apia",
        latitude: -13.8217,
        longitude: -172.2285
      }
    ]
  },
  {
    name: "San Marino",
    code: "SM",
    cities: [
      {
        name: "San Marino",
        countryCode: "SM",
        timezone: "Europe/San_Marino",
        latitude: 43.9333,
        longitude: 12.45
      },
      {
        name: "Borgo Maggiore",
        countryCode: "SM",
        timezone: "Europe/San_Marino",
        latitude: 43.9333,
        longitude: 12.4667
      },
      {
        name: "Serravalle",
        countryCode: "SM",
        timezone: "Europe/San_Marino",
        latitude: 43.9333,
        longitude: 12.45
      },
      {
        name: "Domagnano",
        countryCode: "SM",
        timezone: "Europe/San_Marino",
        latitude: 43.9333,
        longitude: 12.45
      },
      {
        name: "Chiesanuova",
        countryCode: "SM",
        timezone: "Europe/San_Marino",
        latitude: 43.9333,
        longitude: 12.45
      }
    ]
  },
  {
    name: "Saudi Arabia",
    code: "SA",
    cities: [
      {
        name: "Riyadh",
        countryCode: "SA",
        timezone: "Asia/Riyadh",
        latitude: 24.7136,
        longitude: 46.6753
      },
      {
        name: "Jeddah",
        countryCode: "SA",
        timezone: "Asia/Riyadh",
        latitude: 21.4858,
        longitude: 39.1925
      },
      {
        name: "Mecca",
        countryCode: "SA",
        timezone: "Asia/Riyadh",
        latitude: 21.4225,
        longitude: 39.8262
      },
      {
        name: "Medina",
        countryCode: "SA",
        timezone: "Asia/Riyadh",
        latitude: 24.4750,
        longitude: 39.6128
      },
      {
        name: "Dammam",
        countryCode: "SA",
        timezone: "Asia/Riyadh",
        latitude: 26.4207,
        longitude: 49.9777
      },
      {
        name: "Tabuk",
        countryCode: "SA",
        timezone: "Asia/Riyadh",
        latitude: 28.3824,
        longitude: 36.5774
      }
    ]
  },
  {
    name: "Senegal",
    code: "SN",
    cities: [
      {
        name: "Dakar",
        countryCode: "SN",
        timezone: "Africa/Dakar",
        latitude: 14.6928,
        longitude: -17.4467
      },
      {
        name: "Thies",
        countryCode: "SN",
        timezone: "Africa/Dakar",
        latitude: 14.7856,
        longitude: -16.9700
      },
      {
        name: "Saint-Louis",
        countryCode: "SN",
        timezone: "Africa/Dakar",
        latitude: 16.0010,
        longitude: -16.4900
      },
      {
        name: "Kaolack",
        countryCode: "SN",
        timezone: "Africa/Dakar",
        latitude: 14.1583,
        longitude: -15.6824
      },
      {
        name: "Ziguinchor",
        countryCode: "SN",
        timezone: "Africa/Dakar",
        latitude: 12.5833,
        longitude: -16.2761
      }
    ]
  },
  {
    name: "Serbia",
    code: "RS",
    cities: [
      {
        name: "Belgrade",
        countryCode: "RS",
        timezone: "Europe/Belgrade",
        latitude: 44.8176,
        longitude: 20.4633
      },
      {
        name: "Novi Sad",
        countryCode: "RS",
        timezone: "Europe/Belgrade",
        latitude: 45.2671,
        longitude: 19.8335
      },
      {
        name: "Nis",
        countryCode: "RS",
        timezone: "Europe/Belgrade",
        latitude: 43.3209,
        longitude: 21.8954
      },
      {
        name: "Kragujevac",
        countryCode: "RS",
        timezone: "Europe/Belgrade",
        latitude: 44.0176,
        longitude: 20.9118
      },
      {
        name: "Subotica",
        countryCode: "RS",
        timezone: "Europe/Belgrade",
        latitude: 46.1005,
        longitude: 19.6670
      },
      {
        name: "Zrenjanin",
        countryCode: "RS",
        timezone: "Europe/Belgrade",
        latitude: 45.3683,
        longitude: 20.3820
      },
      {
        name: "Pančevo",
        countryCode: "RS",
        timezone: "Europe/Belgrade",
        latitude: 44.8742,
        longitude: 20.6401
      }
    ]
  },
  {
    name: "Seychelles",
    code: "SC",
    cities: [
      {
        name: "Beau Vallon",
        countryCode: "SC",
        timezone: "Indian/Mahe",
        latitude: -4.5833,
        longitude: 55.4167
      },
      {
        name: "Anse Boileau",
        countryCode: "SC",
        timezone: "Indian/Mahe",
        latitude: -4.5333,
        longitude: 55.4333
      },
      {
        name: "Takamaka",
        countryCode: "SC",
        timezone: "Indian/Mahe",
        latitude: -4.6167,
        longitude: 55.5167
      },
      {
        name: "Anse Royale",
        countryCode: "SC",
        timezone: "Indian/Mahe",
        latitude: -4.7167,
        longitude: 55.4667
      }
    ]
  },
  {
    name: "Singapore",
    code: "SG",
    cities: [
      {
        name: "Singapore",
        countryCode: "SG",
        timezone: "Asia/Singapore",
        latitude: 1.2903,
        longitude: 103.8517
      }
    ]
  },
  {
    name: "Slovakia",
    code: "SK",
    cities: [
      {
        name: "Bratislava",
        countryCode: "SK",
        timezone: "Europe/Bratislava",
        latitude: 48.1482,
        longitude: 17.1067
      },
      {
        name: "Kosice",
        countryCode: "SK",
        timezone: "Europe/Bratislava",
        latitude: 48.7164,
        longitude: 21.2611
      },
      {
        name: "Presov",
        countryCode: "SK",
        timezone: "Europe/Bratislava",
        latitude: 48.9911,
        longitude: 21.2619
      },
      {
        name: "Zilina",
        countryCode: "SK",
        timezone: "Europe/Bratislava",
        latitude: 49.2213,
        longitude: 18.7393
      },
      {
        name: "Nitra",
        countryCode: "SK",
        timezone: "Europe/Bratislava",
        latitude: 48.3077,
        longitude: 18.0843
      },
      {
        name: "Banska Bystrica",
        countryCode: "SK",
        timezone: "Europe/Bratislava",
        latitude: 48.7376,
        longitude: 19.1451
      },
      {
        name: "Trnava",
        countryCode: "SK",
        timezone: "Europe/Bratislava",
        latitude: 48.3764,
        longitude: 17.5917
      }
    ]
  },
  {
    name: "Slovenia",
    code: "SI",
    cities: [
      {
        name: "Ljubljana",
        countryCode: "SI",
        timezone: "Europe/Ljubljana",
        latitude: 46.0511,
        longitude: 14.5051
      },
      {
        name: "Maribor",
        countryCode: "SI",
        timezone: "Europe/Ljubljana",
        latitude: 46.5547,
        longitude: 15.6465
      },
      {
        name: "Celje",
        countryCode: "SI",
        timezone: "Europe/Ljubljana",
        latitude: 46.2321,
        longitude: 15.2671
      },
      {
        name: "Kranj",
        countryCode: "SI",
        timezone: "Europe/Ljubljana",
        latitude: 46.2383,
        longitude: 14.3697
      },
      {
        name: "Koper",
        countryCode: "SI",
        timezone: "Europe/Ljubljana",
        latitude: 45.5402,
        longitude: 13.7305
      },
      {
        name: "Velenje",
        countryCode: "SI",
        timezone: "Europe/Ljubljana",
        latitude: 46.3531,
        longitude: 15.1105
      },
      {
        name: "Novo Mesto",
        countryCode: "SI",
        timezone: "Europe/Ljubljana",
        latitude: 45.8041,
        longitude: 15.1779
      }
    ]
  },
  {
    name: "Solomon Islands",
    code: "SB",
    cities: [
      {
        name: "Honiara",
        countryCode: "SB",
        timezone: "Pacific/Guadalcanal",
        latitude: -9.4325,
        longitude: 159.9532
      },
      {
        name: "Gizo",
        countryCode: "SB",
        timezone: "Pacific/Guadalcanal",
        latitude: -8.1072,
        longitude: 156.8561
      },
      {
        name: "Auki",
        countryCode: "SB",
        timezone: "Pacific/Guadalcanal",
        latitude: -8.7747,
        longitude: 160.0673
      },
      {
        name: "Tulagi",
        countryCode: "SB",
        timezone: "Pacific/Guadalcanal",
        latitude: -9.1257,
        longitude: 160.0331
      },
      {
        name: "Munda",
        countryCode: "SB",
        timezone: "Pacific/Guadalcanal",
        latitude: -8.2211,
        longitude: 157.3222
      },
      {
        name: "Kira kira",
        countryCode: "SB",
        timezone: "Pacific/Guadalcanal",
        latitude: -10.4489,
        longitude: 161.3372
      }
    ]
  },
  {
    name: "Somalia",
    code: "SO",
    cities: [
      {
        name: "Mogadishu",
        countryCode: "SO",
        timezone: "Africa/Mogadishu",
        latitude: 2.0469,
        longitude: 45.3182
      },
      {
        name: "Hargeisa",
        countryCode: "SO",
        timezone: "Africa/Mogadishu",
        latitude: 9.5627,
        longitude: 44.0704
      },
      {
        name: "Kismayo",
        countryCode: "SO",
        timezone: "Africa/Mogadishu",
        latitude: -0.3592,
        longitude: 42.5456
      },
      {
        name: "Baidoa",
        countryCode: "SO",
        timezone: "Africa/Mogadishu",
        latitude: 3.1006,
        longitude: 43.6469
      },
      {
        name: "Bossaso",
        countryCode: "SO",
        timezone: "Africa/Mogadishu",
        latitude: 11.2833,
        longitude: 49.1828
      }
    ]
  },
  {
    name: "South Africa",
    code: "ZA",
    cities: [
      {
        name: "Cape Town",
        countryCode: "ZA",
        timezone: "Africa/Johannesburg",
        latitude: -33.9249,
        longitude: 18.4241
      },
      {
        name: "Johannesburg",
        countryCode: "ZA",
        timezone: "Africa/Johannesburg",
        latitude: -26.2041,
        longitude: 28.0473
      },
      {
        name: "Pretoria",
        countryCode: "ZA",
        timezone: "Africa/Johannesburg",
        latitude: -25.7460,
        longitude: 28.1881
      },
      {
        name: "Durban",
        countryCode: "ZA",
        timezone: "Africa/Johannesburg",
        latitude: -29.8587,
        longitude: 31.0218
      },
      {
        name: "Port Elizabeth",
        countryCode: "ZA",
        timezone: "Africa/Johannesburg",
        latitude: -33.9186,
        longitude: 25.5707
      },
      {
        name: "Bloemfontein",
        countryCode: "ZA",
        timezone: "Africa/Johannesburg",
        latitude: -29.0857,
        longitude: 26.2199
      }
    ]
  },
  {
    name: "South Korea",
    code: "KR",
    cities: [
      {
        name: "Seoul",
        countryCode: "KR",
        timezone: "Asia/Seoul",
        latitude: 37.5665,
        longitude: 126.9780
      },
      {
        name: "Busan",
        countryCode: "KR",
        timezone: "Asia/Seoul",
        latitude: 35.1796,
        longitude: 129.0756
      },
      {
        name: "Incheon",
        countryCode: "KR",
        timezone: "Asia/Seoul",
        latitude: 37.4563,
        longitude: 126.7052
      },
      {
        name: "Daegu",
        countryCode: "KR",
        timezone: "Asia/Seoul",
        latitude: 35.8714,
        longitude: 128.6014
      },
      {
        name: "Daejeon",
        countryCode: "KR",
        timezone: "Asia/Seoul",
        latitude: 36.3504,
        longitude: 127.3845
      },
      {
        name: "Suwon",
        countryCode: "KR",
        timezone: "Asia/Seoul",
        latitude: 37.2636,
        longitude: 127.0286
      },
      {
        name: "Gwangju",
        countryCode: "KR",
        timezone: "Asia/Seoul",
        latitude: 35.1595,
        longitude: 126.8526
      }
    ]
  },
  {
    name: "Spain",
    code: "ES",
    cities: [
      {
        name: "Madrid",
        countryCode: "ES",
        timezone: "Europe/Madrid",
        latitude: 40.4168,
        longitude: -3.7038
      },
      {
        name: "Barcelona",
        countryCode: "ES",
        timezone: "Europe/Madrid",
        latitude: 41.3784,
        longitude: 2.1923
      },
      {
        name: "Valencia",
        countryCode: "ES",
        timezone: "Europe/Madrid",
        latitude: 39.4699,
        longitude: -0.3763
      },
      {
        name: "Seville",
        countryCode: "ES",
        timezone: "Europe/Madrid",
        latitude: 37.3891,
        longitude: -5.9845
      },
      {
        name: "Zaragoza",
        countryCode: "ES",
        timezone: "Europe/Madrid",
        latitude: 41.6488,
        longitude: -0.8891
      },
      {
        name: "Malaga",
        countryCode: "ES",
        timezone: "Europe/Madrid",
        latitude: 36.7213,
        longitude: -4.4214
      },
      {
        name: "Murcia",
        countryCode: "ES",
        timezone: "Europe/Madrid",
        latitude: 37.9922,
        longitude: -1.1307
      }
    ]
  },
  {
    name: "Sri Lanka",
    code: "LK",
    cities: [
      {
        name: "Colombo",
        countryCode: "LK",
        timezone: "Asia/Colombo",
        latitude: 6.9271,
        longitude: 79.8612
      },
      {
        name: "Kandy",
        countryCode: "LK",
        timezone: "Asia/Colombo",
        latitude: 7.2906,
        longitude: 80.6337
      },
      {
        name: "Galle",
        countryCode: "LK",
        timezone: "Asia/Colombo",
        latitude: 6.0421,
        longitude: 80.2182
      },
      {
        name: "Jaffna",
        countryCode: "LK",
        timezone: "Asia/Colombo",
        latitude: 9.6615,
        longitude: 80.0354
      },
      {
        name: "Negombo",
        countryCode: "LK",
        timezone: "Asia/Colombo",
        latitude: 7.2080,
        longitude: 79.9784
      }
    ]
  },
  {
    name: "Sudan",
    code: "SD",
    cities: [
      {
        name: "Khartoum",
        countryCode: "SD",
        timezone: "Africa/Khartoum",
        latitude: 15.5007,
        longitude: 32.5599
      },
      {
        name: "Omdurman",
        countryCode: "SD",
        timezone: "Africa/Khartoum",
        latitude: 15.6621,
        longitude: 32.4788
      },
      {
        name: "Port Sudan",
        countryCode: "SD",
        timezone: "Africa/Khartoum",
        latitude: 19.6071,
        longitude: 37.2153
      },
      {
        name: "Kosti",
        countryCode: "SD",
        timezone: "Africa/Khartoum",
        latitude: 13.1706,
        longitude: 32.6781
      },
      {
        name: "El Obeid",
        countryCode: "SD",
        timezone: "Africa/Khartoum",
        latitude: 13.1819,
        longitude: 30.2172
      }
    ]
  },
  {
    name: "Suriname",
    code: "SR",
    cities: [
      {
        name: "Paramaribo",
        countryCode: "SR",
        timezone: "America/Paramaribo",
        latitude: 5.8669,
        longitude: -55.1714
      },
      {
        name: "Lelydorp",
        countryCode: "SR",
        timezone: "America/Paramaribo",
        latitude: 5.5103,
        longitude: -55.2424
      },
      {
        name: "Papatam",
        countryCode: "SR",
        timezone: "America/Paramaribo",
        latitude: 5.2121,
        longitude: -54.7564
      },
      {
        name: "Nieuw Nickerie",
        countryCode: "SR",
        timezone: "America/Paramaribo",
        latitude: 5.9471,
        longitude: -56.0319
      },
      {
        name: "Moengo",
        countryCode: "SR",
        timezone: "America/Paramaribo",
        latitude: 5.2098,
        longitude: -53.7912
      }
    ]
  },
  {
    name: "Sweden",
    code: "SE",
    cities: [
      {
        name: "Stockholm",
        countryCode: "SE",
        timezone: "Europe/Stockholm",
        latitude: 59.3293,
        longitude: 18.0686
      },
      {
        name: "Gothenburg",
        countryCode: "SE",
        timezone: "Europe/Stockholm",
        latitude: 57.7089,
        longitude: 11.9746
      },
      {
        name: "Malmö",
        countryCode: "SE",
        timezone: "Europe/Stockholm",
        latitude: 55.6050,
        longitude: 13.0000
      },
      {
        name: "Uppsala",
        countryCode: "SE",
        timezone: "Europe/Stockholm",
        latitude: 59.8586,
        longitude: 17.6389
      }
    ]
  },
  {
    name: "Switzerland",
    code: "CH",
    cities: [
      {
        name: "Zurich",
        countryCode: "CH",
        timezone: "Europe/Zurich",
        latitude: 47.3769,
        longitude: 8.5417
      },
      {
        name: "Geneva",
        countryCode: "CH",
        timezone: "Europe/Zurich",
        latitude: 46.2044,
        longitude: 6.1432
      },
      {
        name: "Basel",
        countryCode: "CH",
        timezone: "Europe/Zurich",
        latitude: 47.5596,
        longitude: 7.5886
      },
      {
        name: "Bern",
        countryCode: "CH",
        timezone: "Europe/Zurich",
        latitude: 46.9481,
        longitude: 7.4474
      },
      {
        name: "Lausanne",
        countryCode: "CH",
        timezone: "Europe/Zurich",
        latitude: 46.5197,
        longitude: 6.6323
      }
    ]
  },
  {
    name: "Taiwan",
    code: "TW",
    cities: [
      {
        name: "Taipei",
        countryCode: "TW",
        timezone: "Asia/Taipei",
        latitude: 25.0330,
        longitude: 121.5654
      },
      {
        name: "Kaohsiung",
        countryCode: "TW",
        timezone: "Asia/Taipei",
        latitude: 22.6273,
        longitude: 120.3014
      },
      {
        name: "Taichung",
        countryCode: "TW",
        timezone: "Asia/Taipei",
        latitude: 24.1477,
        longitude: 120.6736
      },
      {
        name: "Tainan",
        countryCode: "TW",
        timezone: "Asia/Taipei",
        latitude: 22.9999,
        longitude: 120.2270
      },
      {
        name: "Keelung",
        countryCode: "TW",
        timezone: "Asia/Taipei",
        latitude: 25.1278,
        longitude: 121.7390
      }
    ]
  },
  {
    name: "Tajikistan",
    code: "TJ",
    cities: [
      {
        name: "Dushanbe",
        countryCode: "TJ",
        timezone: "Asia/Dushanbe",
        latitude: 38.5598,
        longitude: 68.7870
      },
      {
        name: "Khujand",
        countryCode: "TJ",
        timezone: "Asia/Dushanbe",
        latitude: 40.2817,
        longitude: 69.6210
      },
      {
        name: "Kulob",
        countryCode: "TJ",
        timezone: "Asia/Dushanbe",
        latitude: 37.8697,
        longitude: 69.7816
      },
      {
        name: "Bokhtar",
        countryCode: "TJ",
        timezone: "Asia/Dushanbe",
        latitude: 37.8777,
        longitude: 69.7700
      },
      {
        name: "Istaravshan",
        countryCode: "TJ",
        timezone: "Asia/Dushanbe",
        latitude: 39.8300,
        longitude: 69.2580
      }
    ]
  },
  {
    name: "Tanzania",
    code: "TZ",
    cities: [
      {
        name: "Dodoma",
        countryCode: "TZ",
        timezone: "Africa/Dar_es_Salaam",
        latitude: -6.1659,
        longitude: 35.7516
      },
      {
        name: "Dar es Salaam",
        countryCode: "TZ",
        timezone: "Africa/Dar_es_Salaam",
        latitude: -6.7924,
        longitude: 39.2083
      },
      {
        name: "Mwanza",
        countryCode: "TZ",
        timezone: "Africa/Dar_es_Salaam",
        latitude: -2.5167,
        longitude: 32.9167
      },
      {
        name: "Arusha",
        countryCode: "TZ",
        timezone: "Africa/Dar_es_Salaam",
        latitude: -3.3869,
        longitude: 36.6820
      },
      {
        name: "Mbeya",
        countryCode: "TZ",
        timezone: "Africa/Dar_es_Salaam",
        latitude: -8.8918,
        longitude: 33.4605
      }
    ]
  },
  {
    name: "Thailand",
    code: "TH",
    cities: [
      {
        name: "Bangkok",
        countryCode: "TH",
        timezone: "Asia/Bangkok",
        latitude: 13.7563,
        longitude: 100.5018
      },
      {
        name: "Chiang Mai",
        countryCode: "TH",
        timezone: "Asia/Bangkok",
        latitude: 18.7870,
        longitude: 98.9936
      },
      {
        name: "Pattaya",
        countryCode: "TH",
        timezone: "Asia/Bangkok",
        latitude: 12.9276,
        longitude: 100.8777
      },
      {
        name: "Phuket",
        countryCode: "TH",
        timezone: "Asia/Bangkok",
        latitude: 7.8804,
        longitude: 98.3923
      },
      {
        name: "Hua Hin",
        countryCode: "TH",
        timezone: "Asia/Bangkok",
        latitude: 12.5725,
        longitude: 99.9575
      },
      {
        name: "Nonthaburi",
        countryCode: "TH",
        timezone: "Asia/Bangkok",
        latitude: 13.8621,
        longitude: 100.5160
      },
      {
        name: "Udon Thani",
        countryCode: "TH",
        timezone: "Asia/Bangkok",
        latitude: 17.4138,
        longitude: 102.7855
      }
    ]
  },
  {
    name: "Timor-Leste",
    code: "TL",
    cities: [
      {
        name: "Dili",
        countryCode: "TL",
        timezone: "Asia/Dili",
        latitude: -8.5569,
        longitude: 125.5603
      },
      {
        name: "Baucau",
        countryCode: "TL",
        timezone: "Asia/Dili",
        latitude: -8.4667,
        longitude: 126.4794
      },
      {
        name: "Maliana",
        countryCode: "TL",
        timezone: "Asia/Dili",
        latitude: -8.2806,
        longitude: 126.4172
      },
      {
        name: "Lospalos",
        countryCode: "TL",
        timezone: "Asia/Dili",
        latitude: -8.5481,
        longitude: 127.0600
      },
      {
        name: "Viqueque",
        countryCode: "TL",
        timezone: "Asia/Dili",
        latitude: -8.8775,
        longitude: 126.5811
      }
    ]
  },
  {
    name: "Tokelau",
    code: "TK",
    cities: [
      {
        name: "Atafu",
        countryCode: "TK",
        timezone: "Pacific/Fakaofo",
        latitude: -9.2000,
        longitude: -171.2000
      },
      {
        name: "Nukunonu",
        countryCode: "TK",
        timezone: "Pacific/Fakaofo",
        latitude: -9.2000,
        longitude: -171.2000
      },
      {
        name: "Fakaofo",
        countryCode: "TK",
        timezone: "Pacific/Fakaofo",
        latitude: -9.2000,
        longitude: -171.2000
      }
    ]
  },
  {
    name: "Tonga",
    code: "TO",
    cities: [
      {
        name: "Nuku'alofa",
        countryCode: "TO",
        timezone: "Pacific/Tongatapu",
        latitude: -21.1391,
        longitude: -175.1992
      },
      {
        name: "Neiafu",
        countryCode: "TO",
        timezone: "Pacific/Tongatapu",
        latitude: -18.6450,
        longitude: -173.9800
      },
      {
        name: "Vava'u",
        countryCode: "TO",
        timezone: "Pacific/Tongatapu",
        latitude: -18.6461,
        longitude: -173.9877
      },
      {
        name: "Ha'apai",
        countryCode: "TO",
        timezone: "Pacific/Tongatapu",
        latitude: -19.7500,
        longitude: -174.3500
      }
    ]
  },
  {
    name: "Trinidad and Tobago",
    code: "TT",
    cities: [
      {
        name: "Port of Spain",
        countryCode: "TT",
        timezone: "America/Port_of_Spain",
        latitude: 10.6515,
        longitude: -61.2225
      },
      {
        name: "San Fernando",
        countryCode: "TT",
        timezone: "America/Port_of_Spain",
        latitude: 10.2833,
        longitude: -61.4667
      },
      {
        name: "Chaguanas",
        countryCode: "TT",
        timezone: "America/Port_of_Spain",
        latitude: 10.5156,
        longitude: -61.4133
      },
      {
        name: "Scarborough",
        countryCode: "TT",
        timezone: "America/Port_of_Spain",
        latitude: 11.1833,
        longitude: -60.7333
      },
      {
        name: "Point Fortin",
        countryCode: "TT",
        timezone: "America/Port_of_Spain",
        latitude: 10.1680,
        longitude: -61.6205
      },
      {
        name: "Arima",
        countryCode: "TT",
        timezone: "America/Port_of_Spain",
        latitude: 10.2485,
        longitude: -61.2870
      }
    ]
  },
  {
    name: "Tunisia",
    code: "TN",
    cities: [
      {
        name: "Tunis",
        countryCode: "TN",
        timezone: "Africa/Tunis",
        latitude: 36.8065,
        longitude: 10.1815
      },
      {
        name: "Sfax",
        countryCode: "TN",
        timezone: "Africa/Tunis",
        latitude: 34.7404,
        longitude: 10.7602
      },
      {
        name: "Sousse",
        countryCode: "TN",
        timezone: "Africa/Tunis",
        latitude: 35.8256,
        longitude: 10.6369
      },
      {
        name: "Gabès",
        countryCode: "TN",
        timezone: "Africa/Tunis",
        latitude: 33.8800,
        longitude: 10.0980
      }
    ]
  },
  {
    name: "Turkey",
    code: "TR",
    cities: [
      {
        name: "Istanbul",
        countryCode: "TR",
        timezone: "Europe/Istanbul",
        latitude: 41.0082,
        longitude: 28.9784
      },
      {
        name: "Ankara",
        countryCode: "TR",
        timezone: "Europe/Istanbul",
        latitude: 39.9334,
        longitude: 32.8597
      },
      {
        name: "Izmir",
        countryCode: "TR",
        timezone: "Europe/Istanbul",
        latitude: 38.4192,
        longitude: 27.1287
      },
      {
        name: "Bursa",
        countryCode: "TR",
        timezone: "Europe/Istanbul",
        latitude: 40.1956,
        longitude: 29.0613
      },
      {
        name: "Adana",
        countryCode: "TR",
        timezone: "Europe/Istanbul",
        latitude: 37.0,
        longitude: 35.3213
      },
      {
        name: "Gaziantep",
        countryCode: "TR",
        timezone: "Europe/Istanbul",
        latitude: 37.0662,
        longitude: 37.3833
      },
      {
        name: "Konya",
        countryCode: "TR",
        timezone: "Europe/Istanbul",
        latitude: 37.8664,
        longitude: 32.4747
      }
    ]
  },
  {
    name: "Turkmenistan",
    code: "TM",
    cities: [
      {
        name: "Ashgabat",
        countryCode: "TM",
        timezone: "Asia/Ashgabat",
        latitude: 37.9601,
        longitude: 58.3792
      },
      {
        name: "Turkmenabat",
        countryCode: "TM",
        timezone: "Asia/Ashgabat",
        latitude: 39.0637,
        longitude: 63.5672
      },
      {
        name: "Mary",
        countryCode: "TM",
        timezone: "Asia/Ashgabat",
        latitude: 37.5934,
        longitude: 61.8348
      },
      {
        name: "Dashoguz",
        countryCode: "TM",
        timezone: "Asia/Ashgabat",
        latitude: 41.8312,
        longitude: 59.9740
      }
    ]
  },
  {
    name: "Tuvalu",
    code: "TV",
    cities: [
      {
        name: "Funafuti",
        countryCode: "TV",
        timezone: "Pacific/Funafuti",
        latitude: -7.4850,
        longitude: 179.1944
      },
      {
        name: "Nanumea",
        countryCode: "TV",
        timezone: "Pacific/Funafuti",
        latitude: -7.5000,
        longitude: 179.5000
      },
      {
        name: "Nukufetau",
        countryCode: "TV",
        timezone: "Pacific/Funafuti",
        latitude: -7.6000,
        longitude: 179.1000
      },
      {
        name: "Vaitupu",
        countryCode: "TV",
        timezone: "Pacific/Funafuti",
        latitude: -7.9000,
        longitude: 179.2000
      },
      {
        name: "Nanumanga",
        countryCode: "TV",
        timezone: "Pacific/Funafuti",
        latitude: -7.7000,
        longitude: 179.0000
      },
      {
        name: "Niutao",
        countryCode: "TV",
        timezone: "Pacific/Funafuti",
        latitude: -7.2000,
        longitude: 179.5000
      }
    ]
  },
  {
    name: "United States",
    code: "US",
    cities: [
      {
        name: "New York",
        countryCode: "US",
        timezone: "US/Eastern",
        latitude: 40.7128,
        longitude: -74.0060
      },
      {
        name: "Miami",
        countryCode: "US",
        timezone: "US/Eastern",
        latitude: 25.7617,
        longitude: -80.1918
      },
      {
        name: "Boston",
        countryCode: "US",
        timezone: "US/Eastern",
        latitude: 42.3601,
        longitude: -71.0589
      },
      {
        name: "Atlanta",
        countryCode: "US",
        timezone: "US/Eastern",
        latitude: 33.7490,
        longitude: -84.3880
      },
      {
        name: "Washington, D.C.",
        countryCode: "US",
        timezone: "US/Eastern",
        latitude: 38.9072,
        longitude: -77.0369
      },
      {
        name: "Philadelphia",
        countryCode: "US",
        timezone: "US/Eastern",
        latitude: 39.9526,
        longitude: -75.1652
      },
      {
        name: "Orlando",
        countryCode: "US",
        timezone: "US/Eastern",
        latitude: 28.5383,
        longitude: -81.3792
      },
      {
        name: "Charlotte",
        countryCode: "US",
        timezone: "US/Eastern",
        latitude: 35.2271,
        longitude: -80.8431
      },
      {
        name: "Los Angeles",
        countryCode: "US",
        timezone: "US/Pacific",
        latitude: 34.0522,
        longitude: -118.2437
      },
      {
        name: "San Francisco",
        countryCode: "US",
        timezone: "US/Pacific",
        latitude: 37.7749,
        longitude: -122.4194
      },
      {
        name: "Seattle",
        countryCode: "US",
        timezone: "US/Pacific",
        latitude: 47.6062,
        longitude: -122.3321
      },
      {
        name: "San Diego",
        countryCode: "US",
        timezone: "US/Pacific",
        latitude: 32.7157,
        longitude: -117.1611
      },
      {
        name: "Portland",
        countryCode: "US",
        timezone: "US/Pacific",
        latitude: 45.5152,
        longitude: -122.6784
      },
      {
        name: "Las Vegas",
        countryCode: "US",
        timezone: "US/Pacific",
        latitude: 36.1699,
        longitude: -115.1398
      },
      {
        name: "Sacramento",
        countryCode: "US",
        timezone: "US/Pacific",
        latitude: 38.5816,
        longitude: -121.4944
      },
      {
        name: "San Jose",
        countryCode: "US",
        timezone: "US/Pacific",
        latitude: 37.3382,
        longitude: -121.8863
      },
      {
        name: "Chicago",
        countryCode: "US",
        timezone: "US/Central",
        latitude: 41.8781,
        longitude: -87.6298
      },
      {
        name: "Houston",
        countryCode: "US",
        timezone: "US/Central",
        latitude: 29.7604,
        longitude: -95.3698
      },
      {
        name: "Dallas",
        countryCode: "US",
        timezone: "US/Central",
        latitude: 32.7767,
        longitude: -96.7970
      },
      {
        name: "Austin",
        countryCode: "US",
        timezone: "US/Central",
        latitude: 30.2672,
        longitude: -97.7431
      },
      {
        name: "San Antonio",
        countryCode: "US",
        timezone: "US/Central",
        latitude: 29.4241,
        longitude: -98.4936
      },
      {
        name: "Nashville",
        countryCode: "US",
        timezone: "US/Central",
        latitude: 36.1627,
        longitude: -86.7816
      },
      {
        name: "New Orleans",
        countryCode: "US",
        timezone: "US/Central",
        latitude: 29.9511,
        longitude: -90.0715
      },
      {
        name: "Kansas City",
        countryCode: "US",
        timezone: "US/Central",
        latitude: 39.0997,
        longitude: -94.5786
      },
      {
        name: "Denver",
        countryCode: "US",
        timezone: "US/Mountain",
        latitude: 39.7392,
        longitude: -104.9903
      },
      {
        name: "Phoenix",
        countryCode: "US",
        timezone: "US/Mountain",
        latitude: 33.4484,
        longitude: -112.0740
      },
      {
        name: "Salt Lake City",
        countryCode: "US",
        timezone: "US/Mountain",
        latitude: 40.7608,
        longitude: -111.8910
      },
      {
        name: "Albuquerque",
        countryCode: "US",
        timezone: "US/Mountain",
        latitude: 35.0841,
        longitude: -106.6504
      },
      {
        name: "Boise",
        countryCode: "US",
        timezone: "US/Mountain",
        latitude: 43.6150,
        longitude: -116.2023
      },
      {
        name: "Tucson",
        countryCode: "US",
        timezone: "US/Mountain",
        latitude: 32.2226,
        longitude: -110.9747
      },
      {
        name: "Colorado Springs",
        countryCode: "US",
        timezone: "US/Mountain",
        latitude: 38.8339,
        longitude: -104.8214
      },
      {
        name: "Cheyenne",
        countryCode: "US",
        timezone: "US/Mountain",
        latitude: 41.1400,
        longitude: -104.8202
      }
    ]
  },
  {
    name: "Uganda",
    code: "UG",
    cities: [
      {
        name: "Kampala",
        countryCode: "UG",
        timezone: "Africa/Kampala",
        latitude: 0.3136,
        longitude: 32.5810
      },
      {
        name: "Entebbe",
        countryCode: "UG",
        timezone: "Africa/Kampala",
        latitude: -0.0700,
        longitude: 32.4419
      },
      {
        name: "Mbale",
        countryCode: "UG",
        timezone: "Africa/Kampala",
        latitude: 1.0833,
        longitude: 34.1833
      },
      {
        name: "Jinja",
        countryCode: "UG",
        timezone: "Africa/Kampala",
        latitude: 0.4599,
        longitude: 33.2048
      },
      {
        name: "Mbarara",
        countryCode: "UG",
        timezone: "Africa/Kampala",
        latitude: -0.6500,
        longitude: 30.6500
      }
    ]
  },
  {
    name: "Ukraine",
    code: "UA",
    cities: [
      {
        name: "Kyiv",
        countryCode: "UA",
        timezone: "Europe/Kiev",
        latitude: 50.4501,
        longitude: 30.5245
      },
      {
        name: "Kharkiv",
        countryCode: "UA",
        timezone: "Europe/Kiev",
        latitude: 49.9935,
        longitude: 36.2304
      },
      {
        name: "Odesa",
        countryCode: "UA",
        timezone: "Europe/Kiev",
        latitude: 46.4825,
        longitude: 30.7326
      },
      {
        name: "Dnipro",
        countryCode: "UA",
        timezone: "Europe/Kiev",
        latitude: 48.4647,
        longitude: 35.0462
      },
      {
        name: "Donetsk",
        countryCode: "UA",
        timezone: "Europe/Kiev",
        latitude: 48.0159,
        longitude: 37.8028
      },
      {
        name: "Zaporizhzhia",
        countryCode: "UA",
        timezone: "Europe/Kiev",
        latitude: 47.8485,
        longitude: 35.1176
      },
      {
        name: "Lviv",
        countryCode: "UA",
        timezone: "Europe/Kiev",
        latitude: 49.8397,
        longitude: 24.0297
      }
    ]
  },
  {
    name: "United Arab Emirates",
    code: "AE",
    cities: [
      {
        name: "Abu Dhabi",
        countryCode: "AE",
        timezone: "Asia/Dubai",
        latitude: 24.4539,
        longitude: 54.3773
      },
      {
        name: "Dubai",
        countryCode: "AE",
        timezone: "Asia/Dubai",
        latitude: 25.276987,
        longitude: 55.296249
      },
      {
        name: "Sharjah",
        countryCode: "AE",
        timezone: "Asia/Dubai",
        latitude: 25.3546,
        longitude: 55.3852
      },
      {
        name: "Al Ain",
        countryCode: "AE",
        timezone: "Asia/Dubai",
        latitude: 24.1795,
        longitude: 55.7444
      },
      {
        name: "Ajman",
        countryCode: "AE",
        timezone: "Asia/Dubai",
        latitude: 25.4052,
        longitude: 55.5136
      },
      {
        name: "Fujairah",
        countryCode: "AE",
        timezone: "Asia/Dubai",
        latitude: 25.1280,
        longitude: 56.3269
      },
      {
        name: "Ras Al Khaimah",
        countryCode: "AE",
        timezone: "Asia/Dubai",
        latitude: 25.8007,
        longitude: 55.9763
      }
    ]
  },
  {
    name: "United Kingdom",
    code: "GB",
    cities: [
      {
        name: "London",
        countryCode: "GB",
        timezone: "Europe/London",
        latitude: 51.5074,
        longitude: -0.1278
      },
      {
        name: "Manchester",
        countryCode: "GB",
        timezone: "Europe/London",
        latitude: 53.4808,
        longitude: -2.2426
      },
      {
        name: "Birmingham",
        countryCode: "GB",
        timezone: "Europe/London",
        latitude: 52.4862,
        longitude: -1.8904
      },
      {
        name: "Liverpool",
        countryCode: "GB",
        timezone: "Europe/London",
        latitude: 53.4084,
        longitude: -2.9916
      },
      {
        name: "Glasgow",
        countryCode: "GB",
        timezone: "Europe/London",
        latitude: 55.8642,
        longitude: -4.2518
      },
      {
        name: "Edinburgh",
        countryCode: "GB",
        timezone: "Europe/London",
        latitude: 55.9533,
        longitude: -3.1883
      },
      {
        name: "Bristol",
        countryCode: "GB",
        timezone: "Europe/London",
        latitude: 51.4545,
        longitude: -2.5879
      }
    ]
  },
  {
    name: "Uruguay",
    code: "UY",
    cities: [
      {
        name: "Montevideo",
        countryCode: "UY",
        timezone: "America/Montevideo",
        latitude: -34.9011,
        longitude: -56.1645
      },
      {
        name: "Salto",
        countryCode: "UY",
        timezone: "America/Montevideo",
        latitude: -31.3909,
        longitude: -57.9605
      },
      {
        name: "Paysandu",
        countryCode: "UY",
        timezone: "America/Montevideo",
        latitude: -32.3214,
        longitude: -58.0744
      },
      {
        name: "Rivera",
        countryCode: "UY",
        timezone: "America/Montevideo",
        latitude: -30.9053,
        longitude: -55.5509
      },
      {
        name: "Maldonado",
        countryCode: "UY",
        timezone: "America/Montevideo",
        latitude: -34.9012,
        longitude: -54.9533
      },
      {
        name: "Ciudad de la Costa",
        countryCode: "UY",
        timezone: "America/Montevideo",
        latitude: -34.8683,
        longitude: -55.9851
      },
      {
        name: "Las Piedras",
        countryCode: "UY",
        timezone: "America/Montevideo",
        latitude: -34.8539,
        longitude: -56.2086
      }
    ]
  },
  {
    name: "Uzbekistan",
    code: "UZ",
    cities: [
      {
        name: "Tashkent",
        countryCode: "UZ",
        timezone: "Asia/Tashkent",
        latitude: 41.2995,
        longitude: 69.2401
      },
      {
        name: "Samarkand",
        countryCode: "UZ",
        timezone: "Asia/Samarkand",
        latitude: 39.6542,
        longitude: 66.9597
      },
      {
        name: "Bukhara",
        countryCode: "UZ",
        timezone: "Asia/Samarkand",
        latitude: 39.7736,
        longitude: 64.4248
      },
      {
        name: "Andijan",
        countryCode: "UZ",
        timezone: "Asia/Tashkent",
        latitude: 40.7775,
        longitude: 72.3453
      }
    ]
  },
  {
    name: "Vanuatu",
    code: "VU",
    cities: [
      {
        name: "Port Vila",
        countryCode: "VU",
        timezone: "Pacific/Efate",
        latitude: -17.7333,
        longitude: 168.3211
      },
      {
        name: "Luganville",
        countryCode: "VU",
        timezone: "Pacific/Efate",
        latitude: -15.5250,
        longitude: 167.1994
      },
      {
        name: "Norsup",
        countryCode: "VU",
        timezone: "Pacific/Efate",
        latitude: -15.3711,
        longitude: 167.9897
      },
      {
        name: "Isangel",
        countryCode: "VU",
        timezone: "Pacific/Efate",
        latitude: -19.5500,
        longitude: 169.2750
      },
      {
        name: "Sola",
        countryCode: "VU",
        timezone: "Pacific/Efate",
        latitude: -13.8667,
        longitude: 167.5500
      },
      {
        name: "Lenakel",
        countryCode: "VU",
        timezone: "Pacific/Efate",
        latitude: -19.5500,
        longitude: 169.2925
      }
    ]
  },
  {
    name: "Vatican City",
    code: "VA",
    cities: [
      {
        name: "Vatican City",
        countryCode: "VA",
        timezone: "Europe/Vatican",
        latitude: 41.9029,
        longitude: 12.4534
      }
    ]
  },
  {
    name: "Venezuela",
    code: "VE",
    cities: [
      {
        name: "Caracas",
        countryCode: "VE",
        timezone: "America/Caracas",
        latitude: 10.4903,
        longitude: -66.8792
      },
      {
        name: "Maracaibo",
        countryCode: "VE",
        timezone: "America/Caracas",
        latitude: 10.6543,
        longitude: -71.6250
      },
      {
        name: "Barquisimeto",
        countryCode: "VE",
        timezone: "America/Caracas",
        latitude: 10.0730,
        longitude: -69.3155
      },
      {
        name: "Maracay",
        countryCode: "VE",
        timezone: "America/Caracas",
        latitude: 10.2465,
        longitude: -67.5951
      }
    ]
  },
  {
    name: "Vietnam",
    code: "VN",
    cities: [
      {
        name: "Hanoi",
        countryCode: "VN",
        timezone: "Asia/Ho_Chi_Minh",
        latitude: 21.0285,
        longitude: 105.8542
      },
      {
        name: "Ho Chi Minh City",
        countryCode: "VN",
        timezone: "Asia/Ho_Chi_Minh",
        latitude: 10.8231,
        longitude: 106.6297
      },
      {
        name: "Da Nang",
        countryCode: "VN",
        timezone: "Asia/Ho_Chi_Minh",
        latitude: 16.0471,
        longitude: 108.2068
      },
      {
        name: "Haiphong",
        countryCode: "VN",
        timezone: "Asia/Ho_Chi_Minh",
        latitude: 20.8449,
        longitude: 106.6889
      },
      {
        name: "Can Tho",
        countryCode: "VN",
        timezone: "Asia/Ho_Chi_Minh",
        latitude: 10.0455,
        longitude: 105.7469
      },
      {
        name: "Bien Hoa",
        countryCode: "VN",
        timezone: "Asia/Ho_Chi_Minh",
        latitude: 10.9408,
        longitude: 106.8506
      }
    ]
  },
  {
    name: "Yemen",
    code: "YE",
    cities: [
      {
        name: "Sanaa",
        countryCode: "YE",
        timezone: "Asia/Aden",
        latitude: 15.3694,
        longitude: 44.1910
      },
      {
        name: "Aden",
        countryCode: "YE",
        timezone: "Asia/Aden",
        latitude: 12.7850,
        longitude: 45.0082
      },
      {
        name: "Taiz",
        countryCode: "YE",
        timezone: "Asia/Aden",
        latitude: 13.5791,
        longitude: 44.0203
      },
      {
        name: "Al Hudaydah",
        countryCode: "YE",
        timezone: "Asia/Aden",
        latitude: 14.7975,
        longitude: 42.9599
      },
      {
        name: "Al Mukalla",
        countryCode: "YE",
        timezone: "Asia/Aden",
        latitude: 14.5510,
        longitude: 49.1214
      }
    ]
  },
  {
    name: "Zambia",
    code: "ZM",
    cities: [
      {
        name: "Lusaka",
        countryCode: "ZM",
        timezone: "Africa/Lusaka",
        latitude: -15.3875,
        longitude: 28.3228
      },
      {
        name: "Kitwe",
        countryCode: "ZM",
        timezone: "Africa/Lusaka",
        latitude: -12.8050,
        longitude: 28.2053
      },
      {
        name: "Ndola",
        countryCode: "ZM",
        timezone: "Africa/Lusaka",
        latitude: -12.9628,
        longitude: 28.6343
      },
      {
        name: "Livingstone",
        countryCode: "ZM",
        timezone: "Africa/Lusaka",
        latitude: -17.8592,
        longitude: 25.8582
      },
      {
        name: "Chipata",
        countryCode: "ZM",
        timezone: "Africa/Lusaka",
        latitude: -13.6300,
        longitude: 32.6614
      }
    ]
  },
  {
    name: "Zimbabwe",
    code: "ZW",
    cities: [
      {
        name: "Harare",
        countryCode: "ZW",
        timezone: "Africa/Harare",
        latitude: -17.8292,
        longitude: 31.0522
      },
      {
        name: "Bulawayo",
        countryCode: "ZW",
        timezone: "Africa/Harare",
        latitude: -20.1419,
        longitude: 28.5834
      },
      {
        name: "Mutare",
        countryCode: "ZW",
        timezone: "Africa/Harare",
        latitude: -18.9704,
        longitude: 32.6614
      },
      {
        name: "Gweru",
        countryCode: "ZW",
        timezone: "Africa/Harare",
        latitude: -19.4586,
        longitude: 29.8139
      },
      {
        name: "Masvingo",
        countryCode: "ZW",
        timezone: "Africa/Harare",
        latitude: -20.0667,
        longitude: 30.8250
      }
    ]
  }
  // Add more countries
];