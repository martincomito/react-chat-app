import React from 'react';
import { Container, Row } from 'reactstrap';
import Header from '../components/Header.component';
import LiveVisitors from '../components/LiveVisitors.component';
import PublicChat from '../components/PublicChat.component';
import ChatRoom from '../components/ChatRoom.component';

import { Route, Switch } from 'react-router-dom';

class Layout extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Container>
          <Row>
            <Switch>
              <Route path='/' exact component={PublicChat}></Route>
              <Route path='/chatroom' component={ChatRoom}></Route>
              <Route path='/livevisitors' component={LiveVisitors}></Route>
            </Switch>
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}

export default Layout;
