// ### Task 5: File Watching
// **Instructions**:
// 1. Write a script that watches a directory called `watchDir` for changes.
// 2. Whenever a file is added, modified, or deleted in `watchDir`, log the event to the console.
const path = require('path');
const fs = require('fs');

const watchDir = 'watchDir';

// CREATING DIRECTORY(if does not exist)
if (!fs.existsSync(watchDir)) {
    fs.mkdirSync(watchDir);
    console.log(`Directory ${watchDir} created successfully`);
}

// WATCH CHANGES
fs.watch(watchDir, (event, fileName) => {
    if (fileName) {
        const filePath = path.join(watchDir, fileName);

        switch (event) {
            case 'change':
                console.log(`File modified: ${fileName}`);
                break;
            case 'rename':
                if (fs.existsSync(filePath)) {
                    console.log(`File ${fileName}  added`);
                } else {
                    console.log(`File  ${fileName} was deleted`);
                }
                break;
           
            default:
                console.log(`Unknown case: ${eventType}`);
        }
    } else {
        console.log('Please insert the filename');
    }
});

console.log(`Watching for changes : ${watchDir}`);

