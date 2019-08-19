import React from 'react';
import { Route } from 'react-router-dom';
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
        </>
    </Route>
);

export default AppLayout;
