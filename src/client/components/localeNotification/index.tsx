import { useEffect, useRef } from 'react';
import { useConnector, useLocale } from 'mo/client/hooks';

import Button from '../button';
import Flex from '../flex';
import variables from './index.scss';

export default function LocaleNotification() {
    const buttonRef = useRef<HTMLButtonElement>(null);
    const localize = useLocale();
    const builtin = useConnector('builtin');

    useEffect(() => {
        // Delay execution to ensure focus on element
        buttonRef.current?.focus();
    }, []);

    const reload = () => {
        window.location.reload();
    };

    return (
        <section className={variables.container}>
            <div>
                <b>
                    {localize(
                        builtin.constants.NOTIFICATION_ITEM_INTERNATIONAL,
                        'A reload is required for the change in display language to take effect.'
                    )}
                </b>
                <p>
                    {localize(
                        builtin.constants.NOTIFICATION_ITEM_INTERNATIONAL_DESCRIPTION,
                        'Press the confirm button to reload and change the display language.'
                    )}
                </p>
            </div>
            <Flex justifyContent="flex-end">
                <Button ref={buttonRef} style={{ width: 150 }} onClick={reload}>
                    {localize(builtin.constants.NOTIFICATION_ITEM_INTERNATIONAL_BUTTON, 'Confirm Reload')}
                </Button>
            </Flex>
        </section>
    );
}
