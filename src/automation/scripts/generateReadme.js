const fs = require("fs");
const markdownTable = require("markdown-table");

const { readmeTop, readmeBottom } = require("../data/readmeConstants");
const constants = require("../data/constants");

let finalSnippets = [["Prefix", "Description"]];

fs.readdir(constants["snippetsFolder"], function (err, files) {
  files.map(file => {
    // Reading the files in the snippet folder and getting the JSON file
    fs.readFile(
      `${constants["snippetsFolder"]}/${file}`,
      "utf8",
      function (err, data) {
        const actualData = JSON.parse(data);
        // Converting the object to an array
        const snippetArray = Object.keys(actualData).map(
          key => actualData[key]
        );
        // Adding the snippet to the final array
        snippetArray.map(snippet => {
          finalSnippets.push([`\`${snippet.prefix}\``, snippet.description]);
        });
        // Generating a markdown table
        let snippetTable = markdownTable(finalSnippets);
        const snippetStats = `thirdsnips currently has a total of ${finalSnippets.length} snippets.`;

        const snippetDocs =
          readmeTop +
          "\n" +
          snippetStats +
          "\n\n" +
          snippetTable +
          "\n" +
          readmeBottom;
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
