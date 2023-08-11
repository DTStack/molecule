import useConnector from './hooks/useConnector';

export interface IWorkbenchProps {
    onSideChange: (pos: number[]) => void;
    onEditorChange: (pos: number[]) => void;
}

export default function Workbench({ onSideChange, onEditorChange }: IWorkbenchProps) {
    const layout = useConnector('layout');

    return (
        <main>
            Workbench
            <pre>data: {JSON.stringify(layout, null, 2)}</pre>
            <button onClick={() => onSideChange([1, 2])}>onSideChange</button>
            <button onClick={() => onEditorChange([1, 2])}>onEditorChange</button>
        </main>
    );
}
