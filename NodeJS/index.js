// Packages
const fs = require("fs");
let file = "tak.png.jpg".split(".");
let file_type = file[file.length - 1];
console.log(file_name, file_type);
let old_file = fs.readFileSync("tak.jpg", { encoding: "base64" });

let new_file = fs.writeFileSync("[base64]tak_jpg", old_file);