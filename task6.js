// ### Task 6: Error Handling
// **Instructions**:
// 1. Write a script that attempts to read a file that does not exist.
// 2. Implement error handling to gracefully handle the error and print an appropriate message to the console.

const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'fileDoesNotExist.txt');

// Attempt to read the file
fs.readFile(filePath, 'utf-8', (err, data) => {
    if (err) {
        handleFileError(err, filePath);
    } else {
        console.log(`Data:${data}`);
    }
});

function handleFileError(err, file) {
    switch (err.code) {
        case 'ENOENT':
            console.error(`Error: The file at path "${file}" does not exist.`);
            break;
        case 'EACCES':
            console.error(`Error: Permission denied to access the file at "${file}".`);
            break;
        case 'EMFILE':
            console.error(`Error: Too many open files, can't open the file at "${file}".`);
            break;
        default:
            console.error(`An unexpected error occurred while reading the file at "${file}":`, err);
    }
}
