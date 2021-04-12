import './style.scss';
import { IActionBar } from 'mo/components/actionBar';
export interface IToolBar<T = any> extends IActionBar {
}
export default function ToolBar<T = any>(props: IToolBar<T>): JSX.Element;
