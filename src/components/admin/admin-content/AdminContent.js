import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from '../../../redux/_containers/_header/Header.container';

class AdminContent extends Component {
    static propTypes = {
        body: PropTypes.object.isRequired
    }
    render() {
        const { body } = this.props;
        return (
            <div className="container">
                <div>
                    <Header></Header>
                </div>
                <div>
                    {body}
                </div>
            </div>
        );
    }
}

export default AdminContent;