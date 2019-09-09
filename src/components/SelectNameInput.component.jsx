import React from 'react';

import { Button, Input, Container, Row } from 'reactstrap';

const SelectNameInput = ({
  handleNameInputChange,
  inputValue,
  handleClickJoin,
}) => (
  <Container className='mt-5'>
    <Row>
      <Input
        className='col col-sm-6 col-md-4 ml-2'
        type='text'
        name='username'
        id='username'
        placeholder='Enter you nickname'
        autoComplete='off'
        onChange={handleNameInputChange}
      />
      <Button
        className='ml-2'
        onClick={handleClickJoin}
        color='primary'
        disabled={inputValue ? false : true}
      >
        Join chatroom
      </Button>
    </Row>
  </Container>
);

export default SelectNameInput;
