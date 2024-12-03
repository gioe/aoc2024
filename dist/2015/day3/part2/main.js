import { returnFileContents } from '../shared';
function solve() {
    const contents = returnFileContents().split("");
    const map = new Map();
    const startingLocation = [0, 0];
    var santaLocation = startingLocation;
    var robotLocation = startingLocation;
    map.set(JSON.stringify(startingLocation), 2);
    contents.forEach((value, index) => {
        const isRobotInstruction = index % 2 === 1;
        const mutableValue = isRobotInstruction ? [...robotLocation] : [...santaLocation];
        switch (value) {
            case (">"): {
                mutableValue[1] = ++mutableValue[1];
                break;
            }
            case ("<"): {
                mutableValue[1] = --mutableValue[1];
                break;
            }
            case ("^"): {
                mutableValue[0] = ++mutableValue[0];
                break;
            }
            case ("v"): {
                mutableValue[0] = --mutableValue[0];
                break;
            }
        }
        let count = map.get(JSON.stringify(mutableValue)) == undefined ? 0 : map.get(JSON.stringify(mutableValue));
        map.set(JSON.stringify(mutableValue), ++count);
        isRobotInstruction ? robotLocation = [...mutableValue] : santaLocation = [...mutableValue];
    });
    return [...map.values()].filter((value) => value > 0).length;
}
const startTime = performance.now();
const solution = solve();
const endTime = performance.now();
const executionTime = endTime - startTime;
console.log(`The answer is: ${solution}, solved in ${executionTime} milliseconds`);
//# sourceMappingURL=main.js.map