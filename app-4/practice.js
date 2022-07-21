const fs = require("fs");
const path = require("path");

// Create a file
fs.appendFile(path.join(__dirname, "./text.txt"), "Hello World!", (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("File appended!");
  }
});

// Read a file
fs.readFile(path.join(__dirname, "./text.txt"), "utf8", (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data, "File read!");
  }
});

// Update a file
fs.writeFile(path.join(__dirname, "./text.txt"), "Hello, Thai!", (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("File written!");
  }
});

// Rename a file
fs.rename(path.join(__dirname, "./text.txt"), "./newText.txt", (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("File renamed!");
  }
});

// Delete a file
fs.unlink(path.join(__dirname, "./newText.txt"), (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("File deleted!");
  }
});
