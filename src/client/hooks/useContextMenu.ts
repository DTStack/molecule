import type { IItemProps, IMoleculeContext } from 'mo/types';
import { classifyBy, cloneMenuItem, concatMenu } from 'mo/utils';

import useConnector from './useConnector';
import useLocale from './useLocale';

type Token = Extract<keyof IMoleculeContext, 'statusBar' | 'activityBar' | 'panel'>;
export default function useContextMenu(token: Token, item?: any) {
    // const contextMenu = useConnector('contextMenu');
    // const tokenObj = useConnector(token);
    // const localize = useLocale();

    // const base = contextMenu.data.get(token) || [];
    // // It's an arraylike data
    // const classifyData = classifyBy(tokenObj.data as IItemProps[], (item) => {
    //     // classify data by alignment property
    //     return (['top', 'bottom', 'left', 'right'] as const).indexOf((item as any).alignment);
    // });
    // const items = concatMenu(
    //     // That's not get the last of the array, but get the value of 「-1」 key
    //     classifyData[-1]?.map((i) => ({
    //         id: i.id,
    //         name: i.name,
    //         icon: i.hidden ? undefined : 'check',
    //     })),
    //     ...classifyData.map((value) =>
    //         value?.map((i) => ({
    //             id: i.id,
    //             name: i.name,
    //             icon: i.hidden ? undefined : 'check',
    //         }))
    //     )
    // );

    // const next = concatMenu(
    //     items,
    //     base,
    //     item && [
    //         cloneMenuItem({
    //             id: item.id,
    //             name: localize('statusBar.hide', `Hidden ${item.name}`, item.name),
    //         }),
    //     ]
    // );

    // return next || [];
    return [];
}
