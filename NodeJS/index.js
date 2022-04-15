// Packages
const fs = require("fs");

let old_file = fs.readFileSync("tak.jpg", { encoding: "base64" });

let new_file = fs.writeFileSync("[base64]tak_jpg", old_file);