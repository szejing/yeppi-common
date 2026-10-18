import { isMasterLoginId, MASTER_LOGIN_ID } from './platform-login';
describe('platform-login', () => {
    it('exposes MASTER sentinel', () => {
        expect(MASTER_LOGIN_ID).toBe('MASTER');
    });
    it('detects MASTER case-insensitively', () => {
        expect(isMasterLoginId('MASTER')).toBe(true);
        expect(isMasterLoginId('master')).toBe(true);
        expect(isMasterLoginId(' Master ')).toBe(true);
        expect(isMasterLoginId('M00001')).toBe(false);
        expect(isMasterLoginId('')).toBe(false);
        expect(isMasterLoginId(undefined)).toBe(false);
    });
});
