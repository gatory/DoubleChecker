import { Plugin, MarkdownView } from 'obsidian';

export default class DoubleChecker extends Plugin {
    async onload() {
        const activeView = this.app.workspace.getActiveViewOfType(MarkdownView);
        if (activeView) {
            const editor = activeView.editor;

            const selectedText = editor.getSelection();
            if (selectedText) {
                console.log('Selected text:', selectedText);
            } else {
                console.log('No text selected.');
            }
        }

        this.addCommand({
            id: 'check-double',
            name: 'Check Double',
            callback: () => {
                const activeView = this.app.workspace.getActiveViewOfType(MarkdownView);
                if (activeView) {
                    const editor = activeView.editor;
                    const selectedText = editor.getSelection();
                    if (selectedText) {
                        console.log('Selected text:', selectedText);
                    } else {
                        console.log('No text selected.');
                    }
                }
            }
        });
    }

    onunload() {
    }
}