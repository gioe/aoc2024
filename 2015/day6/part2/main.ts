import { returnFileContents } from '../shared';

const size = 1000;
const board: number[][] = []

function buildBoard() {
    for (let x = 0; x < size; x++) {
        const row: number[] = []
        for (let x = 0; x < size; x++) {
            row.push(0)
        }
        board.push(row)
    }
    return board;
}

function turnOnRange(startCoordinates: number[], endCoordinates: number[]) {

    for (let x = startCoordinates[0]; x <= endCoordinates[0]; x++) {
        const lightArray = board[x]
        for (let y = startCoordinates[1]; y <= endCoordinates[1]; y++) {
            const value = lightArray[y]
            lightArray[y] = value + 1
        }
    }
}

function toggleRange(startCoordinates: number[], endCoordinates: number[]) {

    for (let x = startCoordinates[0]; x <= endCoordinates[0]; x++) {
        const lightArray = board[x]
        for (let y = startCoordinates[1]; y <= endCoordinates[1]; y++) {
            const value = lightArray[y]
            lightArray[y] = value + 2
        }
    }
}

function turnOffRange(startCoordinates: number[], endCoordinates: number[]) {

    for (let x = startCoordinates[0]; x <= endCoordinates[0]; x++) {
        const lightArray = board[x]
        for (let y = startCoordinates[1]; y <= endCoordinates[1]; y++) {
            const value = lightArray[y]
            if (value > 0) {
                lightArray[y] = value - 1
            }
        }
    }
}


function solve() {
    const contents = returnFileContents().split("\n")
    buildBoard()
    contents.forEach((value) => {
        const stringContents = value.split(' ')
        if (stringContents.includes('toggle')) { toggleRange(stringContents[1].split(',').map(Number), stringContents[3].split(',').map(Number)) } 
        else if (stringContents.includes(`off`)) { turnOffRange(stringContents[2].split(',').map(Number), stringContents[4].split(',').map(Number)) } 
        else if (stringContents.includes(`on`)) { turnOnRange(stringContents[2].split(',').map(Number), stringContents[4].split(',').map(Number)) }
    })
    return board.map((value) => value.reduce((a, b) => a + b)).reduce((a, b) => a + b)
}

const startTime = performance.now(); 
const solution = solve();
const endTime = performance.now();

const executionTime = endTime - startTime;
console.log(`The answer is: ${solution}, solved in ${executionTime} milliseconds`);