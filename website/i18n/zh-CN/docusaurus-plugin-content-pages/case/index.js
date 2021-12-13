import React from 'react';
import Layout from '@theme/Layout';
import styles from './index.module.css';

const data = [
    {
        name: 'molecule-demo',
        sourceUrl:
            'https://github.com/DTStack/molecule-examples/tree/main/packages/molecule-demo',
        previewUrl: 'https://dtstack.github.io/molecule-examples/',
        desc: '展示如何使用 Molecule 的 demo 项目',
    },
    {
        name: 'online-code-formatting',
        sourceUrl: 'https://github.com/wewoor/online-code-formatting',
        previewUrl: 'https://wewoor.github.io/online-code-formatting/',
        desc: '使用 Molecule 开发的一个简单的在线代码格式化工具',
    },
    {
        name: 'monaco-sql-languages',
        sourceUrl: 'https://github.com/DTStack/monaco-sql-languages',
        previewUrl: 'https://dtstack.github.io/monaco-sql-languages/',
        desc: '这是 Monaco Editor 的一个 SQL Languages 项目',
    },
    {
        name: 'online-markdown-preview',
        sourceUrl: 'https://github.com/kiwiwong/online-markdown-preview',
        previewUrl: 'https://kiwiwong.github.io/online-markdown-preview/',
        desc: '使用 Molecule 开发的一个简单的 Markdown 在线编辑预览工具',
    },
];

const CasePanel = ({ name, sourceUrl, previewUrl, desc }) => (
    <div className={styles.panel}>
        <div>
            <a
                href={previewUrl}
                className={styles.name}
                target="_blank"
                rel="noreferrer"
            >
                {name}
            </a>
        </div>
        <div style={{ marginBottom: '8px' }}>
            <a
                href={sourceUrl}
                target="_blank"
                rel="noreferrer"
                style={{ color: 'var(--ifm-color-primary)' }}
            >
                <span className={styles.icon}></span>
                <span>源码</span>
            </a>
        </div>
        <div>{desc}</div>
    </div>
);

export default function Case() {
    return (
        <Layout>
            <div className={styles['panel-wrapper']}>
                {data.map((obj) => (
                    <CasePanel key={obj.name} {...obj} />
                ))}
            </div>
        </Layout>
    );
}
