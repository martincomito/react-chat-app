import React from 'react';

import axios from 'axios';
import openSocket from 'socket.io-client';
import { Table } from 'reactstrap';

const socket = openSocket('http://localhost:6700');
class LiveVisitors extends React.Component {
  state = {
    visitors: [],
  };

  componentDidMount() {
    axios.get('http://geoplugin.net/json.gp').then(response => {
      const {
        geoplugin_request,
        geoplugin_countryCode,
        geoplugin_city,
        geoplugin_region,
        geoplugin_countryName,
      } = response.data;
      const visitor = {
        ip: geoplugin_request,
        countryCode: geoplugin_countryCode,
        city: geoplugin_city,
        state: geoplugin_region,
        country: geoplugin_countryName,
      };

      socket.emit('new_visitor', visitor);

      socket.on('visitors', visitors => {
        this.setState({ visitors: visitors });
      });
    });
  }

  renderTableBody = () => {
    const { visitors } = this.state;
    return visitors.map((visitor, index) => {
      return (
        <tr key={index}>
          <td>{index + 1}</td>
          <td>{visitor.ip}</td>
          <td>
            <img
              alt={`${visitor.geoplugin_countryName}´s flag`}
              src={`https://www.countryflags.io/${visitor.countryCode}/flat/32.png`}
            />
          </td>
          <td>{visitor.city}</td>
          <td>{visitor.state}</td>
          <td>{visitor.country}</td>
        </tr>
      );
    });
  };

  render() {
    return (
      <React.Fragment>
        <h2>Live visitors</h2>
        <Table>
          <thead>
            <tr>
              <th>#</th>
              <th>IP</th>
              <th>Flag</th>
              <th>City</th>
              <th>State</th>
              <th>Country</th>
            </tr>
          </thead>
          <tbody>{this.renderTableBody()}</tbody>
        </Table>
      </React.Fragment>
    );
  }
}

export default LiveVisitors;
