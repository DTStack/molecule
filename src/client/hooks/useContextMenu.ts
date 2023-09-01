import { AlignmentLiteral, IconType, IMoleculeContext, UniqueId } from 'mo/types';
import { classifyBy, concatMenu, randomId } from 'mo/utils';

import useConnector from './useConnector';
import useLocale from './useLocale';

type Token = Extract<keyof IMoleculeContext, 'statusBar' | 'activityBar'>;
export default function useContextMenu(token: Token, item?: any) {
    const contextMenu = useConnector('contextMenu');
    const tokenObj = useConnector(token);
    const localize = useLocale();

    const base = contextMenu.data.get(token);
    const [top = [], bottom = [], left = [], right = []] = classifyBy(
        tokenObj.data as {
            id: UniqueId;
            name: string;
            icon: IconType;
            hidden: boolean;
            alignment: AlignmentLiteral;
        }[],
        (item) => (['top', 'bottom', 'left', 'right'] as const).indexOf(item.alignment)
    );
    const items = concatMenu(
        top.map((i) => ({
            id: i.id,
            name: i.name,
            icon: i.hidden ? undefined : 'check',
        })),
        bottom.map((i) => ({
            id: i.id,
            name: i.name,
            icon: i.hidden ? undefined : 'check',
        })),
        left.map((i) => ({
            id: i.id,
            name: i.name,
            icon: i.hidden ? undefined : 'check',
        })),
        right.map((i) => ({
            id: i.id,
            name: i.name,
            icon: i.hidden ? undefined : 'check',
        }))
    );

    const next = base?.concat({ id: randomId(), type: 'divider' }, items);

    if (item) {
        next?.push(
            { id: randomId(), type: 'divider' },
            {
                id: `${item.id}$tmp`,
                name: localize('statusBar.hide', `Hidden ${item.name}`, item.name),
            }
        );
    }

    return next || [];
}
