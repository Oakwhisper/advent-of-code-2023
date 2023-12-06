import { findHighestPulls, importFromFile } from "./page";

describe('Day Two', () => {
    describe('part one', () => {

        it('should read in from a file', async () => {
            const expected = [{
                gameId: 1,
                results: [
                    { pullId: 1, pull: { blue: 3, red: 4, green: 0 } },
                    { pullId: 2, pull: { blue: 6, red: 1, green: 2 } },
                    { pullId: 3, pull: { blue: 0, red: 0, green: 2 } }
                ]
            },
            {
                gameId: 2,
                results: [
                    { pullId: 1, pull: { blue: 1, red: 0, green: 2 } },
                    { pullId: 2, pull: { blue: 4, red: 1, green: 3 } },
                    { pullId: 3, pull: { blue: 1, red: 0, green: 1 } }
                ]
            }]

            const actual = await importFromFile("testFile.txt")

            expect(actual).toEqual(expected)

        });

        it('should record highest score per game', () => {
            const testCase = [{
                gameId: 1,
                results: [
                    { pullId: 1, pull: { blue: 3, red: 4, green: 0 } },
                    { pullId: 2, pull: { blue: 6, red: 1, green: 2 } },
                    { pullId: 3, pull: { blue: 0, red: 0, green: 2 } }
                ]
            }]

            const expected = [{
                gameId: 1,
                highestPulls: { maxBlue: 6, maxRed: 4, maxGreen: 2 }
            }]

            const actual = findHighestPulls(testCase)

            expect(actual).toEqual(expected)

        })
    })
})
