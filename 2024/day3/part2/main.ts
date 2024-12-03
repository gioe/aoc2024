import { returnInput } from '../shared';

// Should probably impprove this so that the algorithm never results in false positives but leaving it for now.

const multiplierStart = 'mul('
const multiplierEnd = ')'
const dontString = `don't()`
const doString = `do()`

function convertToArithmetic(value: string[]): number {
    const joinedValues = value.join("")
    const numbers = joinedValues.split(',').map(Number)
    const response = numbers[0] * numbers[1]
    return isNaN(response) ? 0 : response
}

function extractEquations(content: string[]) {
    const values: string[][]  = []
    for (let x = 0; x < content.length; x++) {
        let lookForward = x + 4
        const window = content.slice(x, lookForward).join("")
        let inMulWindow = window == multiplierStart
        const equation: string[] = []

        while (inMulWindow) {
            const nextChar = content[lookForward]
            inMulWindow = !(content[lookForward] == multiplierEnd)
            if (inMulWindow) {
                equation.push(nextChar);
            }
            lookForward++
        }
        values.push(equation)
    }
    return values
}

function solve() {
    const content = returnInput().split("")
    const computeContent: string[] = []
    let inWriteLoop = true
    let inSkipLoop = false
    for (let x = 0; x < content.length; x++) {
        if (inWriteLoop) {
            computeContent.push(content[x])
            inSkipLoop = content.slice(x, x + dontString.length).join("") == dontString
            inWriteLoop = !inSkipLoop
        } else {
            inWriteLoop = content.slice(x, x + doString.length).join("") == doString
        }
    }

    const values = extractEquations(computeContent)

    return values.filter((value) => value.length > 0).map((value) => convertToArithmetic(value)).reduce((a, b) => a+ b)
}

const startTime = performance.now(); 
const solution = solve();
const endTime = performance.now();

const executionTime = endTime - startTime;
console.log(`The answer is: ${solution}, solved in ${executionTime} milliseconds`);