import './style.scss';
import * as React from 'react';
import { prefixClaName, classNames } from 'mo/common/className';

interface IInputBox {
    readonly autoSelect?: boolean;
    readonly autoFocus?: boolean;
    readonly children?: React.ReactNode;
    readonly style?: React.CSSProperties;
    readonly bsStyle?: 'success' | 'warning' | 'error';
    readonly flexibleHeight?: boolean;
    readonly id?: string;
    readonly placeholder?: string;
    readonly type?: string;
    readonly value?: string;
    readonly onChange?: (value: string | number) => void;
    readonly onBlur?: (e: Event) => void;
    readonly onKeyPress?: (
        keyCode: number,
        keyChar: number | string,
        key: number
    ) => void;
    readonly onFocus?: (e: Event) => void;
}

export default class InputBox extends React.Component<IInputBox> {
    private autoSelected: boolean;
    private id: string | undefined;

    constructor(props: IInputBox) {
        super(props);
        this.autoSelected = false;
        this.id = this.props.id;
    }

    componentWillUnmount() {
        this.autoSelected = false;
    }

    getStyleClass() {
        let bsStyle = this.props.bsStyle;

        return classNames(
            bsStyle === 'success' ? 'has-success' : '',
            bsStyle === 'warning' ? 'has-warning' : '',
            bsStyle === 'error' ? 'has-error' : ''
        );
    }

    renderFlexibleHeight() {
        const { flexibleHeight } = this.props;
        if (flexibleHeight) {
            return (
                <textarea
                    ref={this.onRef.bind(this)}
                    onKeyPress={this.onKeyPress.bind(this)}
                    onBlur={this.onBlur.bind(this)}
                    onFocus={this.onFocus.bind(this)}
                    onChange={this.onChange.bind(this)}
                    placeholder={this.props.placeholder}
                    className={classNames('input')}
                    autoCorrect="off"
                    autoCapitalize="off"
                    spellCheck="false"
                >
                    {this.props.value}
                </textarea>
            );
        } else {
            return (
                <input
                    ref={this.onRef.bind(this)}
                    onKeyPress={this.onKeyPress.bind(this)}
                    onBlur={this.onBlur.bind(this)}
                    onFocus={this.onFocus.bind(this)}
                    onChange={this.onChange.bind(this)}
                    value={this.props.value}
                    placeholder={this.props.placeholder}
                    wrap="off"
                    className={classNames('input')}
                    type={this.props.type}
                    autoCorrect="off"
                    autoCapitalize="off"
                    spellCheck="false"
                />
            );
        }
    }

    /**
     * onRef gets the ref of the input/textarea element after rendering or componentUnMount
     */
    onRef(ref) {
        if (ref && this.props.autoFocus) {
            ref.focus();
        }
        //  only autoselect once
        if (
            ref &&
            this.props.autoSelect &&
            ref.setSelectionRange &&
            this.autoSelected === false
        ) {
            ref.setSelectionRange(0, this.getValueFromElement(ref).length);
            this.autoSelected = true;
        }
    }

    /**
     * Returns the value from the element or empty string.
     */
    getValueFromElement(element) {
        let value = '';
        // get value
        if (element.type === 'text') {
            value = element.value;
        } else if (element.type === 'textarea') {
            value = element.innerText;
        }

        return value;
    }

    onChange(e) {
        e.preventDefault();
        let value;
        value = this.getValueFromElement(e.target);
        if (this.props.onChange) {
            this.props.onChange(value);
        }
    }

    onKeyPress(e) {
        this.props.onKeyPress?.(e.keyCode, e.keyChar, e.key);
    }

    onBlur(e) {
        this.props.onBlur?.(e);
    }

    onFocus(e) {
        e.preventDefault();

        if (this.props.onFocus) {
            this.props.onFocus(e);
        }
    }

    render() {
        const { style } = this.props;
        return (
            <div
                className={classNames(prefixClaName('inputbox'), 'idle')}
                style={style}
            >
                <div className="wrapper">{this.renderFlexibleHeight()}</div>
            </div>
        );
    }
}
