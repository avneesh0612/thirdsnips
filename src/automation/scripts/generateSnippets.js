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
    for (let contract in response.data) {
      try {
        fs.appendFileSync(
          `${testSnippetsFolder}/${contract.toLowerCase()}.json`,
          ""
        );
      } catch {
        fs.mkdirSync(testSnippetsFolder);
        fs.appendFileSync(
          `${testSnippetsFolder}/${contract.toLowerCase()}.json`,
          ""
        );
      }
      objectPath.get(response.data, `${contract}.methods`).map(method => {
        const snippet = renderSnippet(
          objectPath.get(method, "examples.javascript"),
          `${contract.toLowerCase()}${upperCase(method["name"])}`,
          method["summary"].replace(/\n/g, "")
        );
        fs.appendFileSync(
          `${testSnippetsFolder}/${contract.toLowerCase()}.json`,
          `${snippet}`
        );
      });
    }
    shelljs.exec("yarn format");
  });
