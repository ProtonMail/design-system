import React from 'react';
import {
    CustomScrollbars,
    Tabs,
    Wizard,
    StyledContainers,
    Breadcrumb,
    InformationPanels,
    InformationBlocks,
    DetailsSummary,
    Figure
} from './sections';

const Containers = () => (
    <>
        <div id="custom-scroll" className="container-section-sticky container-section-sticky--fullwidth">
            <CustomScrollbars />
        </div>

        <div id="tabs" className="container-section-sticky container-section-sticky--fullwidth">
            <Tabs />
        </div>

        <div id="wizard" className="container-section-sticky container-section-sticky--fullwidth">
            <Wizard />
        </div>

        <div id="containers" className="container-section-sticky container-section-sticky--fullwidth">
            <StyledContainers />
        </div>

        <div id="domain-breadcrumb" className="container-section-sticky container-section-sticky--fullwidth">
            <Breadcrumb />
        </div>

        <div id="info-panels" className="container-section-sticky container-section-sticky--fullwidth">
            <InformationPanels />
        </div>

        <div id="info-blocks" className="container-section-sticky container-section-sticky--fullwidth">
            <InformationBlocks />
        </div>

        <div id="details-summary" className="container-section-sticky container-section-sticky--fullwidth">
            <DetailsSummary />
        </div>

        <div id="figure-figcaption" className="container-section-sticky container-section-sticky--fullwidth">
            <Figure />
        </div>
    </>
);

export default Containers;
