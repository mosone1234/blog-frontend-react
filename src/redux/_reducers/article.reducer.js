import { FETCH_ARTICLES } from '../_actions/types';
// import {actions} from '../_actions';

const initialState = {
    articles: []
};

export default function articleReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_ARTICLES:
            return {
                ...state,
                articles: action.articles
            };
        default:
            return state
    }
}