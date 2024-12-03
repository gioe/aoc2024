import * as fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const input = fs
    .readFileSync(__dirname + '/data.txt', 'utf8');
export function returnFileContents() {
    return input;
}
//# sourceMappingURL=shared.js.map