import React, {Component} from 'react';

export default class Message extends Component {
  render(){
    console.log("message props:", this.props.messages);
    const messages = this.props.messages.map((message) => {
      console.log("props: ", this.props);
      return (
        <div className="message" key={message.id}>
          <span className="message-username">{message.username}</span>
          <span className="message-content">{message.content}</span>
        </div>
      )
      });
    return (
      <div>
        {messages}
      </div>
    );
  }
}
