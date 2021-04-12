import * as React from 'react';
import { IPanel } from 'mo/model/workbench/panel';
import { IPanelController } from 'mo/controller/panel';
declare function Panel(props: IPanel & IPanelController): JSX.Element;
declare const _default: React.MemoExoticComponent<typeof Panel>;
export default _default;
