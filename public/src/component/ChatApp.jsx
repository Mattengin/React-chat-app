
import React from 'react';


import Messages from './Messages';
import ChatInput from './ChatInput';

class ChatApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { messages: [] };
    // have to bind this to eventlistiner
    this.sendHandler = this.sendHandler.bind(this);
    
   
  }

  sendHandler(message) {
    const messageObject = {
      username: this.props.username,
      message
    };

    // message box for me
    messageObject.fromMe = true;
    this.addMessage(messageObject);
  }

  addMessage(message) {
    // Append the message to the component state
    const messages = this.state.messages;
    messages.push(message);
    this.setState({ messages });
  }

  render() {
    return (
      <div className="container">
        <h1>Chat App</h1><div class="card">
  <div class="card-block">
    <h4 class="card-title"><Messages messages={this.state.messages} /></h4>
    
   
    
  </div>
</div>
      
        <ChatInput onSend={this.sendHandler} />
        
      </div>
    );
  }

}
ChatApp.defaultProps = {
  username:  'Anonymous'
};

export default ChatApp;