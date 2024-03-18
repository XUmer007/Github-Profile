import { Component } from 'react';
import { UserIcon } from './icons';

export default class Followers extends Component {
  constructor(props) {
    super(props);

    this.followers = this.convert(props.followers);
    this.following = this.convert(props.following);
  }

  // Convert number to human readable form
  convert(num) {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + 'M';
    } else if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'k';
    } else {
      return num;
    }
  }
  // Render the Component
  render() {
    return (
      <div id='follow'>
        <a href='/' className='link'>
          <UserIcon className='icon' />
          <span className='bold'>{this.followers}</span> followers
        </a>
        <a href='/' className='link'>
          <span className='bold'>{this.following}</span> following
        </a>
      </div>
    );
  }
}
