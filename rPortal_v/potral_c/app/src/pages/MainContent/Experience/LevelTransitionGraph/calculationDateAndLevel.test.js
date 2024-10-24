import { describe, it, expect } from 'vitest';
import { lastList } from './calculationDateAndLevel';

describe('lastList関数テスト', () => {
    it('returns the last element of the list', () => {
        expect(lastList([1, 2, 3])).toBe(3);
        expect(lastList(['a', 'b', 'c'])).toBe('c');
        expect(lastList([])).toBe(undefined);
    });

});


