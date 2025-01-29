"use client";

import { notFound, usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Banner } from "./Banner";
import { PrayerTimesTable } from "./PrayerTimeTable";
import { CountryInfo } from "./CountryInfo";
import CustomSkeleton from "@/components/ui/CustomSkeleton";

type CityPrayerTimes = {
  name: string;
  times: {
    fajr: string;
    sunrise: string;
    dhuhr: string;
    asr: string;
    maghrib: string;
    isha: string;
  };
};
interface PrayerTimesTableProps {
  country: string;
  timezone: string;
}

type CountryData = {
  timezones: string[];
  countryCode: string; // ISO country code
  cities: CityPrayerTimes[];
  name: string;
  timezone: string;
  bannerImage: string;
};

const timezoneMapping: { zone: string; utc: string; name: string }[] = [
  { zone: "Asia/Baku", utc: "(GMT+04:00)", name: "Azerbaijan" },
  { zone: "Asia/Yerevan", utc: "(GMT+04:00)", name: "Armenia" },
  { zone: "America/Antigua", utc: "(GMT-04:00)", name: "Antigua and Barbuda" },
  { zone: "Europe/Andorra", utc: "(GMT+01:00)", name: "Andorra" },
  { zone: "Pacific/Pago_Pago", utc: "(GMT-11:00)", name: "American Samoa" },
  { zone: "Europe/Tirane", utc: "(GMT+01:00)", name: "Albania" },
  { zone: "Pacific/Midway", utc: "(GMT-11:00)", name: "Midway Island" },
  { zone: "US/Samoa", utc: "(GMT-11:00)", name: "Samoa" },
  { zone: "US/Hawaii", utc: "(GMT-10:00)", name: "Hawaii" },
  { zone: "US/Alaska", utc: "(GMT-09:00)", name: "Alaska" },
  { zone: "US/Pacific", utc: "(GMT-08:00)", name: "Pacific Time (US & Canada)" },
  { zone: "America/Tijuana", utc: "(GMT-08:00)", name: "Tijuana" },
  { zone: "US/Arizona", utc: "(GMT-07:00)", name: "Arizona" },
  { zone: "US/Mountain", utc: "(GMT-07:00)", name: "Mountain Time (US & Canada)" },
  { zone: "America/Chihuahua", utc: "(GMT-07:00)", name: "Chihuahua" },
  { zone: "America/Mazatlan", utc: "(GMT-07:00)", name: "Mazatlan" },
  { zone: "America/Mexico_City", utc: "(GMT-06:00)", name: "Mexico City" },
  { zone: "America/Monterrey", utc: "(GMT-06:00)", name: "Monterrey" },
  { zone: "America/Nassau", utc: "(GMT-05:00)", name: "Bahamas" },
  { zone: "Canada/Saskatchewan", utc: "(GMT-06:00)", name: "Saskatchewan" },
  { zone: "US/Central", utc: "(GMT-06:00)", name: "Central Time (US & Canada)" },
  { zone: "US/Eastern", utc: "(GMT-05:00)", name: "Eastern Time (US & Canada)" },
  { zone: "US/East-Indiana", utc: "(GMT-05:00)", name: "Indiana (East)" },
  { zone: "America/Bogota", utc: "(GMT-05:00)", name: "Bogota" },
  { zone: "America/Lima", utc: "(GMT-05:00)", name: "Lima" },
  { zone: "America/Caracas", utc: "(GMT-04:30)", name: "Caracas" },
  { zone: "Canada/Atlantic", utc: "(GMT-04:00)", name: "Atlantic Time (Canada)" },
  { zone: "America/La_Paz", utc: "(GMT-04:00)", name: "La_Paz" },
  { zone: "America/Santiago", utc: "(GMT-04:00)", name: "Santiago" },
  { zone: "Canada/Newfoundland", utc: "(GMT-03:30)", name: "Newfoundland" },
  { zone: "America/Buenos_Aires", utc: "(GMT-03:00)", name: "Buenos Aires" },
  { zone: "Greenland", utc: "(GMT-03:00)", name: "Greenland" },
  { zone: "Atlantic/Stanley", utc: "(GMT-02:00)", name: "Stanley" },
  { zone: "Atlantic/Azores", utc: "(GMT-01:00)", name: "Azores" },
  { zone: "Atlantic/Cape_Verde", utc: "(GMT-01:00)", name: "Cape Verde Is." },
  { zone: "Africa/Casablanca", utc: "(GMT)", name: "Casablanca" },
  { zone: "Europe/Dublin", utc: "(GMT)", name: "Dublin" },
  { zone: "Europe/Lisbon", utc: "(GMT)", name: "Lisbon" },
  { zone: "Europe/London", utc: "(GMT)", name: "London" },
  { zone: "Africa/Monrovia", utc: "(GMT)", name: "Monrovia" },
  { zone: "Europe/Amsterdam", utc: "(UTC+01:00)", name: "Amsterdam" },
  { zone: "Europe/Belgrade", utc: "(UTC+01:00)", name: "Belgrade" },
  { zone: "Europe/Berlin", utc: "(UTC+01:00)", name: "Berlin" },
  { zone: "Europe/Bratislava", utc: "(UTC+01:00)", name: "Bratislava" },
  { zone: "Europe/Brussels", utc: "(UTC+01:00)", name: "Brussels" },
  { zone: "Europe/Budapest", utc: "(UTC+01:00)", name: "Budapest" },
  { zone: "Europe/Copenhagen", utc: "(UTC+01:00)", name: "Copenhagen" },
  { zone: "Europe/Ljubljana", utc: "(UTC+01:00)", name: "Ljubljana" },
  { zone: "Europe/Madrid", utc: "(UTC+01:00)", name: "Madrid" },
  { zone: "Europe/Paris", utc: "(UTC+01:00)", name: "Paris" },
  { zone: "Europe/Prague", utc: "(UTC+01:00)", name: "Prague" },
  { zone: "Europe/Rome", utc: "(UTC+01:00)", name: "Rome" },
  { zone: "Europe/Sarajevo", utc: "(UTC+01:00)", name: "Sarajevo" },
  { zone: "Europe/Skopje", utc: "(UTC+01:00)", name: "Skopje" },
  { zone: "Europe/Stockholm", utc: "(UTC+01:00)", name: "Stockholm" },
  { zone: "America/Montevideo", utc: "(GMT-03:00)", name: "Montevideo" },
  { zone: "Asia/Tashkent", utc: "(GMT+05:00)", name: "Tashkent" },
  { zone: "Europe/Vienna", utc: "(UTC+01:00)", name: "Vienna" },
  { zone: "Europe/Warsaw", utc: "(UTC+01:00)", name: "Warsaw" },
  { zone: "Europe/Zagreb", utc: "(UTC+01:00)", name: "Zagreb" },
  { zone: "Europe/Athens", utc: "(UTC+02:00)", name: "Athens" },
  { zone: "Europe/Bucharest", utc: "(UTC+02:00)", name: "Bucharest" },
  { zone: "Africa/Harare", utc: "(UTC+02:00)", name: "Harare" },
  { zone: "Europe/Helsinki", utc: "(UTC+02:00)", name: "Helsinki" },
  { zone: "Europe/Istanbul", utc: "(UTC+02:00)", name: "Istanbul" },
  { zone: "Asia/Jerusalem", utc: "(UTC+02:00)", name: "Jerusalem" },
  { zone: "Europe/Kiev", utc: "(UTC+02:00)", name: "Kiev" },
  { zone: "Europe/Minsk", utc: "(UTC+02:00)", name: "Minsk" },
  { zone: "Europe/Riga", utc: "(UTC+02:00)", name: "Riga" },
  { zone: "Europe/Sofia", utc: "(UTC+02:00)", name: "Sofia" },
  { zone: "Europe/Tallinn", utc: "(UTC+02:00)", name: "Tallinn" },
  { zone: "Europe/Vilnius", utc: "(UTC+02:00)", name: "Vilnius" },
  { zone: "Asia/Baghdad", utc: "(UTC+03:00)", name: "Baghdad" },
  { zone: "Asia/Kuwait", utc: "(UTC+03:00)", name: "Kuwait" },
  { zone: "America/Jamaica", utc: "(UTC-05:00)", name: "Jamaica" },
  { zone: "Asia/Riyadh", utc: "(UTC+03:00)", name: "Riyadh" },
  { zone: "Africa/Nairobi", utc: "(UTC+03:00)", name: "Nairobi" },
  { zone: "Asia/Tehran", utc: "(UTC+03:30)", name: "Tehran" },
  { zone: "Asia/Muscat", utc: "(UTC+04:00)", name: "Muscat" },
  { zone: "Asia/Dubai", utc: "(UTC+04:00)", name: "Dubai" },
  { zone: "Asia/Baku", utc: "(UTC+04:00)", name: "Baku" },
  { zone: "Europe/Moscow", utc: "(UTC+04:00)", name: "Moscow" },
  { zone: "Asia/Kabul", utc: "(UTC+04:30)", name: "Kabul" },
  { zone: "Asia/Tashkent", utc: "(UTC+05:00)", name: "Tashkent" },
  { zone: "Asia/Dushanbe", utc: "(GMT+05:00)", name: "Tajikistan" },
  { zone: "Asia/Yekaterinburg", utc: "(UTC+05:00)", name: "Yekaterinburg" },
  { zone: "Asia/Karachi", utc: "(UTC+05:00)", name: "Karachi" },
  { zone: "Asia/Kolkata", utc: "(UTC+05:30)", name: "Kolkata" },
  { zone: "Asia/Colombo", utc: "(UTC+05:30)", name: "Colombo" },
  { zone: "Asia/Kathmandu", utc: "(UTC+05:45)", name: "Kathmandu" },
  { zone: "Asia/Dhaka", utc: "(UTC+06:00)", name: "Dhaka" },
  { zone: "Asia/Almaty", utc: "(UTC+06:00)", name: "Almaty" },
  { zone: "Asia/Novosibirsk", utc: "(UTC+06:00)", name: "Novosibirsk" },
  { zone: "Asia/Rangoon", utc: "(UTC+06:30)", name: "Rangoon" },
  { zone: "Asia/Bangkok", utc: "(UTC+07:00)", name: "Bangkok" },
  { zone: "Asia/Jakarta", utc: "(UTC+07:00)", name: "Jakarta" },
  { zone: "Asia/Krasnoyarsk", utc: "(UTC+07:00)", name: "Krasnoyarsk" },
  { zone: "Asia/Shanghai", utc: "(UTC+08:00)", name: "Beijing" },
  { zone: "Asia/Chongqing", utc: "(UTC+08:00)", name: "Chongqing" },
  { zone: "Asia/Hong_Kong", utc: "(UTC+08:00)", name: "Hong Kong" },
  { zone: "Asia/Urumqi", utc: "(UTC+08:00)", name: "Urumqi" },
  { zone: "Asia/Irkutsk", utc: "(UTC+08:00)", name: "Irkutsk" },
  { zone: "Asia/Ulaanbaatar", utc: "(UTC+08:00)", name: "Ulaan Bataar" },
  { zone: "Asia/Kuala_Lumpur", utc: "(UTC+08:00)", name: "Kuala Lumpur" },
  { zone: "Asia/Singapore", utc: "(UTC+08:00)", name: "Singapore" },
  { zone: "Asia/Taipei", utc: "(UTC+08:00)", name: "Taipei" },
  { zone: "Asia/Bahrain", utc: "(GMT+03:00)", name: "Bahrain" },
  { zone: "America/Belize", utc: "(GMT-06:00)", name: "Belize" },
  { zone: "America/Barbados", utc: "(GMT-04:00)", name: "Barbados" },
  { zone: "Europe/Minsk", utc: "(GMT+03:00)", name: "Belarus" },
  { zone: "Africa/Porto-Novo", utc: "(GMT+01:00)", name: "Benin" },
  { zone: "America/La_Paz", utc: "(GMT-04:00)", name: "Bolivia" },
  { zone: "Europe/Sarajevo", utc: "(GMT+01:00)", name: "Bosnia and Herzegovina" },
  { zone: "Australia/Perth", utc: "(UTC+08:00)", name: "Perth" },
  { zone: "Asia/Seoul", utc: "(UTC+09:00)", name: "Seoul" },
  { zone: "Asia/Tokyo", utc: "(UTC+09:00)", name: "Tokyo" },
  { zone: "Asia/Yakutsk", utc: "(UTC+09:00)", name: "Yakutsk" },
  { zone: "Australia/Darwin", utc: "(UTC+09:30)", name: "Darwin" },
  { zone: "Australia/Adelaide", utc: "(UTC+09:30)", name: "Adelaide" },
  { zone: "Australia/Canberra", utc: "(UTC+10:00)", name: "Canberra" },
  { zone: "Australia/Melbourne", utc: "(UTC+10:00)", name: "Melbourne" },
  { zone: "Australia/Sydney", utc: "(UTC+10:00)", name: "Sydney" },
  { zone: "Australia/Brisbane", utc: "(UTC+10:00)", name: "Brisbane" },
  { zone: "Australia/Hobart", utc: "(UTC+10:00)", name: "Hobart" },
  { zone: "Asia/Vladivostok", utc: "(UTC+10:00)", name: "Vladivostok" },
  { zone: "Pacific/Guam", utc: "(UTC+10:00)", name: "Guam" },
  { zone: "Asia/Magadan", utc: "(UTC+11:00)", name: "Magadan" },
  { zone: "Pacific/Fiji", utc: "(UTC+12:00)", name: "Fiji" },
  { zone: "Asia/Kamchatka", utc: "(UTC+12:00)", name: "Kamchatka" },
  { zone: "Pacific/Auckland", utc: "(UTC+12:00)", name: "Auckland" },
  { zone: "Pacific/Tongatapu", utc: "(UTC+13:00)", name: "Nukualofa" },
  { zone: "Europe/Prague", utc: "(GMT+01:00)", name: "Czechia" },
  { zone: "Asia/Nicosia", utc: "(GMT+02:00)", name: "Cyprus" },
  { zone: "America/Havana", utc: "(GMT-05:00)", name: "Cuba" },
  { zone: "Europe/Zagreb", utc: "(GMT+01:00)", name: "Croatia" },
  { zone: "America/Costa_Rica", utc: "(GMT-06:00)", name: "Costa Rica" },
  { zone: "Indian/Comoro", utc: "(GMT+03:00)", name: "Comoros" },
  { zone: "America/Bogota", utc: "(GMT-05:00)", name: "Colombia" },
  { zone: "America/Santiago", utc: "(GMT-03:00)", name: "Chile" },
  { zone: "Africa/Ndjamena", utc: "(GMT+01:00)", name: "Chad" },
  { zone: "Africa/Bangui", utc: "(GMT+01:00)", name: "Central African Republic" },
  { zone: "Africa/Douala", utc: "(GMT+01:00)", name: "Cameroon" },
  { zone: "Africa/Djibouti", utc: "(GMT+03:00)", name: "Djibouti" },
  { zone: "America/Dominica", utc: "(GMT-04:00)", name: "Dominica" },
  { zone: "America/Santo_Domingo", utc: "(GMT-04:00)", name: "Dominican Republic" },
  { zone: "America/Guayaquil", utc: "(GMT-05:00)", name: "Ecuador" },
  { zone: "Africa/Cairo", utc: "(GMT+02:00)", name: "Egypt" },
  { zone: "America/El_Salvador", utc: "(GMT-06:00)", name: "El Salvador" },
  { zone: "Africa/Malabo", utc: "(GMT+01:00)", name: "Equatorial Guinea" },
  { zone: "Africa/Asmara", utc: "(GMT+03:00)", name: "Eritrea" },
  { zone: "Europe/Tallinn", utc: "(GMT+02:00)", name: "Estonia" },
  { zone: "Africa/Mbabane", utc: "(GMT+02:00)", name: "Eswatini" },
  { zone: "Pacific/Fiji", utc: "(GMT+12:00)", name: "Fiji" },
  { zone: "Africa/Libreville", utc: "(GMT+01:00)", name: "Gabon" },
  { zone: "Africa/Banjul", utc: "(GMT+00:00)", name: "Gambia" },
  { zone: "Asia/Tbilisi", utc: "(GMT+04:00)", name: "Georgia" },
  { zone: "America/Grenada", utc: "(GMT-04:00)", name: "Grenada" },
  { zone: "America/Guatemala", utc: "(GMT-06:00)", name: "Guatemala" },
  { zone: "America/Guyana", utc: "(GMT-04:00)", name: "Guyana" },
  { zone: "America/Port-au-Prince", utc: "(GMT-05:00)", name: "Haiti" },
  { zone: "America/Tegucigalpa", utc: "(GMT-06:00)", name: "Honduras" },
  { zone: "Asia/Baghdad", utc: "(GMT+03:00)", name: "Iraq" },
  { zone: "Asia/Amman", utc: "(GMT+03:00)", name: "Jordan" },
  { zone: "Asia/Almaty", utc: "(GMT+06:00)", name: "Kazakhstan" },
  { zone: "Pacific/Tarawa", utc: "(GMT+12:00)", name: "Kiribati" },
  { zone: "Asia/Kuwait", utc: "(GMT+03:00)", name: "Kuwait" },
  { zone: "Asia/Bishkek", utc: "(GMT+06:00)", name: "Kyrgyzstan" },
  { zone: "Asia/Pyongyang", utc: "(GMT+09:00)", name: "North Korea" },
  { zone: "Pacific/Nauru", utc: "(GMT+12:00)", name: "Nauru" },
  { zone: "America/Managua", utc: "(GMT-06:00)", name: "Nicaragua" },
  { zone: "Africa/Niamey", utc: "(GMT+01:00)", name: "Niger" },
  { zone: "Europe/Skopje", utc: "(GMT+01:00)", name: "North Macedonia" },
  { zone: "Asia/Vientiane", utc: "(GMT+07:00)", name: "Laos" },
  { zone: "Europe/Riga", utc: "(GMT+02:00)", name: "Latvia" },
  { zone: "Asia/Beirut", utc: "(GMT+03:00)", name: "Lebanon" },
  { zone: "Africa/Maseru", utc: "(GMT+02:00)", name: "Lesotho" },
  { zone: "Africa/Monrovia", utc: "(GMT+00:00)", name: "Liberia" },
  { zone: "Europe/Vaduz", utc: "(GMT+01:00)", name: "Liechtenstein" },
  { zone: "Europe/Vilnius", utc: "(GMT+02:00)", name: "Lithuania" },
  { zone: "Europe/Luxembourg", utc: "(GMT+01:00)", name: "Luxembourg" },
  { zone: "Africa/Blantyre", utc: "(GMT+02:00)", name: "Malawi" },
  { zone: "Europe/Malta", utc: "(GMT+01:00)", name: "Malta" },
  { zone: "Pacific/Majuro", utc: "(GMT+12:00)", name: "Marshall Islands" },
  { zone: "Pacific/Chuuk", utc: "(GMT+10:00)", name: "Micronesia" },
  { zone: "Europe/Chisinau", utc: "(GMT+02:00)", name: "Moldova" },
  { zone: "Europe/Monaco", utc: "(GMT+01:00)", name: "Monaco" },
  { zone: "Asia/Ulaanbaatar", utc: "(GMT+08:00)", name: "Mongolia" },
  { zone: "Europe/Podgorica", utc: "(GMT+01:00)", name: "Montenegro" },
  { zone: "Asia/Muscat", utc: "(GMT+04:00)", name: "Oman" },
  { zone: "Pacific/Palau", utc: "(GMT+09:00)", name: "Palau" },
  { zone: "America/Panama", utc: "(GMT-05:00)", name: "Panama" },
  { zone: "Pacific/Port_Moresby", utc: "(GMT+10:00)", name: "Papua New Guinea" },
  { zone: "America/Asuncion", utc: "(GMT-04:00)", name: "Paraguay" },
  { zone: "America/Lima", utc: "(GMT-05:00)", name: "Peru" },
  { zone: "America/Puerto_Rico", utc: "(GMT-04:00)", name: "Puerto Rico" },
  { zone: "Asia/Qatar", utc: "(GMT+03:00)", name: "Qatar" },
  { zone: "Africa/Kigali", utc: "(GMT+02:00)", name: "Rwanda" },
  { zone: "America/St_Kitts", utc: "(GMT-04:00)", name: "Saint Kitts and Nevis" },
  { zone: "America/St_Lucia", utc: "(GMT-04:00)", name: "Saint Lucia" },
  { zone: "Pacific/Apia", utc: "(GMT+13:00)", name: "Samoa" },
  { zone: "Europe/San_Marino", utc: "(GMT+01:00)", name: "San Marino" },
  { zone: "Asia/Gaza", utc: "(GMT+02:00)", name: "Palestine" },
  { zone: "Asia/Hebron", utc: "(GMT+02:00)", name: "Palestine" },
  { zone: "Europe/Belgrade", utc: "(GMT+01:00)", name: "Serbia" },
  { zone: "Europe/Bratislava", utc: "(GMT+01:00)", name: "Slovakia" },
  { zone: "Europe/Ljubljana", utc: "(GMT+01:00)", name: "Slovenia" },
  { zone: "Pacific/Guadalcanal", utc: "(GMT+11:00)", name: "Solomon Islands" },
  { zone: "Africa/Mogadishu", utc: "(GMT+03:00)", name: "Somalia" },
  { zone: "Asia/Seoul", utc: "(GMT+09:00)", name: "South Korea" },
  { zone: "America/Paramaribo", utc: "(GMT-03:00)", name: "Suriname" },
  { zone: "Asia/Damascus", utc: "(GMT+02:00)", name: "Syria" },
  { zone: "Asia/Taipei", utc: "(GMT+08:00)", name: "Taiwan" },
  { zone: "Asia/Dili", utc: "(GMT+09:00)", name: "Timor-Leste" },
  { zone: "Pacific/Fakaofo", utc: "(GMT+13:00)", name: "Tokelau" },
  { zone: "Pacific/Tongatapu", utc: "(GMT+13:00)", name: "Tonga" },
  { zone: "America/Port_of_Spain", utc: "(GMT-04:00)", name: "Trinidad and Tobago" },
  { zone: "Asia/Ashgabat", utc: "(GMT+05:00)", name: "Turkmenistan" },
  { zone: "Pacific/Funafuti", utc: "(GMT+12:00)", name: "Tuvalu" },
  { zone: "Pacific/Efate", utc: "(GMT+11:00)", name: "Vanuatu" },
  { zone: "Europe/Vatican", utc: "(GMT+01:00)", name: "Vatican City" },
  { zone: "America/Caracas", utc: "(GMT-04:00)", name: "Venezuela" },
  { zone: "Asia/Aden", utc: "(GMT+03:00)", name: "Yemen" },
];


export default function CountryPage() {
  const pathname = usePathname();
  const extracted = pathname.split("/")[2]?.toLowerCase();

  const [country, setCountry] = useState<CountryData | null>(null);
  const [loading, setLoading] = useState(true);
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    const fetchCountryData = async () => {
      try {
        const response = await fetch(
          `https://restcountries.com/v3.1/name/${extracted.replaceAll("-", " ")}?fullText=true`
        );

        if (!response.ok) {
          throw new Error("Country not found");
        }

        const data = await response.json();
        const rawTimezone = data[0].timezones?.[0];

        if (!rawTimezone || typeof rawTimezone !== "string") {
          throw new Error("Invalid timezone data");
        }

        let mappedTimezone: string;
        const countryData: CountryData = {
          countryCode: data[0].cca2,
          name: data[0].name.common,
          timezone: "",
          bannerImage: data[0].flags.svg,
          cities: [],
          timezones: []
        };

        if (data[0].name.common === "United States") {
          mappedTimezone = "US/Eastern"; // Default to Eastern Time
          countryData.timezones = ["US/Eastern", "US/Central", "US/Mountain", "US/Pacific"];
        } else if (data[0].name.common === "Australia") {
          mappedTimezone = "Australia/Sydney"; // Default to Sydney Time
          countryData.timezones = ["Australia/Sydney", "Australia/Adelaide", "Australia/Perth","Australia/Melbourne","Australia/Canberra","Australia/Darwin","Australia/Brisbane","Australia/Hobart"];
        } else if (data[0].name.common === "Canada") {
          mappedTimezone = "America/Toronto"; // Default to Eastern Time
          countryData.timezones = ["America/Toronto", "America/Winnipeg", "America/Edmonton", "America/Vancouver"];
        } else if (data[0].name.common === "Brazil") {
          mappedTimezone = "America/Sao_Paulo"; // Default to Sao Paulo Time
          countryData.timezones = ["America/Sao_Paulo", "America/Manaus", "America/Cuiaba", "America/Fortaleza"];
        } else if (data[0].name.common === "Russia") {
          mappedTimezone = "Europe/Moscow"; // Default to Moscow Time
          countryData.timezones = ["Europe/Moscow", "Asia/Yekaterinburg", "Asia/Novosibirsk", "Asia/Vladivostok"];
        } else if (data[0].name.common === "China") {
          mappedTimezone = "Asia/Shanghai"; // Default to Shanghai Time
          countryData.timezones = ["Asia/Shanghai", "Asia/Urumqi"];
        } else if (data[0].name.common === "India") {
          mappedTimezone = "Asia/Kolkata"; // Default to Kolkata Time
          countryData.timezones = ["Asia/Kolkata"];
        } else if (data[0].name.common === "Mexico") {
          mappedTimezone = "America/Mexico_City"; // Default to Mexico City Time
          countryData.timezones = ["America/Mexico_City", "America/Cancun", "America/Chihuahua", "America/Hermosillo"];
        } else if (data[0].name.common === "Indonesia") {
          mappedTimezone = "Asia/Jakarta"; // Default to Jakarta Time
          countryData.timezones = ["Asia/Jakarta", "Asia/Pontianak", "Asia/Makassar", "Asia/Jayapura"];
        } else if (data[0].name.common === "Argentina") {
          mappedTimezone = "America/Argentina/Buenos_Aires"; // Default to Buenos Aires Time
          countryData.timezones = ["America/Argentina/Buenos_Aires", "America/Argentina/Cordoba", "America/Argentina/Salta", "America/Argentina/Ushuaia"];
        } else if (data[0].name.common === "United Kingdom") {
          mappedTimezone = "Europe/London";
          countryData.timezones = ["Europe/London"];
        } else if (data[0].name.common === "France") {
          mappedTimezone = "Europe/Paris";
          countryData.timezones = ["Europe/Paris"];
        } else if (data[0].name.common === "Germany") {
          mappedTimezone = "Europe/Berlin";
          countryData.timezones = ["Europe/Berlin"];
        } else if (data[0].name.common === "Japan") {
          mappedTimezone = "Asia/Tokyo";
          countryData.timezones = ["Asia/Tokyo"];
        } else if (data[0].name.common === "South Korea") {
          mappedTimezone = "Asia/Seoul";
          countryData.timezones = ["Asia/Seoul"];
        } else if (data[0].name.common === "South Africa") {
          mappedTimezone = "Africa/Johannesburg";
          countryData.timezones = ["Africa/Johannesburg"];
        } else if (data[0].name.common === "New Zealand") {
          mappedTimezone = "Pacific/Auckland";
          countryData.timezones = ["Pacific/Auckland"];
        } else if (data[0].name.common === "Saudi Arabia") {
          mappedTimezone = "Asia/Riyadh";
          countryData.timezones = ["Asia/Riyadh"];
        } else if (data[0].name.common === "United Arab Emirates") {
          mappedTimezone = "Asia/Dubai";
          countryData.timezones = ["Asia/Dubai"];
        } else if (data[0].name.common === "Turkey") {
          mappedTimezone = "Europe/Istanbul";
          countryData.timezones = ["Europe/Istanbul"];
        } else if (data[0].name.common === "Italy") {
          mappedTimezone = "Europe/Rome";
          countryData.timezones = ["Europe/Rome"];
        } else if (data[0].name.common === "Spain") {
          mappedTimezone = "Europe/Madrid";
          countryData.timezones = ["Europe/Madrid"];
        } else if (data[0].name.common === "Nigeria") {
          mappedTimezone = "Africa/Lagos";
          countryData.timezones = ["Africa/Lagos"];
        } else if (data[0].name.common === "Afghanistan") {
          mappedTimezone = "Asia/Kabul";
          countryData.timezones = ["Asia/Kabul"];
        } else if (data[0].name.common === "Pakistan") {
          mappedTimezone = "Asia/Karachi";
          countryData.timezones = ["Asia/Karachi"];
        } else if (data[0].name.common === "Bangladesh") {
          mappedTimezone = "Asia/Dhaka";
          countryData.timezones = ["Asia/Dhaka"];
        } else if (data[0].name.common === "Philippines") {
          mappedTimezone = "Asia/Manila";
          countryData.timezones = ["Asia/Manila"];
        } else if (data[0].name.common === "Vietnam") {
          mappedTimezone = "Asia/Ho_Chi_Minh";
          countryData.timezones = ["Asia/Ho_Chi_Minh"];
        } else if (data[0].name.common === "Thailand") {
          mappedTimezone = "Asia/Bangkok";
          countryData.timezones = ["Asia/Bangkok"];
        } else if (data[0].name.common === "Malaysia") {
          mappedTimezone = "Asia/Kuala_Lumpur";
          countryData.timezones = ["Asia/Kuala_Lumpur"];
        } else if (data[0].name.common === "Singapore") {
          mappedTimezone = "Asia/Singapore";
          countryData.timezones = ["Asia/Singapore"];
        } else if (data[0].name.common === "Israel") {
          mappedTimezone = "Asia/Jerusalem";
          countryData.timezones = ["Asia/Jerusalem"];
        } else if (data[0].name.common === "Palestine") {
          mappedTimezone = "Asia/Gaza";
          countryData.timezones = ["Asia/Gaza","Asia/Hebron"];
        } else if (data[0].name.common === "Netherlands") {
          mappedTimezone = "Europe/Amsterdam";
          countryData.timezones = ["Europe/Amsterdam"];
        } else if (data[0].name.common === "Sweden") {
          mappedTimezone = "Europe/Stockholm";
          countryData.timezones = ["Europe/Stockholm"];
        } else if (data[0].name.common === "Norway") {
          mappedTimezone = "Europe/Oslo";
          countryData.timezones = ["Europe/Oslo"];
        } else if (data[0].name.common === "Denmark") {
          mappedTimezone = "Europe/Copenhagen";
          countryData.timezones = ["Europe/Copenhagen"];
        } else if (data[0].name.common === "Finland") {
          mappedTimezone = "Europe/Helsinki";
          countryData.timezones = ["Europe/Helsinki"];
        } else if (data[0].name.common === "Switzerland") {
          mappedTimezone = "Europe/Zurich";
          countryData.timezones = ["Europe/Zurich"];
        } else if (data[0].name.common === "Austria") {
          mappedTimezone = "Europe/Vienna";
          countryData.timezones = ["Europe/Vienna"];
        } else if (data[0].name.common === "Belgium") {
          mappedTimezone = "Europe/Brussels";
          countryData.timezones = ["Europe/Brussels"];
        } else if (data[0].name.common === "Ireland") {
          mappedTimezone = "Europe/Dublin";
          countryData.timezones = ["Europe/Dublin"];
        } else if (data[0].name.common === "Portugal") {
          mappedTimezone = "Europe/Lisbon";
          countryData.timezones = ["Europe/Lisbon"];
        } else if (data[0].name.common === "Greece") {
          mappedTimezone = "Europe/Athens";
          countryData.timezones = ["Europe/Athens"];
        } else if (data[0].name.common === "Poland") {
          mappedTimezone = "Europe/Warsaw";
          countryData.timezones = ["Europe/Warsaw"];
        } else if (data[0].name.common === "Czech Republic") {
          mappedTimezone = "Europe/Prague";
          countryData.timezones = ["Europe/Prague"];
        } else if (data[0].name.common === "Hungary") {
          mappedTimezone = "Europe/Budapest";
          countryData.timezones = ["Europe/Budapest"];
        } else if (data[0].name.common === "Romania") {
          mappedTimezone = "Europe/Bucharest";
          countryData.timezones = ["Europe/Bucharest"];
        } else if (data[0].name.common === "Bulgaria") {
          mappedTimezone = "Europe/Sofia";
          countryData.timezones = ["Europe/Sofia"];
        } else if (data[0].name.common === "Uruguay") {
          mappedTimezone = "America/Montevideo";
          countryData.timezones = ["America/Montevideo"];
        } else if (data[0].name.common === "Uzbekistan") {
          mappedTimezone = "Asia/Tashkent";
          countryData.timezones = ["Asia/Tashkent"];
        } else if (data[0].name.common === "Tajikistan") {
          mappedTimezone = "Asia/Dushanbe";
          countryData.timezones = ["Asia/Dushanbe"];
        } else if (data[0].name.common === "Ukraine") {
          mappedTimezone = "Europe/Kiev";
          countryData.timezones = ["Europe/Kiev"];
        } else if (data[0].name.common === "Turkey") {
          mappedTimezone = "Europe/Istanbul";
          countryData.timezones = ["Europe/Istanbul"];
        } else if (data[0].name.common === "South Africa") {
          mappedTimezone = "Africa/Johannesburg";
          countryData.timezones = ["Africa/Johannesburg"];
        } else if (data[0].name.common === "Nigeria") {
          mappedTimezone = "Africa/Lagos";
          countryData.timezones = ["Africa/Lagos"];
        } else if (data[0].name.common === "Kenya") {
          mappedTimezone = "Africa/Nairobi";
          countryData.timezones = ["Africa/Nairobi"];
        } else if (data[0].name.common === "Morocco") {
          mappedTimezone = "Africa/Casablanca";
          countryData.timezones = ["Africa/Casablanca"];
        } else if (data[0].name.common === "Algeria") {
          mappedTimezone = "Africa/Algiers";
          countryData.timezones = ["Africa/Algiers"];
        } else if (data[0].name.common === "Tunisia") {
          mappedTimezone = "Africa/Tunis";
          countryData.timezones = ["Africa/Tunis"];
        } else if (data[0].name.common === "Libya") {
          mappedTimezone = "Africa/Tripoli";
          countryData.timezones = ["Africa/Tripoli"];
        } else if (data[0].name.common === "Sudan") {
          mappedTimezone = "Africa/Khartoum";
          countryData.timezones = ["Africa/Khartoum"];
        } else if (data[0].name.common === "Ethiopia") {
          mappedTimezone = "Africa/Addis_Ababa";
          countryData.timezones = ["Africa/Addis_Ababa"];
        } else if (data[0].name.common === "Ghana") {
          mappedTimezone = "Africa/Accra";
          countryData.timezones = ["Africa/Accra"];
        } else if (data[0].name.common === "Ivory Coast") {
          mappedTimezone = "Africa/Abidjan";
          countryData.timezones = ["Africa/Abidjan"];
        } else if (data[0].name.common === "Senegal") {
          mappedTimezone = "Africa/Dakar";
          countryData.timezones = ["Africa/Dakar"];
        } else if (data[0].name.common === "Uganda") {
          mappedTimezone = "Africa/Kampala";
          countryData.timezones = ["Africa/Kampala"];
        } else if (data[0].name.common === "Tanzania") {
          mappedTimezone = "Africa/Dar_es_Salaam";
          countryData.timezones = ["Africa/Dar_es_Salaam"];
        } else if (data[0].name.common === "Zambia") {
          mappedTimezone = "Africa/Lusaka";
          countryData.timezones = ["Africa/Lusaka"];
        } else if (data[0].name.common === "Zimbabwe") {
          mappedTimezone = "Africa/Harare";
          countryData.timezones = ["Africa/Harare"];
        } else if (data[0].name.common === "Angola") {
          mappedTimezone = "Africa/Luanda";
          countryData.timezones = ["Africa/Luanda"];
        } else if (data[0].name.common === "Mozambique") {
          mappedTimezone = "Africa/Maputo";
          countryData.timezones = ["Africa/Maputo"];
        } else if (data[0].name.common === "Botswana") {
          mappedTimezone = "Africa/Gaborone";
          countryData.timezones = ["Africa/Gaborone"];
        } else if (data[0].name.common === "Namibia") {
          mappedTimezone = "Africa/Windhoek";
          countryData.timezones = ["Africa/Windhoek"];
        } else if (data[0].name.common === "Madagascar") {
          mappedTimezone = "Indian/Antananarivo";
          countryData.timezones = ["Indian/Antananarivo"];
        } else if (data[0].name.common === "Mauritius") {
          mappedTimezone = "Indian/Mauritius";
          countryData.timezones = ["Indian/Mauritius"];
        } else if (data[0].name.common === "Seychelles") {
          mappedTimezone = "Indian/Mahe";
          countryData.timezones = ["Indian/Mahe"];
        } else if (data[0].name.common === "Maldives") {
          mappedTimezone = "Indian/Maldives";
          countryData.timezones = ["Indian/Maldives"];
        } else if (data[0].name.common === "Sri Lanka") {
          mappedTimezone = "Asia/Colombo";
          countryData.timezones = ["Asia/Colombo"];
        } else if (data[0].name.common === "Nepal") {
          mappedTimezone = "Asia/Kathmandu";
          countryData.timezones = ["Asia/Kathmandu"];
        } else if (data[0].name.common === "Bhutan") {
          mappedTimezone = "Asia/Thimphu";
          countryData.timezones = ["Asia/Thimphu"];
        } else if (data[0].name.common === "Myanmar") {
          mappedTimezone = "Asia/Yangon";
          countryData.timezones = ["Asia/Yangon"];
        } else if (data[0].name.common === "Cambodia") {
          mappedTimezone = "Asia/Phnom_Penh";
          countryData.timezones = ["Asia/Phnom_Penh"];
        } else if (data[0].name.common === "Bahrain") {
          mappedTimezone = "Asia/Bahrain";
          countryData.timezones = ["Asia/Bahrain"];
        } else if (data[0].name.common === "Belize") {
          mappedTimezone = "America/Belize";
          countryData.timezones = ["America/Belize"];
        } else if (data[0].name.common === "Barbados") {
          mappedTimezone = "America/Barbados";
          countryData.timezones = ["America/Barbados"];
        } else if (data[0].name.common === "Belarus") {
          mappedTimezone = "Europe/Minsk";
          countryData.timezones = ["Europe/Minsk"];
        } else if (data[0].name.common === "Benin") {
          mappedTimezone = "Africa/Porto-Novo";
          countryData.timezones = ["Africa/Porto-Novo"];
        } else if (data[0].name.common === "Bolivia") {
          mappedTimezone = "America/La_Paz";
          countryData.timezones = ["America/La_Paz"];
        } else if (data[0].name.common === "Bosnia and Herzegovina") {
          mappedTimezone = "Europe/Sarajevo";
          countryData.timezones = ["Europe/Sarajevo"];
        } else if (data[0].name.common === "Czechia") {
          mappedTimezone = "Europe/Prague";
          countryData.timezones = ["Europe/Prague"];
        } else if (data[0].name.common === "Cyprus") {
          mappedTimezone = "Asia/Nicosia";
          countryData.timezones = ["Asia/Nicosia"];
        } else if (data[0].name.common === "Cuba") {
          mappedTimezone = "America/Havana";
          countryData.timezones = ["America/Havana"];
        } else if (data[0].name.common === "Croatia") {
          mappedTimezone = "Europe/Zagreb";
          countryData.timezones = ["Europe/Zagreb"];
        } else if (data[0].name.common === "Costa Rica") {
          mappedTimezone = "America/Costa_Rica";
          countryData.timezones = ["America/Costa_Rica"];
        } else if (data[0].name.common === "Comoros") {
          mappedTimezone = "Indian/Comoro";
          countryData.timezones = ["Indian/Comoro"];
        } else if (data[0].name.common === "Colombia") {
          mappedTimezone = "America/Bogota";
          countryData.timezones = ["America/Bogota"];
        } else if (data[0].name.common === "Chile") {
          mappedTimezone = "America/Santiago";
          countryData.timezones = ["America/Santiago"];
        } else if (data[0].name.common === "Chad") {
          mappedTimezone = "Africa/Ndjamena";
          countryData.timezones = ["Africa/Ndjamena"];
        } else if (data[0].name.common === "Central African Republic") {
          mappedTimezone = "Africa/Bangui";
          countryData.timezones = ["Africa/Bangui"];
        } else if (data[0].name.common === "Cameroon") {
          mappedTimezone = "Africa/Douala";
          countryData.timezones = ["Africa/Douala"];
        } else if (data[0].name.common === "Jamaica") {
          mappedTimezone = "America/Jamaica";
          countryData.timezones = ["America/Jamaica"];
        } else if (data[0].name.common === "Djibouti") {
          mappedTimezone = "Africa/Djibouti";
          countryData.timezones = ["Africa/Djibouti"];
        } else if (data[0].name.common === "Dominica") {
          mappedTimezone = "America/Dominica";
          countryData.timezones = ["America/Dominica"];
        } else if (data[0].name.common === "Dominican Republic") {
          mappedTimezone = "America/Santo_Domingo";
          countryData.timezones = ["America/Santo_Domingo"];
        } else if (data[0].name.common === "Ecuador") {
          mappedTimezone = "America/Guayaquil";
          countryData.timezones = ["America/Guayaquil"];
        } else if (data[0].name.common === "Egypt") {
          mappedTimezone = "Africa/Cairo";
          countryData.timezones = ["Africa/Cairo"];
        } else if (data[0].name.common === "El Salvador") {
          mappedTimezone = "America/El_Salvador";
          countryData.timezones = ["America/El_Salvador"];
        } else if (data[0].name.common === "Equatorial Guinea") {
          mappedTimezone = "Africa/Malabo";
          countryData.timezones = ["Africa/Malabo"];
        } else if (data[0].name.common === "Eritrea") {
          mappedTimezone = "Africa/Asmara";
          countryData.timezones = ["Africa/Asmara"];
        } else if (data[0].name.common === "Estonia") {
          mappedTimezone = "Europe/Tallinn";
          countryData.timezones = ["Europe/Tallinn"];
        } else if (data[0].name.common === "Eswatini") {
          mappedTimezone = "Africa/Mbabane";
          countryData.timezones = ["Africa/Mbabane"];
        } else if (data[0].name.common === "Fiji") {
          mappedTimezone = "Pacific/Fiji";
          countryData.timezones = ["Pacific/Fiji"];
        } else if (data[0].name.common === "Gabon") {
          mappedTimezone = "Africa/Libreville";
          countryData.timezones = ["Africa/Libreville"];
        } else if (data[0].name.common === "Gambia") {
          mappedTimezone = "Africa/Banjul";
          countryData.timezones = ["Africa/Banjul"];
        } else if (data[0].name.common === "Georgia") {
          mappedTimezone = "Asia/Tbilisi";
          countryData.timezones = ["Asia/Tbilisi"];
        } else if (data[0].name.common === "Grenada") {
          mappedTimezone = "America/Grenada";
          countryData.timezones = ["America/Grenada"];
        } else if (data[0].name.common === "Guatemala") {
          mappedTimezone = "America/Guatemala";
          countryData.timezones = ["America/Guatemala"];
        } else if (data[0].name.common === "Guyana") {
          mappedTimezone = "America/Guyana";
          countryData.timezones = ["America/Guyana"];
        } else if (data[0].name.common === "Haiti") {
          mappedTimezone = "America/Port-au-Prince";
          countryData.timezones = ["America/Port-au-Prince"];
        } else if (data[0].name.common === "Honduras") {
          mappedTimezone = "America/Tegucigalpa";
          countryData.timezones = ["America/Tegucigalpa"];
        } else if (data[0].name.common === "Iraq") {
          mappedTimezone = "Asia/Baghdad";
          countryData.timezones = ["Asia/Baghdad"];
        } else if (data[0].name.common === "Jordan") {
          mappedTimezone = "Asia/Amman";
          countryData.timezones = ["Asia/Amman"];
        } else if (data[0].name.common === "Kazakhstan") {
          mappedTimezone = "Asia/Almaty";
          countryData.timezones = ["Asia/Almaty"];
        } else if (data[0].name.common === "Kiribati") {
          mappedTimezone = "Pacific/Tarawa";
          countryData.timezones = ["Pacific/Tarawa"];
        } else if (data[0].name.common === "Kuwait") {
          mappedTimezone = "Asia/Kuwait";
          countryData.timezones = ["Asia/Kuwait"];
        } else if (data[0].name.common === "Kyrgyzstan") {
          mappedTimezone = "Asia/Bishkek";
          countryData.timezones = ["Asia/Bishkek"];
        } else if (data[0].name.common === "North Korea") {
          mappedTimezone = "Asia/Pyongyang";
          countryData.timezones = ["Asia/Pyongyang"];
        } else if (data[0].name.common === "Nauru") {
          mappedTimezone = "Pacific/Nauru";
          countryData.timezones = ["Pacific/Nauru"];
        } else if (data[0].name.common === "Nicaragua") {
          mappedTimezone = "America/Managua";
          countryData.timezones = ["America/Managua"];
        } else if (data[0].name.common === "Niger") {
          mappedTimezone = "Africa/Niamey";
          countryData.timezones = ["Africa/Niamey"];
        } else if (data[0].name.common === "North Macedonia") {
          mappedTimezone = "Europe/Skopje";
          countryData.timezones = ["Europe/Skopje"];
        } else if (data[0].name.common === "Laos") {
          mappedTimezone = "Asia/Vientiane";
          countryData.timezones = ["Asia/Vientiane"];
        } else if (data[0].name.common === "Latvia") {
          mappedTimezone = "Europe/Riga";
          countryData.timezones = ["Europe/Riga"];
        } else if (data[0].name.common === "Lebanon") {
          mappedTimezone = "Asia/Beirut";
          countryData.timezones = ["Asia/Beirut"];
        } else if (data[0].name.common === "Lesotho") {
          mappedTimezone = "Africa/Maseru";
          countryData.timezones = ["Africa/Maseru"];
        } else if (data[0].name.common === "Liberia") {
          mappedTimezone = "Africa/Monrovia";
          countryData.timezones = ["Africa/Monrovia"];
        } else if (data[0].name.common === "Liechtenstein") {
          mappedTimezone = "Europe/Vaduz";
          countryData.timezones = ["Europe/Vaduz"];
        } else if (data[0].name.common === "Lithuania") {
          mappedTimezone = "Europe/Vilnius";
          countryData.timezones = ["Europe/Vilnius"];
        } else if (data[0].name.common === "Luxembourg") {
          mappedTimezone = "Europe/Luxembourg";
          countryData.timezones = ["Europe/Luxembourg"];
        } else if (data[0].name.common === "Malawi") {
          mappedTimezone = "Africa/Blantyre";
          countryData.timezones = ["Africa/Blantyre"];
        } else if (data[0].name.common === "Malta") {
          mappedTimezone = "Europe/Malta";
          countryData.timezones = ["Europe/Malta"];
        } else if (data[0].name.common === "Marshall Islands") {
          mappedTimezone = "Pacific/Majuro";
          countryData.timezones = ["Pacific/Majuro"];
        } else if (data[0].name.common === "Micronesia") {
          mappedTimezone = "Pacific/Chuuk";
          countryData.timezones = ["Pacific/Chuuk"];
        } else if (data[0].name.common === "Moldova") {
          mappedTimezone = "Europe/Chisinau";
          countryData.timezones = ["Europe/Chisinau"];
        } else if (data[0].name.common === "Monaco") {
          mappedTimezone = "Europe/Monaco";
          countryData.timezones = ["Europe/Monaco"];
        } else if (data[0].name.common === "Mongolia") {
          mappedTimezone = "Asia/Ulaanbaatar";
          countryData.timezones = ["Asia/Ulaanbaatar"];
        } else if (data[0].name.common === "Montenegro") {
          mappedTimezone = "Europe/Podgorica";
          countryData.timezones = ["Europe/Podgorica"];
        } else if (data[0].name.common === "Oman") {
          mappedTimezone = "Asia/Muscat";
          countryData.timezones = ["Asia/Muscat"];
        } else if (data[0].name.common === "Palau") {
          mappedTimezone = "Pacific/Palau";
          countryData.timezones = ["Pacific/Palau"];
        } else if (data[0].name.common === "Panama") {
          mappedTimezone = "America/Panama";
          countryData.timezones = ["America/Panama"];
        } else if (data[0].name.common === "Papua New Guinea") {
          mappedTimezone = "Pacific/Port_Moresby";
          countryData.timezones = ["Pacific/Port_Moresby"];
        } else if (data[0].name.common === "Paraguay") {
          mappedTimezone = "America/Asuncion";
          countryData.timezones = ["America/Asuncion"];
        } else if (data[0].name.common === "Peru") {
          mappedTimezone = "America/Lima";
          countryData.timezones = ["America/Lima"];
        } else if (data[0].name.common === "Puerto Rico") {
          mappedTimezone = "America/Puerto_Rico";
          countryData.timezones = ["America/Puerto_Rico"];
        } else if (data[0].name.common === "Qatar") {
          mappedTimezone = "Asia/Qatar";
          countryData.timezones = ["Asia/Qatar"];
        } else if (data[0].name.common === "Rwanda") {
          mappedTimezone = "Africa/Kigali";
          countryData.timezones = ["Africa/Kigali"];
        } else if (data[0].name.common === "Saint Kitts and Nevis") {
          mappedTimezone = "America/St_Kitts";
          countryData.timezones = ["America/St_Kitts"];
        } else if (data[0].name.common === "Saint Lucia") {
          mappedTimezone = "America/St_Lucia";
          countryData.timezones = ["America/St_Lucia"];
        } else if (data[0].name.common === "Samoa") {
          mappedTimezone = "Pacific/Apia";
          countryData.timezones = ["Pacific/Apia"];
        } else if (data[0].name.common === "San Marino") {
          mappedTimezone = "Europe/San_Marino";
          countryData.timezones = ["Europe/San_Marino"];
        } else if (data[0].name.common === "Serbia") {
          mappedTimezone = "Europe/Belgrade";
          countryData.timezones = ["Europe/Belgrade"];
        } else if (data[0].name.common === "Slovakia") {
          mappedTimezone = "Europe/Bratislava";
          countryData.timezones = ["Europe/Bratislava"];
        } else if (data[0].name.common === "Slovenia") {
          mappedTimezone = "Europe/Ljubljana";
          countryData.timezones = ["Europe/Ljubljana"];
        } else if (data[0].name.common === "Solomon Islands") {
          mappedTimezone = "Pacific/Guadalcanal";
          countryData.timezones = ["Pacific/Guadalcanal"];
        } else if (data[0].name.common === "Somalia") {
          mappedTimezone = "Africa/Mogadishu";
          countryData.timezones = ["Africa/Mogadishu"];
        } else if (data[0].name.common === "South Korea") {
          mappedTimezone = "Asia/Seoul";
          countryData.timezones = ["Asia/Seoul"];
        } else if (data[0].name.common === "Suriname") {
          mappedTimezone = "America/Paramaribo";
          countryData.timezones = ["America/Paramaribo"];
        } else if (data[0].name.common === "Syria") {
          mappedTimezone = "Asia/Damascus";
          countryData.timezones = ["Asia/Damascus"];
        } else if (data[0].name.common === "Taiwan") {
          mappedTimezone = "Asia/Taipei";
          countryData.timezones = ["Asia/Taipei"];
        } else if (data[0].name.common === "Timor-Leste") {
          mappedTimezone = "Asia/Dili";
          countryData.timezones = ["Asia/Dili"];
        } else if (data[0].name.common === "Tokelau") {
          mappedTimezone = "Pacific/Fakaofo";
          countryData.timezones = ["Pacific/Fakaofo"];
        } else if (data[0].name.common === "Tonga") {
          mappedTimezone = "Pacific/Tongatapu";
          countryData.timezones = ["Pacific/Tongatapu"];
        } else if (data[0].name.common === "Trinidad and Tobago") {
          mappedTimezone = "America/Port_of_Spain";
          countryData.timezones = ["America/Port_of_Spain"];
        } else if (data[0].name.common === "Turkmenistan") {
          mappedTimezone = "Asia/Ashgabat";
          countryData.timezones = ["Asia/Ashgabat"];
        } else if (data[0].name.common === "Tuvalu") {
          mappedTimezone = "Pacific/Funafuti";
          countryData.timezones = ["Pacific/Funafuti"];
        } else if (data[0].name.common === "Vanuatu") {
          mappedTimezone = "Pacific/Efate";
          countryData.timezones = ["Pacific/Efate"];
        } else if (data[0].name.common === "Vatican City") {
          mappedTimezone = "Europe/Vatican";
          countryData.timezones = ["Europe/Vatican"];
        }
        else if (data[0].name.common === "Venezuela") {
          mappedTimezone = "America/Caracas";
          countryData.timezones = ["America/Caracas"];
        }
        else if (data[0].name.common === "Yemen") {
          mappedTimezone = "Asia/Aden";
          countryData.timezones = ["Asia/Aden"];
        }
        else if (data[0].name.common === "Azerbaijan") {
          mappedTimezone = "Asia/Baku";
          countryData.timezones = ["Asia/Baku"];
      } else if (data[0].name.common === "Armenia") {
          mappedTimezone = "Asia/Yerevan";
          countryData.timezones = ["Asia/Yerevan"];
      } else if (data[0].name.common === "Antigua and Barbuda") {
          mappedTimezone = "America/Antigua";
          countryData.timezones = ["America/Antigua"];
      } else if (data[0].name.common === "Andorra") {
          mappedTimezone = "Europe/Andorra";
          countryData.timezones = ["Europe/Andorra"];
      } else if (data[0].name.common === "American Samoa") {
          mappedTimezone = "Pacific/Pago_Pago";
          countryData.timezones = ["Pacific/Pago_Pago"];
      } else if (data[0].name.common === "Albania") {
          mappedTimezone = "Europe/Tirane";
          countryData.timezones = ["Europe/Tirane"];
      }
       else if (data[0].name.common === "Bahamas") {
          mappedTimezone = "America/Nassau";
          countryData.timezones = ["America/Nassau"];
      }
       else if (data[0].name.common === "Iran") {
          mappedTimezone = "Asia/Tehran";
          countryData.timezones = ["Asia/Tehran"];
      }
        else {
          const timezoneEntry = timezoneMapping.find(tz => tz.zone === rawTimezone);
          mappedTimezone = timezoneEntry ? timezoneEntry.zone : rawTimezone;
          countryData.timezones = [mappedTimezone];
        }

        countryData.timezone = mappedTimezone;


        setCountry(countryData);
      } catch (error) {
        console.error("Error fetching country data:", error);
      } finally {
        setLoading(false);
      }
    };

    if (extracted) {
      fetchCountryData();
    }
  }, [extracted]);

  useEffect(() => {
    if (country?.timezone) {
      const updateTime = () => {
        try {
          const now = new Date();
          const options: Intl.DateTimeFormatOptions = {
            timeZone: country.timezone,
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
            hour12: true,
          };
          const formattedTime = new Intl.DateTimeFormat("en-US", options).format(now);
          setTime(formattedTime);
        } catch (error) {
          console.error("Error updating time:", error);
        }
      };

      updateTime();
      const interval = setInterval(updateTime, 1000);
      return () => clearInterval(interval);
    }
  }, [country?.timezone]);

  if (loading) {
    return <CustomSkeleton/>;
  }

  if (!country) {
    return <div>Country not found</div>;
  }

  const flagUrl = `https://flagcdn.com/w320/${country.countryCode.toLowerCase()}.png`;

  return (
    <div className="bg-background">
      <Banner image={country.bannerImage} />

      <main className="mx-auto px-4 py-8 -mt-32 relative z-10">
        <div className="bg-background rounded-lg shadow-lg p-6 mb-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
            <CountryInfo
              name={country.name}
              flagUrl={flagUrl}
              timezone={country.timezone} // Pass the timezone
              time={time} // Pass the current time
            />

          </div>

          <div className="space-y-8">
            <h2 className="text-2xl font-bold">
              Prayer Times For Cities in <span className="capitalize">{country.name}</span>
            </h2>
            <PrayerTimesTable country={country.name} countryCode={country.countryCode} timezone={country.timezone} timezoneMapping={timezoneMapping} />
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 dark:text-zinc-100 pt-8 pb-1">Discover the {country.name}</h2>
          <p className="mt-1 text-muted-foreground text-lg pb-3">
            Welcome to the {country.name} — a dazzling archipelago of over 700 islands, cays, and islets, each a slice of paradise in the Atlantic. Home to 88% of the archipelago's population, the {country.name} blends the serene charm of colonial history with modern sophistication.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-10 max-w-6xl mx-auto">
            {/* First Column */}
            <div className="bg-transparent border border-muted rounded-lg shadow-md p-6">
              <h3 className="text-2xl font-semibold text-blue-900 dark:text-zinc-100">Culture & Charm</h3>
              <p className="mt-4 text-muted-foreground">
                Nassau, the vibrant capital on New Providence Island, offers a harmonious fusion of colonial elegance and metropolitan charm. The {country.name} celebrates its roots through Junkanoo, an annual festival of color, rhythm, and dance, reflecting a proud blend of African and British heritage.
              </p>
            </div>
            {/* Second Column */}
            <div className="bg-transparent border border-muted rounded-lg shadow-md p-6">
              <h3 className="text-2xl font-semibold text-blue-900 dark:text-zinc-100">Nature & Biodiversity</h3>
              <p className="mt-4 text-muted-foreground">
                Known for its crystal-clear turquoise waters, the {country.name} is a sanctuary for unique marine life and diverse ecosystems. Explore breathtaking national parks, home to rare species, and relax on iconic white sand beaches recognized globally as nature’s finest masterpieces.
              </p>
            </div>
            {/* Third Column */}
            <div className="bg-transparent border border-muted rounded-lg shadow-md p-6">
              <h3 className="text-2xl font-semibold text-blue-900 dark:text-zinc-100">Economic Powerhouse</h3>
              <p className="mt-4 text-muted-foreground">
                Tourism fuels 30% of the nation's GDP, while the Bahamian Dollar keeps its economy stable. Whether it’s boutique resorts or local markets, the {country.name} creates unforgettable experiences with its warm, welcoming people and rich traditions.
              </p>
            </div>
            {/* Fourth Column */}
            <div className="bg-transparent border border-muted rounded-lg shadow-md p-6">
              <h3 className="text-2xl font-semibold text-blue-900 dark:text-zinc-100">A Laid-Back Lifestyle</h3>
              <p className="mt-4 text-muted-foreground">
                Life in the {country.name} is a unique blend of relaxation and vibrancy. With a seamless mix of African, American, and European influences, the islands promise a slow-paced lifestyle perfect for those looking to unwind in style.
              </p>
            </div>

          </div>



        </div>
      </main>
    </div>
  );
}