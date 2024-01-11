import { classNames } from 'mo/client/classNames';

import variables from './index.scss';

export interface IProgressProps {
    active?: boolean;
}

export default function Progress({ active }: IProgressProps) {
    return (
        <div className={classNames(variables.progress, active && variables.active)} role="progressbar">
            <div className={variables.bit} />
        </div>
    );
}
