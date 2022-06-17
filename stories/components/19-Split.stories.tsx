import React, { useState } from 'react';

import SplitPane, { Pane } from 'mo/components/split';
import { Button } from '@storybook/react/demo';

export default {
    title: 'Split',
};

const layoutCSS = {
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
};
export const Basic = () => {
    const [sizes, setSizes] = useState<(number | string)[]>([
        50,
        '10%',
        'auto',
    ]);
    const [allowResize, setAllowResize] = useState<boolean | boolean[]>(true);
    return (
        <div style={{ height: 500 }}>
            <h2>简述</h2>
            <p>Split 可以拖拽修改面板大小</p>
            <h3>使用示例 尝试点击下方面板看看～</h3>
            <Button onClick={() => setAllowResize(false)}>禁止 resize</Button>
            <Button onClick={() => setAllowResize(true)}>启用 resize</Button>
            <Button onClick={() => setAllowResize([false, false, true])}>
                禁用部分 resize
            </Button>
            <SplitPane
                sizes={sizes}
                onChange={(sizes) => setSizes(sizes)}
                allowResize={allowResize}
            >
                <div
                    style={{
                        ...layoutCSS,
                        background: '#ddd',
                    }}
                >
                    少年不识愁滋味
                </div>
                <div style={{ ...layoutCSS, background: '#d9d9d9' }}>
                    爱上层楼。爱上层楼
                </div>
                <div style={{ ...layoutCSS, background: '#d7d7d7' }}>
                    为赋新词强说愁
                </div>
            </SplitPane>
        </div>
    );
};

export const Horizontal = () => {
    const [sizes, setSizes] = useState<(number | string)[]>(['50%', '50%']);
    return (
        <div style={{ height: 500 }}>
            <h2>简述</h2>
            <p>Split 支持 horizontal 属性</p>
            <h3>使用示例 尝试点击下方面板看看～</h3>
            <SplitPane
                split="horizontal"
                sizes={sizes}
                allowResize={[true, false]}
                onChange={(sizes) => setSizes(sizes)}
            >
                <div style={{ ...layoutCSS, background: '#ddd' }}>
                    把吴钩看了，阑干拍遍
                </div>
                <div style={{ ...layoutCSS, background: '#d9d9d9' }}>
                    无人会，登临意。
                </div>
            </SplitPane>
        </div>
    );
};

export const ComplexLayout = () => {
    const [sizes, setSizes] = useState<(number | string)[]>(['50%', '50%']);
    const [sizes1, setSizes1] = useState<(number | string)[]>(['50%', '50%']);
    const [sizes2, setSizes2] = useState<(number | string)[]>(['50%', '50%']);
    return (
        <div style={{ height: 500 }}>
            <h2>简述</h2>
            <p>Split 支持复杂布局</p>
            <h3>使用示例 尝试点击下方面板看看～</h3>
            <SplitPane
                split="horizontal"
                sizes={sizes}
                onChange={(sizes) => setSizes(sizes)}
            >
                <SplitPane sizes={sizes1} onChange={(s) => setSizes1(s)}>
                    <div
                        style={{
                            ...layoutCSS,
                            background: '#ddd',
                        }}
                    >
                        Second Quadrant
                    </div>
                    <div style={{ ...layoutCSS, background: '#d9d9d9' }}>
                        First Quadrant
                    </div>
                </SplitPane>
                <SplitPane sizes={sizes2} onChange={(s) => setSizes2(s)}>
                    <div style={{ ...layoutCSS, background: '#d7d7d7' }}>
                        Third Quadrant
                    </div>
                    <div style={{ ...layoutCSS, background: '#d1d1d1' }}>
                        Fourth Quadrant
                    </div>
                </SplitPane>
            </SplitPane>
        </div>
    );
};

export const MaxSizeAndMinSize = () => {
    const [sizes, setSizes] = useState<(number | string)[]>(['50%', '50%']);
    return (
        <div style={{ height: 500 }}>
            <h2>简述</h2>
            <p>Split 支持通过 Pane 组件设置最大尺寸和最小尺寸</p>
            <h3>使用示例 尝试点击下方面板看看～</h3>
            <SplitPane
                split="horizontal"
                sizes={sizes}
                onChange={(sizes) => setSizes(sizes)}
            >
                <Pane minSize={100} maxSize="60%">
                    <div style={{ ...layoutCSS, background: '#ddd' }}>
                        千古江山，英雄无觅，孙仲谋处
                    </div>
                </Pane>
                <div style={{ ...layoutCSS, background: '#d9d9d9' }}>
                    元嘉草草，封狼居胥，赢得仓皇北顾。
                </div>
            </SplitPane>
        </div>
    );
};
