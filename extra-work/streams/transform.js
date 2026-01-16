// const fs = require('fs');
// const { Transform } = require('stream');

// const upper = new Transform({
//     transform(chunk, encoding, callback) {
//         const upperChunk = chunk.toString().toUpperCase();
//         callback(null, upperChunk);
//     }
// });

// const readStream = fs.createReadStream('./info.txt');
// const writeStream = fs.createWriteStream('./infoutput.txt');

// readStream
//     .pipe(upper)
//     .pipe(writeStream)


const fs = require('fs');
const { Transform } = require('stream');
const vowelReplace = new Transform({
    transform(chunk, encoding, callback) {
        const data = chunk.toString();
        const replacedData = data.replace(/[aeiouAEIOU]/g, '*');
        callback(null, replacedData);
    }
});

const readStream = fs.createReadStream('./info.txt');
const writeStream = fs.createWriteStream('./output.txt');

readStream
    .pipe(vowelReplace)
    .pipe(writeStream);
