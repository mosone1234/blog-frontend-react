import React, { Component } from 'react';
import { connect } from 'react-redux';
import { articleAction } from '../../_actions/article.actions';

class NewArticle extends Component {

    componentDidMount() {
        const { match: { params } } = this.props;
        console.log('Esto es el params --> ', params.id);
        if (params.id) {
            const { dispatch } = this.props;
            dispatch(articleAction.getArticle(params.id));
        } else {
            this.props.articles.title = '';
            this.props.articles.description = '';
            this.props.articles.id = null;
            this.props.articles.userId = null;
        }
    }

    handleChange = (prop) => (event) => {
        const { dispatch } = this.props;
        dispatch(articleAction.onChangeProps(prop, event));
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const { match: { params }, dispatch } = this.props;
        const data = {
            id: this.props.articles.id,
            title: this.props.articles.title,
            description: this.props.articles.description,
            userId: this.props.articles.userId,
        }
        if (params.id) {
            dispatch(articleAction.updateArticle(data));
        } else {
            console.log('---- mostrando la data Estees ek midmosmdomsodmso -- --> ', data);
            dispatch(articleAction.createArticle(data));
        }
    }

    render() {
        const { match: { params } } = this.props;
        console.log('------>>>>>>>> ', params.id);
        return (
            <div>
                <div>
                    <h5>
                        Added article
                    </h5>
                </div>
                <form onSubmit={this.handleSubmit}>
                    <div className="row">
                        <div className="col-md-12">
                            <input className="form-control" placeholder="title" value={this.props.articles.title} onChange={this.handleChange('title')}></input>
                        </div>
                        <div className="col-md-12">
                            <input className="form-control" placeholder="description" value={this.props.articles.description} onChange={this.handleChange('description')}></input>
                        </div>
                    </div>
                    <div className="mt-4">
                        <button className="btn-success" type="submit">Nuevo Articulo</button>
                    </div>
                </form>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return state
};

export default connect(mapStateToProps, null, null, {
    pure: false
})(NewArticle);