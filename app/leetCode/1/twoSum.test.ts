import { twoSum } from "./twoSum";

describe('Two Sum', () => { 
    it('should return two indices for a size 2 array', () => {
        const input = [1,2]
        const target = 3

        const actual = twoSum(input, target)
        const expected = [0,1]

        expect(actual).toEqual(expected)
    });
    it('should return two indices for size 3 array', () => {
        const input = [1,2,3]
        const target = 5

        const actual = twoSum(input, target)
        const expected = [1,2]

        expect(actual).toEqual(expected)
    });

    it('should not return the same two indices for size 3 array', () => {
        const input = [1,2,3]
        const target = 4

        const actual = twoSum(input, target)
        const expected = [0,2]
        const incorrect = [1,1]

        expect(actual).toEqual(expected)
        expect(actual).not.toEqual(incorrect)
    });
 })