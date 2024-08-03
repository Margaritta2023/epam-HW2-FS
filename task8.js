// **Instructions**:
// 1. Write a script that reads and prints the metadata (e.g., size, creation date) of a given file.
// 2. Modify the script to change the permissions of the file to read-only.

const fs = require('fs');
const path = require('path');
const filePath = './someFile.txt';

function printFileMetadata(file) {
    fs.stat(file, (err, stats) => {
        if (err) {
            console.error(err.message);
            return;
        }
        console.log(stats)
        console.log(`File: ${file}`);
        console.log(`Created on: ${stats.birthtime}`);
        console.log(`Size: ${stats.size} bytes`);
        console.log(`Last Modified : ${stats.mtime}`);
        console.log(`Is File: ${stats.isFile()}`);
        console.log(`Is Directory: ${stats.isDirectory()}`);

        // CHANGE TO READ-ONLY
        fs.chmod(file, 0o444, (err) => {
            if (err) {
                console.error(`Can not change permission ${err.message}`);
                return;
            }
            console.log(`File permissions changed to read-only!`);
        });
    });
}


printFileMetadata(filePath);
