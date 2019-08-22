import React from 'react';
import { Icons } from 'react-components';
import Header from './Header';
import Sidebar from './Sidebar';
import Content from './Content';

const AppLayout = () => (
    <>
        <Header />
        <div className="flex flex-nowrap">
            <Sidebar />
            <Content />
        </div>
        <Icons />
    </>
);

export default AppLayout;
