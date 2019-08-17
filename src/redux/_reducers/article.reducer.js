import { FETCH_ARTICLES, ADD_ARTICLES, GET_ARTICLE, DELETE_ARTICLES, CHANGE_VALUE, UPDATE_ARTICLE } from '../_actions/types';
// import {actions} from '../_actions';

const initialState = {
    articles: [],
    id: null,
    title: '',
    description: '',
    userId: null,
};

export default function articleReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_ARTICLES:
            return {
                ...state,
                articles: action.articles
            };
        case GET_ARTICLE:
            return {
                ...state,
                id: action.id,
                title: action.title,
                description: action.description,
                userId: action.userId
            };
        case ADD_ARTICLES:
            console.log('--- Esto para Adicionar --> ', action);
            return state;
        case UPDATE_ARTICLE:
            return state;
        case DELETE_ARTICLES:
            return state;
        case CHANGE_VALUE:
            return {
                ...state,
                [action.props]: action.value
            };
        default:
            return state
    }
}