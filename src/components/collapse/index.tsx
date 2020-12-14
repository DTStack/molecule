import * as React from 'react';
import { useState } from 'react';
import RcCollapse, { Panel } from 'rc-collapse';
import Toolbar from 'mo/components/toolbar';
import { Icon } from 'mo/components/icon';
import { prefixClaName, classNames } from 'mo/common/className';
import { IPanelItem } from 'mo/model/workbench/explorer';
import './style.scss';

interface IExpandProps {
    isActive?: boolean;
}
interface ICollapseProps {
    data?: IPanelItem[];
    className?: string;
}

interface IState {
    activePanelKey: React.Key | React.Key[];
}

const initState = {
    activePanelKey: '',
};
const Collapse: React.FunctionComponent<ICollapseProps> = (
    props: ICollapseProps
) => {
    const [state, setState] = useState<IState>(initState);
    const { className, data = [], ...others } = props;
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
                <span className="content-box__padding">Cannot provide...</span>
            );
        }
    };
    const { activePanelKey } = state;
    return (
        <div className={classNames(prefixClaName('collapse'), className)}>
            <RcCollapse
                {...others}
                accordion={true}
                activeKey={activePanelKey}
                onChange={(activeKey: React.Key | React.Key[]) => {
                    onChangeCallback(activeKey);
                }}
                expandIcon={({ isActive }: IExpandProps) => (
                    <Icon type={isActive ? 'chevron-down' : 'chevron-right'} />
                )}
            >
                {data.map((panel: IPanelItem) => (
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
