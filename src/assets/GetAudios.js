import fs from "fs";
var fileNames = fs.readdirSync("../../public/audios");

const Audios = [];

fileNames.map((element) => {
  const myObj = { location: `../../public/audios/${element}` };
  Audios.push(myObj);
});
console.log(Audios);
