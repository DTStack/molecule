import { IContext } from 'mo/types';

import { Context } from './context';

export default function Container({
    children,
    value,
}: React.PropsWithChildren<{ value: { molecule: IContext } }>) {
    return <Context.Provider value={value}>{children}</Context.Provider>;
}
