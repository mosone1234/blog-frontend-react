import React, { Component } from 'react';
import { articleAction } from '../../../redux/_actions/article.actions';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';

class Article extends Component {

    componentDidMount() {
        const { dispatch } = this.props;
        dispatch(articleAction.getArticles());
    }

    render() {
        const { articles } = this.props.articles;
        return (
            <div className="container">
                <div className="mb-4">
                    <Link to={`/admin/add-article`}>
                        <button className="btn btn-success">New Article</button>
                    </Link>
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
                                        <td>
                                            <Link to={`/admin/edit-article/${article.id}`} >
                                                <button type="buttom" className="btn btn-success">Detail article</button>
                                            </Link>
                                        </td>
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

export default withRouter(connect(mapStateToProps, null, null, {
    pure: false
})(Article));