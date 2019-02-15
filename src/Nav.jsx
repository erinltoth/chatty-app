import React, {Component} from 'react';

export default class Nav extends Component {
  render() {
    if (this.props.userCount > 1) {
      return (
        <nav className='navbar'>
          <div><a href='/' className='navbar-brand'>Chatty</a></div>
          <div className='user-count'>{this.props.userCount} users online</div>
        </nav>
        )
    } else {
      return (
        <nav className='navbar'>
          <div><a href='/' className='navbar-brand'>Chatty</a></div>
          <div className='user-count'>{this.props.userCount} user online</div>
        </nav>
        )
    }
    }
}