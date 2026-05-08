import { Plugin, MarkdownView } from 'obsidian';
import { DoubleCheckerView, VIEW_TYPE_DOUBLE_CHECKER } from 'views/DoubleCheckerView';

export default class DoubleChecker extends Plugin {
    async onload() {
        console.log('Loading Double Checker plugin');

        this.registerView(VIEW_TYPE_DOUBLE_CHECKER, (leaf) => new DoubleCheckerView(leaf));

        this.addRibbonIcon('check-check', 'Double Check', () => {
            this.activateView();
        });


        this.addCommand({
            id: 'double-check',
            name: 'Double Check Selected Text',
            callback: () => {
                const activeView = this.app.workspace.getActiveViewOfType(MarkdownView);
                if (activeView) {
                    const editor = activeView.editor;
                    const selectedText = editor.getSelection().replace(/\s+/g, ' ').trim();
                    if (selectedText) {
                        console.log('Selected text:', selectedText);
                    } else {
                        console.log('No text selected.');
                    }
                }
            }
        });

        
    }

    async activateView() {
        const { workspace } = this.app;

        let leaf = workspace.getLeavesOfType(VIEW_TYPE_DOUBLE_CHECKER)[0];

        if (!leaf) {
            leaf = workspace.getRightLeaf(false);
            await leaf.setViewState({
                type: VIEW_TYPE_DOUBLE_CHECKER,
                active: true,
            });
        }

        workspace.revealLeaf(leaf);
    }

    onunload() {
        console.log('Unloading Double Checker plugin');
    }
}