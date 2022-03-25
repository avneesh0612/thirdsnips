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

// Fetching the snippets from the thirdweb's snippet.json file using GitHub API
axios.get(snippetsApiUrl).then(response => {
  // Clearing the snippets folder before adding new snippets
  fs.writeFile(`${snippetsFolder}/${snippetsFile}`, "", function (err) {
    if (err) {
      console.log(err);
    }
  });
  try {
    // Adding the initial "{" to the snippets file
    fs.appendFileSync(`${snippetsFolder}/${snippetsFile}`, "{");
  } catch {
    // If the snippets folder doesn't exist then create one and then add the initial "{" to the snippets file
    fs.mkdirSync(snippetsFolder);
    fs.appendFileSync(`${snippetsFolder}/${snippetsFile}`, "{");
  }

  for (let contract in response.data) {
    // Accessing the methods array of each contract from the response data
    objectPath.get(response.data, `${contract}.methods`).map(method => {
      // Converting into the form which VSCode supports for snippets
      const snippet = renderSnippet(
        objectPath.get(method, "examples.javascript"),
        method["name"],
        method["summary"].replace(/\n/g, "")
      );
      // Adding the snippet to the snippets file
      fs.appendFileSync(`${snippetsFolder}/${snippetsFile}`, `${snippet}`);
    });
  }
  // Removing the last "," from the snippets file
  shelljs.exec(`truncate -s -1 ${snippetsFilePath}`);
  // Adding the final "}" to the snippets file
  fs.appendFileSync(`${snippetsFolder}/${snippetsFile}`, "}");
  // Formatting the file
  shelljs.exec("yarn format");
});
