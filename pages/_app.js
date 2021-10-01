import React from 'react';

import { wrapper } from '../stores';

import '../styles/globals.css';
import MainLayout from '../components/layouts/mainLayout';
import AuthLayout from '../components/layouts/authLayout';

const layouts = {
    default: MainLayout,
    auth: AuthLayout,
};

// eslint-disable-next-line react/prop-types
function PortalApp({ Component, pageProps }) {
    // eslint-disable-next-line react/prop-types
    const { layout } = Component;

    switch (layout) {
        case 'auth':
            return React.createElement(layouts.auth, null, <Component {...pageProps} />);
        default:
            return React.createElement(layouts.default, null, <Component {...pageProps} />);
    }
}

export default wrapper.withRedux(PortalApp);
