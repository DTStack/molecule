import { IExtension } from 'mo/types';

export const ExtendsActivityBar: IExtension = {
    id: 'ExtendsActivityBar',
    name: 'Extend The Default ActivityBar',
    activate: function (ctx): void {
        ctx.activityBar.onClick((item) => {
            if (item.id === ctx.activityBar.getState().selected) {
                ctx.layout.setSidebarVisibility((prev) => !prev);
            } else {
                ctx.layout.setSidebarVisibility(false);
                ctx.activityBar.setActive(item.id);
                ctx.sidebar.setActive(item.id);
            }
        });
    },
};
