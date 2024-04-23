import { halvesAreAlike, vowelCount } from "./stringHalfComparison";

describe('halvesAreAlike', () => {
    describe('contiansVowels', () => {
        it('should return true if string contains lowercase vowels', () => {
            const testString = 'aeiou'
            const actual = vowelCount(testString)

            expect(actual).toEqual(5)
        });
        it('should return true if string contains uppercase vowels', () => {
            const testString = 'AEIOU'
            const actual = vowelCount(testString)

            expect(actual).toEqual(5)
        });
    })
    describe('halvesAreAlike', () => {
        it('should analyze that an even string contains equal number of vowels', () => {
            const testString = "aayythii"
            const actual = halvesAreAlike(testString)

            expect(actual).toEqual(true)
        });

        it('should return false if string has uneven number of vowels', () => {
            const testString = "aayyth"
            const actual = halvesAreAlike(testString)

            expect(actual).toEqual(false)
        });
    })
})