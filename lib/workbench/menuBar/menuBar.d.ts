import 'mo/workbench/menuBar/style.scss';
import { IMenuBar } from 'mo/model/workbench/menuBar';
import { IMenuBarController } from 'mo/controller/menuBar';
export interface IMenuBarProps {
}
declare function MenuBar(props: IMenuBar & IMenuBarController): JSX.Element;
export default MenuBar;
