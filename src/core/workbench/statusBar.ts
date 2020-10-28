
export interface IStatusBar {
    onClick:(event: React.MouseEvent<any, any>) => void;
    push: (data) => void;
    remove: (index: number) => void;
    update: () => void;
    render?: () => React.ReactNode | JSX.Element;
}
