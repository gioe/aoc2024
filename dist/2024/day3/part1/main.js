import { returnInput } from '../shared';
const multiplierStart = 'mul(';
const multiplierEnd = ')';
// Should probably impprove this so that the algorithm never results in false positives but leaving it for now.
function convertToArithmetic(value) {
    const joinedValues = value.join("");
    const numbers = joinedValues.split(',').map(Number);
    const response = numbers[0] * numbers[1];
    return isNaN(response) ? 0 : response;
}
function extractEquations(content) {
    const values = [];
    for (let x = 0; x < content.length; x++) {
        let lookForward = x + 4;
        const window = content.slice(x, lookForward).join("");
        let inMulWindow = window == multiplierStart;
        const equation = [];
        while (inMulWindow) {
            const nextChar = content[lookForward];
            inMulWindow = !(content[lookForward] == multiplierEnd);
            if (inMulWindow) {
                equation.push(nextChar);
            }
            lookForward++;
        }
        values.push(equation);
    }
    return values;
}
function solve() {
    const content = returnInput().split("");
    const values = extractEquations(content);
    return values.filter((value) => value.length > 0).map((value) => convertToArithmetic(value)).reduce((a, b) => a + b);
}
const startTime = performance.now();
const solution = solve();
const endTime = performance.now();
const executionTime = endTime - startTime;
console.log(`The answer is: ${solution}, solved in ${executionTime} milliseconds`);
//# sourceMappingURL=main.js.map