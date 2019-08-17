import { FETCH_ARTICLES, ADD_ARTICLES, GET_ARTICLE, CHANGE_VALUE, UPDATE_ARTICLE } from './types';
import { articleService } from '../_services';
import { history } from '../../_helpers';

export const articleAction = {
    getArticles,
    getArticle,
    createArticle,
    onChangeProps,
    updateArticle
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
            history.push(`/admin/edit-article/${response.data.id}`);
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
        description: article.description,
        userId: article.userId
    }
}

// changeValueState 

function onChangeProps(props, event) {
    return async (dispatch) => {
        try {
            dispatch(handleOnChangeProps(props, event.target.value));
        } catch (error) {
            console.log('Error');
            console.log(error);
            throw (error);
        }
    }
}

function handleOnChangeProps(props, value) {
    console.log('------------>>> El protoripo --> ', props);
    console.log('El valor del evento ---> ', value);
    return {
        type: CHANGE_VALUE,
        props: props,
        value: value
    }
}

// Update Article

function updateArticle(data) {
    return async (dispatch) => {
        try {
            const response = await articleService.update(Object.assign({}, data));
            dispatch(handleUpdateArticle(response));
        } catch (error) {
            console.log('Error');
            console.log(error);
            throw (error);
        }
    }
}

function handleUpdateArticle(article) {
    return {
        type: UPDATE_ARTICLE,
        article
    }
}
// Delete article