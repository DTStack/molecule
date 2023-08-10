import useConnector from './hooks/useConnector';
import AuxiliaryBar from './slots/auxiliaryBar';

export default function Workbench() {
    const molecule = useConnector();
    console.log('molecule:', molecule);

    return (
        <main>
            Workbench
            <AuxiliaryBar />
        </main>
    );
}
