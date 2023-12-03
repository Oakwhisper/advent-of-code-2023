import { returnNumbers, combineFirstAndLast, findCalibrationValues,convertWordsToNumbers  } from "./page";

describe("Day One", () => {
    describe("part one", () => {
        it('should return all numbers in a string', () => {
            const testWord = "1abc2"
            const expected = ["1", "2"]

            const actual = returnNumbers(testWord)

            expect(actual).toEqual(expected)

        });

        it('should combine the first and last elements in an array into one number', () => {
            const testArray = ["1", "3"]
            const expected = 13

            const actual = combineFirstAndLast(testArray)

            expect(actual).toEqual(expected)
        });
        it('should take in a list of test words and output the sum', () => {
            const testWordArray = ["1abc2", "a2c"]
            const expected = 34

            const actual = findCalibrationValues(testWordArray)

            expect(actual).toEqual(expected)
        })
    })

    describe('part two', () => {
        it('should convert spelt numbers to digits', () => {
            const testWords = [
                "one",
                "two",
                "three",
                "four",
                "five",
                "six",
                "seven",
                "eight",
                "nine"
            ]
            const expected = ["1",
                "2",
                "3",
                "4",
                "5",
                "6",
                "7",
                "8",
                "9"]

            const actual = convertWordsToNumbers(testWords)
            console.log(actual)
            expect(actual).toEqual(expected)

        })
    })
})