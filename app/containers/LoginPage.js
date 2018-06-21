import React, { Component } from 'react';
import Login from '../components/Login';

export default class LoginPage extends Component {
  handleSubmit = () => {
    this.props.history.replace('/consumers');
  }
  render() {
    return (
      <Login handleSubmit={this.handleSubmit} />
    );
  }
}