const fs = require('fs');
const http = require('http');

// const redStream = fs.createReadStream("./output.txt", {
//   highWaterMark: 64*1024
//   });

//   redStream.on('data', chunk => {  
//     console.log(chunk.toString());
//   });

const writeStream = fs.createWriteStream("./info.txt",{
    flags: 'a'  // append mode
});

writeStream.write("Hello World\n");
writeStream.write("Welcome to Node.js Streams\n");
writeStream.end("This is the end of the stream.\n");

writeStream.on('finish', () => {
  console.log("All data has been written to info.txt");
});


