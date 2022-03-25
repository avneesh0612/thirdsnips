const axios = require("axios");
const fs = require("fs");
const objectPath = require("object-path");
const shelljs = require("shelljs");

const {
  snippetsFolder,
  snippetsApiUrl,
  snippetsFile,
  snippetsFilePath,
} = require("../data/constants");
const renderSnippet = require("../utils/renderSnippet");

axios.get(snippetsApiUrl).then(response => {
  fs.writeFile(`${snippetsFolder}/${snippetsFile}`, "", function (err) {
    if (err) {
      console.log(err);
    }
  });
  try {
    fs.appendFileSync(`${snippetsFolder}/${snippetsFile}`, "{");
  } catch {
    fs.mkdirSync(snippetsFolder);
    fs.appendFileSync(`${snippetsFolder}/${snippetsFile}`, "{");
  }
  for (let contract in response.data) {
    objectPath.get(response.data, `${contract}.methods`).map(method => {
      const snippet = renderSnippet(
        objectPath.get(method, "examples.javascript"),
        method["name"],
        method["summary"].replace(/\n/g, "")
      );
      fs.appendFileSync(`${snippetsFolder}/${snippetsFile}`, `${snippet}`);
    });
  }
  shelljs.exec(`truncate -s -1 ${snippetsFilePath}`);
  fs.appendFileSync(`${snippetsFolder}/${snippetsFile}`, "}");
  shelljs.exec("yarn format");
});
