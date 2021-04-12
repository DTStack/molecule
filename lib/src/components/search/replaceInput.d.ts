import { IActionBarItem } from 'mo/components/actionBar';
export interface IReplaceInput {
    replaceAddons?: IActionBarItem[];
    setReplaceValue?: (value?: string) => void;
    onToggleAddon?: (addon: any) => void;
}
export declare function ReplaceInput(props: IReplaceInput): JSX.Element;
