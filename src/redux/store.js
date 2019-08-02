import { createStore, combineReducers, applyMiddleware } from 'redux';
import articles from './_reducers/article.reducer';
import thunk from 'redux-thunk';

const reducer = combineReducers({
    articles: articles
});

const store = createStore(reducer, applyMiddleware(thunk));

export default store;