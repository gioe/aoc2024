import * as fs from 'fs'
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url); 
const __dirname = path.dirname(__filename);

const input = fs
  .readFileSync(__dirname + '/data.txt', 'utf8')

function solve() {
    const tuples = input.split("\n")
    const listA: number[] = []
    const listB: number[] = []
    
    tuples.forEach((tuplesString: string) => {
        const tuples = tuplesString.split("   ")
        listA.push(Number(tuples[0]))
        listB.push(Number(tuples[1]))
    })

    const similarityScores: number[] = []

    for (let x = 0; x < tuples.length; x++) {
        const currentNumber = listA[x]
        const count = listB.filter((value: number) => value == currentNumber)
        const score = currentNumber * count.length
        similarityScores.push(score)
    }
    
    return similarityScores.reduce((a, b) => a + b)
}

const startTime = performance.now(); 
const solution = solve();
const endTime = performance.now();

const executionTime = endTime - startTime;
console.log(`The answer is: ${solution}, solved in ${executionTime} milliseconds`);