import axios from 'axios';

function getAll(apiEndpoint) {
    return axios.get('http://localhost:3200/api/articles').then((res) => {
        return res;
    }).catch((err) => {
        console.log('Error in response');
        console.log(err);
    });
}

export const userService = {
    getAll
}   