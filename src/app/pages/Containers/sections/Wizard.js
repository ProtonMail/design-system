import React from 'react';
import { CodeExample } from '../../../components';

const wizardExample = (
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
);

const Wizard = () => (
    <>
        <h2>Wizard</h2>

        <div className="flex flex-spacebetween mb2 onmobile-flex-column">
            <div className="w49 pt0-5">
                <div className="wizard-container">{wizardExample}</div>
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
                        When a step is the current one, add <code>aria-current=&quot;step&quot;</code>.
                    </li>
                    <li>
                        When an element is completed, add <code>is-complete</code> class to it.
                    </li>
                    <li>
                        The last step can also have <code>is-complete</code> class on it (not displayed here but case is
                        possible).
                    </li>
                    <li>
                        You may use the modifier <code>wizard-container--noTextDisplayed</code> on{' '}
                        <code>wizard-container</code> to have the current step not displayed.
                    </li>
                    <li>Buttons are just provided to test :)</li>
                </ul>
            </div>
            <div className="w49 aligncenter flex-self-vcenter">
                <CodeExample render={false}>{wizardExample}</CodeExample>
            </div>
        </div>
    </>
);

export default Wizard;
