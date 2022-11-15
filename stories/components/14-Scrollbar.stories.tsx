import React from 'react';

import { Scrollbar, DirectionKind } from 'mo/components';

export default {
    title: 'Scrollbar',
};

export const Basic = () => {
    const length = 150;
    return (
        <div>
            <h2>简述</h2>
            <p>Scrollbar 支持自定义滚动条</p>
            <h3>使用示例 尝试点击下方面板看看～</h3>
            <div
                style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr 1fr',
                    gap: '5px',
                }}
            >
                <div>
                    <h3>基础使用</h3>
                    <Scrollbar
                        style={{
                            width: 200,
                            height: 500,
                            border: '1px solid #ddd',
                        }}
                    >
                        {new Array(length).fill(1).map((_, idx) => (
                            <div key={idx}>{idx}</div>
                        ))}
                    </Scrollbar>
                </div>
                <div>
                    <h3>支持阴影</h3>
                    <Scrollbar
                        style={{
                            width: 200,
                            height: 500,
                            border: '1px solid #ddd',
                        }}
                        isShowShadow
                        inactiveHidden={false}
                    >
                        {new Array(length).fill(1).map((_, idx) => (
                            <div key={idx}>{idx}</div>
                        ))}
                    </Scrollbar>
                </div>
                <div>
                    <h3>支持水平展示</h3>
                    <Scrollbar
                        style={{
                            width: 500,
                            height: 200,
                            border: '1px solid #ddd',
                        }}
                        direction={DirectionKind.horizontal}
                    >
                        {new Array(length).fill(1).map((_, idx) => (
                            <div style={{ width: 100 }} key={idx}>
                                {idx}
                            </div>
                        ))}
                    </Scrollbar>
                </div>
            </div>
        </div>
    );
};
