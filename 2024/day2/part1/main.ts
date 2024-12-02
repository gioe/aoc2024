import { returnInput } from '../shared';

function solve() {
    const levels = returnInput().split("\n")

    const safeLevels: number[] = []

    for (let x = 0; x < levels.length; x++) {
        const currentLevel = levels[x].split(" ")
        let isSafe = true
        let magnitudes: number[] =[]
        for (let y = 0; y < currentLevel.length - 1; y++) {
            const aValue = Number(currentLevel[y])
            const bValue = Number(currentLevel[y + 1])
            const delta = bValue - aValue

            if (delta == 0 || Math.abs(delta) > 3) {
                isSafe = false;
                break;
            }
            magnitudes.push(delta)
        }
        if (isSafe) {
            const allPositive = magnitudes.every((val) => val > 0)
            const allNegative = magnitudes.every((val) => val < 0)
            if (allPositive || allNegative) {
                safeLevels.push(x)
            }
        }
    }

    return safeLevels.length
}

const startTime = performance.now(); 
const solution = solve();
const endTime = performance.now();

const executionTime = endTime - startTime;
console.log(`The answer is: ${solution}, solved in ${executionTime} milliseconds`);