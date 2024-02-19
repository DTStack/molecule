import { useDynamic } from 'mo/client/hooks';

export interface IViewSuspenseProps {
    token: string;
}

export default function ViewSuspense({ token }: IViewSuspenseProps) {
    const Element = useDynamic(token);
    return <>{Element}</>;
}
