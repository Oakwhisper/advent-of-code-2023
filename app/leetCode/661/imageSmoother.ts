export default function imageSmoother(img: number[][]): number[][] {
    let newimg = []

    for (let i = 0; i<img.length; i++){
        let newRow = []
        for (let j = 0; j<img[0].length; j++) {
            newRow.push(getAverage({row: i, column: j}, img))
        }
        newimg.push(newRow)
    }

    return newimg
}

export function getAverage(point: Point, image: number[][]) {
    let sum = 0
    let pointsConsidered = 0

    for (let i = -1; i <= 1; i++) {
        if (point.row+i>=0 && point.row+i<image.length) {
            for (let j = -1; j <= 1; j++) {
                if (point.column+j>=0&& point.column+j<image[0].length) {
                    sum += image[point.row + i][point.column + j]
                    pointsConsidered++
                }
            }
        }
    }

    return Math.floor(sum/pointsConsidered)
}

type Point = {
    row: number,
    column: number
}