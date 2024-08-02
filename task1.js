// ### Task 1: Basic File Operations
// **Instructions**:
// 1. Write a script that creates a new text file called `example.txt` and writes the string "Hello, World!" into it.
// 2. Modify the script to append "This is Node.js FS module." to the same file.
// 3. Read the contents of `example.txt` and print them to the console.

const fs = require("fs");
const fileName = "example.txt"
const str = "Hello, World!";
const strAdd = "This is Node.js FS module."

function createAddRead(fileName, msg, msgAdd) {

    try {
        // Create and write to the file
        fs.writeFileSync(fileName, msg,"utf-8");
        console.log("File created, string written!");
        
        // Append message to the file
        fs.appendFileSync(fileName, msgAdd)
        console.log(`The "${msgAdd}" was appended to file!`);
        
        // Read the file 
        const data = fs.readFileSync(fileName, "utf-8");
        console.log("ReadFile:",data)
    }
    catch(err) {
        console.log(` ERROR:${err.message}`)
    }
}

// Call the function
createAddRead(fileName, str, strAdd)