import { TextAreaProps as RcTextAreaProps } from 'rc-textarea';
export interface TextAreaProps extends RcTextAreaProps {
    showCount?: boolean;
    maxLength?: number;
    onChange?: (e: any) => void;
}
export declare const TextArea: ({ showCount, maxLength, className, style, onChange, ...props }: TextAreaProps) => JSX.Element;
