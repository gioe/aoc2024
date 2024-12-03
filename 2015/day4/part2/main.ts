import { returnFileContents } from '../shared';
import crypto from "crypto"

function startsWithFiveZeros(hash: string) {
    return hash.startsWith("00000")
}

function solve() {
    const key = returnFileContents()
    console.log(key)
    return 1
}


const startTime = performance.now(); 
const solution = solve();
const endTime = performance.now();

const executionTime = endTime - startTime;
console.log(`The answer is: ${solution}, solved in ${executionTime} milliseconds`);