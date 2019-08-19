import React from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { ErrorBoundary } from 'react-components';
import { Colors, Typography, Buttons } from '../pages';

const Content = ({
    match: {
        params: { path }
    }
}) => (
    <div className="main flex-item-fluid">
        <div className="main-area--withToolbar js-main-area  reset4print scroll-smooth-touch">
            <div className="flex flex-reverse">
                <div className="main-area-content bg-white relative p2 flex-item-fluid">
                    <ErrorBoundary>
                        <Switch>
                            <Redirect exact from={`/${path}`} to={`/${path}/colors`} />
                            <Route path={`/${path}/colors`} component={Colors} />
                            <Route path={`/${path}/typography`} component={Typography} />
                            <Route path={`/${path}/buttons`} component={Buttons} />
                        </Switch>
                    </ErrorBoundary>
                </div>
            </div>
        </div>
    </div>
);

export default withRouter(Content);
