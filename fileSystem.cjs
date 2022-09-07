const fs = require('fs');
const filename = process.argv[2];


/* function handleFile(err,file){
    if(err){
        return console.log(err);
    }
    lines = file.split(',').lenght - 1;
    return console.log(lines);
} */

fs.readFile(filename, function (err, contents){
    if(err){
        return console.log(err);
    }
    const comas = contents.toString().split(',').length;
    console.log(comas);
});
