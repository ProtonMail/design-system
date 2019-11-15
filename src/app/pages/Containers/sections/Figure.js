import React from 'react';
import Logo from 'design-system/assets/img/design-system-website/Protonmail_logo.svg';
import { CodeExample } from '../../../components';

const Figure = () => (
    <>
        <h2>
            <code>figure</code>/<code>figcaption</code>
        </h2>

        <p>
            These tags are CSS-reseted, if you want to add <code>padding</code>, use helpers.
        </p>

        <div className="flex flex-spacebetween mb2 onmobile-flex-column">
            <div className="w49 pt0-5">
                <figure role="group">
                    <img src={Logo} width="200" alt="Protonmail" />
                    <figcaption>This is the nice logo of of ProtonMail</figcaption>
                </figure>
            </div>
            <div className="w49 aligncenter flex-self-vcenter">
                <CodeExample render={false}>
                    <figure role="group">
                        <img src={Logo} width="200" alt="Protonmail" />
                        <figcaption>This is the nice logo of of ProtonMail</figcaption>
                    </figure>
                </CodeExample>
            </div>
        </div>
    </>
);

export default Figure;
