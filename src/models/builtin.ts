import type { Localize } from 'mo/types';

export class BuiltinModel {
    #constants = {
        STATUS_EDITOR_INFO_ID: 'MoEditorInfo',
        STATUS_BAR_HIDE_ID: 'hide',
    };
    #modules = {
        STATUS_EDITOR_INFO: () => ({
            id: this.#constants.STATUS_EDITOR_INFO_ID,
            sortIndex: 2,
            data: {
                ln: 0,
                col: 0,
            },
            name: this.localize('statusBar.title', 'Editor Selection'),
            render: () => this.localize('statusBar.editorStatus.gotoLine', 'Go to Line/Column'),
        }),
        CONTEXT_MENU_HIDE_STATUS_BAR: () => ({
            id: this.#constants.STATUS_BAR_HIDE_ID,
            name: this.localize('statusBar.hideStatusBar', 'Hide Status Bar'),
        }),
    };
    constructor(private localize: Localize) {}

    get modules() {
        const modules = this.#modules;
        const proxyObj = Object.keys(modules).reduce<{ [key in keyof typeof modules]: any }>(
            (acc, cur) => ({
                ...acc,
                [cur]: () => {},
            }),
            {} as any
        );
        return new Proxy(proxyObj, {
            get(_, p: keyof typeof modules) {
                if (p in proxyObj) {
                    return modules[p]();
                }
                return null;
            },
        });
    }
}
