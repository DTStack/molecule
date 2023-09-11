import { IExtension } from 'mo/types';

export const ExtendsPanel: IExtension = {
    id: 'ExtendsPanel',
    name: 'Extend The Default Panel',
    activate: function (ctx): void {
        ctx.panel.onTabChange((key) => {
            ctx.panel.setActive(key);
        });

        ctx.panel.onTabClose((key) => {
            const { current, data } = ctx.panel.getState();
            ctx.panel.remove(key);
            if (current === key) {
                const idx = data.findIndex((i) => i.id === key);
                const nextKey = data[idx + 1]?.id ?? data[idx - 1]?.id;
                ctx.panel.setActive(nextKey);
            }
        });
    },
};
