import axios from 'axios';

export const articleService = {
    getAll,
    create,
    update,
    destroy,
    get
}

function getAll() {
    return axios.get('http://localhost:3200/api/articles').then((response) => {
        return response;
    }).catch((err) => {
        console.log('Error in response');
        console.log(err);
        throw (err);
    });
}

function get(id) {
    return axios.get('http://localhost:3200/api/articles/' + id).then((response) => {
        return response;
    }).catch((err) => {
        console.log('Error in response');
        console.log(err);
        throw (err);
    });
}

function create(article) {
    return axios.post('http://localhost:3200/api/articles', article).then((response) => {
        return response;
    }).catch((err) => {
        console.log('Error in response');
        console.log(err);
        throw (err);
    });
}

function update(article) {
    return axios.put('http://localhost:3200/api/articles', article).then((response) => {
        return response;
    }).catch((err) => {
        console.log('Error in response');
        console.log(err);
        throw (err);
    });
}

function destroy(id) {
    return axios.delete('http://localhost:3200/api/articles', id).then((response) => {
        return response;
    }).catch((err) => {
        console.log('Error in response');
        console.log(err);
        throw (err);
    });
}