import { returnFileContents } from '../shared';

function repeatsWithoutOverlap(characterArray: string[]) {
    let repeatsWithoutOverlap = false
    for (let x = 0; x < characterArray.length; x++) {
        const substring = characterArray[x] + characterArray[x + 1]
        for (let y = x + 2; y < characterArray.length; y++) {
            const nextTwo = characterArray[y] + characterArray[y + 1]
            if (substring == nextTwo) {
                repeatsWithoutOverlap = true
                break;
            }
        }
        if (repeatsWithoutOverlap) {
            break;
        }
    }
    return repeatsWithoutOverlap
}

function repeatsWithIntermediary(characterArray: string[]) {
    let repeatsWithIntermediary = false
    for (let x = 0; x < characterArray.length; x++) {
        const currentCharacter = characterArray[x]
        const comparisonCharacter = characterArray[x + 2]

        if (currentCharacter == comparisonCharacter) {
            repeatsWithIntermediary = true
            break;
        }
    }
    return repeatsWithIntermediary
}

function solve() {
    const contents = returnFileContents().split("\n")
    return contents.filter((value: string) => {
        const characterArray = value.split("")
        return repeatsWithIntermediary(characterArray) && repeatsWithoutOverlap(characterArray)
    }).length
}

const startTime = performance.now(); 
const solution = solve();
const endTime = performance.now();

const executionTime = endTime - startTime;
console.log(`The answer is: ${solution}, solved in ${executionTime} milliseconds`);