const fs = require('fs');

const readStream = fs.createReadStream('./docs/blog.txt', { encoding: 'utf8' });
const writeStream = fs.createWriteStream('./docs/blog4.txt');

//Read stream long way
// readStream.on('data', (chunk) => {
//     console.log('---- NEW CHUNK ----');
//     console.log(chunk);
//     writeStream.write('\n--NEW CHUNK--\n');
//     writeStream.write(chunk);
// })

// //Read stream short way
// readStream.pipe(writeStream);