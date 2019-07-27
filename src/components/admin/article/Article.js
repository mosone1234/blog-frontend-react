import React, { Component } from 'react';
import API from '../../../server/api';

class Article extends Component {
    // constructor(props) {
        state = {
            articles: [],
        };
    // }

    showAllAticles() {
        API.get(`/articles`).then((res) => {
            console.log(res);
            console.log(res.data);
            const articles = res.data;
            this.setState({ articles });
        });
    }

    AddedArticle() {
        API.post(`/articles`, { })
    }

    render() {
        return (
            <div className="container">
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Title</th>
                            <th scope="col">Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.articles.map(article =>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>{article.title}</td>
                                    <td>{article.description}</td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Article;