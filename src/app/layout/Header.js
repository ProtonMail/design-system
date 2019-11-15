import React from 'react';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';
import { Logo } from '../components';

const Header = ({ search, onSearch }) => (
    <header className="header flex flex-nowrap reset4print">
        <Logo />

        <div className="searchbox-container relative flex-item-centered-vert noprint nomobile">
            <label htmlFor="global_search">
                <span className="sr-only">Search (not implemented)</span>
                <input
                    type="search"
                    id="global_search"
                    placeholder="Search (not implemented)"
                    className="pm-field w100 searchbox-field"
                />
            </label>
        </div>
    </header>
);

Header.propTypes = {
    search: PropTypes.string,
    onSearch: PropTypes.func,
    location: PropTypes.object
};

export default withRouter(Header);
