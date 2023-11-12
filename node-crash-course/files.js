const fs = require('fs'); // import filesystem module


// read files
// fs.readFile('./blog1.txt', (err, data) => {
// // first arg is string to relative path for file
// // second is function that executes when complete
//     if (err) {
//         console.log(err);
//     }
//     console.log(data.toString());
// }); 

// console.log('last line');

// // write files
// fs.writeFile('./blog1.txt', 'hello, world', () => {
//     // same as readfile, middle arg is text to be written
//     // if file doesn't exist, it is created
//     console.log('file was written');
// });

// directories
if (!fs.existsSync('./assets')) {    // if directory doesnt exist
    fs.mkdir('./assets', (err) => {  // create directory
        if (err){                    // if error is true, log error
            console.log(err);
        }
        console.log('folder created');
    });
} 
else {                               // otherwise remove the folder
    fs.rmdir('./assets', (err) => {
        if (err) {                   // and similarly, log error if found
            console.log(err);
        }
        console.log('folder deleted');
    });
}

// delete files
if (fs.existsSync('./deleteme.txt')) { 
    fs.unlink('./deleteme.txt', (err) => {
        if(err) {
            console.log(err);
        }
    console.log('file deleted');
    })
}


