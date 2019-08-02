import { FETCH_ARTICLES } from './types';
import { articleService } from '../_services';

export const articleAction = {
    getArticles
}

function getArticles() {
    return async (dispatch) => {
        try {
            const response = await articleService.getAll();
            console.log(response.data);
            dispatch(articlesList(Array.from(response.data.articles.rows)));
        }
        catch (err) {
            console.log('Error');
            console.log(err);
            throw (err);
        }
    }
}

function articlesList(articles) {
    return {
        type: FETCH_ARTICLES,
        articles
    }
}