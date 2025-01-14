'use client'
import { useEffect, useState } from 'react'
import { ChevronRight } from 'lucide-react'
import { Country } from '@/lib/country'
import { formatTime } from '@/lib/Time'

const countries = [
    { name: 'Afghanistan', code: 'AF', timezone: 'Asia/Kabul', offset: '+04:30' },
    { name: 'Albania', code: 'AL', timezone: 'Europe/Tirane', offset: '+01:00' },
    { name: 'Algeria', code: 'DZ', timezone: 'Africa/Algiers', offset: '+01:00' },
    { name: 'American Samoa', code: 'AS', timezone: 'Pacific/Pago_Pago', offset: '-11:00' },
    { name: 'Andorra', code: 'AD', timezone: 'Europe/Andorra', offset: '+01:00' },
    { name: 'Angola', code: 'AO', timezone: 'Africa/Luanda', offset: '+01:00' },
    { name: 'Antigua and Barbuda', code: 'AG', timezone: 'America/Antigua', offset: '-04:00' },
    { name: 'Argentina', code: 'AR', timezone: 'America/Argentina/Buenos_Aires', offset: '-03:00' },
    { name: 'Armenia', code: 'AM', timezone: 'Asia/Yerevan', offset: '+04:00' },
    { name: 'Australia', code: 'AU', timezone: 'Australia/Sydney', offset: '+10:00' },
    { name: 'Austria', code: 'AT', timezone: 'Europe/Vienna', offset: '+01:00' },
    { name: 'Azerbaijan', code: 'AZ', timezone: 'Asia/Baku', offset: '+04:00' },
    { name: 'Bahamas', code: 'BS', timezone: 'America/Nassau', offset: '-05:00' },
    { name: 'Bahrain', code: 'BH', timezone: 'Asia/Bahrain', offset: '+03:00' },
    { name: 'Bangladesh', code: 'BD', timezone: 'Asia/Dhaka', offset: '+06:00' },
    { name: 'Barbados', code: 'BB', timezone: 'America/Barbados', offset: '-04:00' },
    { name: 'Belarus', code: 'BY', timezone: 'Europe/Minsk', offset: '+03:00' },
    { name: 'Belgium', code: 'BE', timezone: 'Europe/Brussels', offset: '+01:00' },
    { name: 'Belize', code: 'BZ', timezone: 'America/Belize', offset: '-06:00' },
    { name: 'Benin', code: 'BJ', timezone: 'Africa/Porto-Novo', offset: '+01:00' },
    { name: 'Bhutan', code: 'BT', timezone: 'Asia/Thimphu', offset: '+06:00' },
    { name: 'Bolivia', code: 'BO', timezone: 'America/La_Paz', offset: '-04:00' },
    { name: 'Bosnia and Herzegovina', code: 'BA', timezone: 'Europe/Sarajevo', offset: '+01:00' },
    { name: 'Botswana', code: 'BW', timezone: 'Africa/Gaborone', offset: '+02:00' },
    { name: 'Brazil', code: 'BR', timezone: 'America/Sao_Paulo', offset: '-03:00' },
    { name: 'Brunei Darussalam', code: 'BN', timezone: 'Asia/Brunei', offset: '+08:00' },
    { name: 'Bulgaria', code: 'BG', timezone: 'Europe/Sofia', offset: '+02:00' },
    { name: 'Burkina Faso', code: 'BF', timezone: 'Africa/Ouagadougou', offset: '+00:00' },
    { name: 'Burundi', code: 'BI', timezone: 'Africa/Bujumbura', offset: '+02:00' },
    { name: 'Cabo Verde', code: 'CV', timezone: 'Atlantic/Cape_Verde', offset: '-01:00' },
    { name: 'Cambodia', code: 'KH', timezone: 'Asia/Phnom_Penh', offset: '+07:00' },
    { name: 'Cameroon', code: 'CM', timezone: 'Africa/Douala', offset: '+01:00' },
    { name: 'Canada', code: 'CA', timezone: 'America/Toronto', offset: '-08:00' },
    { name: 'Central African Republic', code: 'CF', timezone: 'Africa/Bangui', offset: '+01:00' },
    { name: 'Chad', code: 'TD', timezone: 'Africa/Ndjamena', offset: '+01:00' },
    { name: 'Chile', code: 'CL', timezone: 'America/Santiago', offset: '-04:00' },
    { name: 'China', code: 'CN', timezone: 'Asia/Shanghai', offset: '+08:00' },
    { name: 'Colombia', code: 'CO', timezone: 'America/Bogota', offset: '-05:00' },
    { name: 'Comoros', code: 'KM', timezone: 'Indian/Comoro', offset: '+03:00' },
    { name: 'Congo (Congo-Brazzaville)', code: 'CG', timezone: 'Africa/Brazzaville', offset: '+01:00' },
    { name: 'Congo (Democratic Republic of the Congo)', code: 'CD', timezone: 'Africa/Kinshasa', offset: '+01:00' },
    { name: 'Costa Rica', code: 'CR', timezone: 'America/Costa_Rica', offset: '-06:00' },
    { name: 'Croatia', code: 'HR', timezone: 'Europe/Zagreb', offset: '+01:00' },
    { name: 'Cuba', code: 'CU', timezone: 'America/Havana', offset: '-05:00' },
    { name: 'Cyprus', code: 'CY', timezone: 'Asia/Nicosia', offset: '+02:00' },
    { name: 'Czech Republic', code: 'CZ', timezone: 'Europe/Prague', offset: '+01:00' },
    { name: 'Denmark', code: 'DK', timezone: 'Europe/Copenhagen', offset: '+01:00' },
    { name: 'Djibouti', code: 'DJ', timezone: 'Africa/Djibouti', offset: '+03:00' },
    { name: 'Dominica', code: 'DM', timezone: 'America/Dominica', offset: '-04:00' },
    { name: 'Dominican Republic', code: 'DO', timezone: 'America/Santo_Domingo', offset: '-04:00' },
    { name: 'Ecuador', code: 'EC', timezone: 'America/Guayaquil', offset: '-05:00' },
    { name: 'Egypt', code: 'EG', timezone: 'Africa/Cairo', offset: '+02:00' },
    { name: 'El Salvador', code: 'SV', timezone: 'America/El_Salvador', offset: '-06:00' },
    { name: 'Equatorial Guinea', code: 'GQ', timezone: 'Africa/Malabo', offset: '+01:00' },
    { name: 'Eritrea', code: 'ER', timezone: 'Africa/Asmara', offset: '+03:00' },
    { name: 'Estonia', code: 'EE', timezone: 'Europe/Tallinn', offset: '+02:00' },
    { name: 'Eswatini', code: 'SZ', timezone: 'Africa/Mbabane', offset: '+02:00' },
    { name: 'Ethiopia', code: 'ET', timezone: 'Africa/Addis_Ababa', offset: '+03:00' },
    { name: 'Fiji', code: 'FJ', timezone: 'Pacific/Fiji', offset: '+12:00' },
    { name: 'Finland', code: 'FI', timezone: 'Europe/Helsinki', offset: '+02:00' },
    { name: 'France', code: 'FR', timezone: 'Europe/Paris', offset: '+01:00' },
    { name: 'Gabon', code: 'GA', timezone: 'Africa/Libreville', offset: '+01:00' },
    { name: 'Gambia', code: 'GM', timezone: 'Africa/Banjul', offset: '+00:00' },
    { name: 'Georgia', code: 'GE', timezone: 'Asia/Tbilisi', offset: '+04:00' },
    { name: 'Germany', code: 'DE', timezone: 'Europe/Berlin', offset: '+01:00' },
    { name: 'Ghana', code: 'GH', timezone: 'Africa/Accra', offset: '+00:00' },
    { name: 'Greece', code: 'GR', timezone: 'Europe/Athens', offset: '+02:00' },
    { name: 'Grenada', code: 'GD', timezone: 'America/Grenada', offset: '-04:00' },
    { name: 'Guatemala', code: 'GT', timezone: 'America/Guatemala', offset: '-06:00' },
    { name: 'Guinea', code: 'GN', timezone: 'Africa/Conakry', offset: '+00:00' },
    { name: 'Guinea-Bissau', code: 'GW', timezone: 'Africa/Bissau', offset: '+00:00' },
    { name: 'Guyana', code: 'GY', timezone: 'America/Guyana', offset: '-04:00' },
    { name: 'Haiti', code: 'HT', timezone: 'America/Port-au-Prince', offset: '-05:00' },
    { name: 'Honduras', code: 'HN', timezone: 'America/Tegucigalpa', offset: '-06:00' },
    { name: 'Hungary', code: 'HU', timezone: 'Europe/Budapest', offset: '+01:00' },
    { name: 'Iceland', code: 'IS', timezone: 'Atlantic/Reykjavik', offset: '+00:00' },
    { name: 'India', code: 'IN', timezone: 'Asia/Kolkata', offset: '+05:30' },
    { name: 'Indonesia', code: 'ID', timezone: 'Asia/Jakarta', offset: '+07:00' },
    { name: 'Iran', code: 'IR', timezone: 'Asia/Tehran', offset: '+03:30' },
    { name: 'Iraq', code: 'IQ', timezone: 'Asia/Baghdad', offset: '+03:00' },
    { name: 'Ireland', code: 'IE', timezone: 'Europe/Dublin', offset: '+00:00' },
    { name: 'Israel', code: 'IL', timezone: 'Asia/Jerusalem', offset: '+02:00' },
    { name: 'Italy', code: 'IT', timezone: 'Europe/Rome', offset: '+01:00' },
    { name: 'Jamaica', code: 'JM', timezone: 'America/Jamaica', offset: '-05:00' },
    { name: 'Japan', code: 'JP', timezone: 'Asia/Tokyo', offset: '+09:00' },
    { name: 'Jordan', code: 'JO', timezone: 'Asia/Amman', offset: '+02:00' },
    { name: 'Kazakhstan', code: 'KZ', timezone: 'Asia/Almaty', offset: '+06:00' },
    { name: 'Kenya', code: 'KE', timezone: 'Africa/Nairobi', offset: '+03:00' },
    { name: 'Kiribati', code: 'KI', timezone: 'Pacific/Tarawa', offset: '+12:00' },
    { name: 'Korea (North)', code: 'KP', timezone: 'Asia/Pyongyang', offset: '+09:00' },
    { name: 'Korea (South)', code: 'KR', timezone: 'Asia/Seoul', offset: '+09:00' },
    { name: 'Kuwait', code: 'KW', timezone: 'Asia/Kuwait', offset: '+03:00' },
    { name: 'Kyrgyzstan', code: 'KG', timezone: 'Asia/Bishkek', offset: '+06:00' },
    { name: 'Laos', code: 'LA', timezone: 'Asia/Vientiane', offset: '+07:00' },
    { name: 'Latvia', code: 'LV', timezone: 'Europe/Riga', offset: '+02:00' },
    { name: 'Lebanon', code: 'LB', timezone: 'Asia/Beirut', offset: '+02:00' },
    { name: 'Lesotho', code: 'LS', timezone: 'Africa/Maseru', offset: '+02:00' },
    { name: 'Liberia', code: 'LR', timezone: 'Africa/Monrovia', offset: '+00:00' },
    { name: 'Libya', code: 'LY', timezone: 'Africa/Tripoli', offset: '+02:00' },
    { name: 'Liechtenstein', code: 'LI', timezone: 'Europe/Vaduz', offset: '+01:00' },
    { name: 'Lithuania', code: 'LT', timezone: 'Europe/Vilnius', offset: '+02:00' },
    { name: 'Luxembourg', code: 'LU', timezone: 'Europe/Luxembourg', offset: '+01:00' },
    { name: 'Madagascar', code: 'MG', timezone: 'Indian/Antananarivo', offset: '+03:00' },
    { name: 'Malawi', code: 'MW', timezone: 'Africa/Blantyre', offset: '+02:00' },
    { name: 'Malaysia', code: 'MY', timezone: 'Asia/Kuala_Lumpur', offset: '+08:00' },
    { name: 'Maldives', code: 'MV', timezone: 'Indian/Maldives', offset: '+05:00' },
    { name: 'Mali', code: 'ML', timezone: 'Africa/Bamako', offset: '+00:00' },
    { name: 'Malta', code: 'MT', timezone: 'Europe/Malta', offset: '+01:00' },
    { name: 'Marshall Islands', code: 'MH', timezone: 'Pacific/Majuro', offset: '+12:00' },
    { name: 'Mauritania', code: 'MR', timezone: 'Africa/Nouakchott', offset: '+00:00' },
    { name: 'Mauritius', code: 'MU', timezone: 'Indian/Mauritius', offset: '+04:00' },
    { name: 'Mexico', code: 'MX', timezone: 'America/Mexico_City', offset: '-06:00' },
    { name: 'Micronesia', code: 'FM', timezone: 'Pacific/Palau', offset: '+11:00' },
    { name: 'Moldova', code: 'MD', timezone: 'Europe/Chisinau', offset: '+02:00' },
    { name: 'Monaco', code: 'MC', timezone: 'Europe/Monaco', offset: '+01:00' },
    { name: 'Mongolia', code: 'MN', timezone: 'Asia/Ulaanbaatar', offset: '+08:00' },
    { name: 'Montenegro', code: 'ME', timezone: 'Europe/Podgorica', offset: '+01:00' },
    { name: 'Morocco', code: 'MA', timezone: 'Africa/Casablanca', offset: '+01:00' },
    { name: 'Mozambique', code: 'MZ', timezone: 'Africa/Maputo', offset: '+02:00' },
    { name: 'Myanmar', code: 'MM', timezone: 'Asia/Yangon', offset: '+06:30' },
    { name: 'Namibia', code: 'NA', timezone: 'Africa/Windhoek', offset: '+02:00' },
    { name: 'Nauru', code: 'NR', timezone: 'Pacific/Nauru', offset: '+12:00' },
    { name: 'Nepal', code: 'NP', timezone: 'Asia/Kathmandu', offset: '+05:45' },
    { name: 'Netherlands', code: 'NL', timezone: 'Europe/Amsterdam', offset: '+01:00' },
    { name: 'New Zealand', code: 'NZ', timezone: 'Pacific/Auckland', offset: '+12:00' },
    { name: 'Nicaragua', code: 'NI', timezone: 'America/Managua', offset: '-06:00' },
    { name: 'Niger', code: 'NE', timezone: 'Africa/Niamey', offset: '+01:00' },
    { name: 'Nigeria', code: 'NG', timezone: 'Africa/Lagos', offset: '+01:00' },
    { name: 'North Macedonia', code: 'MK', timezone: 'Europe/Skopje', offset: '+01:00' },
    { name: 'Norway', code: 'NO', timezone: 'Europe/Oslo', offset: '+01:00' },
    { name: 'Oman', code: 'OM', timezone: 'Asia/Muscat', offset: '+04:00' },
    { name: 'Pakistan', code: 'PK', timezone: 'Asia/Karachi', offset: '+05:00' },
    { name: 'Palau', code: 'PW', timezone: 'Pacific/Palau', offset: '+09:00' },
    { name: 'Panama', code: 'PA', timezone: 'America/Panama', offset: '-05:00' },
    { name: 'Papua New Guinea', code: 'PG', timezone: 'Pacific/Port_Moresby', offset: '+10:00' },
    { name: 'Paraguay', code: 'PY', timezone: 'America/Asuncion', offset: '-04:00' },
    { name: 'Peru', code: 'PE', timezone: 'America/Lima', offset: '-05:00' },
    { name: 'Philippines', code: 'PH', timezone: 'Asia/Manila', offset: '+08:00' },
    { name: 'Poland', code: 'PL', timezone: 'Europe/Warsaw', offset: '+01:00' },
    { name: 'Portugal', code: 'PT', timezone: 'Europe/Lisbon', offset: '+00:00' },
    { name: 'Puerto Rico', code: 'PR', timezone: 'America/Puerto_Rico', offset: '-04:00' },
    { name: 'Qatar', code: 'QA', timezone: 'Asia/Qatar', offset: '+03:00' },
    { name: 'Romania', code: 'RO', timezone: 'Europe/Bucharest', offset: '+02:00' },
    { name: 'Russia', code: 'RU', timezone: 'Europe/Moscow', offset: '+03:00' },
    { name: 'Rwanda', code: 'RW', timezone: 'Africa/Kigali', offset: '+02:00' },
    { name: 'Saint Kitts and Nevis', code: 'KN', timezone: 'America/St_Kitts', offset: '-04:00' },
    { name: 'Saint Lucia', code: 'LC', timezone: 'America/St_Lucia', offset: '-04:00' },
    { name: 'Saint Vincent and the Grenadines', code: 'VC', timezone: 'America/St_Vincent', offset: '-04:00' },
    { name: 'Samoa', code: 'WS', timezone: 'Pacific/Apia', offset: '+13:00' },
    { name: 'San Marino', code: 'SM', timezone: 'Europe/San_Marino', offset: '+01:00' },
    { name: 'Sao Tome and Principe', code: 'ST', timezone: 'Africa/Sao_Tome', offset: '+00:00' },
    { name: 'Saudi Arabia', code: 'SA', timezone: 'Asia/Riyadh', offset: '+03:00' },
    { name: 'Senegal', code: 'SN', timezone: 'Africa/Dakar', offset: '+00:00' },
    { name: 'Serbia', code: 'RS', timezone: 'Europe/Belgrade', offset: '+01:00' },
    { name: 'Seychelles', code: 'SC', timezone: 'Indian/Mahe', offset: '+04:00' },
    { name: 'Sierra Leone', code: 'SL', timezone: 'Africa/Freetown', offset: '+00:00' },
    { name: 'Singapore', code: 'SG', timezone: 'Asia/Singapore', offset: '+08:00' },
    { name: 'Slovakia', code: 'SK', timezone: 'Europe/Bratislava', offset: '+01:00' },
    { name: 'Slovenia', code: 'SI', timezone: 'Europe/Ljubljana', offset: '+01:00' },
    { name: 'Solomon Islands', code: 'SB', timezone: 'Pacific/Honiara', offset: '+11:00' },
    { name: 'Somalia', code: 'SO', timezone: 'Africa/Mogadishu', offset: '+03:00' },
    { name: 'South Africa', code: 'ZA', timezone: 'Africa/Johannesburg', offset: '+02:00' },
    { name: 'South Korea', code: 'KR', timezone: 'Asia/Seoul', offset: '+09:00' },
    { name: 'South Sudan', code: 'SS', timezone: 'Africa/Juba', offset: '+03:00' },
    { name: 'Spain', code: 'ES', timezone: 'Europe/Madrid', offset: '+01:00' },
    { name: 'Sri Lanka', code: 'LK', timezone: 'Asia/Colombo', offset: '+05:30' },
    { name: 'Sudan', code: 'SD', timezone: 'Africa/Khartoum', offset: '+02:00' },
    { name: 'Suriname', code: 'SR', timezone: 'America/Paramaribo', offset: '-03:00' },
    { name: 'Sweden', code: 'SE', timezone: 'Europe/Stockholm', offset: '+01:00' },
    { name: 'Switzerland', code: 'CH', timezone: 'Europe/Zurich', offset: '+01:00' },
    { name: 'Syria', code: 'SY', timezone: 'Asia/Damascus', offset: '+02:00' },
    { name: 'Taiwan', code: 'TW', timezone: 'Asia/Taipei', offset: '+08:00' },
    { name: 'Tajikistan', code: 'TJ', timezone: 'Asia/Dushanbe', offset: '+05:00' },
    { name: 'Tanzania', code: 'TZ', timezone: 'Africa/Dar_es_Salaam', offset: '+03:00' },
    { name: 'Thailand', code: 'TH', timezone: 'Asia/Bangkok', offset: '+07:00' },
    { name: 'Timor-Leste', code: 'TL', timezone: 'Asia/Dili', offset: '+09:00' },
    { name: 'Togo', code: 'TG', timezone: 'Africa/Lome', offset: '+00:00' },
    { name: 'Tokelau', code: 'TK', timezone: 'Pacific/Fakaofo', offset: '+13:00' },
    { name: 'Tonga', code: 'TO', timezone: 'Pacific/Tongatapu', offset: '+13:00' },
    { name: 'Trinidad and Tobago', code: 'TT', timezone: 'America/Port_of_Spain', offset: '-04:00' },
    { name: 'Tunisia', code: 'TN', timezone: 'Africa/Tunis', offset: '+01:00' },
    { name: 'Turkey', code: 'TR', timezone: 'Europe/Istanbul', offset: '+03:00' },
    { name: 'Turkmenistan', code: 'TM', timezone: 'Asia/Ashgabat', offset: '+05:00' },
    { name: 'Tuvalu', code: 'TV', timezone: 'Pacific/Funafuti', offset: '+12:00' },
    { name: 'Uganda', code: 'UG', timezone: 'Africa/Kampala', offset: '+03:00' },
    { name: 'Ukraine', code: 'UA', timezone: 'Europe/Kiev', offset: '+02:00' },
    { name: 'United Arab Emirates', code: 'AE', timezone: 'Asia/Dubai', offset: '+04:00' },
    { name: 'United Kingdom', code: 'GB', timezone: 'Europe/London', offset: '+00:00' },
    { name: 'United States', code: 'US', timezone: 'America/New_York', offset: '-05:00' },
    { name: 'Uruguay', code: 'UY', timezone: 'America/Montevideo', offset: '-03:00' },
    { name: 'Uzbekistan', code: 'UZ', timezone: 'Asia/Tashkent', offset: '+05:00' },
    { name: 'Vanuatu', code: 'VU', timezone: 'Pacific/Efate', offset: '+11:00' },
    { name: 'Vatican City', code: 'VA', timezone: 'Europe/Vatican', offset: '+01:00' },
    { name: 'Venezuela', code: 'VE', timezone: 'America/Caracas', offset: '-04:00' },
    { name: 'Vietnam', code: 'VN', timezone: 'Asia/Ho_Chi_Minh', offset: '+07:00' },
    { name: 'Yemen', code: 'YE', timezone: 'Asia/Aden', offset: '+03:00' },
    { name: 'Zambia', code: 'ZM', timezone: 'Africa/Lusaka', offset: '+02:00' },
    { name: 'Zimbabwe', code: 'ZW', timezone: 'Africa/Harare', offset: '+02:00' },
  ];
  

export default function CountriesList() {
  const [time, setTime] = useState<Date>(new Date())
  const [selectedLetter, setSelectedLetter] = useState<string>('A')

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date())
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZÅ'.split('')
  
  const groupedCountries = countries.reduce((acc, country) => {
    const firstLetter = country.name[0].toUpperCase()
    if (!acc[firstLetter]) {
      acc[firstLetter] = []
    }
    acc[firstLetter].push(country)
    return acc
  }, {} as Record<string, Country[]>)

  return (
    <div className=" ">
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="flex items-center space-x-2 mb-8 text-sm">
          <a href="#" className="text-gray-400 hover:text-gray-300">Home</a>
          <ChevronRight className="w-4 h-4 text-gray-600" />
          <span className="text-gray-300">Countries</span>
        </nav>

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Country</h1>
          <p className="text-gray-400">Discover accurate prayer timings for countries worldwide.</p>
        </div>

        {/* Main content */}
        <div className="flex gap-8">
          {/* Countries list */}
          <div className="grid lg:grid-cols-3 grid-cols-1 gap-8">
            {Object.entries(groupedCountries).map(([letter, countries]) => (
              <div key={letter} id={letter} className="mb-8">
                <h2 className="text-2xl font-bold mb-4">{letter}</h2>
                <div className="grid gap-4">
                  {countries.map((country) => (
                    <div
                      key={country.code}
                      className="flex items-center justify-between bg-gray-200 dark:bg-transparent border border-muted rounded-lg p-4"
                    >
                      <div className="flex items-center gap-4">
                        <img
                          src={`https://flagcdn.com/48x36/${country.code.toLowerCase()}.png`}
                          alt={`${country.name} flag`}
                          className="w-8 h-8 rounded-full object-cover"
                        />
                        <div>
                          <h3 className="font-medium">{country.name}</h3>
                          <p className="text-sm text-gray-400">{country.offset}</p>
                        </div>
                      </div>
                      <div className="text-lg font-medium">
                        {formatTime(country.offset)}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Alphabet navigation */}
          <div className=" top-8 h-fit scale-90">
            <div className="flex flex-col items-center bg-gray-200 dark:bg-gray-900 rounded-lg py-2">
              {alphabet.map((letter) => (
                <a
                  key={letter}
                  href={`#${letter}`}
                  className={`p-2 text-sm hover:text-blue-400 transition-colors ${
                    selectedLetter === letter ? 'text-blue-500' : 'text-gray-400'
                  }`}
                  onClick={() => setSelectedLetter(letter)}
                >
                  {letter}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

