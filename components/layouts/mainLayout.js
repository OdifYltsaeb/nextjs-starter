import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import SEO from '../seo';
import { childrenType } from '../../types/meta';
import NavBar from '../NavBar';

const MainLayout = ({ children }) => (
    <>
        <SEO key="header" />
        <ToastContainer />
        <header>
            <NavBar />
        </header>
        {children}
        <footer key="footer" className="border-t border-solid border-border p-7 mt-auto">
            <p>All rights reserved. Your company.</p>
        </footer>
    </>
);

MainLayout.propTypes = {
    children: childrenType.isRequired,
};

export default MainLayout;
