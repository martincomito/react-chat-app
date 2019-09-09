import React from 'react';
import { Input } from 'reactstrap';

class RoomList extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div
          style={{
            height: '28rem',
            border: '1px solid #ced4da',
            borderRadius: '5px',
          }}
          className='mt-5'
          name='chat-text-area'
          id='chat-text-area'
        >
          {this.props.loggedUserName ? (
            <p className='mt-2 ml-3'>{`Welcome ${this.props.loggedUserName}!`}</p>
          ) : null}
        </div>
        <Input
          className='mt-2'
          type='text'
          placeholder='Write a message and press enter to submit'
        />
      </React.Fragment>
    );
  }
}

export default RoomList;
