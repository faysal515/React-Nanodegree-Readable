import React, {Component} from 'react'
import logo from '../logo.svg';

export default class Home extends Component {
  render() {
    return (
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo"/>
        <h2>Project Readable - powered with React+Redux :)</h2>
      </div>
    )
  }
}