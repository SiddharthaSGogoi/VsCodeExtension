import * as vscode from 'vscode';


export function activate(context: vscode.ExtensionContext) {

	vscode.window.showInformationMessage('Hello World!');
	vscode.window.showErrorMessage('Heyyyy heyy heyy')
	// let disposable = vscode.commands.registerCommand('extension.helloWorld', () => {

	// });

	// context.subscriptions.push(disposable);
}

export function deactivate() {}
