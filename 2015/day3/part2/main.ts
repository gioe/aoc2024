import { returnFileContents } from '../shared';

function solve() {
    const contents = returnFileContents()
    let currentFloor = 0
    return contents
    .split("").map((value) => value === "(" ? ++currentFloor : --currentFloor).indexOf(-1) + 1
}
const startTime = performance.now(); 
const solution = solve();
const endTime = performance.now();

const executionTime = endTime - startTime;
console.log(`The answer is: ${solution}, solved in ${executionTime} milliseconds`);