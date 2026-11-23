export type PhoneIdentity = {
    dialCode: string;
    nationalNumber: string;
};
/**
 * One pass of the industry numbering plan.
 * A possible number supplies the dial code and national number to store.
 * An impossible number keeps the selected dial code and the typed digits.
 */
export declare const parsePhoneIdentity: (dialCode?: string | null, nationalNumber?: string | null) => PhoneIdentity;
