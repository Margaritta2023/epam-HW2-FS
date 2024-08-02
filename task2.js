// ### Task 2: File and Directory Management
// **Instructions**:
// 1. Write a script that creates a directory called `testDir`.
// 2. Inside `testDir`, create a new file called `testFile.txt` and write some text into it.
// 3. Rename `testFile.txt` to `renamedFile.txt`.
// 4. Delete `renamedFile.txt` and then delete `testDir`.

const fs = require ("fs")
const path = './testDir';

try {
     // Create the directory
    fs.mkdirSync(path, { recursive: true })
    console.log('TestDir created successfully!');  

    // Create the file, write some text 
    fs.writeFileSync(`./${path}/testFile.txt`, "Some text :)", "utf8")
    console.log('File created, string written!');  

    // Rename the file
    fs.renameSync(`./${path}/testFile.txt`, `./${path}/renamedFile.txt`)
    console.log('Rename is done!');

    // Delete the renamed file
    fs.unlinkSync(`./${path}/renamedFile.txt`);
    console.log('File deleted');

    // Delete the directory
    fs.rmSync(`./${path}`, { recursive: true, force: true });
    console.log('Direction deleted');
}
catch(err){
    console.log(err.message)
}





