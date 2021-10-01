import SEO from '../seo';
import { childrenType } from '../../types/meta';

const AuthLayout = ({ children }) => (
    <>
        <SEO />
        {children}
    </>
);

AuthLayout.propTypes = {
    children: childrenType.isRequired,
};

export default AuthLayout;
