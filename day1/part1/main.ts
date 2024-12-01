import { returnLists } from '../shared';

function solve() {
    const [listA, listB] = returnLists()
    
    const deltas: number[] = []

    for (let x = 0; x < listA.length; x++) {
        const delta = listB[x] - listA[x]
        deltas.push(delta < 0 ? delta * -1 : delta)
    }
    return deltas.reduce((a, b) => a + b)
}

const startTime = performance.now(); 
const solution = solve();
const endTime = performance.now();

const executionTime = endTime - startTime;
console.log(`The answer is: ${solution}, solved in ${executionTime} milliseconds`);