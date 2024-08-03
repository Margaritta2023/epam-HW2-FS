// ### Task 4: JSON File Handling
// **Instructions**:
// 1. Create a JSON file called `data.json` with some sample data (e.g., a list of users with names and ages).
// 2. Write a script to read the JSON file and parse its contents into a JavaScript object.
// 3. Add a new user to the object and write the updated object back to the JSON file.

const fs = require("fs")

fs.readFile('./task4/data.JSON', "utf-8", (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    
    // PARSE THE JSON
    let users; 

    try{
        users = JSON.parse(data)
        console.log(`JSON parsed to JS object : ${users}`)  
    }
    catch (errParse) {
        console.log (`Did not parse data, because ${errParse.message}`)
    }

    // ADD NEW USER
    users.push({name:"Jim Carrey", age:62})

    fs.writeFile('./task4/data.JSON', JSON.stringify(users, null, 2), (writeErr) => {
        if (writeErr) {
            console.error('Did not write file, beacuse', writeErr.message);
            return;
        }
        console.log('New user added and file updated');
    });

})