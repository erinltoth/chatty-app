import React, {Component} from 'react';


export default class ChatBar extends Component {
  // onSubmit = evt => {
  //   evt.preventDefault();
  //   const newMessage = {
  //     type: "postMessage",
  //     username: evt.target.elements.username.value,
  //     content: evt.target.elements.newMessage.value,
  //   };
  //   this.props.addNewMessage(newMessage);
  //   evt.target.elements.newMessage.value = "";
  // };
  // handleKeyPress= evt => {
  //   if(event.key == 'Enter') {
  //     const newMessage = {
  //       type: "postMessage",
  //       username: this.props.currentUser,
  //       content: evt.target.elements.newMessage.value
  //     };
  //     this.props.addNewMessage(newMessage);
  //     evt.target.elements.newMessage.value = "";
  //   }
  // }
  handleKeyPress = event => {
    if(event.key == 'Enter') {
      event.preventDefault();
      if(event.target.name == "username") {
        if (event.target.value) {
          const newUsername = {
            type: "postNotification",
            username: event.target.value,
            oldUser: this.props.currentUser
          };
          this.props.addNewUser(newUsername);
        } else {
          const newUsername = {
            type: "postNotification",
            username: "Anonymous",
            oldUser: this.props.currentUser
          };
          this.props.addNewUser(newUsername);
        }
      } else if (event.target.name == "newMessage") {
        const newMessage = {
          type: "postMessage",
          username: this.props.currentUser,
          content: event.target.value
        };
        console.log("Message");
        this.props.addNewMessage(newMessage);
        event.target.value = "";
      }
      // const newUsername = {
      //   type: "postNotification",
      //   username: evt.target.elements.username.value
      // }
      // // const newUsername = evt.target.elements.username.value;
      // this.props.addNewUser(newUsername);
    }
  };
  render() {
    return (
      <form>
      <footer className="chatbar">
      <input className="chatbar-username" defaultValue={this.props.currentUser} name="username" onKeyPress={this.handleKeyPress} />
        <input className="chatbar-message" defaultValue={this.props.contentValue} placeholder="Type a message and hit ENTER" name="newMessage" onKeyPress={this.handleKeyPress} />
      </footer> 
      </form>
    );
  }
}
