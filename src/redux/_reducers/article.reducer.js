import { FETCH_ARTICLES, ADD_ARTICLES, GET_ARTICLE, DELETE_ARTICLES } from '../_actions/types';
// import {actions} from '../_actions';

const initialState = {
    articles: [],
    id: '',
    title: '',
    description: ''
};

export default function articleReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_ARTICLES:
            return {
                ...state,
                articles: action.articles
            };
        case GET_ARTICLE:
            // console.log('-------------------->>>>>sdsd>>>>>>>esta es la accion wey ', action);
            // console.log('---este es el estado -->-------_>>>>>>>>>>>>>>>>>>>> ', state);
            return {
                ...state,
                id: action.id,
                title: action.title,
                description: action.description
            };
        case ADD_ARTICLES:
            return state;
        case DELETE_ARTICLES:
            return state;
        default:
            return state
    }
}