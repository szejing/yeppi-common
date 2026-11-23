import { getCountries, getCountryCallingCode, parsePhoneNumberFromString, } from 'libphonenumber-js';
const PREFERRED_COUNTRY_FOR_CALLING_CODE = {
    '1': 'US',
    '7': 'RU',
    '44': 'GB',
    '61': 'AU',
};
const digitsOnly = (value) => String(value ?? '').replace(/\D/g, '');
const countryForCallingCode = (callingCode) => {
    const preferred = PREFERRED_COUNTRY_FOR_CALLING_CODE[callingCode];
    if (preferred)
        return preferred;
    return getCountries().find((country) => getCountryCallingCode(country) === callingCode);
};
/**
 * One pass of the industry numbering plan.
 * A possible number supplies the dial code and national number to store.
 * An impossible number keeps the selected dial code and the typed digits.
 */
export const parsePhoneIdentity = (dialCode, nationalNumber) => {
    const selectedDial = digitsOnly(dialCode);
    const typedDigits = digitsOnly(nationalNumber);
    const raw = String(nationalNumber ?? '').trim();
    const country = countryForCallingCode(selectedDial);
    const parsed = raw
        ? country
            ? parsePhoneNumberFromString(raw, country)
            : parsePhoneNumberFromString(raw)
        : undefined;
    if (parsed?.isPossible() && parsed.countryCallingCode && parsed.nationalNumber) {
        return {
            dialCode: parsed.countryCallingCode,
            nationalNumber: parsed.nationalNumber,
        };
    }
    return {
        dialCode: selectedDial,
        nationalNumber: typedDigits,
    };
};
