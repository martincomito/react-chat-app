import React from 'react';
import SelectNameInput from './SelectNameInput.component';
import ChatRoom from './ChatRoom.component';

class PublicChat extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      isLogged: false,
      isDisabled: true,
    };
  }

  handleNameInputChange = event => {
    this.setState({ inputValue: event.target.value }, () =>
      console.log(this.state.inputValue)
    );
  };

  handleClickJoin = () => {
    if (this.state.isDisabled) {
      this.setState({ isLogged: true }, () => console.log(this.state.isLogged));
    }
  };

  render() {
    return this.state.isLogged ? (
      <ChatRoom userLogged={this.state.inputValue} />
    ) : (
      <SelectNameInput
        handleNameInputChange={this.handleNameInputChange}
        handleClickJoin={this.handleClickJoin}
        inputValue={this.state.inputValue}
      />
    );
  }
}

export default PublicChat;
