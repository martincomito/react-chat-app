import React from 'react';
import { Container, Row } from 'reactstrap';
import Header from './components/Header.component';
import LiveVisitors from './components/LiveVisitors.component';

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Container>
          <Row>
            <LiveVisitors />
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}

export default App;
