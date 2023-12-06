import React from 'react'
import fs from 'node:fs'
import path from 'path'
import readline from 'readline'

export default function DayTwo() {
    return (
        <div>DayTwo</div>
    )
}

type GameInfo = {
    gameId: number,
    results?: Results[]
}

type Results = {
    pullId: number,
    pull: {
        blue?: number,
        red?: number,
        green?: number,
    }
}

export async function importFromFile(fileName: string) {
    let gameData: GameInfo[] = []
    const formattedPath = path.join(__dirname, fileName)
    const fileStream = fs.createReadStream(formattedPath)
    const readLine = readline.createInterface({
        input: fileStream,
        crlfDelay: Infinity
    })

    for await (const line of readLine) {
        const splitIntoIntroAndPulls = line.split(':')
        const splitByPulls = splitIntoIntroAndPulls[1].split(';')
        const gameId = extractGameIdFrom(splitIntoIntroAndPulls)
        let results: Results[] = []

        getResultsOfPulls(splitByPulls, results)


        gameData.push({
            gameId: parseInt(gameId[0]),
            results: results
        })

    }

    return gameData
}

function extractGameIdFrom(splitIntoIntroAndPulls: string[]) {
    return splitIntoIntroAndPulls[0].match(/(?<=Game )(\s*(\d+))/g) ?? '0'
}

function getResultsOfPulls(splitByPulls: string[], results: Results[]) {
    for (let j = 0; j < splitByPulls.length; j++) {
        const pull = splitByPulls[j]
        const blue = pull.match(/(\d{1,})(?= blue)/) ?? ['0']
        const red = pull.match(/(\d{1,})(?= red)/) ?? ['0']
        const green = pull.match(/(\d{1,})(?= green)/) ?? ['0']

        results.push({
            pullId: j + 1,
            pull: {
                blue: parseInt(blue[0]),
                red: parseInt(red[0]),
                green: parseInt(green[0]),
            }
        })
    }
}
