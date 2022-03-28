const fs = require("fs");
const markdownTable = require("markdown-table");

const { readmeTop, readmeBottom } = require("../data/readmeConstants");
const { snippetsFolder, readmeFile } = require("../data/constants");

// The array in which all the snippets are been stored, using this array we would be generating the markdown table in SNIPPETS.md file
let finalSnippets = [["Prefix", "Description", "Category"]];

fs.readdir(snippetsFolder, function (err, files) {
  files.map(file => {
    // Reading the files in the snippet folder and getting the JSON file
    fs.readFile(`${snippetsFolder}/${file}`, "utf8", function (err, data) {
      const actualData = JSON.parse(data);
      // Converting the object to an array
      const snippetArray = Object.keys(actualData).map(key => actualData[key]);

      // Adding the snippet to the final array
      snippetArray.map(snippet => {
        finalSnippets.push([
          `\`${snippet.prefix}\``,
          snippet.description.split("|")[0],
          snippet.description.split("|")[1],
        ]);
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

      readmeFile.forEach(snippetDocFile => {
        fs.writeFile(snippetDocFile, "", function (err) {
          if (err) {
            console.log(err);
          }
        });

        fs.writeFile(snippetDocFile, snippetDocs, function (err) {
          if (err) {
            console.log(err);
          }
        });
      });
    });
  });
});
