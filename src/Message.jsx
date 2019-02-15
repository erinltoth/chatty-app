import React, {Component} from 'react';

export default class Message extends Component {
  render(){
    const messages = this.props.messages.map((message) => {
      console.log("props: ", this.props);
      switch(message.type) {
        case "incomingMessage": 
          return (
            <div className="message" key={message.id}>
              <span style={{color: this.props.currentColour}} className="message-username">{message.username}</span>
              <span className="message-content">{message.content}</span>
            </div>
          )
          break;
        case "incomingNotification":
            return (
              <div className="notification">
                <span className="notification-content">{message.oldUser} is now {message.username}</span>
              </div>
            )
            break;
      }
      });
    return (
      <div>
        {messages}
      </div>
    );
  }
}
 