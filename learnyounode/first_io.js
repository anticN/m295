const fs = require("fs");
const filebBuf = fs.readFileSync(process.argv[2]);
const strFile = filebBuf.toString();
let lines = strFile.split("\n")
console.log(lines.length - 1)