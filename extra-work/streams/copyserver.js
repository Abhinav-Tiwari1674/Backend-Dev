// const fs = require('fs');

// const readSream = fs.createReadStream("./info.txt");
// const writeStream = fs.createWriteStream("./output.txt");


// // readStream.on('data', chunk => {
// //     let data = chunk.toString();
// //     writeStream.write(data);
// // });

// // readStream.on('end', () => {
// //     writeStream.end();
// //     console.log("File copy completed.");
// // });

// readStream.on('data', (chunk) => {
//     let data = chunk.toString().toUpperCase();
//     writeStream.write(data);
// });

// readStream.on('end', () => {
//     writeStream.end();
// });

const fs = require('fs');

const readStream = fs.createReadStream('info.txt');
const writeStream = fs.createWriteStream('output.txt');

readStream.on('data', (chunk) => {
    const upperData = chunk.toString().toUpperCase();
    writeStream.write(upperData);
});

readStream.on('end', () => {
    writeStream.end();
    console.log("File converted to uppercase successfully");
});


