import { components, slots } from '@dtinsight/molecule';

import './menuBar.css';

export default function MenuBar(props: any) {
    return (
        <div className="app_menuBar__container">
            <slots.menuBar.default {...props} />
            <div
                style={{
                    flex: 1,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <div className="app_menuBar">
                    <components.icon.default type="debug" />
                    <div style={{ color: 'var(--titleBar-activeForeground)' }}>Molecule</div>
                </div>
            </div>
        </div>
    );
}
