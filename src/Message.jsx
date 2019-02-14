import React, {Component} from 'react';

export default class Message extends Component {
  render(){
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

{/* <div class="notification">
  <span class="notification-content">Anonymous1 changed their name to nomnom.</span>
</div> */}