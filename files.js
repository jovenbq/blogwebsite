const fs = require('fs');

//Read file
// fs.readFile('./docs/blog.txt', 'utf8', (err, data) => {

//     if (err) {
//         console.log(err);
//     }
//     console.log(data);

// });

//Write file 
//3 Arguments (path, data, callback)
// fs.writeFile('./docs/blog2.txt', 'hello world', () => {

//     console.log('file was written');
// })

// //Directory
// if (!fs.existsSync('./assets')) {
//     console.log('Directory does not exist');
//     fs.mkdir('./assets', (err) => {
//         if (err) {
//             console.log(err);
//         }
//         console.log('Directory created');
//     })
// } else {
//     fs.rmdir('./assets', (err) => {
//         if (err) {
//             console.log(err);
//         }
//         console.log('Directory deleted');
//     })
// }

//Delete file
// if (fs.existsSync('./docs/blog3.txt')) {
//     fs.unlink('./docs/blog3.txt', (err) => {
//         if (err) {
//             console.log(err);
//         }
//         console.log('File deleted');
//     })
// } else {
//     console.log('File does not exist');
// }