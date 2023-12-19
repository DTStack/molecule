import { debounce as _debounce } from 'lodash-es';
import { FileTypes, IMoleculeContext } from 'mo/types';
import { TreeNodeModel } from 'mo/utils/tree';

export default class Drag {
    constructor(private molecule: IMoleculeContext) {}
    private ele: HTMLStyleElement | undefined;
    private dep: any;
    private elements = new Set<HTMLElement>();
    private CLASS_NAME = 'drag-over';
    private func: ReturnType<typeof _debounce> | undefined;

    private dynamicStyle(content: string) {
        this.ele = document.createElement('style');
        this.ele.textContent = content;
        document.body.appendChild(this.ele);
    }

    start() {
        this.dynamicStyle(
            `.${this.CLASS_NAME} {background-color: var(--list-inactiveSelectionBackground) !important;}`
        );
    }

    private _makeup(node: TreeNodeModel<any>) {
        if (node.fileType === FileTypes.File) return;
        if (node.fileType === FileTypes.RootFolder) {
            const root = document.querySelector<HTMLElement>('.mo-folderTree');
            if (root) {
                this.elements.add(root);
                root.classList.add(this.CLASS_NAME);
            }
            return;
        }
        const dom = document.querySelector<HTMLDivElement>(`div[data-key="${node.id}"]`);
        if (!dom) return;
        this.elements.add(dom);
        dom.classList.add(this.CLASS_NAME);
        let sibling = dom.nextElementSibling as HTMLElement;
        while (
            sibling &&
            sibling.dataset.indent &&
            dom.dataset.indent &&
            Number(sibling.dataset.indent) > Number(dom.dataset.indent)
        ) {
            this.elements.add(sibling);
            sibling.classList.add(this.CLASS_NAME);
            sibling = sibling.nextElementSibling as HTMLElement;
        }
    }

    makeup(source: TreeNodeModel<any>, target: TreeNodeModel<any>) {
        this.clear();
        // FIXME: improve getParentNode performance
        const sourceParent = this.molecule.folderTree.getParentNode(source.id);
        const targetParent = this.molecule.folderTree.getParentNode(target.id);

        if (!targetParent) return;
        if (
            (target.fileType === FileTypes.File && targetParent === sourceParent) ||
            sourceParent === target
        )
            return;
        this._makeup(target.fileType === FileTypes.File ? targetParent : target);
    }

    createEffect(effect: Function, dep: any) {
        if (dep === this.dep) return;
        this.dep = dep;
        effect();
    }

    debounce(...args: Parameters<typeof _debounce>) {
        this.func = _debounce(...args);
        this.func();
    }

    clear() {
        this.elements.forEach((ele) => {
            ele.classList.remove(this.CLASS_NAME);
        });
        this.elements.clear();
        this.func?.cancel();
    }

    end() {
        this.clear();
        this.ele?.remove();
        this.dep = undefined;
    }
}
