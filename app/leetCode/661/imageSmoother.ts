export default function imageSmoother(img: number[][]): number[][] {
    const point: Point = {row: 1, column: 1}
    let newimg = [[0, 0, 0], [0, getAverage({row: 1, column: 1}, img), 0], [0, 0, 0]]

    return newimg
}

function getAverage(point: Point, image: number[][]) {
    let sum = 0

    for (let i = -1; i <= 1; i++) {
        for (let j = -1; j <= 1; j++) {
            sum += image[point.row+i][point.column-j]
        }
    }

    return sum/9
}

type Point = {
    row: number,
    column: number
}