import React from 'react';
import { CustomScrollbars, Tabs } from './sections';

const Containers = () => (
    <>
        <div id="custom-scroll" className="container-section-sticky container-section-sticky--fullwidth">
            <CustomScrollbars />
        </div>

        <div id="tabs" className="container-section-sticky container-section-sticky--fullwidth">
            <Tabs />
        </div>

        <div id="wizard" className="container-section-sticky container-section-sticky--fullwidth">
            <h2>Wizard</h2>

            <div className="flex flex-spacebetween mb2 onmobile-flex-column">
                <div className="w49 pt0-5">
                    <div className="wizard-container">
                        <ul className="wizard unstyled flex flex-nowrap flex-spacebetween">
                            <li className="wizard-item is-complete">
                                <span className="wizard-marker"></span>
                                <span className="wizard-item-inner">Destroy NY</span>
                            </li>
                            <li className="wizard-item" aria-current="step">
                                <span className="wizard-marker"></span>
                                <span className="wizard-item-inner">Destroy Sokovia</span>
                            </li>
                            <li className="wizard-item">
                                <span className="wizard-marker"></span>
                                <span className="wizard-item-inner">Civil War</span>
                            </li>
                            <li className="wizard-item">
                                <span className="wizard-marker"></span>
                                <span className="wizard-item-inner">Endgame</span>
                            </li>
                        </ul>
                    </div>
                    <div className="flex flex-spacebetween mb1">
                        <button className="pm-button js-previousStepWizard" data-action="prev">
                            Previous step
                        </button>
                        <button className="pm-button js-nextStepWizard" data-action="next">
                            Next step
                        </button>
                    </div>
                    <ul>
                        <li>
                            When a step is the current one, add <code>aria-current="step"</code>.
                        </li>
                        <li>
                            When an element is completed, add <code>is-complete</code> class to it.
                        </li>
                        <li>
                            The last step can also have <code>is-complete</code> class on it (not displayed here but
                            case is possible).
                        </li>
                        <li>
                            You may use the modifier <code>wizard-container--noTextDisplayed</code> on{' '}
                            <code>wizard-container</code> to have the current step not displayed.
                        </li>
                        <li>Buttons are just provided to test :)</li>
                    </ul>
                </div>
                <div className="w49 aligncenter flex-self-vcenter">
                    <pre className="language-markup">
                        <code>
                            &lt;div <strong>className="wizard-container"</strong>&gt; &lt;ul{' '}
                            <strong>className="wizard unstyled flex flex-nowrap flex-spacebetween"</strong>&gt; &lt;li
                            className="wizard-item <strong>is-complete</strong>"&gt; &lt;span
                            className="wizard-marker"&gt;&lt;/span&gt; &lt;span className="wizard-item-inner"&gt;Destroy
                            NY&lt;/span&gt; &lt;/li&gt; &lt;li{' '}
                            <strong>className="wizard-item" aria-current="step"</strong>&gt; &lt;span
                            className="wizard-marker"&gt;&lt;/span&gt; &lt;span className="wizard-item-inner"&gt;Destroy
                            Sokovia&lt;/span&gt; &lt;/li&gt; &lt;li <strong>className="wizard-item"</strong>&gt;
                            &lt;span className="wizard-marker"&gt;&lt;/span&gt; &lt;span
                            className="wizard-item-inner"&gt;Civil War&lt;/span&gt; &lt;/li&gt; &lt;li
                            className="wizard-item"&gt; &lt;span className="wizard-marker"&gt;&lt;/span&gt; &lt;span
                            className="wizard-item-inner"&gt;Endgame&lt;/span&gt; &lt;/li&gt; &lt;/ul&gt; &lt;/div&gt;
                        </code>
                    </pre>
                </div>
            </div>
        </div>

        <div id="containers" className="container-section-sticky container-section-sticky--fullwidth">
            <h2>Container with border/shadow</h2>

            <div className="flex flex-spacebetween mb2 onmobile-flex-column">
                <div className="w49 pt0-5">
                    <div className="bordered-container">
                        <div className="p1">Here a classic container. For form, etc.</div>
                    </div>
                </div>
                <div className="w49 aligncenter flex-self-vcenter">
                    <pre className="language-markup">
                        <code>
                            &lt;div className="bordered-container"&gt; &lt;div className="p1"&gt; Here a classic
                            container. For form, etc. &lt;/div&gt; &lt;/div&gt;
                        </code>
                    </pre>
                </div>
            </div>

            <div className="flex flex-spacebetween mb2 onmobile-flex-column">
                <div className="w49">
                    <div className="bordered-container p1 mt0-5">
                        This container has no padding/margin by default. You have to add them.
                        <div className="bordered-container p1 mt1">It can be nested</div>
                        <div className="bordered-container p1 mt1">several times</div>
                    </div>
                </div>
                <div className="w49 aligncenter flex-self-vcenter">
                    <pre className="language-markup">
                        <code>
                            &lt;div className="bordered-container p1 mt0-5"&gt; This container has no padding/margin by
                            default. You have to add them. &lt;div className="bordered-container p1 mt1"&gt; It can be
                            nested &lt;/div&gt; &lt;div className="bordered-container p1 mt1"&gt; several times
                            &lt;/div&gt; &lt;/div&gt;
                        </code>
                    </pre>
                </div>
            </div>

            <div className="flex flex-spacebetween mb2 onmobile-flex-column">
                <div className="w49 pt0-5">
                    <div className="border-bottom">
                        <div className="p1">The same container, but only with bottom border.</div>
                    </div>
                </div>
                <div className="w49 aligncenter flex-self-vcenter">
                    <pre className="language-markup">
                        <code>
                            &lt;div className="border-bottom"&gt; &lt;div className="p1"&gt; The same container, but
                            only with bottom border. &lt;/div&gt; &lt;/div&gt;
                        </code>
                    </pre>
                </div>
            </div>

            <div className="flex flex-spacebetween mb2 onmobile-flex-column">
                <div className="w49 pt0-5">
                    <div className="border-bottom border-bottom--dashed">
                        <div className="p1">The same container with the same bottom border, but dashed.</div>
                    </div>
                </div>
                <div className="w49 aligncenter flex-self-vcenter">
                    <pre className="language-markup">
                        <code>
                            &lt;div className="border-bottom border-bottom--dashed"&gt; &lt;div className="p1"&gt; The
                            same container with the same bottom border, but dashed. &lt;/div&gt; &lt;/div&gt;
                        </code>
                    </pre>
                </div>
            </div>

            <div className="flex flex-spacebetween mb2 onmobile-flex-column">
                <div className="w49 pt0-5">
                    <div className="bordered">
                        <div className="p1">
                            Here a classic container without border radius. For special cases, etc.
                        </div>
                    </div>
                </div>
                <div className="w49 aligncenter flex-self-vcenter">
                    <pre className="language-markup">
                        <code>
                            &lt;div className="bordered"&gt; &lt;div className="p1"&gt; Here a classic container without
                            border radius. For special cases, etc. &lt;/div&gt; &lt;/div&gt;
                        </code>
                    </pre>
                </div>
            </div>

            <div className="flex flex-spacebetween mb2 onmobile-flex-column">
                <div className="w49 pt0-5">
                    <div className="dashed">
                        <div className="p1">Here a classic container without border radius, with dashed border.</div>
                    </div>
                </div>
                <div className="w49 aligncenter flex-self-vcenter">
                    <pre className="language-markup">
                        <code>
                            &lt;div className="dashed"&gt; &lt;div className="p1"&gt; Here a classic container without
                            border radius, with dashed border. &lt;/div&gt; &lt;/div&gt;
                        </code>
                    </pre>
                </div>
            </div>

            <div className="flex flex-spacebetween mb2 onmobile-flex-column">
                <div className="w49 pt0-5">
                    <div className="dashed-container">
                        <div className="p1">Here a classic container with border radius, with dashed border.</div>
                    </div>
                </div>
                <div className="w49 aligncenter flex-self-vcenter">
                    <pre className="language-markup">
                        <code>
                            &lt;div className="dashed-container"&gt; &lt;div className="p1"&gt; Here a classic container
                            with border radius, with dashed border. &lt;/div&gt; &lt;/div&gt;
                        </code>
                    </pre>
                </div>
            </div>

            <div className="flex flex-spacebetween mb2 onmobile-flex-column">
                <div className="w49 pt0-5">
                    <div className="shadow-container">
                        <div className="p1">Here a shadowed container. For form, etc.</div>
                    </div>
                </div>
                <div className="w49 aligncenter flex-self-vcenter">
                    <pre className="language-markup">
                        <code>
                            &lt;div className="shadow-container"&gt; &lt;div className="p1"&gt; Here a shadowed
                            container. For form, etc. &lt;/div&gt; &lt;/div&gt;
                        </code>
                    </pre>
                </div>
            </div>
        </div>

        <div id="domain-breadcrumb" className="container-section-sticky container-section-sticky--fullwidth">
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
                    <pre className="language-markup">
                        <code>
                            &lt;ul className="breadcrumb-container unstyled inline-flex pl0-5 pr0-5"&gt; &lt;li
                            className="breadcrumb-item"&gt; &lt;button type="button"
                            className="breadcrumb-button"&gt;Domain&lt;/button&gt; &lt;/li&gt; &lt;li
                            className="breadcrumb-item"&gt; &lt;button type="button" className="breadcrumb-button"{' '}
                            <strong>disabled aria-current="step</strong>"&gt;Addresses&lt;/button&gt; &lt;/li&gt; …
                            &lt;/ul&gt;
                        </code>
                    </pre>
                </div>
            </div>
        </div>

        <div id="info-panels" className="container-section-sticky container-section-sticky--fullwidth">
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
                                        Domain.{' '}
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
                                        Domain.{' '}
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
                    <pre className="language-markup">
                        <code>
                            &lt;div className="<strong>information-panel bordered-container relative</strong>"&gt;
                            &lt;div className="<strong>information-panel-image flex bg-global-light</strong>"&gt;
                            &lt;svg viewBox="0 0 16 16" className="icon-16p <strong>mauto</strong>" role="img"
                            aria-hidden="true" focusable="false"&gt; &lt;use xlinkHref="#
                            <strong>shape-email-address</strong>"&gt;&lt;/use&gt; &lt;svg&gt; &lt;/div&gt; &lt;div
                            className="<strong>information-panel-content</strong>"&gt; &lt;p&gt;Go to the User
                            Settings…&lt;/p&gt; &lt;p className="aligncenter"&gt; &lt;button type="button"
                            className="pm-button-blue"&gt;Wouhou!&lt;/button&gt; &lt;/p&gt; &lt;/div&gt; &lt;/ul&gt;
                        </code>
                    </pre>
                </div>
            </div>
        </div>

        <div id="info-blocks" className="container-section-sticky container-section-sticky--fullwidth">
            <h2>Information block</h2>

            <div className="flex flex-spacebetween mb2 onmobile-flex-column">
                <div className="w49 pt0-5">
                    <div className="block-info-standard">
                        Here a block with important information. <br />
                        Lorem ipsum dolor si amet.
                    </div>
                </div>
                <div className="w49 aligncenter flex-self-vcenter">
                    <pre className="language-markup">
                        <code>
                            &lt;div className="<strong>block-info-standard</strong>"&gt; Here a block with important
                            information.&lt;br&gt; Lorem ipsum dolor si amet. &lt;/div&gt;
                        </code>
                    </pre>
                </div>
            </div>
            <div className="flex flex-spacebetween mb2 onmobile-flex-column">
                <div className="w49 pt0-5">
                    <div className="block-info-standard-error">
                        Here a block with important information. <br />
                        Lorem ipsum dolor si amet.
                    </div>
                </div>
                <div className="w49 aligncenter flex-self-vcenter">
                    <pre className="language-markup">
                        <code>
                            &lt;div className="<strong>block-info-standard-error</strong>"&gt; Here a block with
                            important information.&lt;br&gt; Lorem ipsum dolor si amet. &lt;/div&gt;
                        </code>
                    </pre>
                </div>
            </div>
            <div className="flex flex-spacebetween mb2 onmobile-flex-column">
                <div className="w49 pt0-5">
                    <div className="block-info-standard-warning">
                        Here a block with warning. <br />
                        Lorem ipsum dolor si amet.
                    </div>
                </div>
                <div className="w49 aligncenter flex-self-vcenter">
                    <pre className="language-markup">
                        <code>
                            &lt;div className="<strong>block-info-standard-warning</strong>"&gt; Here a block with
                            warning.&lt;br&gt; Lorem ipsum dolor si amet. &lt;/div&gt;
                        </code>
                    </pre>
                </div>
            </div>
            <div className="flex flex-spacebetween mb2 onmobile-flex-column">
                <div className="w49 pt0-5">
                    <div className="block-info-standard-success">
                        Here a block with success. <br />
                        Lorem ipsum dolor si amet.
                    </div>
                </div>
                <div className="w49 aligncenter flex-self-vcenter">
                    <pre className="language-markup">
                        <code>
                            &lt;div className="<strong>block-info-standard-success</strong>"&gt; Here a block with
                            success.&lt;br&gt; Lorem ipsum dolor si amet. &lt;/div&gt;
                        </code>
                    </pre>
                </div>
            </div>

            <div className="flex flex-spacebetween mb2 onmobile-flex-column">
                <div className="w49 pt0-5">
                    <div className="block-info">
                        Here a block with important information. <br />
                        Lorem ipsum dolor si amet.
                    </div>
                </div>
                <div className="w49 aligncenter flex-self-vcenter">
                    <pre className="language-markup">
                        <code>
                            &lt;div className="<strong>block-info</strong>"&gt; Here a block with important
                            information.&lt;br&gt; Lorem ipsum dolor si amet. &lt;/div&gt;
                        </code>
                    </pre>
                </div>
            </div>

            <div className="flex flex-spacebetween mb2 onmobile-flex-column">
                <div className="w49 pt0-5">
                    <div className="block-info-error">
                        Here a block with important information (errors). <br />
                        Lorem ipsum dolor si amet.
                    </div>
                </div>
                <div className="w49 aligncenter flex-self-vcenter">
                    <pre className="language-markup">
                        <code>
                            &lt;div className="<strong>block-info-error</strong>"&gt; Here a block with important
                            information.&lt;br&gt; Lorem ipsum dolor si amet. &lt;/div&gt;
                        </code>
                    </pre>
                </div>
            </div>

            <div className="flex flex-spacebetween mb2 onmobile-flex-column">
                <div className="w49 pt0-5">
                    <div className="block-info-warning">
                        Here a block with important information (warning). <br />
                        Lorem ipsum dolor si amet.
                    </div>
                </div>
                <div className="w49 aligncenter flex-self-vcenter">
                    <pre className="language-markup">
                        <code>
                            &lt;div className="<strong>block-info-warning</strong>"&gt; Here a block with important
                            information.&lt;br&gt; Lorem ipsum dolor si amet. &lt;/div&gt;
                        </code>
                    </pre>
                </div>
            </div>

            <div className="flex flex-spacebetween mb2 onmobile-flex-column">
                <div className="w49 pt0-5">
                    <div className="block-info-success">
                        Here a block with important information (success). <br />
                        Lorem ipsum dolor si amet.
                    </div>
                </div>
                <div className="w49 aligncenter flex-self-vcenter">
                    <pre className="language-markup">
                        <code>
                            &lt;div className="<strong>block-info-success</strong>"&gt; Here a block with important
                            information.&lt;br&gt; Lorem ipsum dolor si amet. &lt;/div&gt;
                        </code>
                    </pre>
                </div>
            </div>
        </div>

        <div id="details-summary" className="container-section-sticky container-section-sticky--fullwidth">
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
                    <pre className="language-markup">
                        <code>
                            &lt;details&gt; &lt;summary&gt;General&lt;/summary&gt; &lt;div className="mb1"&gt; Wow this
                            is cool. &lt;/div&gt; &lt;/details&gt; &lt;details&gt;
                            &lt;summary&gt;Particular&lt;/summary&gt; &lt;div className="mb1"&gt; Wow this is cool.
                            &lt;/div&gt; &lt;/details&gt; &lt;details open&gt; &lt;summary&gt;Contacts&lt;/summary&gt;
                            &lt;div className="mb1"&gt;Wow, this is cool and opened!&lt;/div&gt; &lt;/details&gt;
                        </code>
                    </pre>
                </div>
            </div>
        </div>

        <div id="figure-figcaption" className="container-section-sticky container-section-sticky--fullwidth">
            <h2>
                <code>figure</code>/<code>figcaption</code>
            </h2>

            <p>
                These tags are CSS-reseted, if you want to add <code>padding</code>, use helpers.
            </p>

            <div className="flex flex-spacebetween mb2 onmobile-flex-column">
                <div className="w49 pt0-5">
                    <figure role="group">
                        <img src="/assets/img/design-system-website/Protonmail_logo.svg" width="200" alt="Protonmail" />
                        <figcaption>This is the nice logo of of ProtonMail</figcaption>
                    </figure>
                </div>
                <div className="w49 aligncenter flex-self-vcenter">
                    <pre className="language-markup">
                        <code>
                            &lt;figure role="group"&gt; &lt;img src="…" alt="Protonmail" /&gt; &lt;figcaption&gt; This
                            is the nice logo of of ProtonMail &lt;/figcaption&gt; &lt;/figure&gt;
                        </code>
                    </pre>
                </div>
            </div>
        </div>
    </>
);

export default Containers;
