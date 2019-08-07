import { FETCH_ARTICLES, ADD_ARTICLES, GET_ARTICLE } from './types';
import { articleService } from '../_services';

export const articleAction = {
    getArticles,
    getArticle,
    createArticle
}

// show all articles

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

// Add article

function createArticle(article) {
    return async (dispatch) => {
        try {
            const response = await articleService.create(article);
            console.log(response.data);
            dispatch(addedArticle(Object.assign({}, response.data)));
        }
        catch (err) {
            console.log('Error');
            console.log(err);
            throw (err);
        }
    }
}

function addedArticle(article) {
    return {
        type: ADD_ARTICLES,
        article
    }
}

// Get article

function getArticle(id) {
    return async (dispatch) => {
        try {
            const response = await articleService.get(id);
            dispatch(fetchArticle(Object.assign({}, response.data)));
        } catch (error) {
            console.log('Error');
            console.log(error);
            throw (error);
        }
    }
}

function fetchArticle(article) {
    return {
        type: GET_ARTICLE,
        id: article.id,
        title: article.title,
        description: article.description
    }
}

// Update Article
// Delete article