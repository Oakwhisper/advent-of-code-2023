import imageSmoother from "./imageSmoother";

describe('ImageSmoother', ()=>{
    it('should get average of center point', ()=>{
        const testMatrix = [[0,0,0],[0,27,0],[0,0,0]]

        const expected = [[0,0,0],[0,3,0],[0,0,0]]

        const actual = imageSmoother(testMatrix)

        expect(actual).toEqual(expected)
    })
})