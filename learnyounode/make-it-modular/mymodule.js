const fs = require("fs");
const path = require("path");
module.exports = function(dirName, extension, callback) { 
    fs.readdir(dirName, function (err, files){
        if (err) return callback(err);
        const filteredFiles = files.filter(function(file){
            return path.extname(file) === `.${extension}`
        })
        callback(null, filteredFiles);
    })
}