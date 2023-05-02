const fs = require("fs");
function leseDateiInhalt(path){
    return new Promise((resolve) => {
        fs.readFile(path, function(data){
            resolve(data);
        })
    })   
}

leseDateiInhalt('beispiel.txt')
  .then(content => {
    console.log('Die Länge des Dateiinhalts beträgt:', content.length);
  })
  .catch(err => {
    console.error('Fehler beim Lesen der Datei:', err);
  });