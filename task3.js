// ### Task 3: Synchronous vs. Asynchronous Operations
// **Instructions**:
// 1. Write two scripts:
//    - One that uses synchronous methods (`fs.readFileSync`, `fs.writeFileSync`) to read from and write to a file.
//    - Another that uses asynchronous methods (`fs.readFile`, `fs.writeFile`) to achieve the same functionality.
// 2. Compare the scripts and note the differences in their execution.

const fs = require("fs")

//SYNC VERSION
try {
    fs.writeFileSync("versionSync.txt", "trying sync", "utf-8")
    console.log("Sync file created and written")

    const data = fs.readFileSync("./versionSync.txt", "utf-8")
    console.log(`Data read : "${data}"`)
}
catch (err){
    console.log(err)
}


//ASYNC VERSION
fs.writeFile("versionAsync.txt", "Trying async", (err) => {
    if(err) {
        console.log("asyncWrite",err)
        return
    };
    console.log("Async file created and written");   
})

fs.readFile("./versionAsync.txt", "utf-8", (err, data) => {
    if(err) {
        console.log("asyncRead",err)
        return
    };
    console.log(`Data :"${data}"`)
})

// Difference
// 1.In sync version the code execution is blocked until the end of the previous command, 
// while async code is non-blocking
// 2. Sync version does not require a callback, unlike asynchronous