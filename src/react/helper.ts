import { Children, cloneElement, isValidElement } from 'react';

/**
 * Clone react children props
 * @param children ReactNode
 * @param props Parent props
 */
export function cloneReactChildren<P>(
    children: React.ReactNode,
    props: P
): ReactNode {
    return Children.map(children, (child) => {
        if (isValidElement(child)) {
            return cloneElement(child, props);
        }
        return child;
    });
}
