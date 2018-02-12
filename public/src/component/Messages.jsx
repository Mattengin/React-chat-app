import React from 'react';

import Message from './Message';

class Messages extends React.Component {
  componentDidUpdate() {
    // There is a new message in the state, scroll to bottom of list
    const objDiv = document.getElementById('messageList');
    objDiv.scrollTop = objDiv.scrollHeight;
  }

  render() {
    // Loop through all the messages (state) and create message 
    const messages = this.props.messages.map((message, i) => {
        return (
            <div class="card w-25 py-auto">
  <div class="card-block">
    <h3 class="card-title"><Message
            key={i}
            username={message.username}
            message={message.message}
            fromMe={message.fromMe} /></h3>
    
    
  </div>
</div>
          
        );
      });

    return (
      <div className='messages' id='messageList'>
      <h3>Tyler:</h3>
      <p>it's lit</p>
      <h3>Carlton:</h3>
      <p>Please Stop</p>
        { messages }
      </div>
    );
  }
}

Messages.defaultProps = {
  messages: []
};

export default Messages;