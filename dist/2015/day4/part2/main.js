import crypto from "crypto";
const key = 'bgvyzdsv';
function startsWithSixZeros(hash) {
    return hash.slice(0, 6) === "000000";
}
export const md5 = (contents) => crypto.createHash('md5').update(contents).digest("hex");
function solve() {
    let int = 0;
    while (!startsWithSixZeros(md5(key + String(int)))) {
        int++;
    }
    return int;
}
const startTime = performance.now();
const solution = solve();
const endTime = performance.now();
const executionTime = endTime - startTime;
console.log(`The answer is: ${solution}, solved in ${executionTime} milliseconds`);
//# sourceMappingURL=main.js.map