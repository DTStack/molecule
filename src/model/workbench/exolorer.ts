
export interface IExplorerFileActionItem {
    id?: string;
    name?: string;
    data?: any;
    iconName?: string;
    render?: () => React.ReactNode | JSX.Element;
    onClick?: (event: React.MouseEvent, item: IExplorerFileActionItem) => void;
}

// service api waiting
