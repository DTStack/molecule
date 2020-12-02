import './style.scss';
import * as React from 'react';
import { classNames, prefixClaName } from 'mo/common/className';

import TextArea from './TextArea';
import { LiteralUnion } from 'mo/common/type';

type SizeType = 'normal' | 'large'
export interface InputProps {
  disabled?: boolean;
  size?: SizeType;
  type?: LiteralUnion<
    | 'button'
    | 'checkbox'
    | 'search'
    | 'submit'
    | 'text',
    string
  >;
  placeholder?: string;
  value?: string;
  readonly defaultValue?: string;
  readonly className?: string;
  readonly onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
  readonly onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  readonly onPressEnter?: React.KeyboardEventHandler<HTMLInputElement>;
  readonly onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  readonly onChange?: (e: any) => void;
}

export function fixControlledValue<T>(value: T) {
  if (typeof value === 'undefined' || value === null) return '';
  return value;
}

export function resolveOnChange(
  target: HTMLInputElement | HTMLTextAreaElement,
  e:
    | React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
    | React.MouseEvent<HTMLElement, MouseEvent>,
  onChange?: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void,
) {
  if (onChange) {
    let event = e;
    if (e.type === 'click') {
      event = Object.create(e);
      event.target = target;
      event.currentTarget = target;
      const originalInputValue = target.value;
      // change target ref value cause e.target.value should be '' when clear input
      target.value = '';
      onChange(event as React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>);
      // reset target ref value
      target.value = originalInputValue;
      return;
    }
    onChange(event as React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>);
  }
}

export function getInputClassName(
  prefixCls: string,
  size?: SizeType,
  disabled?: boolean,
) {
  return classNames(prefixCls, size === 'normal' ? [`${prefixCls}--normal`] : '', size === 'large' ? [`${prefixCls}--lg`] : '',  disabled ? [`${prefixCls}--disabled`] : '');
}

export interface InputState {
  value: any;
  prevValue: any;
}

class Input extends React.Component<InputProps, InputState> {

//   static Search: typeof Search;
  static TextArea: typeof TextArea;

  static defaultProps = {
    type: 'text',
  };

  input: any;

  constructor(props: InputProps) {
    super(props);
    const value = typeof props.value === 'undefined' ? props.defaultValue : props.value;
    this.state = {
      value,
      prevValue: props.value,
    };
  }

  static getDerivedStateFromProps(nextProps: InputProps, { prevValue }: InputState) {
    const newState: Partial<InputState> = { prevValue: nextProps.value };
    if (nextProps.value !== undefined || prevValue !== nextProps.value) {
      newState.value = nextProps.value;
    }
    return newState;
  }

  saveInput = (input: HTMLInputElement) => {
    this.input = input;
  };

  setValue(value: string, callback?: () => void) {
    if (this.props.value === undefined) {
      this.setState({ value }, callback);
    } else {
      callback?.();
    }
  }

  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setValue(e.target.value);
    resolveOnChange(this.input, e, this.props.onChange);
  };
  
  handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const { onPressEnter, onKeyDown } = this.props;
    if (e.keyCode === 13 && onPressEnter) {
      onPressEnter(e);
    }
    onKeyDown?.(e);
  };

  render() {
    const { className, size = 'normal', disabled = false, placeholder, onFocus, onBlur } = this.props
    return (
        <input
        placeholder={placeholder}
        onChange={this.handleChange}
        onFocus={e => onFocus?.(e)}
        onBlur={e => onBlur?.(e)}
        onKeyDown={this.handleKeyDown}
        className={classNames(
            className,
            getInputClassName(prefixClaName('input'), size, disabled),
        )}
        ref={this.saveInput}
        />
    );
  }
}

export default Input;