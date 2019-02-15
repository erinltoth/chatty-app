
// Import React Component and necessary components
import React, {Component} from 'react';

import ChatBar from './ChatBar.jsx';
import MessageList from './MessageList.jsx';
import Nav from './Nav.jsx';


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: 'Anonymous',
      messages: [],
      userCount: ''
    }
    this.addNewMessage = this.addNewMessage.bind(this);
    this.addNewUser = this.addNewUser.bind(this);
  } 

  // Function to take in new message from users and send to server.
  addNewMessage = (newMessage) => {
    this.socket.send(JSON.stringify(newMessage));
  }

  // Function to take in new username from users and send to server.
  addNewUser = (newUsername) => {
    this.setState({
      currentUser: newUsername.username
    })
    this.socket.send(JSON.stringify(newUsername));
  }


// Function to handle events that occur on component mount.
  componentDidMount() {
    // Opens WebSocket connection
    this.socket = new WebSocket(`ws://${window.location.hostname}:3001`)
    this.socket.onopen = (event) => {
      console.log('Connected to server');
    };
    // Handle broadcasts from server
    this.socket.onmessage = (event) => {
      const newMessage = JSON.parse(event.data);
      switch (newMessage.type) {
        case 'incomingMessage': 
        // Handle new message content from user to be rendered for all users
          let allMessages = this.state.messages.concat(newMessage);
          this.setState({
            messages: allMessages
          });
          break;
        case 'incomingNotification':
        // Handle new notifications of username change from user to be rendered for all users
          let allNotifications = this.state.messages.concat(newMessage);
          this.setState({
            messages: allNotifications
          })
          break;
        case 'incomingUsers':
        // Handle update to user count to be rendered for all users
          this.setState({
            userCount: newMessage.userCount
          })
          break;
        case 'incomingColour':
        // Handle setState for new username colour.
          const newColour = newMessage.currentColour
            this.setState({
              userCount: newMessage.userCount,
              currentColour: newMessage.currentColour
            })
          return newColour;
        default:
          throw new Error('Unknown event type' + data.type);
      }
    }
    this.socket.onclose = (event) => {
      console.log('Client disconnected')
    };
  }
// Render components
  render() {
    return (
      <div>
        <Nav userCount={this.state.userCount} />
        <MessageList messages={this.state.messages} currentColour={this.state.currentColour} />
        <ChatBar currentUser={this.state.currentUser} addNewMessage={this.addNewMessage} addNewUser={this.addNewUser} />
      </div>
    );
  }
}
