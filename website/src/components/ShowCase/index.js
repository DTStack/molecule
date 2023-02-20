import React from 'react';
import Layout from '@theme/Layout';
import styles from './index.module.css';

const data = [
    {
        name: 'molecule-demo',
        sourceUrl:
            'https://github.com/DTStack/molecule-examples/tree/main/packages/molecule-demo',
        previewUrl: 'https://dtstack.github.io/molecule-examples/',
        cnDesc: '展示如何使用 Molecule 的 demo 项目',
        enDesc: 'The examples showing how to integrate or use the Molecule.',
    },
    {
        name: 'Taier',
        sourceUrl: 'https://github.com/DTStack/Taier',
        previewUrl: 'https://dtstack.github.io/taier/',
        cnDesc: '一个分布式调度系统',
        enDesc: 'A Distributed dispatching system',
    },
    {
        name: 'online-code-formatting',
        sourceUrl: 'https://github.com/wewoor/online-code-formatting',
        previewUrl: 'https://wewoor.github.io/prettier-studio/',
        cnDesc: '使用 Molecule 开发的一个简单的在线代码格式化工具',
        enDesc: 'A simple online code formatting tool built with Molecule.',
    },
    {
        name: 'monaco-sql-languages',
        sourceUrl: 'https://github.com/DTStack/monaco-sql-languages',
        previewUrl: 'https://dtstack.github.io/monaco-sql-languages/',
        cnDesc: '这是 Monaco Editor 的一个 SQL Languages 项目',
        enDesc: 'This is a SQL Languages project for Monaco Editor.',
    },
    {
        name: 'online-markdown-preview',
        sourceUrl: 'https://github.com/kiwiwong/online-markdown-preview',
        previewUrl: 'https://kiwiwong.github.io/online-markdown-preview/',
        cnDesc: '使用 Molecule 开发的一个简单的 Markdown 在线编辑预览工具',
        enDesc: 'A simple online markdown preview tool built with Molecule.',
    },
];

const CasePanel = ({
    name,
    sourceUrl,
    previewUrl,
    cnDesc,
    enDesc,
    language,
}) => (
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
                <span>{language === 'zh-CN' ? '源码' : 'source'}</span>
            </a>
        </div>
        <div>{language === 'zh-CN' ? cnDesc : enDesc}</div>
    </div>
);

export default function ShowCase({ language = 'zh-CN' }) {
    return (
        <Layout>
            <div className={styles['panel-wrapper']}>
                {data.map((obj) => (
                    <CasePanel {...obj} key={obj.name} language={language} />
                ))}
            </div>
        </Layout>
    );
}
