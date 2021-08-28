import { GET_ARTICLES, SET_LOADING } from '../constants/action-types';

const initialState = {
    articles: [],
    error: '',
    loading: false,
};

function rootReducer(state = initialState, action) {
    if (action.type === GET_ARTICLES) {
        console.log(action.payload);
        return Object.assign({}, state, { articles: action.payload });
    }
    if (action.type === SET_LOADING) {
        console.log(action.payload);
        return Object.assign({}, state, { loading: action.payload });
    }
    return state;
}

export default rootReducer;
