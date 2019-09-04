import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Layout from './containers/layout';

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <BrowserRouter>
          <Layout />
        </BrowserRouter>
      </React.Fragment>
    );
  }
}

export default App;
