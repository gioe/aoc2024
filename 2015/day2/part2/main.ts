import { returnFileContents } from '../shared';

function calculateRibbon (length: number, width: number, height: number): number {
    const array = [length, width, height].sort((a, b) => a > b ? 1 : -1)
    const values = array.splice(0, 2)
    return values.map((value) => value * 2).reduce((a, b) => a + b) + (length * width * height)
}

function solve() {
    const contents = returnFileContents()
    return contents.split('\n').reduce((accumulator, value) => {
        const splitValue = value.split("x")
        return accumulator += calculateRibbon(Number(splitValue[0]), Number(splitValue[1]), Number(splitValue[2]))
    }, 0)
}

const startTime = performance.now(); 
const solution = solve();
const endTime = performance.now();

const executionTime = endTime - startTime;
console.log(`The answer is: ${solution}, solved in ${executionTime} milliseconds`);