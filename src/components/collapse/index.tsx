import * as React from 'react';
import { useState } from 'react';
import RcCollapse, { Panel } from 'rc-collapse';
import Toolbar from 'mo/components/toolbar';
import { Icon } from 'mo/components/icon';
import {
    prefixClaName,
    classNames,
    getBEMElement,
    getBEMModifier,
} from 'mo/common/className';

export interface IExpandProps {
    isActive?: boolean;
}
export interface ICollapseProps<T = any> {
    data?: T;
    className?: string;
}

interface IState {
    activePanelKeys: React.Key[];
}
const defaultCollapseClassName = prefixClaName('collapse');
export const contentPaddingClassName = getBEMModifier(
    getBEMElement(defaultCollapseClassName, 'content'),
    'padding'
);

const initState = {
    activePanelKeys: [],
};
const Collapse: React.FunctionComponent<ICollapseProps> = (
    props: ICollapseProps
) => {
    const [state, setState] = useState<IState>(initState);
    const { className, data = [], ...restProps } = props;
    const onChangeCallback = (key: React.Key[]) => {
        setState((state: IState) => ({ ...state, activePanelKeys: key }));
    };
    const onClick = (e, item) => {
        e.stopPropagation();
        console.log('onClick:', e, item);
    };
    const render = (render) => {
        if (render) {
            return render();
        } else {
            return (
                <span className={contentPaddingClassName}>
                    Cannot provide...
                </span>
            );
        }
    };
    const { activePanelKeys } = state;
    return (
        <div className={classNames(defaultCollapseClassName, className)}>
            <RcCollapse
                {...restProps}
                onChange={(activeKeys: React.Key[]) => {
                    onChangeCallback(activeKeys);
                }}
                expandIcon={({ isActive }: IExpandProps) => (
                    <Icon type={isActive ? 'chevron-down' : 'chevron-right'} />
                )}
            >
                {data.map((panel) => (
                    <Panel
                        key={panel.id}
                        header={panel.name}
                        extra={
                            activePanelKeys?.includes(panel.id) && (
                                <Toolbar
                                    key={panel.id}
                                    data={panel.toolbar}
                                    onClick={onClick}
                                />
                            )
                        }
                    >
                        {render(panel.renderPanel)}
                    </Panel>
                ))}
            </RcCollapse>
        </div>
    );
};

export { Panel };
export default Collapse;
