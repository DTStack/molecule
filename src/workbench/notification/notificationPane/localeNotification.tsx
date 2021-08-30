import { Button } from 'mo/components';
import React, { useCallback } from 'react';

interface ILocaleNotificationProps {
    locale: string;
}

export function LocaleNotification(props: ILocaleNotificationProps) {
    const { locale } = props;

    const reload = useCallback(() => {
        window.location.reload();
    }, []);

    return (
        <div
            style={{
                lineHeight: '1.5',
                width: 350,
                textAlign: 'left',
            }}
        >
            <p>
                The current locale has changed to {locale}, click the button to
                reload the Page and applying the changes.
            </p>
            <p style={{ fontWeight: 'bold' }}>
                Notice: Reload the Page could lose the data, Please confirm you
                have saved before.
            </p>
            <Button style={{ width: 150 }} onClick={reload}>
                Confirm Reload
            </Button>
        </div>
    );
}
export default React.memo(LocaleNotification);
