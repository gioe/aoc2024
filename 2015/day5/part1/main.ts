import { returnFileContents } from '../shared';

const vowels = ['a', 'e', 'i', 'o', 'u']
const badStrings = ['ab', 'cd', 'pq', 'xy']

function containsThreeVowels(characterArray: string[]) {
    return characterArray.filter((value) => vowels.includes(value)).length > 2
}

function containsRepeatedCharacter(characterArray: string[]) {
    let hasRepeats = false
    for (let x = 0; x < characterArray.length; x++) {
        const currentCharacter = characterArray[x]
        const nextCharacter = characterArray[x + 1]

        if (currentCharacter == nextCharacter) {
            hasRepeats = true
            break;
        }
    }
    return hasRepeats
}

function containsBadStrings(characterArray: string[]) {
    let hasBadStrings = false
    for (let x = 0; x < characterArray.length; x++) {
        const subString = characterArray[x] + characterArray[x + 1]
        if (badStrings.includes(subString)) {
            hasBadStrings = true
            break;
        }
    }
    return hasBadStrings
}

function solve() {
    const contents = returnFileContents().split("\n")
    console.log(contents)
    return contents.filter((value: string) => {
        const characterArray = value.split("")
        return containsThreeVowels(characterArray) && containsRepeatedCharacter(characterArray) && !containsBadStrings(characterArray)
    }).length
}

const startTime = performance.now(); 
const solution = solve();
const endTime = performance.now();

const executionTime = endTime - startTime;
console.log(`The answer is: ${solution}, solved in ${executionTime} milliseconds`);