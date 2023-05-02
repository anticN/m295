const fs = require("fs");
fs.readFile(process.argv[2], function(err, data){
    if (err) throw err;
    const strFile = data.toString();
    let lines = strFile.split("\n")
    console.log(lines.length - 1)
});

