export interface CityData {
  city: string;
  country: string;
  countryCode: string;
  hourlyWageUSD: number;
  minutesForLatte: number;
  flag: string;
  medianMonthlyUSD: number;
}

// Realistic median hourly wages in USD (2024 estimates, converted at market rates)
// Minutes calculated based on $5 latte equivalent
export const cities: CityData[] = [
  { city: "Zurich", country: "Switzerland", countryCode: "CH", hourlyWageUSD: 37.50, minutesForLatte: 8, flag: "🇨🇭", medianMonthlyUSD: 6500 },
  { city: "San Francisco", country: "USA", countryCode: "US", hourlyWageUSD: 35.00, minutesForLatte: 9, flag: "🇺🇸", medianMonthlyUSD: 6070 },
  { city: "New York", country: "USA", countryCode: "US", hourlyWageUSD: 30.00, minutesForLatte: 10, flag: "🇺🇸", medianMonthlyUSD: 5200 },
  { city: "Copenhagen", country: "Denmark", countryCode: "DK", hourlyWageUSD: 29.00, minutesForLatte: 10, flag: "🇩🇰", medianMonthlyUSD: 5030 },
  { city: "Oslo", country: "Norway", countryCode: "NO", hourlyWageUSD: 28.50, minutesForLatte: 11, flag: "🇳🇴", medianMonthlyUSD: 4940 },
  { city: "Sydney", country: "Australia", countryCode: "AU", hourlyWageUSD: 26.00, minutesForLatte: 12, flag: "🇦🇺", medianMonthlyUSD: 4510 },
  { city: "London", country: "UK", countryCode: "GB", hourlyWageUSD: 24.00, minutesForLatte: 13, flag: "🇬🇧", medianMonthlyUSD: 4160 },
  { city: "Amsterdam", country: "Netherlands", countryCode: "NL", hourlyWageUSD: 23.00, minutesForLatte: 13, flag: "🇳🇱", medianMonthlyUSD: 3990 },
  { city: "Tokyo", country: "Japan", countryCode: "JP", hourlyWageUSD: 21.00, minutesForLatte: 14, flag: "🇯🇵", medianMonthlyUSD: 3640 },
  { city: "Singapore", country: "Singapore", countryCode: "SG", hourlyWageUSD: 20.00, minutesForLatte: 15, flag: "🇸🇬", medianMonthlyUSD: 3470 },
  { city: "Toronto", country: "Canada", countryCode: "CA", hourlyWageUSD: 19.50, minutesForLatte: 15, flag: "🇨🇦", medianMonthlyUSD: 3380 },
  { city: "Berlin", country: "Germany", countryCode: "DE", hourlyWageUSD: 19.00, minutesForLatte: 16, flag: "🇩🇪", medianMonthlyUSD: 3290 },
  { city: "Seoul", country: "South Korea", countryCode: "KR", hourlyWageUSD: 17.00, minutesForLatte: 18, flag: "🇰🇷", medianMonthlyUSD: 2950 },
  { city: "Dubai", country: "UAE", countryCode: "AE", hourlyWageUSD: 16.00, minutesForLatte: 19, flag: "🇦🇪", medianMonthlyUSD: 2770 },
  { city: "Tel Aviv", country: "Israel", countryCode: "IL", hourlyWageUSD: 16.50, minutesForLatte: 18, flag: "🇮🇱", medianMonthlyUSD: 2860 },
  { city: "Madrid", country: "Spain", countryCode: "ES", hourlyWageUSD: 14.00, minutesForLatte: 21, flag: "🇪🇸", medianMonthlyUSD: 2430 },
  { city: "Prague", country: "Czech Republic", countryCode: "CZ", hourlyWageUSD: 11.50, minutesForLatte: 26, flag: "🇨🇿", medianMonthlyUSD: 1990 },
  { city: "Warsaw", country: "Poland", countryCode: "PL", hourlyWageUSD: 10.50, minutesForLatte: 29, flag: "🇵🇱", medianMonthlyUSD: 1820 },
  { city: "Lisbon", country: "Portugal", countryCode: "PT", hourlyWageUSD: 10.00, minutesForLatte: 30, flag: "🇵🇹", medianMonthlyUSD: 1730 },
  { city: "Buenos Aires", country: "Argentina", countryCode: "AR", hourlyWageUSD: 5.50, minutesForLatte: 55, flag: "🇦🇷", medianMonthlyUSD: 950 },
  { city: "Santiago", country: "Chile", countryCode: "CL", hourlyWageUSD: 7.00, minutesForLatte: 43, flag: "🇨🇱", medianMonthlyUSD: 1210 },
  { city: "São Paulo", country: "Brazil", countryCode: "BR", hourlyWageUSD: 5.00, minutesForLatte: 60, flag: "🇧🇷", medianMonthlyUSD: 870 },
  { city: "Mexico City", country: "Mexico", countryCode: "MX", hourlyWageUSD: 4.50, minutesForLatte: 67, flag: "🇲🇽", medianMonthlyUSD: 780 },
  { city: "Bogotá", country: "Colombia", countryCode: "CO", hourlyWageUSD: 3.80, minutesForLatte: 79, flag: "🇨🇴", medianMonthlyUSD: 660 },
  { city: "Lima", country: "Peru", countryCode: "PE", hourlyWageUSD: 3.50, minutesForLatte: 86, flag: "🇵🇪", medianMonthlyUSD: 610 },
  { city: "Istanbul", country: "Turkey", countryCode: "TR", hourlyWageUSD: 5.20, minutesForLatte: 58, flag: "🇹🇷", medianMonthlyUSD: 900 },
  { city: "Bangkok", country: "Thailand", countryCode: "TH", hourlyWageUSD: 3.20, minutesForLatte: 94, flag: "🇹🇭", medianMonthlyUSD: 550 },
  { city: "Kuala Lumpur", country: "Malaysia", countryCode: "MY", hourlyWageUSD: 4.80, minutesForLatte: 63, flag: "🇲🇾", medianMonthlyUSD: 830 },
  { city: "Beijing", country: "China", countryCode: "CN", hourlyWageUSD: 6.50, minutesForLatte: 46, flag: "🇨🇳", medianMonthlyUSD: 1130 },
  { city: "Shanghai", country: "China", countryCode: "CN", hourlyWageUSD: 7.20, minutesForLatte: 42, flag: "🇨🇳", medianMonthlyUSD: 1250 },
  { city: "Moscow", country: "Russia", countryCode: "RU", hourlyWageUSD: 6.00, minutesForLatte: 50, flag: "🇷🇺", medianMonthlyUSD: 1040 },
  { city: "Johannesburg", country: "South Africa", countryCode: "ZA", hourlyWageUSD: 4.00, minutesForLatte: 75, flag: "🇿🇦", medianMonthlyUSD: 690 },
  { city: "Cape Town", country: "South Africa", countryCode: "ZA", hourlyWageUSD: 3.80, minutesForLatte: 79, flag: "🇿🇦", medianMonthlyUSD: 660 },
  { city: "Mumbai", country: "India", countryCode: "IN", hourlyWageUSD: 2.50, minutesForLatte: 120, flag: "🇮🇳", medianMonthlyUSD: 430 },
  { city: "Delhi", country: "India", countryCode: "IN", hourlyWageUSD: 2.20, minutesForLatte: 136, flag: "🇮🇳", medianMonthlyUSD: 380 },
  { city: "Bangalore", country: "India", countryCode: "IN", hourlyWageUSD: 3.00, minutesForLatte: 100, flag: "🇮🇳", medianMonthlyUSD: 520 },
  { city: "Manila", country: "Philippines", countryCode: "PH", hourlyWageUSD: 2.30, minutesForLatte: 130, flag: "🇵🇭", medianMonthlyUSD: 400 },
  { city: "Jakarta", country: "Indonesia", countryCode: "ID", hourlyWageUSD: 2.00, minutesForLatte: 150, flag: "🇮🇩", medianMonthlyUSD: 350 },
  { city: "Ho Chi Minh City", country: "Vietnam", countryCode: "VN", hourlyWageUSD: 1.80, minutesForLatte: 167, flag: "🇻🇳", medianMonthlyUSD: 310 },
  { city: "Hanoi", country: "Vietnam", countryCode: "VN", hourlyWageUSD: 1.60, minutesForLatte: 188, flag: "🇻🇳", medianMonthlyUSD: 280 },
  { city: "Cairo", country: "Egypt", countryCode: "EG", hourlyWageUSD: 1.50, minutesForLatte: 200, flag: "🇪🇬", medianMonthlyUSD: 260 },
  { city: "Casablanca", country: "Morocco", countryCode: "MA", hourlyWageUSD: 2.80, minutesForLatte: 107, flag: "🇲🇦", medianMonthlyUSD: 490 },
  { city: "Nairobi", country: "Kenya", countryCode: "KE", hourlyWageUSD: 1.40, minutesForLatte: 214, flag: "🇰🇪", medianMonthlyUSD: 240 },
  { city: "Accra", country: "Ghana", countryCode: "GH", hourlyWageUSD: 1.20, minutesForLatte: 250, flag: "🇬🇭", medianMonthlyUSD: 210 },
  { city: "Lagos", country: "Nigeria", countryCode: "NG", hourlyWageUSD: 1.10, minutesForLatte: 273, flag: "🇳🇬", medianMonthlyUSD: 190 },
  { city: "Addis Ababa", country: "Ethiopia", countryCode: "ET", hourlyWageUSD: 0.80, minutesForLatte: 375, flag: "🇪🇹", medianMonthlyUSD: 140 },
  { city: "Dhaka", country: "Bangladesh", countryCode: "BD", hourlyWageUSD: 0.90, minutesForLatte: 333, flag: "🇧🇩", medianMonthlyUSD: 160 },
  { city: "Karachi", country: "Pakistan", countryCode: "PK", hourlyWageUSD: 1.00, minutesForLatte: 300, flag: "🇵🇰", medianMonthlyUSD: 170 },
  { city: "Lahore", country: "Pakistan", countryCode: "PK", hourlyWageUSD: 0.90, minutesForLatte: 333, flag: "🇵🇰", medianMonthlyUSD: 155 },
  { city: "Phnom Penh", country: "Cambodia", countryCode: "KH", hourlyWageUSD: 1.30, minutesForLatte: 231, flag: "🇰🇭", medianMonthlyUSD: 225 },
  { city: "Yangon", country: "Myanmar", countryCode: "MM", hourlyWageUSD: 0.70, minutesForLatte: 429, flag: "🇲🇲", medianMonthlyUSD: 120 },
  { city: "Colombo", country: "Sri Lanka", countryCode: "LK", hourlyWageUSD: 1.50, minutesForLatte: 200, flag: "🇱🇰", medianMonthlyUSD: 260 },
  { city: "Kathmandu", country: "Nepal", countryCode: "NP", hourlyWageUSD: 0.85, minutesForLatte: 353, flag: "🇳🇵", medianMonthlyUSD: 148 },
  { city: "Kampala", country: "Uganda", countryCode: "UG", hourlyWageUSD: 0.75, minutesForLatte: 400, flag: "🇺🇬", medianMonthlyUSD: 130 },
  { city: "Dar es Salaam", country: "Tanzania", countryCode: "TZ", hourlyWageUSD: 0.65, minutesForLatte: 462, flag: "🇹🇿", medianMonthlyUSD: 113 },
  { city: "Lusaka", country: "Zambia", countryCode: "ZM", hourlyWageUSD: 0.95, minutesForLatte: 316, flag: "🇿🇲", medianMonthlyUSD: 165 },
  { city: "Taipei", country: "Taiwan", countryCode: "TW", hourlyWageUSD: 10.50, minutesForLatte: 29, flag: "🇹🇼", medianMonthlyUSD: 1820 },
  { city: "Athens", country: "Greece", countryCode: "GR", hourlyWageUSD: 9.00, minutesForLatte: 33, flag: "🇬🇷", medianMonthlyUSD: 1560 },
  { city: "Bucharest", country: "Romania", countryCode: "RO", hourlyWageUSD: 7.50, minutesForLatte: 40, flag: "🇷🇴", medianMonthlyUSD: 1300 },
  { city: "Riyadh", country: "Saudi Arabia", countryCode: "SA", hourlyWageUSD: 12.00, minutesForLatte: 25, flag: "🇸🇦", medianMonthlyUSD: 2080 },
  { city: "Doha", country: "Qatar", countryCode: "QA", hourlyWageUSD: 15.00, minutesForLatte: 20, flag: "🇶🇦", medianMonthlyUSD: 2600 },
  { city: "Tashkent", country: "Uzbekistan", countryCode: "UZ", hourlyWageUSD: 1.20, minutesForLatte: 250, flag: "🇺🇿", medianMonthlyUSD: 210 },
  { city: "Kinshasa", country: "DR Congo", countryCode: "CD", hourlyWageUSD: 0.45, minutesForLatte: 667, flag: "🇨🇩", medianMonthlyUSD: 78 },
];

// Country-level data for the map (ISO 3166-1 numeric codes mapped to minutes)
export const countryMinutesMap: Record<string, number> = {};
cities.forEach(c => {
  // Use the first city found per country code (or average if preferred)
  if (!countryMinutesMap[c.countryCode]) {
    countryMinutesMap[c.countryCode] = c.minutesForLatte;
  }
});

// Additional countries for map coverage (estimates)
const additionalCountries: Record<string, number> = {
  FI: 12, SE: 11, IE: 13, BE: 15, FR: 16, IT: 20, AT: 14,
  NZ: 13, IS: 10, LU: 9, HU: 30, BG: 38, HR: 32, SK: 28,
  LT: 25, LV: 27, EE: 22, SI: 20, MT: 22,
  UY: 45, EC: 70, VE: 120, CR: 55, PA: 50,
  KZ: 60, GE: 80, AM: 90, AZ: 65, UA: 80, BY: 70,
  JO: 55, LB: 70, IQ: 80, IR: 90, AF: 400,
  TN: 100, DZ: 85, LY: 60, SD: 350, SN: 250, CI: 230,
  CM: 280, MZ: 380, ZW: 350, MW: 450, MG: 400,
  MM: 429, LA: 250, MN: 80, KG: 150, TJ: 200, TM: 100,
  PG: 300, FJ: 120, LK: 200,
};

Object.entries(additionalCountries).forEach(([code, mins]) => {
  if (!countryMinutesMap[code]) {
    countryMinutesMap[code] = mins;
  }
});

export function getMinutesColor(minutes: number): string {
  if (minutes <= 15) return 'hsl(210, 70%, 55%)';     // Blue - wealthy
  if (minutes <= 30) return 'hsl(200, 50%, 50%)';     // Light blue
  if (minutes <= 60) return 'hsl(45, 80%, 55%)';      // Gold/amber
  if (minutes <= 120) return 'hsl(30, 85%, 50%)';     // Orange
  if (minutes <= 240) return 'hsl(15, 75%, 45%)';     // Deep orange
  return 'hsl(0, 65%, 38%)';                          // Red - poorest
}

export function formatMinutes(minutes: number): string {
  if (minutes < 60) return `${minutes} min`;
  const hours = Math.floor(minutes / 60);
  const mins = minutes % 60;
  if (mins === 0) return `${hours}h`;
  return `${hours}h ${mins}m`;
}
