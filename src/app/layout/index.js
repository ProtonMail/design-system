import React from 'react';
import { Route } from 'react-router-dom';
import { Icons } from 'react-components';
import Header from './Header';
import Sidebar from './Sidebar';
import Content from './Content';

const AppLayout = () => (
    <Route path="/:path">
        <>
            <Header />
            <div className="flex flex-nowrap">
                <Sidebar />
                <Content />
            </div>
            <Icons />
        </>
    </Route>
);

export default AppLayout;
