import axios from 'axios';

export const userervice = {
    getAll
}

function getAll() {
    return axios.get('http://localhost:3000/api/articles').then(
        (response) => {
            return response;
        }).catch((err) => {
            console.log('Error in response');
            console.log(err);
        });
}
