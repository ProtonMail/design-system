import React from 'react';
import { CodeExample } from '../../../components';

const CustomScrollbars = () => (
    <>
        <h2>Custom scrollbars</h2>
        <div className="flex flex-spacebetween mb2 onmobile-flex-column">
            <div className="w49 pt0-5">
                <div className="bordered-container scroll-if-needed customScrollBar-container p1">
                    {[...Array(10)].map((_, i) => (
                        <div key={i}>A loong content lorem dolor ipsum</div>
                    ))}
                </div>
            </div>
            <div className="w49 aligncenter flex-self-vcenter">
                <CodeExample render={false}>
                    <div className="customScrollBar-container">…</div>
                </CodeExample>
            </div>
        </div>

        <p>
            The custom scrollbar will work on Chrome/Webkit browsers only. Other browsers will use their native
            scrollbars. For browsers/devices that have “hover” capabilities and precise pointers (mouse), custom
            scrollbar will appear only when hovering thanks to <code>@media (hover: hover) and (pointer: fine)</code>{' '}
            tweaks.
        </p>
    </>
);

export default CustomScrollbars;
