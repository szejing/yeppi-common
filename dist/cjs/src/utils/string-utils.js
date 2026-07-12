"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.normalized = exports.toNullableString = exports.removeMerchantId = exports.extractBeforeSeparator = exports.extractAfterSeparator = exports.isEmptyOrNull = exports.truncateFront = exports.truncate = void 0;
/**
 * Truncates a string to a maximum length
 * @param str The string to truncate
 * @param maxLength The maximum length of the string
 * @returns The truncated string
 */
const truncate = (str, maxLength) => {
    if (str.length <= maxLength) {
        return str;
    }
    return str.slice(0, maxLength);
};
exports.truncate = truncate;
/**
 * Truncates a string to a maximum length from the front
 * @param str The string to truncate
 * @param maxLength The maximum length of the string
 * @returns The truncated string
 */
const truncateFront = (str, maxLength) => {
    if (str.length <= maxLength) {
        return str;
    }
    return str.slice(-maxLength);
};
exports.truncateFront = truncateFront;
/**
 * Checks if a string is empty or null
 * @param str The string to check
 * @returns True if the string is empty or null, false otherwise
 */
const isEmptyOrNull = (str) => {
    return str === null || str === undefined || str === '';
};
exports.isEmptyOrNull = isEmptyOrNull;
/**
 * Extracts the value after a separator in a string
 * @param str The string to extract from (e.g., "M00001/00001")
 * @param separator The separator character (e.g., "/")
 * @returns The value after the separator, or the original string if separator not found
 */
const extractAfterSeparator = (str, separator) => {
    const parts = str.split(separator);
    return parts.length > 1 ? parts[parts.length - 1] : str;
};
exports.extractAfterSeparator = extractAfterSeparator;
/**
 * Extracts the value before a separator in a string
 * @param str The string to extract from (e.g., "M00001/00001")
 * @param separator The separator character (e.g., "/")
 * @returns The value before the separator, or the original string if separator not found
 */
const extractBeforeSeparator = (str, separator) => {
    const parts = str.split(separator);
    return parts.length > 0 ? parts[0] : str;
};
exports.extractBeforeSeparator = extractBeforeSeparator;
/**
 * Removes the merchant ID from a string
 * @param str The string to remove the merchant ID from
 * @returns The string without the merchant ID
 */
const removeMerchantId = (str) => {
    return str.replace(/^M\d{5}\//, '');
};
exports.removeMerchantId = removeMerchantId;
const toNullableString = (value) => {
    return value === undefined || value === null ? null : value.toString();
};
exports.toNullableString = toNullableString;
const normalized = (value) => String(value ?? '').trim();
exports.normalized = normalized;
