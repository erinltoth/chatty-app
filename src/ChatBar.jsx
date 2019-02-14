import React, {Component} from 'react';
import { generateRandomId } from './utils.js';


export default class ChatBar extends Component {
  onSubmit = evt => {
    evt.preventDefault();
    const newMessage = {
      username: evt.target.elements.username.value,
      content: evt.target.elements.newMessage.value,
    };
    this.props.addNewMessage(newMessage);
    evt.target.elements.newMessage.value = "";
  };
  handleKeyPress = evt => {
    if(event.key == 'Enter') {
      const newUsername = evt.target.elements.username.value;
      this.props.addNewUser(newUsername);
    }
  };
  render() {
    return (
      <form onSubmit={this.onSubmit}>
      <footer className="chatbar">

      <input className="chatbar-username" defaultValue={this.props.currentUser} name="username" onKeyPress={this.handleKeyPress} />
        <input className="chatbar-message" defaultValue={this.props.contentValue} placeholder="Type a message and hit ENTER" name="newMessage" />
        <input type="submit" className="chatbar-button" />
      </footer> 
      </form>
    );
  }
}
