import React from 'react';
import Layout from '@theme/Layout';
import styles from './index.module.css';

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
                <span>source</span>
            </a>
        </div>
        <div>{desc}</div>
    </div>
);

export default function Case() {
    const data = [
        {
            name: 'molecule-demo',
            sourceUrl:
                'https://github.com/DTStack/molecule-examples/tree/main/packages/molecule-demo',
            previewUrl: 'https://dtstack.github.io/molecule-examples/',
            desc: 'The examples showing how to integrate or use the Molecule.',
        },
        {
            name: 'online-code-formatting',
            sourceUrl: 'https://github.com/wewoor/online-code-formatting',
            previewUrl: 'https://wewoor.github.io/online-code-formatting/',
            desc: 'A simple online code formatting tool built with Molecule.',
        },
        {
            name: 'monaco-sql-languages',
            sourceUrl: 'https://github.com/DTStack/monaco-sql-languages',
            previewUrl: 'https://dtstack.github.io/monaco-sql-languages/',
            desc: 'SQL languages for monaco-editor.',
        },
        {
            name: 'online-markdown-preview',
            sourceUrl: 'https://github.com/kiwiwong/online-markdown-preview',
            previewUrl: 'https://kiwiwong.github.io/online-markdown-preview/',
            desc: 'A simple online code formatting tool built with Molecule.',
        },
    ];
    return (
        <Layout>
            <div style={{ padding: 64 }}>
                {data.map((obj) => (
                    <CasePanel key={obj.name} {...obj} />
                ))}
            </div>
        </Layout>
    );
}
