import axios from 'axios';

function getAll() {
    return axios.get('http://localhost:3200/api/articles').then((response) => {
        return response;
    }).catch((err) => {
        console.log('Error in response');
        console.log(err);
    });
}

export const articleService = {
    getAll
}