import { ScrollbarProps } from 'react-scrollbars-custom';
interface IScrollbar extends ScrollbarProps {
    autoHideThumb?: boolean;
}
/**
 * The react-scrollbars-custom component default not supports auto hide thumb option,
 * the below implementation from this issue:
 * https://github.com/xobotyi/react-scrollbars-custom/issues/46
 */
export declare function Scrollable(props: IScrollbar): JSX.Element;
export {};
