import { returnLists } from '../shared';
function solve() {
    const [listA, listB] = returnLists();
    const similarityScores = [];
    for (let x = 0; x < listA.length; x++) {
        const currentNumber = listA[x];
        const count = listB.filter((value) => value == currentNumber);
        const score = currentNumber * count.length;
        similarityScores.push(score);
    }
    return similarityScores.reduce((a, b) => a + b);
}
const startTime = performance.now();
const solution = solve();
const endTime = performance.now();
const executionTime = endTime - startTime;
console.log(`The answer is: ${solution}, solved in ${executionTime} milliseconds`);
//# sourceMappingURL=main.js.map