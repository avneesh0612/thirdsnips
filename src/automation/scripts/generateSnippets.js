const axios = require("axios");
const fs = require("fs");
const objectPath = require("object-path");
const shelljs = require("shelljs");

const { testSnippetsFolder, snippetsFolder } = require("../data/constants");
const renderSnippet = require("../utils/renderSnippet");
const upperCase = require("../utils/upperCase");

axios
  .get(
    "https://raw.githubusercontent.com/thirdweb-dev/typescript-sdk/main/docs/snippets.json"
  )
  .then(response => {
    for (let module in response.data) {
      try {
        fs.appendFileSync(
          `${testSnippetsFolder}/${module.toLowerCase()}.json`,
          ""
        );
      } catch {
        fs.mkdirSync(testSnippetsFolder);
        fs.appendFileSync(
          `${testSnippetsFolder}/${module.toLowerCase()}.json`,
          ""
        );
      }
      objectPath.get(response.data, `${module}.methods`).map(method => {
        const snippet = renderSnippet(
          objectPath.get(method, "examples.javascript"),
          `${module.toLowerCase()}${upperCase(method["name"])}`,
          method["summary"].replace(/\n/g, "")
        );
        fs.appendFileSync(
          `${testSnippetsFolder}/${module.toLowerCase()}.json`,
          `${snippet}`
        );
      });
    }
    shelljs.exec("yarn format");
  });
