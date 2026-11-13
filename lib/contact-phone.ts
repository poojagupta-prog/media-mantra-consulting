export const countryCodes = [
  ["India", "+91"],
  ["UAE", "+971"],
  ["United States / Canada", "+1"],
  ["United Kingdom", "+44"],
  ["Australia", "+61"],
  ["Bahrain", "+973"],
  ["Bangladesh", "+880"],
  ["Brazil", "+55"],
  ["China", "+86"],
  ["Egypt", "+20"],
  ["France", "+33"],
  ["Germany", "+49"],
  ["Hong Kong", "+852"],
  ["Indonesia", "+62"],
  ["Ireland", "+353"],
  ["Italy", "+39"],
  ["Japan", "+81"],
  ["Kuwait", "+965"],
  ["Malaysia", "+60"],
  ["Nepal", "+977"],
  ["Netherlands", "+31"],
  ["New Zealand", "+64"],
  ["Nigeria", "+234"],
  ["Oman", "+968"],
  ["Pakistan", "+92"],
  ["Philippines", "+63"],
  ["Qatar", "+974"],
  ["Saudi Arabia", "+966"],
  ["Singapore", "+65"],
  ["South Africa", "+27"],
  ["South Korea", "+82"],
  ["Spain", "+34"],
  ["Sri Lanka", "+94"],
  ["Switzerland", "+41"],
  ["Thailand", "+66"],
  ["Turkey", "+90"],
  ["Vietnam", "+84"],
] as const;

// Keep phone numbers as strings to preserve leading zeroes.
export function isValidContactPhone(countryCode: string, phone: string) {
  return (
    countryCodes.some(([, code]) => code === countryCode) &&
    /^[0-9]{6,14}$/.test(phone) &&
    countryCode.length - 1 + phone.length <= 15
  );
}
