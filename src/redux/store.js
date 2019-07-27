import { createStore, combineReducers} from 'redux';
import articles from './_reducers/article.reducer';

const reducer = combineReducers({
    articles: articles
});

const store = createStore(reducer);

export default store;