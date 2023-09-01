import { IExtension } from 'mo/types';

export const ExtendsActivityBar: IExtension = {
    id: 'ExtendsActivityBar',
    name: 'Extend The Default ActivityBar',
    activate: function (ctx): void {
        ctx.activityBar.onClick((item) => {
            if (item.id === ctx.activityBar.getState().selected) {
                ctx.activityBar.setActive(undefined);
                ctx.sidebar.setActive(undefined);
            } else {
                ctx.activityBar.setActive(item.id);
                ctx.sidebar.setActive(item.id);
            }
        });
    },
};
