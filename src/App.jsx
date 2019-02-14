import React, {Component} from 'react';
import ChatBar from './ChatBar.jsx';
import MessageList from './MessageList.jsx';


const Nav = () => {
  return (
    <nav className="navbar">
      <a href="/" className="navbar-brand">Chatty</a>
    </nav>
  )
}

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: "Bob",
      messages: [],
    }
    this.addNewMessage = this.addNewMessage.bind(this);
    this.addNewUser = this.addNewUser.bind(this);
  } 

  addNewMessage = (newMessage) => {
    this.socket.send(JSON.stringify(newMessage));
  }

  addNewUser = (newUsername) => {
    this.socket.send(JSON.stringify(newUsername));

  }

  componentDidMount() {
    this.socket = new WebSocket(`ws://${window.location.hostname}:3001`)
    this.socket.onopen = (event) => {
      console.log("Connected to server");
    };
    this.socket.onmessage = (event) => {
      const newMessage = JSON.parse(event.data);
      switch (newMessage.type) {
        case "incomingMessage":
          let allMessages = this.state.messages.concat(newMessage);
          this.setState({
            messages: allMessages
          });
          break;
        case "incomingNotification":
          let allNotifications = this.state.messages.concat(newMessage);
          this.setState({
            currentUser: newMessage.username,
            messages: allNotifications
          })
          break;
        default:
          throw new Error("Unknown event type" + data.type);
      }
    }
  }

  render() {
    return (
      <div>
        <Nav />
        <MessageList messages={this.state.messages} />
        <ChatBar currentUser={this.state.currentUser} addNewMessage={this.addNewMessage} addNewUser={this.addNewUser} />
      </div>
    );
  }
}
