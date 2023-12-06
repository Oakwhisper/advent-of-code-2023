import React from 'react'
import fs from 'node:fs'
import path from 'path'
import readline from 'readline'

export default function DayTwo() {
    return (
        <>
            <h1>Day Two</h1>
            <div>Your part 1 answer is: {getPart1Answer()}</div>
            <div>Your part 2 answer is: {getPart2Answer()}</div>
        </>
    )
}

type GameInfo = {
    gameId: number,
    results: Results[]
}

type Results = {
    pullId: number,
    pull: {
        blue: number,
        red: number,
        green: number,
    }
}

export async function importFromFile(fileName: string) {
    let gameData: GameInfo[] = []
    const formattedPath = path.resolve("app/dayTwo", fileName)
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

export function findHighestPulls(gameData: GameInfo[]) {
    let highestPulls = []
    for (let i = 0; i < gameData.length; i++) {
        let maxBlue = 0
        let maxRed = 0
        let maxGreen = 0
        for (let j = 0; j < gameData[i].results.length; j++) {
            const pull = gameData[i].results[j].pull
            maxBlue = pickLargest(maxBlue, pull.blue, i, j)
            maxRed = pickLargest(maxRed, pull.red, i, j)
            maxGreen = pickLargest(maxGreen, pull.green, i, j)

        }
        highestPulls.push({
            gameId: gameData[i].gameId,
            highestPulls: { maxBlue: maxBlue, maxRed: maxRed, maxGreen: maxGreen }
        })
    }

    return highestPulls

    function pickLargest(maxColor: number, color: number, i: number, j: number): number {
        return maxColor > color ? maxColor : color
    }
}

export function getPossibleGames(requirement: { red: number, blue: number, green: number }, gameInfo: GameInfo[]) {
    let possibleGames: number[] = []
    const highestPulls = findHighestPulls(gameInfo)
    for (const game of highestPulls) {
        if (
            game.highestPulls.maxBlue <= requirement.blue &&
            game.highestPulls.maxGreen <= requirement.green &&
            game.highestPulls.maxRed <= requirement.red
        ) {
            possibleGames.push(game.gameId)
        }
    }
    return possibleGames
}

export function sumArray(possibleIds: number[]) {
    return possibleIds.reduce((sum, num) => sum + num)
}

async function getPart1Answer() {
    'use server'
    const gameInfo = await importFromFile('dayTwoPart1Input.txt')
    const requirement = { red: 12, green: 13, blue: 14, }
    const possibleIds = getPossibleGames(requirement, gameInfo)
    const possibleIdSum = sumArray(possibleIds)
    console.log(possibleIdSum)
    return possibleIdSum

}

async function getPart2Answer() {
    'use server'
    const gameInfo = await importFromFile('dayTwoPart1Input.txt')
    const possibleIds = getPowersForMinPossibilites(gameInfo)
    const possibleIdSum = sumArray(possibleIds)
    console.log(possibleIdSum)
    return possibleIdSum

}

export function getPowersForMinPossibilites(gameInfo: GameInfo[]) {
    let powers: number[] = []
    const highestPulls = findHighestPulls(gameInfo)
    for (const game of highestPulls) {
        powers.push(game.highestPulls.maxBlue * game.highestPulls.maxGreen * game.highestPulls.maxRed)
    }
    return powers
}