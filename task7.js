// **Instructions**:
// 1. Create a script that recursively lists all files and directories within a given directory.
// 2. Write another script that copies the contents of one directory to another, preserving the directory structure.

const fs = require('fs');
const path = require('path');

const sourceDir = './watchDir';
const copyToDir = './dirToCopy';

// LIST FILES RECURSIVELY
function listFiles(dir, listedFiles = []) {
  const files = fs.readdirSync(dir);
  console.log(files)

  files.forEach(file => {
    const filePath = path.join(dir, file);
    if (fs.statSync(filePath).isDirectory()) {
      fileList = listFiles(filePath, listedFiles);
    } else {
        listedFiles.push(filePath);
    }
  });

  return listedFiles;
}

// COPY CONTENT
function copyDirectory(src, copyTo) {
  const files = fs.readdirSync(src);

  files.forEach(file => {
    const srcPath = path.join(src, file);
    const copyToPath = path.join(copyTo, file);

    if (fs.statSync(srcPath).isDirectory()) {
      if (!fs.existsSync(copyToPath)) {
        fs.mkdirSync(copyToPath);
      }
      copyDirectory(srcPath, copyToPath);
    } else {
      fs.copyFileSync(srcPath, copyToPath);
    }
  });
}

console.log(listFiles(sourceDir));

if (!fs.existsSync(copyToDir)) {
  fs.mkdirSync(copyToDir);
}

copyDirectory(sourceDir, copyToDir);
console.log(`Contents copied from ${sourceDir} to ${copyToDir}`);


