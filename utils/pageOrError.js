import Error from 'next/error';

export const pageOrError = (Component) => {
    const wrapped = (props) => {
        const { error } = props;
        if (error) {
            return <Error statusCode={error} />;
        } else {
            return <Component {...props} />;
        }
    };
    return wrapped;
};
