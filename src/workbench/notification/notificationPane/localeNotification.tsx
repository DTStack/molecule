import { Button } from 'mo/components';
import React, { useCallback, useEffect, useRef } from 'react';

interface ILocaleNotificationProps {
    locale: string;
}

export function LocaleNotification(props: ILocaleNotificationProps) {
    const { locale } = props;

    const reload = useCallback(() => {
        window.location.reload();
    }, []);

    const wrapperRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Delay execution to ensure focus on element
        setTimeout(() => wrapperRef.current?.focus());
    }, []);

    let isOkToReload = false;

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            isOkToReload = true;
        }
    };

    const handleKeyUp = (e) => {
        if (e.key === 'Enter' && isOkToReload) {
            reload();
        }
    };

    return (
        <div
            style={{
                lineHeight: '1.5',
                width: 420,
                textAlign: 'right',
            }}
        >
            <div
                style={{
                    direction: 'ltr',
                    whiteSpace: 'normal',
                    textAlign: 'left',
                }}
            >
                <p>
                    The current locale has changed to {locale}, click the button
                    to reload the Page and applying the changes.
                </p>
                <p style={{ fontWeight: 'bold' }}>
                    Notice: Reload the Page could lose the data, Please confirm
                    you have saved before.
                </p>
            </div>
            <div
                ref={wrapperRef}
                // make it focusable
                tabIndex={0}
                onKeyDown={handleKeyDown}
                onKeyUp={handleKeyUp}
                style={{ display: 'inline-block', marginBottom: 2 }}
            >
                <Button style={{ width: 150 }} onClick={reload}>
                    Confirm Reload
                </Button>
            </div>
        </div>
    );
}
export default React.memo(LocaleNotification);
