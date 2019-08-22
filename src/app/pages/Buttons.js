import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Icon, Copy, classnames } from 'react-components';
import CodeExample from '../components/CodeExample';

const Buttons = ({
    match: {
        params: { path }
    }
}) => (
    <>
        <div id="button-states" className="container-section-sticky container-section-sticky--fullwidth">
            <h2>Button States</h2>

            <table className="noborder border-collapse">
                <caption className="sr-only">Standard buttons</caption>
                <thead>
                    <tr>
                        <th className="p1"></th>
                        <th scope="col" className="p1">
                            Default
                        </th>
                        <th scope="col" className="p1">
                            Hover/Focus
                        </th>
                        <th scope="col" className="p1">
                            Active
                        </th>
                        <th scope="col" className="p1">
                            Muted/Disabled
                        </th>
                        <th scope="col" className="p1 alignleft">
                            Class name
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row" className="p1 aligncenter">
                            Clear background
                        </th>
                        <td className="p1 aligncenter">
                            <button className="pm-button">Button</button>
                        </td>
                        <td className="p1 aligncenter">
                            <button className="pm-button is-hover">Button</button>
                        </td>
                        <td className="p1 aligncenter">
                            <button className="pm-button is-active">Button</button>
                        </td>
                        <td className="p1 aligncenter">
                            <button className="pm-button" disabled>
                                Button
                            </button>
                        </td>
                        <td className="p1 alignleft">
                            <code>.pm-button</code>
                            <Copy value=".pm-button" />
                        </td>
                    </tr>
                    <tr>
                        <th scope="row" className="p1 bg-global-grey color-global-light">
                            Dark background
                        </th>
                        <td className="p1 aligncenter bg-global-grey">
                            <button className="pm-button-dark">Button</button>
                        </td>
                        <td className="p1 aligncenter bg-global-grey">
                            <button className="pm-button-dark is-hover">Button</button>
                        </td>
                        <td className="p1 aligncenter bg-global-grey">
                            <button className="pm-button-dark is-active">Button</button>
                        </td>
                        <td className="p1 aligncenter bg-global-grey">
                            <button className="pm-button-dark" disabled>
                                Button
                            </button>
                        </td>
                        <td className="p1 alignleft">
                            <code>.pm-button-dark</code>
                            <Copy value=".pm-button-dark" />
                        </td>
                    </tr>
                </tbody>
            </table>

            <table className="noborder border-collapse">
                <caption className="sr-only">Blue buttons</caption>
                <thead className="nonvisible">
                    <tr>
                        <th></th>
                        <th scope="col" className="p1">
                            Default
                        </th>
                        <th scope="col" className="p1">
                            Hover/Focus
                        </th>
                        <th scope="col" className="p1">
                            Active
                        </th>
                        <th scope="col" className="p1">
                            Muted/Disabled
                        </th>
                        <th scope="col" className="p1 alignleft">
                            Class name
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row" className="p1 aligncenter">
                            Blue buttons
                        </th>
                        <td className="p1 aligncenter">
                            <button className="pm-button-blue">Button</button>
                        </td>
                        <td className="p1 aligncenter">
                            <button className="pm-button-blue is-hover">Button</button>
                        </td>
                        <td className="p1 aligncenter">
                            <button className="pm-button-blue is-active">Button</button>
                        </td>
                        <td className="p1 aligncenter">
                            <button className="pm-button-blue" disabled>
                                Button
                            </button>
                        </td>
                        <td className="p1 alignleft">
                            <code>.pm-button-blue</code>
                            <Copy value=".pm-button-blue" />
                        </td>
                    </tr>
                    <tr>
                        <th scope="row" className="p1 aligncenter">
                            Clear background
                        </th>
                        <td className="p1 aligncenter">
                            <button className="pm-button-blueborder">Button</button>
                        </td>
                        <td className="p1 aligncenter">
                            <button className="pm-button-blueborder is-hover">Button</button>
                        </td>
                        <td className="p1 aligncenter">
                            <button className="pm-button-blueborder is-active">Button</button>
                        </td>
                        <td className="p1 aligncenter">
                            <button className="pm-button-blueborder" disabled>
                                Button
                            </button>
                        </td>
                        <td className="p1 alignleft">
                            <code>.pm-button-blueborder</code>
                            <Copy value=".pm-button-blueborder" />
                        </td>
                    </tr>
                    <tr>
                        <th scope="row" className="p1 bg-global-grey color-global-light aligncenter">
                            Dark background
                        </th>
                        <td className="p1 aligncenter bg-global-grey">
                            <button className="pm-button-blueborder-dark">Button</button>
                        </td>
                        <td className="p1 aligncenter bg-global-grey">
                            <button className="pm-button-blueborder-dark is-hover">Button</button>
                        </td>
                        <td className="p1 aligncenter bg-global-grey">
                            <button className="pm-button-blueborder-dark is-active">Button</button>
                        </td>
                        <td className="p1 aligncenter bg-global-grey">
                            <button className="pm-button-blueborder-dark" disabled>
                                Button
                            </button>
                        </td>
                        <td className="p1 alignleft">
                            <code>.pm-button-blueborder-dark</code>
                            <Copy value=".pm-button-blueborder-dark" />
                        </td>
                    </tr>
                </tbody>
            </table>

            <table className="noborder border-collapse">
                <caption className="sr-only">Green buttons</caption>
                <thead className="nonvisible">
                    <tr>
                        <th></th>
                        <th scope="col" className="p1">
                            Default
                        </th>
                        <th scope="col" className="p1">
                            Hover/Focus
                        </th>
                        <th scope="col" className="p1">
                            Active
                        </th>
                        <th scope="col" className="p1">
                            Muted/Disabled
                        </th>
                        <th scope="col" className="p1 alignleft">
                            Class name
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row" className="p1 aligncenter">
                            Green buttons
                        </th>
                        <td className="p1 aligncenter">
                            <button className="pv-button-green">Button</button>
                        </td>
                        <td className="p1 aligncenter">
                            <button className="pv-button-green is-hover">Button</button>
                        </td>
                        <td className="p1 aligncenter">
                            <button className="pv-button-green is-active">Button</button>
                        </td>
                        <td className="p1 aligncenter">
                            <button className="pv-button-green" disabled>
                                Button
                            </button>
                        </td>
                        <td className="p1 alignleft">
                            <code>.pv-button-green</code>
                            <Copy value=".pm-button-green" />
                        </td>
                    </tr>
                    <tr>
                        <th scope="row" className="p1 aligncenter">
                            Clear background
                        </th>
                        <td className="p1 aligncenter">
                            <button className="pv-button-greenborder">Button</button>
                        </td>
                        <td className="p1 aligncenter">
                            <button className="pv-button-greenborder is-hover">Button</button>
                        </td>
                        <td className="p1 aligncenter">
                            <button className="pv-button-greenborder is-active">Button</button>
                        </td>
                        <td className="p1 aligncenter">
                            <button className="pv-button-greenborder" disabled>
                                Button
                            </button>
                        </td>
                        <td className="p1 alignleft">
                            <code>.pv-button-greenborder</code>
                            <Copy value=".pm-button-greenborder" />
                        </td>
                    </tr>
                    <tr>
                        <th scope="row" className="p1 bg-global-grey color-global-light aligncenter">
                            Dark background
                        </th>
                        <td className="p1 aligncenter bg-global-grey">
                            <button className="pv-button-greenborder-dark">Button</button>
                        </td>
                        <td className="p1 aligncenter bg-global-grey">
                            <button className="pv-button-greenborder-dark is-hover">Button</button>
                        </td>
                        <td className="p1 aligncenter bg-global-grey">
                            <button className="pv-button-greenborder-dark is-active">Button</button>
                        </td>
                        <td className="p1 aligncenter bg-global-grey">
                            <button className="pv-button-greenborder-dark" disabled>
                                Button
                            </button>
                        </td>
                        <td className="p1 alignleft">
                            <code>.pv-button-greenborder-dark</code>
                            <Copy value=".pm-button-greenborder-dark" />
                        </td>
                    </tr>
                </tbody>
            </table>

            <p>
                Note: except the <code>pm-button--link</code> alias/modifier, all <code>pm-button</code>s do not have
                any <code>text-decoration</code>, even when applied to <code>a</code> tag.
            </p>
            <p>
                The modifier <code>pm-button--noborder</code> may be applied to remove border in all cases.
            </p>

            <h2 className="mt2">Button with icon centered (code to come)</h2>

            <CodeExample>
                <button className="pm-button inline-flex">
                    <Icon name="twitter" size={100} className="flex-self-vcenter" />
                    <span className="flex-self-vcenter">Button 1</span>
                </button>

                <button className="pm-button">
                    <span className="inline-flex alignbottom">
                        <Icon name="twitter" size={25} className="flex-self-vcenter" />
                        <span className="flex-self-vcenter">Button 2</span>
                    </span>
                </button>

                <button className="pm-button inline-flex-vcenter">
                    <Icon name="twitter" size={25} />
                    <span>Button 3</span>
                </button>

                <button className="pm-button inline-row">
                    <span className="col alignmiddle">
                        <svg viewBox="0 0 16 16" className="icon-16p" role="img" aria-hidden="true" focusable="false">
                            <use xlinkHref="#shape-twitter"></use>
                        </svg>
                    </span>
                    <span className="col alignmiddle">Button 4</span>
                </button>
            </CodeExample>

            <h2 className="mt1">Button Sizes</h2>

            <p>
                Add <code>pm-button--large</code> or <code>pm-button--small</code> to the button:
            </p>
            <pre className=" language-css">
                <code>
                    &lt;button className="pm-button <strong>pm-button--large</strong>">Button&lt;/button>
                </code>
            </pre>

            <div className="flex flex-nowrap mb2 onmobile-flex-column">
                <span className="p1">
                    <button className="pm-button pm-button--large">Button</button>
                </span>
                <span className="p1">
                    <button className="pm-button pm-button">Button</button>
                </span>
                <span className="p1">
                    <button className="pm-button pm-button--small">Button</button>
                </span>
            </div>

            <div className="flex flex-nowrap mb2 onmobile-flex-column">
                <span className="p1">
                    <button className="pv-button-green pm-button--large">Button</button>
                </span>
                <span className="p1">
                    <button className="pv-button-green pm-button">Button</button>
                </span>
                <span className="p1">
                    <button className="pv-button-green pm-button--small">Button</button>
                </span>
            </div>

            <div className="flex flex-nowrap mb2 onmobile-flex-column">
                <span className="p1">
                    <button className="pm-button-blue pm-button--large">Button</button>
                </span>
                <span className="p1">
                    <button className="pm-button-blue pm-button">Button</button>
                </span>
                <span className="p1">
                    <button className="pm-button-blue pm-button--small">Button</button>
                </span>
            </div>
        </div>

        <div id="button-aliases" className="container-section-sticky container-section-sticky--fullwidth">
            <h2>Button Aliases (for ProtonMail)</h2>

            {['primary', 'link', 'error', 'warning', 'info', 'redborder'].map((alias) => (
                <>
                    <div className="flex flex-nowrap mb2 onmobile-flex-column">
                        <span className="p1 w200p">
                            <button
                                className={classnames([alias === 'link' && 'pm-button', `pm-button--${alias}`])}
                                disabled={alias === 'link'}
                            >
                                Button {alias} {alias === 'link' && '(disabled)'}
                            </button>
                        </span>
                        <span className="p1 flex-self-vcenter">
                            <code>.pm-button--{alias}</code>
                            <Copy value={`.pm-button--${alias}`} />
                        </span>
                    </div>
                </>
            ))}

            <p>
                If you need to have another element (than <code>button</code>) looking like a link, you can use the
                class <code>.link</code>.
            </p>
        </div>

        <div id="button-groups" className="container-section-sticky container-section-sticky--fullwidth">
            <h2>Button Groups</h2>
            <p>
                Add <code>pm-group-buttons</code> on the container and <code>pm-group-button</code> to each button:
            </p>

            <CodeExample render={false}>
                <div className="pm-group-buttons">
                    <button className="pm-group-button">button</button>
                    <button className="pm-group-button">button</button>
                    <button className="pm-group-button">button</button>
                    <button className="pm-group-button">button</button>
                </div>
            </CodeExample>

            <p>This will only add the “behaviour” for group, not the design. Examples, to achieve this: </p>

            <CodeExample className="mb1">
                <div className="pm-group-buttons">
                    <button className="pm-group-button pm-button-blueborder">button</button>
                    <button className="pm-group-button pm-button-blueborder">button</button>
                    <button className="pm-group-button pm-button-blueborder">button</button>
                    <button className="pm-group-button pm-button-blueborder">button</button>
                </div>
            </CodeExample>

            <h3 className="mt1">States classes</h3>
            <p>
                If needed, you have the classes <code>is-hover</code> or <code>is-active</code>, so to achieve this
                example:
            </p>

            <CodeExample className="mb2">
                <div className="pm-group-buttons">
                    <button className="pm-group-button pv-button-greenborder">button</button>
                    <button className="pm-group-button pv-button-greenborder is-active">button</button>
                    <button className="pm-group-button pv-button-greenborder">button</button>
                    <button className="pm-group-button pv-button-greenborder">button</button>
                </div>
            </CodeExample>

            <h3 className="mt1">Aligning buttons near button groups</h3>
            <p className="mt0">
                As button groups use flexbox, to avoid bad alignments*, please wrap the next button into a
                <code>div className="inline-flex ml1"</code>:
            </p>

            <CodeExample className="mb1">
                <div className="pm-group-buttons mb1">
                    <button className="pm-group-button pm-button-blueborder">button</button>
                    <button className="pm-group-button pm-button-blueborder">button</button>
                    <button className="pm-group-button pm-button-blueborder">button</button>
                    <button className="pm-group-button pm-button-blueborder">button</button>
                </div>

                <div className="inline-flex ml1">
                    <button className="pm-button pm-button--primary">button</button>
                </div>
            </CodeExample>

            <p>
                * <small>CSS is awesome.</small>
            </p>

            <h3 className="mt1">Modifier for buttons/icons</h3>
            <p>
                You may also use <code>.pm-button--for-icon</code> modifier, specially designed to adapt
                <code>padding</code> values for buttons that contains only an icon. Example:
            </p>

            <CodeExample tagsToSimplify={['svg']}>
                <div className="pm-group-buttons">
                    <button className="pm-group-button pm-button pm-button--for-icon pm-group-button">
                        <Icon name="folder" />
                    </button>
                    <button className="pm-group-button pm-button pm-button--for-icon pm-group-button">
                        <Icon name="label" />
                    </button>
                    <button className="pm-group-button pm-button pm-button--for-icon pm-group-button">
                        <Icon name="caret" />
                    </button>
                </div>
            </CodeExample>

            <h3 className="mt1">Loading button</h3>
            <p>
                For loading content, you may have a look at{' '}
                <Link to={`${path}/loading-content`}>loading content section</Link>.
            </p>
        </div>
    </>
);

export default withRouter(Buttons);
