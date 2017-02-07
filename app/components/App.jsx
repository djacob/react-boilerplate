import React from 'react';
import Header from './HeaderContainer';
import MessageEditor from './MessageEditorContainer';

export default class App extends React.Component {
    render() {
        return (
            <div>
                <Header/>
                <hr/>
                <MessageEditor/>
            </div>
        );
    }
}