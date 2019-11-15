import React from 'react';
import { Icon } from 'react-components';
import { CodeExample } from '../components';

const Tables = () => (
    <>
        <h2>
            Style <code>simple-table</code>
        </h2>
        <table className="pm-simple-table noborder border-collapse">
            <caption className="sr-only">Invoices</caption>
            <thead>
                <tr>
                    <th scope="col">id</th>
                    <th scope="col">Amount</th>
                    <th scope="col">
                        Type
                        <button type="button">
                            <Icon name="info" className="fill-pm-blue ml0-5" />
                        </button>
                    </th>
                    <th scope="col">
                        Status
                        <a>
                            <Icon name="attention" className="fill-pm-blue ml0-5" />
                        </a>
                    </th>
                    <th scope="col">Date</th>
                    <th scope="col">Comment</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>123456</td>
                    <td>24 €</td>
                    <td>
                        Subscription
                        <button type="button">
                            <Icon name="info" className="fill-pm-blue ml0-5" />
                        </button>
                    </td>
                    <td>
                        <span className="badgeLabel-success mr0-5">active</span>
                        <span className="badgeLabel-blue mr0-5">default</span>
                        <span className="badgeLabel-grey">origin</span>
                    </td>
                    <td>16 Mar. 2018</td>
                    <td>Lorem ipsum</td>
                </tr>
                <tr>
                    <td>123456</td>
                    <td>24 €</td>
                    <td>Subscription</td>
                    <td>
                        <span className="badgeLabel-warning mr0-5">disabled</span>
                        <span className="badgeLabel-error">error</span>
                    </td>
                    <td>16 Mar. 2018</td>
                    <td>Dolor si amet</td>
                </tr>
            </tbody>
        </table>

        <p>
            Design rule: you may use small buttons/toggle/etc. in tables. <br />
            (for Status styles, have a look at <a href="status-labels.html">Status section</a>)
        </p>

        <p>
            Design rule: if the last column is an “action” one, the last column should be right-aligned. To do so,
            please add the modifier <code>pm-simple-table--has-actions</code> class to achieve it. Example:
        </p>

        <CodeExample>
            <table className="pm-simple-table noborder border-collapse pm-simple-table--has-actions">
                <caption className="sr-only">Invoices</caption>
                <thead>
                    <tr>
                        <th scope="col">id</th>
                        <th scope="col">Amount</th>
                        <th scope="col">
                            Type
                            <button type="button">
                                <Icon name="info" className="fill-pm-blue ml0-5" />
                            </button>
                        </th>
                        <th scope="col">
                            Status
                            <a>
                                <Icon name="attention" className="fill-pm-blue ml0-5" />
                            </a>
                        </th>
                        <th scope="col">Date</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>123456</td>
                        <td>24 €</td>
                        <td>
                            Subscription
                            <button type="button">
                                <Icon name="info" className="fill-pm-blue ml0-5" />
                            </button>
                        </td>
                        <td>
                            <span className="badgeLabel-success mr0-5">active</span>
                            <span className="badgeLabel-blue mr0-5">default</span>
                            <span className="badgeLabel-grey">origin</span>
                        </td>
                        <td>16 Mar. 2018</td>
                        <td>
                            <button type="button" className="pm-button pm-button--small">
                                Download
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <td>123456</td>
                        <td>24 €</td>
                        <td>Subscription</td>
                        <td>
                            <span className="badgeLabel-warning mr0-5">disabled</span>
                            <span className="badgeLabel-error">error</span>
                        </td>
                        <td>16 Mar. 2018</td>
                        <td>
                            <button type="button" className="pm-button pm-button--small">
                                Download
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </CodeExample>
    </>
);

export default Tables;
