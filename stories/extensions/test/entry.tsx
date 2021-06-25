import React from 'react';
import './entry.scss';

export const Entry = () => {
    return (
        <div className="entry">
            <h1>molecule</h1>
            <dl>
                <dt>显示所有命令</dt>
                <dd> command + b</dd>
            </dl>
            <dl>
                <dt>打开文件或文件夹</dt>
                <dd> command + b</dd>
            </dl>
            <dl>
                <dt>打开最近文件</dt>
                <dd> command + b</dd>
            </dl>
            <dl>
                <dt>新的无标题文件</dt>
                <dd> command + b</dd>
            </dl>
        </div>
    );
};
