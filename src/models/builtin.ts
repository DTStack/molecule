import type { Localize } from 'mo/types';

export class BuiltinModel {
    #constants = {
        STATUS_EDITOR_INFO_ID: 'MoEditorInfo',
    };
    #modules = {
        STATUS_EDITOR_INFO: () => ({
            id: this.#constants.STATUS_EDITOR_INFO_ID,
            sortIndex: 2,
            data: {
                ln: 0,
                col: 0,
            },
            name: this.localize('status.editor.info.name', 'Go to Line/Column'),
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
