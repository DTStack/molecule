import { localize } from 'mo/i18n/localize';
import { constants } from 'mo/services/builtinService/const';
import { KeybindingHelper } from 'mo/services/keybinding';
import { useEffect, useState } from 'react';

const KEYBINDINGS = () => [
    {
        id: constants.ACTION_QUICK_COMMAND,
        name: localize('menu.commandPalette', 'Command Palette'),
    },
    {
        id: constants.ACTION_QUICK_ACCESS_SETTINGS,
        name: localize('menu.settings', 'Settings'),
    },
    {
        id: constants.ACTION_SELECT_THEME,
        name: localize('menu.colorTheme', 'Color Theme'),
    },
];

export const useGetKeys = () => {
    const [keys, setKeys] = useState<
        {
            keybindings: string;
            id: string;
            name: any;
        }[]
    >([]);

    useEffect(() => {
        const res = KEYBINDINGS()
            .map((acessCommand) => {
                const simpleKeybindings = KeybindingHelper.queryGlobalKeybinding(
                    acessCommand.id
                );
                if (simpleKeybindings?.length) {
                    const keybindings = KeybindingHelper.convertSimpleKeybindingToString(
                        simpleKeybindings
                    );
                    return { ...acessCommand, keybindings };
                }
                return null;
            })
            .filter(Boolean);
        setKeys(
            res as {
                keybindings: string;
                id: string;
                name: any;
            }[]
        );
    }, []);

    return keys;
};
