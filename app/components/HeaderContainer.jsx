import React from 'react';
import {connect} from 'react-redux';
import {headerMessage} from '../selectors';
import Header from './Header';

@connect(state => ({
    message: headerMessage(state)
}), {})
export default class HeaderContainer extends React.Component {
    render() {
        return <Header message={this.props.message}/>;
    }
}