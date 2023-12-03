import { returnNumbers, combineFirstAndLast, findCalibrationValues, extractNumbersFromStringArray, reverseString, getFirstNumber, getSecondNumber } from "./page";

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
            const expected = ["11",
                "22",
                "33",
                "44",
                "55",
                "66",
                "77",
                "88",
                "99"]

            const actual = extractNumbersFromStringArray(testWords)
            expect(actual).toEqual(expected)

        })
        it('should handle two words in same string', () => {
            const testWords = [
                "nkzjrdqrmpztpqninetwofour1znnkd"
            ]
            // const testWords = ["one2two"]
            const expected = ["91"]

            const actual = extractNumbersFromStringArray(testWords)
            // console.log(actual)
            expect(actual).toEqual(expected)

        })

        it('should give the proper sum', () => {
            const testWords = [
                "two1nine",
                "eightwothree",
                "abcone2threexyz",
                "xtwone3four",
                "4nineeightseven2",
                "zoneight234",
                "7pqrstsixteen",
                "oneight"
            ]
            const expected = 281 + 18
            const converted = extractNumbersFromStringArray(testWords)
            const actual = findCalibrationValues(extractNumbersFromStringArray(testWords))
            expect(actual).toEqual(expected)

        })

        it('should return the first number in string', () => {
            const testWord = "oneight"
            const expected = "1"
            const actual = getFirstNumber(testWord)
            expect(actual).toEqual(expected)
        })
        it('should return the second number in string', () => {
            const testWord = "oneight"
            const expected = "8"
            const actual = getSecondNumber(testWord)
            expect(actual).toEqual(expected)
        })
        it('should reverse a string', () => {
            const testWord = "oneight"
            const expected = "thgieno"
            const actual = reverseString(testWord)
            expect(actual).toEqual(expected)
        })
        it('should combine first and second number', () => {
            
        });
    })
})