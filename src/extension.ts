import * as vscode from 'vscode';


export function activate(context: vscode.ExtensionContext) {

	let disposable = vscode.commands.registerCommand('extension.testName', () => {
		vscode.window.showInformationMessage('Hello World!');
		vscode.window.showErrorMessage('Heyyyy heyy heyy');
	});

	context.subscriptions.push(disposable);
}

export function deactivate() {}
