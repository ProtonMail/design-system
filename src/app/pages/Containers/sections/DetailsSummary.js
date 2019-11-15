import React from 'react';
import { CodeExample } from '../../../components';

const DetailsSummary = () => (
    <>
        <h2>
            <code>details</code>/<code>summary</code>
        </h2>

        <div className="flex flex-spacebetween mb2 onmobile-flex-column">
            <div className="w49 pt0-5">
                <details>
                    <summary>General</summary>
                    <div className="mb1">Wow this is cool.</div>
                </details>
                <details>
                    <summary>Particular</summary>
                    <div className="mb1">Wow this is really cool.</div>
                </details>
                <details open>
                    <summary>Contacts</summary>
                    <div className="mb1">Wow, this is cool and already opened!</div>
                </details>
            </div>
            <div className="w49 aligncenter flex-self-vcenter">
                <CodeExample render={false}>
                    <details>
                        <summary>General</summary>
                        <div className="mb1">Wow this is cool.</div>
                    </details>
                    <details>
                        <summary>Particular</summary>
                        <div className="mb1">Wow this is really cool.</div>
                    </details>
                    <details open>
                        <summary>Contacts</summary>
                        <div className="mb1">Wow, this is cool and already opened!</div>
                    </details>
                </CodeExample>
            </div>
        </div>
    </>
);

export default DetailsSummary;
