import * as vscode from "vscode";
import { SidePanel } from "./sidePanel";

/**
 * @param {{ subscriptions: import("vscode").Disposable[]; }} context
 */
function activate(context: vscode.ExtensionContext) {
  console.log('Congratulations, your extension "thirdweb" is now active!');

  let disposable = vscode.commands.registerCommand(
    "thirdweb.nft",
    async function () {
      SidePanel.createOrShow(context.extensionUri);
    }
  );

  context.subscriptions.push(disposable);
}

function deactivate() {}

module.exports = {
  activate,
  deactivate,
};
