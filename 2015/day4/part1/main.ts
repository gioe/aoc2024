import { returnFileContents } from '../shared';
import crypto from "crypto"

function startsWithFiveZeros(hash: string) {
    return hash.startsWith("00000")
}
export const md5 = (contents: string) => crypto.createHash('md5').update(contents).digest("hex");

function solve() {
    var key = returnFileContents()
    let int = 0
    while (!startsWithFiveZeros(md5(key + String(int)))) {
        int++
    }
    return int
}


const startTime = performance.now(); 
const solution = solve();
const endTime = performance.now();

const executionTime = endTime - startTime;
console.log(`The answer is: ${solution}, solved in ${executionTime} milliseconds`);