import * as fs from 'fs'
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url); 
const __dirname = path.dirname(__filename);

const input = fs
  .readFileSync(__dirname + '/data.txt', 'utf8')

export function returnLists(): [number[], number[]] {
    const tuples = input.split("\n")
    const listA: number[] = []
    const listB: number[] = []
    
    tuples.forEach((tuplesString: string) => {
        const tuples = tuplesString.split("   ")
        listA.push(Number(tuples[0]))
        listB.push(Number(tuples[1]))
    })
    
    return [listA, listB]
}
