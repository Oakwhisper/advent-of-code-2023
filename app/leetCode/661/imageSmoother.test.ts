import imageSmoother, {getAverage} from "./imageSmoother";

describe('ImageSmoother', ()=>{
    describe('getAverage', ()=>{
        it('should get average of center point', ()=>{
            const testPoint = {row: 1, column: 1}
            const testMatrix = [[0,0,0],[0,27,0],[0,0,0]]

            const expected = 3

            const actual = getAverage(testPoint, testMatrix)

            expect(actual).toEqual(expected)
        })
        it('should round down', ()=>{
            const testPoint = {row: 1, column: 1}
            const testMatrix = [[0,0,0],[0,26,0],[0,0,0]]

            const expected = 2

            const actual = getAverage(testPoint, testMatrix)

            expect(actual).toEqual(expected)
        })
        it( 'should handle point on first row', ()=>{
            const testPoint = {row: 0, column: 1}
            const testMatrix = [[0,0,0],[0,26,0],[0,0,0]]

            const expected = 4

            const actual = getAverage(testPoint, testMatrix)

            expect(actual).toEqual(expected)
        })
        it( 'should handle point on last row', ()=>{
            const testPoint = {row: 2, column: 1}
            const testMatrix = [[0,0,0],[0,26,0],[0,0,0]]

            const expected = 4

            const actual = getAverage(testPoint, testMatrix)

            expect(actual).toEqual(expected)
        })
        it( 'should handle point on first column', ()=>{
            const testPoint = {row: 1, column: 0}
            const testMatrix = [[0,0,0],[0,26,0],[0,0,0]]

            const expected = 4

            const actual = getAverage(testPoint, testMatrix)

            expect(actual).toEqual(expected)
        })
        it( 'should handle point on last column', ()=>{
            const testPoint = {row: 1, column: 2}
            const testMatrix = [[0,0,0],[0,26,0],[0,0,0]]

            const expected = 4

            const actual = getAverage(testPoint, testMatrix)

            expect(actual).toEqual(expected)
        })
    })
    describe('imageSmoother', ()=>{
        it('should handle more complex grids', ()=>{
            const testMatrix = [[100,200,100],[200,50,200],[100,200,100]]

            const expected = [[137,141,137],[141,138,141],[137,141,137]]

            const actual = imageSmoother(testMatrix)

            expect(actual).toEqual(expected)
        })
    })

})