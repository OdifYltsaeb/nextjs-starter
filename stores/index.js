import { createStore, applyMiddleware } from 'redux';
import { createWrapper } from 'next-redux-wrapper';
import { composeWithDevTools } from 'redux-devtools-extension';
// import thunkMiddleware from 'redux-thunk'; // this not really necessary atm, since we are not making any api requests
import reducers from './reducers';

const bindMiddleware = (middleware) => {
    if (process.env.NODE_ENV !== 'production') {
        return composeWithDevTools(applyMiddleware(...middleware));
    }
    return applyMiddleware(...middleware);
};

// const initStore = () => createStore(reducers, bindMiddleware([thunkMiddleware]));
const initStore = () => createStore(reducers, bindMiddleware([]));

export const wrapper = createWrapper(initStore);
