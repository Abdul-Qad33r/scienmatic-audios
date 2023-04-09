import fs from "fs";
var fileNames = fs.readdirSync("../../public/audios");

const Audios = [];

fileNames.map((element) => {
  Audios.push(element);
});
console.log(Audios);
