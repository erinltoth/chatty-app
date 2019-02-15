import React, {Component} from 'react';

export default class Message extends Component {
  render(){
    // Create dynamic message and notification objects
    const messages = this.props.messages.map((message) => {
      switch(message.type) {
        case 'incomingMessage': 
          return (
            <div className='message' key={message.id}>
              <span style={{color: this.props.currentColour}} className='message-username'>{message.username}</span>
              <span className='message-content'>{message.content}</span>
            </div>
          )
        case 'incomingNotification':
            return (
              <div className='notification'>
                <span className='notification-content'>{message.oldUser} is now {message.username}</span>
              </div>
            )
      }
      });
    return (
      <div>
        {messages}
      </div>
    );
  }
}
 