import React from 'react';
import { withRouter } from 'react-router-dom';
import { Sidebar } from 'react-components';

const AppSidebar = () => (
    <Sidebar
        list={[
            { link: '/colors', text: 'Colors' },
            { link: '/typography', text: 'Typography' },
            { link: '/buttons', text: 'Buttons' },
            { link: '/tables', text: 'Tables' }
        ]}
    />
);

export default withRouter(AppSidebar);
