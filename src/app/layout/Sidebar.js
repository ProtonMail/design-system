import React from 'react';
import { withRouter } from 'react-router-dom';
import { NavMenu } from 'react-components';

const AppSidebar = () => (
    <div className="sidebar flex flex-column noprint" data-expanded={false}>
        <nav className="navigation mw100 flex-item-fluid scroll-if-needed mb1">
            <NavMenu
                list={[
                    { link: '/colors', text: 'Colors' },
                    { link: '/typography', text: 'Typography' },
                    { link: '/buttons', text: 'Buttons' },
                    { link: '/tables', text: 'Tables' },
                    { link: '/containers', text: 'Containers' }
                ]}
            />
        </nav>
    </div>
);

export default withRouter(AppSidebar);
