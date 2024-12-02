import { returnFileContents } from '../shared';

function solve() {
    const contents = returnFileContents()
    return contents
    .split("").reduce((floor,direction) => direction === "(" ? ++floor : --floor, 0)
}

const startTime = performance.now(); 
const solution = solve();
const endTime = performance.now();

const executionTime = endTime - startTime;
console.log(`The answer is: ${solution}, solved in ${executionTime} milliseconds`);