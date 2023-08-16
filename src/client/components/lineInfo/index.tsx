export interface ILineInfoProps {
    data: {
        ln: number;
        col: number;
    };
}

export default function LineInfo({ data }: ILineInfoProps) {
    return <span>{`Ln ${data.ln}, Col ${data.col}`}</span>;
}
