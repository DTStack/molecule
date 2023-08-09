import useConnector from '../hooks/useConnector';

export default function AuxiliaryBar() {
    const molecule = useConnector();
    console.log('molecule:', molecule);
    return <div>AuxiliaryBar</div>;
}
