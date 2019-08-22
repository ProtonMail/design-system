import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import 'prismjs';
import AppLayout from './layout';
import './prism.css';
import './app.scss';

export default () => (
    <Router>
        <AppLayout />
    </Router>
);
