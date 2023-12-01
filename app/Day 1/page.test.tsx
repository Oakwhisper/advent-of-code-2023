import { returnNumbers, combineFirstAndLast } from "./page";

describe("Day One", () => {
    it('should return all numbers in a string', () => {
        const testWord = "1abc2"
        const expected = ["1","2"]

        const actual = returnNumbers(testWord)

        expect(actual).toEqual(expected)

    });
    
    it('should combine the first and last elements in an array into one number', () => {
        const testArray = ["1","3"]
        const expected = 13

        const actual = combineFirstAndLast(testArray)

        expect(actual).toEqual(expected)
    });
})