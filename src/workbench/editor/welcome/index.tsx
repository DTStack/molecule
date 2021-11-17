import React from 'react';
import Logo from './logo';
import { prefixClaName } from 'mo/common/className';
import { useGetKeys } from './hooks';

export default function Welcome() {
    const keys = useGetKeys();

    return (
        <div className={prefixClaName('welcome')}>
            <Logo className="logo" />
            <h1 className="title">Molecule</h1>
            <div className="keybindings">
                <ul>
                    {keys.map((item) => {
                        return (
                            <li className="keys" key={item.id}>
                                <span>{item.name}</span>
                                <span>
                                    {item.keybindings.split('').join(' ')}
                                </span>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
}
