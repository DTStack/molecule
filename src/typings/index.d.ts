/**
 * Global flag for development
 */
declare let __DEVELOPMENT__: boolean;

/**
 * Global window object
 */
declare const window: Window;

declare const define: any;
interface HTMLElementProps<T = any> {
    id?: string;
    title?: string;
    style?: React.CSSProperties;
    className?: string;
}

type LiteralUnion<T extends U, U> = T | (U & {});
