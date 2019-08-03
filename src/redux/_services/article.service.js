import axios from 'axios';

export const articleService = {
    getAll
}

function getAll() {
    return axios.get('http://localhost:3200/api/articles').then((response) => {
        return response;
    }).catch((err) => {
        console.log('Error in response');
        console.log(err);
    });
}
