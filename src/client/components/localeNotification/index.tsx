import { useEffect, useRef } from 'react';
import { Button } from 'mo/client/components/button';

import useLocale from '../../hooks/useLocale';
import Flex from '../flex';
import variables from './index.scss';

export default function LocaleNotification() {
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
        <section className={variables.container}>
            <div>
                <b>{localize('notification.locale.title', '')}</b>
                <p>{localize('notification.locale.description', '')}</p>
            </div>
            <Flex justifyContent="flex-end">
                <Button ref={buttonRef} style={{ width: 150 }} onClick={reload}>
                    {localize('notification.locale.button', '')}
                </Button>
            </Flex>
        </section>
    );
}
