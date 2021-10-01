import { HYDRATE } from 'next-redux-wrapper';

const SET_USER = 'state/SET_USER';
const CLEAR_USER = 'state/CLEAR_USER';

const initialState = {
    apiKey: 'ae3a942d-c770-409a-87fe-b3c5091011db',
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case HYDRATE: {
            return {
                ...state,
                ...action.payload.auth,
            };
        }

        case SET_USER: {
            return {
                ...action.data,
            };
        }

        case CLEAR_USER: {
            return initialState;
        }

        default:
            return state;
    }
}

export const isAuthenticated = (state) => state.auth.isAuthenticated; // does nothing for now. Just serves as an example

export const getToken = (state) => state.auth.apiKey;
