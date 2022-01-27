import { Button } from 'mo/components';
import React, { useCallback, useEffect } from 'react';

interface ILocaleNotificationProps {
    locale: string;
}

export function LocaleNotification(props: ILocaleNotificationProps) {
    const { locale } = props;

    const reload = useCallback(() => {
        window.location.reload();
    }, []);

    // Support to reload by pressing the Enter key.
    useEffect(() => {
        const startTime = new Date().getTime();
        let lastKeyDownTime = startTime;
        let isOkToReload = false;

        // By default, the delay is set to 1000 milliseconds to prevent the refresh
        // from being triggered by mistake when the locale is switched by the Enter key
        // and the Enter key is held down for a long time.
        let delay = 1000;

        // When the locale is switched by the Enter key, this function will be triggered once.
        const handleKeyUp = (e: KeyboardEvent) => {
            if (e.key === 'Enter' && isOkToReload) {
                reload();
            }

            // Change the delay to 200, so that it can quickly respond to
            // the next operation of pressing the Enter key to refresh.
            delay = 200;
        };

        // When the Enter key is pressed, determine if it can be reloaded
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key !== 'Enter' || isOkToReload) return;

            const keyDownTime = new Date().getTime();
            if (keyDownTime - lastKeyDownTime > delay) {
                isOkToReload = true;
            }
            lastKeyDownTime = keyDownTime;
        };

        document.addEventListener('keydown', handleKeyDown);
        document.addEventListener('keyup', handleKeyUp);

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
            document.removeEventListener('keyup', handleKeyUp);
        };
    }, []);

    return (
        <div
            style={{
                lineHeight: '1.5',
                width: 420,
                textAlign: 'left',
            }}
        >
            <div style={{ direction: 'ltr', whiteSpace: 'normal' }}>
                <p>
                    The current locale has changed to {locale}, click the button
                    to reload the Page and applying the changes.
                </p>
                <p style={{ fontWeight: 'bold' }}>
                    Notice: Reload the Page could lose the data, Please confirm
                    you have saved before.
                </p>
            </div>
            <Button style={{ width: 150 }} onClick={reload}>
                Confirm Reload
            </Button>
        </div>
    );
}
export default React.memo(LocaleNotification);
