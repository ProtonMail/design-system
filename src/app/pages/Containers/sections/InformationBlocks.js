import React from 'react';
import { CodeExample } from '../../../components';

const InformationBlocks = () => (
    <>
        <h2>Information block</h2>

        {[
            <div key="standard" className="block-info-standard">
                Here a block with important information. <br />
                Lorem ipsum dolor si amet.
            </div>,
            <div key="standard-error" className="block-info-standard-error">
                Here a block with important information. <br />
                Lorem ipsum dolor si amet.
            </div>,
            <div key="standard-warning" className="block-info-standard-warning">
                Here a block with warning. <br />
                Lorem ipsum dolor si amet.
            </div>,
            <div key="standard-success" className="block-info-standard-success">
                Here a block with success. <br />
                Lorem ipsum dolor si amet.
            </div>,
            <div key="info" className="block-info">
                Here a block with important information. <br />
                Lorem ipsum dolor si amet.
            </div>,
            <div key="error" className="block-info-error">
                Here a block with important information (errors). <br />
                Lorem ipsum dolor si amet.
            </div>,
            <div key="warning" className="block-info-warning">
                Here a block with important information (warning). <br />
                Lorem ipsum dolor si amet.
            </div>,
            <div key="success" className="block-info-success">
                Here a block with important information (success). <br />
                Lorem ipsum dolor si amet.
            </div>
        ].map((block, index) => (
            <div key={index} className="flex flex-spacebetween mb2 onmobile-flex-column">
                <div className="w49 pt0-5">{block}</div>
                <div className="w49 aligncenter flex-self-vcenter">
                    <CodeExample render={false}>{block}</CodeExample>
                </div>
            </div>
        ))}
    </>
);

export default InformationBlocks;
