import React from 'react';
import { CodeExample } from '../../../components';

const StyledContainers = () => {
    return (
        <>
            <h2>Container with border/shadow</h2>

            {[
                <div key={1} className="bordered-container">
                    <div className="p1">Here a classic container. For form, etc.</div>
                </div>,
                <div key={2} className="bordered-container p1 mt0-5">
                    This container has no padding/margin by default. You have to add them.
                    <div className="bordered-container p1 mt1">It can be nested</div>
                    <div className="bordered-container p1 mt1">several times</div>
                </div>,
                <div key={3} className="border-bottom">
                    <div className="p1">The same container, but only with bottom border.</div>
                </div>,
                <div key={4} className="border-bottom border-bottom--dashed">
                    <div className="p1">The same container with the same bottom border, but dashed.</div>
                </div>,
                <div key={5} className="bordered">
                    <div className="p1">Here a classic container without border radius. For special cases, etc.</div>
                </div>,
                <div key={6} className="dashed">
                    <div className="p1">Here a classic container without border radius, with dashed border.</div>
                </div>,
                <div key={7} className="dashed-container">
                    <div className="p1">Here a classic container with border radius, with dashed border.</div>
                </div>,
                <div key={8} className="shadow-container">
                    <div className="p1">Here a shadowed container. For form, etc.</div>
                </div>
            ].map((container, index) => (
                <div key={index} className="flex flex-spacebetween mb2 onmobile-flex-column">
                    <div className="w49 pt0-5">{container}</div>
                    <div className="w49 aligncenter flex-self-vcenter">
                        <CodeExample render={false}>{container}</CodeExample>
                    </div>
                </div>
            ))}
        </>
    );
};

export default StyledContainers;
