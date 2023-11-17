import { useEffect, useRef } from 'react';
import { Button } from 'mo/client/components/button';

import useLocale from '../../hooks/useLocale';

export function LocaleNotification() {
    const buttonRef = useRef<HTMLButtonElement>(null);
    const localize = useLocale();

    useEffect(() => {
        // Delay execution to ensure focus on element
        buttonRef.current?.focus();
    }, []);

    const reload = () => {
        window.location.reload();
    };

    return (
        <div style={{ lineHeight: '1.5' }}>
            <div
                style={{
                    direction: 'ltr',
                    width: 440,
                    whiteSpace: 'normal',
                    textAlign: 'left',
                }}
            >
                <p style={{ fontWeight: 'bold' }}>{localize('notification.locale.title', '')}</p>
                <p>{localize('notification.locale.description', '')}</p>
            </div>
            <div style={{ marginBottom: 2 }}>
                <Button
                    ref={buttonRef}
                    style={{ width: 150, margin: '0 0 0 auto' }}
                    onClick={reload}
                >
                    {localize('notification.locale.button', '')}
                </Button>
            </div>
        </div>
    );
}
export default LocaleNotification;
