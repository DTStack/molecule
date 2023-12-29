import Icon from '@dtinsight/molecule/esm/client/components/icon';
import MoleculeMenuBar from '@dtinsight/molecule/esm/client/slots/menuBar';

import './menuBar.css';

export default function MenuBar(props: any) {
    return (
        <div className="app_menuBar__container">
            <MoleculeMenuBar {...props} />
            <div
                style={{
                    flex: 1,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <div className="app_menuBar">
                    <Icon type="debug" />
                    <div style={{ color: 'var(--titleBar-activeForeground)' }}>Molecule</div>
                </div>
            </div>
        </div>
    );
}
