import React from 'react';
import { connect } from 'react-redux';

function ArticleList({ articles }) {
    if (!articles.length) {
        return (
            <div>
                No articles
            </div>
        )
    } else {
        return (
            <div>
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
                            articles.map((article) =>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>{article.title}</td>
                                    <td>{article.description}</td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
                {/* {articles.map(article => {
                    return (
                        <Article article={article} key={article.id} />
                    )
                })} */}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        articles: state.articles
    }
}

export default connect(
    mapStateToProps
)(ArticleList);
