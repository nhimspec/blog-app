import React from 'react';
import { Route } from 'react-router-dom';

import Header from './common/Header';
import Content from './common/Content';
import Footer from './common/Footer';

const Layout = () => [
    <Route
        key='header'
        path='/'
        render={(props) => <Header logo='images/logo.png' />}
    />,
    <Content key='content' />,
    <Route key='footer' path='/' component={Footer} />
];

export default Layout;
