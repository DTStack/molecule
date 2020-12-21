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
import './style.scss';

export interface IExpandProps {
    isActive?: boolean;
}
export interface ICollapseProps<T = any> {
    data?: T;
    className?: string;
}

interface IState {
    activePanelKey: React.Key | React.Key[];
}
const defaultCollapseClassName = prefixClaName('collapse');
export const contentPaddingClassName = getBEMModifier(
    getBEMElement(defaultCollapseClassName, 'content'),
    'padding'
);

const initState = {
    activePanelKey: '',
};
const Collapse: React.FunctionComponent<ICollapseProps> = (
    props: ICollapseProps
) => {
    const [state, setState] = useState<IState>(initState);
    const { className, data = [], ...restProps } = props;
    const onChangeCallback = (key: React.Key | React.Key[]) => {
        setState((state: IState) => ({ ...state, activePanelKey: key }));
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
    const { activePanelKey } = state;
    return (
        <div className={classNames(defaultCollapseClassName, className)}>
            <RcCollapse
                {...restProps}
                accordion={true}
                activeKey={activePanelKey}
                onChange={(activeKey: React.Key | React.Key[]) => {
                    onChangeCallback(activeKey);
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
                            activePanelKey === panel.id && (
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
