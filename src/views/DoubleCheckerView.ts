import { ItemView, WorkspaceLeaf } from "obsidian";

export const VIEW_TYPE_DOUBLE_CHECKER = "double-checker-leaf-view";

export class DoubleCheckerView extends ItemView {
    constructor(leaf: WorkspaceLeaf) {
        super(leaf);
    }

    getViewType(): string {
        return VIEW_TYPE_DOUBLE_CHECKER;
    }

    getDisplayText(): string {
        return "Double Checker";
    }

    async onOpen() {
        console.log("Opening Double Checker Leaf View");
        const container = this.contentEl;
        if (!container) {
            console.error("Content element not found for Leaf View");
            return;
        }
        container.empty();
        container.createEl("h2", { text: "Double Checker Results" });
        container.createEl("p", { text: "Highlight text and click the ribbon to verify." });
    }

    async onClose() {
        console.log("Closing Double Checker Leaf View");
    }
}