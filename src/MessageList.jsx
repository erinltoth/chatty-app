import React, {Component} from 'react';
import Message from './Message.jsx';

export default class MessageList extends Component {
  render() {

  return (
    // Render dynamic message container
      <main className='messages'>
        <Message messages={this.props.messages} currentColour={this.props.currentColour} />
      </main>
    )
  }
}
 