export interface City {
    name: string;
}

export interface CountryData {
    cities: City[];
}

export const countriesData: { [country: string]: CountryData } = {

    "Afghanistan": {
        cities: [
            { name: "Kabul" },
            { name: "Kandahar" },
            { name: "Herat" },
            { name: "Mazar-i-Sharif" },
            { name: "Kunduz" },
            { name: "Jalalabad" },
            { name: "Lashkar Gah" }
        ]
    }, "Albania": {
        cities: [
            { name: "Tirana" },
            { name: "Durrës" },
            { name: "Vlorë" },
            { name: "Shkodër" },
            { name: "Fier" },
            { name: "Korçë" },
            { name: "Berat" }
        ]
    },
    "Algeria": {
        cities: [
            { name: "Algiers" },
            { name: "Oran" },
            { name: "Constantine" },
            { name: "Annaba" },
            { name: "Batna" },
            { name: "Sétif" },
            { name: "Sidi Bel Abbès" }
        ]
    },
    "Angola": {
        cities: [
            { name: "Luanda" },
            { name: "Huambo" },
            { name: "Lobito" },
            { name: "Benguela" },
            { name: "Kuito" },
            { name: "Lubango" },
            { name: "Malanje" }
        ]
    },
    "Armenia": {
        cities: [
            { name: "Yerevan" },
            { name: "Gyumri" },
            { name: "Vanadzor" },
            { name: "Vagharshapat" },
            { name: "Hrazdan" },
            { name: "Abovyan" },
            { name: "Kapan" }
        ]
    },
    "Azerbaijan": {
        cities: [
            { name: "Baku" },
            { name: "Ganja" },
            { name: "Sumqayit" },
            { name: "Mingachevir" },
            { name: "Lankaran" },
            { name: "Shirvan" },
            { name: "Nakhchivan" }
        ]
    },
    "Australia": {
        cities: [
            { name: "Sydney" },
            { name: "Wollongong" },
            { name: "Newcastle" },
            { name: "Central Coast" },
            { name: "Blue Mountains" },
            { name: "Adelaide" },
            { name: "Port Augusta" },
            { name: "Mount Gambier" },
            { name: "Whyalla" },
            { name: "Port Pirie" },
            { name: "Perth" },
            { name: "Fremantle" },
            { name: "Bunbury" },
            { name: "Geraldton" },
            { name: "Kalgoorlie" },
            { name: "Melbourne" },
            { name: "Geelong" },
            { name: "Ballarat" },
            { name: "Bendigo" },
            { name: "Shepparton" },
            { name: "Canberra" },
            { name: "Queanbeyan" },
            { name: "Goulburn" },
            { name: "Yass" },
            { name: "Cooma" },
            { name: "Darwin" },
            { name: "Alice Springs" },
            { name: "Katherine" },
            { name: "Tennant Creek" },
            { name: "Nhulunbuy" },
            { name: "Brisbane" },
            { name: "Gold Coast" },
            { name: "Toowoomba" },
            { name: "Sunshine Coast" },
            { name: "Cairns" },
            { name: "Hobart" },
            { name: "Launceston" },
            { name: "Devonport" },
            { name: "Burnie" },
            { name: "Kingston" }
        ]
    },
    "Argentina": {
        cities: [
            { name: "Buenos Aires" },
            { name: "La Plata" },
            { name: "Mar del Plata" },
            { name: "Cordoba" },
            { name: "Villa Maria" },
            { name: "Rio Cuarto" },
            { name: "Salta" },
            { name: "San Salvador de Jujuy" },
            { name: "Tartagal" },
            { name: "Ushuaia" },
            { name: "Rio Grande" },
            { name: "Tolhuin" }
        ]
    },
    "Austria": {
        cities: [
            { name: "Vienna" },
            { name: "Graz" },
            { name: "Linz" },
            { name: "Salzburg" },
            { name: "Innsbruck" },
            { name: "Klagenfurt" },
            { name: "Villach" }
        ]
    },
    "American Samoa": {
        cities: [
            { name: "Pago Pago" },
            { name: "Tafuna" },
            { name: "Leone" },
            { name: "Faleniu" },
            { name: "Aua" }
        ]
    },
    "Andorra": {
        cities: [
            { name: "Andorra la Vella" },
            { name: "Escaldes-Engordany" },
            { name: "Sant Julià de Lòria" },
            { name: "La Massana" },
            { name: "Ordino" }
        ]
    },
    "Brazil": {
        cities: [
            { name: "Sao Paulo" },
            { name: "Rio de Janeiro" },
            { name: "Belo Horizonte" },
            { name: "Curitiba" },
            { name: "Campinas" },
            { name: "Santos" },
            { name: "Brasília" }
        ]
    },

    Belarus: {
        cities: [
            { name: "Minsk" },
            { name: "Gomel" },
            { name: "Mogilev" },
            { name: "Vitebsk" },
            { name: "Hrodna" },
            { name: "Brest" },
            { name: "Bobruisk" }
        ]
    },

    Belgium: {
        cities: [
            { name: "Brussels" },
            { name: "Antwerp" },
            { name: "Ghent" },
            { name: "Charleroi" },
            { name: "Liège" },
            { name: "Bruges" },
            { name: "Namur" }
        ]
    },

    Bulgaria: {
        cities: [
            { name: "Sofia" },
            { name: "Plovdiv" },
            { name: "Varna" },
            { name: "Burgas" },
            { name: "Ruse" },
            { name: "Stara Zagora" },
            { name: "Pleven" }
        ]
    },

    Botswana: {
        cities: [
            { name: "Gaborone" },
            { name: "Francistown" },
            { name: "Maun" },
            { name: "Serowe" },
            { name: "Kanye" }
        ]
    },
    Bhutan: {
        cities: [
            { name: "Thimphu" },
            { name: "Phuentsholing" },
            { name: "Paro" },
            { name: "Punakha" },
            { name: "Wangdue Phodrang" }
        ]
    },
    Belize: {
        cities: [
            { name: "Belize City" },
            { name: "San Ignacio" },
            { name: "Orange Walk" },
            { name: "Belmopan" },
            { name: "Dangriga" }
        ]
    },
    Barbados: {
        cities: [
            { name: "Bridgetown" },
            { name: "Speightstown" },
            { name: "Holetown" },
            { name: "Oistins" },
            { name: "Bathsheba" }
        ]
    },
    Benin: {
        cities: [
            { name: "Cotonou" },
            { name: "Porto-Novo" },
            { name: "Parakou" },
            { name: "Abomey" },
            { name: "Bohicon" }
        ]
    },
    Bolivia: {
        cities: [
            { name: "La Paz" },
            { name: "Santa Cruz de la Sierra" },
            { name: "Cochabamba" },
            { name: "Sucre" },
            { name: "El Alto" }
        ]
    },
    "Bosnia and Herzegovina": {
        cities: [
            { name: "Sarajevo" },
            { name: "Banja Luka" },
            { name: "Mostar" },
            { name: "Tuzla" },
            { name: "Zenica" }
        ]
    },
    Bahamas: {
        cities: [
            { name: "Nassau" },
            { name: "Freeport" },
            { name: "West End" },
            { name: "Marsh Harbour" },
            { name: "Alice Town" }
        ]
    },
    Cyprus: {
        cities: [
            { name: "Nicosia" },
            { name: "Limassol" },
            { name: "Larnaca" },
            { name: "Famagusta" },
            { name: "Paphos" }
        ]
    },
    Cuba: {
        cities: [
            { name: "Havana" },
            { name: "Santiago de Cuba" },
            { name: "Camagüey" },
            { name: "Holguín" },
            { name: "Santa Clara" },
            { name: "Guantánamo" }
        ]
    },
    "Costa Rica": {
        cities: [
            { name: "San José" },
            { name: "Alajuela" },
            { name: "Cartago" },
            { name: "Heredia" },
            { name: "Liberia" }
        ]
    },
    Comoros: {
        cities: [
            { name: "Moroni" },
            { name: "Mutsamudu" },
            { name: "Fomboni" },
            { name: "Domoni" },
            { name: "Chindini" }
        ]
    },
    Colombia: {
        cities: [
            { name: "Bogotá" },
            { name: "Medellín" },
            { name: "Cali" },
            { name: "Barranquilla" },
            { name: "Cartagena" }
        ]
    },
    Chile: {
        cities: [
            { name: "Santiago" },
            { name: "Valparaíso" },
            { name: "Concepción" },
            { name: "La Serena" },
            { name: "Antofagasta" }
        ]
    },
    Chad: {
        cities: [
            { name: "N'Djamena" },
            { name: "Moundou" },
            { name: "Sarh" },
            { name: "Abéché" },
            { name: "Kélo" }
        ]
    },
    "Central African Republic": {
        cities: [
            { name: "Bangui" },
            { name: "Berbérati" },
            { name: "Bimbo" },
            { name: "Carnot" },
            { name: "Mbaïki" }
        ]
    },
    Cameroon: {
        cities: [
            { name: "Douala" },
            { name: "Yaoundé" },
            { name: "Bafoussam" },
            { name: "Garoua" },
            { name: "Maroua" }
        ]
    },
    Cambodia: {
        cities: [
            { name: "Phnom Penh" },
            { name: "Siem Reap" },
            { name: "Battambang" },
            { name: "Sihanoukville" },
            { name: "Kampong Cham" }
        ]
    },
    "Czech Republic": {
        cities: [
            { name: "Prague" },
            { name: "Brno" },
            { name: "Ostrava" },
            { name: "Plzeň" },
            { name: "Liberec" },
            { name: "Olomouc" },
            { name: "České Budějovice" }
        ]
    },
    Croatia: {
        cities: [
            { name: "Zagreb" },
            { name: "Split" },
            { name: "Rijeka" },
            { name: "Osijek" },
            { name: "Zadar" },
            { name: "Slavonski Brod" },
            { name: "Pula" }
        ]
    },
    China: {
        cities: [
            { name: "Shanghai" },
            { name: "Hangzhou" },
            { name: "Nanjing" },
            { name: "Suzhou" },
            { name: "Wuxi" },
            { name: "Qingdao" },
            { name: "Chongqing" },
            { name: "Beijing" }
        ]
    },
    Canada: {
        cities: [
            { name: "Toronto" },
            { name: "Ottawa" },
            { name: "Montreal" },
            { name: "Edmonton" },
            { name: "Red Deer" },
            { name: "Grande Prairie" },
            { name: "Lethbridge" },
            { name: "Medicine Hat" },
            { name: "Fort McMurray" },
            { name: "Vancouver" },
            { name: "Victoria" },
            { name: "Kelowna" },
            { name: "Surrey" },
            { name: "Burnaby" },
            { name: "Kamloops" }
        ]
    },
    "Denmark": {
        cities: [
            { name: "Copenhagen" },
            { name: "Aarhus" },
            { name: "Odense" },
            { name: "Aalborg" },
            { name: "Esbjerg" },
            { name: "Randers" },
            { name: "Kolding" }
        ]
    },
    "Djibouti": {
        cities: [
            { name: "Djibouti" },
            { name: "Ali Sabieh" },
            { name: "Tadjoura" },
            { name: "Doraleh" },
            { name: "Obock" }
        ]
    },
    "Dominica": {
        cities: [
            { name: "Roseau" },
            { name: "Portsmouth" },
            { name: "Marigot" },
            { name: "Grand Bay" },
            { name: "La Plaine" }
        ]
    },
    "Dominican Republic": {
        cities: [
            { name: "Santo Domingo" },
            { name: "Santiago de los Caballeros" },
            { name: "La Romana" },
            { name: "Puerto Plata" },
            { name: "San Pedro de Macorís" }
        ]
    },
    "Ecuador": {
        cities: [
            { name: "Guayaquil" },
            { name: "Quito" },
            { name: "Cuenca" },
            { name: "Machala" },
            { name: "Loja" }
        ]
    },
    "El Salvador": {
        cities: [
            { name: "San Salvador" },
            { name: "Santa Ana" },
            { name: "San Miguel" },
            { name: "La Libertad" },
            { name: "Sonsonate" }
        ]
    },
    "Equatorial Guinea": {
        cities: [
            { name: "Malabo" },
            { name: "Bata" },
            { name: "Ebebiyin" },
            { name: "Aconibe" },
            { name: "Luba" }
        ]
    },
    "Eritrea": {
        cities: [
            { name: "Asmara" },
            { name: "Mendefera" },
            { name: "Keren" },
            { name: "Massawa" },
            { name: "Adigrat" }
        ]
    },
    "Eswatini": {
        cities: [
            { name: "Mbabane" },
            { name: "Manzini" },
            { name: "Lobamba" },
            { name: "Nhlangano" },
            { name: "Big Bend" }
        ]
    },
    "Ethiopia": {
        cities: [
            { name: "Addis Ababa" },
            { name: "Dire Dawa" },
            { name: "Mekelle" },
            { name: "Hawassa" },
            { name: "Gondar" }
        ]
    },
    "Estonia": {
        cities: [
            { name: "Tallinn" },
            { name: "Tartu" },
            { name: "Narva" },
            { name: "Pärnu" },
            { name: "Kohtla-Järve" },
            { name: "Viljandi" },
            { name: "Maardu" }
        ]
    },
    "Egypt": {
        cities: [
            { name: "Cairo" },
            { name: "Alexandria" },
            { name: "Giza" }
        ]
    },
    "France": {
        cities: [
            { name: "Paris" },
            { name: "Marseille" },
            { name: "Lyon" },
            { name: "Toulouse" },
            { name: "Nice" },
            { name: "Nantes" },
            { name: "Strasbourg" }
        ]
    },
    "Finland": {
        cities: [
            { name: "Helsinki" },
            { name: "Espoo" },
            { name: "Tampere" },
            { name: "Vantaa" },
            { name: "Oulu" },
            { name: "Turku" },
            { name: "Jyväskylä" }
        ]
    },
    "Fiji": {
        cities: [
            { name: "Suva" },
            { name: "Nadi" },
            { name: "Lautoka" },
            { name: "Labasa" },
            { name: "Ba" }
        ]
    },
    "Gabon": {
        cities: [
            { name: "Libreville" },
            { name: "Port-Gentil" },
            { name: "Franceville" },
            { name: "Moanda" },
            { name: "Oyem" }
        ]
    },
    "Gambia": {
        cities: [
            { name: "Banjul" },
            { name: "Serrekunda" },
            { name: "Brikama" },
            { name: "Kerewan" },
            { name: "Bakau" }
        ]
    },
    "Georgia": {
        cities: [
            { name: "Tbilisi" },
            { name: "Batumi" },
            { name: "Kutaisi" },
            { name: "Zugdidi" },
            { name: "Rustavi" }
        ]
    },
    "Grenada": {
        cities: [
            { name: "St. George's" },
            { name: "Gouyave" }
        ]
    },
    "Guatemala": {
        cities: [
            { name: "Guatemala City" },
            { name: "Quetzaltenango" },
            { name: "Escuintla" },
            { name: "Chimaltenango" }
        ]
    },
    "Guyana": {
        cities: [
            { name: "Georgetown" },
            { name: "Linden" },
            { name: "New Amsterdam" }
        ]
    },
    "Ghana": {
        cities: [
            { name: "Accra" },
            { name: "Kumasi" },
            { name: "Tamale" },
            { name: "Takoradi" },
            { name: "Sunyani" }
        ]
    },
    "Greece": {
        cities: [
            { name: "Athens" },
            { name: "Thessaloniki" },
            { name: "Patras" },
            { name: "Heraklion" },
            { name: "Larissa" },
            { name: "Volos" },
            { name: "Rhodes" }
        ]
    },
    "Germany": {
        cities: [
            { name: "Berlin" },
            { name: "Hamburg" },
            { name: "Munich" },
            { name: "Cologne" },
            { name: "Frankfurt" },
            { name: "Stuttgart" },
            { name: "Düsseldorf" }
        ]
    },
    "Haiti": {
        cities: [
            { name: "Port-au-Prince" },
            { name: "Cap-Haïtien" },
            { name: "Les Cayes" }
        ]
    },
    "Honduras": {
        cities: [
            { name: "Tegucigalpa" },
            { name: "San Pedro Sula" },
            { name: "La Ceiba" }
        ]
    },
    "Hungary": {
        cities: [
            { name: "Budapest" },
            { name: "Debrecen" },
            { name: "Szeged" },
            { name: "Miskolc" },
            { name: "Pécs" },
            { name: "Győr" },
            { name: "Nyíregyháza" }
        ]
    },
    "Israel": {
        cities: [
            { name: "Jerusalem" },
            { name: "Tel Aviv" },
            { name: "Haifa" },
            { name: "Rishon LeZion" },
            { name: "Petah Tikva" },
            { name: "Ashdod" },
            { name: "Netanya" }
        ]
    },
    "Ireland": {
        cities: [
            { name: "Dublin" },
            { name: "Cork" },
            { name: "Limerick" },
            { name: "Galway" },
            { name: "Waterford" },
            { name: "Drogheda" },
            { name: "Dundalk" }
        ]
    },
    "Ivory Coast": {
        cities: [
            { name: "Abidjan" },
            { name: "Bouaké" },
            { name: "San Pedro" },
            { name: "Yamoussoukro" },
            { name: "Daloa" }
        ]
    },
    "Iraq": {
        cities: [
            { name: "Baghdad" },
            { name: "Basra" },
            { name: "Erbil" },
            { name: "Najaf" },
            { name: "Kirkuk" },
            { name: "Fallujah" }
        ]
    },
    "Iran": {
        cities: [
            { name: "Tehran" },
            { name: "Isfahan" },
            { name: "Shiraz" },
            { name: "Tabriz" },
            { name: "Mashhad" },
            { name: "Ahvaz" }
        ]
    },
    "Italy": {
        cities: [
            { name: "Rome" },
            { name: "Milan" },
            { name: "Naples" },
            { name: "Turin" },
            { name: "Palermo" },
            { name: "Genoa" },
            { name: "Bologna" }
        ]
    },
    "Indonesia": {
        cities: [
            { name: "Jakarta" },
            { name: "Bandung" },
            { name: "Surabaya" }
        ]
    },
    "India": {
        cities: [
            { name: "Kolkata" },
            { name: "Mumbai" },
            { name: "Delhi" },
            { name: "Bangalore" },
            { name: "Chennai" },
            { name: "Hyderabad" },
            { name: "Pune" },
            { name: "Ahmedabad" },
            { name: "Surat" },
            { name: "Jaipur" },
            { name: "Lucknow" },
            { name: "Kanpur" },
            { name: "Nagpur" },
            { name: "Indore" },
            { name: "Vadodara" },
            { name: "Bhopal" },
            { name: "Patna" },
            { name: "Kochi" },
            { name: "Vishakhapatnam" },
            { name: "Ranchi" },
            { name: "Guwahati" },
            { name: "Chandigarh" },
            { name: "Noida" },
            { name: "Faridabad" },
            { name: "Amritsar" },
            { name: "Rajkot" },
            { name: "Udaipur" },
            { name: "Jammu" },
            { name: "Agra" }
        ]
    },
    "Jordan": {
        cities: [
            { name: "Amman" },
            { name: "Irbid" },
            { name: "Zarqa" }
        ]
    },
    "Jamaica": {
        cities: [
            { name: "Kingston" },
            { name: "Montego Bay" },
            { name: "Spanish Town" },
            { name: "Portmore" },
            { name: "Ocho Rios" },
            { name: "Mandeville" }
        ]
    },
    "Japan": {
        cities: [
            { name: "Tokyo" },
            { name: "Yokohama" },
            { name: "Osaka" },
            { name: "Nagoya" },
            { name: "Sapporo" },
            { name: "Fukuoka" }
        ]
    },
    "Kazakhstan": {
        cities: [
            { name: "Almaty" },
            { name: "Shymkent" },
            { name: "Karaganda" },
            { name: "Aktobe" },
            { name: "Astana" }
        ]
    },
    "Kiribati": {
        cities: [
            { name: "Tarawa" },
            { name: "Bairiki" },
            { name: "Betio" },
            { name: "Buota" },
            { name: "Tabiteuea" }
        ]
    },
    "Kuwait": {
        cities: [
            { name: "Kuwait City" },
            { name: "Al Ahmadi" },
            { name: "Hawalli" },
            { name: "Mubarak Al Kabeer" },
            { name: "Farwaniya" }
        ]
    },
    "Kyrgyzstan": {
        cities: [
            { name: "Bishkek" },
            { name: "Osh" },
            { name: "Jalal-Abad" },
            { name: "Karakol" },
            { name: "Tokmok" }
        ]
    },
    "Kenya": {
        cities: [
            { name: "Nairobi" },
            { name: "Mombasa" },
            { name: "Kisumu" },
            { name: "Nakuru" },
            { name: "Eldoret" }
        ]
    },
    "North Korea": {
        cities: [
            { name: "Pyongyang" },
            { name: "Hamhung" },
            { name: "Chongjin" },
            { name: "Sinuiju" },
            { name: "Nampo" }
        ]
    },
    "Nauru": {
        cities: [
            { name: "Yaren" },
            { name: "Anibare" },
            { name: "Baiti" },
            { name: "Denigomodu" },
            { name: "Aiwo" }
        ]
    },
    "Nicaragua": {
        cities: [
            { name: "Managua" },
            { name: "León" },
            { name: "Masaya" },
            { name: "Estelí" },
            { name: "Chinandega" }
        ]
    },
    "Niger": {
        cities: [
            { name: "Niamey" },
            { name: "Zinder" },
            { name: "Maradi" },
            { name: "Agadez" },
            { name: "Tahoua" }
        ]
    },
    "North Macedonia": {
        cities: [
            { name: "Skopje" },
            { name: "Bitola" },
            { name: "Kumanovo" },
            { name: "Prilep" },
            { name: "Ohrid" }
        ]
    },
    "Nepal": {
        cities: [
            { name: "Kathmandu" },
            { name: "Pokhara" },
            { name: "Biratnagar" },
            { name: "Lalitpur" },
            { name: "Birgunj" }
        ]
    },
    "Namibia": {
        cities: [
            { name: "Windhoek" },
            { name: "Swakopmund" },
            { name: "Walvis Bay" },
            { name: "Rundu" },
            { name: "Oshakati" }
        ]
    },
    "Netherlands": {
        cities: [
            { name: "Amsterdam" },
            { name: "Rotterdam" },
            { name: "The Hague" },
            { name: "Utrecht" },
            { name: "Eindhoven" },
            { name: "Tilburg" },
            { name: "Groningen" }
        ]
    },
    "Norway": {
        cities: [
            { name: "Oslo" },
            { name: "Bergen" },
            { name: "Stavanger" },
            { name: "Trondheim" },
            { name: "Fredrikstad" },
            { name: "Kristiansand" }
        ]
    },
    "New Zealand": {
        cities: [
            { name: "Auckland" },
            { name: "Wellington" },
            { name: "Christchurch" },
            { name: "Hamilton" },
            { name: "Tauranga" },
            { name: "Dunedin" },
            { name: "Palmerston North" }
        ]
    },
    "Laos": {
        cities: [
            { name: "Vientiane" },
            { name: "Luang Prabang" },
            { name: "Pakse" },
            { name: "Champasak" },
            { name: "Xam Neua" }
        ]
    },
    "Latvia": {
        cities: [
            { name: "Riga" },
            { name: "Daugavpils" },
            { name: "Jurmala" },
            { name: "Liepaja" },
            { name: "Jelgava" }
        ]
    },
    "Lebanon": {
        cities: [
            { name: "Beirut" },
            { name: "Sidon" },
            { name: "Tyre" },
            { name: "Zahle" }
        ]
    },
    "Lesotho": {
        cities: [
            { name: "Maseru" },
            { name: "Maputsoe" },
            { name: "Butha-Buthe" },
            { name: "Mohale's Hoek" },
            { name: "Quthing" }
        ]
    },
    "Liberia": {
        cities: [
            { name: "Monrovia" },
            { name: "Gbarnga" },
            { name: "Buchanan" },
            { name: "Kakata" },
            { name: "Voinjama" }
        ]
    },
    "Liechtenstein": {
        cities: [
            { name: "Vaduz" },
            { name: "Schaan" },
            { name: "Balzers" },
            { name: "Eschen" }
        ]
    },
    "Lithuania": {
        cities: [
            { name: "Vilnius" },
            { name: "Kaunas" },
            { name: "Klaipėda" },
            { name: "Šiauliai" },
            { name: "Panevėžys" }
        ]
    },
    "Luxembourg": {
        cities: [
            { name: "Luxembourg City" },
            { name: "Ettelbruck" },
            { name: "Differdange" },
            { name: "Esch-sur-Alzette" }
        ]
    },
    "Libya": {
        cities: [
            { name: "Tripoli" },
            { name: "Benghazi" },
            { name: "Misrata" },
            { name: "Zliten" },
            { name: "Tajoura" }
        ]
    },
    "Madagascar": {
        cities: [
            { name: "Antananarivo" },
            { name: "Toamasina" },
            { name: "Antsirabe" },
            { name: "Fianarantsoa" },
            { name: "Mahajanga" }
        ]
    },
    "Mauritius": {
        cities: [
            { name: "Port Louis" },
            { name: "Curepipe" },
            { name: "Vacoas" },
            { name: "Quatre Bornes" },
            { name: "Rose Hill" }
        ]
    },
    "Maldives": {
        cities: [
            { name: "Malé" },
            { name: "Hulhumalé" },
            { name: "Addu City" },
            { name: "Fuvahmulah" },
            { name: "Kulhudhuffushi" }
        ]
    },
    "Myanmar": {
        cities: [
            { name: "Yangon" },
            { name: "Mandalay" },
            { name: "Naypyidaw" },
            { name: "Bago" },
            { name: "Taunggyi" }
        ]
    },
    "Malawi": {
        cities: [
            { name: "Blantyre" },
            { name: "Lilongwe" },
            { name: "Mzuzu" },
            { name: "Zomba" },
            { name: "Mangochi" }
        ]
    },
    "Malta": {
        cities: [
            { name: "Valletta" },
            { name: "Mosta" },
            { name: "Mellieħa" },
            { name: "Sliema" },
            { name: "Birkirkara" }
        ]
    },
    "Marshall Islands": {
        cities: [
            { name: "Majuro" },
            { name: "Ebaye" },
            { name: "Laura" },
            { name: "Rairok" },
            { name: "Bikini Atoll" }
        ]
    },
    "Moldova": {
        cities: [
            { name: "Chișinău" },
            { name: "Bălți" },
            { name: "Tiraspol" },
            { name: "Bender" },
            { name: "Briceni" }
        ]
    },
    "Monaco": {
        cities: [
            { name: "Monaco" },
            { name: "Monte Carlo" },
            { name: "La Condamine" },
            { name: "Moneghetti" },
            { name: "Fontvieille" }
        ]
    },
    "Mongolia": {
        cities: [
            { name: "Ulaanbaatar" },
            { name: "Erdenet" },
            { name: "Darkhan" },
            { name: "Choibalsan" },
            { name: "Mörön" }
        ]
    },
    "Montenegro": {
        cities: [
            { name: "Podgorica" },
            { name: "Nikšić" },
            { name: "Bijelo Polje" },
            { name: "Herceg Novi" },
            { name: "Tivat" }
        ]
    },
    "Malaysia": {
        cities: [
            { name: "Kuala Lumpur" },
            { name: "George Town" },
            { name: "Ipoh" },
            { name: "Kuching" },
            { name: "Johor Bahru" },
            { name: "Kota Kinabalu" },
            { name: "Shah Alam" }
        ]
    },
    "Mozambique": {
        cities: [
            { name: "Maputo" },
            { name: "Matola" },
            { name: "Beira" },
            { name: "Nampula" },
            { name: "Chimoio" }
        ]
    },
    "Morocco": {
        cities: [
            { name: "Casablanca" },
            { name: "Rabat" },
            { name: "Marrakech" },
            { name: "Fes" }
        ]
    },
    "Mexico": {
        cities: [
            { name: "Mexico City" },
            { name: "Guadalajara" },
            { name: "Monterrey" },
            { name: "Puebla" },
            { name: "Toluca" },
            { name: "Leon" },
            { name: "Cancun" },
            { name: "Playa del Carmen" },
            { name: "Tulum" },
            { name: "Cozumel" },
            { name: "Isla Holbox" },
            { name: "Akumal" },
            { name: "Chihuahua" },
            { name: "Ciudad Juarez" },
            { name: "Delicias" },
            { name: "Camargo" },
            { name: "Cuauhtémoc" },
            { name: "Parral" },
            { name: "Hermosillo" },
            { name: "Nogales" },
            { name: "San Luis Río Colorado" },
            { name: "Agua Prieta" },
            { name: "Cananea" },
            { name: "Puerto Peñasco" }
        ]
    },
    "Oman": {
        cities: [
            { name: "Muscat" },
            { name: "Salalah" },
            { name: "Sohar" },
            { name: "Nizwa" },
            { name: "Sur" }
        ]
    },
    "Palau": {
        cities: [
            { name: "Ngerulmud" },
            { name: "Koror" },
            { name: "Melekeok" },
            { name: "Airai" },
            { name: "Babeldaob" }
        ]
    },
    "Panama": {
        cities: [
            { name: "Panama City" },
            { name: "Colón" },
            { name: "David" },
            { name: "Chiriquí" },
            { name: "La Chorrera" }
        ]
    },
    "Papua New Guinea": {
        cities: [
            { name: "Port Moresby" },
            { name: "Lae" },
            { name: "Mount Hagen" },
            { name: "Madang" },
            { name: "Rabaul" }
        ]
    },
    "Paraguay": {
        cities: [
            { name: "Asunción" },
            { name: "Ciudad del Este" },
            { name: "Luque" },
            { name: "San Lorenzo" },
            { name: "Encarnación" }
        ]
    },
    "Peru": {
        cities: [
            { name: "Lima" },
            { name: "Arequipa" },
            { name: "Trujillo" },
            { name: "Chiclayo" },
            { name: "Piura" }
        ]
    },
    "Puerto Rico": {
        cities: [
            { name: "San Juan" },
            { name: "Ponce" },
            { name: "Bayamón" },
            { name: "Carolina" },
            { name: "Mayagüez" }
        ]
    },
    "Palestine": {
        cities: [
            { name: "Gaza" },
            { name: "Khan Yunis" },
            { name: "Rafah" },
            { name: "Deir al-Balah" },
            { name: "Jabalia" },
            { name: "Hebron" },
            { name: "Bethlehem" },
            { name: "Jericho" },
            { name: "Nablus" },
            { name: "Ramallah" }

        ]
    },
    "Portugal": {
        cities: [
            { name: "Lisbon" },
            { name: "Porto" },
            { name: "Vila Nova de Gaia" },
            { name: "Amadora" },
            { name: "Braga" },
            { name: "Funchal" },
            { name: "Coimbra" }
        ]
    },
    "Poland": {
        cities: [
            { name: "Warsaw" },
            { name: "Kraków" },
            { name: "Łódź" },
            { name: "Wrocław" },
            { name: "Poznań" },
            { name: "Gdańsk" },
            { name: "Szczecin" }
        ]
    },
    "Philippines": {
        cities: [
            { name: "Manila" },
            { name: "Quezon City" },
            { name: "Davao City" },
            { name: "Cebu City" },
            { name: "Zamboanga City" },
            { name: "General Santos" },
            { name: "Taguig" }
        ]
    },
    "Pakistan": {
        cities: [
            { name: "Karachi" },
            { name: "Lahore" },
            { name: "Islamabad" },
            { name: "Faisalabad" },
            { name: "Rawalpindi" },
            { name: "Gujranwala" },
            { name: "Peshawar" },
            { name: "Multan" },
            { name: "Quetta" },
            { name: "Sialkot" },
            { name: "Bahawalpur" }
        ]
    },
    "Qatar": {
        cities: [
            { name: "Doha" },
            { name: "Al Rayyan" },
            { name: "Al Khor" },
            { name: "Al Wakrah" },
            { name: "Umm Salal" }
        ]
    },
    "Romania": {
        cities: [
            { name: "Bucharest" },
            { name: "Cluj-Napoca" },
            { name: "Timișoara" },
            { name: "Iași" },
            { name: "Constanța" },
            { name: "Craiova" },
            { name: "Brașov" }
        ]
    },
    "Russia": {
        cities: [
            { name: "Moscow" },
            { name: "Saint Petersburg" },
            { name: "Kazan" },
            { name: "Yekaterinburg" },
            { name: "Chelyabinsk" },
            { name: "Tyumen" },
            { name: "Novosibirsk" },
            { name: "Barnaul" },
            { name: "Tomsk" },
            { name: "Vladivostok" },
            { name: "Nakhodka" },
            { name: "Ussuriysk" }
        ]
    },
    "Rwanda": {
        cities: [
            { name: "Kigali" },
            { name: "Butare" },
            { name: "Musanze" },
            { name: "Rubavu" },
            { name: "Nyamata" }
        ]
    },
    "Saint Kitts and Nevis": {
        cities: [
            { name: "Basseterre" },
            { name: "Charlestown" },
            { name: "Cayon" },
            { name: "Sandy Point Town" },
            { name: "Tabernacle" }
        ]
    },
    "Saint Lucia": {
        cities: [
            { name: "Castries" },
            { name: "Gros Islet" },
            { name: "Vieux Fort" },
            { name: "Soufrière" },
            { name: "Dennery" }
        ]
    },
    "Samoa": {
        cities: [
            { name: "Apia" },
            { name: "Vaitele" },
            { name: "Faleula" },
            { name: "Siumu" },
            { name: "Saleufi" }
        ]
    },
    "San Marino": {
        cities: [
            { name: "San Marino" },
            { name: "Serravalle" },
            { name: "Domagnano" },
            { name: "Borgo Maggiore" },
            { name: "Chiesanuova" }
        ]
    },
    "Solomon Islands": {
        cities: [
            { name: "Honiara" },
            { name: "Auki" },
            { name: "Gizo" },
            { name: "Munda" },
            { name: "Kira Kira" }
        ]
    },
    "Somalia": {
        cities: [
            { name: "Mogadishu" },
            { name: "Hargeisa" },
            { name: "Bosaso" },
            { name: "Kismayo" },
            { name: "Baidoa" }
        ]
    },
    "Suriname": {
        cities: [
            { name: "Paramaribo" },
            { name: "Nieuw Nickerie" },
            { name: "Lelydorp" },
            { name: "Moengo" },
            { name: "Papatam" }
        ]
    },
    "Syria": {
        cities: [
            { name: "Damascus" },
            { name: "Aleppo" },
            { name: "Homs" },
            { name: "Latakia" },
            { name: "Daraa" }
        ]
    },
    "Senegal": {
        cities: [
            { name: "Dakar" },
            { name: "Saint-Louis" },
            { name: "Thiès" },
            { name: "Kaolack" },
            { name: "Ziguinchor" }
        ]
    },
    "Sudan": {
        cities: [
            { name: "Khartoum" },
            { name: "Omdurman" },
            { name: "Port Sudan" },
            { name: "Kosti" },
            { name: "El Obeid" }
        ]
    },
    "Serbia": {
        cities: [
            { name: "Belgrade" },
            { name: "Novi Sad" },
            { name: "Niš" },
            { name: "Kragujevac" },
            { name: "Subotica" },
            { name: "Zrenjanin" },
            { name: "Pančevo" }
        ]
    },
    "Slovakia": {
        cities: [
            { name: "Bratislava" },
            { name: "Košice" },
            { name: "Prešov" },
            { name: "Žilina" },
            { name: "Nitra" },
            { name: "Banská Bystrica" },
            { name: "Trnava" }
        ]
    },
    "Slovenia": {
        cities: [
            { name: "Ljubljana" },
            { name: "Maribor" },
            { name: "Celje" },
            { name: "Kranj" },
            { name: "Novo Mesto" }
        ]
    },
    "Seychelles": {
        cities: [
            { name: "Victoria" },
            { name: "Beau Vallon" },
            { name: "Anse Boileau" },
            { name: "Anse Royale" },
            { name: "La Digue" }
        ]
    },
    "Sweden": {
        cities: [
            { name: "Stockholm", },
            { name: "Gothenburg", },
            { name: "Malmö", },
            { name: "Uppsala", },
            { name: "Västerås", },
            { name: "Örebro", }
        ]
    },
    "Switzerland": {
        cities: [
            { name: "Zurich", },
            { name: "Geneva", },
            { name: "Basel", },
            { name: "Lausanne", },
            { name: "Bern", }
        ]
    },
    "Singapore": {
        cities: [
            { name: "Singapore", }
        ]
    },
    "Spain": {
        cities: [
            { name: "Madrid", },
            { name: "Barcelona", },
            { name: "Valencia", },
            { name: "Seville", },
            { name: "Zaragoza", },
            { name: "Málaga", },
            { name: "Murcia", }
        ]
    },
    "Sri Lanka": {
        cities: [
            { name: "Colombo", },
            { name: "Kandy", },
            { name: "Galle", },
            { name: "Jaffna", },
            { name: "Negombo", }
        ]
    },
    "South Africa": {
        cities: [
            { name: "Johannesburg" },
            { name: "Cape Town" },
            { name: "Durban" },
            { name: "Pretoria" },
            { name: "Port Elizabeth" },
            { name: "Bloemfontein" }
        ]
    },
    "South Korea": {
        cities: [
            { name: "Seoul" },
            { name: "Busan" },
            { name: "Incheon" },
            { name: "Daegu" },
            { name: "Daejeon" },
            { name: "Gwangju" },
            { name: "Suwon" }
        ]
    },
    "Taiwan": {
        cities: [
            { name: "Taipei" },
            { name: "Kaohsiung" },
            { name: "Taichung" },
            { name: "Tainan" },
            { name: "Keelung" }
        ]
    },

    "Timor-Leste": {
        cities: [
            { name: "Dili" },
            { name: "Baucau" },
            { name: "Maliana" },
            { name: "Viqueque" },
            { name: "Lospalos" }
        ]
    },

    "Tokelau": {
        cities: [
            { name: "Fakaofo" },
            { name: "Atafu" },
            { name: "Nukunonu" }
        ]
    },

    "Tonga": {
        cities: [
            { name: "Nuku'alofa" },
            { name: "Neiafu" },
            { name: "Vava'u" },
            { name: "Ha'apai" }
        ]
    },

    "Trinidad and Tobago": {
        cities: [
            { name: "Port of Spain" },
            { name: "San Fernando" },
            { name: "Scarborough" },
            { name: "Chaguanas" },
            { name: "Arima" }
        ]
    },

    "Turkmenistan": {
        cities: [
            { name: "Ashgabat" },
            { name: "Mary" },
            { name: "Turkmenabat" },
            { name: "Dashoguz" }
        ]
    },

    "Tuvalu": {
        cities: [
            { name: "Funafuti" },
            { name: "Nanumea" },
            { name: "Nukufetau" },
            { name: "Vaitupu" },
            { name: "Nanumanga" },
            { name: "Niutao" }
        ]
    },

    "Tanzania": {
        cities: [
            { name: "Dar es Salaam" },
            { name: "Dodoma" },
            { name: "Arusha" },
            { name: "Mwanza" },
            { name: "Mbeya" }
        ]
    },

    "Tunisia": {
        cities: [
            { name: "Tunis" },
            { name: "Sfax" },
            { name: "Sousse" },
            { name: "Gabès" }
        ]
    },

    "Tajikistan": {
        cities: [
            { name: "Dushanbe" },
            { name: "Khujand" },
            { name: "Kulob" },
            { name: "Bokhtar" },
            { name: "Istaravshan" }
        ]
    },

    "Thailand": {
        cities: [
            { name: "Bangkok" },
            { name: "Chiang Mai" },
            { name: "Pattaya" },
            { name: "Phuket" },
            { name: "Hua Hin" },
            { name: "Nonthaburi" },
            { name: "Udon Thani" }
        ]
    },
    "Turkey": {
        cities: [
            { name: "Istanbul" },
            { name: "Ankara" },
            { name: "Izmir" },
            { name: "Bursa" },
            { name: "Adana" },
            { name: "Gaziantep" },
            { name: "Konya" }
        ]
    },
    "Uruguay": {
        cities: [
            { name: "Montevideo" },
            { name: "Salto" },
            { name: "Ciudad de la Costa" },
            { name: "Paysandú" },
            { name: "Las Piedras" },
            { name: "Rivera" },
            { name: "Maldonado" }
        ]
    },
    "Ukraine": {
        cities: [
            { name: "Kyiv" },
            { name: "Kharkiv" },
            { name: "Odesa" },
            { name: "Dnipro" },
            { name: "Donetsk" },
            { name: "Zaporizhzhia" },
            { name: "Lviv" }
        ]
    },
    "United Arab Emirates": {
        cities: [
            { name: "Dubai" },
            { name: "Abu Dhabi" },
            { name: "Sharjah" },
            { name: "Al Ain" },
            { name: "Ajman" },
            { name: "Ras Al Khaimah" },
            { name: "Fujairah" }
        ]
    },
    "United Kingdom": {
        cities: [
            { name: "London" },
            { name: "Birmingham" },
            { name: "Manchester" },
            { name: "Glasgow" },
            { name: "Liverpool" },
            { name: "Edinburgh" },
            { name: "Bristol" }
        ]
    },
    "United States": {
        cities: [
            { name: "New York" },
            { name: "Miami" },
            { name: "Boston" },
            { name: "Atlanta" },
            { name: "Washington, D.C." },
            { name: "Philadelphia" },
            { name: "Orlando" },
            { name: "Detroit" },
            { name: "Tampa" },
            { name: "Los Angeles" },
            { name: "San Francisco" },
            { name: "Seattle" },
            { name: "San Diego" },
            { name: "Portland" },
            { name: "Las Vegas" },
            { name: "Sacramento" },
            { name: "San Jose" },
            { name: "Chicago" },
            { name: "Houston" },
            { name: "Dallas" },
            { name: "Austin" },
            { name: "San Antonio" },
            { name: "Nashville" },
            { name: "New Orleans" }
        ]
    },
    "Uzbekistan": {
        cities: [
            { name: "Tashkent" },
            { name: "Samarkand" },
            { name: "Bukhara" },
            { name: "Andijan" }
        ]
    },
    "Uganda": {
        cities: [
            { name: "Kampala" },
            { name: "Entebbe" },
            { name: "Jinja" },
            { name: "Mbarara" },
            { name: "Mbale" }
        ]
    },
    "Vanuatu": {
        cities: [
            { name: "Port Vila" },
            { name: "Luganville" },
            { name: "Lenakel" },
            { name: "Santo" }
        ]
    },
    "Vatican City": {
        cities: [
            { name: "Vatican City" }
        ]
    },
    "Venezuela": {
        cities: [
            { name: "Caracas" },
            { name: "Maracaibo" },
            { name: "Barquisimeto" },
            { name: "Maracay" }
        ]
    },
    "Vietnam": {
        cities: [
            { name: "Ho Chi Minh City" },
            { name: "Hanoi" },
            { name: "Haiphong" },
            { name: "Da Nang" },
            { name: "Can Tho" },
            { name: "Bien Hoa" }
        ]
    },
    "Yemen": {
        cities: [
            { name: "Aden" },
            { name: "Taiz" },
            { name: "Sanaa" },
            { name: "Al Hudaydah" },
            { name: "Mukalla" }
        ]
    },
    "Zambia": {
        cities: [
            { name: "Lusaka" },
            { name: "Kitwe" },
            { name: "Ndola" },
            { name: "Livingstone" },
            { name: "Chipata" }
        ]
    },
    "Zimbabwe": {
        cities: [
            { name: "Harare" },
            { name: "Bulawayo" },
            { name: "Mutare" },
            { name: "Gweru" },
            { name: "Masvingo" }
        ]
    }






};
