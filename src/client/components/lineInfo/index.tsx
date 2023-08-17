import useLocale from '../../hooks/useLocale';

export interface ILineInfoProps {
    data: {
        ln: number;
        col: number;
    };
}

export default function LineInfo({ data }: ILineInfoProps) {
    const localize = useLocale();
    return (
        <span>
            {localize(
                'statusBar.editorStatus.singleSelection',
                `Ln ${data.ln}, Col ${data.col}`,
                data.ln,
                data.col
            )}
        </span>
    );
}
