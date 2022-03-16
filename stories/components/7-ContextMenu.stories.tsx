import React from 'react';
import { useContextMenu } from '@dtinsight/molecule/ui';
import { useEffect } from 'react';
import '../demo.scss';

export const ContextMenuDemo = () => {
    useEffect(() => {
        const contextView1 = useContextMenu({
            anchor: document.getElementById('topLeft'),
            render() {
                return (
                    <ul>
                        <li>Item1</li>
                        <li>Item2</li>
                    </ul>
                );
            },
        });

        const contextView2 = useContextMenu({
            anchor: document.getElementById('topRight'),
            render() {
                return (
                    <ul>
                        <li>Item Div</li>
                        <li>Item Div</li>
                        <li>Item Div</li>
                        <li>Item Div</li>
                        <li>Item Div</li>
                    </ul>
                );
            },
        });

        const contextView3 = useContextMenu({
            anchor: document.getElementById('bottomLeft'),
            render() {
                return (
                    <ul>
                        <li>Item Div</li>
                        <li>Item Div</li>
                        <li>Item Div</li>
                        <li>Item Div</li>
                        <li>Item Div</li>
                    </ul>
                );
            },
        });

        const contextView4 = useContextMenu({
            anchor: document.getElementById('bottomRight'),
            render() {
                return (
                    <ul>
                        <li>Item Div</li>
                        <li>Item Div</li>
                        <li>Item Div</li>
                        <li>Item Div</li>
                        <li>Item Div</li>
                    </ul>
                );
            },
        });

        return function cleanup() {
            contextView1?.dispose();
            contextView2?.dispose();
            contextView3?.dispose();
            contextView4?.dispose();
        };
    });

    return (
        <div className="story-wrapper">
            <div
                id="topLeft"
                style={{
                    position: 'absolute',
                    width: 200,
                    height: 200,
                    top: 0,
                    left: 0,
                    background: '#dddddd',
                }}
            >
                Right Click me!
            </div>
            <div
                id="topRight"
                style={{
                    position: 'absolute',
                    width: 200,
                    height: 200,
                    top: 0,
                    right: 0,
                    background: '#dddddd',
                }}
            >
                Right Click me!
            </div>
            <div
                id="bottomLeft"
                style={{
                    position: 'absolute',
                    width: 200,
                    height: 200,
                    left: 0,
                    bottom: 10,
                    background: '#dddddd',
                }}
            >
                Right Click me!
            </div>
            <div
                id="bottomRight"
                style={{
                    position: 'absolute',
                    width: 200,
                    height: 200,
                    right: 0,
                    bottom: 10,
                    background: '#dddddd',
                }}
            >
                Right Click me!
            </div>
        </div>
    );
};

ContextMenuDemo.story = {
    name: 'Basic Demo',
};

export default {
    title: 'ContextMenu',
    component: ContextMenuDemo,
};
