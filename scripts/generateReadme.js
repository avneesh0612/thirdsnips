import fs from "fs";
import { markdownTable } from "markdown-table";

import constants from '../data/constants.js'
import convertFileName from "../utils/convertFileName.js";

const readmeTop = `# thirdweb-snippets

Thirdweb snippets for enhancing your the developer experience while working with thirdweb 🚀!

## Usage

`;

const readmeBottom = `

## Show your support

Give a ⭐️ if this project helped you!

## 📝 License

Copyright © 2022 [Avneesh Agarwal](https://github.com/avneesh0612).<br />
This project is [GNU](https://github.com/avneesh0612/thirdweb-snippets/blob/main/LICENSE) licensed.
`;

let finalSnippets = [
  ["Prefix", "Description", "Module"]
];

fs.readdir(constants["snippetsFolder"], function (err, files) {
  files.map((file) => {
    // Reading the files in the snippet folder and getting the JSON file
    fs.readFile(`${constants["snippetsFolder"]}/${file}`, "utf8", function (err, data) {
      const actualData = JSON.parse(data);
      // Converting the object to an array
      const snippetArray = Object.keys(actualData).map(
        (key) => actualData[key]
      );
      // Adding the snippet to the final array
      snippetArray.map((snippet) => {
        finalSnippets.push([`\`${snippet.prefix}\``, snippet.description, `${convertFileName(file)} module`]);
      });
      // Generating a markdown table
      let snippetTable = markdownTable(finalSnippets)
      const snippetDocs = readmeTop + snippetTable + "\n" + readmeBottom
      // Clearing all the content in the README.md file before adding new content
      fs.truncate(constants["readmeFile"], 0, function (err) {
        if (err) {
          console.log(err)
        }
      })
      // Adding the new content to the README.md file
      fs.appendFile(constants["readmeFile"], snippetDocs, function (err) {
        if (err) {
          console.log(err)
        }
      })
    });
  });
});
