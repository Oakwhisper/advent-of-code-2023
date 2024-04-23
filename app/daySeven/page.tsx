import React from 'react'

export default function DaySeven() {
    return (
        <div>DaySeven</div>
    )
}

export enum HandType {
    'FiveOfAKind',
    'FourOfAKind',
    'FullHouse',
    'ThreeOfAKind',
    'TwoPair',
    'OnePair',
    'HighCard'
}

export function determineHandType(hand: string[]) {
    switch:
}