export interface City {
  [x: string]: any
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
  timezones: ["US/Eastern", "US/Pacific", "US/Central", "US/Mountain"],
  cities: {
    "US/Eastern": [
      { name: "New York", latitude: 40.7128, longitude: -74.006 },
      { name: "Miami", latitude: 25.7617, longitude: -80.1918 },
      { name: "Boston", latitude: 42.3584, longitude: -71.0596 },
      { name: "Atlanta", latitude: 33.749, longitude: -84.388 },
      { name: "Washington, D.C.", latitude: 38.9072, longitude: -77.0369 },
      { name: "Philadelphia", latitude: 39.9526, longitude: -75.1652 },
      { name: "Orlando", latitude: 28.5383, longitude: -81.3792 },
      { name: "Detroit", latitude: 42.3314, longitude: -83.0458 },
      { name: "Tampa", latitude: 27.9506, longitude: -82.4572 }
    ],
    "US/Pacific": [
      { name: "Los Angeles", latitude: 34.0522, longitude: -118.2437 },
      { name: "San Francisco", latitude: 37.7749, longitude: -122.4194 },
      { name: "Seattle", latitude: 47.6067, longitude: -122.3321 },
      { name: "San Diego", latitude: 32.7157, longitude: -117.1611 },
      { name: "Portland", latitude: 45.5152, longitude: -122.6784 },
      { name: "Las Vegas", latitude: 36.1699, longitude: -115.1398 },
      { name: "Sacramento", latitude: 38.5816, longitude: -121.4944 },
      { name: "San Jose", latitude: 37.3382, longitude: -121.8863 }
    ],
    "US/Central": [
      { name: "Chicago", latitude: 41.8781, longitude: -87.6298 },
      { name: "Houston", latitude: 29.7633, longitude: -95.3632 },
      { name: "Dallas", latitude: 32.7763, longitude: -96.7969 },
      { name: "Austin", latitude: 30.2672, longitude: -97.7431 },
      { name: "San Antonio", latitude: 29.4241, longitude: -98.4936 },
      { name: "Nashville", latitude: 36.1627, longitude: -86.7816 },
      { name: "New Orleans", latitude: 29.9511, longitude: -90.0715 },
      { name: "Kansas City", latitude: 39.0997, longitude: -94.5786 }
    ],
    "US/Mountain": [
      { name: "Denver", latitude: 39.7392, longitude: -104.9903 },
      { name: "Phoenix", latitude: 33.4484, longitude: -112.0739 },
      { name: "Salt Lake City", latitude: 40.7677, longitude: -111.8906 },
      { name: "Albuquerque", latitude: 35.0844, longitude: -106.6504 },
      { name: "Boise", latitude: 43.615, longitude: -116.2023 },
      { name: "Tucson", latitude: 32.2226, longitude: -110.9747 },
      { name: "Colorado Springs", latitude: 38.8339, longitude: -104.8214 }
    ]
  }
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
      { "name": "Riyadh", latitude: 24.7136, longitude: 46.6753 },
      { "name": "Jeddah", latitude: 21.4858, longitude: 39.1925 },
      { "name": "Mecca", latitude: 21.3891, longitude: 39.8579 },
      { "name": "Medina", latitude: 24.5247, longitude: 39.5692 },
      { "name": "Dammam", latitude: 26.4207, longitude: 50.0888 },
      { "name": "Tabuk", latitude: 28.3839, longitude: 36.5662 }
    ]
  }
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

  "Australia": {
    timezones: ["Australia/Sydney", "Australia/Adelaide", "Australia/Perth",
      "Australia/Melbourne", "Australia/Canberra", "Australia/Darwin", "Australia/Brisbane", "Australia/Hobart"],
    cities: {
      "Australia/Sydney": [
        { "name": "Sydney", latitude: -33.8688, longitude: 151.2093 },
        { "name": "Wollongong", latitude: -34.4278, longitude: 150.8931 },
        { "name": "Newcastle", latitude: -32.9267, longitude: 151.7803 },
        { "name": "Central Coast", latitude: -33.4236, longitude: 151.3422 },
        { "name": "Blue Mountains", latitude: -33.7146, longitude: 150.3111 }
      ],
      "Australia/Adelaide": [
        { "name": "Adelaide", latitude: -34.9285, longitude: 138.6007 },
        { "name": "Port Augusta", latitude: -32.4917, longitude: 137.7650 },
        { "name": "Mount Gambier", latitude: -37.8311, longitude: 140.7807 },
        { "name": "Whyalla", latitude: -33.0325, longitude: 137.5640 },
        { "name": "Port Pirie", latitude: -33.1916, longitude: 138.0164 }
      ],
      "Australia/Perth": [
        { "name": "Perth", latitude: -31.9505, longitude: 115.8605 },
        { "name": "Fremantle", latitude: -32.0569, longitude: 115.7439 },
        { "name": "Bunbury", latitude: -33.3271, longitude: 115.6399 },
        { "name": "Geraldton", latitude: -28.7743, longitude: 114.6141 },
        { "name": "Kalgoorlie", latitude: -30.7489, longitude: 121.4651 }
      ],
      "Australia/Melbourne": [
        { "name": "Melbourne", latitude: -37.8136, longitude: 144.9631 },
        { "name": "Geelong", latitude: -38.1499, longitude: 144.3617 },
        { "name": "Ballarat", latitude: -37.5622, longitude: 143.8503 },
        { "name": "Bendigo", latitude: -36.7570, longitude: 144.2787 },
        { "name": "Shepparton", latitude: -36.3805, longitude: 145.3985 }
      ],
      "Australia/Canberra": [
        { "name": "Canberra", latitude: -35.2809, longitude: 149.1300 },
        { "name": "Queanbeyan", latitude: -35.3548, longitude: 149.2341 },
        { "name": "Goulburn", latitude: -34.7518, longitude: 149.7209 },
        { "name": "Yass", latitude: -34.8392, longitude: 148.9137 },
        { "name": "Cooma", latitude: -36.2347, longitude: 149.1246 }
      ],
      "Australia/Darwin": [
        { "name": "Darwin", latitude: -12.4634, longitude: 130.8456 },
        { "name": "Alice Springs", latitude: -23.6980, longitude: 133.8807 },
        { "name": "Katherine", latitude: -14.4657, longitude: 132.2635 },
        { "name": "Tennant Creek", latitude: -19.6500, longitude: 134.1910 },
        { "name": "Nhulunbuy", latitude: -12.1806, longitude: 136.7803 }
      ],
      "Australia/Brisbane": [
        { "name": "Brisbane", latitude: -27.4698, longitude: 153.0251 },
        { "name": "Gold Coast", latitude: -28.0167, longitude: 153.4000 },
        { "name": "Toowoomba", latitude: -27.5598, longitude: 151.9507 },
        { "name": "Sunshine Coast", latitude: -26.6500, longitude: 153.0667 },
        { "name": "Cairns", latitude: -16.9186, longitude: 145.7781 }
      ],
      "Australia/Hobart": [
        { "name": "Hobart", latitude: -42.8821, longitude: 147.3272 },
        { "name": "Launceston", latitude: -41.4388, longitude: 147.1347 },
        { "name": "Devonport", latitude: -41.1790, longitude: 146.3551 },
        { "name": "Burnie", latitude: -41.0525, longitude: 145.9059 },
        { "name": "Kingston", latitude: -42.9700, longitude: 147.3026 }
      ]
    }
  },
  "Canada": {
    timezones: ["America/Toronto", "America/Edmonton", "America/Vancouver"],
    cities: {
      "America/Toronto": [
        { "name": "Toronto", latitude: 43.65107, longitude: -79.347015 },
        { "name": "Ottawa", latitude: 45.4215, longitude: -75.6972 },
        { "name": "Montreal", latitude: 45.5017, longitude: -73.5673 },
      ],
      "America/Edmonton": [
        { "name": "Edmonton", latitude: 53.5461, longitude: -113.4938 },
        { "name": "Red Deer", latitude: 52.2681, longitude: -113.8112 },
        { "name": "Grande Prairie", latitude: 55.1707, longitude: -118.7947 },
        { "name": "Lethbridge", latitude: 49.6935, longitude: -112.8418 },
        { "name": "Medicine Hat", latitude: 50.0405, longitude: -110.6765 },
        { "name": "Fort McMurray", latitude: 56.7268, longitude: -111.3801 }
      ],
      "America/Vancouver": [
        { "name": "Vancouver", latitude: 49.2827, longitude: -123.1207 },
        { "name": "Victoria", latitude: 48.4284, longitude: -123.3656 },
        { "name": "Kelowna", latitude: 49.888, longitude: -119.496 },
        { "name": "Surrey", latitude: 49.1044, longitude: -122.8011 },
        { "name": "Burnaby", latitude: 49.2488, longitude: -122.9805 },
        { "name": "Kamloops", latitude: 50.6745, longitude: -120.3273 }
      ]
    }
  },
  "Brazil": {
    timezones: ["America/Sao_Paulo"],
    cities: {
      "America/Sao_Paulo": [
        { "name": "Sao Paulo", latitude: -23.5505, longitude: -46.6333 },
        { "name": "Rio de Janeiro", latitude: -22.9068, longitude: -43.1729 },
        { "name": "Belo Horizonte", latitude: -19.9167, longitude: -43.9345 },
        { "name": "Curitiba", latitude: -25.4284, longitude: -49.2733 },
        { "name": "Campinas", latitude: -22.9056, longitude: -47.0608 },
        { "name": "Santos", latitude: -23.9608, longitude: -46.3339 },
        { "name": "Brasília", latitude: -15.8267, longitude: -47.9218 }
      ],
    }
  },
  "Russia": {
    timezones: ["Europe/Moscow", "Asia/Yekaterinburg", "Asia/Novosibirsk", "Asia/Vladivostok"],
    cities: {
      "Europe/Moscow": [
        { "name": "Moscow", latitude: 55.7558, longitude: 37.6173 },
        { "name": "Saint Petersburg", latitude: 59.9343, longitude: 30.3351 },
        { "name": "Kazan", latitude: 55.7903, longitude: 49.1347 }
      ],
      "Asia/Yekaterinburg": [
        { "name": "Yekaterinburg", latitude: 56.8389, longitude: 60.6057 },
        { "name": "Chelyabinsk", latitude: 55.1644, longitude: 61.4368 },
        { "name": "Tyumen", latitude: 57.1613, longitude: 65.525 },
      ],
      "Asia/Novosibirsk": [
        { "name": "Novosibirsk", latitude: 55.0084, longitude: 82.9357 },
        { "name": "Barnaul", latitude: 53.3481, longitude: 83.7798 },
        { "name": "Tomsk", latitude: 56.4847, longitude: 84.9484 }
      ],
      "Asia/Vladivostok": [
        { "name": "Vladivostok", latitude: 43.1155, longitude: 131.8855 },
        { "name": "Nakhodka", latitude: 42.8169, longitude: 132.8921 },
        { "name": "Ussuriysk", latitude: 43.8028, longitude: 131.9458 }
      ]
    }
  },
  "China": {
    timezones: ["Asia/Shanghai"],
    cities: {
      "Asia/Shanghai": [
        { name: "Shanghai", latitude: 31.2304, longitude: 121.4737 },
        { name: "Hangzhou", latitude: 30.2741, longitude: 120.1551 },
        { name: "Nanjing", latitude: 32.0603, longitude: 118.7969 },
        { name: "Suzhou", latitude: 31.2980, longitude: 120.5853 },
        { name: "Wuxi", latitude: 31.5700, longitude: 120.3119 },
        { name: "Qingdao", latitude: 36.0671, longitude: 120.3826 },
        { name: "Chongqing", latitude: 29.5630, longitude: 106.5516 },
        { name: "Beijing", latitude: 39.9042, longitude: 116.4074 },
      ],
    }
  },
  "India": {
    timezones: ["Asia/Kolkata"],
    cities: {
      "Asia/Kolkata": [
        { name: "Kolkata", latitude: 22.5726, longitude: 88.3639 },
        { name: "Mumbai", latitude: 19.0760, longitude: 72.8777 },
        { name: "Delhi", latitude: 28.6139, longitude: 77.2090 },
        { name: "Bangalore", latitude: 12.9716, longitude: 77.5946 },
        { name: "Chennai", latitude: 13.0827, longitude: 80.2707 },
        { name: "Hyderabad", latitude: 17.3850, longitude: 78.4867 },
        { name: "Pune", latitude: 18.5204, longitude: 73.8567 },
        { name: "Ahmedabad", latitude: 23.0225, longitude: 72.5714 },
        { name: "Surat", latitude: 21.1702, longitude: 72.8311 },
        { name: "Jaipur", latitude: 26.9124, longitude: 75.7873 },
        { name: "Lucknow", latitude: 26.8467, longitude: 80.9462 },
        { name: "Kanpur", latitude: 26.4499, longitude: 80.3319 },
        { name: "Nagpur", latitude: 21.1466, longitude: 79.0882 },
        { name: "Indore", latitude: 22.7196, longitude: 75.8577 },
        { name: "Vadodara", latitude: 22.3072, longitude: 73.1812 },
        { name: "Bhopal", latitude: 23.2599, longitude: 77.4126 },
        { name: "Patna", latitude: 25.5941, longitude: 85.1376 },
        { name: "Kochi", latitude: 9.9312, longitude: 76.2673 },
        { name: "Vishakhapatnam", latitude: 17.6869, longitude: 83.2185 },
        { name: "Ranchi", latitude: 23.3441, longitude: 85.3096 },
        { name: "Guwahati", latitude: 26.1445, longitude: 91.7362 },
        { name: "Chandigarh", latitude: 30.7333, longitude: 76.7794 },
        { name: "Noida", latitude: 28.5355, longitude: 77.3910 },
        { name: "Faridabad", latitude: 28.4089, longitude: 77.3167 },
        { name: "Amritsar", latitude: 31.6340, longitude: 74.8723 },
        { name: "Rajkot", latitude: 22.3039, longitude: 70.8022 },
        { name: "Udaipur", latitude: 24.5854, longitude: 73.7125 },
        { name: "Jammu", latitude: 32.7266, longitude: 74.8570 },
        { name: "Agra", latitude: 27.1767, longitude: 78.0081 }
      ]
    }
  },
  "Mexico": {
    timezones: ["America/Mexico_City", "America/Cancun", "America/Chihuahua", "America/Hermosillo"],
    cities: {
      "America/Mexico_City": [
        { "name": "Mexico City", latitude: 19.4326, longitude: -99.1332 },
        { "name": "Guadalajara", latitude: 20.6597, longitude: -103.3496 },
        { "name": "Monterrey", latitude: 25.6767, longitude: -100.3180 },
        { "name": "Puebla", latitude: 19.0414, longitude: -98.2063 },
        { "name": "Toluca", latitude: 19.2826, longitude: -99.6538 },
        { "name": "Leon", latitude: 21.1228, longitude: -101.6869 }
      ],
      "America/Cancun": [
        { "name": "Cancun", latitude: 21.1743, longitude: -86.8466 },
        { "name": "Playa del Carmen", latitude: 20.6296, longitude: -87.0731 },
        { "name": "Tulum", latitude: 20.2113, longitude: -87.4658 },
        { "name": "Cozumel", latitude: 20.5100, longitude: -86.9470 },
        { "name": "Isla Holbox", latitude: 21.5324, longitude: -87.5207 },
        { "name": "Akumal", latitude: 20.4306, longitude: -87.2897 }
      ],
      "America/Chihuahua": [
        { "name": "Chihuahua", latitude: 28.6325, longitude: -106.0691 },
        { "name": "Ciudad Juarez", latitude: 31.7333, longitude: -106.4875 },
        { "name": "Delicias", latitude: 27.4394, longitude: -105.9350 },
        { "name": "Camargo", latitude: 27.6342, longitude: -105.3213 },
        { "name": "Cuauhtémoc", latitude: 28.4141, longitude: -106.8744 },
        { "name": "Parral", latitude: 26.9333, longitude: -105.6667 }
      ],
      "America/Hermosillo": [
        { "name": "Hermosillo", latitude: 29.072967, longitude: -110.955919 },
        { "name": "Nogales", latitude: 31.2994, longitude: -110.9398 },
        { "name": "San Luis Río Colorado", latitude: 32.4822, longitude: -113.0789 },
        { "name": "Agua Prieta", latitude: 31.3234, longitude: -109.5486 },
        { "name": "Cananea", latitude: 30.3034, longitude: -110.0811 },
        { "name": "Puerto Peñasco", latitude: 31.3200, longitude: -113.5281 }
      ]
    }
  },
  "Indonesia": {
    timezones: ["Asia/Jakarta"],
    cities: {
      "Asia/Jakarta": [
        { "name": "Jakarta", latitude: -6.2088, longitude: 106.8456 },
        { "name": "Bandung", latitude: -6.9175, longitude: 107.6191 },
        { "name": "Surabaya", latitude: -7.2504, longitude: 112.7688 }
      ],
    }
  },
  "Argentina": {
    timezones: ["America/Argentina/Buenos_Aires", "America/Argentina/Cordoba", "America/Argentina/Salta",
      "America/Argentina/Ushuaia"],
    cities: {
      "America/Argentina/Buenos_Aires": [
        { "name": "Buenos Aires", latitude: -34.6037, longitude: -58.3816 },
        { "name": "La Plata", latitude: -34.9206, longitude: -57.9563 },
        { "name": "Mar del Plata", latitude: -38.0023, longitude: -57.5572 }
      ],
      "America/Argentina/Cordoba": [
        { "name": "Cordoba", latitude: -31.4201, longitude: -64.1888 },
        { "name": "Villa Maria", latitude: -32.4116, longitude: -63.2416 },
        { "name": "Rio Cuarto", latitude: -33.1344, longitude: -64.3505 }
      ],
      "America/Argentina/Salta": [
        { "name": "Salta", latitude: -24.7821, longitude: -65.4115 },
        { "name": "San Salvador de Jujuy", latitude: -24.1853, longitude: -65.2990 },
        { "name": "Tartagal", latitude: -23.8437, longitude: -63.7884 }
      ],
      "America/Argentina/Ushuaia": [
        { "name": "Ushuaia", latitude: -54.8019, longitude: -68.3030 },
        { "name": "Rio Grande", latitude: -53.7732, longitude: -67.7034 },
        { "name": "Tolhuin", latitude: -54.5200, longitude: -67.3500 }
      ]
    }
  },
  "South Africa": {
    timezones: ["Africa/Johannesburg"],
    cities: {
      "Africa/Johannesburg": [
        { "name": "Johannesburg", latitude: -26.2041, longitude: 28.0473 },
        { "name": "Cape Town", latitude: -33.9249, longitude: 18.4241 },
        { "name": "Durban", latitude: -29.8587, longitude: 31.0218 },
        { "name": "Pretoria", latitude: -25.7479, longitude: 28.2293 },
        { "name": "Port Elizabeth", latitude: -33.9608, longitude: 25.6022 },
        { "name": "Bloemfontein", latitude: -29.0852, longitude: 26.1596 }
      ]
    }
  },
  "France": {
    timezones: ["Europe/Paris"],
    cities: {
      "Europe/Paris": [
        { "name": "Paris", latitude: 48.8566, longitude: 2.3522 },
        { "name": "Marseille", latitude: 43.2965, longitude: 5.3698 },
        { "name": "Lyon", latitude: 45.7640, longitude: 4.8357 },
        { "name": "Toulouse", latitude: 43.6047, longitude: 1.4442 },
        { "name": "Nice", latitude: 43.7102, longitude: 7.2620 },
        { "name": "Nantes", latitude: 47.2184, longitude: -1.5536 },
        { "name": "Strasbourg", latitude: 48.5734, longitude: 7.7521 }
      ]
    }
  },
  "Germany": {
    timezones: ["Europe/Berlin"],
    cities: {
      "Europe/Berlin": [
        { "name": "Berlin", latitude: 52.5200, longitude: 13.4050 },
        { "name": "Hamburg", latitude: 53.5511, longitude: 9.9937 },
        { "name": "Munich", latitude: 48.1351, longitude: 11.5820 },
        { "name": "Cologne", latitude: 50.9375, longitude: 6.9603 },
        { "name": "Frankfurt", latitude: 50.1109, longitude: 8.6821 },
        { "name": "Stuttgart", latitude: 48.7758, longitude: 9.1829 },
        { "name": "Düsseldorf", latitude: 51.2277, longitude: 6.7735 }
      ]
    }
  },
  "Italy": {
    timezones: ["Europe/Rome"],
    cities: {
      "Europe/Rome": [
        { "name": "Rome", latitude: 41.9028, longitude: 12.4964 },
        { "name": "Milan", latitude: 45.4642, longitude: 9.1900 },
        { "name": "Naples", latitude: 40.8518, longitude: 14.2681 },
        { "name": "Turin", latitude: 45.0703, longitude: 7.6869 },
        { "name": "Palermo", latitude: 38.1157, longitude: 13.3615 },
        { "name": "Genoa", latitude: 44.4056, longitude: 8.9463 },
        { "name": "Bologna", latitude: 44.4949, longitude: 11.3426 }
      ]
    }
  },
  "Spain": {
    timezones: ["Europe/Madrid"],
    cities: {
      "Europe/Madrid": [
        { "name": "Madrid", latitude: 40.4168, longitude: -3.7038 },
        { "name": "Barcelona", latitude: 41.3851, longitude: 2.1734 },
        { "name": "Valencia", latitude: 39.4699, longitude: -0.3763 },
        { "name": "Seville", latitude: 37.3891, longitude: -5.9845 },
        { "name": "Zaragoza", latitude: 41.6488, longitude: -0.8891 },
        { "name": "Málaga", latitude: 36.7213, longitude: -4.4215 },
        { "name": "Murcia", latitude: 37.9922, longitude: -1.1307 }
      ]
    }
  },
  "Turkey": {
    timezones: ["Europe/Istanbul"],
    cities: {
      "Europe/Istanbul": [
        { "name": "Istanbul", latitude: 41.0082, longitude: 28.9784 },
        { "name": "Ankara", latitude: 39.9334, longitude: 32.8597 },
        { "name": "Izmir", latitude: 38.4192, longitude: 27.1287 },
        { "name": "Bursa", latitude: 40.1826, longitude: 29.0671 },
        { "name": "Adana", latitude: 37.0015, longitude: 35.3283 },
        { "name": "Gaziantep", latitude: 37.0662, longitude: 37.3833 },
        { "name": "Konya", latitude: 37.8715, longitude: 32.4846 }
      ]
    }
  },
  "South Korea": {
    timezones: ["Asia/Seoul"],
    cities: {
      "Asia/Seoul": [
        { "name": "Seoul", latitude: 37.5665, longitude: 126.9780 },
        { "name": "Busan", latitude: 35.1796, longitude: 129.0756 },
        { "name": "Incheon", latitude: 37.4563, longitude: 126.7052 },
        { "name": "Daegu", latitude: 35.8714, longitude: 128.6014 },
        { "name": "Daejeon", latitude: 36.3504, longitude: 127.3845 },
        { "name": "Gwangju", latitude: 35.1595, longitude: 126.8526 },
        { "name": "Suwon", latitude: 37.2636, longitude: 127.0286 }
      ]
    }
  },
  "Japan": {
    timezones: ["Asia/Tokyo"],
    cities: {
      "Asia/Tokyo": [
        { "name": "Tokyo", latitude: 35.6895, longitude: 139.6917 },
        { "name": "Yokohama", latitude: 35.4437, longitude: 139.6380 },
        { "name": "Osaka", latitude: 34.6937, longitude: 135.5023 },
        { "name": "Nagoya", latitude: 35.1815, longitude: 136.9066 },
        { "name": "Sapporo", latitude: 43.0618, longitude: 141.3545 },
        { "name": "Fukuoka", latitude: 33.5904, longitude: 130.4017 }
      ]
    }
  },
  "Vietnam": {
    timezones: ["Asia/Ho_Chi_Minh"],
    cities: {
      "Asia/Ho_Chi_Minh": [
        { "name": "Ho Chi Minh City", latitude: 10.8231, longitude: 106.6297 },
        { "name": "Hanoi", latitude: 21.0278, longitude: 105.8342 },
        { "name": "Haiphong", latitude: 20.8449, longitude: 106.6881 },
        { "name": "Da Nang", latitude: 16.0544, longitude: 108.2022 },
        { "name": "Can Tho", latitude: 10.0458, longitude: 105.7469 },
        { "name": "Bien Hoa", latitude: 10.9447, longitude: 106.8243 }
      ]
    }
  },
  "Philippines": {
    timezones: ["Asia/Manila"],
    cities: {
      "Asia/Manila": [
        { "name": "Manila", latitude: 14.5995, longitude: 120.9842 },
        { "name": "Quezon City", latitude: 14.6760, longitude: 121.0437 },
        { "name": "Davao City", latitude: 7.1907, longitude: 125.4553 },
        { "name": "Cebu City", latitude: 10.3157, longitude: 123.8854 },
        { "name": "Zamboanga City", latitude: 6.9214, longitude: 122.0790 },
        { "name": "General Santos", latitude: 6.1164, longitude: 125.1716 },
        { "name": "Taguig", latitude: 14.5176, longitude: 121.0509 }
      ]
    }
  },
  "Thailand": {
    timezones: ["Asia/Bangkok"],
    cities: {
      "Asia/Bangkok": [
        { "name": "Bangkok", latitude: 13.7563, longitude: 100.5018 },
        { "name": "Chiang Mai", latitude: 18.7061, longitude: 98.9817 },
        { "name": "Pattaya", latitude: 12.9276, longitude: 100.8777 },
        { "name": "Phuket", latitude: 7.8804, longitude: 98.3923 },
        { "name": "Hua Hin", latitude: 12.5684, longitude: 99.9577 },
        { "name": "Nonthaburi", latitude: 13.8591, longitude: 100.5148 },
        { "name": "Udon Thani", latitude: 17.4157, longitude: 102.7850 }
      ]
    }
  },
  "Malaysia": {
    timezones: ["Asia/Kuala_Lumpur"],
    cities: {
      "Asia/Kuala_Lumpur": [
        { "name": "Kuala Lumpur", latitude: 3.1390, longitude: 101.6869 },
        { "name": "George Town", latitude: 5.4149, longitude: 100.3298 },
        { "name": "Ipoh", latitude: 4.5975, longitude: 101.0901 },
        { "name": "Kuching", latitude: 1.5495, longitude: 110.3632 },
        { "name": "Johor Bahru", latitude: 1.4927, longitude: 103.7414 },
        { "name": "Kota Kinabalu", latitude: 5.9804, longitude: 116.0735 },
        { "name": "Shah Alam", latitude: 3.0738, longitude: 101.5183 }
      ]
    }
  },
  "United Arab Emirates": {
    timezones: ["Asia/Dubai"],
    cities: {
      "Asia/Dubai": [
        { "name": "Dubai", latitude: 25.276987, longitude: 55.296249 },
        { "name": "Abu Dhabi", latitude: 24.4539, longitude: 54.3773 },
        { "name": "Sharjah", latitude: 25.3463, longitude: 55.4209 },
        { "name": "Al Ain", latitude: 24.1302, longitude: 55.8023 },
        { "name": "Ajman", latitude: 25.4052, longitude: 55.5136 },
        { "name": "Ras Al Khaimah", latitude: 25.6743, longitude: 55.9802 },
        { "name": "Fujairah", latitude: 25.2854, longitude: 56.3560 }
      ]
    }
  },
  "United Kingdom": {
    timezones: ["Europe/London"],
    cities: {
      "Europe/London": [
        { "name": "London", latitude: 51.5074, longitude: -0.1278 },
        { "name": "Birmingham", latitude: 52.4862, longitude: -1.8904 },
        { "name": "Manchester", latitude: 53.4808, longitude: -2.2426 },
        { "name": "Glasgow", latitude: 55.8642, longitude: -4.2518 },
        { "name": "Liverpool", latitude: 53.4084, longitude: -2.9916 },
        { "name": "Edinburgh", latitude: 55.9533, longitude: -3.1883 },
        { "name": "Bristol", latitude: 51.4545, longitude: -2.5879 }
      ]
    }
  },
  "New Zealand": {
    timezones: ["Pacific/Auckland"],
    cities: {
      "Pacific/Auckland": [
        { "name": "Auckland", latitude: -36.8485, longitude: 174.7633 },
        { "name": "Wellington", latitude: -41.2865, longitude: 174.7762 },
        { "name": "Christchurch", latitude: -43.5321, longitude: 172.6362 },
        { "name": "Hamilton", latitude: -37.7870, longitude: 175.2793 },
        { "name": "Tauranga", latitude: -37.6878, longitude: 176.1651 },
        { "name": "Dunedin", latitude: -45.8788, longitude: 170.5028 },
        { "name": "Palmerston North", latitude: -40.3523, longitude: 175.6082 }
      ]
    }
  },
  "Nigeria": {
    timezones: ["Africa/Lagos"],
    cities: {
      "Africa/Lagos": [
        { "name": "Lagos", latitude: 6.5244, longitude: 3.3792 },
        { "name": "Kano", latitude: 12.0022, longitude: 8.5919 },
        { "name": "Ibadan", latitude: 7.3775, longitude: 3.9470 },
        { "name": "Kaduna", latitude: 10.5167, longitude: 7.4333 },
        { "name": "Port Harcourt", latitude: 4.8156, longitude: 7.0498 },
        { "name": "Benin City", latitude: 6.3350, longitude: 5.6037 },
        { "name": "Maiduguri", latitude: 11.8469, longitude: 13.1576 }
      ]
    }
  },
  "Poland": {
    timezones: ["Europe/Warsaw"],
    cities: {
      "Europe/Warsaw": [
        { "name": "Warsaw", latitude: 52.2297, longitude: 21.0122 },
        { "name": "Kraków", latitude: 50.0647, longitude: 19.9450 },
        { "name": "Łódź", latitude: 51.7592, longitude: 19.4554 },
        { "name": "Wrocław", latitude: 51.1079, longitude: 17.0385 },
        { "name": "Poznań", latitude: 52.4064, longitude: 16.9252 },
        { "name": "Gdańsk", latitude: 54.3520, longitude: 18.6466 },
        { "name": "Szczecin", latitude: 53.4285, longitude: 14.5528 }
      ]
    }
  },
  "Sweden": {
    timezones: ["Europe/Stockholm"],
    cities: {
      "Europe/Stockholm": [
        { "name": "Stockholm", latitude: 59.3293, longitude: 18.0686 },
        { "name": "Gothenburg", latitude: 57.7089, longitude: 11.9746 },
        { "name": "Malmö", latitude: 55.6044, longitude: 13.0038 },
        { "name": "Uppsala", latitude: 59.8586, longitude: 17.6389 },
        { "name": "Västerås", latitude: 59.6168, longitude: 16.5528 },
        { "name": "Örebro", latitude: 59.2753, longitude: 15.2134 }
      ]
    }
  },
  "Switzerland": {
    timezones: ["Europe/Zurich"],
    cities: {
      "Europe/Zurich": [
        { "name": "Zurich", latitude: 47.3769, longitude: 8.5417 },
        { "name": "Geneva", latitude: 46.2044, longitude: 6.1432 },
        { "name": "Basel", latitude: 47.5596, longitude: 7.5886 },
        { "name": "Lausanne", latitude: 46.5197, longitude: 6.6323 },
        { "name": "Bern", latitude: 46.9479, longitude: 7.4446 }
      ]
    }
  },
  "Singapore": {
    timezones: ["Asia/Singapore"],
    cities: {
      "Asia/Singapore": [
        { "name": "Singapore", latitude: 1.3521, longitude: 103.8198 }
      ]
    }
  },
  "Afghanistan": {
    timezones: ["Asia/Kabul"],
    cities: {
      "Asia/Kabul": [
        { "name": "Kabul", latitude: 34.5553, longitude: 69.2075 },
        { "name": "Kandahar", latitude: 31.6355, longitude: 65.7282 },
        { "name": "Herat", latitude: 34.3416, longitude: 62.2031 },
        { "name": "Mazar-i-Sharif", latitude: 36.7069, longitude: 67.1122 },
        { "name": "Kunduz", latitude: 36.7289, longitude: 68.8570 },
        { "name": "Jalalabad", latitude: 34.4265, longitude: 70.4515 },
        { "name": "Lashkar Gah", latitude: 31.5825, longitude: 64.3580 }
      ]
    }
  },
  "Albania": {
    timezones: ["Europe/Tirane"],
    cities: {
      "Europe/Tirane": [
        { "name": "Tirana", latitude: 41.3275, longitude: 19.8187 },
        { "name": "Durrës", latitude: 41.3236, longitude: 19.4416 },
        { "name": "Vlorë", latitude: 40.4667, longitude: 19.4833 },
        { "name": "Shkodër", latitude: 42.0685, longitude: 19.5188 },
        { "name": "Fier", latitude: 40.7206, longitude: 19.5561 },
        { "name": "Korçë", latitude: 40.6186, longitude: 20.7800 },
        { "name": "Berat", latitude: 40.7058, longitude: 19.9524 }
      ]
    }
  },
  "Algeria": {
    timezones: ["Africa/Algiers"],
    cities: {
      "Africa/Algiers": [
        { "name": "Algiers", latitude: 36.7372, longitude: 3.0408 },
        { "name": "Oran", latitude: 35.6971, longitude: -0.6308 },
        { "name": "Constantine", latitude: 36.3650, longitude: 6.6147 },
        { "name": "Annaba", latitude: 36.9039, longitude: 7.7322 },
        { "name": "Batna", latitude: 35.5559, longitude: 6.1742 },
        { "name": "Sétif", latitude: 36.1904, longitude: 5.4136 },
        { "name": "Sidi Bel Abbès", latitude: 35.1939, longitude: -0.6417 }
      ]
    }
  },
  "Angola": {
    timezones: ["Africa/Luanda"],
    cities: {
      "Africa/Luanda": [
        { "name": "Luanda", latitude: -8.8390, longitude: 13.2894 },
        { "name": "Huambo", latitude: -12.7761, longitude: 15.7392 },
        { "name": "Lobito", latitude: -12.3481, longitude: 13.5455 },
        { "name": "Benguela", latitude: -12.5763, longitude: 13.4055 },
        { "name": "Kuito", latitude: -12.3833, longitude: 16.9333 },
        { "name": "Lubango", latitude: -14.9176, longitude: 13.4925 },
        { "name": "Malanje", latitude: -9.5402, longitude: 16.3418 }
      ]
    }
  },
  "Armenia": {
    timezones: ["Asia/Yerevan"],
    cities: {
      "Asia/Yerevan": [
        { "name": "Yerevan", latitude: 40.1872, longitude: 44.5152 },
        { "name": "Gyumri", latitude: 40.7942, longitude: 43.8458 },
        { "name": "Vanadzor", latitude: 40.8128, longitude: 44.4884 },
        { "name": "Vagharshapat", latitude: 40.1596, longitude: 44.2944 },
        { "name": "Hrazdan", latitude: 40.4942, longitude: 44.7658 },
        { "name": "Abovyan", latitude: 40.2697, longitude: 44.6289 },
        { "name": "Kapan", latitude: 39.2078, longitude: 46.4056 }
      ]
    }
  },
  "Azerbaijan": {
    timezones: ["Asia/Baku"],
    cities: {
      "Asia/Baku": [
        { "name": "Baku", latitude: 40.4093, longitude: 49.8671 },
        { "name": "Ganja", latitude: 40.6828, longitude: 46.3606 },
        { "name": "Sumqayit", latitude: 40.5897, longitude: 49.6680 },
        { "name": "Mingachevir", latitude: 40.7708, longitude: 47.0488 },
        { "name": "Lankaran", latitude: 38.7543, longitude: 48.8516 },
        { "name": "Shirvan", latitude: 40.8146, longitude: 49.7464 },
        { "name": "Nakhchivan", latitude: 39.2089, longitude: 45.4122 }
      ]
    }
  },
  "Bahrain": {
    timezones: ["Asia/Bahrain"],
    cities: {
      "Asia/Bahrain": [
        { "name": "Manama", latitude: 26.2285, longitude: 50.5860 },
        { "name": "Riffa", latitude: 26.1234, longitude: 50.5524 },
        { "name": "Muharraq", latitude: 26.2574, longitude: 50.6119 },
        { "name": "Hamad Town", latitude: 26.1531, longitude: 50.5479 },
        { "name": "A'ali", latitude: 26.1531, longitude: 50.5479 },
        { "name": "Isa Town", latitude: 26.1733, longitude: 50.5477 },
        { "name": "Sitra", latitude: 26.1547, longitude: 50.6206 }
      ]
    }
  },
  "Bangladesh": {
    timezones: ["Asia/Dhaka"],
    cities: {
      "Asia/Dhaka": [
        { "name": "Dhaka", latitude: 23.8103, longitude: 90.4125 },
        { "name": "Chittagong", latitude: 22.3569, longitude: 91.7832 },
        { "name": "Khulna", latitude: 22.8456, longitude: 89.5403 },
        { "name": "Rajshahi", latitude: 24.3636, longitude: 88.6241 },
        { "name": "Comilla", latitude: 23.4682, longitude: 91.1782 },
        { "name": "Tongi", latitude: 23.8898, longitude: 90.4055 },
        { "name": "Narayanganj", latitude: 23.6337, longitude: 90.4963 }
      ]
    }
  },
  "Belarus": {
    timezones: ["Europe/Minsk"],
    cities: {
      "Europe/Minsk": [
        { "name": "Minsk", latitude: 53.9045, longitude: 27.5615 },
        { "name": "Gomel", latitude: 52.4453, longitude: 30.9840 },
        { "name": "Mogilev", latitude: 53.9023, longitude: 30.3378 },
        { "name": "Vitebsk", latitude: 55.1904, longitude: 30.2049 },
        { "name": "Hrodna", latitude: 53.6884, longitude: 23.8258 },
        { "name": "Brest", latitude: 52.0976, longitude: 23.7341 },
        { "name": "Bobruisk", latitude: 53.1500, longitude: 29.2333 }
      ]
    }
  },
  "Belgium": {
    timezones: ["Europe/Brussels"],
    cities: {
      "Europe/Brussels": [
        { "name": "Brussels", latitude: 50.8503, longitude: 4.3517 },
        { "name": "Antwerp", latitude: 51.2194, longitude: 4.4025 },
        { "name": "Ghent", latitude: 51.0543, longitude: 3.7174 },
        { "name": "Charleroi", latitude: 50.4108, longitude: 4.4446 },
        { "name": "Liège", latitude: 50.6326, longitude: 5.5797 },
        { "name": "Bruges", latitude: 51.2093, longitude: 3.2247 },
        { "name": "Namur", latitude: 50.4669, longitude: 4.8675 }
      ]
    }
  },
  "Bulgaria": {
    timezones: ["Europe/Sofia"],
    cities: {
      "Europe/Sofia": [
        { "name": "Sofia", latitude: 42.6977, longitude: 23.3219 },
        { "name": "Plovdiv", latitude: 42.1354, longitude: 24.7453 },
        { "name": "Varna", latitude: 43.2047, longitude: 27.9116 },
        { "name": "Burgas", latitude: 42.5048, longitude: 27.4626 },
        { "name": "Ruse", latitude: 43.8486, longitude: 25.9531 },
        { "name": "Stara Zagora", latitude: 42.4247, longitude: 25.6256 },
        { "name": "Pleven", latitude: 43.4169, longitude: 24.6065 }
      ]
    }
  },
  "Israel": {
    timezones: ["Asia/Jerusalem"],
    cities: {
      "Asia/Jerusalem": [
        { "name": "Jerusalem", latitude: 31.7683, longitude: 35.2137 },
        { "name": "Tel Aviv", latitude: 32.0853, longitude: 34.7818 },
        { "name": "Haifa", latitude: 32.7940, longitude: 34.9896 },
        { "name": "Rishon LeZion", latitude: 31.9730, longitude: 34.7925 },
        { "name": "Petah Tikva", latitude: 32.0871, longitude: 34.8878 },
        { "name": "Ashdod", latitude: 31.8044, longitude: 34.6553 },
        { "name": "Netanya", latitude: 32.3215, longitude: 34.8532 }
      ]
    },
  },
  "Netherlands": {
    timezones: ["Europe/Amsterdam"],
    cities: {
      "Europe/Amsterdam": [
        { "name": "Amsterdam", latitude: 52.3676, longitude: 4.9041 },
        { "name": "Rotterdam", latitude: 51.9225, longitude: 4.4792 },
        { "name": "The Hague", latitude: 52.0705, longitude: 4.3007 },
        { "name": "Utrecht", latitude: 52.0907, longitude: 5.1214 },
        { "name": "Eindhoven", latitude: 51.4416, longitude: 5.4697 },
        { "name": "Tilburg", latitude: 51.5555, longitude: 5.0913 },
        { "name": "Groningen", latitude: 53.2194, longitude: 6.5665 }
      ]
    }
  },
  "Norway": {
    timezones: ["Europe/Oslo"],
    cities: {
      "Europe/Oslo": [
        { "name": "Oslo", latitude: 59.9139, longitude: 10.7522 },
        { "name": "Bergen", latitude: 60.3913, longitude: 5.3221 },
        { "name": "Stavanger", latitude: 58.9690, longitude: 5.7331 },
        { "name": "Trondheim", latitude: 63.4305, longitude: 10.3951 },
        { "name": "Fredrikstad", latitude: 59.2181, longitude: 10.9295 },
        { "name": "Kristiansand", latitude: 58.1462, longitude: 7.9956 }
      ]
    }
  },
  "Denmark": {
    timezones: ["Europe/Copenhagen"],
    cities: {
      "Europe/Copenhagen": [
        { "name": "Copenhagen", latitude: 55.6761, longitude: 12.5683 },
        { "name": "Aarhus", latitude: 56.1629, longitude: 10.2039 },
        { "name": "Odense", latitude: 55.4038, longitude: 10.4024 },
        { "name": "Aalborg", latitude: 57.0488, longitude: 9.9217 },
        { "name": "Esbjerg", latitude: 55.4667, longitude: 8.4500 },
        { "name": "Randers", latitude: 56.4602, longitude: 10.0360 },
        { "name": "Kolding", latitude: 55.4904, longitude: 9.4722 }
      ]
    }
  },
  "Finland": {
    timezones: ["Europe/Helsinki"],
    cities: {
      "Europe/Helsinki": [
        { "name": "Helsinki", latitude: 60.1695, longitude: 24.9354 },
        { "name": "Espoo", latitude: 60.2055, longitude: 24.6559 },
        { "name": "Tampere", latitude: 61.4978, longitude: 23.7610 },
        { "name": "Vantaa", latitude: 60.3092, longitude: 25.0362 },
        { "name": "Oulu", latitude: 65.0121, longitude: 25.4651 },
        { "name": "Turku", latitude: 60.4518, longitude: 22.2666 },
        { "name": "Jyväskylä", latitude: 62.2426, longitude: 25.7473 }
      ]
    }
  },
  "Greece": {
    timezones: ["Europe/Athens"],
    cities: {
      "Europe/Athens": [
        { "name": "Athens", latitude: 37.9838, longitude: 23.7275 },
        { "name": "Thessaloniki", latitude: 40.6401, longitude: 22.9444 },
        { "name": "Patras", latitude: 38.2466, longitude: 21.7346 },
        { "name": "Heraklion", latitude: 35.3387, longitude: 25.1442 },
        { "name": "Larissa", latitude: 39.6376, longitude: 22.4203 },
        { "name": "Volos", latitude: 39.3622, longitude: 22.9424 },
        { "name": "Rhodes", latitude: 36.4346, longitude: 28.2176 }
      ]
    }
  },
  "Croatia": {
    timezones: ["Europe/Zagreb"],
    cities: {
      "Europe/Zagreb": [
        { "name": "Zagreb", latitude: 45.8150, longitude: 15.9819 },
        { "name": "Split", latitude: 43.5081, longitude: 16.4402 },
        { "name": "Rijeka", latitude: 45.3271, longitude: 14.4422 },
        { "name": "Osijek", latitude: 45.5511, longitude: 18.6939 },
        { "name": "Zadar", latitude: 44.1194, longitude: 15.2314 },
        { "name": "Slavonski Brod", latitude: 45.1603, longitude: 18.0156 },
        { "name": "Pula", latitude: 44.8683, longitude: 13.8481 }
      ]
    }
  },
  "Hungary": {
    timezones: ["Europe/Budapest"],
    cities: {
      "Europe/Budapest": [
        { "name": "Budapest", latitude: 47.4979, longitude: 19.0402 },
        { "name": "Debrecen", latitude: 47.5316, longitude: 21.6273 },
        { "name": "Szeged", latitude: 46.2530, longitude: 20.1414 },
        { "name": "Miskolc", latitude: 48.1035, longitude: 20.7784 },
        { "name": "Pécs", latitude: 46.0727, longitude: 18.2323 },
        { "name": "Győr", latitude: 47.6875, longitude: 17.6504 },
        { "name": "Nyíregyháza", latitude: 47.9556, longitude: 21.7168 }
      ]
    }
  },
  "Ireland": {
    timezones: ["Europe/Dublin"],
    cities: {
      "Europe/Dublin": [
        { "name": "Dublin", latitude: 53.3498, longitude: -6.2603 },
        { "name": "Cork", latitude: 51.8969, longitude: -8.4863 },
        { "name": "Limerick", latitude: 52.6680, longitude: -8.6305 },
        { "name": "Galway", latitude: 53.2707, longitude: -9.0568 },
        { "name": "Waterford", latitude: 52.2593, longitude: -7.1101 },
        { "name": "Drogheda", latitude: 53.7179, longitude: -6.3568 },
        { "name": "Dundalk", latitude: 54.0000, longitude: -6.4167 }
      ]
    }
  },
  "Austria": {
    timezones: ["Europe/Vienna"],
    cities: {
      "Europe/Vienna": [
        { "name": "Vienna", latitude: 48.2082, longitude: 16.3738 },
        { "name": "Graz", latitude: 47.0707, longitude: 15.4395 },
        { "name": "Linz", latitude: 48.3069, longitude: 14.2858 },
        { "name": "Salzburg", latitude: 47.8095, longitude: 13.0550 },
        { "name": "Innsbruck", latitude: 47.2692, longitude: 11.4041 },
        { "name": "Klagenfurt", latitude: 46.6247, longitude: 14.3053 },
        { "name": "Villach", latitude: 46.6103, longitude: 13.8550 }
      ]
    }
  },
  "Portugal": {
    timezones: ["Europe/Lisbon"],
    cities: {
      "Europe/Lisbon": [
        { "name": "Lisbon", latitude: 38.7223, longitude: -9.1393 },
        { "name": "Porto", latitude: 41.1579, longitude: -8.6291 },
        { "name": "Vila Nova de Gaia", latitude: 41.1339, longitude: -8.6173 },
        { "name": "Amadora", latitude: 38.7538, longitude: -9.2308 },
        { "name": "Braga", latitude: 41.5333, longitude: -8.4167 },
        { "name": "Funchal", latitude: 32.6669, longitude: -16.9241 },
        { "name": "Coimbra", latitude: 40.2033, longitude: -8.4103 }
      ]
    }
  },
  "Romania": {
    timezones: ["Europe/Bucharest"],
    cities: {
      "Europe/Bucharest": [
        { "name": "Bucharest", latitude: 44.4268, longitude: 26.1025 },
        { "name": "Cluj-Napoca", latitude: 46.7712, longitude: 23.6236 },
        { "name": "Timișoara", latitude: 45.7489, longitude: 21.2087 },
        { "name": "Iași", latitude: 47.1585, longitude: 27.6014 },
        { "name": "Constanța", latitude: 44.1807, longitude: 28.6343 },
        { "name": "Craiova", latitude: 44.3302, longitude: 23.7946 },
        { "name": "Brașov", latitude: 45.6556, longitude: 25.6100 }
      ]
    }
  },
  "Czech Republic": {
    timezones: ["Europe/Prague"],
    cities: {
      "Europe/Prague": [
        { "name": "Prague", latitude: 50.0755, longitude: 14.4378 },
        { "name": "Brno", latitude: 49.1951, longitude: 16.6068 },
        { "name": "Ostrava", latitude: 49.8209, longitude: 18.2625 },
        { "name": "Plzeň", latitude: 49.7384, longitude: 13.3736 },
        { "name": "Liberec", latitude: 50.7671, longitude: 15.0565 },
        { "name": "Olomouc", latitude: 49.5938, longitude: 17.2509 },
        { "name": "České Budějovice", latitude: 48.9744, longitude: 14.4746 }
      ]
    }
  },
  "Serbia": {
    timezones: ["Europe/Belgrade"],
    cities: {
      "Europe/Belgrade": [
        { "name": "Belgrade", latitude: 44.7866, longitude: 20.4489 },
        { "name": "Novi Sad", latitude: 45.2671, longitude: 19.8335 },
        { "name": "Niš", latitude: 43.3194, longitude: 21.8967 },
        { "name": "Kragujevac", latitude: 44.0128, longitude: 20.9114 },
        { "name": "Subotica", latitude: 46.1008, longitude: 19.6674 },
        { "name": "Zrenjanin", latitude: 45.3814, longitude: 20.3780 },
        { "name": "Pančevo", latitude: 44.8739, longitude: 20.6408 }
      ]
    }
  },
  "Slovakia": {
    timezones: ["Europe/Bratislava"],
    cities: {
      "Europe/Bratislava": [
        { "name": "Bratislava", latitude: 48.1486, longitude: 17.1077 },
        { "name": "Košice", latitude: 48.7071, longitude: 21.2587 },
        { "name": "Prešov", latitude: 49.0000, longitude: 21.2333 },
        { "name": "Žilina", latitude: 49.2197, longitude: 18.7394 },
        { "name": "Nitra", latitude: 48.3124, longitude: 18.0866 },
        { "name": "Banská Bystrica", latitude: 48.7387, longitude: 19.1576 },
        { "name": "Trnava", latitude: 48.3774, longitude: 17.5872 }
      ]
    }
  },
  "Slovenia": {
    timezones: ["Europe/Ljubljana"],
    cities: {
      "Europe/Ljubljana": [
        { "name": "Ljubljana", latitude: 46.0569, longitude: 14.5058 },
        { "name": "Maribor", latitude: 46.5547, longitude: 15.6459 },
        { "name": "Celje", latitude: 46.2361, longitude: 15.2675 },
        { "name": "Kranj", latitude: 46.2418, longitude: 14.3559 },
        { "name": "Velenje", latitude: 46.3592, longitude: 15.1103 },
        { "name": "Koper", latitude: 45.5469, longitude: 13.7294 },
        { "name": "Novo Mesto", latitude: 45.8038, longitude: 15.1694 }
      ]
    }
  },
  "Uruguay": {
    timezones: ["America/Montevideo"],
    cities: {
      "America/Montevideo": [
        { "name": "Montevideo", latitude: -34.9011, longitude: -56.1645 },
        { "name": "Salto", latitude: -31.3833, longitude: -57.9667 },
        { "name": "Ciudad de la Costa", latitude: -34.8173, longitude: -56.3772 },
        { "name": "Paysandú", latitude: -32.3214, longitude: -58.0756 },
        { "name": "Las Piedras", latitude: -34.7264, longitude: -56.2200 },
        { "name": "Rivera", latitude: -30.9053, longitude: -55.5508 },
        { "name": "Maldonado", latitude: -34.9053, longitude: -54.9551 }
      ]
    }
  },
  "Ukraine": {
    timezones: ["Europe/Kiev"],
    cities: {
      "Europe/Kiev": [
        { "name": "Kyiv", latitude: 50.4501, longitude: 30.5234 },
        { "name": "Kharkiv", latitude: 49.9935, longitude: 36.2304 },
        { "name": "Odesa", latitude: 46.4825, longitude: 30.7233 },
        { "name": "Dnipro", latitude: 48.4647, longitude: 35.0462 },
        { "name": "Donetsk", latitude: 48.0159, longitude: 37.8029 },
        { "name": "Zaporizhzhia", latitude: 47.8388, longitude: 35.1396 },
        { "name": "Lviv", latitude: 49.8397, longitude: 24.0297 }
      ]
    }
  },
  "Estonia": {
    timezones: ["Europe/Tallinn"],
    cities: {
      "Europe/Tallinn": [
        { "name": "Tallinn", latitude: 59.4370, longitude: 24.7536 },
        { "name": "Tartu", latitude: 58.3780, longitude: 26.7299 },
        { "name": "Narva", latitude: 59.3772, longitude: 28.1900 },
        { "name": "Pärnu", latitude: 58.3859, longitude: 24.4971 },
        { "name": "Kohtla-Järve", latitude: 59.3986, longitude: 27.2736 },
        { "name": "Viljandi", latitude: 58.3639, longitude: 25.5903 },
        { "name": "Maardu", latitude: 59.4764, longitude: 25.0246 }
      ]
    }
  },
  "Uzbekistan": {
    timezones: ["Asia/Tashkent"],
    cities: {
      "Asia/Tashkent": [
        { "name": "Tashkent", latitude: 41.2995, longitude: 69.2401 },
        { "name": "Samarkand", latitude: 39.6542, longitude: 66.9597 },
        { "name": "Bukhara", latitude: 39.7747, longitude: 64.4286 },
        { "name": "Andijan", latitude: 40.7821, longitude: 72.3442 },
      ]
    }
  },
  "Tajikistan": {
    timezones: ["Asia/Dushanbe"],
    cities: {
      "Asia/Dushanbe": [
        { "name": "Dushanbe", latitude: 38.5598, longitude: 68.7870 },
        { "name": "Khujand", latitude: 40.2833, longitude: 69.6167 },
        { "name": "Kulob", latitude: 37.9146, longitude: 69.7846 },
        { "name": "Bokhtar", latitude: 37.8364, longitude: 68.7804 },
        { "name": "Istaravshan", latitude: 39.9142, longitude: 69.0066 }
      ]
    }
  },
"Kenya": {
  timezones: ["Africa/Nairobi"],
  cities: {
    "Africa/Nairobi": [
      { "name": "Nairobi", latitude: -1.286389, longitude: 36.817223 },
      { "name": "Mombasa", latitude: -4.043473, longitude: 39.668206 },
      { "name": "Kisumu", latitude: -0.0917, longitude: 34.768 },
      { "name": "Nakuru", latitude: -0.3031, longitude: 36.066 },
      { "name": "Eldoret", latitude: 0.5167, longitude: 35.2692 }
    ]
  }
},
  "Morocco": {
    timezones: ["Africa/Casablanca"],
    cities: {
      "Africa/Casablanca": [
        { "name": "Casablanca", latitude: 33.5731, longitude: -7.5898 },
        { "name": "Rabat", latitude: 34.0209, longitude: -6.8417 },
        { "name": "Marrakech", latitude: 31.6295, longitude: -7.9811 },
        { "name": "Fes", latitude: 34.0331, longitude: -5.0003 },
      ]
    }
  },
  "Tunisia": {
    timezones: ["Africa/Tunis"],
    cities: {
      "Africa/Tunis": [
        { "name": "Tunis", latitude: 36.8065, longitude: 10.1815 },
        { "name": "Sfax", latitude: 34.745, longitude: 10.7603 },
        { "name": "Sousse", latitude: 35.8256, longitude: 10.6346 },
        { "name": "Gabès", latitude: 33.8815, longitude: 10.0982 },
      ]
    }
  },
  "Libya": {
    timezones: ["Africa/Tripoli"],
    cities: {
      "Africa/Tripoli": [
        { "name": "Tripoli", latitude: 32.8872, longitude: 13.1913 },
        { "name": "Benghazi", latitude: 32.116, longitude: 20.067 },
        { "name": "Misrata", latitude: 32.3753, longitude: 15.0953 },
        { "name": "Zliten", latitude: 32.4833, longitude: 14.5678 },
        { "name": "Tajoura", latitude: 32.9052, longitude: 13.1624 }
      ]
    }
  },
  "Sudan": {
    timezones: ["Africa/Khartoum"],
    cities: {
      "Africa/Khartoum": [
        { "name": "Khartoum", latitude: 15.5007, longitude: 32.5599 },
        { "name": "Omdurman", latitude: 15.6333, longitude: 32.4833 },
        { "name": "Port Sudan", latitude: 19.6167, longitude: 37.2167 },
        { "name": "Kosti", latitude: 13.1667, longitude: 32.6167 },
        { "name": "El Obeid", latitude: 13.1833, longitude: 30.2178 }
      ]
    }
  },
  "Ethiopia": {
    timezones: ["Africa/Addis_Ababa"],
    cities: {
      "Africa/Addis_Ababa": [
        { "name": "Addis Ababa", latitude: 9.03, longitude: 38.74 },
        { "name": "Dire Dawa", latitude: 9.591, longitude: 41.866 },
        { "name": "Mekelle", latitude: 13.499, longitude: 39.473 },
        { "name": "Hawassa", latitude: 7.0505, longitude: 38.4709 },
        { "name": "Gondar", latitude: 12.6349, longitude: 37.4703 }
      ]
    }
  },
  "Ghana": {
    timezones: ["Africa/Accra"],
    cities: {
      "Africa/Accra": [
        { "name": "Accra", latitude: 5.6037, longitude: -0.1870 },
        { "name": "Kumasi", latitude: 6.6883, longitude: -1.6244 },
        { "name": "Tamale", latitude: 9.4000, longitude: -0.8333 },
        { "name": "Takoradi", latitude: 4.8975, longitude: -1.7490 },
        { "name": "Sunyani", latitude: 7.3361, longitude: -2.3000 }
      ]
    }
  },
  "Ivory Coast": {
    timezones: ["Africa/Abidjan"],
    cities: {
      "Africa/Abidjan": [
        { name: "Abidjan", latitude: 5.3590, longitude: -4.0083 },
        { name: "Bouaké", latitude: 7.6900, longitude: -5.0370 },
        { name: "San Pedro", latitude: 4.7500, longitude: -6.6370 },
        { name: "Yamoussoukro", latitude: 6.8195, longitude: -5.2765 },
        { name: "Daloa", latitude: 6.8780, longitude: -6.4790 }
      ]
    }
  },
  "Senegal": {
    timezones: ["Africa/Dakar"],
    cities: {
      "Africa/Dakar": [
        { "name": "Dakar", latitude: 14.6928, longitude: -17.4467 },
        { "name": "Saint-Louis", latitude: 16.0012, longitude: -16.4987 },
        { "name": "Thiès", latitude: 14.788, longitude: -16.9397 },
        { "name": "Kaolack", latitude: 14.1458, longitude: -16.0711 },
        { "name": "Ziguinchor", latitude: 12.5883, longitude: -16.2819 }
      ]
    }
  },
  "Uganda": {
    timezones: ["Africa/Kampala"],
    cities: {
      "Africa/Kampala": [
        { "name": "Kampala", latitude: 0.3136, longitude: 32.5812 },
        { "name": "Entebbe", latitude: -0.2978, longitude: 32.4522 },
        { "name": "Jinja", latitude: -0.5961, longitude: 33.2023 },
        { "name": "Mbarara", latitude: -0.6028, longitude: 30.6548 },
        { "name": "Mbale", latitude: 1.0703, longitude: 34.1833 }
      ]
    }
  },
  "Tanzania": {
    timezones: ["Africa/Dar_es_Salaam"],
    cities: {
      "Africa/Dar_es_Salaam": [
        { "name": "Dar es Salaam", latitude: -6.7924, longitude: 39.2083 },
        { "name": "Dodoma", latitude: -6.163, longitude: 35.7516 },
        { "name": "Arusha", latitude: -3.3667, longitude: 36.6833 },
        { "name": "Mwanza", latitude: -2.5167, longitude: 32.9000 },
        { "name": "Mbeya", latitude: -8.9, longitude: 33.4500 }
      ]
    }
  },
  "Zambia": {
    timezones: ["Africa/Lusaka"],
    cities: {
      "Africa/Lusaka": [
        { "name": "Lusaka", latitude: -15.3875, longitude: 28.3228 },
        { "name": "Kitwe", latitude: -12.7961, longitude: 28.2111 },
        { "name": "Ndola", latitude: -12.9587, longitude: 28.6366 },
        { "name": "Livingstone", latitude: -17.8419, longitude: 25.8543 },
        { "name": "Chipata", latitude: -13.6333, longitude: 32.6500 }
      ]
    }
  },
  "Zimbabwe": {
    timezones: ["Africa/Harare"],
    cities: {
      "Africa/Harare": [
        { "name": "Harare", latitude: -17.8292, longitude: 31.0522 },
        { "name": "Bulawayo", latitude: -20.1583, longitude: 28.5811 },
        { "name": "Mutare", latitude: -18.9707, longitude: 32.6709 },
        { "name": "Gweru", latitude: -19.45, longitude: 29.8167 },
        { "name": "Masvingo", latitude: -20.0637, longitude: 30.8277 }
      ]
    }
  },
  "Mozambique": {
    timezones: ["Africa/Maputo"],
    cities: {
      "Africa/Maputo": [
        { "name": "Maputo", latitude: -25.9653, longitude: 32.5892 },
        { "name": "Matola", latitude: -25.9622, longitude: 32.4589 },
        { "name": "Beira", latitude: -19.8333, longitude: 34.8500 },
        { "name": "Nampula", latitude: -15.1165, longitude: 39.2666 },
        { "name": "Chimoio", latitude: -19.1167, longitude: 33.4833 }
      ]
    }
  },
  "Botswana": {
    timezones: ["Africa/Gaborone"],
    cities: {
      "Africa/Gaborone": [
        { "name": "Gaborone", latitude: -24.6545, longitude: 25.9086 },
        { "name": "Francistown", latitude: -21.1702, longitude: 27.5079 },
        { "name": "Maun", latitude: -19.9833, longitude: 23.4167 },
        { "name": "Serowe", latitude: -22.3875, longitude: 26.7108 },
        { "name": "Kanye", latitude: -24.9652, longitude: 25.3522 }
      ]
    }
  },
  "Namibia": {
    timezones: ["Africa/Windhoek"],
    cities: {
      "Africa/Windhoek": [
        { "name": "Windhoek", latitude: -22.5609, longitude: 17.0658 },
        { "name": "Swakopmund", latitude: -22.6833, longitude: 14.5333 },
        { "name": "Walvis Bay", latitude: -22.9575, longitude: 14.5053 },
        { "name": "Rundu", latitude: -17.9167, longitude: 19.7667 },
        { "name": "Oshakati", latitude: -17.7833, longitude: 15.6833 }
      ]
    }
  },
  "Madagascar": {
    timezones: ["Indian/Antananarivo"],
    cities: {
      "Indian/Antananarivo": [
        { "name": "Antananarivo", latitude: -18.8792, longitude: 47.5079 },
        { "name": "Toamasina", latitude: -18.1496, longitude: 49.4023 },
        { "name": "Antsirabe", latitude: -19.8659, longitude: 47.0333 },
        { "name": "Fianarantsoa", latitude: -21.4545, longitude: 47.0854 },
        { "name": "Mahajanga", latitude: -15.7167, longitude: 46.3167 }
      ]
    }
  },
  "Mauritius": {
    timezones: ["Indian/Mauritius"],
    cities: {
      "Indian/Mauritius": [
        { "name": "Port Louis", latitude: -20.1609, longitude: 57.5012 },
        { "name": "Curepipe", latitude: -20.3147, longitude: 57.5205 },
        { "name": "Vacoas", latitude: -20.2981, longitude: 57.4783 },
        { "name": "Quatre Bornes", latitude: -20.2633, longitude: 57.4791 },
        { "name": "Rose Hill", latitude: -20.2333, longitude: 57.4667 }
      ]
    }
  },
  "Seychelles": {
    timezones: ["Indian/Mahe"],
    cities: {
      "Indian/Mahe": [
        { "name": "Anse Boileau", latitude: -4.7167, longitude: 55.5000 },
        { "name": "Beau Vallon", latitude: -4.6233, longitude: 55.4300 },
        { "name": "Takamaka", latitude: -4.7897, longitude: 55.5086 },
        { "name": "Anse Royale", latitude: -4.7353, longitude: 55.5179 }
      ]
    }
  },
  "Maldives": {
    timezones: ["Indian/Maldives"],
    cities: {
      "Indian/Maldives": [
        { "name": "Malé", latitude: 4.1755, longitude: 73.5093 },
        { "name": "Hulhumalé", latitude: 4.2143, longitude: 73.5391 },
        { "name": "Addu City", latitude: -0.6167, longitude: 73.0833 },
        { "name": "Fuvahmulah", latitude: -0.2989, longitude: 73.4247 },
        { "name": "Kulhudhuffushi", latitude: 6.6222, longitude: 73.0700 }
      ]
    }
  },
  "Sri Lanka": {
    timezones: ["Asia/Colombo"],
    cities: {
      "Asia/Colombo": [
        { "name": "Colombo", latitude: 6.9271, longitude: 79.8612 },
        { "name": "Kandy", latitude: 7.2906, longitude: 80.6337 },
        { "name": "Galle", latitude: 6.0367, longitude: 80.2170 },
        { "name": "Jaffna", latitude: 9.6615, longitude: 80.0255 },
        { "name": "Negombo", latitude: 7.2083, longitude: 79.8358 }
      ]
    }
  },
  "Nepal": {
    timezones: ["Asia/Kathmandu"],
    cities: {
      "Asia/Kathmandu": [
        { "name": "Kathmandu", latitude: 27.7172, longitude: 85.3240 },
        { "name": "Pokhara", latitude: 28.2096, longitude: 83.9856 },
        { "name": "Biratnagar", latitude: 26.4525, longitude: 87.2718 },
        { "name": "Lalitpur", latitude: 27.6644, longitude: 85.3188 },
        { "name": "Birgunj", latitude: 27.0000, longitude: 84.8667 }
      ]
    }
  },
  "Bhutan": {
    timezones: ["Asia/Thimphu"],
    cities: {
      "Asia/Thimphu": [
        { "name": "Thimphu", latitude: 27.4728, longitude: 89.6390 },
        { "name": "Phuentsholing", latitude: 26.8516, longitude: 89.3885 },
        { "name": "Paro", latitude: 27.4305, longitude: 89.4139 },
        { "name": "Punakha", latitude: 27.5823, longitude: 89.8752 },
        { "name": "Wangdue Phodrang", latitude: 27.4333, longitude: 89.9000 }
      ]
    }
  },
  "Myanmar": {
    timezones: ["Asia/Yangon"],
    cities: {
      "Asia/Yangon": [
        { "name": "Yangon", latitude: 16.8661, longitude: 96.1951 },
        { "name": "Mandalay", latitude: 21.9747, longitude: 96.0836 },
        { "name": "Naypyidaw", latitude: 19.7633, longitude: 96.0785 },
        { "name": "Bago", latitude: 17.3419, longitude: 96.4814 },
        { "name": "Taunggyi", latitude: 20.7880, longitude: 97.0322 }
      ]
    }
  },
  "Cambodia": {
    timezones: ["Asia/Phnom_Penh"],
    cities: {
      "Asia/Phnom_Penh": [
        { "name": "Phnom Penh", latitude: 11.5564, longitude: 104.9282 },
        { "name": "Siem Reap", latitude: 13.3671, longitude: 103.8448 },
        { "name": "Battambang", latitude: 13.0957, longitude: 103.2022 },
        { "name": "Sihanoukville", latitude: 10.6253, longitude: 103.5234 },
        { "name": "Kampong Cham", latitude: 12.0000, longitude: 105.4500 }
      ]
    }
  },
  "Belize": {
    timezones: ["America/Belize"],
    cities: {
      "America/Belize": [
        { "name": "Belize City", latitude: 17.5046, longitude: -88.1962 },
        { "name": "San Ignacio", latitude: 17.1588, longitude: -89.0713 },
        { "name": "Orange Walk", latitude: 18.0752, longitude: -88.5583 },
        { "name": "Belmopan", latitude: 17.2514, longitude: -88.759 },
        { "name": "Dangriga", latitude: 16.9706, longitude: -88.2331 }
      ]
    }
  },
  "Barbados": {
    timezones: ["America/Barbados"],
    cities: {
      "America/Barbados": [
        { "name": "Bridgetown", latitude: 13.1, longitude: -59.6167 },
        { "name": "Speightstown", latitude: 13.25, longitude: -59.6464 },
        { "name": "Holetown", latitude: 13.1833, longitude: -59.65 },
        { "name": "Oistins", latitude: 13.0667, longitude: -59.5333 },
        { "name": "Bathsheba", latitude: 13.2167, longitude: -59.5167 }
      ]
    }
  },
  "Benin": {
    timezones: ["Africa/Porto-Novo"],
    cities: {
      "Africa/Porto-Novo": [
        { "name": "Cotonou", latitude: 6.3654, longitude: 2.4183 },
        { "name": "Porto-Novo", latitude: 6.4969, longitude: 2.628 },
        { "name": "Parakou", latitude: 9.337, longitude: 2.6303 },
        { "name": "Abomey", latitude: 7.1829, longitude: 1.9912 },
        { "name": "Bohicon", latitude: 7.1783, longitude: 2.0667 }
      ]
    }
  },
  "Bolivia": {
    timezones: ["America/La_Paz"],
    cities: {
      "America/La_Paz": [
        { "name": "La Paz", latitude: -16.5, longitude: -68.15 },
        { "name": "Santa Cruz de la Sierra", latitude: -17.8, longitude: -63.1667 },
        { "name": "Cochabamba", latitude: -17.3833, longitude: -66.1667 },
        { "name": "Sucre", latitude: -19.0333, longitude: -65.2622 },
        { "name": "El Alto", latitude: -16.5167, longitude: -68.1833 }
      ]
    }
  },
  "Bosnia and Herzegovina": {
    timezones: ["Europe/Sarajevo"],
    cities: {
      "Europe/Sarajevo": [
        { "name": "Sarajevo", latitude: 43.8563, longitude: 18.4131 },
        { "name": "Banja Luka", latitude: 44.7758, longitude: 17.1856 },
        { "name": "Mostar", latitude: 43.3438, longitude: 17.8078 },
        { "name": "Tuzla", latitude: 44.5372, longitude: 18.6731 },
        { "name": "Zenica", latitude: 44.2031, longitude: 17.9078 }
      ]
    }
  },
  "Cyprus": {
    timezones: ["Asia/Nicosia"],
    cities: {
      "Asia/Nicosia": [
        { "name": "Nicosia", latitude: 35.1667, longitude: 33.3667 },
        { "name": "Limassol", latitude: 34.675, longitude: 33.0333 },
        { "name": "Larnaca", latitude: 34.9167, longitude: 33.6333 },
        { "name": "Famagusta", latitude: 35.125, longitude: 33.95 },
        { "name": "Paphos", latitude: 34.7667, longitude: 32.4167 }
      ]
    }
  },
  "Cuba": {
    timezones: ["America/Havana"],
    cities: {
      "America/Havana": [
        { "name": "Havana", latitude: 23.1136, longitude: -82.3666 },
        { "name": "Santiago de Cuba", latitude: 20.0207, longitude: -75.8219 },
        { "name": "Camagüey", latitude: 21.3800, longitude: -77.9167 },
        { "name": "Holguín", latitude: 20.8800, longitude: -76.2611 },
        { "name": "Santa Clara", latitude: 22.4083, longitude: -79.9667 },
        { "name": "Guantánamo", latitude: 20.1444, longitude: -75.2092 }
      ]
    }
  },
  "Costa Rica": {
    timezones: ["America/Costa_Rica"],
    cities: {
      "America/Costa_Rica": [
        { "name": "San José", latitude: 9.9281, longitude: -84.0907 },
        { "name": "Alajuela", latitude: 10.0167, longitude: -84.2111 },
        { "name": "Cartago", latitude: 9.7486, longitude: -83.9194 },
        { "name": "Heredia", latitude: 9.9986, longitude: -83.9167 },
        { "name": "Liberia", latitude: 10.6167, longitude: -85.4333 }
      ]
    }
  },
  "Comoros": {
    timezones: ["Indian/Comoro"],
    cities: {
      "Indian/Comoro": [
        { "name": "Moroni", latitude: -11.7020, longitude: 43.2551 },
        { "name": "Mutsamudu", latitude: -12.0700, longitude: 44.4167 },
        { "name": "Fomboni", latitude: -12.2900, longitude: 43.7400 },
        { "name": "Domoni", latitude: -12.3000, longitude: 44.4000 },
        { "name": "Chindini", latitude: -12.2000, longitude: 44.4000 }
      ]
    }
  },
  "Colombia": {
    timezones: ["America/Bogota"],
    cities: {
      "America/Bogota": [
        { "name": "Bogotá", latitude: 4.7110, longitude: -74.0721 },
        { "name": "Medellín", latitude: 6.2442, longitude: -75.5812 },
        { "name": "Cali", latitude: 3.4372, longitude: -76.5225 },
        { "name": "Barranquilla", latitude: 10.9639, longitude: -74.7964 },
        { "name": "Cartagena", latitude: 10.3910, longitude: -75.4794 }
      ]
    }
  },
  "Chile": {
    timezones: ["America/Santiago"],
    cities: {
      "America/Santiago": [
        { "name": "Santiago", latitude: -33.4489, longitude: -70.6693 },
        { "name": "Valparaíso", latitude: -33.0460, longitude: -71.6127 },
        { "name": "Concepción", latitude: -36.8260, longitude: -73.0498 },
        { "name": "La Serena", latitude: -29.9075, longitude: -71.2518 },
        { "name": "Antofagasta", latitude: -23.6500, longitude: -70.4000 }
      ]
    }
  },
  "Chad": {
    timezones: ["Africa/Ndjamena"],
    cities: {
      "Africa/Ndjamena": [
        { "name": "N'Djamena", latitude: 12.6392, longitude: 15.0147 },
        { "name": "Moundou", latitude: 8.5792, longitude: 15.6167 },
        { "name": "Sarh", latitude: 9.1500, longitude: 15.7500 },
        { "name": "Abéché", latitude: 13.8333, longitude: 20.8333 },
        { "name": "Kélo", latitude: 9.5000, longitude: 15.5000 }
      ]
    }
  },
  "Central African Republic": {
    timezones: ["Africa/Bangui"],
    cities: {
      "Africa/Bangui": [
        { "name": "Bangui", latitude: 4.3947, longitude: 18.5582 },
        { "name": "Berbérati", latitude: 4.2500, longitude: 15.8000 },
        { "name": "Bimbo", latitude: 4.4000, longitude: 18.5000 },
        { "name": "Carnot", latitude: 4.5000, longitude: 15.5000 },
        { "name": "Mbaïki", latitude: 4.5000, longitude: 15.5000 }
      ]
    }
  },
  "Cameroon": {
    timezones: ["Africa/Douala"],
    cities: {
      "Africa/Douala": [
        { "name": "Douala", latitude: 4.0511, longitude: 9.7085 },
        { "name": "Yaoundé", latitude: 3.848, longitude: 11.5021 },
        { "name": "Bafoussam", latitude: 5.4634, longitude: 10.1571 },
        { "name": "Garoua", latitude: 9.3077, longitude: 13.3944 },
        { "name": "Maroua", latitude: 10.5917, longitude: 14.3249 }
      ]
    }
  },
  "Djibouti": {
    timezones: ["Africa/Djibouti"],
    cities: {
      "Africa/Djibouti": [
        { "name": "Djibouti", latitude: 11.8251, longitude: 42.5903 },
        { "name": "Ali Sabieh", latitude: 11.1516, longitude: 42.7622 },
        { "name": "Tadjoura", latitude: 11.7089, longitude: 42.9719 },
        { "name": "Doraleh", latitude: 11.6049, longitude: 42.1006 },
        { "name": "Obock", latitude: 11.0041, longitude: 42.2786 }
      ]
    }
  },
  "Dominica": {
    timezones: ["America/Dominica"],
    cities: {
      "America/Dominica": [
        { "name": "Roseau", latitude: 15.3017, longitude: -61.388 },
        { "name": "Portsmouth", latitude: 15.5407, longitude: -61.4744 },
        { "name": "Marigot", latitude: 15.5383, longitude: -61.3572 },
        { "name": "Grand Bay", latitude: 15.1797, longitude: -61.3581 },
        { "name": "La Plaine", latitude: 15.3294, longitude: -61.3158 }
      ]
    }
  },
  "Dominican Republic": {
    timezones: ["America/Santo_Domingo"],
    cities: {
      "America/Santo_Domingo": [
        { "name": "Santo Domingo", latitude: 18.4861, longitude: -69.9312 },
        { "name": "Santiago de los Caballeros", latitude: 19.4531, longitude: -70.6928 },
        { "name": "La Romana", latitude: 18.4233, longitude: -68.9846 },
        { "name": "Puerto Plata", latitude: 19.7739, longitude: -70.6937 },
        { "name": "San Pedro de Macorís", latitude: 18.4522, longitude: -69.3003 }
      ]
    }
  },
  "Ecuador": {
    timezones: ["America/Guayaquil"],
    cities: {
      "America/Guayaquil": [
        { "name": "Guayaquil", latitude: -2.1700, longitude: -79.9220 },
        { "name": "Quito", latitude: -0.1807, longitude: -78.4678 },
        { "name": "Cuenca", latitude: -2.9000, longitude: -79.0042 },
        { "name": "Machala", latitude: -3.2585, longitude: -79.9603 },
        { "name": "Loja", latitude: -4.0045, longitude: -79.2047 }
      ]
    }
  },
  "El Salvador": {
    timezones: ["America/El_Salvador"],
    cities: {
      "America/El_Salvador": [
        { "name": "San Salvador", latitude: 13.6925, longitude: -89.2182 },
        { "name": "Santa Ana", latitude: 13.9984, longitude: -89.5548 },
        { "name": "San Miguel", latitude: 13.4833, longitude: -88.1833 },
        { "name": "La Libertad", latitude: 13.4905, longitude: -89.2907 },
        { "name": "Sonsonate", latitude: 13.7172, longitude: -89.1682 }
      ]
    }
  },
  "Equatorial Guinea": {
    timezones: ["Africa/Malabo"],
    cities: {
      "Africa/Malabo": [
        { "name": "Malabo", latitude: 3.75, longitude: 8.7833 },
        { "name": "Bata", latitude: 1.865, longitude: 9.7495 },
        { "name": "Ebebiyin", latitude: 1.5667, longitude: 11.5833 },
        { "name": "Aconibe", latitude: 3.0167, longitude: 11.0167 },
        { "name": "Luba", latitude: 3.0627, longitude: 8.5964 }
      ]
    }
  },
  "Eritrea": {
    timezones: ["Africa/Asmara"],
    cities: {
      "Africa/Asmara": [
        { "name": "Asmara", latitude: 15.3333, longitude: 38.9333 },
        { "name": "Mendefera", latitude: 14.8958, longitude: 38.3183 },
        { "name": "Keren", latitude: 15.7806, longitude: 38.2917 },
        { "name": "Massawa", latitude: 15.5999, longitude: 39.5833 },
        { "name": "Adigrat", latitude: 14.2903, longitude: 38.9275 }
      ]
    }
  },
  "Eswatini": {
    timezones: ["Africa/Mbabane"],
    cities: {
      "Africa/Mbabane": [
        { "name": "Mbabane", latitude: -26.3167, longitude: 31.1333 },
        { "name": "Manzini", latitude: -26.522, longitude: 31.3814 },
        { "name": "Lobamba", latitude: -26.3667, longitude: 31.1333 },
        { "name": "Nhlangano", latitude: -26.6167, longitude: 31.35 },
        { "name": "Big Bend", latitude: -26.0167, longitude: 31.6167 }
      ]
    }
  },
  "Fiji": {
    timezones: ["Pacific/Fiji"],
    cities: {
      "Pacific/Fiji": [
        { "name": "Suva", latitude: -18.1416, longitude: 178.4416 },
        { "name": "Nadi", latitude: -17.8005, longitude: 177.4436 },
        { "name": "Lautoka", latitude: -17.6055, longitude: 177.4619 },
        { "name": "Labasa", latitude: -16.4167, longitude: 179.4167 },
        { "name": "Ba", latitude: -17.4114, longitude: 177.3486 }
      ]
    }
  },
  "Gabon": {
    timezones: ["Africa/Libreville"],
    cities: {
      "Africa/Libreville": [
        { "name": "Libreville", latitude: 0.4167, longitude: 9.4667 },
        { "name": "Port-Gentil", latitude: -0.7167, longitude: 8.7833 },
        { "name": "Franceville", latitude: -1.6167, longitude: 13.5833 },
        { "name": "Moanda", latitude: -1.5167, longitude: 13.1833 },
        { "name": "Oyem", latitude: 1.5667, longitude: 11.5833 }
      ]
    }
  },
  "Gambia": {
    timezones: ["Africa/Banjul"],
    cities: {
      "Africa/Banjul": [
        { "name": "Banjul", latitude: 13.454, longitude: -16.5782 },
        { "name": "Serrekunda", latitude: 13.4542, longitude: -16.7069 },
        { "name": "Brikama", latitude: 13.2917, longitude: -16.6539 },
        { "name": "Kerewan", latitude: 13.553, longitude: -16.2714 },
        { "name": "Bakau", latitude: 13.4597, longitude: -16.6822 }
      ]
    }
  },
  "Georgia": {
    timezones: ["Asia/Tbilisi"],
    cities: {
      "Asia/Tbilisi": [
        { "name": "Tbilisi", latitude: 41.715, longitude: 44.8271 },
        { "name": "Batumi", latitude: 41.6168, longitude: 41.6247 },
        { "name": "Kutaisi", latitude: 42.267, longitude: 42.7167 },
        { "name": "Zugdidi", latitude: 42.5167, longitude: 41.8667 },
        { "name": "Rustavi", latitude: 41.5603, longitude: 45.0083 }
      ]
    }
  },
  "Grenada": {
    timezones: ["America/Grenada"],
    cities: {
      "America/Grenada": [
        { "name": "St. George's", latitude: 12.0564, longitude: -61.7485 },
        { "name": "Gouyave", latitude: 12.0644, longitude: -61.5403 }
      ]
    }
  },
  "Guatemala": {
    timezones: ["America/Guatemala"],
    cities: {
      "America/Guatemala": [
        { "name": "Guatemala City", latitude: 14.6349, longitude: -90.5069 },
        { "name": "Quetzaltenango", latitude: 14.834, longitude: -91.5147 },
        { "name": "Escuintla", latitude: 13.0702, longitude: -90.7859 },
        { "name": "Chimaltenango", latitude: 14.5544, longitude: -90.7897 }
      ]
    }
  },
  "Guyana": {
    timezones: ["America/Guyana"],
    cities: {
      "America/Guyana": [
        { "name": "Georgetown", latitude: 6.8013, longitude: -58.155 },
        { "name": "Linden", latitude: 5.883, longitude: -59.7833 },
        { "name": "New Amsterdam", latitude: 6.2506, longitude: -57.5062 }
      ]
    }
  },
  "Haiti": {
    timezones: ["America/Port-au-Prince"],
    cities: {
      "America/Port-au-Prince": [
        { "name": "Port-au-Prince", latitude: 18.5944, longitude: -72.3074 },
        { "name": "Cap-Haïtien", latitude: 19.7592, longitude: -72.2047 },
        { "name": "Les Cayes", latitude: 18.198, longitude: -74.1212 }
      ]
    }
  },
  "Honduras": {
    timezones: ["America/Tegucigalpa"],
    cities: {
      "America/Tegucigalpa": [
        { "name": "Tegucigalpa", latitude: 13.9672, longitude: -66.9506 },
        { "name": "San Pedro Sula", latitude: 13.5002, longitude: -88.0205 },
        { "name": "La Ceiba", latitude: 15.7763, longitude: -86.7833 }
      ]
    }
  },
 "Iraq": {
  timezones: ["Asia/Baghdad"],
  cities: {
    "Asia/Baghdad": [
      { "name": "Baghdad", latitude: 33.3152, longitude: 44.3661 },
      { "name": "Basra", latitude: 30.5085, longitude: 47.7804 },
      { "name": "Erbil", latitude: 36.1911, longitude: 44.0094 },
      { "name": "Najaf", latitude: 31.9953, longitude: 44.3148 },
      { "name": "Kirkuk", latitude: 35.4681, longitude: 44.3922 },
      { "name": "Fallujah", latitude: 33.3561, longitude: 43.7829 }
    ]
  }
},
  "Iran": {
  timezones: ["Asia/Tehran"],
  cities: {
    "Asia/Tehran": [
      { "name": "Tehran", latitude: 35.6892, longitude: 51.3890 },
      { "name": "Isfahan", latitude: 32.6546, longitude: 51.6680 },
      { "name": "Shiraz", latitude: 29.5926, longitude: 52.5836 },
      { "name": "Tabriz", latitude: 38.0962, longitude: 46.2738 },
      { "name": "Mashhad", latitude: 36.2605, longitude: 59.6168 },
      { "name": "Ahvaz", latitude: 31.3183, longitude: 48.6692 }
    ]
  }
},
  "Jordan": {
    timezones: ["Asia/Amman"],
    cities: {
      "Asia/Amman": [
        { "name": "Amman", latitude: 31.9552, longitude: 35.945 },
        { "name": "Irbid", latitude: 32.5561, longitude: 35.8555 },
        { "name": "Zarqa", latitude: 32.0742, longitude: 36.0978 }
      ]
    }
  },
  "Jamaica": {
  "timezones": ["America/Jamaica"],
  "cities": {
    "America/Jamaica": [
      { "name": "Kingston", latitude: 17.9714, longitude: -76.7936 },
      { "name": "Montego Bay", latitude: 18.1096, longitude: -77.295 },
      { "name": "Spanish Town", latitude: 17.9971, longitude: -76.9556 },
      { "name": "Portmore", latitude: 17.9763, longitude: -76.8936 },
      { "name": "Ocho Rios", latitude: 18.4048, longitude: -77.1049 },
      { "name": "Mandeville", latitude: 17.9717, longitude: -77.5225 }
    ]
  }
},
"Kazakhstan": {
  "timezones": ["Asia/Almaty", "Asia/Qyzylorda"],
  "cities": {
    "Asia/Almaty": [
      { "name": "Almaty", latitude: 43.2220, longitude: 76.8512 },
      { "name": "Shymkent", latitude: 42.3400, longitude: 69.5901 },
      { "name": "Karaganda", latitude: 49.8017, longitude: 73.0904 },
      { "name": "Aktobe", latitude: 50.2833, longitude: 57.1667 }
    ],
    "Asia/Qyzylorda": [
      { "name": "Astana", latitude: 51.1694, longitude: 71.4491 }
    ]
  }
},
"Kiribati": {
  timezones: ["Pacific/Tarawa"],
  cities: {
    "Pacific/Tarawa": [
      { "name": "Tarawa", latitude: 1.4511, longitude: 173.0312 },
      { "name": "Bairiki", latitude: 1.4500, longitude: 173.0100 },
      { "name": "Betio", latitude: 1.3700, longitude: 173.0300 },
      { "name": "Buota", latitude: 1.8800, longitude: 173.1100 },
      { "name": "Tabiteuea", latitude: 1.2278, longitude: 173.0833 }
    ]
  }
},
"Kuwait": {
  timezones: ["Asia/Kuwait"],
  cities: {
    "Asia/Kuwait": [
      { "name": "Kuwait City", latitude: 29.3759, longitude: 47.9774 },
      { "name": "Al Ahmadi", latitude: 28.7277, longitude: 48.0734 },
      { "name": "Hawalli", latitude: 29.3387, longitude: 48.0001 },
      { "name": "Mubarak Al Kabeer", latitude: 29.3394, longitude: 48.0016 },
      { "name": "Farwaniya", latitude: 29.2433, longitude: 47.9752 }
    ]
  }
},
"Kyrgyzstan": {
  timezones: ["Asia/Bishkek"],
  cities: {
    "Asia/Bishkek": [
      { "name": "Bishkek", latitude: 42.8746, longitude: 74.6123 },
      { "name": "Osh", latitude: 40.5137, longitude: 72.7853 },
      { "name": "Jalal-Abad", latitude: 40.9453, longitude: 73.0922 },
      { "name": "Karakol", latitude: 42.4997, longitude: 78.3934 },
      { "name": "Tokmok", latitude: 42.8289, longitude: 75.2433 }
    ]
  }
},
"North Korea": {
  timezones: ["Asia/Pyongyang"],
  cities: {
    "Asia/Pyongyang": [
      { "name": "Pyongyang", latitude: 39.0194, longitude: 125.7381 },
      { "name": "Hamhung", latitude: 39.9186, longitude: 127.5364 },
      { "name": "Chongjin", latitude: 41.7723, longitude: 129.1983 },
      { "name": "Sinuiju", latitude: 40.1004, longitude: 124.3877 },
      { "name": "Nampo", latitude: 38.7402, longitude: 125.4127 }
    ]
  }
},
  "Nauru": {
    timezones: ["Pacific/Nauru"],
    cities: {
      "Pacific/Nauru": [
        { "name": "Yaren", latitude: -0.5477, longitude: 166.9209 },
        { "name": "Anibare", latitude: -0.5294, longitude: 166.9292 },
        { "name": "Baiti", latitude: -0.5317, longitude: 166.9262 },
        { "name": "Denigomodu", latitude: -0.4941, longitude: 166.9344 },
        { "name": "Aiwo", latitude: -0.5204, longitude: 166.9256 }
      ]
    }
  },
  "Nicaragua": {
    timezones: ["America/Managua"],
    cities: {
      "America/Managua": [
        { "name": "Managua", latitude: 12.1364, longitude: -86.2512 },
        { "name": "León", latitude: 12.4351, longitude: -86.8784 },
        { "name": "Masaya", latitude: 11.9733, longitude: -86.1017 },
        { "name": "Estelí", latitude: 13.0846, longitude: -86.3554 },
        { "name": "Chinandega", latitude: 12.6206, longitude: -87.1261 }
      ]
    }
  },
  "Niger": {
    timezones: ["Africa/Niamey"],
    cities: {
      "Africa/Niamey": [
        { "name": "Niamey", latitude: 13.5127, longitude: 2.1128 },
        { "name": "Zinder", latitude: 13.8333, longitude: 8.9833 },
        { "name": "Maradi", latitude: 13.4800, longitude: 7.1000 },
        { "name": "Agadez", latitude: 16.9725, longitude: 7.9889 },
        { "name": "Tahoua", latitude: 14.9700, longitude: 5.4200 }
      ]
    }
  },
  "North Macedonia": {
    timezones: ["Europe/Skopje"],
    cities: {
      "Europe/Skopje": [
        { "name": "Skopje", latitude: 41.9981, longitude: 21.4254 },
        { "name": "Bitola", latitude: 41.0323, longitude: 21.3266 },
        { "name": "Kumanovo", latitude: 42.1342, longitude: 21.7172 },
        { "name": "Prilep", latitude: 41.3430, longitude: 21.5525 },
        { "name": "Ohrid", latitude: 41.1151, longitude: 20.8013 }
      ]
    }
  },
 "Laos": {
  timezones: ["Asia/Vientiane"],
  "cities": {
    "Asia/Vientiane": [
      { "name": "Vientiane", latitude: 17.9757, longitude: 102.6331 },
      { "name": "Luang Prabang", latitude: 19.8833, longitude: 102.1417 },
      { "name": "Pakse", latitude: 15.1167, longitude: 105.7833 },
      { "name": "Champasak", latitude: 15.1333, longitude: 105.7833 },
      { "name": "Xam Neua", latitude: 20.4167, longitude: 104.0333 }
    ]
  }
},
"Latvia": {
  timezones: ["Europe/Riga"],
  cities: {
    "Europe/Riga": [
      { "name": "Riga", latitude: 56.946, longitude: 24.1059 },
      { "name": "Daugavpils", latitude: 55.8761, longitude: 26.7025 },
      { "name": "Jurmala", latitude: 56.9639, longitude: 23.8568 },
      { "name": "Liepaja", latitude: 56.5075, longitude: 21.0103 },
      { "name": "Jelgava", latitude: 56.6542, longitude: 23.7314 }
    ]
  }
},
  "Lebanon": {
    timezones: ["Asia/Beirut"],
    cities: {
      "Asia/Beirut": [
        { "name": "Beirut", latitude: 33.8886, longitude: 35.4955 },
        { "name": "Sidon", latitude: 33.5633, longitude: 35.3750 },
        { "name": "Tyre", latitude: 33.2706, longitude: 35.2000 },
        { "name": "Zahle", latitude: 33.8483, longitude: 36.2119 }
      ]
    }
  },
  "Lesotho": {
    timezones: ["Africa/Maseru"],
    cities: {
      "Africa/Maseru": [
        { "name": "Maseru", latitude: -29.3158, longitude: 27.4968 },
        { "name": "Maputsoe", latitude: -28.9967, longitude: 27.7993 },
        { "name": "Butha-Buthe", latitude: -28.655, longitude: 28.0333 },
        { "name": "Mohale's Hoek", latitude: -30.1503, longitude: 27.4997 },
        { "name": "Quthing", latitude: -30.3667, longitude: 27.367 }
      ]
    }
  },
  "Liberia": {
    timezones: ["Africa/Monrovia"],
    cities: {
      "Africa/Monrovia": [
        { "name": "Monrovia", latitude: 6.3000, longitude: -9.4295 },
        { "name": "Gbarnga", latitude: 6.9686, longitude: -9.4575 },
        { "name": "Buchanan", latitude: 5.8765, longitude: -9.4292 },
        { "name": "Kakata", latitude: 6.5425, longitude: -9.4136 },
        { "name": "Voinjama", latitude: 8.4244, longitude: -9.6697 }
      ]
    }
  },
  "Liechtenstein": {
    timezones: ["Europe/Vaduz"],
    cities: {
      "Europe/Vaduz": [
        { "name": "Vaduz", latitude: 47.1415, longitude: 9.5215 },
        { "name": "Schaan", latitude: 47.1667, longitude: 9.5167 },
        { "name": "Balzers", latitude: 47.1342, longitude: 9.5119 },
        { "name": "Eschen", latitude: 47.2367, longitude: 9.5258 }
      ]
    }
  },
  "Lithuania": {
    timezones: ["Europe/Vilnius"],
    cities: {
      "Europe/Vilnius": [
        { "name": "Vilnius", latitude: 54.6892, longitude: 25.2798 },
        { "name": "Kaunas", latitude: 54.8985, longitude: 23.9036 },
        { "name": "Klaipėda", latitude: 55.7033, longitude: 21.1442 },
        { "name": "Šiauliai", latitude: 55.9333, longitude: 23.3136 },
        { "name": "Panevėžys", latitude: 55.7294, longitude: 24.3656 }
      ]
    }
  },
  "Luxembourg": {
    timezones: ["Europe/Luxembourg"],
    cities: {
      "Europe/Luxembourg": [
        { "name": "Luxembourg City", latitude: 49.6117, longitude: 6.13 },
        { "name": "Ettelbruck", latitude: 49.8672, longitude: 6.1222 },
        { "name": "Differdange", latitude: 49.5475, longitude: 5.9517 },
        { "name": "Esch-sur-Alzette", latitude: 49.8672, longitude: 6.1222 },
      ]
    }
  },
  "Malawi": {
    timezones: ["Africa/Blantyre"],
    cities: {
      "Africa/Blantyre": [
        { "name": "Blantyre", latitude: -15.7793, longitude: 35.0097 },
        { "name": "Lilongwe", latitude: -13.9833, longitude: 33.7833 },
        { "name": "Mzuzu", latitude: -11.4592, longitude: 34.0167 },
        { "name": "Zomba", latitude: -15.3800, longitude: 35.3094 },
        { "name": "Mangochi", latitude: -14.5000, longitude: 35.2583 }
      ]
    }
  },
  "Malta": {
    timezones: ["Europe/Malta"],
    cities: {
      "Europe/Malta": [
        { "name": "Valletta", latitude: 35.8997, longitude: 14.5147 },
        { "name": "Mosta", latitude: 35.8872, longitude: 14.4072 },
        { "name": "Mellieħa", latitude: 35.9677, longitude: 14.3646 },
        { "name": "Sliema", latitude: 35.9108, longitude: 14.5119 },
        { "name": "Birkirkara", latitude: 35.8861, longitude: 14.4600 }
      ]
    }
  },
  "Marshall Islands": {
    timezones: ["Pacific/Majuro"],
    cities: {
      "Pacific/Majuro": [
        { "name": "Majuro", latitude: 7.098, longitude: 171.380 },
        { "name": "Ebaye", latitude: 7.1667, longitude: 171.2497 },
        { "name": "Laura", latitude: 7.3667, longitude: 171.2833 },
        { "name": "Rairok", latitude: 7.0542, longitude: 171.2667 },
        { "name": "Bikini Atoll", latitude: 11.5903, longitude: 165.3986 }
      ]
    }
  },

  "Moldova": {
    timezones: ["Europe/Chisinau"],
    cities: {
      "Europe/Chisinau": [
        { "name": "Chișinău", latitude: 47.0105, longitude: 28.8638 },
        { "name": "Bălți", latitude: 47.7566, longitude: 27.9214 },
        { "name": "Tiraspol", latitude: 46.8594, longitude: 29.6167 },
        { "name": "Bender", latitude: 45.8496, longitude: 29.4572 },
        { "name": "Briceni", latitude: 48.2997, longitude: 26.5231 }
      ]
    }
  },
  "Monaco": {
    timezones: ["Europe/Monaco"],
    cities: {
      "Europe/Monaco": [
        { "name": "Monaco", latitude: 43.7333, longitude: 7.4167 },
        { "name": "Monte Carlo", latitude: 43.7333, longitude: 7.4167 },
        { "name": "La Condamine", latitude: 43.7333, longitude: 7.4167 },
        { "name": "Moneghetti", latitude: 43.7333, longitude: 7.4167 },
        { "name": "Fontvieille", latitude: 43.7333, longitude: 7.4167 }
      ]
    }
  },
  "Mongolia": {
    timezones: ["Asia/Ulaanbaatar"],
    cities: {
      "Asia/Ulaanbaatar": [
        { "name": "Ulaanbaatar", latitude: 47.8864, longitude: 106.9057 },
        { "name": "Erdenet", latitude: 49.0364, longitude: 104.1667 },
        { "name": "Darkhan", latitude: 49.4878, longitude: 105.8703 },
        { "name": "Choibalsan", latitude: 48.1236, longitude: 114.5411 },
        { "name": "Mörön", latitude: 49.6333, longitude: 100.1667 }
      ]
    }
  },
  "Montenegro": {
    timezones: ["Europe/Podgorica"],
    cities: {
      "Europe/Podgorica": [
        { "name": "Podgorica", latitude: 42.4411, longitude: 19.2636 },
        { "name": "Nikšić", latitude: 42.7792, longitude: 18.9703 },
        { "name": "Bijelo Polje", latitude: 43.0036, longitude: 19.1472 },
        { "name": "Herceg Novi", latitude: 42.4536, longitude: 18.5319 },
        { "name": "Tivat", latitude: 42.4333, longitude: 18.7139 }
      ]
    }
  },
  "Oman": {
    timezones: ["Asia/Muscat"],
    cities: {
      "Asia/Muscat": [
        { "name": "Muscat", latitude: 23.5859, longitude: 58.4059 },
        { "name": "Salalah", latitude: 17.013, longitude: 54.0926 },
        { "name": "Sohar", latitude: 24.3667, longitude: 56.6167 },
        { "name": "Nizwa", latitude: 22.9333, longitude: 57.5333 },
        { "name": "Sur", latitude: 22.5667, longitude: 59.5294 }
      ]
    }
  },
  "Palau": {
    timezones: ["Pacific/Palau"],
    cities: {
      "Pacific/Palau": [
        { "name": "Ngerulmud", latitude: 7.367, longitude: 134.5011 },
        { "name": "Koror", latitude: 7.3256, longitude: 134.4784 },
        { "name": "Melekeok", latitude: 7.4536, longitude: 134.6256 },
        { "name": "Airai", latitude: 7.3553, longitude: 134.5056 },
        { "name": "Babeldaob", latitude: 7.475, longitude: 134.5933 }
      ]
    }
  },
  "Panama": {
    timezones: ["America/Panama"],
    cities: {
      "America/Panama": [
        { "name": "Panama City", latitude: 8.9833, longitude: -79.5167 },
        { "name": "Colón", latitude: 9.3605, longitude: -79.9005 },
        { "name": "David", latitude: 8.4297, longitude: -82.4281 },
        { "name": "Chiriquí", latitude: 8.056, longitude: -81.7005 },
        { "name": "La Chorrera", latitude: 8.7611, longitude: -79.7497 }
      ]
    }
  },
  "Papua New Guinea": {
    timezones: ["Pacific/Port_Moresby"],
    cities: {
      "Pacific/Port_Moresby": [
        { "name": "Port Moresby", latitude: -9.4433, longitude: 147.1805 },
        { "name": "Lae", latitude: -6.7247, longitude: 146.9905 },
        { "name": "Mount Hagen", latitude: -5.8578, longitude: 144.2883 },
        { "name": "Madang", latitude: -5.2075, longitude: 145.7883 },
        { "name": "Rabaul", latitude: -4.2014, longitude: 152.2022 }
      ]
    }
  },
  "Paraguay": {
    timezones: ["America/Asuncion"],
    cities: {
      "America/Asuncion": [
        { "name": "Asunción", latitude: -25.2637, longitude: -57.5759 },
        { "name": "Ciudad del Este", latitude: -25.5086, longitude: -54.6092 },
        { "name": "Luque", latitude: -25.2986, longitude: -57.4786 },
        { "name": "San Lorenzo", latitude: -25.292, longitude: -57.542 },
        { "name": "Encarnación", latitude: -27.3667, longitude: -55.8667 }
      ]
    }
  },
  "Peru": {
    timezones: ["America/Lima"],
    cities: {
      "America/Lima": [
        { "name": "Lima", latitude: -12.0464, longitude: -77.0428 },
        { "name": "Arequipa", latitude: -16.4091, longitude: -71.5375 },
        { "name": "Trujillo", latitude: -8.1113, longitude: -79.0302 },
        { "name": "Chiclayo", latitude: -6.7744, longitude: -79.8411 },
        { "name": "Piura", latitude: -5.1945, longitude: -80.6328 }
      ]
    }
  },
  "Puerto Rico": {
    timezones: ["America/Puerto_Rico"],
    cities: {
      "America/Puerto_Rico": [
        { "name": "San Juan", latitude: 18.4655, longitude: -66.1057 },
        { "name": "Ponce", latitude: 17.9784, longitude: -66.9756 },
        { "name": "Bayamón", latitude: 18.1931, longitude: -66.1496 },
        { "name": "Carolina", latitude: 18.3419, longitude: -65.9833 },
        { "name": "Mayagüez", latitude: 18.2016, longitude: -67.1384 }
      ]
    }
  },
  "Qatar": {
    timezones: ["Asia/Qatar"],
    cities: {
      "Asia/Qatar": [
        { "name": "Doha", latitude: 25.276987, longitude: 51.520008 },
        { "name": "Al Rayyan", latitude: 25.2295, longitude: 51.4005 },
        { "name": "Al Khor", latitude: 25.6833, longitude: 51.5167 },
        { "name": "Al Wakrah", latitude: 25.1743, longitude: 51.6095 },
        { "name": "Umm Salal", latitude: 25.3741, longitude: 51.2908 }
      ]
    }
  },
  "Rwanda": {
    timezones: ["Africa/Kigali"],
    cities: {
      "Africa/Kigali": [
        { "name": "Kigali", latitude: -1.9441, longitude: 30.0619 },
        { "name": "Butare", latitude: -2.6014, longitude: 29.7464 },
        { "name": "Musanze", latitude: -1.5014, longitude: 29.5953 },
        { "name": "Rubavu", latitude: -1.6931, longitude: 29.3656 },
        { "name": "Nyamata", latitude: -2.0736, longitude: 30.2061 }
      ]
    }
  },
  "Saint Kitts and Nevis": {
    timezones: ["America/St_Kitts"],
    cities: {
      "America/St_Kitts": [
        { "name": "Basseterre", latitude: 17.3026, longitude: -62.7177 },
        { "name": "Charlestown", latitude: 17.1333, longitude: -62.5833 },
        { "name": "Cayon", latitude: 17.3222, longitude: -62.6967 },
        { "name": "Sandy Point Town", latitude: 17.3528, longitude: -62.7972 },
        { "name": "Tabernacle", latitude: 17.2903, longitude: -62.7197 }
      ]
    }
  },
  "Saint Lucia": {
    timezones: ["America/St_Lucia"],
    cities: {
      "America/St_Lucia": [
        { "name": "Castries", latitude: 13.998, longitude: -61.0022 },
        { "name": "Gros Islet", latitude: 14.0703, longitude: -60.9528 },
        { "name": "Vieux Fort", latitude: 13.7167, longitude: -60.9667 },
        { "name": "Soufrière", latitude: 13.8486, longitude: -61.0747 },
        { "name": "Dennery", latitude: 13.7914, longitude: -60.9469 }
      ]
    }
  },
  "American Samoa": {
  timezones: ["Pacific/Pago_Pago"],
  cities: {
    "Pacific/Pago_Pago": [
      { "name": "Pago Pago", latitude: -14.2781, longitude: -170.7025 },
      { "name": "Tafuna", latitude: -14.335, longitude: -170.72 },
      { "name": "Leone", latitude: -14.343, longitude: -170.785 },
      { "name": "Faleniu", latitude: -14.3333, longitude: -170.7167 },
      { "name": "Aua", latitude: -14.2767, longitude: -170.6667 }
    ]
  }
},
  "Samoa": {
    timezones: ["Pacific/Apia"],
    cities: {
      "Pacific/Apia": [
        { "name": "Apia", latitude: -13.8333, longitude: -171.7667 },
        { "name": "Vaitele", latitude: -13.8253, longitude: -171.8606 },
        { "name": "Faleula", latitude: -13.8667, longitude: -171.8833 },
        { "name": "Siumu", latitude: -13.8653, longitude: -172.0103 },
        { "name": "Saleufi", latitude: -13.8797, longitude: -171.8403 }
      ]
    }
  },
  "San Marino": {
    timezones: ["Europe/San_Marino"],
    cities: {
      "Europe/San_Marino": [
        { "name": "San Marino", latitude: 43.9333, longitude: 12.45 },
        { "name": "Serravalle", latitude: 43.95, longitude: 12.4667 },
        { "name": "Domagnano", latitude: 43.9342, longitude: 12.4475 },
        { "name": "Borgo Maggiore", latitude: 43.9333, longitude: 12.45 },
        { "name": "Chiesanuova", latitude: 43.9333, longitude: 12.5167 }
      ]
    }
  },
  "Solomon Islands": {
    timezones: ["Pacific/Guadalcanal"],
    cities: {
      "Pacific/Guadalcanal": [
        { "name": "Honiara", latitude: -9.4333, longitude: 159.9500 },
        { "name": "Auki", latitude: -9.5597, longitude: 160.0725 },
        { "name": "Gizo", latitude: -8.1150, longitude: 156.8242 },
        { "name": "Munda", latitude: -8.2667, longitude: 157.3167 },
        { "name": "Kira Kira", latitude: -10.1197, longitude: 161.6161 }
      ]
    }
  },
  "Somalia": {
    timezones: ["Africa/Mogadishu"],
    cities: {
      "Africa/Mogadishu": [
        { "name": "Mogadishu", latitude: 2.0587, longitude: 45.3427 },
        { "name": "Hargeisa", latitude: 9.55, longitude: 44.0667 },
        { "name": "Bosaso", latitude: 11.2833, longitude: 49.1833 },
        { "name": "Kismayo", latitude: -0.3553, longitude: 42.5453 },
        { "name": "Baidoa", latitude: 3.1000, longitude: 43.6500 }
      ]
    }
  },
  "Suriname": {
    timezones: ["America/Paramaribo"],
    cities: {
      "America/Paramaribo": [
        { "name": "Paramaribo", latitude: 5.8667, longitude: -55.1667 },
        { "name": "Nieuw Nickerie", latitude: 5.9306, longitude: -56.1417 },
        { "name": "Lelydorp", latitude: 5.8667, longitude: -55.2 },
        { "name": "Moengo", latitude: 5.3875, longitude: -54.0528 },
        { "name": "Papatam", latitude: 5.6328, longitude: -54.8042 }
      ]
    }
  },
"Syria": {
  timezones: ["Asia/Damascus"],
  cities: {
    "Asia/Damascus": [
      { "name": "Damascus", latitude: 33.5138, longitude: 36.2765 },
      { "name": "Aleppo", latitude: 36.2021, longitude: 37.1343 },
      { "name": "Homs", latitude: 34.7311, longitude: 36.7184 },
      { "name": "Latakia", latitude: 35.5100, longitude: 35.7796 },
      { "name": "Daraa", latitude: 32.6167, longitude: 36.0700 }
    ]
  }
},
"Taiwan": {
  timezones: ["Asia/Taipei"],
  cities: {
    "Asia/Taipei": [
      { "name": "Taipei", latitude: 25.0330, longitude: 121.5654 },
      { "name": "Kaohsiung", latitude: 22.6163, longitude: 120.3133 },
      { "name": "Taichung", latitude: 24.1477, longitude: 120.6736 },
      { "name": "Tainan", latitude: 22.9999, longitude: 120.2270 },
      { "name": "Keelung", latitude: 25.1333, longitude: 121.7417 }
    ]
  }
},
"Timor-Leste": {
  timezones: ["Asia/Dili"],
  cities: {
    "Asia/Dili": [
      { "name": "Dili", latitude: -8.5569, longitude: 125.5594 },
      { "name": "Baucau", latitude: -8.4608, longitude: 126.4800 },
      { "name": "Maliana", latitude: -8.6319, longitude: 125.2522 },
      { "name": "Viqueque", latitude: -8.5242, longitude: 126.2958 },
      { "name": "Lospalos", latitude: -8.5447, longitude: 126.2639 }
    ]
  }
},
"Tokelau": {
  timezones: ["Pacific/Fakaofo"],
  cities: {
    "Pacific/Fakaofo": [
      { "name": "Fakaofo", latitude: -9.2000, longitude: -171.2000 },
      { "name": "Atafu", latitude: -9.2342, longitude: -171.7903 },
      { "name": "Nukunonu", latitude: -9.2000, longitude: -171.9000 }
    ]
  }
},
"Tonga": {
  timezones: ["Pacific/Tongatapu"],
  cities: {
    "Pacific/Tongatapu": [
      { "name": "Nuku'alofa", latitude: -21.1391, longitude: -175.1997 },
      { "name": "Neiafu", latitude: -18.6421, longitude: -173.9881 },
      { "name": "Vava'u", latitude: -18.6425, longitude: -173.9900 },
      { "name": "Ha'apai", latitude: -19.9167, longitude: -174.3833 }
    ]
  }
},
"Trinidad and Tobago": {
  timezones: ["America/Port_of_Spain"],
  cities: {
    "America/Port_of_Spain": [
      { "name": "Port of Spain", latitude: 10.6522, longitude: -61.6034 },
      { "name": "San Fernando", latitude: 10.2833, longitude: -61.4517 },
      { "name": "Scarborough", latitude: 11.1750, longitude: -60.7344 },
      { "name": "Chaguanas", latitude: 10.5170, longitude: -61.4167 },
      { "name": "Arima", latitude: 10.6333, longitude: -61.2667 }
    ]
  }
},
"Turkmenistan": {
  timezones: ["Asia/Ashgabat"],
  cities: {
    "Asia/Ashgabat": [
      { "name": "Ashgabat", latitude: 37.9601, longitude: 58.3791 },
      { "name": "Mary", latitude: 37.6075, longitude: 61.8375 },
      { "name": "Turkmenabat", latitude: 39.0600, longitude: 63.6000 },
      { "name": "Dashoguz", latitude: 41.8292, longitude: 59.9967 }
    ]
  }
},
"Tuvalu": {
  timezones: ["Pacific/Funafuti"],
  cities: {
    "Pacific/Funafuti": [
      { name: "Funafuti", latitude: -8.5243, longitude: 179.1941 },
      { name: "Nanumea", latitude: -5.6685, longitude: 176.1311 },
      { name: "Nukufetau", latitude: -7.989, longitude: 178.3247 },
      { name: "Vaitupu", latitude: -7.4622, longitude: 178.6736 },
      { name: "Nanumanga", latitude: -6.2806, longitude: 176.3242 },
      { name: "Niutao", latitude: -6.1094, longitude: 177.3422 }
    ]
  }
},
"Vanuatu": {
  timezones: ["Pacific/Efate"],
  cities: {
    "Pacific/Efate": [
      { "name": "Port Vila", latitude: -17.7333, longitude: 168.3136 },
      { "name": "Luganville", latitude: -15.5258, longitude: 167.1886 },
      { "name": "Lenakel", latitude: -19.5333, longitude: 169.2333 },
      { "name": "Santo", latitude: -15.0225, longitude: 167.0180 }
    ]
  }
},
"Vatican City": {
  timezones: ["Europe/Vatican"],
  cities: {
    "Europe/Vatican": [
      { "name": "Vatican City", latitude: 41.9029, longitude: 12.4534 }
    ]
  }
},
"Venezuela": {
  timezones: ["America/Caracas"],
  cities: {
    "America/Caracas": [
      { "name": "Caracas", latitude: 10.4806, longitude: -66.9036 },
      { "name": "Maracaibo", latitude: 10.6549, longitude: -71.6191 },
      { "name": "Barquisimeto", latitude: 10.0731, longitude: -69.2910 },
      { "name": "Maracay", latitude: 10.2462, longitude: -67.5952 }
    ]
  }
},
"Yemen": {
  timezones: ["Asia/Aden"],
  cities: {
    "Asia/Aden": [
      { "name": "Aden", latitude: 12.7797, longitude: 45.0367 },
      { "name": "Taiz", latitude: 13.5797, longitude: 44.0208 },
      { "name": "Sanaa", latitude: 15.3694, longitude: 44.1910 },
      { "name": "Al Hudaydah", latitude: 14.7972, longitude: 42.9578 },
      { "name": "Mukalla", latitude: 14.5547, longitude: 49.1206 }
    ]
  },
},
"Palestine": {
  timezones: ["Asia/Gaza", "Asia/Hebron"],
  cities: {
    "Asia/Gaza": [
      { "name": "Gaza", latitude: 31.5013, longitude: 34.4668 },
      { "name": "Khan Yunis", latitude: 31.3402, longitude: 34.3063 },
      { "name": "Rafah", latitude: 31.2941, longitude: 34.2406 },
      { "name": "Deir al-Balah", latitude: 31.4189, longitude: 34.3497 },
      { "name": "Jabalia", latitude: 31.5272, longitude: 34.4838 }
    ],
    "Asia/Hebron": [
      { "name": "Hebron", latitude: 31.5326, longitude: 35.0998 },
      { "name": "Bethlehem", latitude: 31.7054, longitude: 35.2024 },
      { "name": "Jericho", latitude: 31.8682, longitude: 35.4491 },
      { "name": "Nablus", latitude: 32.2211, longitude: 35.2544 },
      { "name": "Ramallah", latitude: 31.8996, longitude: 35.2042 }
    ]
  }
},
"Bahamas": {
  timezones: ["America/Nassau"],
  cities: {
    "America/Nassau": [
      { "name": "Nassau", latitude: 25.0343, longitude: -77.3963 },
      { "name": "Freeport", latitude: 26.5333, longitude: -78.7000 },
      { "name": "West End", latitude: 26.6872, longitude: -78.9766 },
      { "name": "Marsh Harbour", latitude: 26.5412, longitude: -77.0636 },
      { "name": "Alice Town", latitude: 25.7279, longitude: -79.3008 }
    ]
  }
},
"Andorra": {
  timezones: ["Europe/Andorra"],
  cities: {
    "Europe/Andorra": [
      { name: "Andorra la Vella", latitude: 42.506317, longitude: 1.521835 },
      { name: "Escaldes-Engordany", latitude: 42.5078, longitude: 1.5341 },
      { name: "Sant Julià de Lòria", latitude: 42.46372, longitude: 1.49129 },
      { name: "La Massana", latitude: 42.54499, longitude: 1.51483 },
      { name: "Ordino", latitude: 42.55623, longitude: 1.53319 }
    ]
  }
}




}