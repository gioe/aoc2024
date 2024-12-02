import { returnInput } from '../shared';

function safeWithRemoval(readings: number[]) {
    for (let x = 0; x < readings.length; x++) {
        console.log(`Original readings ${readings}`)
        const tempReadings = readings;
        tempReadings.splice(x, 1)
        const splitArray = readings.splice(x, 1)
        console.log(`New readings ${tempReadings}`)
    }
    return true
}

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
    const definitelySafe = topology.filter((topology) => !isSafe(topology)).length

    const coudlBeSafe = topology.filter((topology) => isSafe(topology)).filter((value) => safeWithRemoval(value)).length

    return topology.filter((topology) => !isSafe(topology)).length
}

const startTime = performance.now(); 
const solution = solve();
const endTime = performance.now();

const executionTime = endTime - startTime;
console.log(`The answer is: ${solution}, solved in ${executionTime} milliseconds`);