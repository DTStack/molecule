import * as React from 'react';
import './style.scss';

export function propsTable(props: any) {
    const { propDefinitions } = props;
    const propsFields = propDefinitions.map(
        ({ property, propType, required, description, defaultValue }: any) => {
            return (
                <tr key={property}>
                    <td>
                        {property}
                        {required ? <span style={{
                            color: '#ff3348',
                            marginLeft: '5px',
                        }}>*</span> : null}
                    </td>
                    <td>{description}</td>
                    <td>{propType}</td>
                    <td>{defaultValue}</td>
                </tr>
            );
        },
    );

    return (
        <table {...{ width: '90%' }}>
            <thead>
                <tr>
                    <th>参数</th>
                    <th>说明</th>
                    <th>类型</th>
                    <th>默认值</th>
                </tr>
            </thead>
            <tbody>{propsFields}</tbody>
        </table>
    );
}
