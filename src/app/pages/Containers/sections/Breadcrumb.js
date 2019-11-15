import React from 'react';
import { CodeExample } from '../../../components';

const Breadcrumb = () => (
    <>
        <h2>“Domain” breadcrumb</h2>

        <div className="flex flex-spacebetween mb2 onmobile-flex-column">
            <div className="w49">
                <ul className="breadcrumb-container unstyled inline-flex pl0-5 pr0-5">
                    <li className="breadcrumb-item">
                        <button type="button" className="breadcrumb-button">
                            Domain
                        </button>
                    </li>
                    <li className="breadcrumb-item">
                        <button type="button" className="breadcrumb-button">
                            Verify
                        </button>
                    </li>
                    <li className="breadcrumb-item">
                        <button type="button" className="breadcrumb-button" disabled aria-current="step">
                            Addresses
                        </button>
                    </li>
                    <li className="breadcrumb-item">
                        <button type="button" className="breadcrumb-button">
                            MX
                        </button>
                    </li>
                    <li className="breadcrumb-item">
                        <button type="button" className="breadcrumb-button">
                            SPF
                        </button>
                    </li>
                    <li className="breadcrumb-item">
                        <button type="button" className="breadcrumb-button">
                            DKIM
                        </button>
                    </li>
                    <li className="breadcrumb-item">
                        <button type="button" className="breadcrumb-button">
                            DMARC
                        </button>
                    </li>
                </ul>
            </div>
            <div className="w49 aligncenter flex-self-vcenter">
                <CodeExample render={false}>
                    <ul className="breadcrumb-container unstyled inline-flex pl0-5 pr0-5">
                        <li className="breadcrumb-item">
                            <button type="button" className="breadcrumb-button">
                                Domain
                            </button>
                        </li>
                        <li className="breadcrumb-item">
                            <button type="button" className="breadcrumb-button">
                                Verify
                            </button>
                        </li>
                        <li className="breadcrumb-item">
                            <button type="button" className="breadcrumb-button" disabled aria-current="step">
                                Addresses
                            </button>
                        </li>
                    </ul>
                </CodeExample>
            </div>
        </div>
    </>
);

export default Breadcrumb;
