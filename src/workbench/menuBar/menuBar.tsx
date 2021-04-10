import * as React from 'react';
import { getBEMElement, prefixClaName } from 'mo/common/className';
import { IMenuBar } from 'mo/model/workbench/menuBar';
import { IMenuBarController } from 'mo/controller/menuBar';

import { Menu } from 'mo/components/menu';
import { DropDown } from 'mo/components/dropdown';
import { Icon } from 'mo/components/icon';

const defaultClassName = prefixClaName('menuBar');
const actionClassName = getBEMElement(defaultClassName, 'action');

function MenuBar(props: IMenuBar & IMenuBarController) {
    const { data, onClick } = props;
    const childRef = React.useRef();
    const handleClick = (e: React.MouseEvent, item) => {
        onClick?.(e, item);
        (childRef.current as any)!.dispose();
    };
    const overlay = (
        <Menu onClick={handleClick} style={{ width: 200 }} data={data} />
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
