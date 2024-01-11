import { Pane } from './pane';
import { Sash } from './sash';
import { SplitPane } from './splitPane';

export { type IPaneConfigs } from './pane';
export { type ISashProps } from './sash';
export { type ISplitProps } from './splitPane';

type InternalSplit = typeof SplitPane & {
    Pane: typeof Pane;
    Sash: typeof Sash;
};

(SplitPane as InternalSplit).Pane = Pane;
(SplitPane as InternalSplit).Sash = Sash;

const Split = SplitPane;

export default Split as InternalSplit;
