const fs = require('fs');
const filename = process.argv[3];


/* function handleFile(err,file){
    if(err){
        return console.log(err);
    }
    lines = file.split(',').lenght - 1;
    return console.log(lines);
} */

fs.readFile(filename, function(err, data){
    if(err) return console.log(err);

    const comas = data.toString().split(',').length;
    //console.log(data.toString());
    console.log(comas);
});
