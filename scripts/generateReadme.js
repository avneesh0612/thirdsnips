import fs from "fs";
import { markdownTable } from "markdown-table";

import convertFileName from "../utils/convertFileName.js";
import { readmeTop, readmeBottom } from "../data/readmeConstants.js";
import constants from "../data/constants.js";

let finalSnippets = [["Serial No.", "Prefix", "Description", "Module"]];

fs.readdir(constants["snippetsFolder"], function (err, files) {
  files.map((file) => {
    // Reading the files in the snippet folder and getting the JSON file
    fs.readFile(
      `${constants["snippetsFolder"]}/${file}`,
      "utf8",
      function (err, data) {
        const actualData = JSON.parse(data);
        // Converting the object to an array
        const snippetArray = Object.keys(actualData).map(
          (key) => actualData[key]
        );
        // Adding the snippet to the final array
        snippetArray.map((snippet, i) => {
          finalSnippets.push([
            `${i + 1}.`,
            `\`${snippet.prefix}\``,
            snippet.description,
            `[${convertFileName(
              file
            )} module](https://github.com/avneesh0612/thirdweb-snippets/blob/main/snippets/${file})`,
          ]);
        });
        // Generating a markdown table
        let snippetTable = markdownTable(finalSnippets);
        const snippetDocs = readmeTop + snippetTable + "\n" + readmeBottom;
        // Clearing all the content in the README.md file before adding new content
        fs.writeFile(constants["readmeFile"], "", function (err) {
          if (err) {
            console.log(err);
          }
        });
        // Adding the new content to the README.md file
        fs.writeFile(constants["readmeFile"], snippetDocs, function (err) {
          if (err) {
            console.log(err);
          }
        });
      }
    );
  });
});

// wait duh
