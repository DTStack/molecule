import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

import Translate, { translate } from '@docusaurus/Translate';

const FeatureList = [
    {
        title: translate({ id: 'page.hero.first', message: 'Easy to Use' }),
        Svg: require('../../static/img/easyToUse.svg').default,
        description: (
            <>
                <Translate id="page.hero.first.desc">
                    The Molecule has a majority of built-in components and
                    services which could combine these as your like, and achieve
                    the complex interactive through event-emit.
                </Translate>
            </>
        ),
    },
    {
        title: translate({ id: 'page.hero.second', message: 'Extensible' }),
        Svg: require('../../static/img/extensible.svg').default,
        description: (
            <>
                <Translate id="page.hero.second.desc">
                    The Molecule could enrich the functionality through
                    extensions. Besides, the Molecule also support some
                    extensions from VSCode extensions market.
                </Translate>
            </>
        ),
    },
    {
        title: translate({
            id: 'page.hero.third',
            message: 'Powered by React',
        }),
        Svg: require('../../static/img/react.svg').default,
        description: (
            <>
                <Translate id="page.hero.third.desc">
                    The Molecule a UI framework which is developed in React and
                    associated with MVC pattern. It only export ES modules for
                    using in React Project.
                </Translate>
            </>
        ),
    },
];

function Feature({ Svg, title, description }) {
    return (
        <div className={clsx('col col--4')}>
            <div className="text--center">
                <Svg className={styles.featureSvg} alt={title} />
            </div>
            <div className="text--center padding-horiz--md">
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </div>
    );
}

export default function HomepageFeatures() {
    return (
        <section className={styles.features}>
            <div className="container">
                <div className="row">
                    {FeatureList.map((props, idx) => (
                        <Feature key={idx} {...props} />
                    ))}
                </div>
            </div>
        </section>
    );
}
