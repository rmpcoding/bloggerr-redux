import { GET_ARTICLES, SET_LOADING } from '../constants/action-types';
import axios from 'axios';

export function getArticles() {
    return function (dispatch) {
        dispatch({ type: SET_LOADING, payload: true });
        return axios
            .get('https://jsonplaceholder.typicode.com/posts')
            .then((response) => {
                dispatch({
                    type: GET_ARTICLES,
                    payload: response.data,
                });
            })
            .catch((err) => {
                console.log(err.message);
            });
    };
}


export function getArticlesById(userId) {
    return function(dispatch) {
        
    }
}