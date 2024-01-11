import { components, slots } from '@dtinsight/molecule';

import './menuBar.css';

export default function MenuBar(props: slots.IMenuBarProps) {
    return (
        <div className="app_menuBar__container">
            <slots.MenuBar {...(props as any)} />
            <components.Prevent
                style={{
                    flex: 1,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <div className="app_menuBar" onClick={() => props.emit('APP_DEBUG_ICON')}>
                    <components.Icon type="debug" />
                    <div style={{ color: 'var(--titleBar-activeForeground)' }}>Molecule</div>
                </div>
            </components.Prevent>
        </div>
    );
}
