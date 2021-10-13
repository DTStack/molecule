/**
 * Global flag for development
 */
declare let __DEVELOPMENT__: boolean;

type UniqueId = React.Key;

interface HTMLElementProps<T = any> {
    id?: string;
    title?: string;
    style?: React.CSSProperties;
    className?: string;
}

type LiteralUnion<T extends U, U> = T | (U & {});
