import React, { Component } from 'react';

import PropTypes from 'prop-types';

export default class UserComponent extends Component {
    static propTypes = {
        body: PropTypes.object.isRequired
    };
    render() {
        const { body } = this.props;
        return (
            <div className="Content">
                {body}
            </div>
        );
    }
}