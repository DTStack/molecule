import useConnector from '../hooks/useConnector';

export default function AuxiliaryBar() {
    const molecule = useConnector('auxiliaryBar');
    console.log('molecule:', molecule);
    return <div>AuxiliaryBar</div>;
}
