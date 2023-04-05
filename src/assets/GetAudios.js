import fs from "fs";
var fileNames = fs.readdirSync("./naat");

const Audios = [];

fileNames.map((element) => {
  const myObj = { location: element };
  Audios.push(myObj);
});
console.log(Audios);
