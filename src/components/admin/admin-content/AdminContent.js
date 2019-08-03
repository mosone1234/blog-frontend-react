import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AdminContent extends Component {
    static propTypes = {
        body: PropTypes.object.isRequired
    }
    render() {
        const { body } = this.props;
        return (
            <div>
                {body}
            </div>
        );
    }

}

export default AdminContent;