import React from 'react';
import { Copy } from 'react-components';
import { CodeExample } from '../components';

const Badges = () => (
    <table className="pm-simple-table noborder border-collapse">
        <caption class="sr-only">Status/Labels</caption>
        <thead>
            <tr>
                <th scope="col">Example</th>
                <th scope="col">Code</th>
                <th scope="col">Copy to clipboard</th>
            </tr>
        </thead>
        <tbody>
            {[
                { color: 'success', message: 'active' },
                { color: 'blue', message: 'blue' },
                { color: 'green', message: 'green' },
                { color: 'primary', message: 'primary color' },
                { color: 'grey', message: 'origin' },
                { color: 'warning', message: 'disabled' },
                { color: 'error', message: 'error' }
            ].map(({ color, message }) => (
                <tr key={color}>
                    <td>
                        <span className={`badgeLabel-${color}`}>{message}</span>
                    </td>
                    <td>
                        <CodeExample render={false}>
                            <span className={`badgeLabel-${color}`}>{message}</span>
                            {color === 'primary' && <span className="badgeLabel">{message}</span>}
                        </CodeExample>
                    </td>
                    <td>
                        <Copy value={`<span class="badgeLabel-${color}>${message}</span>`} />
                    </td>
                </tr>
            ))}
        </tbody>
    </table>
);

export default Badges;
