import { returnInput } from '../shared';

function isSafe(readings: number[]) {
    const allPositives = readings.every((value) => value > 0);
    const allNegatives = readings.every((value) => value < 0);
    if (readings.some((value) => {
        return value == 0 || Math.abs(value) > 3
    })) {
       return false
    } else if (allPositives || allNegatives){
        return true
    } else { return false }
}

function solve() {
    const reports = returnInput().split("\n")
    let topology: number[][] = []

    for (let x = 0; x < reports.length; x++) {
        const levelReadings = reports[x].split(" ")
        const levelChanges: number[] = []
        for (let y = 0; y < levelReadings.length - 1; y++) {
            const aValue = Number(levelReadings[y])
            const bValue = Number(levelReadings[y + 1])
            const delta = bValue - aValue
            levelChanges.push(delta)
        }
        topology.push(levelChanges)
    }

    return topology.filter((topology) => isSafe(topology)).length
}

const startTime = performance.now(); 
const solution = solve();
const endTime = performance.now();

const executionTime = endTime - startTime;
console.log(`The answer is: ${solution}, solved in ${executionTime} milliseconds`);