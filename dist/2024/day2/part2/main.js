import { returnInput } from '../shared';
function safeWithRemoval(readings) {
    let canBeSafe = false;
    for (let x = 0; x < readings.length; x++) {
        const readingsCopy = [...readings];
        readingsCopy.splice(x, 1);
        const topology = calculateTopology(readingsCopy);
        if (isSafe(topology)) {
            canBeSafe = true;
            break;
        }
    }
    return canBeSafe;
}
function isSafe(readings) {
    const allPositives = readings.every((value) => value > 0);
    const allNegatives = readings.every((value) => value < 0);
    if (readings.some((value) => {
        return value == 0 || Math.abs(value) > 3;
    })) {
        return false;
    }
    else if (allPositives || allNegatives) {
        return true;
    }
    else {
        return false;
    }
}
function calculateTopology(levelReadings) {
    const levelChanges = [];
    for (let y = 0; y < levelReadings.length - 1; y++) {
        const aValue = levelReadings[y];
        const bValue = levelReadings[y + 1];
        const delta = bValue - aValue;
        levelChanges.push(delta);
    }
    return levelChanges;
}
function solve() {
    const reports = returnInput().split("\n");
    let map = new Map();
    for (let x = 0; x < reports.length; x++) {
        const levelReadings = reports[x].split(" ").map((value) => Number(value));
        const topology = calculateTopology(levelReadings);
        map.set(levelReadings, isSafe(topology));
    }
    const safeLevelsCount = [...map].filter(([key, value]) => value).length;
    const fixableCount = [...map].filter(([key, value]) => !value).filter(([key, value]) => safeWithRemoval(key)).length;
    return safeLevelsCount + fixableCount;
}
const startTime = performance.now();
const solution = solve();
const endTime = performance.now();
const executionTime = endTime - startTime;
console.log(`The answer is: ${solution}, solved in ${executionTime} milliseconds`);
//# sourceMappingURL=main.js.map