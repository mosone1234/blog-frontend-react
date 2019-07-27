import React from 'react';
import { connect } from 'react-redux';

function ArticleList({ articles }) {
    if (!articles.length) {
        return (
            <div>
                No articles
            </div>
        )
    }
    return (
        <div>
            {articles.map(article => {
                return (
                    <Article article={article} key={article.id} />
                )
            })}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        articles: state.articles
    }
}

export default connect(
    mapStateToProps
)(ArticleList);
