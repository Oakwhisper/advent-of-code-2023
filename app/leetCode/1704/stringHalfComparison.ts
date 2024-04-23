export function halvesAreAlike(s: string): boolean {
    const stringLength = s.length
    const firstHalf = s.slice(0,stringLength/2)
    const secondHalf = s.slice(-stringLength/2)

    console.log(firstHalf);
    console.log(secondHalf);
    
    

    return vowelCount(firstHalf) === vowelCount(secondHalf)
};

export function vowelCount(input: string): number {
    const regex = /([aeiouAEIOU])/g
    const vowelsFound = input.match(regex) ?? []


    return vowelsFound.length 
}