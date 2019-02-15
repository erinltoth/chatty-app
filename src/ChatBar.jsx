import React, {Component} from 'react';

export default class ChatBar extends Component {
  handleKeyPress = event => {
    if(event.key == 'Enter') {
      event.preventDefault();
      if(event.target.name == 'username') {
        if (event.target.value) {
          const newUsername = {
            type: 'postNotification',
            username: event.target.value,
            oldUser: this.props.currentUser
          };
          this.props.addNewUser(newUsername);
        } else {
          const newUsername = {
            type: 'postNotification',
            username: 'Anonymous',
            oldUser: this.props.currentUser
          };
          this.props.addNewUser(newUsername);
        }
      } else if (event.target.name == 'newMessage') {
        const newMessage = {
          type: 'postMessage',
          username: this.props.currentUser,
          content: event.target.value
        };
        this.props.addNewMessage(newMessage);
        event.target.value = '';
      }
    }
  };
  render() {
    return (
      <form>
      <footer className='chatbar'>
      <input className='chatbar-username' defaultValue={this.props.currentUser} placeholder='Your name (optional)' name='username' onKeyPress={this.handleKeyPress} />
      <input className='chatbar-message' defaultValue={this.props.contentValue} placeholder='Type a message and hit ENTER' name='newMessage' onKeyPress={this.handleKeyPress} />
      </footer> 
      </form>
    );
  }
}
