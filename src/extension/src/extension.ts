import * as vscode from "vscode";
import { SidebarProvider } from "./sideBarProvider";

/**
 * @param {{ subscriptions: import("vscode").Disposable[]; }} context
 */
function activate(context: vscode.ExtensionContext) {
  console.log('Congratulations, your extension "thirdweb" is now active!');

  const sidebarProvider = new SidebarProvider(context.extensionUri);
  context.subscriptions.push(
    vscode.window.registerWebviewViewProvider(
      "thirdsnips-sidebar",
      sidebarProvider
    )
  );
}

function deactivate() {}

module.exports = {
  activate,
  deactivate,
};
