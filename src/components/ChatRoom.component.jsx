import React from 'react';
import RoomList from './RoomList.component';
import ConnectedUsers from './ConnectedUsers.component';

class ChatRoom extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      connectedUsers: [
        { name: 'Juan', id: '1' },
        { name: 'Pedro', id: '2' },
        { name: 'Lucas', id: '3' },
        { name: 'Paola', id: '4' },
        { name: 'Carlos', id: '5' },
        { name: 'Mauro', id: '6' },
        { name: 'Tomás', id: '7' },
        { name: 'Juana', id: '8' },
        { name: 'Cecilia', id: '9' },
        { name: 'Mariano', id: '10' },
      ],
    };
  }

  render() {
    return (
      <React.Fragment>
        <div style={{ width: '70%' }}>
          <RoomList loggedUserName={this.props.userLogged} />
        </div>
        <div style={{ width: '30%' }}>
          <ConnectedUsers connectedUsers={this.state.connectedUsers} />
        </div>
      </React.Fragment>
    );
  }
}

export default ChatRoom;
