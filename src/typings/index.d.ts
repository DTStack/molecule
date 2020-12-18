/**
 * Global flag for development
 */
declare let __DEVELOPMENT__: boolean;

/**
 * Global window object
 */
declare let window: Window;

type ReactNode = React.ReactNode;
interface HTMLElementProps<T = any> {
    id?: string;
    style?: React.CSSProperties;
    className?: string;
}

type LiteralUnion<T extends U, U> = T | (U & {});

