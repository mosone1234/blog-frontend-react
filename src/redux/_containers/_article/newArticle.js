import React, { Component } from 'react';
import { connect } from 'react-redux';
import { articleAction } from '../../_actions/article.actions';

class NewArticle extends Component {

    componentDidMount() {
        const { match: { params }, dispatch } = this.props;
        console.log(params.id);
        dispatch(articleAction.getArticle(params.id));
    }

    addedArticle() {

    }

    render() {
        const { articles } = this.props;
        console.log('Esto es o que imprime ----------_>>>>>>>>>>>> ', articles);
        return (
            <div>
                <div>
                    <button className="btn-success">Nuevo Articulo</button>
                </div>
                <form>
                    <div className="row">
                        <div className="col-md-12">
                            <input className="form-control" placeholder="title" value={this.props.articles.title}></input>
                        </div>
                        <div className="col-md-12">
                            <input className="form-control" placeholder="description" value={this.props.articles.description}></input>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return state
};

export default connect(mapStateToProps)(NewArticle);