import { FETCH_ARTICLES } from './types';
import { userService } from '../_services';

export const articleAction = {
    getArticles
}

getArticles = () => {
    return (dispatch) => {
        userService.getAll().then((res) => {
            console.log(res);
            dispatch(articlesList(res.data));
        }).catch((err) => {
            console.log('Error');
            console.log(err);
        });
    }
}

articlesList = (articles) => {
    return {
        type: FETCH_ARTICLES,
        articles
    }
}