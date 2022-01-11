import 'reflect-metadata';
import { container } from 'tsyringe';

import {
    IFolderTreeController,
    FolderTreeController,
} from 'mo/controller/explorer/folderTree';
import { KeybindingWeight } from 'mo/monaco/common';
import { constants } from 'mo/services/builtinService/const';
import { Action2 } from 'mo/monaco/action';
import { localize } from 'mo/i18n/localize';
import { KeyMod, KeyCode } from 'mo/monaco';
import { FileTypes } from 'mo/model';

export class QuickCreateFile extends Action2 {
    static readonly ID = constants.ACTION_QUICK_CREATE_FILE;
    static readonly LABEL = localize('menu.newFile', 'New File');
    static readonly DESC = 'New File';
    private readonly folderTreeController: IFolderTreeController;

    constructor() {
        super({
            id: QuickCreateFile.ID,
            title: {
                value: QuickCreateFile.LABEL,
                original: QuickCreateFile.DESC,
            },
            label: QuickCreateFile.LABEL,
            alias: QuickCreateFile.DESC,
            f1: true,
            keybinding: {
                when: undefined,
                weight: KeybindingWeight.WorkbenchContrib,
                // eslint-disable-next-line new-cap
                primary: KeyMod.CtrlCmd | KeyCode.KeyN,
            },
        });
        this.folderTreeController = container.resolve(FolderTreeController);
    }

    run() {
        this.folderTreeController.createTreeNode?.(FileTypes.File);
    }
}
