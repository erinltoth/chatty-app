import React, {Component} from 'react';
import { generateRandomId } from './utils.js';


export default class ChatBar extends Component {
  onSubmit = evt => {
    evt.preventDefault();
    const newMessage = {
      username: evt.target.elements.username.value,
      content: evt.target.elements.newMessage.value,
      id: generateRandomId(1, 62),
    };
    this.props.addNewMessage(newMessage);
    evt.target.elements.newMessage.value = "";
  };
  render() {
    return (
      <form onSubmit={this.onSubmit}>
      <footer className="chatbar">

      <input className="chatbar-username" defaultValue={this.props.currentUser.name} name="username" />
        <input className="chatbar-message" placeholder="Type a message and hit ENTER" name="newMessage" />
        <input type="submit" className="chatbar-button" />
      </footer> 
      </form>
    );
  }
}
