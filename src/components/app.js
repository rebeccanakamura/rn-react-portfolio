import React, { Component } from 'react';
import moment from "moment";

import PortfolioContainer from './portfolio-container'


export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <h2>Rebecca Nakamura Portfolio</h2>
        <PortfolioContainer />
        <div>
          {moment().format('MMMM Do YYYY, h:mm:ss a')}
        </div>
      </div>
    );
  }
}
