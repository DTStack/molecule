import * as React from 'react';
import { getBEMElement, prefixClaName } from 'mo/common/className';
import { IMenuBar, IMenuBarItem } from 'mo/model/workbench/menuBar';
import { IMenuBarController } from 'mo/controller/menuBar';
import { DropDown, DropDownRef } from 'mo/components/dropdown';
import { IMenuProps, Menu } from 'mo/components/menu';
import { Icon } from 'mo/components/icon';
import { IKeybindingController } from 'mo/controller';

const defaultClassName = prefixClaName('menuBar');
const actionClassName = getBEMElement(defaultClassName, 'action');

type UnionController = {
    menuBarController: IMenuBarController;
    keybindingController: IKeybindingController;
};

export function MenuBar(props: IMenuBar & UnionController) {
    const { data, menuBarController, keybindingController } = props;
    const childRef = React.useRef<DropDownRef>(null);
    const { onClick } = menuBarController;

    const addKeybindingForData = (
        rawData: IMenuBarItem[] = []
    ): IMenuProps[] => {
        const resData: IMenuProps[] = rawData.concat();
        const stack = [...resData];
        while (stack.length) {
            const head = stack.pop();
            if (head) {
                if (head?.data) {
                    stack.push(...head.data);
                } else {
                    const simplyKeybinding =
                        keybindingController.queryGlobalKeybinding(head.id!) ||
                        [];
                    if (simplyKeybinding.length) {
                        head.keybinding = keybindingController.convertSimpleKeybindingToString(
                            simplyKeybinding
                        );
                    }
                }
            }
        }
        return resData;
    };

    const handleClick = (e: React.MouseEvent, item) => {
        onClick?.(e, item);
        (childRef.current as any)!.dispose();
    };
    const overlay = (
        <Menu
            onClick={handleClick}
            style={{ width: 200 }}
            data={addKeybindingForData(data)}
        />
    );
    return (
        <div className={defaultClassName}>
            <DropDown
                ref={childRef}
                trigger="click"
                className={actionClassName}
                placement="right"
                overlay={overlay}
            >
                <Icon type="menu" />
            </DropDown>
        </div>
    );
}

export default MenuBar;
