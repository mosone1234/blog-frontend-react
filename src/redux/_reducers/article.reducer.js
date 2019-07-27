import { FETCH_ARTICLES } from '../_actions/types';
// import {actions} from '../_actions';

const initialState = {
    title: '',
    decription: '',
};


export default function articleReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_ARTICLES:
            return {
                ...state,
                article: action.article
            }
        default:
            return state;
    }
}