import React, { Component } from 'react';
import './ChatInput.scss';

class ChatInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      customerMessage: '',
    };
  }

  handleMessageChange = (e) => {
    this.setState({
      customerMessage: e.target.value,
    });
  };

  handleClickOnSendMessage = () => {
    this.props.updateCustomMessage(this.state.customerMessage);
    this.setState({
      customerMessage: '',
    });
  };

  render() {
    return (
      <footer className="ChatInput">
        <input type="text" value={this.state.customerMessage} onChange={this.handleMessageChange} />
        <button type="button" onClick={this.handleClickOnSendMessage}>
          Send
        </button>
      </footer>
    );
  }
}

export default ChatInput;
