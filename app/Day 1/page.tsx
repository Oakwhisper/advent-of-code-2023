import React from 'react'
import { dayOnePart1Input } from './dayOnePart1Input'



export default function DayOne() {
  return (
    <div>Your part 1 answer is: {findCalibrationValues(dayOnePart1Input)}</div>
  )
}

export function returnNumbers(data: string) {
  let results = []
  for (let i = 0; i < data.length; i++) {
    if (data[i] >= '0' && data[i] <= '9') { results.push((data[i])) }
  }
  return results
}


export function combineFirstAndLast(array: string[]) {
  return parseInt(array[0] + array[array.length - 1])
}

export function findCalibrationValues(array: string[]) {
  let calibrationNumbers: number[] = []
  let calibrationSum: number = 0
  array.forEach((element) => { calibrationNumbers.push(combineFirstAndLast(returnNumbers(element))) })
  calibrationNumbers.forEach((element) => {
    calibrationSum += element
  })
  return calibrationSum
}

