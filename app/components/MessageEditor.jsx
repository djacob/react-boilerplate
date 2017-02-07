import React from 'react';

export default class MessageEditor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {message: ''};
    }

    render() {
        return (
          <div>
              <input value={this.state.message} onChange={this.messageChanged} placeholder="Hello World"/>
              <button onClick={this.setMessage}>Save</button>
          </div>
        );
    }

    messageChanged = (e) => {
      this.setState({message: e.target.value});
    };

    setMessage = () => {
        this.props.setMessage(this.state.message);
    };
}