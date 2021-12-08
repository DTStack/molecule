import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Translate, { translate } from '@docusaurus/Translate';

import styles from './index.module.css';
import HomepageFeatures from '../components/HomepageFeatures';

function HomepageHeader() {
    const { siteConfig } = useDocusaurusContext();
    return (
        <header className={clsx('hero hero--primary', styles.heroBanner)}>
            <div className="container">
                <h1 className="hero__title">{siteConfig.title}</h1>
                <p className="hero__subtitle">
                    <Translate id="page.tagline">
                        {siteConfig.tagline}
                    </Translate>
                </p>
                <div className={styles.hero__buttons}>
                    <div className={styles.buttons} style={{ marginRight: 20 }}>
                        <Link
                            className="button button--secondary button--lg"
                            to="/docs/introduction"
                        >
                            <Translate id="page.quickStart">
                                Quick Start
                            </Translate>
                        </Link>
                    </div>
                    <div className={styles.buttons}>
                        <Link
                            className="button button--secondary button--lg"
                            to="https://dtstack.github.io/molecule-examples/"
                            style={{ width: 140 }}
                        >
                            <Translate id="page.preview" message="">
                                Preview
                            </Translate>
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default function Home() {
    const { siteConfig } = useDocusaurusContext();
    return (
        <Layout title={`${siteConfig.title}`} description={siteConfig.tagline}>
            <HomepageHeader />
            <main>
                <HomepageFeatures />
            </main>
        </Layout>
    );
}
