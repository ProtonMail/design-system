import React from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { ErrorBoundary } from 'react-components';
import { Colors, Typography, Buttons, Tables, Containers, Badges } from '../pages';

const Content = () => (
    <div className="main flex-item-fluid">
        <div className="main-area--withToolbar js-main-area  reset4print scroll-smooth-touch">
            <div className="flex flex-reverse">
                <div className="main-area-content bg-white relative p2 flex-item-fluid">
                    <ErrorBoundary>
                        <Switch>
                            <Redirect exact from="/" to="/colors" />
                            <Route path="/colors" component={Colors} />
                            <Route path="/typography" component={Typography} />
                            <Route path="/buttons" component={Buttons} />
                            <Route path="/tables" component={Tables} />
                            <Route path="/containers" component={Containers} />
                            <Route path="/badges" component={Badges} />
                        </Switch>
                    </ErrorBoundary>
                </div>
            </div>
        </div>
    </div>
);

export default withRouter(Content);
