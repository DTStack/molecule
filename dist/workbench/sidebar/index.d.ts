import './sidebar.scss';
import * as React from 'react';
import { ISidebar } from '@/core/sidebar';
interface ISidebarProps extends ISidebar {
}
declare function Sidebar(props: ISidebarProps): JSX.Element;
declare const _default: React.MemoExoticComponent<typeof Sidebar>;
export default _default;
