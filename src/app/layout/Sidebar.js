import React from 'react';
import { withRouter } from 'react-router-dom';
import { Sidebar } from 'react-components';

const AppSidebar = ({
    match: {
        params: { path }
    }
}) => (
    <Sidebar
        list={[
            { link: `/${path}/colors`, text: 'Colors' },
            { link: `/${path}/typography`, text: 'Typography' },
            { link: `/${path}/buttons`, text: 'Buttons' }
        ]}
    />
);

export default withRouter(AppSidebar);
