import React from 'react';
import { SimpleTabs } from 'react-components';
import { CodeExample } from '../../../components';

const Tabs = () => (
    <>
        <h2>Tabs</h2>

        <SimpleTabs
            tabs={[
                {
                    title: 'A tab',
                    content: <>Here the content of 1st tab</>
                },
                {
                    title: 'Disabled',
                    content: <>This tab is sad, it will maybe never be displayed.</>,
                    disabled: true
                },
                {
                    title: 'A tab',
                    content: <>Here the content of 3rd tab</>
                }
            ]}
        />

        <div className="flex flex-spacebetween mb2 onmobile-flex-column">
            <div className="w49 pt0-5">
                <ul>
                    <li>
                        Please note the link between tabs and tab panels using <code>aria-controls</code> and{' '}
                        <code>aria-labelledby</code>.
                    </li>
                    <li>
                        Please note the use of <code>role="tablist/presentation/tab/tabpanel"</code>.
                    </li>
                    <li>
                        A selected tab has <code>aria-selected="true"</code>, <code>aria-selected="false"</code> if not.
                    </li>
                    <li>
                        If you need a tab to be disabled, just add <code>disabled</code> attribute to the <code>a</code>
                        .
                    </li>
                </ul>
            </div>
            <div className="w49 aligncenter flex-self-vcenter">
                <CodeExample render={false}>
                    <SimpleTabs
                        tabs={[
                            {
                                title: 'A tab',
                                content: <>Here the content of 1st tab</>
                            },
                            {
                                title: 'Disabled',
                                content: <>This tab is sad, it will maybe never be displayed.</>,
                                disabled: true
                            },
                            {
                                title: 'A tab',
                                content: <>Here the content of 3rd tab</>
                            }
                        ]}
                    />
                </CodeExample>
            </div>
        </div>
    </>
);

export default Tabs;
