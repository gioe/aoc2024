import { returnFileContents } from '../shared';

const size = 999;
const board: boolean[][] = []

function buildBoard() {
    for (let x = 0; x < size; x++) {
        const row: boolean[] = []
        for (let x = 0; x < size; x++) {
            row.push(false)
        }
        board.push(row)
    }
    return board;
}

function turnOnRange(startCoordinates: number[], endCoordinates: number[]) {

    for (let x = startCoordinates[0]; x <= endCoordinates[0]; x++) {
        const lightArray = board[x]
        for (let y = startCoordinates[1]; y <= endCoordinates[1]; y++) {
            lightArray[y] = true
        }
    }
}

function toggleRange(startCoordinates: number[], endCoordinates: number[]) {

    for (let x = startCoordinates[0]; x <= endCoordinates[0]; x++) {
        const lightArray = board[x]
        for (let y = startCoordinates[1]; y <= endCoordinates[1]; y++) {
            lightArray[y] = !lightArray[y]
        }
    }
}

function turnOffRange(startCoordinates: number[], endCoordinates: number[]) {

    for (let x = startCoordinates[0]; x <= endCoordinates[0]; x++) {
        const lightArray = board[x]
        for (let y = startCoordinates[1]; y <= endCoordinates[1]; y++) {
            lightArray[y] = false
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
    return board.flatMap((value) => value.filter((value) => value)).length
}

const startTime = performance.now(); 
const solution = solve();
const endTime = performance.now();

const executionTime = endTime - startTime;
console.log(`The answer is: ${solution}, solved in ${executionTime} milliseconds`);