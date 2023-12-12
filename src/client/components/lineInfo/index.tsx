import useConnector from '../../hooks/useConnector';
import useLocale from '../../hooks/useLocale';

export interface ILineInfoProps {
    data: {
        ln: number;
        col: number;
    };
}

export default function LineInfo({ data }: ILineInfoProps) {
    const localize = useLocale();
    const builtin = useConnector('builtin');
    const text = localize(
        builtin.constants.STATUSBAR_ITEM_SELECTION,
        `Ln ${data.ln}, Col ${data.col}`,
        data.ln,
        data.col
    );
    return <span title={text}>{text}</span>;
}
