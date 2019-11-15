import React from 'react';
import { CodeExample } from '../../../components';

const InformationPanels = () => (
    <>
        <h2>Information panels</h2>

        <div className="flex flex-spacebetween mb2 onmobile-flex-column">
            <div className="w49">
                <div className="flex flex-spacebetween">
                    <div className="w45">
                        <div className="information-panel bordered-container relative">
                            <div className="information-panel-image flex bg-global-light">
                                <svg
                                    viewBox="0 0 16 16"
                                    className="icon-16p mauto"
                                    role="img"
                                    aria-hidden="true"
                                    focusable="false"
                                >
                                    <use xlinkHref="#shape-contacts-group-people"></use>
                                </svg>
                            </div>
                            <div className="information-panel-content">
                                <p>
                                    Go to the User Settings if you want to assign and manage users to your custom
                                    Domain.
                                </p>
                                <p className="aligncenter">
                                    <button type="button" className="pm-button-blue">
                                        Yipikai!
                                    </button>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="w45">
                        <div className="information-panel bordered-container relative">
                            <div className="information-panel-image flex bg-global-light">
                                <svg
                                    viewBox="0 0 16 16"
                                    className="icon-16p mauto"
                                    role="img"
                                    aria-hidden="true"
                                    focusable="false"
                                >
                                    <use xlinkHref="#shape-email-address"></use>
                                </svg>
                            </div>
                            <div className="information-panel-content">
                                <p>
                                    Go to the User Settings if you want to assign and manage users to your custom
                                    Domain.
                                </p>
                                <p className="aligncenter">
                                    <button type="button" className="pm-button-blue">
                                        Wouhou!
                                    </button>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w49 aligncenter flex-self-vcenter">
                <CodeExample render={false} tagsToSimplify={['svg']}>
                    <div className="information-panel bordered-container relative">
                        <div className="information-panel-image flex bg-global-light">
                            <svg
                                viewBox="0 0 16 16"
                                className="icon-16p mauto"
                                role="img"
                                aria-hidden="true"
                                focusable="false"
                            >
                                <use xlinkHref="#shape-email-address"></use>
                            </svg>
                        </div>
                        <div className="information-panel-content">
                            <p>Go to the User Settings if you want to assign and manage users to your custom Domain.</p>
                            <p className="aligncenter">
                                <button type="button" className="pm-button-blue">
                                    Wouhou!
                                </button>
                            </p>
                        </div>
                    </div>
                </CodeExample>
            </div>
        </div>
    </>
);
export default InformationPanels;
