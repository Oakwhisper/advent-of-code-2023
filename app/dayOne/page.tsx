import React from 'react'
import { dayOnePart1Input } from './dayOnePart1Input'



export default function DayOne() {
  return (
    <>
      <div>Your part 1 answer is: {findCalibrationValues(dayOnePart1Input)}</div>
      <div>Your part 2 answer is: {findCalibrationValues(extractNumbersFromStringArray(dayOnePart1Input))}</div>
    </>
  )
}

export function returnNumbers(data: string) {
  let results: string[] = []
  for (let i = 0; i < data.length; i++) {
    if (data[i] >= '0' && data[i] <= '9') { results.push(data[i]) }
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

export function extractNumbersFromStringArray(array: string[]) {
  return array.map((element) => {
    const firstNumber =  getFirstNumber(element)
    const secondNumber = getSecondNumber(element)
    return firstNumber + secondNumber
  })
}

function convertWordToNumberForward(element: string) {
  const splitElement = element.split(/(one)|(two)|(three)|(four)|(five)|(six)|(seven)|(eight)|(nine)/g)
  const filteredSplitElement = splitElement.filter(n => n)

  return filteredSplitElement.map((element) => {
    return element.replace(/one/g, '1')
      .replace(/two/g, '2')
      .replace(/three/g, '3')
      .replace(/four/g, '4')
      .replace(/five/g, '5')
      .replace(/six/g, '6')
      .replace(/seven/g, '7')
      .replace(/eight/g, '8')
      .replace(/nine/g, '9')
  }).join('')
}

function convertWordToNumberReverse(element: string) {
  const reversedElement = reverseString(element)
  const splitElement = reversedElement.split(/(eno)|(owt)|(eerht)|(ruof)|(evif)|(xis)|(neves)|(thgie)|(enin)/g)
  const filteredSplitElement = splitElement.filter(n => n)


  return filteredSplitElement.map((element) => {
    return element.replace(/eno/g, '1')
      .replace(/owt/g, '2')
      .replace(/eerht/g, '3')
      .replace(/ruof/g, '4')
      .replace(/evif/g, '5')
      .replace(/xis/g, '6')
      .replace(/neves/g, '7')
      .replace(/thgie/g, '8')
      .replace(/enin/g, '9')
  }).join('')
}

export function getFirstNumber(string: string) {
  return returnNumbers(convertWordToNumberForward(string))[0]
}
export function getSecondNumber(string: string) {
  return returnNumbers(convertWordToNumberReverse(string))[0]
}

export function reverseString(string: string) {
  return string.split('').reverse().join('')
}

