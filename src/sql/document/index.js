import fs from "fs";
import path from "path";

const __dirname = path.resolve();
const TEST = fs.readFileSync(path.resolve(__dirname, './sql/document/test.sql')).toString();


export default {
    TEST,
}