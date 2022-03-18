// @ts-nocheck
const vscode = require("vscode");
const dotenv = require("dotenv");

const mongo = require("./loaders/mongo");
const user = require("./models/user");

console.log(dotenv.config());

/**
 * @param {{ subscriptions: import("vscode").Disposable[]; }} context
 */
function activate(context) {
  console.log('Congratulations, your extension "thirdweb" is now active!');
  mongo(process.env.MONGODB_URL);

  let disposable = vscode.commands.registerCommand(
    "thirdweb.helloWorld",
    async function () {
      vscode.window
        .showInputBox({
          placeHolder: "Enter your wallet address",
          prompt:
            "Enter your wallet address to get a chance to win a special NFT 👀",
          value: "",
        })
        .then(value => {
          if (value) {
            user.countDocuments({}, (_err, count) => {
              if (count === 2) {
                vscode.window.showInformationMessage(
                  "Ohhh noo.. The NFT early access program has been finished 🙁"
                );
              } else {
                user.findOne({ address: value }, (_err, user) => {
                  if (user) {
                    vscode.window.showInformationMessage(
                      "You have already won the NFT once! 👀"
                    );
                  } else {
                    user.create({ address: value });
                    vscode.window.showInformationMessage(
                      "You have a chance to win a special NFT 👀"
                    );
                  }
                });
              }
            });
            vscode.window.showInformationMessage(
              `Your wallet address is: ${value}`
            );
          } else {
            return;
          }
        });
    }
  );

  context.subscriptions.push(disposable);
}

function deactivate() {}

module.exports = {
  activate,
  deactivate,
};
