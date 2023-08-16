import { PropsWithChildren } from 'react';

export default function Display({ visible, children }: PropsWithChildren<{ visible: boolean }>) {
    return <>{visible && children}</>;
}
