import React, { Component } from 'react';
import { articleAction } from '../../../redux/_actions/article.actions';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import NewArticle from '../../../redux/_containers/_article/newArticle';

class Article extends Component {

    componentDidMount() {
        const { dispatch } = this.props;
        dispatch(articleAction.getArticles());
    }

    render() {
        const { articles } = this.props.articles;
        return (
            <div className="container">
                <div>
                    <NewArticle></NewArticle>
                </div>
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
                            articles.map((article) => {
                                return (
                                    <tr key={article.id}>
                                        <th scope="row">1</th>
                                        <td>{article.title}</td>
                                        <td>{article.description}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        articles: state.articles
    };
}

export default withRouter(connect(mapStateToProps)(Article));