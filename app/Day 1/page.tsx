import React from 'react'

export default function DayOne() {
  return (
    <div></div>
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
  return parseInt(array[0]+array[array.length-1])
}