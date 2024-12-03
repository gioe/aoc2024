import { returnFileContents } from '../shared';

function solve() {
    const contents = returnFileContents().split("")
    const map = new Map<string, number>()
    var currentLocation: [number, number] = [0,0]
    map.set(JSON.stringify(currentLocation), 1)
    contents.forEach((value, index) => {
        switch (value) {
            case (">"): {
                currentLocation[1] = ++currentLocation[1]
                break;
            }
            case ("<"): {
                currentLocation[1] = --currentLocation[1]
                break;
            }
            case ("^"): {
                currentLocation[0] = ++currentLocation[0]
                break;
            }
            case ("v"): {
                currentLocation[0] = --currentLocation[0]
                break;
            }
        }
       
        let count = map.get(JSON.stringify(currentLocation)) == undefined ? 0 : map.get(JSON.stringify(currentLocation))
    
        map.set(JSON.stringify(currentLocation), ++count)
    })

   
    return [...map.values()].filter((value) => value > 0).length
}

const startTime = performance.now(); 
const solution = solve();
const endTime = performance.now();

const executionTime = endTime - startTime;
console.log(`The answer is: ${solution}, solved in ${executionTime} milliseconds`);