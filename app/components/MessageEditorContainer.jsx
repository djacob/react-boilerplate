import React from 'react';
import {connect} from 'react-redux';
import {setMessage} from '../ducks/message';
import MessageEditor from './MessageEditor';

@connect(state => ({}), {
    setMessage
})
export default class MessageEditorContainer extends React.Component {
    render() {
        return <MessageEditor setMessage={this.props.setMessage}/>;
    }
}